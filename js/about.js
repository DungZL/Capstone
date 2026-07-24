
window.addEventListener('scroll', function () {
    var topBtn = document.getElementById('moveTop');
    if (topBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    }
});

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.addEventListener('scroll', function () {
    var siteHeader = document.getElementById('siteHeader');
    if (siteHeader) {
        if (window.scrollY >= 80) {
            siteHeader.classList.add('navFixed');
        } else {
            siteHeader.classList.remove('navFixed');
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            document.body.classList.toggle('noScroll');
        });
    }
});
