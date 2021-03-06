var timer;
var slides = 6;
var timeLength = 5000;
function nextSlide(){
    clearTimeout(timer);
    var current = parseInt($("#counter").html());
    if(current <slides){
        var nextSlide = current +1;
    }else{
       var nextSlide = 1
    }
    //set rear image to the next slide (Still not visible)
    $("#slide_back img").attr("src","img/SlideImages/SlideShow"+nextSlide+".jpg");
    //clear animation queue, first true stops it, and second stop makes it jump to the end
    $("#slide_front").stop(true,true);
    //hide front image
    $("#slide_front").animate({opacity:"0"},700,"linear",function(){
        //change front image to the next src (currently hidden)
        $("#slide_front img").attr("src","img/SlideImages/SlideShow"+nextSlide+".jpg");
        //display front image
        $("#slide_front").css("opacity","1");
        //Change jumpers
        $("#jumpers li.current").removeAttr("class");
        $("#jumpers #"+nextSlide).attr("class","current");
        //update counter
        $("#counter").html(nextSlide);
        //set timer for next image
        timer = setTimeout("nextSlide()", timeLength);

    });
}
function prevSlide(){
    clearTimeout(timer);
    var current = parseInt($("#counter").html());
    if(current == 1){
        var nextSlide = slides;
    }else{
        var nextSlide = current -1;
    }
    //set rear image to the next slide (Still not visible)
    $("#slide_back img").attr("src","img/SlideImages/SlideShow"+nextSlide+".jpg");
    //clear animation queue, first true stops it, and second stop makes it jump to the end
    $("#slide_front").stop(true,true);
    //hide front image
    $("#slide_front").animate({opacity:"0"},700,"linear",function(){
        //change front image to the next src (currently hidden)
        $("#slide_front img").attr("src","img/SlideImages/SlideShow"+nextSlide+".jpg");
        //display front image
        $("#slide_front").css("opacity","1");
        //Change jumpers
        $("#jumpers li.current").removeAttr("class");
        $("#jumpers #"+nextSlide).attr("class","current");
        //update counter
        $("#counter").html(nextSlide);
        //set timer for next image
        timer = setTimeout("nextSlide()", timeLength);

    });
}
function jump(slide){
    clearTimeout(timer);
    //set rear image to the next slide (Still not visible)
    $("#slide_back img").attr("src","img/SlideImages/SlideShow"+slide+".jpg");
    //clear animation queue, first true stops it, and second stop makes it jump to the end
    $("#slide_front").stop(true,true);
    //hide front image
    $("#slide_front").animate({opacity:"0"},700,"linear",function(){
        //change front image to the next src (currently hidden)
        $("#slide_front img").attr("src","img/SlideImages/SlideShow"+slide+".jpg");
        //display front image
        $("#slide_front").css("opacity","1");
        //Change jumpers
        $("#jumpers li.current").removeAttr("class");
        $("#jumpers #"+slide).attr("class","current");
        //update counter
        $("#counter").html(slide);
        //set timer for next image
        timer = setTimeout("nextSlide()", timeLength);
    });
}

$(document).ready(function(){
    //initialize slide show.
    timer = setTimeout("nextSlide()", timeLength);
    $('#pic_wrapper h1').hide().delay(500).slideDown('slow');
    /*$('#pic_wrapper img').hide().delay(1500).slideDown('slow',function(){
        $jumbotron.mouseenter(function(){
            $jumbotron.stop().fadeTo('fast',1).animate({
               height: '+=20px'
           });
       }).mouseleave(function(){
          $jumbotron.stop().fadeTo('fast',0.6).animate({
              height: '-=20px'
          });;
       });
   });*/
    //fade in picture of contributors in AboutUs
    $('#michel').hide().delay(1500).fadeIn(1000);
    $('#steven').hide().delay(2500).fadeIn(1000);
    $('#eric').hide().delay(3500).fadeIn(1000);
    $('#michel2').hide().delay(4500).fadeIn(1000,function(){
        $('#pic_wrapper h1').animate({
            borderBottom:'2px solid black',
            width:'40%'
        },500);
    });


});