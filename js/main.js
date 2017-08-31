
function main(){
	$('.thumbnail').click(function(){
    	$('.modal-body').empty();
  		var title = $(this).parent('a').attr("title");
  			$('.modal-title').html(title);
  			$($(this).parents('div').html()).appendTo('.modal-body');
  		$('#myModal').modal({show:true});

  		$("#pop").click(function() {
   			$('#imagepreview').attr('src', $('#imageresource').attr('src'));
   				$('#imagemodal').modal('show'); 
		});
	});
};

$(document).ready(main);

// $("#pop").on("click", function() {
//    $('#imagepreview').attr('src', $('#imageresource').attr('src'));
//    $('#imagemodal').modal('show'); 
// });


