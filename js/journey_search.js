$(function(){
    $('.keywords-theme i').on('click',function(){
       $(this).addClass('current').siblings('i').removeClass('current') 
    })
    $('.keywords-city i').on('click',function(){
        $(this).addClass('current').siblings('i').removeClass('current') 
     })
     $('.keywords-price i').on('click',function(){
        $(this).addClass('current').siblings('i').removeClass('current') 
     })
})