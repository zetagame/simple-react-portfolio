//Credit: Zack Haigh
const speed = 60;
let letterIndex = 0;
let wordIndex = 0;
let isTyping = true;

window.typist = function(messages, targetElementId) {
  const $targetElementParent = $('#' + targetElementId).parents('.greeting-message');
  let isErasing = !isTyping;
  let isEndOfWord = isTyping ? letterIndex === messages[wordIndex].length : letterIndex === 0;
  let isRemainingLetters = isTyping ? letterIndex < messages[wordIndex].length : letterIndex !== 0;
  let isLastWord = wordIndex === messages.length - 1;
  let stillTyping = !(isLastWord && isEndOfWord);
  function typeLetter() {
    document.getElementById(targetElementId).innerHTML += messages[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(function(){
      typist(messages, targetElementId)
    }, speed);
  }
  function eraseLetter() {
    letterIndex --;
    setTimeout(function() {
      typist(messages, targetElementId)
    }, speed/2);
    $('#dynamicMessage').text(function (_,txt) {
      return txt.slice(0, -1);
    });
  }
  switch(stillTyping) {

    //if it's paused, don't do anything until it's not.
    case $targetElementParent.hasClass('blur'):
      setTimeout(function() {
        typist(messages, targetElementId);
      }, 300);
      break;

    //If it's the end of the word and you're erasing, and it's not the last word, start typing again.
    case isEndOfWord && isErasing && !isLastWord:
      if (isEndOfWord && isErasing && !isLastWord) {
        wordIndex++
        isTyping = true;
        setTimeout(function(){
          typist(messages, targetElementId)
        }, speed*4);
      }
      break;

      //If it's the end of word, start erasing
      case isEndOfWord === true && isTyping:
        setTimeout(function(){
          isTyping = false;
          typist(messages, targetElementId);
        }, 1000);
        break;

      //If there are remaining letters than type/erase them.
      case isRemainingLetters:
        if (isTyping) {
          typeLetter();
        } else if (!isLastWord) {
          eraseLetter();
        }
        break;
  }
  //If It's the end of the last word, stop blinking cursor.
  if (isEndOfWord === true && isTyping && isLastWord) {
    $('.blinking-cursor').css('display', 'none');
  }
}
