const { ipcRenderer } = require('electron');

ipcRenderer.on('openSheet', (e, char) => {
  const par = document.createElement('p');
  par.textContent = char;
  document.appendChild(par);
});
