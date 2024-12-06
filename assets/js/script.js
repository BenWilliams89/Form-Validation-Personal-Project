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
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; // places a check from fontawesome - stlee in css
    return true;
}



function validatePhone(){
    let phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if(phone.length !== 11) {
        phoneError.innerHTML = 'Phone no should be 11 digits';
        return false;
    }

    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}







function validateEmail(){
    let email = document.getElementById('contact-email').value;
}



function validateMessage(){
    let message = document.getElementById('contact-message').value;
}
