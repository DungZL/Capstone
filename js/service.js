/* ── Service Page JavaScript ── */

$(document).ready(function () {

  // 1. Fixed Header on Scroll
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
      $("#siteHeader").addClass("navFixed");
    } else {
      $("#siteHeader").removeClass("navFixed");
    }

    // Move top button visibility
    scrollFunction();
  });

  // 2. Dark / Light Mode Toggle
  var currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#themeIcon").removeClass("fa-moon-o").addClass("fa-sun-o");
  }

  $("#themeToggleBtn").on("click", function (e) {
    e.preventDefault();
    var theme = $("html").attr("data-theme");
    if (theme === "dark") {
      $("html").attr("data-theme", "light");
      localStorage.setItem("theme", "light");
      $("#themeIcon").removeClass("fa-sun-o").addClass("fa-moon-o");
    } else {
      $("html").attr("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      $("#themeIcon").removeClass("fa-moon-o").addClass("fa-sun-o");
    }
  });

  // 3. Search Modal Overlay Toggle
  $("#searchBtn").on("click", function (e) {
    e.preventDefault();
    $("#searchOverlay").addClass("active");
    $(".search-input-field").focus();
  });

  $("#searchCloseBtn").on("click", function () {
    $("#searchOverlay").removeClass("active");
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $("#searchOverlay").removeClass("active");
    }
  });

  // 4. Contact Form Submission
  $("#contactQuoteForm").on("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your request has been received. We will contact you shortly.");
    this.reset();
  });

});

// 5. Back to Top Functions
function scrollFunction() {
  var moveTopBtn = document.getElementById("moveTop");
  if (moveTopBtn) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      moveTopBtn.style.display = "block";
    } else {
      moveTopBtn.style.display = "none";
    }
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
