
  $( function() {
    $( "#everything" ).draggable();
    $( "#everything2" ).draggable();
    $( "#derp" ).draggable();
    $( "#dogbutabike" ).draggable();

  });
  

$( "#everything").draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
       $( this )
         // .addClass( "ui-state-highlight" );
         alert("dropped!");
   } ) ;


  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>


