window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const headerLeft = document.querySelector('.header-left');
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        header.classList.add('shrink');
        logo.classList.add('shrink');
        headerLeft.classList.add('shrink');
        nav.classList.add('shrink');
    } else if (window.scrollY < 30) {
        header.classList.remove('shrink');
        logo.classList.remove('shrink');
        headerLeft.classList.remove('shrink');
        nav.classList.remove('shrink');
    }
});

function onLogoClick() {
    console.log(window.location.pathname);
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        window.scrollTo(0, 0);
    } else {
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
            window.scrollTo(0, 0);
        } else {
            window.location.href = 'index.html';
        }
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navClose = document.createElement('button');
    navClose.classList.add('nav-close');
    navClose.innerHTML = '&times;';

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    navClose.addEventListener('click', function() {
        navLinks.classList.remove('show');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            navLinks.appendChild(navClose);
            navLinks.classList.remove('show');
        } else {
            navLinks.removeChild(navClose);
        }
    });
    navLinks.querySelectorAll('li').forEach(function(item) {
        item.addEventListener('click', function() {
            navLinks.classList.remove('show');
        });
    });
});
