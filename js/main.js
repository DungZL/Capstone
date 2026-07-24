
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

document.addEventListener('DOMContentLoaded', function () {
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxTitle = document.getElementById('lightboxTitle');
  var lightboxModal = document.getElementById('lightboxModal');

  if (lightboxModal) {
    lightboxModal.addEventListener('show.bs.modal', function (event) {
      var triggerBtn = event.relatedTarget;
      if (triggerBtn) {
        var imgSrc = triggerBtn.getAttribute('data-img');
        var titleText = triggerBtn.getAttribute('data-title');
        if (lightboxImg) lightboxImg.src = imgSrc;
        if (lightboxTitle) lightboxTitle.textContent = titleText;
      }
    });
  }
});


