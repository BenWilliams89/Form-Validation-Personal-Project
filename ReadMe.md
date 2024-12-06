![Image of the form](/assets/images/Screenshot%202024-12-06%20at%2013.27.22.png)

Useful Code for future reference:

- if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) = name does not include letters, one space and more letters (full name)

- if(!phone.match(/^[0-9]{11}$/)){ = number must be 0-9 and be 11 numbers (phone number)

- if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) { = email doesn't match this it will be invalid

- if(left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;

        this sets the character limit to 30 with a character countdown


-  function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000) // this makes the message dissapear after 3 seconds (3000 miliseconds)
        return false;
    }
}

    This checks all functions before submitting then displays a message that dissapears after 3 seconds