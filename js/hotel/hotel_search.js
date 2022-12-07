$(function(){
    $('.keywords-theme i').on('click',function(){
       $(this).addClass('current').siblings('i').removeClass('current') 
    })
    $('.keywords-city i').on('click',function(){
        $(this).addClass('current').siblings('i').removeClass('current') 
     })
     $('.kewords-type i').on('click',function(){
        $(this).addClass('current').siblings('i').removeClass('current') 
     })
     $('.keywords-price i').on('click',function(){
        $(this).addClass('current').siblings('i').removeClass('current') 
     })

     $('.result-package-reserve').click(function(){
         window.location.href='hotel_reserve.html'
     })
     $('.result-house-reserve').click(function(){
      window.location.href='hotel_reserve.html'
     })
     $('.result-title').click(function(){
      window.location.href='hotel_detail.html'
     })
})