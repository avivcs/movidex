document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sideBar = document.querySelector(".side-bar");


    /* OPEN SIDEBAR */

    if (menuBtn && sideBar) {

        menuBtn.onclick = function () {
            sideBar.classList.add("active");
        };

    }


    /* CLOSE SIDEBAR */

    if (closeBtn && sideBar) {

        closeBtn.onclick = function () {
            sideBar.classList.remove("active");
        };

    }


    /* CLOSE WHEN CLICKING OUTSIDE */

    if (sideBar) {

        sideBar.onclick = function (event) {

            if (event.target === sideBar) {
                sideBar.classList.remove("active");
            }

        };

    }


    /* ESC KEY */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && sideBar) {
            sideBar.classList.remove("active");
        }

    });

});



var swiper = new Swiper(".hero-slider", {
       loop: true,
       grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
});

var swiper = new Swiper(".trending-slider", {


       slidesPerView: "auto",
       spaceBetween: 20,
       loop: true,
       grabCursor: true,

       autoplay :{
        delay: 2000,
        disableOnInteraction: false,
       }
 
      
});

var swiper = new Swiper(".showing-slider", {


       slidesPerView: "auto",
       spaceBetween: 20,
       loop: true,
       grabCursor: true,

       autoplay :{
        delay: 2000,
        disableOnInteraction: false,
       }
 
      
});

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slides').appendChild(items[0]);
});

prev.addEventListener('click', function() {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slides').prepend(items[items.length - 1]);
});



document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sideBar = document.querySelector(".side-bar");


    /* ==========================================
       OPEN MENU
       ========================================== */

    if (menuBtn && sideBar) {

        menuBtn.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            sideBar.classList.add("active");

        });

    }


    /* ==========================================
       CLOSE MENU
       ========================================== */

    if (closeBtn && sideBar) {

        closeBtn.addEventListener("click", function (event) {

            event.preventDefault();

            sideBar.classList.remove("active");

        });

    }


    /* ==========================================
       CLOSE WHEN CLICKING OUTSIDE MENU
       ========================================== */

    if (sideBar) {

        sideBar.addEventListener("click", function (event) {

            if (event.target === sideBar) {

                sideBar.classList.remove("active");

            }

        });

    }


    /* ==========================================
       CLOSE WITH ESC KEY
       ========================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && sideBar) {

            sideBar.classList.remove("active");

        }

    });

});