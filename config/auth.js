// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '154061845081917', // your App ID
        'clientSecret'    : 'a497666588da082dac7e9ea33ccc590c', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },
    'twitterAuth' : {
        'consumerKey'        : 'Z9qBUnj2xnEiOz9pzUbZ4znkl',
        'consumerSecret'     : 'G74iIX91ysN6WFg56MGJ95h8hn5bk9TtPiSkU8uzV5uzGPUrqB',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },
    'googleAuth' : {
        'clientID'         : '698741337538-5a9gufjnqemh0ae8leqf3bn96lqk5dfv.apps.googleusercontent.com',
        'clientSecret'     : 'RB3wz21sqHIC8HonsR8qSl1G',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
