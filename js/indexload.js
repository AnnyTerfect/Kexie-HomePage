var device=document.getElementById("main_swiper_div"); device.style.height=parseInt(document.body.clientWidth)*6/9 + 'px';
window.onresize=function (){device.style.height=parseInt(document.body.clientWidth)*6/9	 + 'px';};
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 1,
    watchActiveIndex: true,
    autoplay: 3000,
    loop: true,
  })
