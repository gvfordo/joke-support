var currentEmoji = 0;
var maxEmoji = 12;

var forwardDiv = document.getElementById('forward-button');
var backDiv = document.getElementById('back-button');

forwardDiv.onclick = function() {
  if (currentEmoji === 12) return;
  
  currentEmoji += 1;
  var emoji = document.getElementById('emoji-' + currentEmoji);
  emoji.classList.toggle('not-visible');
  emoji.classList.toggle('animated');
  emoji.classList.toggle('rollIn');
}

backDiv.onclick = function() {
  if (currentEmoji === 0) return;
  
  var emoji = document.getElementById('emoji-' + currentEmoji);
  emoji.classList.toggle('not-visible');
  emoji.classList.toggle('animated');
  emoji.classList.toggle('rollIn');
  
  currentEmoji -= 1;
}