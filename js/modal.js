function showModal(car){
    createModal();
    $('#myOverlay').fadeIn(297,	function(){
        $('#modal')
        .css('display', 'block')
        .animate({opacity: 1}, 198);
        // console.log(car['mark'],car['model'],car['year'],car['delivery']);
      });

      $('#modal-close, #myOverlay').click( function(){
        $('#modal').animate({opacity: 0}, 198, function(){

          $(this).css('display', 'none');
          $('#myOverlay').fadeOut(297);

        });
        $('#modal').remove();
      });

    $('#btn').on('click', function(evt) {

      evt.preventDefault();
      $('#btn').remove();

      let dataDelivery = car.delivery.split('-');
      let minDate = dataDelivery[0].split('.');
      let maxDate = dataDelivery[1].split('.');
      let test = minDate.join('.');

      let datapick = $(
        '<div id="datepicker"></div>'+
        `<input type="hidden" id="datepicker_value" value="${minDate.join('.')}">`
      )
      $('#modal').append(datapick);

      $(function(){

        let queryDate = minDate[2]+'-'+minDate[1]+'-'+minDate[0];
        minDate = new Date(minDate[2], minDate[1] - 1, minDate[0]);
        maxDate = new Date(maxDate[2], maxDate[1] - 1, maxDate[0]);

	       $("#datepicker").datepicker({
		         minDate: minDate,
		         maxDate: maxDate,
             defaultDate: new Date (queryDate),
             onSelect: function(dateText, inst){
               if (inst.input) {
                   inst.input.trigger('change');
                 }

               $('#modal-close').click();
               let date = dateText.split('/');
               date = date[1] + '.' + date[0] + '.' + date[2];
               carMessage(car,date);

	        },
          onClose: function(){
            $('#modal-close').click();
            $('#datepicker').remove();
          }
          })
      });
    })
}

function createModal() {
  let modal = $(
    '<div id = "modal">'+
        '<span id = "modal-close">ₓ</span>'+
        '<a href="" id = "btn" class="floating-button center">Доставить</a>'+
    '</div>'+
    '<div id = "myOverlay"></div>'
  )
  $('.container').append(modal)
}

function carMessage(car,date){
  $('.circle').remove();

  let message = $(
    '<div class = "car-message">'+
      '<p>'+
        `Вы выбрали ${car.mark} ${car.model} ${car.year}, `+
        `доставка ${date}`+
      '</p>'+
      '<a href="" id = "restart" class="border-button">Начать заново</a>'+
    '</div>')
  $('body').append(message)

  $('#restart').on('click', function(evt) {
    evt.preventDefault();
    restart();
  })
}
