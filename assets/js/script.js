let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');


function validateName(){ // this runs when someone fills in the full name input
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



function validatePhone(){ // this runs when someone fills in the number input
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
        phoneError.innerHTML = 'only numbers allowed';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}




function validateEmail(){ // this runs when someone fills in the email input
    let email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email address required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}



function validateMessage(){ // this runs when someone fills in the message input
    let message = document.getElementById('contact-message').value;
    let required = 30; // sets the minimum amount of characters
    let left = required - message.length; // shows how many characters remaining 

    if(left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}
