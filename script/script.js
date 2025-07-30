

document.addEventListener("DOMContentLoaded", function(e){
    rightMenuSlide();
    resizeRightMenuSlide();
})


const rightMenuSlide =() => {
    $('header .header_div .ham_btn').click(function(){
        $('.side_menu').addClass('on')
        $('.side_dim').addClass('on')
    })


    $('.side_dim').click(function(){
        $('.side_menu').removeClass('on')
        $('.side_dim').removeClass('on')
    })

    $('.side_menu .close_btn').click(function(){
        $('.side_menu').removeClass('on')
        $('.side_dim').removeClass('on')
    })
}

const resizeRightMenuSlide =() => {
    // 윈도우가 리사이즈 될때 반응형 !
    $(window).resize(function() {
        if($(window).width() < 800) {
            // window 크기가 800보다 작을때
        } else {
            // window 크기가 800보다 클때
            $('.side_menu').removeClass('on')
            $('.side_dim').removeClass('on')
        }
    })
}
