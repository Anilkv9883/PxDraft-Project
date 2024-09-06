const menu = document.querySelector(".menu-bar");
const icon = document.querySelector(".menu-icon");
console.log(menu)
console.log(icon)
icon.onclick = function () {
    menu.classList.toggle("open")
}

var typed = new Typed('#element', {
    strings: ['Coader.', 'Designer.', 'Devloper.'],
    typeSpeed: 150,
    backspeed: 150,
    loop: true,
});


//   gsap code
gsap.to("#navbar", {
    backgroundColor: "#fff",
    height: "70px",
    duration: 1,
    scrollTrigger: {
        trigger: "#navbar",
        scroll: "body",
        start: "top -10%",
        end: "top -10%",
        scrub: true

    }
})

// testimonial slider 
// <!-- Initialize Swiper -->

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      }
  
    }
  
  })

 