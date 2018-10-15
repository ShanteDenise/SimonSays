
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
var level = 0;
var on = $('#onButton')
var power = false;
var playerSeq = [];
var simonSeq = [];
var round = 1;
var win;
var play = 'off';
var speed = 1000;
var audioBuzzer = new Audio('https://s3-us-west-2.amazonaws.com/guylemon/Buzzer.mp3');
  




//Simon starts
on.click(function start() {
    play = 'on'
    console.log(play)
    $('#audioOn').get(0).play();
    on.css("border-bottom", "none");
    on.css("border-right", "none");
    randomNumbers()
})

//When the game is turned on game will animate and flash to indicate turning on
// After user pressed start button. Button will light up red for the remainder of the game. 
$('.slider').on("click", function turnOn() {
    red.fadeOut(350).fadeIn(350).fadeOut(350).fadeIn(350)
    blue.delay(550).fadeOut(350).fadeIn(350).fadeOut(350).fadeIn(350)
    yellow.delay(700).fadeIn(350).fadeOut(350).fadeOut(350).fadeIn(350)
    green.delay(450).fadeIn(350).fadeOut(350).fadeOut(350).fadeIn(350)
    $('#level').css("color", "black").fadeOut(350).fadeIn(350);
   

})

//If the start is off do nothing. If the start is turned on then play clicking sound 
//and change the styling of the on button to appear that it has been pushed in. 
function seq() {
    console.log(simonSeq)
    for (let j = 0; j < simonSeq.length; j++) {
        setTimeout(function(){
        $('.' + simonSeq[j]).addClass('on' + simonSeq[j])
        },500 * (j + 1));


        setTimeout(function () {
            $('.' + simonSeq[j]).removeClass('on' + simonSeq[j])
        }, (500 * (j + 1)) + 250);
       

        // add sound here
    }
}

//User listener to check if Simon's sequence is equal to users sequence. 
//If the player sequence and simons sequence is equal level up but if
//not then reset the board and alert "wrong"
$(".tile").click(function(){
    if (play === 'off') {
        return
    }

let color = $(this).get(0).className.split(' ')[1]
playerSeq.push(color);
for(let i = 0; i < playerSeq.length; i++){
    if(playerSeq[i] === simonSeq[i] || playerSeq.length === simonSeq.length){
            level++;
            $('#level').html(level)
            playerSeq = [];
            randomNumbers();
            winner();
        
    } else {
        simonSeq = [];
        playerSeq = [];
        $('#audioBuzzer').get(0).play();
        alert("Game Over!!" + "Your Score is" + " " + level);
        level = 0;
        $('#level').html(level)
        start = 'off'
        on.css("border-bottom", "solid 7px rgb(61, 7, 7)");
        on.css("border-right", "solid 2px rgb(43, 7, 2)");
    }

}

})
// If the player wins the game. Winner picture will display
function winner(){
    if(level == 15){
        setTimeout(function () {
        $('#winner').css("display", "inline")
        },100)

        level = 0;
        $('#level').html(level)
        playerSeq = [];
        simonSeq = [];

        setTimeout(function () {
            $('#winner').css("display", "none")
            },4000)

        start = 'off'

    }
}
    



//Get random Number
function randomNumbers() {
    var random = Math.floor((Math.random() * 4) + 1);
    simonSeq.push(simonColors[random])
    setTimeout(function () {
        seq()
    }, 250)
}


//On mousedown add class 
$('.tile').on('mousedown', function () {
    console.log(play)
    if (play === 'off') {
        return
    }
    let brighten = $(this).get(0).className.split(' ')[1]
    $(this).addClass('on' + brighten)
    var sound = 'play' + brighten
    $(`#${sound}`).get(0).play()
})

//On mouseup remove class
$('.tile').on('mouseup', function () {
    if (play === 'off') {
        return
    }
    let brighten = $(this).get(0).className.split(' ')[1]
    $(this).removeClass('on' + brighten);

})











