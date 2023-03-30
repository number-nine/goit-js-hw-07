const refs = {
  formEl: document.querySelector('.login-form'),
};


refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const formData = {
    email: email.value,
    password: password.value,
  };

  if (formData.email === '' || formData.password === '') {
    window.alert('Fields must be filled out');
  } else {
    console.log(formData);
    event.currentTarget.reset();
  }
}
