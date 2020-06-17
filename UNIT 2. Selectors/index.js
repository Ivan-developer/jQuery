// Селекторы на Jq:

jQuery(function () {
  //class
  $(".first").css({ color: "red" });
  //tag
  $("h2").css({ color: "blue" });
  //id
  $("#green").css({ color: "green" });
  // Attributes
  $("ul li:first").css({ color: "red" });

  $('h2[tittle="test-world"]').css({'color': 'red'}) 

  // Селекторы фильтрации:
  // :contains(), :empty(), :parent(), :has()
  $('h4:contains("Hello")').css({ color: "red" });
  $('ul il:has("span")').css({ color: "red" });
});
