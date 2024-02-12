
// VALIDATION START

var errorList = {
    emptyuser : "Veillez renseignez votre nom",
    invaliduser : "Nom d'utilisateur incorrect",
    invalidemail : "L'email est peut-etre mal saisi<br>ex: (pcpro@gmail.com)",
    emptypassword : "Veillez saisir un mot de passe",
    invalidpassword : "Les mots de passe sont incorrects"
}

function validation() {
    var userName = document.getElementById('username').value;

    if (!userName) {
        document.querySelector('.user-message').innerHTML = errorList.emptyuser;
        document.querySelector('.user-message').style.color = "red";
        document.querySelector('div.username span').style.color = "red"; 
        document.getElementById('username').style.border = "3px solid red"; 
    }else {
        document.querySelector('div.username span').style.color = "";
        document.querySelector('.user-message').innerHTML = ""; 
        document.getElementById('username').style.border = "2px solid #888";
    }

    // Pour les passwords

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password2').value;

    if(password !== confirmPassword) {
        document.querySelector('.pass-message').innerHTML = errorList.invalidpassword;
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById('password2').style.border = "3px solid red";
        document.querySelector('.pass-message').style.color = "red";
        document.querySelector('div.password span').style.color = "red";
        document.querySelector('div.password2 span').style.color = "red";
    }
    else {
        document.querySelector('.pass-message').innerHTML = "";
        document.getElementById('password').style.border = "2px solid #888";
        document.getElementById('password2').style.border = "2px solid #888";
        document.querySelector('div.password span').style.color = "";
        document.querySelector('div.password2 span').style.color = "";
    }

    // Pour voir s'il y'a un password
    
    if (!password || !confirmPassword) {
        document.querySelector('.pass-message').innerHTML = errorList.emptypassword;
        document.querySelector('.pass-message').style.color = "red";
        document.getElementById('password').style.border = "3px solid red";
        document.getElementById('password2').style.border = "3px solid red";
        document.querySelector('div.password span').style.color = "red";
        document.querySelector('div.password2 span').style.color = "red";
    }

     // Pour l'email

     const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     var email = document.getElementById('email').value;

     if (!email !== "" && !pattern.test(email)) {
         document.querySelector('.email-message').innerHTML = errorList.invalidemail;
         document.querySelector('.email-message').style.color = "red";
         document.getElementById('email').style.border = "3px solid red";
         document.querySelector('div.email span').style.color = "red";
     }else {
         document.querySelector('.email-message').innerHTML = "";
         document.getElementById('email').style.border = "2px solid #888";
         document.querySelector('div.email span').style.color = "";
     }

    
}

// ----- ICONS SHOW & HIDE PASSWORD
function hideshow() {
    var istPresent = document.querySelector('.eyes1').classList.contains('fa-eye');

if (istPresent) {
    document.getElementById('icon1').classList.add('fa-eye-slash');
    document.getElementById('icon1').classList.remove('fa-eye');

    // Pour afficher le mot de passe
    document.getElementById('password').type = 'text';
    document.getElementById('password2').type = 'text';
}
else {
    document.getElementById('icon1').classList.add('fa-eye');
    document.getElementById('icon1').classList.remove('fa-eye-slash');

    // Pour afficher le mot de passe
    document.getElementById('password').type = 'password';
    document.getElementById('password2').type = 'password';
 }


}

// VALIDATION END

// CHANGEER DE THEMES (DEBUT)

function change1() {
    document.querySelector('main').style.background = "linear-gradient(to bottom, #ffffff87 50%, yellow )";
    document.querySelector('main').style.transition = "100s ease";
    document.querySelector('.img-bg').style.background ="url(./images/Flyer-Design-Ideas-To-Get-Inspired-768x439.jpg)";
    document.querySelector('.img-bg').style.backgroundSize = "cover";
    document.querySelector('.img-bg').style.transition = "1s";
    document.querySelector('div.first h1').style.color = "black";
    document.querySelector('div.theme h1').innerHTML = "<mark>smart m</mark> c'est des:<br>Designs professionnels <br><small>pcpro@gmail.com</small>";
    document.querySelector('div.theme h1').style.transition = "5.5s ease";
    document.querySelector('div.theme h1').style.background = "#413a3aaf";
}

function change2() {
    document.querySelector('main').style.background = "linear-gradient(to bottom, #ffffff87 50%, blue )";
    document.querySelector('main').style.transition = "100s";
    document.querySelector('.img-bg').style.background ="url(./images/31625-youtube_CvsuEkdsnBk.jpg)";
    document.querySelector('.img-bg').style.backgroundSize = "cover";
    document.querySelector('.img-bg').style.transition = "1s";
    document.querySelector('div.first h1').style.color = "#fff";
    document.querySelector('div.theme h1').innerHTML = "<mark>smart m</mark> c'est des:<br>Logiciels professionnels <br><small>pcpro@gmail.com</small>";
    document.querySelector('div.theme h1').style.transition = "5.6s ease";
    document.querySelector('div.theme h1').style.background = "#413a3a88";
}

function change3() {
    document.querySelector('main').style.background = "linear-gradient(to bottom, #ffffff87 50%, #000 )";
    document.querySelector('main').style.transition = "100s ease";
    document.querySelector('.img-bg').style.background = "url(./images/pngtree-web-development-concept-3d-illustrated-programming-and-coding-image_3766213.jpg)";
    document.querySelector('.img-bg').style.backgroundSize = "cover";
    document.querySelector('.img-bg').style.transition = "1s";
    document.querySelector('div.first h1').style.color = "white";
    document.querySelector('div.theme h1').innerHTML = "<mark>smart m</mark> c'est des:<br>pc ultra puissants <br><small>pcpro@gmail.com</small>";
    document.querySelector('div.theme h1').style.transition = "5.6s ease";
    document.querySelector('div.theme h1').style.background = "#413a3a88";
    document.querySelector('nav a:hover').style.boxShadow = "0 0 10px 0 #fff";
}


// CHANGEER DE THEMES (FIN)
>>>>>>> hw_freestyle
