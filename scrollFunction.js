function navScroll(seq) {
    var offset = $("#page" + seq).offset();
    $('html, body').animate({ scrollTop: offset.top }, 300);
    if (seq == '1') {
        $("#goto1").addClass("btn");
        $("#goto2").removeClass("btn");
        $("#goto3").removeClass("btn");
        $("#goto4").removeClass("btn");
    }
    else if (seq == '2') {
        $("#goto2").addClass("btn");
        $("#goto1").removeClass("btn");
        $("#goto3").removeClass("btn");
        $("#goto4").removeClass("btn");
    }
    else if (seq == '3') {
        $("#goto3").addClass("btn");
        $("#goto2").removeClass("btn");
        $("#goto1").removeClass("btn");
        $("#goto4").removeClass("btn");
    }
    else if (seq == '4') {
        $("#goto4").addClass("btn");
        $("#goto2").removeClass("btn");
        $("#goto1").removeClass("btn");
        $("#goto3").removeClass("btn");
    }
}

function color() {
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();

        console.log(scrollPos);

        if (0 <= scrollPos && scrollPos < $("#page2").offset().top) {
            $("#goto1").addClass("btn");
            $("#goto2").removeClass("btn");
            $("#goto3").removeClass("btn");
            $("#goto4").removeClass("btn");
        }
        else if ($("#page2").offset().top <= scrollPos && scrollPos < $("#page3").offset().top) {
            $("#goto2").addClass("btn");
            $("#goto1").removeClass("btn");
            $("#goto3").removeClass("btn");
            $("#goto4").removeClass("btn");
        }
        else if (scrollPos >= $("#page3").offset().top && scrollPos < $("#page4").offset().top) {
            $("#goto3").addClass("btn");
            $("#goto2").removeClass("btn");
            $("#goto1").removeClass("btn");
            $("#goto4").removeClass("btn");
        }
        else if (scrollPos >= $("#page4").offset().top) {
            $("#goto4").addClass("btn");
            $("#goto2").removeClass("btn");
            $("#goto1").removeClass("btn");
            $("#goto3").removeClass("btn");
        }
    });
}

window.onload = function () {
    this.setTimeout(function(){
        scrollTo(0,0);
    },100);

    this.typeWriter();

    var scrollPos = 0;
    color();
    $("#goto1").addClass("btn");
    $("#goto2").removeClass("btn");
    $("#goto3").removeClass("btn");
    $("#goto4").removeClass("btn");

    $("#btn3_1").removeClass("btn");
    $("#btn3_2").removeClass("btn");
    $("#btn3_3").removeClass("btn");

    color();
    var elm = ".section";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            }
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) { }
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) { }
                }
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 300, complete: function () {
                }
            });
        });

    });

    $("#button_detail1").click(function(){
        document.getElementById("popDetail_1").style.display='block';
    });
    $("#button_detail1").hover(function(){
        $("#illust").addclass('brightness');
    });
    $("#button_detail2").click(function(){
        document.getElementById("popDetail_2").style.display='block';
    });
    $("#close_img1").click(function(){
        document.getElementById("popDetail_1").style.display='none';
    });
    $("#close_img2").click(function(){
        document.getElementById("popDetail_2").style.display='none';
    });
}

function IntroChange(seq){
    if (seq == '1') {
        $("#intro_img1").fadeIn(500);
        $("#intro_img2").fadeOut(500);
        $("#intro_img3").fadeOut(500);
        $("#intro_img4").fadeOut(500);
    }
    else if (seq == '2') {
        $("#intro_img2").fadeIn(500);
        $("#intro_img1").fadeOut(500);
        $("#intro_img3").fadeOut(500);
        $("#intro_img4").fadeOut(500);
    }
    else if (seq == '3') {
        $("#intro_img3").fadeIn(500);
        $("#intro_img2").fadeOut(500);
        $("#intro_img1").fadeOut(500);
        $("#intro_img4").fadeOut(500);
    }
    else if (seq == '4') {
        $("#intro_img4").fadeIn(500);
        $("#intro_img2").fadeOut(500);
        $("#intro_img3").fadeOut(500);
        $("#intro_img1").fadeOut(500);
    }
}

function ProjectChange(seq){
    if (seq == '1') {
        $("#btn3_1").addClass("btn");
        $("#btn3_2").removeClass("btn");
        $("#btn3_3").removeClass("btn");
        $("#explain1").fadeIn(500);
        $("#explain2").fadeOut(500);
        $("#explain3").fadeOut(500);
        $("#project_img1").fadeIn(500);
        $("#project_img2").fadeOut(500);
        $("#project_img3").fadeOut(500);
    }
    else if (seq == '2') {
        $("#btn3_2").addClass("btn");
        $("#btn3_1").removeClass("btn");
        $("#btn3_3").removeClass("btn");
        $("#explain2").fadeIn(500);
        $("#explain1").fadeOut(500);
        $("#explain3").fadeOut(500);
        $("#project_img2").fadeIn(500);
        $("#project_img1").fadeOut(500);
        $("#project_img3").fadeOut(500);    }
    else if (seq == '3') {
        $("#btn3_3").addClass("btn");
        $("#btn3_2").removeClass("btn");
        $("#btn3_1").removeClass("btn");   
        $("#explain3").fadeIn(500);
        $("#explain2").fadeOut(500);
        $("#explain1").fadeOut(500); 
        $("#project_img3").fadeIn(500);
        $("#project_img2").fadeOut(500);
        $("#project_img1").fadeOut(500);    }
}

var text='YU YEONG\'s HOMEPAGE';
var i=0;
var speed = 70;

function typeWriter(){
    if(i<text.length){
        document.getElementById("tit").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}