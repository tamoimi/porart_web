/*hamBtn_menu*/ 
function menuOnClick(){
  document.getElementById('menu-bar').classList.toggle('change')
  document.getElementById('nav').classList.toggle('change')
  document.getElementById('menu_bg').classList.toggle('change_bg')
}
function bgOnClick(){
  document.getElementById('menu-bar').classList.toggle('change')
  document.getElementById('nav').classList.toggle('change')
  document.getElementById('menu_bg').classList.toggle('change_bg')
}

const togglingBtns = document.querySelectorAll('.fa-heart'); 

togglingBtns.forEach(function(btns){ 
    btns.addEventListener ("click", function() { 
        btns.classList.toggle('fas')
    });
})


/*fixed_menu*/
const fixed = document.querySelector('.fixed_wrap')

window.addEventListener('scroll', ()=> {
  if(window.scrollY > 200){
    gsap.to(fixed, 0.3, {
      opacity: 1,
      display : 'block'
    })
  } else {
    gsap.to(fixed, 0.3, {
      opacity: 0,
      display : 'none'
    })
  }
})

/* swiper_notice */
new Swiper(".sec_left .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

/* swiper_info */ 
new Swiper('.info01 .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".info01 .swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".info01 .swiper-button-next",
    prevEl: ".info01 .swiper-button-prev"
  }
});


/* top_btn */
const topBtn = document.querySelector('.toTop')

topBtn.addEventListener('click',()=>{
  gsap.to(window, 1, {
    scrollTo: 0
  })
})

const bottomBtn = document.querySelector('.toBottom')
bottomBtn.addEventListener('click',()=>{
  gsap.to(window, 1, {
    scrollTo: 3000
  })
})


const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);
