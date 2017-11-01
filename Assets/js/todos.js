$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text'").on("keypress", function(e){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").prepend("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text'").fadeToggle();
});