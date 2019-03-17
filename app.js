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

bot.sendMessage(70698447, `bot is up!}`);

// const timezone = 2;

const deadline = new Date(1553317800000);
const trainDeadline = new Date(1553317800000);

const hoursLeft = (date) => ((deadline - date)>0) ? Math.floor((deadline-date)/(1000*60*60)) : Math.floor((trainDeadline-date)/(1000*60*60));
const minutesLeft = (date) => ((deadline - date)>0) ? Math.floor((deadline-date)/(1000*60))%60 : Math.floor((trainDeadline-date)/(1000*60))%60;
const secondsLeft = (date) => ((deadline - date)>0) ? Math.floor((deadline-date)/(1000))%60 : Math.floor((trainDeadline-date)/(1000))%60;

bot.onText(/\/time_left/, function timeLeft(msg) {
    let currentDate = new Date();
    bot.sendMessage(70698447, `msg.chat.id: ${msg.chat.id} tells ${msg.text}`);
    bot.sendMessage(msg.chat.id, `Осталось ${hoursLeft(currentDate)} часов, ${minutesLeft(currentDate)} минут и ${secondsLeft(currentDate)} секунд `);
  });

  
bot.on('message', (msg) => {
    if (~msg.text.indexOf('time_left')) {
        
    } else  {
        const chatId = msg.chat.id;

        // send a message to the chat acknowledging receipt of their message
        bot.sendMessage(chatId, 'Пока что не работаем, но скоро будем)');
    }
  
});