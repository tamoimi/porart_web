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
const searchBtn = document.getElementById("searchBtn");
const search = document.querySelector('#search')
const searchBg = document.querySelector('.search_bg')
const btn = document.querySelector('.btn')

searchBtn.addEventListener('click', function(){
  // searchBg.style.height= '100vh'
  search.style.width= '400px'
  btn.style.opacity=1

})

btn.addEventListener('click',function(){
  // searchBg.style.height= '0px'
  search.style.width= 0
  btn.style.opacity=0
})


// searchBtn.onclick = showDetail

// function showDetail() {
//   document.querySelector(".search_bg").style.display = 'block';
// }

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