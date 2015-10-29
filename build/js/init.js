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

    $('#btnSuscribe').click(function(e){
      e.preventDefault();

      // $.post('/api/suscribers/add')
        //   .then(success, error);
      
      Materialize.toast('Thanks for joining our community!', 4000);
        
    });
  });