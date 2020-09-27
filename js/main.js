$(document).ready(function () {
  /*=== Mobile Menu ===*/
  // Show and hide navigation menu
  const mmenuButtonOpen = $(".mmenubtn--open");
  const mmenuButtonClose = $(".mmenubtn--close");
  const mobileMenu = $(".mmenu");

  mmenuButtonOpen.on("click", function () {
    mobileMenu.addClass("mmenu--visible");
  });
  mmenuButtonClose.on("click", function () {
    mobileMenu.removeClass("mmenu--visible");
  });

  // Mobile menu dropdown
  const mobileMenuLevel1 = $(".mmenu-dropdown1 > .mmenu-dropdown1__link");
  const mobileMenuLevel2 = $(".mmenu-dropdown2 > .mmenu-dropdown2__link");
  mobileMenuLevel1.on("click", function () {
    mobileMenuLevel1.toggleClass("active");
    $(".mmenu-dropdown1__list").slideToggle(300);
  });
  mobileMenuLevel2.on("click", function () {
    mobileMenuLevel2.toggleClass("active");
    $(".mmenu-dropdown2__list").slideToggle(300);
  });

  // Close mobile menu on wide screens
  $(window)
    .resize(function () {
      if (screen.width > 991 && $(window).width() > 991) {
        mobileMenu.removeClass("mmenu--visible");
      }
    })
    .resize();

  /*=== Owl Carousel ===*/
  // Slider for intro section
  $(".intro .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    nav: true,
    items: 1,
    smartSpeed: 1200,
    navText: [
      "<i class='owl-icon fas fa-angle-left'></i>",
      "<i class='owl-icon fas fa-angle-right'></i>",
    ],
  });
});
