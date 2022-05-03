(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const closeMenu1 = document.querySelector('.nav__links-1');
    const closeMenu2 = document.querySelector('.nav__links-2');
    const closeMenu3 = document.querySelector('.nav__links-3');
    const closeMenu4 = document.querySelector('.nav__links-4');
    
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    
    closeMenu1.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
    closeMenu2.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
    closeMenu3.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
    closeMenu4.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
})();