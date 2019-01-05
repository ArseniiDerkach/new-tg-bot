const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '328596384:AAGPSAUF3dp1X5uN3XJ3rwXJuibH8z_AUxw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// const timezone = 2;

const deadline = new Date(1547132820000);

const hoursLeft = () => Math.floor((deadline-Date.now())/(1000*60*60));
const minutesLeft = () => Math.floor((deadline-Date.now())/(1000*60))%60;
const secondsLeft = () => Math.floor((deadline-Date.now())%(1000))%60;

// bot.onText('\/time_left', (msg)=> {
//     bot.sendMessage('piupiu');
// })

bot.onText(/\/time_left/, function timeLeft(msg) {
    bot.sendMessage(msg.chat.id, `Осталось ${hoursLeft()} часов, ${minutesLeft()} минут и ${secondsLeft()} секунд `);
  });


// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });