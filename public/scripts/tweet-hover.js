$(document).ready(function() {
  console.log('DOM is loaded and script is running!');

  let $tweetArticle = $("article.tweet");

  $tweetArticle.on('mouseenter', function(event){
    event.preventDefault();

    //this.style.backbroundImage = linear-gradient(to right, #ffe359 0%, #fff2ac 100%);
    $(this).addClass('full-opacity');
  })
  $tweetArticle.on('mouseleave', function(event){
    event.preventDefault();

    $(this).removeClass('full-opacity');
  })
});
