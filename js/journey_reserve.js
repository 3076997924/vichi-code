$(function(){
    // 支付方式
    $('.pay-item').each(function(i){
        $(this).attr('data-index',i)
    })
    $('.pay-item').on('click',function(){
        $(this).addClass('current').siblings('.pay-item').removeClass('current')
        var index = $(this).data('index')
        $('.pay-con-item').eq(index).css('display','block').siblings('.pay-con-item').css('display','none')
    })
    $('.wechatWay').on('click',function(){
        console.log(1);
    })
    $('.alipayWay').on('click',function(){
        console.log(2);
    })
    $('.offlineWay').on('click',function(){
        console.log(3);
    })


    // 优惠券
    $('.coupon-summary').on('click',function(){
        $('.discount').show();
        $('.mask').show();
    })

    // 立即取消
    $('.discount-cancel').on('click',function(){
        $('.discount').hide()
        $('.mask').hide()
    })
    $('.discount-sure').on('click',function(){
        $('.discount').hide()
        $('.mask').hide()
    })


    // 预订信息数量
    // 成人数量
    let adultNum = $('.adult-num').text()
    $('.adult-dec').click(function(){
        adultNum = $('.adult-num').text()
        if(adultNum<=1){
            $('.adult-num').text(1)
        }else{
            adultNum--;
            $('.adult-num').text(adultNum)
        }
    })
    $('.adult-add').click(function(){
        adultNum++;
        $('.adult-num').text(adultNum)
    })
    // 儿童数量
    let childNum = $('.child-num').text()
    $('.child-dec').click(function(){
        if(childNum<=1){
            $('.child-num').text(1)
        }else{
            childNum--;
            $('.child-num').text(childNum)
        }
    })
    $('.child-add').click(function(){
        childNum++;
        $('.child-num').text(childNum)
    })
})