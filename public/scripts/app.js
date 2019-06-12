$(document).ready(function() {
  const database = [
    {
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
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function renderTweets(tweets){
    $feed = $("main.container");

    tweets.forEach(function(data){
      let $tweet = '';
      $tweet = createTweetElement(data);
      $feed.append($tweet);
    });
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

  //renderTweets(database);


  function loadTweets(){
    $.getJSON(`/tweets`, (data) => {
      // console.log('working here too');
      // const $posts = $('.tweets-container');
      // console.log(data);
      // database.content.text = data;
      renderTweets(data);
    })
  };

  loadTweets();

});