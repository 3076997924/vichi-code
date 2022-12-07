$(function(){
  $('.search').on('mouseenter',function(){
    $('.search-result').stop(true).fadeIn();
  })
  $('.search').on('mouseleave',function(){
    $('.search-result').stop(true).fadeOut();
  })
})