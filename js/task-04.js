let counterValue = 0;

function decrValue() {
  counterValue -= 1;
  renewValueUI(counterValue);
}

function incValue() {
  counterValue += 1;
  renewValueUI(counterValue);
}

function renewValueUI(value) {
  refs.valueFld.textContent = value;
}

const refs = {
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incBtn: document.querySelector('[data-action="increment"]'),
  valueFld: document.querySelector('#value'),
};

renewValueUI(counterValue);

refs.decrBtn.addEventListener('click', decrValue);
refs.incBtn.addEventListener('click', incValue);
