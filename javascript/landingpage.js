$(document).ready(function(){
	// var textColor = $('h1').css('color');
	$('#header').on('mouseover', function() {
  	$(this).animate({
  		opacity: 0.25,
  		paddingLeft: '+=350'
  	});
  	});
  	$('#header').on('mouseout', function() {
  	$(this).animate({
  		opacity: 0.95,
  		paddingLeft: '-=350'
  	});
  	});

  	// console.log("changed color of header!")
 //    $(this).css("color", "#ffee00");
 //    });


});

function textTransform() {
  document.getElementByClassName("menu-options").style.textTransform = "uppercase";
}