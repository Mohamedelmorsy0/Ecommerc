// show and heide search bx

let search = document.querySelector('.search-box');

document.querySelector("#search-icon").onclick = () =>{
  search.classList.toggle("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");

};

// nav bar background scroll

let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0);
});

// show and heide cart bx

let cart = document.querySelector('.cart');

document.querySelector("#cart-icon").onclick = () => {
  cart.classList.toggle("active");
    search.classList.remove("active");
    user.classList.remove("active");
    navbar.classList.remove("active");  

};

// show and heide user bx

let user = document.querySelector('.user');

document.querySelector("#user-icon").onclick = () => {
  user.classList.toggle("active");
    search.classList.remove("active");
    cart.classList.remove("active");
    navbar.classList.remove("active");
};
// show  navbar mediam screen

let navbar = document.querySelector('.navbar');

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
};

//  heide navbar mediam screen

window.onscroll = () =>{
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
  
};







          var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
          });

          var appendNumber = 4;
          var prependNumber = 1;
          document
            .querySelector(".prepend-2-slides")
            .addEventListener("click", function (e) {
              e.preventDefault();
              swiper.prependSlide([
                '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
                '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
              ]);
            });
          document
            .querySelector(".prepend-slide")
            .addEventListener("click", function (e) {
              e.preventDefault();
              swiper.prependSlide(
                '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
              );
            });
          document
            .querySelector(".append-slide")
            .addEventListener("click", function (e) {
              e.preventDefault();
              swiper.appendSlide(
                '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
              );
            });
          document
            .querySelector(".append-2-slides")
            .addEventListener("click", function (e) {
              e.preventDefault();
              swiper.appendSlide([
                '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
                '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
              ]);
            });


