# Hubot Adapter

## Slack

Go to https://yourchannel.slack.com/services/new/hubot  
Create Hubot APP for slack.

#### Test hubot
```
HUBOT_SLACK_TOKEN=xoxb-... ./bin/hubot --adapter slack
```

#### Checkout from slack token
```
export HUBOT_SLACK_TOKEN=xoxb-...
```

#### Run
```
bin/hubot -a slack
```

----

## Line

Go to https://developers.line.me/  
Create Line business to use BOT API.

#### Install plugin
```
npm install hubot-line-trial --save
```

#### Checkout line business profile (find in channel)
```
export LINE_CHANNEL_ID=
export LINE_CHANNEL_SECRET=
export LINE_CHANNEL_MID=
```

#### Run
```
bin/hubot -a line-trial
```

----


## Facebook

This adapter use personal account to send message, so need add email and password in configuration.
#### Install plugin
```
npm install hubot-facebook
```

#### Use personal account login
```
export FB_LOGIN_EMAIL=
export FB_LOGIN_PASSWORD=
```

#### Scripts

Code example :

```
var login = require("facebook-chat-api");

// Create simple echo bot
login({email: "FB_LOGIN_EMAIL", password: "FB_LOGIN_PASSWORD"}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        api.sendMessage(message.body, message.threadID);
    });
});
```

#### Run 
```
bin/hubot -a facebook
```
----

## Heroku
#### Use with git
```
git init 
git add .
git commit -m "Initial commit"
```

#### Heroku dyno create
```
heroku create
https://frozen-chamber-31798.herokuapp.com/ | https://git.heroku.com/frozen-chamber-31798.git
heroku config:add HEROKU_URL=https://frozen-chamber-31798.herokuapp.com/ --app frozen-chamber-31798
```

#### Heroku config
```
heroku config:add HEROKU_URL=https://safe-escarpment-32858.herokuapp.com/ --app safe-escarpment-32858
heroku config:add HUBOT_SLACK_TOKEN=xoxb-... --app safe-escarpment-32858
heroku config:add HUBOT_HEROKU_KEEPALIVE_URL=https://safe-escarpment-32858.herokuapp.com/ --app safe-escarpment-32858
```

#### Set Line callback url
Go to https://developers.line.me/channels/{ID}
```
https://frozen-chamber-31798.herokuapp.com:443/hubot/incoming
```

----

## Cheerio

A npm project to get post from HTML.

#### Install 
```
npm install cheerio --save
```