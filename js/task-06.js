const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {

    if (inputRef.value.length === Number(inputRef.dataset.length)){
        if (inputRef.classList.contains('invalid')){
            inputRef.classList.replace('invalid', 'valid');
            return;
        } 
        if (!inputRef.classList.contains('valid')){
            inputRef.classList.add('valid');
        }
        
    } else {
        if (inputRef.classList.contains('valid')){
            inputRef.classList.replace('valid','invalid');
            return;
        } 
        if (!inputRef.classList.contains('invalid')){
            inputRef.classList.add('invalid');
        }
    }
});