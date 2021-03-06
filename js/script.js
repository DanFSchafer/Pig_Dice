//Randomly gives us a number from 1-6
function rollDice() {
  return Math.floor((Math.random() * 6) + 1);
};

//Creating the player constructor
function Player(name, turnScore, totalScore) {
  this.name = name;
  this.turnScore = [];
  this.totalScore = 0;
};
//Defining player objects

var player1 = new Player ('Dan');
var player2 = new Player ('Alex');
// $('form#playerSubmit').submit(function(event) {
//   var player1 = new Player ($("input#player1Name").val())
//   var player2 = new Player ($("input#player2Name").val())
//   event.prefentDefault();
//  });
//Creates an empty array to store the turn's values
//var rollResult = [];

//Switches player's turn

var player_index = 1;
var player = 'player1';
console.log(player);
function getPlayer() {
  if (player_index%2 !== 0) {
    player = player1;
  } else {
      player = player2;
    };
    return player;
  };
  function outputPlayerScore(score) {
      if (player === player1) {
        $('#player1').html('<p>' + score + '</p>');
      } else {
        $('#player2').html('<p>' + score + '</p>');
      };

    };
// jQuery front end logic.
$(function() {

  $("#roll").click(function() {
    getPlayer();
    console.log(player);
     var roll = parseInt(rollDice());
     if(roll === 1) {
       //Improve Alert Message Styling
       player.turnScore = [];
        player_index += 1;
        swal("Uh Oh! You Rolled A 1", "Next Player's Turn");
        } else {
          player.turnScore.push(roll);
         $('#lastRoll').show();
         $('#rollCount').text(roll);
       }
      if (player.totalScore + player.turnScore > 19) {
        alert("Yay");
      }
  }); //Ends roll dice function


  $("#hold").click(function() {
    getPlayer();
    var score = 0;
    // Add up the roll values to get turnScore
      player.turnScore.forEach(function(roll) {
        score += roll;
        $("#turnResult").show();
        $("#score").text(score);
            //$("button#hold, button#roll").attr("disabled", "disabled");
          player.totalScore += score; // += score ??
      }); //Loops through each value in the array
      outputPlayerScore(score);
      player_index += 1;
      console.log(player_index);
    }); //Ends hold button function
}); //Ends jQuery document ready wrapper
