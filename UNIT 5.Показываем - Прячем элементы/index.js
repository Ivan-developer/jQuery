// Показываем - Прячем элементы 
// $('form').css({'display':'none'});

// для этого есть: hide(передаем скорость) - скрывать, show(передаем скорость) - показывать, delay() - задержка

// анимировать: animate()

// fadeOut() - прячет элемент  
// resize - ресайз нашего окна, когда берем за уголок и уменьшаем наше окно
// scroll

// связка: style="display: none;" + $('form').show(5000) // 5000 это время 

jQuery(function(){
    //css, hide(), show()
    // delay() - задержка
    // animate() - принимает два свойства , объект и время 
    // fadeIn(), fadeOut() - по другому исчезает
    // atr() - либо поменять, либо получить аттрибут
    // как правило используется для form, можно получать value 

    $('form').css({'display':'none'}).show(2000);

    $('.hello').hide(4000) // 4000 это время 

    $('.world').show(1000).delay(5000).hide(1000) // 5000 это время

    $('#jj').animate({'width':'55px'}, 2000);

    $('#jj1').fadeOut(5000)

    console.log($('input[name="name"]').attr('value'))

    console.log($('.first').attr('data-id'))

    console.log($('.first').data('id'))

    // resize 
    // scroll
    // window - весь наше окно браузера  

    // $(window).resize(function(){
    //     // width(), height()
    //     var width = $(this).width();
    //     var height = $(this).height();
    //     console.log(width, height)
    // })

    // $(window).scroll(function(){
    //     // width(), height()
    //     var width = $(this).width();
    //     var height = $(this).height();
    //     console.log(width, height)
    // }) 
})

//56.12
