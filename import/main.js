function loginPage(event) {
    event.preventDefault();
    window.location = 'import/login/index.html';
}

function headerPage(event) {
    event.preventDefault();
    window.location = 'import/header/index.html';
}

function sidebarPage(event) {
    event.preventDefault();
    window.location = 'import/sidebar/index.html';
}

function footerPage(event) {
    event.preventDefault();
    window.location = 'import/footer/index.html';
}

function carouselPage(event) {
    event.preventDefault();
    window.location = 'import/carousel/index.html';
}

const login_button = document.getElementById("loginButton")
login_button.addEventListener('click', loginPage);

const header_button = document.getElementById("headerButton")
header_button.addEventListener('click', headerPage);

const sidebar_button = document.getElementById("sidebarButton")
sidebar_button.addEventListener('click', sidebarPage);

const footer_button = document.getElementById("footerButton")
footer_button.addEventListener('click', footerPage);

const carousel_button = document.getElementById("carouselButton")
carousel_button.addEventListener('click', carouselPage);