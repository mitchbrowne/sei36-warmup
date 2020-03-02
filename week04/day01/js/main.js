$(document).ready(function() {

const wordArray = $('.text')
  .text()
  .replace(/\W+/, '')
  .split(' ');

console.log(wordArray);
$('.text').hide();
const numberOfWords = wordArray.length;


const displayWord = function() {

  let word = wordArray[Math.floor(Math.random() * numberOfWords)];
  let topPosition = Math.floor(Math.random() * 100);
  let leftPosition = Math.floor(Math.random() * 100);

  const randomColor = function() {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    return `rgb(${red},${green},${blue})`;
  }

  const $wordElement = $(
    `<div class="word">${word}</div>`
  );
  $wordElement.css({
    "position": "absolute",
    "top": topPosition+"vh",
    "left": leftPosition+"vw",
    "color": randomColor
  });
  $wordElement
    .appendTo('body')
    .hide()
    .fadeIn()
    .delay(1000)
    .fadeOut(undefined, function() { //when element fades out, call this anonymous function...
      $wordElement.remove()
    });
}



window.setInterval(function() {
  displayWord();
}, 100)






})
