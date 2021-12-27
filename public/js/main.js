/*==================== CHANGE BACKGROUND HEADER ====================*/
// =====Edited on 10/28/21+++++
function scrollHeader(){
  const nav = document.querySelector('.mobile-header');
  const scrollHeaderMain = document.querySelector('.scroll-header-main');
  //  if(this.scrollY >= 1) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
   if(this.scrollY>1000) scrollHeaderMain.classList.add('show'); else scrollHeaderMain.classList.remove('show');

}
window.addEventListener('scroll', scrollHeader);

/*===== web design styles =====*/
//styles1
var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// styles2
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// styes3
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
});

// styes 4
var swiper = new Swiper(".mySwiper-four", {
  loop: true,
  spaceBetween: 10,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
  },
  640: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  }
});
var swiper2 = new Swiper(".mySwiper2-four", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


/*===== Video Player =====*/
$(".animation_video_img_btn").modalVideo({
  youtube: {
    controls: 0,
    nocookie: true,
  },
});
$(".product_video_btn").modalVideo({
  youtube: {
    controls: 0,
    nocookie: true,
  },
});
// product_video_btn
/*====Product====*/ 
// change text
const licenceText = document.querySelector('.web_page_text');
const licencePrice = document.querySelector('.web_page_price');

// Silection
const rLicence = document.querySelector('.rlicense');
const eLicence = document.querySelector('.elicense');

rLicence.addEventListener('click', () =>{
  rLicence.classList.add('active');
  eLicence.classList.remove('active');
  licenceText.innerHTML="Regular License &#9662;";
  licencePrice.innerHTML="$59"
});

eLicence.addEventListener('click', () =>{
  eLicence.classList.add('active');
  rLicence.classList.remove('active');
  licenceText.innerHTML="Extended License &#9662;";
  licencePrice.innerHTML="$2400"
});

/*====Product====*/ 







/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav_toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
/*==================== ACCORDION SKILLS ====================*/

// const licencePopup = document.querySelector('.licence_popup');
// const licenceUp = document.querySelector('.web_page_sec_licence_up');