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

// jQuery(function(){
//     //css, hide(), show()
//     // delay() - задержка
//     // animate()
//     // fadeIn(), fadeOut() - по другому исчезает
//     // atr() - либо поменять, либо получить аттрибут
//     // как правило используется для form, можно получать value
//     // $('form').css({'display':'none'});
//     // $('form').show(5000) // 5000 это время
//     // $('form').show(1000).delay(5000).hide(1000) // 5000 это время
//     // $('#jj').animate({'width':'50px'}, 2000);
//     // $('#jj').fadeOut(1000)
//     // console.log($('input[name="name"]').attr('value'))
//     // console.log($('.first').attr('data-id'))
//     // console.log($('.first').data('id'))
//     // resize
//     // scroll
//     // window - весь наше окно браузера
//     // $(window).resize(function(){
//     //     // width(), height()
//     //     var width = $(this).width();
//     //     var height = $(this).height();
//     //     console.log(width, height)
//     // })
//     $(window).scroll(function(){
//         // width(), height()
//         var width = $(this).width();
//         var height = $(this).height();
//         console.log(width, height)
//     })
// })

// jQuery(function(){
//     // addClass , removeClass, toggleClass
//     $('h2').addClass('red');
//     // $('h2').hover(function(){
//     //     $(this).addClass('blue');
//     //     $(this).on('click', function(){
//     //         $(this).removeClass('blue').removeClass('red')
//     //     })
//     // })
//     $('h2').click(function(){
//         $(this).toggleClass('blue')
//     })
// });

// jQuery(function () {
//   // text(), html() - вывести текст, вывести html разметку
//   // append, prepend - вконец, вначало 
//   // remove(), empty() - удалять , очищать 
//   // after

// //   var text = $(".text").text();
// //   console.log(text);

// // $('.text').text('новый текст') // поменяли текст

// // console.log($('ul').html())

// // var newHTML = '<li><span>NEW</span></li><li>2</li><li>3</li>'
// // $('ul').html(newHTML)

// // $('ul').append('<li>Новая лишка</li>')

// // $('ul').remove();

// // $('ul li:last-child').after('<li>Hello</li>')

// $('ul li:nth-child(2)').after('<li>Hello</li>')

// });

// jQuery(function(){
//     // wrap unwrap

//      $('form').wrap('<div class="red"> </div>')

// })

$(document).ready(function(){
    $('.slider').slick({
      setting-name: setting-value
    });
  });

























