$(function () {
    let flag = false
    $('#openMobile').click(function(){
        if(flag == false){
            $('.mobile-links').animate({
                left: '0'
            },200)
            flag = true
        }
    })
    $('#closeMobile').click(function(){
        if(flag == true){
            $('.mobile-links').animate({
                left: '100%'
            },200)
            flag = false
        }
    })

    // 返回顶部
    $('.ft-top').on('click', function () {
        $("body,html").animate({ scrollTop: 0 }, 200)
    })

})