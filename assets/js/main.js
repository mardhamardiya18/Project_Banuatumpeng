/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

// modal menu
let modal = document.getElementById('contact-modal'),
    openModal = document.getElementById('modal-open-menu'),
    closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function () {
    modal.style.display = 'block';
})
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
})
window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})

// modal olahan
let modal_olahan = document.getElementById('contact-modal-olahan'),
    openModal_olahan = document.getElementById('modal-open-olahan'),
    closeModal_olahan = document.querySelector('.close-modal-olahan');

openModal_olahan.addEventListener('click', function () {
    modal_olahan.style.display = 'block';
})
closeModal_olahan.addEventListener('click', function () {
    modal_olahan.style.display = 'none';
})
window.addEventListener("click", function (e) {
    if (e.target == modal_olahan) {
        modal_olahan.style.display = "none";
    }
})



$(document).ready(function () {
    $('.item').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.card-menu').show('1000');
        } else {
            $('.card-menu').not('.' + value).hide('1000');
            $('.card-menu').filter('.' + value).show('1000');
        }
    })
    $('.item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
})

// $(document).ready(function () {
//     function showSubscribe() {
//         $('#container__subscribe').show()
//         $('html body').css('overflow', 'hidden')
//     }
//     function hideSubscribe() {
//         $('#container__subscribe').css('display', 'none')
//         $('html body').css('overflow', 'unset')
//     }
//     setTimeout(showSubscribe, 3500)
//     $('#close-subscribe').click(function () {
//         hideSubscribe()
//     })
// })

// modal banner
$(document).ready(function () {
    function showBanner() {
        $('.container__modal__banner').addClass('show')
        $('html body').css('overflow', 'hidden')
    }
    function hideBanner() {
        $('#container__banner').css('display', 'none')
        $('html body').css('overflow', 'unset')
    }
    setTimeout(showBanner, 3500)
    $('#close-banner').click(function () {
        hideBanner()
    })
})


// app script Spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwcgiP-InGYrNUJfEZcLxrvt4T1WTwkEiGdiYs2dYh8odbTr4zXyc73vGZ-6NyFUNNV3g/exec'
const form = document.forms['subscribe']
const done = document.querySelector('.clicked-subscribe')
const btnSent = document.querySelector('.btn__subscribe-done')
const btnSend = document.querySelector('.btn__subscribe')


form.addEventListener('submit', e => {
    e.preventDefault()
    btnSend.classList.toggle('d-none')
    btnSent.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            done.classList.toggle('d-none')
            form.classList.toggle('d-none')
            form.reset()
            console.log('Success!', response)
        })

        .catch(error => console.error('Error!', error.message))
})
