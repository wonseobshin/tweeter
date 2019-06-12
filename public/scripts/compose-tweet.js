$(document).ready(function() {
  console.log('compose working!');

  let $tweetArticle = $("article.tweet");

  const $tweetForm = $('#tweet-form');
  const $tweetSubmit = $('#tweet-submit');

  // function createTweet() => {
  //   let str =
  //     `<section class="tweets-container">
  //       <article class="tweet">
  //         <header>
  //           <img class="dp" src="#">
  //           <h3 class="username">username</h3>
  //           <h5 class="userat">@user</h5>
  //         </header>
  //         <p>${data.content.text}</p>
  //         <hr>
  //         <footer>${data.created_at}</footer>
  //       </article>
  //     </section>`;
  //   return str;
  // }

  $tweetForm.on('submit', (event) => {
    event.preventDefault();
    const $tweetText = $('tweet-textarea');
    // console.log('curretn tweetText ',$tweetText);
    // if($tweetText !== '' || $tweetText )
    $.post(`/tweets`, $tweetForm.serialize(), (newTweet) => {
      // console.log('tweet is: ',newTweet);
    });
  });
});
