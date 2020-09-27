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

  const mobileMmenu1 = $(".mmenu-dropdown1 > .mmenu-dropdown1__link");
  mobileMmenu1.on("click", function () {
    mobileMmenu1.toggleClass("active");
    $(".mmenu-dropdown1__list").slideToggle(300);
  });

  const mobileMenu2 = $(".mmenu-dropdown2 > .mmenu-dropdown2__link");
  mobileMenu2.on("click", function () {
    mobileMenu2.toggleClass("active");
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
});
