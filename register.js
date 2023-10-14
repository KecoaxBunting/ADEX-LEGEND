function validate(){
    let fullName = document.getElementById("full-name").value 
    let address = document.getElementById("address").value 
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value 
    let password = document.getElementById("password").value 
    let confirmPassword = document.getElementById("confirmPassword").value
    let error = document.getElementById("error")
    

    checkName = true
    for(let i = 0; i<fullName.length; i++){
        if(fullName[i] == 1 || fullName[i] == 2 || fullName[i] == 3 || fullName[i] == 4 || fullName[i] == 5 || fullName[i] == 6 || fullName[i] == 7 || fullName[i] == 8 || fullName[i] == 9 || fullName[i] == 0){
            checkName = false
            break
        }
        if(fullName[i] == " "){
            continue;
        }
    }

    let email_valid = email.substring(email.indexOf("@"), email.length)

    if(fullName == "" || address == "" || username == "" || email == "" || password == "" || confirmPassword == ""){
        error.innerText = "Form must be completely filled"
        return false
    }

    else if(checkName == false){
        error.innerText = "Name cannot contain number"
        return false
    }

    else if(address.length < 25 || address.length > 200){
        error.innerText = "Address must have 25 until 200 character"
        return false
    }

    else if(username.length < 4){
        error.innerText = "Username must have minimum 4 character"
        return false
    }

    else if(email_valid != "@gmail.com"){
        error.innerText = "E-mail must contain @gmail.com"
        return false
    }

    else if(password.length < 7){
        error.innerText = "Password must have minimum 7 character"
    }

    else if(password != confirmPassword){
        error.innerText = "Password and confirm password don't match"
        return false
    }
}