$(function(){
    $('div').css({color : 'red'})

    // $('p').html('<h1>3</h1>')

    $('button').on('click', function(){
        $('p').html('<h1>3</h1>')
    })
    
    $('#id').text('1112')
    
    $('[type="text"]').click(function(){
        $('p').html('<h1>3</h1>')
    })
})