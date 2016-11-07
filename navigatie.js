$(document).ready(function() {
		$('.installatie-nav').hide(); //Hide children by default

$('.nav').children().click(function(){
    $(this).children('.installatie-nav').slideToggle('slow');     
}).children('.installatie-nav').click(function (event) {
    event.stopPropagation();
});