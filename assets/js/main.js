// AOS라이브러리
AOS.init(
    {duration: 1200,}
);

// swiper 라이브러리
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


// 데스크탑 DOM요소에 참조한 변수들
const body = document.querySelector('body')
const gnb = document.querySelector('.gnb')
const navALinks = document.querySelectorAll('.gnb .nav')
const subLists = document.querySelectorAll('.gnb .sub-list')
const gnbBefore = document.querySelector('.gnb .span')
const menuBtn = document.querySelector('.menu-btn')
const dimmed = document.querySelector('.dimmed')
const faqList = document.querySelector('.section-faq .faq-list')
const faqItems = document.querySelectorAll('.section-faq .faq-item')

// 모바일 DOM요소에 참조한 변수들
const mobileGnb = document.querySelector('.mo-gnb')
const moGnbNavList = document.querySelector(".mo-gnb .nav-list")
const hasSubMenuList = [...moGnbNavList.children].filter(hasSubNavItem => 
hasSubNavItem.classList.contains("hasSubMenu")
)
const menuCloseBtn = document.querySelector('.menu-close')


// 데스크탑gnb 영역안에서 nav-item을 클릭했을 때 sub-list 가 나타나는 함수
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


// 모바일gnb 영역안에서 nav-item을 클릭했을 때 sub-list가 나타나는 함수
const moAddSubListActive = (target) => {
  const onSubList = target.children[1]
  const onSuItemLength = onSubList.children.length

  hasSubMenuList.forEach(navItem => {
    console.log(navItem);
    if(navItem === target){
      if(target.classList.contains("on")){
        target.classList.remove("on")
        onSubList.style.height = 0
      }else{
        target.classList.add("on")
        onSubList.style.height = `${onSuItemLength * 40.5}px`
      }
    }else{
      navItem.classList.remove("on")
      navItem.children[1].style.height = 0
    }}
  )
}


// faq-list의 faq-item 을 클릭했을때 sub-list 가 나타나는 함수
const faqItemShow = (target) => {  
  faqItems.forEach(item => {
    if(item === target){
      item.classList.toggle('on')
    }else{
      item.classList.remove('on')
    }
})}


// menu-btn에 이벤트 추가하는 함수
menuBtn.onclick = (e) => {
  e.preventDefault()
  mobileGnb.classList.add('isAct')
  dimmed.style.display = 'block'
  body.classList.add('scroll-hide')
  menuCloseBtn.ariaPressed = "false"
  if (e.target.ariaExpanded  === 'false') {
    e.target.ariaExpanded = 'true' 
  } else {
    e.target.ariaExpanded = 'false' 
  }
}


// 모바일gnb 영역안의 nav-item에 이벤트 추가하는 함수
mobileGnb.onclick = (e) => {
  e.preventDefault()
  if(!e.target.matches('.nav-list > li > a')) {
    return;
  }
  mobileGnb.classList.add('isAct')
  moAddSubListActive(e.target.parentNode)
}  


// 모바일gnb 영역안의 mobile-close-btn에 이벤트 추가하는 함수
menuCloseBtn.onclick = (e) => {
  e.preventDefault()
  mobileGnb.classList.remove('isAct')
  dimmed.style.display = 'none';
  body.classList.remove('scroll-hide')
  menuBtn.ariaExpanded = 'false'
  if (e.target.ariaPressed  === 'false') {
    e.target.ariaPressed = 'true' 
  } else {
    e.target.ariaPressed = 'false' 
  }
}


// dimmed 에 이벤트 추가하는 함수
dimmed.onclick = ()=>{
  mobileGnb.classList.remove('isAct')
  dimmed.style.display = 'none';
  body.classList.remove('scroll-hide')
}

// faq-list 에 이벤트 추가하는 함수
faqList.onclick =(e) => {
  if(!e.target.matches('.faq-list > li > a')) {
    return;
  }
  e.preventDefault()
  faqItemShow(e.target.parentNode)
}



