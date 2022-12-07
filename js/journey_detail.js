$(function () {
    $(window).scroll(function () {
        // 导航栏的变化
        if ($(window).scrollTop() < $('.intro-section').offset().top) {
            $('.intro-nav-section').css({
                position: 'relative',
                top: '0',
                background: 'transparent'
            })
            $('.intro-nav li a').removeClass('stik')
        } else {
            $('.intro-nav-section').css({
                position: 'fixed',
                top: '0',
                background: 'rgba(0,0,0,.3)'
            })
            $('.intro-nav li a').addClass('stik')
        }

        // 旅程简介区域
        if ($(window).scrollTop() >= $('#brief').offset().top && $(window).scrollTop() < $('#simple').offset().top) {
            $('#briefLink').addClass('current').siblings('li').removeClass('current')
        }
        // 简途旅程区域
        if ($(window).scrollTop() >= $('#simple').offset().top - 5 && $(window).scrollTop() < $('#recomend').offset().top) {
            $('#simpleLink').addClass('current').siblings('li').removeClass('current')
        }
        // 重点推荐
        if ($(window).scrollTop() >= $('#recomend').offset().top - 5) {
            $('#recomendLink').addClass('current').siblings('li').removeClass('current')
        }
        // 详细行程
        if ($(window).scrollTop() >= $('#trip').offset().top - 5 && $(window).scrollTop() < $('#cost').offset().top) {
            $('#tripLink').addClass('current').siblings('li').removeClass('current')
        }
        // 费用说明
        if ($(window).scrollTop() >= $('#cost').offset().top - 5 && $(window).scrollTop() < $('#favouredPolicy').offset().top) {
            $('#costLink').addClass('current').siblings('li').removeClass('current')
        }
        // 优惠政策
        if ($(window).scrollTop() >= $('#favouredPolicy').offset().top - 5 && $(window).scrollTop() < $('#cancelPolicy').offset().top) {
            $('#favouredPolicyLink').addClass('current').siblings('li').removeClass('current')
        }
        // 取消政策
        if ($(window).scrollTop() >= $('#cancelPolicy').offset().top - 5 && $(window).scrollTop() < $('#comment').offset().top) {
            $('#cancelPolicyLink').addClass('current').siblings('li').removeClass('current')
        }
        // 用户点评
        if ($(window).scrollTop() >= $('#comment').offset().top) {
            $('#commentLink').addClass('current').siblings('li').removeClass('current')
        }
    })
    // 收藏按钮
    let starFlag = false;
    $('.detail-star').on('click', function () {
        if (!starFlag) {
            $(this).children('span').addClass('icon-wujiaoxing')
            starFlag = true;
        } else {
            $(this).children('span').removeClass('icon-wujiaoxing')
            starFlag = false;
        }
    })



    var month_olypic = [31,29,31,30,31,30,31,31,30,31,30,31];//正常年份12个月对应的天数
    var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];//闰年中12个月对应的天数
    var month_name =["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];//定义要显示的月份数组
    //获取以上各个部分的id
    var holder = document.getElementById("days");
    var pre = document.getElementById("pre");//上个月份的超链接id
    var next = document.getElementById("next");//下个月份的超链接id
    var ctitle = document.getElementById("calendar-month");
    var cyear = document.getElementById("calendar-year");
    //获取当天的年月日
    var my_date = new Date();
    var my_year = my_date.getFullYear();//获取年份
    var my_month = my_date.getMonth(); //获取月份，下标从0开始
    var my_day = my_date.getDate();//获取当前日期

    //根据年月获取当月第一天是周几
    function dayStart(month,year){
        var tmpDate = new Date(year, month, 1);
        return (tmpDate.getDay());
    }
    //根据年份判断某月有多少天，主要是区分闰年
    function daysMonth(month, year){
        var tmp1 = year % 4;
        var tmp2 = year % 100;
        var tmp3 = year % 400;

        if((tmp1 == 0 && tmp2 != 0) || (tmp3 == 0)){
            return (month_olypic[month]);//闰年
        }else{
            return (month_normal[month]);//非闰年
        }
    }

    function refreshDate(){
        var str = "";
        //计算当月的天数和每月第一天都是周几
        var totalDay = daysMonth(my_month,my_year);
        var firstDay = dayStart(my_month, my_year);
        //添加每个月前面的空白部分，即若某个月的第一天是从周三开始，则前面的周一，周二需要空出来
        for(var i = 0; i < firstDay; i++){
            str += "<li style='background:transparent;'>"+"</li>";
        }

        //从一号开始添加到totalDay（每个月的总天数），并为pre，next和当天添加样式
        var myclass;
        var iclass;
        for(var i = 1; i <= totalDay; i++){
            //如果是已经过去的日期，则用浅灰色显示
            if((my_year < my_date.getFullYear())||(my_year == my_date.getFullYear() &&
                my_month < my_date.getMonth()) || (my_year == my_date.getFullYear() &&
                my_month == my_date.getMonth() && i < my_day)){
                myclass = " class='lightgrey'";
                iclass = "style='color:##a8a8a8;'"

            }
            //如果正好是今天，则用绿色显示
            else if(my_year == my_date.getFullYear() && my_month == my_date.getMonth() && i == my_day){
                myclass = "class = 'green greenbox'";
                iclass = "style='color:#fff;'"
            }
            //将来的日期用深灰色显示
            else{
                myclass = "class = 'darkgrey'";
                iclass = "style='color:#e93f36;'"
            }
            str += "<li "+myclass+">"+i+"<i "+ iclass +">299起</i></li>";
        }
        holder.innerHTML = str;//为日期的列表标签设置HTML；
        ctitle.innerHTML = month_name[my_month];//设置当前显示的月份
        cyear.innerHTML = `${my_year}年`;//设置当前显示的年份
    }
    refreshDate();//显示日期，更新界面
    //上个月的点击事件
    pre.onclick = function(e){
        e.preventDefault();
        my_month--;
        if(my_month < 0){
            my_year--;
            my_month = 11;
        }
        refreshDate();//更新界面
    }
    //下个月的点击事件
    next.onclick = function(e){
        e.preventDefault();
        my_month++;
        if(my_month > 11){
            my_month = 0;
            my_year++;
        }
        refreshDate();//更新界面
    }



    // 图片放大
    $('.comment-imgs img').each(function(item,dom){
        $(dom).click(function(){
            let nowSrc = $(this).attr('src')
            $('#bigImg').attr('src',nowSrc)
            $('.bigImg').show()
            $('.closeImg').show()
            $('.Bigmask').show()
        })
    })
    $('.closeImg').click(function(){
        $('.bigImg').hide()
        $('.closeImg').hide()
        $('.Bigmask').hide()
    })
})