// javascript for twittler

 var main = function(){
    var $body = $('body');
    var $newsFeed = $('.news-feed')


    

    var getTweet = function(){
       var index = streams.home.length - 1;
        for(var i = 0; i<index; i++){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          var created_at = (new Date ());
          $tweet.text('@' + tweet.user + ': ' + tweet.message + ' - ' +created_at);
          $tweet.prependTo($newsFeed);
          index += 1;
        }
    }

    var removeTweet = function(){
      var index = streems.home.length-1;
      while (index>=0){
        var tweet = streams.home[index]
      }
    }

    $('button').click(function(){
       $('.tweets').text(getTweet()).prependTo($newsFeed);
    });
 }

$(document).ready(main);