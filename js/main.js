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
  const mobileMenuLevel1 = $(".mmenu-dropdown1__item-button");
  const mobileMenuLevel2 = $(".mmenu-dropdown2__item-button");
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

  // Header size on scroll
  const header = $(".header");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      header.addClass("header--scroll");
    } else {
      header.removeClass("header--scroll");
    }
  });

  /*=== Owl Carousel ===*/
  // Slider for intro section
  const introSlider = $(".intro .owl-carousel");
  introSlider.owlCarousel({
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
  // Slider for testimonials section
  const testimonialsSlider = $(".testimonials .owl-carousel");
  testimonialsSlider.owlCarousel({
    loop: true,
    dots: true,
    dotsEach: true,
    nav: false,
    items: 3,
    smartSpeed: 1200,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  /*=== AOS Animation ===*/
  AOS.init({
    disable: function () {
      var maxWidth = 767;
      return window.innerWidth < maxWidth;
    },
  });

  /*=== Smooth Scrolling to Anchor ===*/
  // Select all links with hashes and remove not anchor links
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            600,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /*=== ScrollSpy for header navigation ===*/
  const spyHeaderNav = new Gumshoe(".link--scrollspy", {
    offset: 100,
  });

  /*=== To Top Button ===*/
  const topButton = $(".top-button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      topButton.addClass("show");
    } else {
      topButton.removeClass("show");
    }
  });
  topButton.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  /*=== Preloader ===*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $(".preloder").delay(200).fadeOut("slow");
  });

  /*=== Counter ===*/
  // animation to counter numbers (from 0)
  const counterNumber = $(".about-counter__number");
  counterNumber.each(function () {
    $(this)
      .prop("counter", 0)
      .animate(
        {
          counter: $(this).text(),
        },
        {
          duration: 7500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
