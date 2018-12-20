$(document).ready(function(){
	// var textColor = $('h1').css('color');
	$('#header').on('mouseover', function() {
  	$(this).animate({
  		opacity: 0.0,
  		paddingLeft: '+=80'
  	}, 500, function(){
  		$(this).remove();

  	});
  	});



  	// console.log("changed color of header!")
 //    $(this).css("color", "#ffee00");
 //    });


});

$(document).ready(function() {
  
  $('#box').on('mouseover', function(){
  	console.log('did this work?');
    $(this).css({'height': '30%'});
    
  });
});

// function changeKerning() {
//   document.getElementById("header").innerHTML = Date();
// }

function textTransform() {
  document.getElementByClassName("menu-options").style.textTransform = "uppercase";
}