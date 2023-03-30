function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controlsDiv: document.querySelector('#controls'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesArea: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateClick);
refs.destroyBtn.addEventListener('click', onDestroyClick);

function onCreateClick(event) {
  event.preventDefault();
  initContainerStyles();
  createBoxes(refs.controlsDiv.firstElementChild.value);
}

function createBoxes(amount) {
  let htmlString = '';
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    htmlString += `<div style="width:${size}px; height:${size}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  refs.boxesArea.innerHTML = htmlString;
}

function onDestroyClick(event) {
  event.preventDefault();
  destroyBoxes();
}

function destroyBoxes() {
  refs.boxesArea.innerHTML = '';
}

function initContainerStyles() {
  refs.boxesArea.style.display = 'flex';
  refs.boxesArea.style.flexWrap = 'wrap';
}
