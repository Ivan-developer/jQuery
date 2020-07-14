jQuery(function(){

    $(window).scroll(function(){ // scroll - event 

        $(".block").each(function(){

            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();

            if (elPos < topOfWindow + 500){

                $(this).addClass("animate__backInRight")

            }
        })
    })
})