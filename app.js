
 var red = $('.red');
 var blue = $('.blue');
 var yellow = $('.yellow');
 var green = $('.green');
 var simonColors = {
     1: "green",
     2: "blue",
     3: "yellow",
     4: "red"

 }
 var level= 0;
 var on = $('#onButton')
 var power = false;
 var PlayerSeq = [];
 var simonSeq = [];
 var round = 1;
 var win;
 var start = 'off';
 var speed = 1000;
//  let color = $('.tile').get(0).className.split(' ')[1];




 //When the game is turned on game will animate and flash to indicate turning on
 // After user pressed start button. Button will light up red for the remainder of the game. 
$('.slider').on("click", function turnOn(){
    red.fadeOut(350).fadeIn(350).fadeOut(350).fadeIn(350)
    blue.delay(550).fadeOut(350).fadeIn(350).fadeOut(350).fadeIn(350)
    yellow.delay(700).fadeIn(350).fadeOut(350).fadeOut(350).fadeIn(350)
    green.delay(450).fadeIn(350).fadeOut(350).fadeOut(350).fadeIn(350)
    $('#level').css("color", "black").fadeOut(350).fadeIn(350);
    start = 'on'
 
})

//If the start is off do nothing. If the start is turned on then play clicking sound 
//and change the styling of the on button to appear that it has been pushed in. 
//Simons sequence starts


   on.click(function start (){
    // console.log(level)
    if (start === 'off'){
     return } 
     $('#audioOn').get(0).play();
        on.css("border-bottom" , "none");
        on.css("border-right" , "none");
    //     $('#level').text(level);

        randomNumbers();
       
            // id = simonSeq[i];
            let color = $('.tile').attr('class').split(' ')[1];
            
            for(var j = 0; j < simonSeq.length; j++){
            setTimeout(function(){
             $('.' + simonSeq[j]).addClass('on' + simonSeq[j])
            },1000);

             setTimeout(function(){
             $('.' + simonSeq[j]).removeClass('on' + simonSeq[j])
             },1000);
            
            // add sound here
            }

       
    
         level ++;
         
    
        //  PlayerSeq = [];
})

//Get random Number
function randomNumbers(){
    var random =  Math.floor((Math.random() * 4) + 1);
    simonSeq.push(simonColors[random])
    console.log(simonSeq)
  }


//On mousedown add class 
$('.tile').on('mousedown', function(){
    if(start === 'off'){
        return}
        let brighten = $(this).get(0).className.split(' ')[1]
        $(this).addClass('on'+ brighten)      
})

//On mouseup remove class
$('.tile').on('mouseup', function(){
    if(start === 'off'){
        return}
    let brighten = $(this).get(0).className.split(' ')[1]
    $(this).removeClass('on'+ brighten);

})

// Sequence for simon. 

// function sequenceOne (){
//     randomNumbers()
//     var i = 0;
//     var myInterval = setInterval(function(){
//     }, 1000);
// }











