

document.addEventListener("DOMContentLoaded", function(e){
    rightMenuSlide();
})


const rightMenuSlide =() => {
    $('header .header_div .ham_btn').click(function(){
        $('.side_menu').addClass('on')
        // $('.sub_menu_dim').addClass('on')
    })

    $('.side_menu .close_btn').click(function(){
        $('.side_menu').removeClass('on')
    })

    // $('.sub_menu_dim').click(function(){
    //     $('.sub_menu').removeClass('on')
    //     $('.sub_menu_dim').removeClass('on')
    // })

    // $('.sub_menu .sub_div .menu_close').click(function(){
    //     $('.sub_menu').removeClass('on')
    //     $('.sub_menu_dim').removeClass('on')
    // })
}