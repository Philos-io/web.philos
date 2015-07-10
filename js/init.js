(function($){
  $(function(){

    $('.button-collapse').sideNav();
     $('ul.tabs').tabs();
  }); // end of document ready
  
})(jQuery); // end of jQuery name space

  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

   /* $('.collapsible-header').click(function(){
    	var $element = $('i', $(this));

    	if($(this).hasClass('active')) // then close and remove it
    		$element.removeClass('fa-arrow-circle-o-down').addClass('fa-arrow-circle-o-up');
    	else
    		$element.removeClass('fa-arrow-circle-o-up').addClass('fa-arrow-circle-o-down');
	});*/
  });