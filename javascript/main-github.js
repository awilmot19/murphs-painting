
var siteName = "https://awilmot19.github.io/murphs-painting";

var folder = "/murphs-painting/images/gallery/";
var numImage = 26;
var pageLoaded = 0;
var galleryHeight;

$(document).ready(function() {
	updateImages();
  initiateButtons();
	smoothScroll(300);
	$('#contact-form').on('submit', function () {
    $(".row-form, #submit_button").fadeOut(1000, function() { $("#confirmation").fadeIn(1000); });		
    return false;
});
});

function updateImages() {
	if (pageLoaded) {
		$(".outer-gallery").fadeTo(700, 0, function () {
			var galleryHeight = $(".outer-gallery").css("height");
			$(".outer-gallery").css({"height": galleryHeight});
			$(".outer-gallery").empty();
			loadImages();
		});
	}
	else {
		$(".outer-gallery").fadeTo(0,0);
		loadImages();
		pageLoaded = 1;
	}
}

function loadImages() {
  for (var i = 1; i <= numImage; i++) {
    // create a closure to preserve the value of "i"
    // (function(i){
		//
    //   window.setTimeout(function(){
        $(".outer-gallery").append("<img src='" + folder + i +".jpg' class='gallery-item'>").fadeIn();
    //   }, i * 100);
		//
    // }(i));
  }
  $(".outer-gallery").fadeTo(700, 1, function () {
    $(".outer-gallery").css({"height": "auto"});
  });
	// $.ajax({
	// 		url : folder,
	// 		success: function (data) {
	// 				$(data).find("a").attr("href", function (i, val) {
	// 						if( val.match(/\.(jpe?g|png|gif)$/) ) {
	// 							$(".outer-gallery").append( "<img src='"+ folder + val +"' class='gallery-item'>");
	// 						}
	// 				});
	// 		}
	// });
	// $(".outer-gallery").fadeTo(700, 1, function () {
	// 	$(".outer-gallery").css({"height": "auto"});
	// });
}

function initiateButtons() {
  $('.button-all').click(function(){
      $('.button-all').addClass("selected");
  		$('.button-exterior').removeClass("selected");
  		$('.button-interior').removeClass("selected");
  		folder = "/murphs-painting/images/gallery/";
      numImage = 26;
  		updateImages();
  });

  $('.button-exterior').click(function(){
  	$('.button-all').removeClass("selected");
  	$('.button-exterior').addClass("selected");
  	$('.button-interior').removeClass("selected");
  	folder = "/murphs-painting/images/gallery/exterior/";
    numImage = 15;
  	updateImages();
  });

  $('.button-interior').click(function(){
  	$('.button-all').removeClass("selected");
  	$('.button-exterior').removeClass("selected");
  	$('.button-interior').addClass("selected");
  	folder = "/murphs-painting/images/gallery/interior/";
    numImage = 11;
  	updateImages();
  });
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );
			console.log(target);
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
