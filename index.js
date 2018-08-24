const {
  app, BrowserWindow,
} = require('electron');

let mainWindow;
// let sheetWindow;

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

// load app
app.on('ready', createMainWindow);
