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