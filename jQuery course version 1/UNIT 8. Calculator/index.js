$(function(){
   $('#formSum').on('submit', function(event){
       event.preventDefault();

       var numberOne,
       numberTwo,
       sumn;

       numberOne = $('#numberOne').val(); // из input выходит string
       numberTwo = $('#numberTwo').val();

       // метод isNaN = является ли число или нет

       if( isNaN(numberOne)){
           numberOne = 0;
       }

       if ( isNaN(numberTwo)){
           numberTwo = 0;
       }

    //    sumn = Number(numberOne) +  Number(numberTwo);

    // Number() === parseInt() - превращает строку в число

    sumn = parseInt(numberOne) +  parseInt(numberTwo);

    $('#sunResult').text(`Сумма: ${sumn}`)
       
   })
})

// 6:47