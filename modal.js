var modal = (function(){
  var 
  method = {},
  $overlay,
  $modal,
  $content,
  $close;

  // Center the modal in the viewport
  method.center = function () {};

  // Open the modal
  method.open = function (settings) {};

  // Close the modal
  method.close = function () {};

  return method;
}());

$overlay = $('<div id="overlay"></div>');
$modal = $('<div id="modal"></div>');
$content = $('<div id="content"></div>');
$close = $('<a id="close" href="#">close</a>');

$modal.hide();
$overlay.hide();
$modal.append($content, $close);

$(document).ready(function(){
  $('body').append($overlay, $modal);
});
//This generates HTML structure for modal, and adds it to the document

modal.center = function () {
  var top, left;

  top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
  left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

  $modal.css({
    top:top + $(window).scrollTop(), 
    left:left + $(window).scrollLeft()
  });
};

modal.open = function (settings) {
	
  $content.empty().append(settings.content);

  $modal.css({
    width: settings.width || 'auto', 
    height: settings.height || 'auto'
  })

  modal.center();

  $(window).bind('resize.modal', modal.center);

  //$modal.show();
  $modal.fadeIn(1000);
  $overlay.show();
  
  
};

modal.close = function () {
  $modal.hide();
  $overlay.hide();
  $content.empty();
  $(window).unbind('resize.modal');
};

$close.click(function(e){
  e.preventDefault();
  modal.close();
});


$("#trigger_url").click(function(){
	
	
 
	var user_input = $("#url_data").val();
	
	var res = user_input.match(/(http(s?))\:\/\//gi);
	if(!res)
	{
		
	alert("The URL is InValid!(Did you entered http(s)://www ?)");
	}
	else
	{
		
	modal.open({content: $(' <section><meta name="viewport" content="width=device-width, initial-scale=1"><iframe frameborder="0" width="100%" height="100%" src="'+user_input+'" style="position: relative; height: 100%; width: 100%;"></iframe>	</section>'), width: "90%", height: "90%"});
	}
	//modal.open({content: $("<p>Howdy</p>"), width: "500px", height: "200px"});
});

