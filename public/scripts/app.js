$(document).ready(function() {
  // function to disallow problematic text inputs such as html syntax
  function escape(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  //function to convert timestamp to "'time' from value" adapted from https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time-eg-2-seconds-ago-one-week-ago-etc-best
  function timeDifference(current, previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';
    }
    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';
    }
    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';
    }
    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';
    }
    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';
    }
    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';
    }
  };

  //returns a string which hold DOM value of a tweet
  function createTweetElement(data){
    var timeFrom = timeDifference(Date.now(), data.created_at);
    console.log("created timeFrom= ",timeFrom);

    const str =
      `<section class="tweets-container">
        <article class="tweet">
          <header>
            <img class="dp" src=${escape(data.user.avatars.regular)}>
            <h3 class="username">${escape(data.user.name)}</h3>
            <h5 class="userat">${escape(data.user.handle)}</h5>
          </header>
          <p>${escape(data.content.text)}</p>
          <hr>
          <footer>${escape(timeFrom)}</footer>
        </article>
      </section>`;
    return str;
  };

  //attach all tweets in the database to the feed
  function renderTweets(tweets){
    $feed = $("#tweet-container");
    $feed.empty();

    tweets.forEach(function(data){
      let $tweet = '';
      $tweet = createTweetElement(data);
      $feed.prepend($tweet);
    });
  }

  // attach tweets to render
  function loadTweets(){
    $.getJSON(`/tweets`, (data) => {

      renderTweets(data);
    })
  };

  const $tweetArticle = $("article.tweet");
  const $tweetForm = $('#tweet-form');
  const $errors = $("#errors");

  //this call loads previously made tweets
  loadTweets();

  // request on tweet submission
  $tweetForm.on('submit', (event) => {
    event.preventDefault();
    const $tweetText = $('#tweet-textarea');
    $errors.text("");

    if($tweetText.val() !== '' && $tweetText.val().length <= 140){
      $.post(`/tweets`, $tweetForm.serialize(), () => {
        loadTweets();
        $('#tweet-textarea').val('');
      });
    }

    //show errors to users if there are any
    if ($tweetText.val() === ''){
      $errors.text("Your tweet is empty");
      $errors.slideDown();
    }
    if ($tweetText.val().length > 140){
      $errors.text("Please limit your tweet to 140 characters");
      $errors.slideDown();
    }
  });
});