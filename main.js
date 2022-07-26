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

/*searchBtn*/
const searchBtn = document.querySelector("#openBtn");
const searchBox = document.querySelector('.search_box input')
const searchBg = document.querySelector('.search_bg')
const search = document.querySelector('.searchBtn')
const closeBtn = document.querySelector('#closeBtn')


searchBtn.addEventListener('click', function(){
  searchBg.style.height= '100vh'
  searchBox.style.height= '65px'
  search.style.opacity= '1'
  closeBtn.style.opacity= '1'
  searchBtn.style.opacity= '0'
})

searchBg.addEventListener('click', function(){
  searchBg.style.height= '0'
  searchBox.style.height= '0'
  search.style.opacity= '0'
  closeBtn.style.opacity= '0'
  searchBtn.style.opacity= '1'
})

closeBtn.addEventListener('click', function(){
  searchBg.style.height= '0'
  searchBox.style.height= '0'
  search.style.opacity= '0'
  closeBtn.style.opacity= '0'
  searchBtn.style.opacity= '1'
})

/*heartBtn*/
const emBtn = document.querySelector('#em_heart')
const fullBtn = document.querySelector('#full_heart')


emBtn.addEventListener('click', function(){
  fullBtn.style.display='block'
  emBtn.style.display='none'
})

fullBtn.addEventListener('click', function(){
  fullBtn.style.display='none'
  emBtn.style.display='block'
})




/*fixed_menu*/
const fixed = document.querySelector('.fixed_wrap')

window.addEventListener('scroll', ()=> {
  if(window.scrollY > 200){
    gsap.to(fixed, 0.3, {
      opacity: 1
    })
  } else {
    gsap.to(fixed, 0.3, {
      opacity: 0
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