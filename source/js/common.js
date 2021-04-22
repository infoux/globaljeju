$(function () {



	var windowh = $(window).height();
	var windowW = $(window).width();
    
		$(window).scroll(function(e) {

			var scrollY = $(document).scrollTop();

			if (scrollY > "2") {
				$("#header").addClass("bg");
                $("#header h1 a").removeClass("white");

			} else {
				$("#header").removeClass("bg");

            }

		 });


    $('.main-image li').each(function () {
        $(this).css(
            "background",
            "url('" + $(this).find("img").attr("src") + "') no-repeat center top / cover"
        );
    });

    $('.gallery li').each(function () {
        $(this).css(
            "background",
            "url('" + $(this).find("img").attr("src") + "') no-repeat center top / cover"
        );
    });

    $("div.language button").on("click", function () {
        $("div.language").toggleClass("on");
    });

    if ($("div#content.main section:first-of-type()").attr("data-section-name") === "EVENT") {
        // $("header#header").addClass("black");

        $("#header h1 a").addClass("white");
    }


    if (windowW > 1200) {
        $.scrollify({

            section: ".fullpage",
            scrollbars:false,
            interstitialSection: "#footer",
            before: function (i, panels) {
                var ref = panels[i].attr("data-section-name");


                panels[i].find(".gallery0,.gallery1,.gallery2").addClass("moved");

                if (ref === "EVENT") {
                    $("#header").removeClass("black");

                // $("section.main").find(".gallery0,.gallery1,.gallery2").removeClass("moved");

                }
                
                if (ref === "MAIN") {
                    $("#header").removeClass("black");

                // $("section.main").find(".gallery0,.gallery1,.gallery2").removeClass("moved");

                }
                if (ref === "COMMUNITY") {
                    $("#header").addClass("black");

                    // $(".ios7 .content").removeClass("moved");
                    initialPosition();

                }
                if (ref === "MAP") {
                    $("#header").addClass("black");
                    // $(".ios7 .content").addClass("moved");
                    $(".ios7 .gallery0").css("top", 0);
                    
                }
            },
            after: function (i, panels) {
                var ref = panels[i].attr("data-section-name");

                if (ref === "EVENT") {
                    $("#header h1 a").addClass("white");
                    // $(".main").find(".gallery0,.gallery1,.gallery2").removeClass("moved");
                }
                for (var j = 0; j < panels.length; j++) {
                    if (j > i) {

                        //panels[j].find(".moved").removeClass("moved");
                    }
                }
            },
            afterResize: initialPosition,
            afterRender: initialPosition
        });
    }





    function initialPosition() {

        var current = $
            .scrollify
            .current();

        // if (current.hasClass("ios7") === false) {
        //     var height = parseInt($(".ios7").height());
        //     var f = parseInt($(".features .gallery1").height()) - 50;

        //     var top = 0 - (height * 0.4) - (height - f);
        //     $(".ios7 .gallery0").css("top", top);
        // } else {
        //     $("section.main").find(".gallery0,.gallery1,.gallery2").addClass("moved");
        // }

    }






    var $slider1 = $('.slider1'),
        $firstSlide1 = $slider1
            .find('li')
            .first() // 첫번째 슬라이드
            .stop(true)
            .animate({
                'opacity': 1
            }, 200); // 첫번째 슬라이드만 보이게 하기

    function PrevSlide1() { // 이전버튼 함수
        stopSlide1();
        startSlide1(); //타이머 초기화
        var $lastSlide1 = $slider1
            .find('li')
            .last() //마지막 슬라이드
            .prependTo($slider1); //마지막 슬라이드를 맨 앞으로 보내기
        $secondSlide1 = $slider1
            .find('li')
            .eq(1) //두 번째 슬라이드 구하기
            .stop(true)
            .animate({
                'opacity': 0
            }, 400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
        $firstSlide1 = $slider1
            .find('li')
            .first() //맨 처음 슬라이드 다시 구하기
            .stop(true)
            .animate({
                'opacity': 1
            }, 400); //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
    }

    function NextSlide1() { // 다음 버튼 함수
        stopSlide1();
        startSlide1(); //타이머 초기화
        $firstSlide1 = $slider1
            .find('li')
            .first() // 첫 번째 슬라이드
            .appendTo($slider1); // 맨 마지막으로 보내기
        var $lastSlide1 = $slider1
            .find('li')
            .last() // 맨 마지막으로 보낸 슬라이드
            .stop(true)
            .animate({
                'opacity': 0
            }, 400); // fadeOut시키기
        $firstSlide1 = $slider1
            .find('li')
            .first() // 맨 처음 슬라이드
            .stop(true)
            .animate({
                'opacity': 1
            }, 400); // fadeIn 시키기
    }

    startSlide1(); // 자동 슬라이드 시작

    var theInterval1;

    function startSlide1() {
        theInterval1 = setInterval(NextSlide1, 5000); //자동 슬라이드 설정
    }

    function stopSlide1() { //자동 멈추기
        clearInterval(theInterval1);
    }





    var $slider2 = $('.slider2'),
        $firstSlide2 = $slider2
            .find('li')
            .first() // 첫번째 슬라이드
            .stop(true)
            .animate({
                'opacity': 1
            }, 200); // 첫번째 슬라이드만 보이게 하기

    function PrevSlide2() { // 이전버튼 함수
        stopSlide2();
        startSlide2(); //타이머 초기화
        var $lastSlide2 = $slider2
            .find('li')
            .last() //마지막 슬라이드
            .prependTo($slider2); //마지막 슬라이드를 맨 앞으로 보내기
        $secondSlide2 = $slider2
            .find('li')
            .eq(1) //두 번째 슬라이드 구하기
            .stop(true)
            .animate({
                'opacity': 0
            }, 400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
        $firstSlide2 = $slider2
            .find('li')
            .first() //맨 처음 슬라이드 다시 구하기
            .stop(true)
            .animate({
                'opacity': 1
            }, 400); //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
    }

    function NextSlide2() { // 다음 버튼 함수
        stopSlide2();
        startSlide2(); //타이머 초기화
        $firstSlide2 = $slider2
            .find('li')
            .first() // 첫 번째 슬라이드
            .appendTo($slider2); // 맨 마지막으로 보내기
        var $lastSlide2 = $slider2
            .find('li')
            .last() // 맨 마지막으로 보낸 슬라이드
            .stop(true)
            .animate({
                'opacity': 0
            }, 400); // fadeOut시키기
        $firstSlide2 = $slider2
            .find('li')
            .first() // 맨 처음 슬라이드
            .stop(true)
            .animate({
                'opacity': 1
            }, 400); // fadeIn 시키기
    }

    startSlide2(); // 자동 슬라이드 시작

    var theInterval2;

    function startSlide2() {
        theInterval2 = setInterval(NextSlide2, 5000); //자동 슬라이드 설정
    }

    function stopSlide2() { //자동 멈추기
        clearInterval(theInterval2);
    }




    $("section.map .select-box button").on("click", function(e){



        $("section.map .select-box ul").toggleClass("active");


    });






    // var iid;
	
    // $(window).on("resize", function(){

    //     windowh = $(window).height();
    //     windowW = $(window).width();

        
    //     clearTimeout(iid);

    //     iid = setTimeout(doneResizing, 500);
        
    // });
    

    // function doneResizing(){

    //     location.reload();
    //     }




        $('.map-wall').plaxify({"xRange":60,"yRange":60});
        $.plax.enable();








        var $popStatus = $('.pagingInfo');
        var $popSlickElement = $('.outsite-slider div.slider')
    
        $popSlickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    
            var i = (currentSlide ? currentSlide : 0) + 1;
    
            $popStatus.html('<strong>'+ i + '</strong> /' + slick.slideCount);
    
        });
    
    
        $popSlickElement.slick({  
            mobileFirst: true,
            autoplay:true,
            speed: 1000,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow:$('.outsite-slider button.right'),
            prevArrow:$('.outsite-slider button.left'),
    
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        variableWidth:true,
                        dotsClass: 'custom_paging',
                        customPaging: function (slider, i) {
                            //FYI just have a look at the object to find available information
                            //press f12 to access the console in most browsers
                            //you could also debug or look in the source
                            var slideNumber   = (i + 1),
                                totalSlides = slider.slideCount;
                            return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '</span></a>';
                        }
    
                    }
                }
            ]
    
            
            
        });



});
