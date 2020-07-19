var mySwiper = new Swiper('.action__swiper', {
    
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  var mySwiper = new Swiper('.reviews__row', {
    
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews-next',
      prevEl: '.reviews-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    
    slidesPerView: 6,
    freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    slidesPerView: 1,
    effect: 'fade',
    // breakpoints: {
    //   320: {
    //     centeredSlides: true,
    //   },
    //   1024: {
    //     centeredSlides: false,
    //   }
    // },
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  var galleryThumbs = new Swiper('.gallery-thumbs-2', {
    
    slidesPerView: 6,
    freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top-2', {
    spaceBetween: 10,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  var galleryThumbs = new Swiper('.gallery-thumbs-3', {
    
    slidesPerView: 6,
    freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top-3', {
    spaceBetween: 10,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  var mySwiper = new Swiper('.projects__row', {
    
    slidesPerView: 1,
    navigation: {
      nextEl: '.project-next',
      prevEl: '.project-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  var galleryThumbs = new Swiper('.card-item__gallery-thumbs', {
    
    slidesPerView: 6,
    freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.card-item__gallery-top', {
    spaceBetween: 10,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  $('.card-item__select').niceSelect();

  var mySwiper = new Swiper('.card-reviews__slider', {
    
    slidesPerView: 2,
    spaceBetween: 270,
    centeredSlides: true,
    // width: 700,
    navigation: {
      nextEl: '.card-reviews-next',
      prevEl: '.card-reviews-prev',
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      }
    },
  });