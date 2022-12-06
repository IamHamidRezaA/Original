/// <reference path="C:\Users\Hamid\AppData\Local\Programs\Microsoft VS Code\resources\app\extensions\html-language-features\server\lib\jquery.d.ts"/>
/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
//var nav = document.getElementsByClassName("navbar")[0].addEventListener("scroll", TrNav);
// window.onscroll = function () { TrNav() };
// function TrNav() {

//     var pos = document.getElementsByClassName("navbar")[0];
//     if (document.body.scrollTop >= 350 || document.documentElement.scrollTop >= 350) {

//         pos.classList.add("solid");
//     }
//     else {
//         pos.classList.remove("solid");
//     }
// }
function checkScroll() {
    if ($(window).scrollTop() >= 300) {
        $(".navbar").addClass("solid");
    }
    else {
        $(".navbar").removeClass("solid");
    }
}
/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
$(document).ready(function () {
    checkScroll();
    $(window).scroll(checkScroll);
    $(".navbar-toggler").click(function () { 
        if ($(window).scrollTop() <= 300) {
            $(".navbar").toggleClass("solid-toggler"); //همون کلاس لیست دات تاگل خودمونه
        }
     });
})

/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK ==========*/

 $(document).on("click", "a[href^='#']", function (event) {
// تک خط کد پایین کار خط کد بالا رو انجام میده
    // $("a[href^='#']").click(function (event) {

    event.preventDefault(); //از رفتار پیش فرض مرورگر زمان کلیک روی لینک ها جلوگیری میکند
    $(".navbar-toggler").addClass("collapsed"); // دکمه منوبار موبایلی در حالت عادی که هنوز روش کلیک نشده کلاس کولپسد را دارد. وقتی روی آن کلیک شود گزینه های منو نمایش داده شده و کلاس کولپسد حذف می شود. پس اولین قدم برای رفتن گزینه های منو در زمان کلیک روی هر گزینه اضافه کردن این کلاس به دکمه منوبار است.
    $("#navbarResponsive").removeClass("show");//قدم دوم اینه که وقتی تو حالت موبایل روی دکمه منو کلیک میشه اون دایو که داخل یو ال و لی ها هستند کلاس نمایش یا شو میگیره تا نشون داده بشه پس این کلاس بعد از کلیک روی گزینه های منو باید گرفته بشه
    setTimeout(function () {
        $(".navbar").removeClass("solid-toggler");
    }, 300);

    $('html, body').animate({ scrollTop: $($.attr(this, 'href')).offset().top }, 500);


    });


    /*
اینا کد خودمه اینم جوابه:
    var iid = event.target.href;
    iid = document.getElementById(iid.substring(iid.lastIndexOf("#") + 1)).offsetTop;

     $("html, body").delay(2000).animate({
         scrollTop:  iid
    }, 2000); 

    */
       
  

/*========== BOUNCING DOWN ARROW ==========*/

$(document).ready(function () { 
    $(window).scroll(function () { 
      $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250)

     })
 });


/*========== LIGHTBOX IMAGE GALLERY ==========*/
$(document).ready(function () { 
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true,
        'imageFadeDuration': 500
    });
 });

/*========== MEET THE TEAM CAROUSEL ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
    $('#team-carousel').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1200, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //768px width and up display 2 items
            },
            992 : {
                items: 3 //992px width and up display 3 items
            }
        }
    });
  });

/*========== SKILLS COUNTER ==========*/
$(document).ready(
    function () {
        $('.counter').counterUp({
            delay: 60,
            time: 3000,
        });
    
    });

/*========== CLIENTS CAROUSEL ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
    $('#clients-carousel').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1600, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //768px width and up display 2 items
            }
        }
    });
  });


/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) { /* کلمه کلیدی دیس اینجا به ویندو اشاره داره */
            $('.top-scroll').fadeIn();
        }
        else {
            $('top-scroll').fadeOut();
        }
        
    });
}

);

/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/

$(document).ready(function () { 
    if ($(window).width() < 768 ) {
        $('div').attr('data-animation', 'animate__fadeInUp');
        $('div').attr('data-delay', '0s');
    }
 });


/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function () { // a self calling function
    function onScrollInit(items, trigger) { // a custom made function
        items.each(function () { //for every element in items run function
            var osElement = $(this), //set osElement to the current
                osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
                osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

            osElement.css({ //change css of element
                '-webkit-animation-delay': osAnimationDelay, //for safari browsers
                '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
                'animation-delay': osAnimationDelay //normal
            });

            var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

            osTrigger.waypoint(function () { //scroll upwards and downwards
                osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
            }, {
                triggerOnce: true, //only once this animation should happen
                offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
            });
        });
    }

    onScrollInit($('.os-animation')); //function call with only items
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});


/*========== CONTACT FORM INPUT VALIDATION ==========*/
//Original Resource: https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form
$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "../contact/gmail-contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});

/*========== Up botton ==========*/
