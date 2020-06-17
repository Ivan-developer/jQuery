// Events in jQ

// click()
// есть два типа записи: event - click(), event .on('', function(){})
// разница в том что on(), бдует работать с динамическими элементами
// СОБЫТИЯ В , рекомендую использовать $().on() - потомучто можно навешивать динамические события
// dblclick - двойное нажатие
// mouseenter - навели мышкой
// mouseleave - отвели мышкой
// keypress, keydown, keyup - для клавиратуры
// event для form = change, submit, focus
// this - в ней наш объект содержиться, value - можем получить через функцию val

jQuery(function () {
  $(".first-button").click(function () {
    alert("test");
  });

  $(".second-button").on("click", function () {
    alert("test2");
  });

  $(".mouse").mouseenter(function () {
    console.log("test3");
  });

  $(".mouse1").mouseenter(function () {
    $(this).css({ color: "red" });
  });
  $(".mouse1").mouseleave(function () {
    $(this).css({ color: "black" });
  });

  $('input[name="name"]').change(function () {
    // this - в ней наш объект содержиться, value - можем получить через функцию val
    var value = $(this).val();
    $('input[name="submit"]').val(value);
  });

  $('input[name="name1"]').keyup(function () {
    // this - в ней наш объект содержиться, value - можем получить через функцию val
    var value = $(this).val();
    $('input[name="submit1"]').val(value);
  });

  // когда форма отправляется тогда срабатывает submit
  $("form").submit(function () {
    alert("test");
  });
});
