
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  
  $( function() {
    $( "#everything" ).draggable();
    $( "#everything2" ).draggable();
  } );

 //$( function() {
    //$( "#everything" ).on( "click", function() {
      //$( "#everything" ).addClass( "slideOutRight", 1000, callback );
    //});
  //} );




$(document).ready(function(){
 $( function() {
    $( "#everything" ).draggable();
    $( "#everything2" ).draggable();
  } );

  $( function() {
    $( "#everything" ).on( "click", function() {
      $( "#everything" ).addClass( "slideOutRight", 1000, callback );
    });
   } );
$( "#draggable").draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
       $( this )
         // .addClass( "ui-state-highlight" );
         alert("dropped!");
          // .find( "p" )
           //  .html( "Dropped!" );
      }
    });
//if (y<660px){
  //**animate off screen
}


  
// $( function() {
    //$( "#everything" ).on( "click", function() {
      //$( "#everything" ).addClass( "slideOutRight", 1000, callback );
    //});

 };