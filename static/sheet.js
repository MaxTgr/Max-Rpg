const electron = require('electron');

const currentWindow = electron.remote.getCurrentWindow();
console.log(currentWindow.sheet.name);

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelectorAll('.tabs');
  const sel = document.querySelectorAll('select');

  M.FormSelect.init(sel);
  M.Tabs.init(el);
});
