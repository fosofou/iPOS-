function showModal(car){
    $('#myOverlay').fadeIn(297,	function(){
        $('#modal') 
        .css('display', 'block')
        .animate({opacity: 1}, 198);
        console.log(car['mark'],car['model'],car['year'],car['delivery']);
      });

      $('#modal-close, #myOverlay').click( function(){
        $('#modal').animate({opacity: 0}, 198, function(){
          $(this).css('display', 'none');
          $('#myOverlay').fadeOut(297);
        });
      });
}