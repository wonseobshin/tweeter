// This script is made to make hovering on tweets on the feed interactive
$(document).ready(function() {
  const $tweetArticle = $("article.tweet");

  $tweetArticle.on('mouseenter', function(event){
    event.preventDefault();
    $(this).addClass('full-opacity');
  });

  $tweetArticle.on('mouseleave', function(event){
    event.preventDefault();

    $(this).removeClass('full-opacity');
  });
});