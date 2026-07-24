

$(document).ready(function () {

  $(window).on("scroll", function () {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition >= 80) {
      $("#siteHeader").addClass("navFixed");
    } else {
      $("#siteHeader").removeClass("navFixed");
    }

    scrollFunction();
  });

  var currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#themeIcon").removeClass("fa-moon-o").addClass("fa-sun-o");
  }

  $("#themeBtn").on("click", function (event) {
    event.preventDefault();
    var activeTheme = $("html").attr("data-theme");
    if (activeTheme === "dark") {
      $("html").attr("data-theme", "light");
      localStorage.setItem("theme", "light");
      $("#themeIcon").removeClass("fa-sun-o").addClass("fa-moon-o");
    } else {
      $("html").attr("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      $("#themeIcon").removeClass("fa-moon-o").addClass("fa-sun-o");
    }
  });

  $("#searchBtn").on("click", function (event) {
    event.preventDefault();
    $("#searchOverlay").addClass("active");
    $(".searchInput").focus();
  });

  $("#searchClose").on("click", function () {
    $("#searchOverlay").removeClass("active");
  });

  $(document).on("keydown", function (event) {
    if (event.key === "Escape") {
      $("#searchOverlay").removeClass("active");
    }
  });

  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    alert("Thank you! Your request has been received. We will contact you shortly.");
    this.reset();
  });

});

function scrollFunction() {
  var topBtn = document.getElementById("moveTop");
  if (topBtn) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


