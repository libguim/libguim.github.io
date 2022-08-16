$(function(){


    // 네비게이션 토글 : 화면 너비 0 ~ 1024px
    if (matchMedia("screen and (max-width: 1024px)").matches) {
    
        $(".btn_nav").click(function(e){
                
                e.preventDefault();
                $("#vertical_area").toggleClass("active");
        });

        $("#contents_area").click(function(){

            $("#vertical_area").removeClass("active");
        });

    };


    // 네비게이션 메뉴 클릭 -> 컨텐츠 페이지 이동
    $(".nav ul li").click(function(){

        var target = $(this);
        var navIndex = target.index();

        $("#contents_area .section").hide();
        $("#contents_area .section").eq(navIndex).show();
        $("#contents_area .section").eq(navIndex).find("#all").show();

    });


    // 컨텐츠 탭메뉴
    var tabBtn = $(".tab_btn > a");
    var tabCon = $(".tab_con");

    tabCon.hide().eq(0).show();

    tabBtn.click(function(e){

        e.preventDefault();
        var target = $(this);
        var tabIndex = target.index();

        tabBtn.removeClass("active");
        target.addClass("active");

        tabCon.hide().eq(tabIndex).show();

    });





});//opening