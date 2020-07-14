$(function(){
    // var $nav = $(
    //     '<ul>'+
    //     '<li>ONE</li>'+
    //     '<li>TWO</li>'+
    //     '/ul'
    // ) 

    // $nav.hide()
    // $('div').html($nav)
    // $nav.fadeIn(2000)

    $('p').wrap('<div class="one"></div>')

    $('h1').unwrap('.one1')

    $('h2').empty()

    $('button').on('click', function(){
        $cloneElement = $(this).clone();
        $('h3').html($cloneElement)
    })

})