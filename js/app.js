//storing users, img and selections in objects
var data = {
  user1: {
    selections: [],
    icon: 'http://www.freeiconspng.com/uploads/close-icon-29.png',
    name: 'Player 1'
  },
  user2: {
    selections: [],
    icon: 'http://www.iconsdb.com/icons/preview/gray/circle-outline-xxl.png',
    name: 'Player 2'
  },
  currentPlayer: 'user1',
  hasWon: false
};


$(document).ready(function() {

//Reload page button call
$("#row4").click(function() {
    location.reload(data);
});

  $('#board').on('click', function(event) {
    userClick(event, data[data.currentPlayer]);
  })

  setCurrentUserStatus();

});

//Assign User name on site
function setCurrentUserStatus() {
  var currentPlayer = data[data.currentPlayer];
  $('#current-user').text(currentPlayer.name);
}

//Checking for win function through array
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
//if greater than two, considered win
    if (count > 2) {
      ret = true;
    }
  });

  return ret;
}


function hasBeenSelected(boxIndex) {
  var allSelections = data.user1.selections.concat(data.user2.selections);
  return allSelections.includes(boxIndex);
}

//Check if draw scenario if 9 boxes checked an no winner
function checkDraw() {
  var allSelections = data.user1.selections.concat(data.user2.selections);
  return allSelections.length === 9;
}

//checks for win
function userClick(event, user) {
  var currentPlayer = data[data.currentPlayer];
  if (data.hasWon) {
    return false;
  }

  //Checks for space taken, if so no action
  var $element = $(event.target);
  $element = $element.is('img') ? $element.parent() : $element;

 //set value to individual boxes
  var boxIndex = $('.box').index($element);

  console.log(hasBeenSelected(boxIndex))

  // if already selected
  if (hasBeenSelected(boxIndex)) {

    return false;
  }

//push user image to box
  $element.html('<img src="' + user.icon + '"/>');
  user.selections.push(boxIndex);

// switch to other user
  data.currentPlayer = (data.currentPlayer === 'user1') ? 'user2' : 'user1';


  // if the user has won
  data.hasWon = checkWin(user.selections)

  if (data.hasWon) {
    $('#header').html(`${currentPlayer.name} has won`)
    return false;
  } else if (checkDraw()) {
    $('#header').html('Dis Game is uh draw, bruddah');
    return false;
  }
  setCurrentUserStatus();
}
