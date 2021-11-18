const imageSwiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper__arrow__right',
        prevEl: '.swiper__arrow__left',
        disabledClass: "disabled"
    },
    loop: true,
    autoplay: {
      delay: 5000
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: "true"
      // type: 'bullets',
    },
  })


const topProductsSwiper = new Swiper(".swiper", {
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 24
      },

      700: {
        slidesPerView: 2.7,
        spaceBetween: 16
      },

      350: {
        slidesPerView: 1.4,
        spaceBetween: 10
      }
    },
    navigation: {
        nextEl: '.slider__arrow__right',
        prevEl: '.slider__arrow__left'
    },
    loop: true,
    pagination: {
      el: '.products__swiper__pagination',
      clickable: "true",
    },
  })


const saleProductsSwiper = new Swiper(".swiper-sale", {
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 24
      },

      700: {
        slidesPerView: 2.7,
        spaceBetween: 16
      },

      350: {
        slidesPerView: 1.4,
        spaceBetween: 10
      }
    },
    navigation: {
        nextEl: '.sale__slider__arrow__right',
        prevEl: '.sale__slider__arrow__left'
    },
    loop: true,
    pagination: {
      el: '.sale__products__swiper__pagination',
      clickable: "true",
    },
  })



const fourthContainerSwiper = new Swiper(".fourth__container__swiper", {
  slidesPerView: 1.3,
  spaceBetween: 17,
  allowTouchMove: true,


  breakpoints: {
    701:{
      slidesPerView: 3,
      spaceBetween: 24,
      allowTouchMove: true,
    }
  }
})