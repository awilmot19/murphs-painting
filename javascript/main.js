var siteName = "https://awilmot19.github.io/murphs-painting";

var folder = "siteName/images/gallery/";
var pageLoaded = 0;
var galleryHeight;

$(document).ready(function() {
	updateImages();
  initiateButtons();
});

function updateImages() {
	// $(".outer-gallery").children().each(function () {
	// 	$(this).fadeOut().delay(200);
	// 	//$(this).fadeOut(); // "$(this)" is the current element in the loop
	// });
	if (pageLoaded) {
		// $('selector').fadeTo(500, 0, function(){
   // 		$('selector').css("visibility", "hidden");
		// });
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

(function ($) {

    'use strict';

    $(document).ready(function () {

        // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $site = $('html, body'),
            transition = 'fade',
            smoothState;

        smoothState = $main.smoothState({
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                current = current ? current : 0;
                target = target ? target : 0;
                if (current === target) {
                    transition = 'fade';
                } else if (current < target) {
                    transition = 'moveright';
                } else {
                    transition = 'moveleft';
                }
            },
            onStart: {
                duration: 400,
                render: function (url, $container) {
                    $main.attr('data-transition', transition);
                    $main.addClass('is-exiting');
                    $site.animate({scrollTop: 0});
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.html($newContent);
                    $container.removeClass('is-exiting');
                    folder = "siteName/images/gallery/";
                    pageLoaded = 0;
                    updateImages();
                    initiateButtons();
                }
            },
        }).data('smoothState');

    });

}(jQuery));

function loadImages() {
	$.ajax({
			url : folder,
			success: function (data) {
					$(data).find("a").attr("href", function (i, val) {
							if( val.match(/\.(jpe?g|png|gif)$/) ) {
								$(".outer-gallery").append( "<img src='"+ folder + val +"' class='gallery-item'>");
							}
					});
			}
	});
	$(".outer-gallery").fadeTo(700, 1, function () {
		$(".outer-gallery").css({"height": "auto"});
	});
}

function initiateButtons() {
  $('.button-all').click(function(){
      $('.button-all').addClass("selected");
  		$('.button-exterior').removeClass("selected");
  		$('.button-interior').removeClass("selected");
  		folder = "siteName/images/gallery/";
  		updateImages();
  });

  $('.button-exterior').click(function(){
  	$('.button-all').removeClass("selected");
  	$('.button-exterior').addClass("selected");
  	$('.button-interior').removeClass("selected");
  	folder = "siteName/images/gallery/exterior/";
  	updateImages();
  });

  $('.button-interior').click(function(){
  	$('.button-all').removeClass("selected");
  	$('.button-exterior').removeClass("selected");
  	$('.button-interior').addClass("selected");
  	folder = "siteName/images/gallery/interior/";
  	updateImages();
  });
}
