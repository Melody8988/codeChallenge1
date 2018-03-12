console.log('js');

let totalGenerateClicks = 0

$(document).ready(readyNow);

function readyNow(){
  $('#generateBtn').on('click', addDiv);




}

function addDiv(){
  console.log('You have clicked!');
  totalGenerateClicks = totalGenerateClicks + 1;
//  $('#numberDiv').empty(totalGenerateClicks);
  $('#numberDiv').append ('<div id="addedDivs"></div><p>' + totalGenerateClicks + '</br><button id="swapButton">Swap</button>' + '<button id="deleteButton">Delete</button>' + '</p><div></div>');

  $('#swapButton').on('click', swapColor );


}

function swapColor(){
  console.log('can swap!');

 $('#numberDiv').children().css('background-color', 'yellow');
//$(this).parent().css('background-color', 'yellow');

}

function deleteButton(){
  console.log( 'can delete!' );
}
