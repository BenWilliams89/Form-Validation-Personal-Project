let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');


function validateName(){
    let name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Full Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){ // this code says if name doesn't include letters and 1 space it is wrong
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}



function validatePhone(){
    let phone = document.getElementById('').value;
}



function validateEmail(){
    let email = document.getElementById('').value;
}



function validateMessage(){
    let message = document.getElementById('').value;
}
