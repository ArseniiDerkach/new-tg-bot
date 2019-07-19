const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const https = require('https');
http.createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
});
setInterval(function(){
    https.get('https://tgbot-for-my-love.herokuapp.com/')
},300000)

// replace the value below with the Telegram token you receive from @BotFather
const token = '328596384:AAGPSAUF3dp1X5uN3XJ3rwXJuibH8z_AUxw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.sendMessage(70698447, `bot is up!`);

// const timezone = 2;

const deadline = new Date(1563817020000);
const trainDeadline = new Date(1558791900000);

const hoursLeft = (date) => ((deadline - date)>0) ? Math.floor((deadline-date)/(1000*60*60)) : Math.floor((deadline-date)/(1000*60*60));
const minutesLeft = (date) => ((deadline - date)>0) ? Math.floor((deadline-date)/(1000*60))%60 : Math.floor((deadline-date)/(1000*60))%60;
const secondsLeft = (date) => ((deadline - date)>0) ? Math.floor((deadline-date)/(1000))%60 : Math.floor((deadline-date)/(1000))%60;

bot.onText(/\/time_left/, function timeLeft(msg) {
    let currentDate = new Date();

    bot.sendMessage(msg.chat.id, `Осталось ${hoursLeft(currentDate)} часов, ${minutesLeft(currentDate)} минут и ${secondsLeft(currentDate)} секунд до обратного поезда)`);
  });

bot.onText( /\/good_morning/,(msg) => {

    bot.sendMessage(msg.chat.id, 'Доброе утро, радость моя) Я свято верю в то что несмотря на то что ты мне писала в 3 с лишним, ты все равно выспалась) хорошего и солнечного(но не сильно) тебе денечке:*еще немножко и будем радышком:*')

});

bot.onText( /\/love_you/,(msg) => {

    bot.sendMessage(msg.chat.id, 'моя маленькая девочка, я бесконечно сильно люблю тебя<3 очень соскучился по тебе и очень очень жду додомцю, убирать^_^это типа смеющийся пусть будет смайлик)')

});

  
bot.on('message', (msg) => {
    bot.sendMessage(70698447, `msg.chat.id: ${msg.chat.id} tells ${msg.text}`);
    console.log(msg);
    if (~msg.text.indexOf('time_left')
        || ~msg.text.indexOf('good_morning')
        || ~msg.text.indexOf('love_you')
    ) {

    } else  {
        const chatId = msg.chat.id;

        // send a message to the chat acknowledging receipt of their message
        // bot.sendMessage(chatId, 'я еще пишу нового бота, поэтому если хочешь еще что-то использовать то напиши /love_you ))');
    }
  
});