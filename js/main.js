$('document').ready(function() {

    // 防止click和滑动重复给nav加curr
    var fromClick = false;
    // 设置模块相对应的top值
    var offsetArr = [];

    function setOffset() {
        offsetArr = [
            { top: $('.banner').offset().top - 88, isFirstLoad: false },
            { top: $('.about-us').offset().top - 88, isFirstLoad: false },
            { top: $('.brand-concept').offset().top - 88, isFirstLoad: false },
            { top: $('.group-info').offset().top - 88, isFirstLoad: false },
            { top: $('.recruit').offset().top - 88, isFirstLoad: false },
            { top: $('.investment').offset().top - 88, isFirstLoad: false }
        ];
    }
    setOffset();





    // nav点击 滑动指定位置的效果
    $('.nav-in ul li').click(function() {
        console.log($(this).index())
        // 中英文点击
        if ($(this).index() == 6) {
            return;
        }

        if (offsetArr[$(this).index()].top || offsetArr[$(this).index()].top == 0) {
            $(this).addClass('cur').siblings('li').removeClass('cur')
            $('html,body').animate({ scrollTop: offsetArr[$(this).index()].top }, 800);
            fromClick = true;
            setTimeout(function() {
                fromClick = false;
            }, 800)
        }
    });





    // 鼠标划过
    $('.nav-in ul li').mouseover(function() {
        if ($(this).index() == 6) {
            return;
        }

        $(this).addClass('cur').siblings('li').removeClass('cur')
    });
    $('.nav-in ul li').mouseout(function() {
        if ($(this).index() == 6) {
            return;
        }
        var scrolltop = $(document).scrollTop();
        scrollFn(scrolltop)
        scrollFnAni(scrolltop);
    });




    // 中英文切换
    $('.nav-in ul li .en').click(function() {
        $(this).addClass('cur').siblings('a').removeClass('cur');
    });
    $('.nav-in ul li .zh').click(function() {
        $(this).addClass('cur').siblings('a').removeClass('cur');
    });




    // 关于我们页面
    $('.about-us-down .about-us-item').mouseover(function() {
        $(this).addClass('hover').siblings('.about-us-item').removeClass('hover');
    })
    $('.about-us-down .about-us-item').mouseout(function() {
        $(this).removeClass('hover');
    });





    // 页面滚动 让导航相应选项加上cur
    function scrollFn(scrolltop) {
        if (fromClick) {
            return;
        }
        if (scrolltop >= 0 && scrolltop < offsetArr[1].top) {
            $('.nav-in ul li').eq(0).addClass('cur').siblings().removeClass('cur')
            console.log('首页');
        } else if (scrolltop >= offsetArr[1].top && scrolltop < offsetArr[2].top) {
            $('.nav-in ul li').eq(1).addClass('cur').siblings().removeClass('cur')
            console.log('关于我们')
        } else if (scrolltop >= offsetArr[2].top && scrolltop < offsetArr[3].top) {
            $('.nav-in ul li').eq(2).addClass('cur').siblings().removeClass('cur')
            console.log('品牌概念')
        } else if (scrolltop >= offsetArr[3].top && scrolltop < offsetArr[4].top) {
            $('.nav-in ul li').eq(3).addClass('cur').siblings().removeClass('cur')
            console.log('集团动态')
        } else if (scrolltop >= offsetArr[4].top && scrolltop < offsetArr[5].top) {
            $('.nav-in ul li').eq(4).addClass('cur').siblings().removeClass('cur')
            console.log('招贤纳士')
        }


        if (scrolltop + $(window).height() >= offsetArr[2].top && scrolltop <= offsetArr[3].top) {
            $('.brand-concept').css('background-position', 'center ' + (100 - (scrolltop + $(window).height() - offsetArr[2].top) * 0.2) + 'px')
            // $('.brand-concept').css('background-position', 'center ' + (-672 + (scrolltop + $(window).height() - offsetArr[2]) * 0.5) + 'px')
        }
    }

    // 让title加cur
    function scrollFnAni(scrolltop) {
        let windowHeight = $(window).height()/1.5;
        if (scrolltop >= 0 && scrolltop < offsetArr[1].top) {
            console.log('首页2222');
            if (!$('.banner .sub-title').hasClass('sub-title-current')) {
                $('.banner .sub-title').addClass('sub-title-current')
            }
        }
        if (scrolltop >= offsetArr[1].top - windowHeight && scrolltop < $('.about-us-down').offset().top) {
            if (!$('.about-us').hasClass('sub-title-current')) {
                $('.about-us').addClass('sub-title-current')
            }
            console.log('关于我们2222')
        }

        if (scrolltop >= $('.about-us-down').offset().top - windowHeight && scrolltop < offsetArr[2].top) {
            if (!$('.about-us-down').hasClass('sub-title-current')) {
                $('.about-us-down').addClass('sub-title-current')
            }
            console.log('关于我们 第二部分')
        }
        if (scrolltop >= offsetArr[2].top - windowHeight && scrolltop < offsetArr[3].top) {
            if (!$('.brand-concept').hasClass('sub-title-current')) {
                $('.brand-concept').addClass('sub-title-current')
            }
            console.log('品牌概念2222')
        }
        
        if (scrolltop >= offsetArr[3].top - windowHeight && scrolltop < offsetArr[4].top) {
            if (!$('.group-info').hasClass('sub-title-current')) {
                $('.group-info').addClass('sub-title-current')
            }
            console.log('集团动态222')
        }
        if (scrolltop >= offsetArr[4].top - windowHeight && scrolltop < offsetArr[5].top) {

            console.log('招贤纳士222')
        }
    }






    $(document).scroll(function(ev) {
        var scrolltop = $(document).scrollTop();
        scrollFn(scrolltop);
        scrollFnAni(scrolltop)
    });

    scrollFn($(document).scrollTop())
    scrollFnAni($(document).scrollTop())
});