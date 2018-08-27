const {
  app, BrowserWindow, ipcMain,
} = require('electron');

let mainWindow;
let sheetWindow;

function createMainWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({});

  // and load the main.html of the app.
  mainWindow.loadFile('./static/main.html');

  // when main window is closed the entire app will be closed
  mainWindow.on('close', () => {
    app.quit();
  });
}

function createSheetWindow(isNew, char) {
  sheetWindow = new BrowserWindow({});

  sheetWindow.loadFile('./static/sheet.html');

  sheetWindow.sheet = { newChar: isNew, name: char };
}

// catch newSheet command
ipcMain.on('newSheet', () => {
  createSheetWindow(true, null);
});

ipcMain.on('openSheet', (e, name) => {
  createSheetWindow(false, name);
});

// load app
app.on('ready', createMainWindow);
