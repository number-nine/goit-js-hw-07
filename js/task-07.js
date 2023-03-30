const refs = {
  rangeEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

adjustFontSize();

refs.rangeEl.addEventListener('input', adjustFontSize);

function adjustFontSize() {
  refs.textEl.style.fontSize = `${refs.rangeEl.value}px`;
}
