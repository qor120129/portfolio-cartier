// window.onbeforeunload = function () {
//   $('body').css({'overflow-y': 'auto'});     
// };

if($('.loading').length > 0){
  $('html, body').css({'overflow-y': 'hidden'}); 
}

var loding = $('.loading'),
lodingMockup =$('.loading_mockup');

loding.stop().delay(3200).animate({ top: '-200%'},function(){
  $('html, body').css({'overflow-y': 'visible'});    
  $.cookie('cartier', 'cookie'); 
  });
  

  if($.cookie('cartier')== undefined){
    loding.css({ 'display': 'flex', 'visibility': 'visible'});
  }else{
    $('html, body').css({'overflow-y': 'visible'});   
    loding.css({ 'display': 'none', 'visibility': 'hidden'});
  }





//loding page

var header = $(' header'),
  scrollAmt = 0,
  lastScroll = 0,
  double = $('.double'),
  tank = $('.tank');

$(window).scroll(function () {
  scrollAmt = $(window).scrollTop();
  if (lastScroll < scrollAmt && lastScroll >= 0) {
    header.addClass('scroll_down');
    header.removeClass('scroll_up');
  } else if (lastScroll > scrollAmt) {
    header.removeClass('scroll_down');
    header.addClass('scroll_up');
  }
  if (scrollAmt <= 0) {
    header.removeClass('scroll_up');
  }
  lastScroll = scrollAmt;

  if ($(window).scrollTop() < 700) {
    $('.top').fadeOut()
  } else {
    $('.top').fadeIn()
  }

  if ($(window).scrollTop() > 500) {
    double.addClass('active');
  }
  if ($(window).scrollTop() > 1200) {
    tank.addClass('active');
  }
});
//scroll event


var searchForm = $('.search_form');
var searchBtn = $('.header_top .search');
var loginHeader = $('.login_header');
var logo = $('.login_header .logo a');

searchBtn.click(function (e) {
  e.preventDefault();
  searchForm.toggleClass('active');
  loginHeader.toggleClass('active');
  // logo.toggleClass('active');

  if (searchForm.hasClass('active')) {
    searchForm.find('input').focus();
  }

});//serch
  




var cartBtn = $('.cart');
var shoppingBag = $('.shopping_bag');
var shoppingBagClose = $('.shopping_bag .header_top .close');

cartBtn.click(function(e) {
  e.preventDefault();
  shoppingBag.addClass('active');
  $('body').css({'overflow-y': 'hidden', 'touch-action':'none'});
});
shoppingBagClose.click(function(e){
  e.preventDefault();
  shoppingBag.removeClass('active');
  $('body').css({'overflow-y': 'auto', 'touch-action': 'auto'});
})


$('.top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 400);
  return false;
});
// go_top

if ($('.main_slide_wrapper').length > 0) {
  const swiper = new Swiper('.main_slide', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
//mian slide

if($('.brand_slide').length > 0) {
const swiper = new Swiper('.brand_slide', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination.brand_pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.brand_next_btn",
    prevEl: ".swiper-button-prev.brand_prev_btn",
  },

});
}

var asideBtn = $('.menu_btn');
var closeBtn = $('.close');

asideBtn.click(function () {
  $('body').addClass('active');
});

closeBtn.click(function () {
  $('body').removeClass('active');
});
// aside click


var category = $('.aside_category > li');
category.each(function () {
  $(this).click(function () {


    if (!$(this).hasClass('active')) {
      category.find('ul').slideUp();
      $(this).find('ul').slideToggle();
      category.removeClass('active');
      $(this).addClass('active')
    } else {
      $(this).find('ul').slideUp();
      $(this).removeClass('active')
    }
  })
});
//aside


var footerList = $('.footer_list li');
footerList.each(function () {
  $(this).click(function () {


    if (!$(this).hasClass('active')) {
      footerList.find('ul').slideUp();
      $(this).find('ul').slideDown();
      footerList.removeClass('active');
      $(this).addClass('active')
    } else {
      $(this).find('ul').slideUp();
      $(this).removeClass('active')
    }
  })
});
//footer

$('.product_filter button').click(function () {
  $('.filter').addClass('active')
  $('body').css({'overflow-y': 'hidden'});

})

$('.filter .sprite.close').click(function () {
  $('.filter').removeClass('active')
  $('body').css({'overflow-y': 'auto'});
})

$('.filter_wrapper > button').click(function () {
  $('.filter').removeClass('active')
  $('body').css({'overflow-y': 'auto'});

})

var filterList = $('.filter_list > div > button'),
  filterSubList = $('.filter_sub_list');
filterList.each(function () {
  $(this).click(function () {

    if (!$(this).hasClass('active')) {
      filterSubList.slideUp();
      $(this).siblings('.filter_sub_list').slideDown();
      filterList.removeClass('active');
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
      filterSubList.slideUp();
    }

  })
});



$('.sprite.wish').click(function () {
  $(this).toggleClass('active')
})
$('.pagination li').click(function () {
  $('.pagination li').removeClass('active')
  $(this).addClass('active')
})

