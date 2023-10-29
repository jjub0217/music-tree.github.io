AOS.init(
    {duration: 1200,}
);

(function (){
  const visualSwiper = new Swiper('.section-platform .swiper', {
     slidesPerView: 5,
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: ".pagination",
        clickable: true,
      },navigation: {
      nextEl: ".section-platform .btn-next",
      prevEl: ".section-platform .btn-prev"
    },
  })
}())



const gnb = document.querySelector('.gnb')
const navALinks = document.querySelectorAll('.gnb .nav')
const subLists = document.querySelectorAll('.gnb .sub-list')
const gnbBefore = document.querySelector('.gnb .span')
const moNavALinks = document.querySelectorAll('.mo-gnb .nav')
const menuBtn = document.querySelector('.menu-btn')
const menuCloseBtn = document.querySelector('.menu-close')
const mobileGnb = document.querySelector('.mo-gnb')
const dimmed = document.querySelector('.dimmed')
const body = document.querySelector('body')


const navItem = document.querySelectorAll('.gnb .nav-item')
  navItem.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('active');
      gnb.classList.add('active')
    })

  item.addEventListener('mouseleave', () => {
    item.classList.remove('active');
    gnb.classList.remove('active')
  })
})

menuBtn.onclick = (e) => {
  e.preventDefault()
  mobileGnb.classList.add('isAct')
  dimmed.style.display = 'block'
  body.classList.add('scroll-hide')
}


mobileGnb.onclick = (e) => {
  e.preventDefault()
  if(!e.target.matches('.nav-list > li > a')) {
    return;
  }
  mobileGnb.classList.add('isAct')
  moAddSubListActive(e.target)
}  

// sub-list와 nav-item에 부여하는 함수
const moAddSubListActive = (target) => {
  moNavALinks.forEach(item => {
    const subM = item.nextElementSibling
    if(target === item){
      item.classList.toggle('on')
      if(item.nextElementSibling){
        subM.classList.toggle('active')
      }
    }else{
      item.classList.remove('on')
      if(item.nextElementSibling){
        subM.classList.remove('active')
      }
    }
  })
}


menuCloseBtn.onclick = (e) => {
  e.preventDefault()
  mobileGnb.classList.remove('isAct')
  dimmed.style.display = 'none';
  body.classList.remove('scroll-hide')
}

dimmed.onclick = ()=>{
  mobileGnb.classList.remove('isAct')
  dimmed.style.display = 'none';
  body.classList.remove('scroll-hide')
}

const faqList = document.querySelector('.section-faq .faq-list')
const faqItems = document.querySelectorAll('.section-faq .faq-item')
faqList.onclick =(e) => {
  if(!e.target.matches('.faq-list > li > a')) {
    return;
  }
  e.preventDefault()
  faqItemShow(e.target.parentNode)
}


const faqItemShow = (target) => {  
  faqItems.forEach(item => {
    if(item === target){
      item.classList.toggle('on')
    }else{
      item.classList.remove('on')
    }
})}
