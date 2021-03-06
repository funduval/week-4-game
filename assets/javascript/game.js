 $(document).ready(function() {

 //declare global variablés for win/lose logic

var win = 0;
var lose = 0;
var yourTotal = 0;

//declare global variablés for random numbers generated

var mysteryNumber;
var magenta;
var blue;
var yellow;
var orange;

//call game play

gameInit();

//grab html elements

var begin = $("<h3>");
begin.addClass("clickCommand");
$("#guessThis").append(begin);
$(".clickCommand").html("Click the Moving<br>Crystal");
$(".clickCommand").css("font-size", "30px");
$(".clickCommand").css("color", "white");

// generate randos

mysteryNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
magenta = Math.floor(Math.random() * 11 + 1)
blue = Math.floor(Math.random() * 11 + 1)
yellow = Math.floor(Math.random() * 11 + 1)
orange = Math.floor(Math.random() * 11 + 1)

//wrap big function for main game moves 

function gameInit() {

    //begins with click listener then grabs & updates HTML elements

    $("#guessThis").on("click", function() {

        $("#totalsAdded").html(yourTotal);

        console.log(mysteryNumber);

        var numReveal = $("<h2>");

        numReveal.addClass("numero");

        $(".clickCommand").html(mysteryNumber);
        $(".clickCommand").css("font-size", "86px", "bold");

        var directions = $("<p>");

        directions.addClass("toDo");

        $("#texty").html("<br>Keep Clicking Crystals<br>To Add Up To: <br>" + mysteryNumber);
        $("#texty").css("font-size", "26px", "color", "white", "bold");
        $("#texty").css("font-family", "Inknut Antiqua", "serif");
        $("#texty").css("text-align", "center");

    });

    //click listeners, 4 crystals

    $("#blueCrystal").on("click", function() {

        yourTotal = yourTotal + blue;
        $("#totalsAdded").html(yourTotal);
        winLoseTest();
        console.log(blue);

    });

    $("#yellowCrystal").on("click", function() {

        yourTotal = yourTotal + yellow;
        $("#totalsAdded").html(yourTotal);
        winLoseTest();
        console.log(yellow);

    });

    $("#magentaCrystal").on("click", function() {

        yourTotal = yourTotal + magenta;
        $("#totalsAdded").html(yourTotal);
        winLoseTest();
        console.log(magenta);

    });

    $("#orangeCrystal").on("click", function() {

        yourTotal = yourTotal + orange;
        $("#totalsAdded").html(yourTotal);
        winLoseTest();
        console.log(orange);

    });

    //UNIVERSAL FUNCTION JUNCTION

    function winLoseTest() {

        if (yourTotal === mysteryNumber) {
            win++;
            console.log(win);
            console.log(yourTotal);

             $("#wins").html(win);

             $("#totalHead").html("");

             $("#totalsAdded").html("<br>You made " + yourTotal + " exactly! <br> <br> You win the round!");
             $("#totalsAdded").css("font-size", "28px");
             
             $("#totalsAdded").css("height", "380px");
             $("#totalsAdded").css("background-color", "white");

             // hide boxes behind the win/lose alert

              $("#totalsBox").css("border", "none");

              $("#winBox").css("visibility", "hidden");

            setTimeout(function(){
       								 reset();
      					}, 3000);
            // ==========the reset timeout keeps stopping the audio?=====

        };

        if (yourTotal > mysteryNumber) {
            lose++;
            console.log(lose);
            console.log(yourTotal);

             $("#losses").html(lose);

             $("#totalHead").html("");

             $("#totalsAdded").html("<br>Sorry, you went over " + mysteryNumber + "<br><br>You got " + yourTotal + "<br><br>You lose this round!");
             $("#totalsAdded").css("font-size", "28px", "bold");
             $("#totalsAdded").css("height", "380px");
             $("#totalsAdded").css("background-color", "white");

             // hide boxes behind the win/lose alert
              
              $("#totalsBox").css("border", "none");
          

              $("#winBox").css("visibility", "hidden");

            setTimeout(function(){
       								 reset();
      					}, 3200); 
            // ==========the reset timeout keeps stopping the audio?======

        };

        function reset() {

            yourTotal = 0;

            $("#totalHead").html("YOUR TOTAL:");
            $("#totalsAdded").html(yourTotal);

            // css to make the invisible box visible again

            $("#winBox").css("visibility", "visible");


             // css to restore previous borders & othere attributes

            $("#winBox").css("border-style", "solid");
            $("#totalsBox").css("border-style", "solid");
            $("#winBox").css("border-color", "white");
            $("#totalsBox").css("border-color", "white");
            $("#winBox").css("border-size", "white");
            $("#totalsBox").css("border-size", "white");

            $("#totalsAdded").css("font-size", "50px");
            $("#totalsAdded").css("height", "200px");
            $("#totalsAdded").css("background", "none");

            $(".clickCommand").html("Click the Magic <br> Crystal");
            $(".clickCommand").css("font-size", "30px");
            $(".clickCommand").css("color", "white");
            $("#texty").html("<br>Try to Add<br>Crystals Up To <br> This New Number:");
            $("#texty").css("font-family", "Inknut Antiqua", "serif");

            // regenerate random numbers

            mysteryNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
            magenta = Math.floor(Math.random() * 11 + 1);
            blue = Math.floor(Math.random() * 11 + 1);
            yellow = Math.floor(Math.random() * 11 + 1);
            orange = Math.floor(Math.random() * 11 + 1);

        };
    };

  };

});
