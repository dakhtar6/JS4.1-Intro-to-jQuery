var text1 = $("<p></p>").text("I like cats")
var button2 = $("<button>Press Me</button>")
var button3 = $("<button>Press Me</button>")
	 
$(document).on('ready', function() {
  
 $("button").on("click", function(){
 // 	var text = {Words: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
	// Laudantium consequuntur dolores, iusto harum vel veniam exercitationem ea natus 
	// assumenda suscipit eius rerum sunt quam dolor non blanditiis inventore iure! Earum."}
 	$("body").append(text1); 
 }); 

 $("#button2").on("click", function() {
 	$("body").append("<h1>text1</h1>"); 

 }); 
  
});