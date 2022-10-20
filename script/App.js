//  Login and register

if (document.querySelector('.header__navbar-item--registerAndlogin')) {
    const register = document.querySelector('.header__navbar-item--register');
    const login = document.querySelector('.header__navbar-item--login');
    const backModal = document.querySelectorAll('.auth-form__controls-back');
    const transferLogin = document.querySelector('.auth-form__switch-btn--login');
    const transterRegister = document.querySelector('.auth-form__switch-btn--register');
    // const 
    register.addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.auth-form-register').style.display = 'block';
    })

    backModal.forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelector('.modal').style.display = 'none';
            document.querySelector('.auth-form-register').style.display = 'none';
            document.querySelector('.auth-form-login').style.display = 'none';
        })
    })

    login.addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.auth-form-login').style.display = 'block';
    })

    transferLogin.addEventListener('click', () => {
        document.querySelector('.auth-form-register').style.display = 'none';
        document.querySelector('.auth-form-login').style.display = 'block';
    })

    transterRegister.addEventListener('click', () => {
        document.querySelector('.auth-form-login').style.display = 'none';
        document.querySelector('.auth-form-register').style.display = 'block';
    })

    document.querySelector('.modal').addEventListener('click', () => {
        if (document.querySelector('.auth-form-login').style.display == 'block') {
            document.querySelector('.auth-form-login').style.display = 'none';
        }
        if (document.querySelector('.auth-form-register').style.display == 'block') {
            document.querySelector('.auth-form-register').style.display = 'none';
        }
        document.querySelector('.modal').style.display = 'none';
    })

    document.querySelector('.auth-form-register').addEventListener('click', (event) => {
        event.stopPropagation();
    })

    document.querySelector('.auth-form-login').addEventListener('click', (event) => {
        event.stopPropagation();
    })
}


// focus input

const headerInput = document.querySelector('.header__search-input');
headerInput.addEventListener('focus', () => {
    document.querySelector('.header__search-history').style.display = 'block';
})

headerInput.addEventListener('blur', () => {
    document.querySelector('.header__search-history').style.display = 'none';
})

document.querySelector('.header__search-history').addEventListener('blur', (event) => {
    event.stopPropagation();
})

// Open Input

const MobileInput = document.querySelector('.header__mobile-search');
MobileInput.addEventListener('click', () => {
    if (document.querySelector('.header__search').style.display == 'none') {
        document.querySelector('.header__search').style.display = 'flex';
    }
    else {
        document.querySelector('.header__search').style.display = 'none';
    }
})


const mobileMenu = document.querySelector('.header__mobile-menu');
mobileMenu.addEventListener('click', () => {
    document.querySelector('.header__nav-menu').style.display = 'block';
})

const mobileMenuClose = document.querySelector('.menu__mobile-close');
mobileMenuClose.addEventListener('click', () => {
    document.querySelector('.header__nav-menu').style.animation = 'removeOverLay ease 0.3';
    document.querySelector('.header__nav-menu-mobile').style.animation = 'menuRemove ease 0.3s';
    document.querySelector('.header__nav-menu').style.animation = 'none';
    document.querySelector('.header__nav-menu').style.animation = 'menuOverLay ease 0.4s';
    setTimeout(() => {
        document.querySelector('.header__nav-menu-mobile').style.animation = 'none';
        document.querySelector('.header__nav-menu-mobile').style.animation = 'menuFadeIn ease 0.4s';
        document.querySelector('.header__nav-menu').style.display = 'none';
    }, 300)
})