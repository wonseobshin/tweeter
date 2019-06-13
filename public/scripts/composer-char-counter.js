$(document).ready(function() {
  console.log('DOM is loaded and script is running!');

  const tweet = document.getElementById("tweet-textarea");
  const counter = document.getElementById("tweet-counter");

  tweet.addEventListener('keyup', function(event){
    let textLengthMax = 140;
    let textLength = textLengthMax - this.value.length;
    let text = this.value;

    counter.innerHTML = textLength;
    const $errors = $("#errors");

    $errors.slideUp();
    $errors.empty();

    if(counter.innerHTML < 0){
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
  });
});


