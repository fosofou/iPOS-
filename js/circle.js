function drawCircle(){
  setTimeout( function(){
     $(".content").remove();

     let circle = $(
    '<div class = "container">'+
     "<div class = 'circle'>"+
         "<div class = 'press' disabled >Нажать</div>" +
     "</div>"+
     '</div>');
     $('body').append(circle);

     let $circle = $(".circle");
     $('body').css(
       {'overflow-y':'scroll'}
     );
     rotateCircle($circle);
   },2000);
}

function selectCar(){

  let markSelect = $(
    '<select id="mark_select" name="mark_select">'+
      '<option value="" disabled selected>Марка</option>'+
    '</select>'
  )
  let modelSelect = $(
    '<select  disabled = "true" id="model_select" name="model_select">'+
      '<option value="" disabled selected>Модель</option>'+
    '</select>'
  )
  let yearSelect = $(
    '<select  disabled = "true" id="year_select" name="year_select">'+
      '<option value="" disabled selected>Год</option>'+
    '</select>'
  )

  let markSet = new Set();
  for (let car of CarsList.cars){
    markSet.add(car['mark']);
  }

  for (let mark of markSet){
    $(markSelect).append($(`<option value="${mark}">${mark}</option>`));
  }

  $('.circle').append($(
    '<div class = "car-select"></div>'
  ))
  $('.car-select').append(markSelect);
  $('.car-select').append(modelSelect);
  $('.car-select').append(yearSelect);

  $('#mark_select').on('change', function(){

    $("#model_select").attr("disabled",false);
    $("#year_select").attr("disabled",true);

    let modelSet = new Set();
    modelSet.add('Модель')
    for (let car of CarsList.cars){
      if (car['mark']==this.value){
        modelSet.add(car['model'])
      }
    }
    $('#model_select').empty();
    for (let model of modelSet){
      $('#model_select').append($(`<option value="${model}">${model}</option>`));
    }

  })
  $('#model_select').on('change', function(){

    $("#year_select").attr("disabled",false);

    let yearSet = new Set();
    yearSet.add("Год")
    for (let car of CarsList.cars){
      if (car['model']==this.value){
        yearSet.add(car['year'])
      }
    }

    $('#year_select').empty();

    for (let year of yearSet){
      $('#year_select').append($(`<option value="${year}">${year}</option>`));
    }
  })
  $('#year_select').on('change', function(){
     if (this.value!=="Год"){
       let mark = $("#mark_select :selected").text()
       let model = $("#model_select :selected").text();

       for (let car of CarsList.cars){
         if (car['mark'] == mark && car['model'] == model
         && car['year'] == this.value){
            showModal(car)
         }
       }
     }
  })
}


function giveCarList(){
  $('.circle').one('click', function(){
    $('.press').remove();
    selectCar();
  })
}

function rotateCircle($circle) {
  setTimeout(function(){
  let counter = 180
  let timer = null;
  let speed = 4;
  clearInterval(timer);
  timer = setInterval(function() {

    counter += speed;

    if (counter > 360) {
      counter = 360;
      giveCarList();
      clearInterval(timer);
    }
    $circle.css("transform","rotate(" + counter+ "deg)");
  }, 20)
},2000);
}
