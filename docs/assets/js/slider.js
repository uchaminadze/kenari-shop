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