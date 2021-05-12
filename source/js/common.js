$(function () {



	var windowh = $(window).height();
	var windowW = $(window).width();





    


		$(window).scroll(function(e) {

			var scrollY = $(document).scrollTop();

			if (scrollY > "50") {
                $(".sub-layout #header, .sub-layout div.sub-head, .sub-layout article.menu-depth2").addClass("fix");

			} else {
                $(".sub-layout #header").removeClass("fix");
                $(".sub-layout #header, .sub-layout div.sub-head, .sub-layout article.menu-depth2").removeClass("fix");

                $("nav.sub-menu").removeClass("active");

            }

		 });
         


         $("div.language button").on("click", function () {
            $("div.language").toggleClass("on");
        });


        $("button.main-menu").on("click", function () {
            $("nav#main-menu").toggleClass("on");
        });


        $("nav#main-menu button.close").on("click", function () {
            $("nav#main-menu").toggleClass("on");
        });


        $("nav.navi button").on("click", function () {
            $("nav.navi").toggleClass("active");
        });

        $(".menu-depth3 button").on("click", function () {
            $(".menu-depth3").toggleClass("active");
        });



        $("nav.sub-menu button").on("click", function (e) {

                $("nav.sub-menu").toggleClass("active");

        });


        // $("article.menu-depth3 a.active").on("click", function (e) {

        //     if ( (windowW < 1200) || ($("div.sub-head").hasClass("fix")) ) {
        //         console.log("무야호");

        //         $("article.menu-depth3").toggleClass("on");

        //         e.preventDefault();
        //     }

        // });





        $('.event-program-list li p.image').each(function () {
            $(this).css(
                "background",
                "url('" + $(this).find("img").attr("src") + "') no-repeat center top / cover"
            );
        });


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
