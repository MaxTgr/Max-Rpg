const { ipcRenderer } = require('electron');

ipcRenderer.on('sheet', (char) => {
  if (char != null) {
    // get the character data
  }
});
