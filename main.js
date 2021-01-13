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
        let registrationError = document.createElement('div');
        registrationError.classList.add('form__error');
        wrapper.appendChild(registrationError);
        setTimeout(() => registrationError.remove(), 1500);

        let errorText = document.createElement('p');
        errorText.textContent = 'Вы ввели не все данные!';
        errorText.classList.add('error__text');
        registrationError.appendChild(errorText);
    } else {
        let registrationSuccess = document.createElement('div');
        registrationSuccess.classList.add('form__success');
        wrapper.appendChild(registrationSuccess);
        setTimeout(() => registrationSuccess.remove(), 2000);

        let successText = document.createElement('p');
        successText.textContent = 'Поздравляем! Вы успешно зарегистрированы';
        successText.classList.add('success__text');
        registrationSuccess.appendChild(successText);
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
        let successLogin = document.createElement('div');
        successLogin.classList.add('form-login__success');
        wrapper.appendChild(successLogin);
        setTimeout(() => successLogin.remove(), 3000);

        let loginText = document.createElement('p');
        let loginText2 = loginText.cloneNode(true);
        let loginText3 = loginText.cloneNode(true);
        let loginText4 = loginText.cloneNode(true);
        let loginText5 = loginText.cloneNode(true);

        loginText.textContent = 'Поздравляем! Вы успешно вошли';
        loginText.classList.add('login-success__text');
        successLogin.appendChild(loginText);

        loginText2.innerHTML = `Ваш логин: ${regLogin.value}`
        loginText.after(loginText2);
        successLogin.appendChild(loginText2);

        loginText3.innerHTML = `Ваш пароль: ${regPassword.value}`
        loginText.after(loginText3);
        successLogin.appendChild(loginText3);

        loginText4.innerHTML = `Ваше имя: ${regName.value}`
        loginText.after(loginText4);
        successLogin.appendChild(loginText4);

        loginText5.innerHTML = `Ваш возраст: ${regAge.value}`
        loginText.after(loginText5);
        successLogin.appendChild(loginText5);

        loginImg.style.display = 'block';
    } else {
        let failedLogin = document.createElement('div');
        failedLogin.classList.add('form-login__error');
        wrapper.appendChild(failedLogin);
        setTimeout(() => failedLogin.remove(), 2000);

        let failedLoginText = document.createElement('p');
        failedLoginText.textContent = 'Вы ввели неправильные данные, попробуйте снова.';
        failedLoginText.classList.add('login-error__text');
        failedLogin.appendChild(failedLoginText);
    }
}
