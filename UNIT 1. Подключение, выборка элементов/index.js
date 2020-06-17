// $('h1').css({'color':'red'}) // если script в head , то он не будет работать 

// Выборка элементов: $() === JQuery()

// означает что сработает после загрузки:
// jQuery(document).ready(function () { 
//   $("h1").css({ color: "red" });
// });

// Сокращенная, аналог: 
jQuery(function(){
    $("h1").css({ color: "red" });
})
