function showMobileNav(){
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display=('flex');

    const MobileNavCloseIcon = document.querySelector('.MobileNavCloseIcon')
    MobileNavCloseIcon.style.display=('flex')

    const mobileHamburger = document.querySelector('.mobileHamburger')
    mobileHamburger.style.display=('none')

    const startButton = document.querySelector('#startButton')
    startButton.style.display=('none')
}

function hideMobileNav(){
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display=('none')
    
    const mobileHamburger = document.querySelector('.mobileHamburger')
    mobileHamburger.style.display=('flex')

    const MobileNavCloseIcon = document.querySelector('.MobileNavCloseIcon')
    MobileNavCloseIcon.style.display=('none')

    const startButton = document.querySelector('#startButton')
    startButton.style.display=('flex')
}
