let emailInput = document.querySelector('.email-input')

function newCustomer(){
    let email = emailInput.value
    validateEmail(email)

    if(validateEmail(email) === false){
        return document.querySelector('.email-input').value = "" ,alert('Put a valid email like: augusto@gmail.com')
    } else{
        localStorage.setItem("userEmail", email)
        return document.querySelector('.email-input').value = "", alert('Email saved successfully!')
    }
    
}

function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
 }
    