import React from 'react';
import ReactDOM from 'react-dom';
import tweetsData from './tweets';
import Linkify from 'react-linkify';
import * as moment from 'moment';

class App extends React.Component {
  
  render() {
    let tweets = tweetsData.map(tweet => {

      let img_url = null;
      if (tweet.entities.media) {
        img_url = tweet.entities.media[0].media_url;
      }

      var currentDateTime = moment();
      var tweetCreatedDateTime = moment(tweet.created_at);
      var hours = currentDateTime.diff(tweetCreatedDateTime, 'hours') // 1

      return (
      <>
        <p><img src={tweet.user.profile_image_url} alt=""/>{tweet.user.name.toUpperCase()}  @{tweet.user.screen_name}  {hours}h
        </p>
        <p><Linkify>{tweet.text}</Linkify></p>
        <p><img src={img_url} alt="" width="100px"/></p>
        <p>Retweet: {tweet.retweet_count}</p>
        <p>Favorite: {tweet.favorite_count}</p>
        <hr/>
      </>); 
    })

    return (
      <div>
        {tweets}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

// console.log("tweet react");