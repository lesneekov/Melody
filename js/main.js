$(document).ready(function () {
   let currentFloor = 2;
       counterUp = $(".counter-up"); 
       counterDown = $(".counter-down");
       floorPath = $(".home-image path");

      //  Функция смены этажа при наведении
   floorPath.on("mouseover", function () {
      floorPath.removeClass("current-floor");  // удаление активного класса у этажа
      currentFloor = $(this).attr("data-floor");  // получение значения текущего этажа
      $(".counter").text(currentFloor);  //запись значения этажа в счётчик
   });

   //отслеживание клика по кнопке вверх
   counterUp.on("click", function() {
      //проверка значения этажа 
      if (currentFloor < 18) {  
         currentFloor++;  //  прибавления одного этажа
         usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});  // форматирование переменной с этажом
         $(".counter").text(usCurrentFloor);  // запись значения этажа в счетчик
         floorPath.removeClass("current-floor");  // удаление активного класса у этажа
         $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  //  подсвечивание текущего этажа
      }
   });

   counterDown.on("click", function() {
      if (currentFloor > 2) {
         currentFloor--;
         usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
         $(".counter").text(usCurrentFloor);
         floorPath.removeClass("current-floor");
         $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
      }
   })
});