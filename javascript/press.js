$(document).ready(function(){
	// var textColor = $('h1').css('color');
	$('#header').on('mouseover', function() {
  	$(this).css("background-color", "black");
  		// backgroundColor: 'black'
  		// paddingLeft: '+=350'
  	});
  	$('#header').on('mouseout', function() {
    $(this).css("background-color", "#990099");
  	
  	});

  	// console.log("changed color of header!")
 //    $(this).css("color", "#ffee00");
 //    });


});