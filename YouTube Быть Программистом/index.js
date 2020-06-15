// jQuery(function(){
//     // селектор: по классу , tag, $("#first")
//     $(".first").css({ color: "red" });
// })

// jQuery(function(){
//     // перехватывать data- атрибут с html
//     var id = $('h1').data('id');
//     alert(id);
// })

// jQuery(function(){
//     // Attributes
//     $('ul li:first').css({'color': 'red'})  
// })

// jQuery(function(){
//     // :contains(), :empty(), :parent, :has
//     // $('h1:contains("Hello")').css({'color': 'red'})  
//     $('ul il:has("span")').css({'color': 'red'}) 
// })

// СОБЫТИЯ В , рекомендую использовать $().on() - потомучто можно навешивать динамические события

// jQuery(function(){
//     // click()
//     // dblclick - двойное нажатие 
//     // mouseenter - навели мышкой
//     // mouseleave - отвели мышкой 
//     // keypress, keydown, keyup - для клавиратуры 
//     // event для form = change, submit, focus // this - в ней наш объект содержиться, value - можем получить через функцию val
//     //
//     // $('button').click(function(){
//     //     alert('test')
//     // })

//     // $('button').on('click', function(){
//     //     alert('test')
//     // })

//     // $('input[name="name"]').change(function(){
//     //     // this - в ней наш объект содержиться, value - можем получить через функцию val
//     //     value = $(this).val();
//     //     $('input[name="submit"]').val(value)
//     // })

//     $('form').submit(function(){
//         alert('test')
//     })

// })

jQuery(function(){
    //css, hide(), show()
    // delay() - задержка
    // animate()
    // $('form').css({'display':'none'});
    // $('form').show(5000) // 5000 это время 
    // $('form').show(1000).delay(5000).hide(1000) // 5000 это время
    $('#jj').animate({'width':'50px'}, 2000);
})

// 50 min остановился 
