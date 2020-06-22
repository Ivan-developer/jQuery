$(function () {
  // 1. Получим значение атрибута src у картинки

  // .attr() - возвращает атрибут (первый аргумент который получаем, второй который меняем)
  var srcValue = $("#imgHolder img").attr("src");

  // 2. Поменяем значение атрибута src у картинки

  $("#imgHolder img").on("click", function () {
    $(this).attr(
      "src",
      "https://auto.vercity.ru/gallery/img/automobiles/BMW/2018%20BMW%20M3%20Sedan%20Black%20Sapphire%20ZCP%20by%20EAS/900x/1518961781.jpg"
    );
  });

  // 3. Отдельное действие для каждого цвета

  // $('#colorsSelector .colorItem.colorWhite').on('click', function(){
  //     $('#imgHolder img').attr('src', 'data:image/jpeg;base64,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');

  // })

  // $('#colorsSelector .colorItem.colorBlack').on('click', function(){
  //     $('#imgHolder img').attr('src', 'https://auto.vercity.ru/gallery/img/automobiles/BMW/2018%20BMW%20M3%20Sedan%20Black%20Sapphire%20ZCP%20by%20EAS/900x/1518961781.jpg');

  // })

  // $('#colorsSelector .colorItem.colorSilver').on('click', function(){
  //     $('#imgHolder img').attr('src', 'https://auto.vercity.ru/gallery/img/automobiles/BMW/2016%20BMW%20M4%20Coupe%20Frozen%20Silver%20M%20Performance/900x/2016%20BMW%20M4%20Coupe%20Frozen%20Silver%20M%20Performance%20001.jpg');

  // })

  // 4. Единное действие для всех цветов - добавим атрибут data-

  // $('#colorsSelector .colorItem').on('click', function(){

  //     var imgPath = $(this).attr('data-img-path');

  //     $('#imgHolder img').attr('src', imgPath)

  // })

  // 5. Единое действие для всех цветов с эффектом fadeOut() , fadeIn()

  var $carColor = $("#colorsSelector .colorItem");
  var $carImg = $("#imgHolder img");

  $carColor.on("click", function () {
    var imgPath = $(this).attr("data-img-path");

    $carImg.fadeOut(1000, function () {
      $(this).attr("src", imgPath).fadeIn(1000);
    });
  });

});
