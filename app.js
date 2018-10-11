
 var red = $('#red');
 var blue = $('#blue');
 var yellow = $('#yellow');
 var green = $('#green');
 var level= $('#level');
 var on = $('#onButton')
 var power = false;
 var userSequence = [];
 var sequence = [];
 var round = 1;
 var win;
 var start = 'off';
//  var lock = false;
 var speed = 1000;


 //When the game is turned on game will animate and flash to indicate turning on
 // After user pressed start button. Button will light up red for the remainder of the game. 
$('.slider').on("click", function turnOn(){
    red.fadeOut(350).fadeIn(350).fadeOut(350).fadeIn(350)
    blue.delay(550).fadeOut(350).fadeIn(350).fadeOut(350).fadeIn(350)
    yellow.delay(700).fadeIn(350).fadeOut(350).fadeOut(350).fadeIn(350)
    green.delay(450).fadeIn(350).fadeOut(350).fadeOut(350).fadeIn(350)
    level.css("color", "white").fadeOut(350).fadeIn(350);
    start = 'on'
})


on.click(function  (){
    if (start === 'off'){
     return } 
     $('#audioOn').get(0).play();
        on.css("background-color", "blue");
        on.css("border-bottom" , "none");
        on.css("border-right" , "none");
        level.html('001');
})







// for (let level = 1; level <= 20; level++){
//     console.log(level)
// }





