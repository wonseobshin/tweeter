$(document).ready(function() {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  function createTweetElement(data){
    let str =
      `<section class="tweets-container">
        <article class="tweet">
          <header>
            <img class="dp" src=${data.user.avatars.regular}>
            <h3 class="username">${data.user.name}</h3>
            <h5 class="userat">${data.user.handle}</h5>
          </header>
          <p>${data.content.text}</p>
          <hr>
          <footer>${data.created_at}</footer>
        </article>
      </section>`;
    return str;
  };

  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like

  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  $feed = $("main.container");
  // console.log($feed);

  // $tweet.appendTo($feed);
  $feed.append($tweet);

  // console.log($feed);


});