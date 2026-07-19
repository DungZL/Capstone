// ── Scroll to Top Button ──
window.addEventListener('scroll', function () {
  var moveTop = document.getElementById('moveTop');
  if (moveTop) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      moveTop.style.display = 'block';
    } else {
      moveTop.style.display = 'none';
    }
  }
});

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Navbar Scroll Effect ──
window.addEventListener('scroll', function () {
  var header = document.getElementById('siteHeader');
  if (header) {
    if (window.scrollY >= 80) {
      header.classList.add('navFixed');
    } else {
      header.classList.remove('navFixed');
    }
  }
});

// ── Navbar Toggle Body Scroll Lock ──
document.addEventListener('DOMContentLoaded', function () {
  var toggler = document.querySelector('.navbar-toggler');
  if (toggler) {
    toggler.addEventListener('click', function () {
      document.body.classList.toggle('noScroll');
    });
  }
});
