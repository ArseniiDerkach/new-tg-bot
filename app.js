// const TelegramBot = require('node-telegram-bot-api');

// // replace the value below with the Telegram token you receive from @BotFather
// const token = '328596384:AAGPSAUF3dp1X5uN3XJ3rwXJuibH8z_AUxw';

// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, {polling: true});

// // const timezone = 2;

// const deadline = new Date(1547132820000);

// const hoursLeft = () => Math.floor((deadline-Date.now())/(1000*60*60));
// const minutesLeft = () => Math.floor((deadline-Date.now())/(1000*60))%60;
// const secondsLeft = () => Math.floor((deadline-Date.now())%(1000))%60;

// bot.onText(/\/time_left/, function timeLeft(msg) {
//     bot.sendMessage(msg.chat.id, `Осталось ${hoursLeft()} часов, ${minutesLeft()} минут и ${secondsLeft()} секунд `);
//   });

  
// bot.on('message', (msg) => {
//     if (~msg.text.indexOf('time_left')) {
        
//     } else  {
//         const chatId = msg.chat.id;

//         // send a message to the chat acknowledging receipt of their message
//         bot.sendMessage(chatId, 'Пока что не работаем, но скоро будем)');
//     }
  
// });


/**
 * This example demonstrates setting up webhook
 * on the Heroku platform.
 */


const TOKEN = process.env.TELEGRAM_TOKEN || '328596384:AAGPSAUF3dp1X5uN3XJ3rwXJuibH8z_AUxw';
const TelegramBot = require('node-telegram-bot-api');
const options = {
  webHook: {
    // Port to which you should bind is assigned to $PORT variable
    // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
    port: process.env.PORT
    // you do NOT need to set up certificates since Heroku provides
    // the SSL certs already (https://<app-name>.herokuapp.com)
    // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
  }
};
// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url = process.env.APP_URL || 'https://<app-name>.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);


// Just to ping!
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});