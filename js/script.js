$(function () { 

      'use strict';

      //nice scroll
      $("html").niceScroll(); 

      // change the time of slides changes in first carousel to 600ms(6s).
      $('.carousel').carousel({
        interval:6000
      });

      // show color option div when click on the gear
      $(".gear-check").click(function(){
        $(".optionBox").toggleClass('active');
      });

      // change theme color on click
      var colorLi = $(".colorOption ul li");

      colorLi
      .eq(0).css("backgroundColor","blue").end()
      .eq(1).css("backgroundColor","#01fb07").end()
      .eq(2).css("backgroundColor","red").end()
      .eq(3).css("backgroundColor","#a200ff").end()
      .eq(4).css("backgroundColor","#00ffc0");


      colorLi.click(function(){
      
      $("link[href*='theme']").attr("href",$(this).attr("data-value"))
      });

      //scroll up button
      var scrollButton = $("#scroll-up");

      //show and hide the button
      $(window).scroll(function(){
        if($(this).scrollTop()>=700){
          scrollButton.show();
        }else{
          scrollButton.hide();
        }

    //use count to plugin in section statistics 
    if($(window).scrollTop() >= $('.statistics ').offset().top - 100) {

      $('.statistics .stats .firstP').countTo({
        from: 0,
        to: 9780,
        speed: 3000
      });
    
      $('.statistics .stats .secondP').countTo({
        from: 0,
        to: 30810,
        speed: 4000
      });
      
      $('.statistics .stats .thirdP').countTo({
        from: 0,
        to: 5320,
        speed: 2000
      });
    
      $('.statistics .stats .fourthP').countTo({
        from: 0,
        to: 98570,
        speed: 5000
      });

    }


      });

      /* the same code of if
      $(window).scroll(function(){
        $(this).scrollTop()>=700?scrollButton.show() : scrollButton.hide();
        });
      */

      //click on button to scroll up 
      scrollButton.click(function(){
      $("html,body").animate({scrollTop:0},600);
      });


      // fit text fot h1 , h2 & h3 in about page and faq page
      $(".about-first-header").fitText(1.2, { minFontSize: '30px', maxFontSize: '62px' });

      $(".about-second-header").fitText(1.2, { minFontSize: '20px', maxFontSize: '24px' });

      $(".about-third-header").fitText(1.2, { minFontSize: '25px', maxFontSize: '40px' });

      $(".faq-first-header").fitText(1.2, { minFontSize: '30px', maxFontSize: '62px' });




});


