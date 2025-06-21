const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            // preload: path.join(__dirname, 'preload.js') // Uncomment if you have preload.js
        }
    });

    // Correctly load the React build for production
    console.log('Trying to load:', path.join(__dirname, 'build', 'index.html'));
    mainWindow.loadFile(path.join(__dirname, 'index.html'))
      .catch(err => {
        console.error('Failed to load index.html:', err);
      });

    // Open DevTools for debugging
    mainWindow.webContents.openDevTools();
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
