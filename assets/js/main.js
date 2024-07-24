// AOS라이브러리
AOS.init(
    {duration: 1200,}
);

// swiper 라이브러리
(function (){
  const visualSwiper = new Swiper(".section_platform .swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".section_platform .slide_button_next",
      prevEl: ".section_platform .slide_button_prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
}())


// 데스크탑 DOM요소에 참조한 변수들
const body = document.querySelector('body')
const gnb = document.querySelector('.gnb')
const gnbInner = document.querySelector('.gnb .inner')
const navALinks = document.querySelectorAll('.gnb .nav')
const navItem = document.querySelectorAll('.gnb .nav_item');
const subLists = document.querySelectorAll('.gnb .sub_list')
const gnbBefore = document.querySelector('.gnb .span')
const menuBtn = document.querySelector(".menu_button");
const dimmed = document.querySelector('.dimmed')
const faqList = document.querySelector('.section_faq .faq_list')
const faqItems = document.querySelectorAll('.section_faq .faq_item')

// 모바일 DOM요소에 참조한 변수들
const mobileGnb = document.querySelector(".gnb_mobile");
const moGnbNavList = document.querySelector(".gnb_mobile .nav_list");
const hasSubMenuList = [...moGnbNavList.children].filter((hasSubNavItem) =>
  hasSubNavItem.classList.contains("has_sub_list")
);
const menuCloseBtn = document.querySelector(".menu_close_button");
const homeBtn = document.querySelector(".home_button");


navItem.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add("is_active");
  })
  item.addEventListener('mouseleave', () => {
    item.classList.remove("is_active");
  })
})

gnbInner.addEventListener("mouseenter", () => {
  gnb.setAttribute("aria-expanded", true);
});
gnb.addEventListener("mouseleave", () => {
  gnb.setAttribute("aria-expanded", false);
});


const moAddSubListActive = (target) => {
  const button = target.children[0];
  const onSubList = target.children[1];
  const onSuItemLength = onSubList.children.length;
  const newHeight = `${onSuItemLength * 40.5}px`;
  const isShow = target.classList.toggle("is_show");

  onSubList.style.height = isShow ? newHeight : 0;
  button.setAttribute("aria-expanded", isShow);
  button.setAttribute("aria-pressed", isShow);
  console.log(target);

  hasSubMenuList.forEach((navItem) => {
    if (navItem !== target) {
      navItem.classList.remove("is_show");
      navItem.children[1].style.height = 0;
      navItem.children[0].setAttribute("aria-expanded", "false");
      navItem.children[0].setAttribute("aria-pressed", "false");
    }
  });
};

const faqItemShow = (target) => {
  faqItems.forEach((faqItem) => {
    [...faqItem.children]
      .filter((item) => item.classList.contains("faq_item_title"))
      .forEach((item) => {
        const isTarget = item === target;
        const expanded = isTarget && target.ariaExpanded === "false";
        item.setAttribute("aria-expanded", expanded ? "true" : "false");
        item.setAttribute("aria-pressed", expanded ? "true" : "false");
        item.parentNode.style.background = expanded ? "#1c1e20" : "transparent";
      });
  });
};

menuBtn.onclick = (e) => {
  e.preventDefault()
  mobileGnb.classList.add("is_show");
  dimmed.style.display = 'block'
  body.classList.add('scroll_hide')
  menuCloseBtn.ariaPressed = "false"
  if (e.target.ariaExpanded  === 'false') {
    e.target.ariaExpanded = 'true' 
    e.target.ariaPressed = "true";
    e.target.ariaLabel = "메뉴 닫기";
  } else {
    e.target.ariaExpanded = 'false' 
    e.target.ariaPressed = "false";
    e.target.ariaLabel = "메뉴 열기";
  }
}

mobileGnb.onclick = (e) => {
  e.preventDefault()
  if(!e.target.matches('.nav_list > li > button')) {
    return;
  }
  moAddSubListActive(e.target.parentNode)
}  

menuCloseBtn.onclick = (e) => {
  e.preventDefault()
  mobileGnb.classList.remove("is_show");
  dimmed.style.display = 'none';
  body.classList.remove('scroll_hide')
  menuBtn.ariaExpanded = 'false'
  if (e.target.ariaPressed  === 'false') {
    e.target.ariaPressed = 'true' 
  } else {
    e.target.ariaPressed = 'false' 
  }
}

homeBtn.onclick = (e) => {
  e.preventDefault();
  mobileGnb.classList.remove("is_show");
  dimmed.style.display = "none";
  body.classList.remove("scroll_hide");
  menuBtn.ariaExpanded = "false";
  if (e.target.ariaPressed === "false") {
    e.target.ariaPressed = "true";
  } else {
    e.target.ariaPressed = "false";
  }
};


dimmed.onclick = ()=>{
  mobileGnb.classList.remove("is_show");
  dimmed.style.display = 'none';
  body.classList.remove('scroll_hide')
}

faqList.onclick =(e) => {
  if(!e.target.matches('.faq_list > li > button')) {
    return;
  }
  e.preventDefault()
  faqItemShow(e.target);
}



