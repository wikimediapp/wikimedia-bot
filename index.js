const TelegramBot = require('node-telegram-bot-api');

//const token = 'TU_TOKEN_DE_TELEGRAM';
const token = '6655270598:AAG9NJXBU6CqrZL5RcqsuKonCL8lps6C4RI';
const bot = new TelegramBot(token, {polling: true});


/*
GhostKNA
Your user ID: 1639299270
Current chat ID: 1639299270
------
PhantomKNA
Your user ID: 772484452
Current chat ID: 772484452
*/
// Función para enviar el mensaje
function enviarMensaje(chatId, mensaje) {
    bot.sendMessage(chatId, mensaje);
  }
  
  // Llama a la función cada 5 segundos (en milisegundos)
  setInterval(() => {
    enviarMensaje('1639299270', '⚠️Atencion⚠️ Han pasado 6 dias añade mas tiempo https://dash.zeabur.com/projects');
    enviarMensaje('772484452', '⚠️Atencion⚠️ Han pasado 6 dias añade mas tiempo https://dash.zeabur.com/projects');
  }, 6 * 24 * 60 * 60 * 1000);
//setInterval(enviarMensaje, 5 * 1000);