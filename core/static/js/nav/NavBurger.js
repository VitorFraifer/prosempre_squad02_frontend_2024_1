document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu');

    burgerMenu.addEventListener('click', function () {
        menu.classList.toggle('open');
    });

    menu.addEventListener('click', function (event) {
        if (!event.target.closest('.menu')) {
            menu.classList.remove('open');
        }
    });
});