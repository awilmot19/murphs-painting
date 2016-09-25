var folder = "/images/gallery/";
var pageLoaded = 0;
var galleryHeight;

$(document).ready(function() {
	updateImages();
});

$('.button-all').click(function(){
    $('.button-all').addClass("selected");
		$('.button-exterior').removeClass("selected");
		$('.button-interior').removeClass("selected");
		folder = "/images/gallery/";
		updateImages();
});

$('.button-exterior').click(function(){
	$('.button-all').removeClass("selected");
	$('.button-exterior').addClass("selected");
	$('.button-interior').removeClass("selected");
	folder = "/images/gallery/exterior/";
	updateImages();
});

$('.button-interior').click(function(){
	$('.button-all').removeClass("selected");
	$('.button-exterior').removeClass("selected");
	$('.button-interior').addClass("selected");
	folder = "/images/gallery/interior/";
	updateImages();
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

// /\.(jpe?g|png|gif)$/
