// $(document).ready(function(){
// 	// var textColor = $('h1').css('color');
// 	$('h1').on('mouseover', function() {
//   	$(this).animate({
//   		opacity: 0.0,
//   		paddingLeft: '+=80'
//   	}, 500, function(){
//   		$(this).remove();

//   	});
//   	});



//   	// console.log("changed color of header!")
//  //    $(this).css("color", "#ffee00");
//  //    });

// 	// $('h1').on("mouseout", function() {
//  //    	$(this).css("color", "#595959");

//  //    });


// });

$(document).ready(function() {
  
  $('h1').on('mouseover', changeKerning(){
  	console.log('did this work?');
    $(this).css({'font-size': '100px', 'letter-spacing': '10px'});
    
  });
});

// function changeKerning() {
//   document.getElementById("demo").innerHTML = Date();
// }

function textTransform() {
  document.getElementByClass("menu-options").style.textTransform = "uppercase";
}