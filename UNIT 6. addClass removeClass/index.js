// addClass // removeClass - иногда нужно добавить, иногда убрать 
// toggleClass - один раз навели работает , второй раз не работает 

jQuery(function(){
    // addClass , removeClass, toggleClass - один раз навели работает , второй раз не работает 

    $('h2').addClass('red');

    $('h3').hover(function(){
        $(this).addClass('blue');
        $(this).on('click', function(){
            $(this).removeClass('blue').removeClass('red')
        })
    })

    $('h4').click(function(){
        // $(this).toggleClass('blue')

        console.log(event)
    })

    $('h5').mouseenter(function(){
        $(this).addClass('blue');
        $(this).mouseleave(function(){
            $(this).removeClass('blue')
        })
    })
})