// text(), html() - вывести текст, вывести html разметку
// append, prepend - вконец, вначало
// remove(), empty() - удалять , очищать
// after
// wrap() - обвернуть; unwrap()

jQuery(function () {
  // text(), html() - вывести текст(работает с контентом), вывести html разметку
  // append, prepend - вконец, вначало
  // remove(), empty() - удалять , очищать
  // after

  var text = $(".text").text();
  console.log(text);

  $(".text").text("новый текст"); // поменяли текст

  console.log($("ul").html()); // вывели html разметку дословно

  var newHTML = "<li><span>NEW</span></li><li>2</li><li>3</li>";
  $("ul").html(newHTML);

  $("ul").append("<li>Новая лишка</li>");

  $("ul").prepend("<li>Новая лишка prepend</li>");

  // $("ul").remove(); // 
  
  // $("ul").empty(); // пустота

  $("ul li:last-child").after("<li>Hello</li>");

  $("ul li:nth-child(2)").after("<li>Hello</li>");

});

jQuery(function () {
  // wrap unwrap
  $("form").wrap('<div class="red"> </div>');
});
