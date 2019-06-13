$(document).ready(function() {
  console.log('imhere');

  const $tweetArticle = $("article.tweet");

  $tweetArticle.on('mouseenter', function(event){
    event.preventDefault();
    console.log('hovering');

    $(this).addClass('full-opacity');
  })
  $tweetArticle.on('mouseleave', function(event){
    event.preventDefault();

    $(this).removeClass('full-opacity');
  })
});