// javascript for twittler

 $(document).ready(function(){
        var $body = $('body');
        var $newsFeed = $('.news-feed')
        $('button').click(function(){
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          var time_created = new Date();
          $tweet.text('@' + tweet.user + ': ' + tweet.message + '. -' + time_created);
          $tweet.prependTo($newsFeed);
          index -= 1;
        }
    });
 });