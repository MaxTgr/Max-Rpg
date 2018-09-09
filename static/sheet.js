const electron = require('electron');
const fs = require('fs');

const currentWindow = electron.remote.getCurrentWindow();
const sheetOwner = currentWindow.sheet.name;

function makeJson(formContent) {
  fs.writeFileSync(`${sheetOwner}.json`, JSON.stringify(formContent));
}

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelectorAll('.tabs');
  const sel = document.querySelectorAll('select');
  M.FormSelect.init(sel);
  M.Tabs.init(el);
});

document.querySelector('#hide-fixed').addEventListener('click', () => {
  const hideBtn = document.querySelector('#hide-fixed i');
  document.querySelectorAll('.hideable').forEach((e) => {
    e.classList.toggle('hidden');
  });
  document.querySelectorAll('.fixed-stats-main').forEach((e) => {
    e.classList.toggle('s4');
    e.classList.toggle('s5');
  });
  if (hideBtn.textContent === 'keyboard_arrow_up') {
    hideBtn.textContent = 'keyboard_arrow_down';
  } else {
    hideBtn.textContent = 'keyboard_arrow_up';
  }
});

document.querySelector('#fixedForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const formContent = { name: sheetOwner, data: {} };
  const inputs = document.querySelectorAll('.inputCollection');
  inputs.forEach((element) => {
    formContent.data[element.id] = element.value;
  });
  makeJson(formContent);
});
