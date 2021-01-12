// Registration form

let regForm = document.getElementById('reg__form');
let regBtn = document.getElementById("reg__btn");
let regClose = document.querySelector('.reg__close');
let regSubmit = document.getElementById('reg__submit');
let regLogin = document.getElementById('registration-login');
let regPassword = document.getElementById('registration-password');
let regName = document.getElementById('registration-name');
let regAge = document.getElementById('registration-age');

// Login form

let loginForm = document.getElementById('login__form');
let loginBtn = document.getElementById('login__btn');
let loginClose = document.querySelector('.login__close');
let loginLogin = document.getElementById('login');
let loginPassword = document.getElementById('login-password');
let loginSubmit = document.getElementById('login__submit');
let loginImg = document.querySelector('.success__body');

// ===========================================================

regBtn.addEventListener ("click", regBlock);
regClose.addEventListener ("click", regNone);
loginBtn.addEventListener ("click", loginBlock);
loginClose.addEventListener ("click", loginNone);
regSubmit.addEventListener ("click", regDisplay);
loginSubmit.addEventListener ("click", logDisplay);

// ============================================================

function regBlock () {
    regForm.style.display = "block";
}

function regNone () {
    regForm.style.display = "none";
}

function loginBlock () {
    loginForm.style.display = "block";
}

function loginNone () {
    loginForm.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == regForm) {
        regForm.style.display = "none";
    } else if (event.target == loginForm ) {
        loginForm.style.display = "none";
    }
}

// ========================================================================================================= \\
// Вывод данных пользователя в массив
let regUsers = [];



function regDisplay () {
    let regUser = new User (regLogin.value, regPassword.value, regName.value, regAge.value);
    regUsers.push(regUser);
    console.log(regUsers);

    if (!regLogin.value || !regPassword.value || !regName.value || !regAge.value) {
        alert('Заполните все поля');  
    } else {
        alert('Поздравляю, вы успешно зарегистрированы!');
        regForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}
// Конструктор

function User (login, password, name, age) {
    this.login = login,
    this.password = password,
    this.name = name,
    this.age = age;
}

let logUsers = [];

function logDisplay () {
    let logUser = new User (loginLogin.value, loginPassword.value);
    if (loginLogin.value === regLogin.value && loginPassword.value === regPassword.value) {
        logUsers.push(logUser);
        alert(`Добро пожаловать в ваш личный кабинет' 
            Ваш логин: ${regLogin.value},
            Ваш пароль: ${regPassword.value},
            Ваше имя: ${regName.value},
            Ваш возраст: ${regAge.value}`);
            loginImg.style.display = 'block';
            
    } else {
        alert('Вы ввели неправильные данные');
    }
}
