const DEFAULT_NAME = 'Anonymous';
const refs = {
  nameInput: document.querySelector('#name-input'),
  nameSpan: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', updateNameUI);

function updateNameUI() {
  refs.nameSpan.textContent =
    !refs.nameInput.value.trim().length ? DEFAULT_NAME : refs.nameInput.value.trim();
}
