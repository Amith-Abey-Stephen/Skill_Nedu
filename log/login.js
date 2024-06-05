let togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.onclick = function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    if (togglePassword.classList.contains('fa-eye-slash')) {
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    } else {
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    }
};

// password is declared in line 2
const username = document.getElementById('username');
if( username==username)
    {
        console.log("username fine")
        if( password == password)
            {
                console.log("Password correct,user loged in");
            }
        
        else{
                console.log("Password Incorrect")
            }
    }

else{
    console.log("Username incorrect");
}


let logedin = false;
if(username==username && password == password )
    {
        logedin=true;
        console.log("Logedin")

        // navbar update code to be placed heree...
    }