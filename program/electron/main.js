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
 
    mainWindow.loadFile('./electron/build/index.html');
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    mainWindow.webContents.on('did-fail-load', () => {
        console.log('did-fail-load');
        mainWindow.loadFile('./electron/build/index.html');
        // REDIRECT TO FIRST WEBPAGE AGAIN
          });

	mainWindow.setMenuBarVisibility(false);
}
Electron.app.on('ready', createWindow);

Electron.ipcMain.on('test', (ev, arg) => {
    console.log('recieved!');
});

Electron.ipcMain.on('data', (ev, arg) => {
    ev.returnValue = JSON.parse(fs.readFileSync(__dirname + '/dbs.json'));
});

Electron.ipcMain.on('new-standard', (ev, arg) => {
    const dataObj = JSON.parse(fs.readFileSync(__dirname + '/dbs.json'));
    dataObj[0][arg[0]] = arg[1];
    console.log(dataObj);
    fs.writeFileSync(__dirname + '/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('new standard added');
});

Electron.ipcMain.on('edit-standard', (ev, arg) => {
    const dataObj = JSON.parse(fs.readFileSync(__dirname + '/dbs.json'));
    delete dataObj[0][arg[0]];
    dataObj[0][arg[1][1]] = arg[1][0];
    fs.writeFileSync(__dirname + '/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('standard edited');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('delete-standard', (ev, arg) => {
    const dataObj = JSON.parse(fs.readFileSync(__dirname + '/dbs.json'));
    delete dataObj[0][arg];
    fs.writeFileSync(__dirname + '/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('standard deleted');
});

Electron.ipcMain.on('edit-activity', (ev, arg) => {
    let dataObj = JSON.parse(fs.readFileSync(__dirname + '/dbs.json'));
    console.log(arg);
    delete dataObj[1][arg.activity];
    for(let field in arg){
        if(field === null){
            return;
        }
    }
    dataObj[1][arg.id] = {
        name: arg.name,
        notes: arg.notes,
        unit: arg.unit,
        standards: arg.standards
    }
    fs.writeFileSync(__dirname + '/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('activity edited');
    ev.returnValue = 'done';
});

Electron.ipcMain.on('new-activity', (ev, arg) => {
    let dataObj = JSON.parse(fs.readFileSync(__dirname + '/dbs.json'));
    dataObj[1][arg.id] = {
        name: arg.name,
        notes: arg.notes,
        unit: arg.unit,
        standards: arg.standards
    }
    fs.writeFileSync(__dirname + '/dbs.json', JSON.stringify(dataObj, null, 2));
    console.log('activity created');
    ev.returnValue = 'done';
});