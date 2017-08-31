var main = function() {
 $('.more-btn').click(function(){
	$(this).next().slideToggle('fast'); 
}); 
  $('.share').click(function(){
	$(this).next().slideToggle('fast'); 
}); 
  $('.notification').click(function(){
	$(this).toggleClass('active'); 
  }); 
};

$(document).ready(main);
