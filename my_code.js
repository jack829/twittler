// javascript for twittler

 $(document).ready(function(){

    var getTweet = function(user){
      if(user){
          var index = streams.users[user].length-1
      } else {
       var index = streams.home.length - 1;
      }
        while(index >= 0){
          if (user){
            var tweet = streams.users[user][index];
          } else {
            var tweet = streams.home[index];
          }
          var $tweet = $('<div id = "oneTweet" class = "oneTweet">' + 
            '<div id ="user" class = "user"><a href="#" class ='+ tweet.user+'>' 
            + '@' +tweet.user+ '</a></div>'+'<div id="message">' + tweet.message+'</div>' 
            + '<div id = "time">' + '-' + tweet.created_at+'</div>'
            + '<div>');
          $tweet.hide().appendTo('#tweets').fadeIn('fast');
          index -= 1;
        }
    };
    getTweet();


    $('button').on('click', function(d){
      d.preventDefault();
      $('#oneTweet').remove();
      $('#feedTop p').remove();
      $feedHead = $('<p>Twittles from people you follow:</p>');
      getTweet();
      $feedHead.hide().appendTo('#feedTop').fadeIn('fast');
    });

    $('#tweets').on('click', 'a', function(d){
      d.preventDefault();
      $('.oneTweet').remove();
      var user = this.getAttribute('class');
      $('#feedTop p').remove();
      $feedHead = $('<p>Twittles from @'+user+'</p>');
      getTweet(user);
      $feedHead.hide().appendTo('#feedTop').fadeIn('fast');
    });
    
  
 });