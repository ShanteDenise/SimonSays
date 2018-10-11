


$('.slider').on("click", function turnOn(){
    let red = $('#red').css("background-color", "highlightBg");
    let blue = $('#blue')
    let yellow = $('#yellow')
    let green = $('#green')
    red.fadeOut(350).fadeIn(350).fadeOut(350).fadeIn(350)
    blue.delay(550).fadeOut(350).fadeIn(350).fadeOut(350).fadeIn(350)
    yellow.delay(700).fadeIn(350).fadeOut(350).fadeOut(350).fadeIn(350)
    green.delay(450).fadeIn(350).fadeOut(350).fadeOut(350).fadeIn(350)
    let level = $('#level').css("color", "white");
    level.fadeOut(350).fadeIn(350)
    parseInt($)

    // for(let i = 1; i >= 20; i++){
    //     level + 1
    // }

})

