function initMenu() {
    let btn = document.querySelector('.header__trigger');
    btn.addEventListener('click', function () {
        btn.classList.toggle('header__trigger--opened');
        btn.classList.toggle('header__trigger--closed');
        document.documentElement.classList.toggle('menu-open');
    });
}


export default initMenu;
