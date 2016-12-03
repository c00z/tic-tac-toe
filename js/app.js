var data = {
  user1: [],
  user2: [],
  currentPlayer: 'user1'
};


$(document).ready(function() {

  $('#board').on('click', userClick)

  $('.box').on('click', boxClick)

});

//Checking for win
function checkWin(selections) {
  var ret = false;
    //Wining combo array
var winCombos = [
  [1,2,3],
  [1,5,9],
  [1,4,7],
  [2,5,8],
  [4,5,6],
  [7,8,9],
  [3,6,9]
];

  winCombos.forEach(function(combo){
    var count = 0;
    // check if 3 selections in combo
    combo.forEach(function(num) {
      var match = selections.indexOf(num) > -1;
      if (match) {
        count++;
      }
    });

    if (count > 2) {
      ret = true;
    }
  });

  return ret;
}

console.log(checkWin([1,2,4]));

function callX() {

}

function callY() {

}

function userClick() {
  console.log("Hello")

}

function boxClick() {
  console.log("test")

}
