function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  outputSpan: document.querySelector('.color'),
  randomizeBtn: document.querySelector('.change-color'),
  body: document.body,
};

refs.randomizeBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  event.preventDefault();
  const rndColor = getRandomHexColor();
  refs.body.style.backgroundColor = rndColor;
  refs.outputSpan.textContent = rndColor;
}
