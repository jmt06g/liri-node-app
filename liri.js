require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

// var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

client.get("statuses/home_timeline", function(error, tweets, response) {
  if(error){console.log(error);}
  // console.log(tweets);  // tweets
  //console.log(tweets);  
});



 var params = {screen_name: "Jon77034426", count: 20, exclude_replies:true, trim_user:true};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(JSON.stringify(tweets));
    }
      // tweetsArray = tweets;
      console.log(tweets)

      for(i=0; i<tweets.length; i++){
        console.log("Created at: " + tweets[i].created_at);
        console.log("Text: " + tweets[i].text);
        console.log('--------------------------------------');
      }
    });
    // else{
    //   console.log(error);
    // }



//console.log(keys.spotify)


// var spotify = new Spotify(keys.spotify);
 
//  spotify.search({ type: "track", query: "All the Small Things" }, function(err, data) {
//   if (err) {
//     return console.log("Error occurred: "  + err);
//   }
 
//  console.log(JSON.stringify(data)); 
//  });

