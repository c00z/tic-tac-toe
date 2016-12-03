//storing user selections in objects
var data = {
  user1: {
    selections: [],
    icon: 'http://www.freeiconspng.com/uploads/close-icon-29.png',
    name: 'Shreddie Mercury'
  },
  user2: {
    selections: [],
    icon: 'http://www.iconsdb.com/icons/preview/gray/circle-outline-xxl.png',
    name: 'Bro Dozer'
  },
  currentPlayer: 'user1'
};

$(document).ready(function() {

  $('#board').on('click', function(event) {
    userClick(event, data[data.currentPlayer]);
  })

  setCurrentUserStatus();

  // $('.box').on('click', boxClick)

});


function setCurrentUserStatus() {
  var currentPlayer = data[data.currentPlayer];
  $('#current-user').text(currentPlayer.name);
}

//Checking for win
function checkWin(selections) {
  var ret = false;
    //Wining combo array
var winCombos = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [3,4,5],
  [6,7,8],
  [2,5,8]
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

function userClick(event, user) {
  var currentPlayer = data[data.currentPlayer];
  var $element = $(event.target);
  var boxIndex = $('.box').index($element);

  $element.html('<img src="' + user.icon + '"/>');
  user.selections.push(boxIndex);

  // switch to other user
  data.currentPlayer = (data.currentPlayer === 'user1') ? 'user2' : 'user1';


  // if the user has won
  checkWin(user.selections)
  // then stop the program
  // set a UI element to show who won
  // if it is a draw, show that the game is a draw

  setCurrentUserStatus();
}

function boxClick() {
  console.log("test")

}
