// javascript for twittler

 $(document).ready(function(){
        var $body = $('body');

        $('button').click(function(){
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          var time_created = 
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          $tweet.appendTo($body);
          index -= 1;
        }
    });
 });