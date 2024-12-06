Useful Code for future reference:

- if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) = name does not include letters, one space and more letters (full name)

- if(!phone.match(/^[0-9]{11}$/)){ = number must be 0-9 and be 11 numbers (phone number)

- if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) { = email doesn't match this it will be invalid