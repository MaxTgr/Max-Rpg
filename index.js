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

function createSheetWindow(isNew, id) {
  sheetWindow = new BrowserWindow({});

  sheetWindow.loadFile('./static/sheet.html');

  if (isNew || id === null) {
    mainWindow.webContents.send('sheet', null);
  } else {
    mainWindow.webContents.send('sheet', id);
  }

  // // Create the browser window.
  // mainWindow = new BrowserWindow({});

  // // and load the main.html of the app.
  // mainWindow.loadFile('./static/main.html');
  console.log('created!');
}

// catch newSheet command
ipcMain.on('newSheet', () => {
  createSheetWindow(true, null);
});

// load app
app.on('ready', createMainWindow);
