$(function(){   

    var silverCar = $('.silver');
    var imgCar = $('.img');

    silverCar.on('click', function(){

        var imgPath = $('.silver').attr("data-img-path");

        imgCar.fadeOut(1000, function () {
            $(this).attr('src', imgPath).fadeIn(1000);
          });

    })

})