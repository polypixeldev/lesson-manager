const Electron = require('electron');
//const isDev = require('electron-is-dev');   
//const path = require('path');
const fs = require('fs');
 
let mainWindow;
 
function createWindow() {
    mainWindow = new Electron.BrowserWindow({
        width:700,
        height:500,
        show: false,
        webPreferences: {
            preload: __dirname + '/preload.js'
        }
    });
    //const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
 
    mainWindow.loadFile(__dirname + '/index.html');
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    
    mainWindow.webContents.on('did-fail-load', () => {
        console.log('did-fail-load');
        mainWindow.loadFile(__dirname + '/index.html');
        // REDIRECT TO FIRST WEBPAGE AGAIN
          });
    
	mainWindow.setMenuBarVisibility(false);
}
Electron.app.on('ready', createWindow);

Electron.ipcMain.on('test', (ev, arg) => {
    console.log('recieved!');
});

Electron.ipcMain.on('data', (ev, arg) => {
    ev.returnValue = JSON.parse(fs.readFileSync('build/dbs.json'));
});

Electron.ipcMain.on('new-standard', (ev, arg) => {
    const dataObj = JSON.parse(fs.readFileSync('build/dbs.json'));
    dataObj[0][arg[0]] = arg[1];
    fs.writeFileSync('build/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('new standard added');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('edit-standard', (ev, arg) => {
    const dataObj = JSON.parse(fs.readFileSync('build/dbs.json'));
    delete dataObj[0][arg.standard];
    dataObj[0][arg.id] = arg.desc;
    fs.writeFileSync('build/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('standard edited');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('delete-standard', (ev, arg) => {
    const dataObj = JSON.parse(fs.readFileSync('build/dbs.json'));
    delete dataObj[0][arg];
    fs.writeFileSync('build/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('standard deleted');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('edit-activity', (ev, arg) => {
    if(arg.standards === null) arg.standards = [];
    let dataObj = JSON.parse(fs.readFileSync('build/dbs.json'));
    console.log(arg);
    delete dataObj[1][arg.activity];
    dataObj[1][arg.name] = {
        id: arg.id,
        notes: arg.notes,
        standards: arg.standards
    }
    fs.writeFileSync('build/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('activity edited');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('new-activity', (ev, arg) => {
    if(arg.standards === null) arg.standards = [];
    let dataObj = JSON.parse(fs.readFileSync('build/dbs.json'));
    dataObj[1][arg.name] = {
        id: arg.id,
        notes: arg.notes,
        standards: arg.standards
    }
    fs.writeFileSync('build/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('activity created');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('delete-activity', (ev, arg) => {
    let dataObj = JSON.parse(fs.readFileSync('build/dbs.json'));
    console.log(arg);
    delete dataObj[1][arg];
    fs.writeFileSync('build/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('activity deleted');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('new-unit', (ev, arg) => {
    let dataObj = JSON.parse(fs.readFileSync('build/dbs.json'));
    console.log(arg);
    dataObj[2][arg.name] = arg.weeks;
    fs.writeFileSync('build/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('unit created');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('edit-unit', (ev, arg) => {
    let dataObj = JSON.parse(fs.readFileSync('build/dbs.json'));
    console.log(arg);
    delete dataObj[2][arg.unit]
    dataObj[2][arg.name] = arg.weeks;
    fs.writeFileSync('build/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('unit edited');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('delete-unit', (ev, arg) => {
    let dataObj = JSON.parse(fs.readFileSync('build/dbs.json'));
    console.log(arg);
    delete dataObj[2][arg];
    fs.writeFileSync('build/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('unit deleted');
    ev.returnValue = 'done';
})