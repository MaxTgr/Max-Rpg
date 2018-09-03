// const electron = require('electron');

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
