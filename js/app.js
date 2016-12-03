//storing user selections, data
var data = {
  user1: [],
  user2: [],
  currentPlayer: 'user1'
};

//sets icons
var xIcon = 'http://www.freeiconspng.com/uploads/close-icon-29.png';
var oIcon = 'http://www.iconsdb.com/icons/preview/gray/circle-outline-xxl.png';


$(document).ready(function() {

  $('#board').on('click', function(event) {
    userClick(event, data.user1);
  })

  //initiation: calling current user status
  setCurrentUserStatus();




});

//
function setCurrentUserStatus() {
  $('#current-user').text(data.currentPlayer);
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
  var currentPlayer = data.currentPlayer;
  var $element = $(event.target);

  var boxIndex = $('.box').index($element);
  $element.html('<img src="' + xIcon + '"/>');
  user.push(boxIndex);

  console.log('the box index is:', user );
  console.log('have I won?', checkWin(user));
  console.log('who is the current player?', currentPlayer);

  // switch to other user
  data.currentPlayer = (currentPlayer === 'user1') ? 'user2' : 'user1';
  setCurrentUserStatus();
}

function boxClick() {
  console.log("test")

}
