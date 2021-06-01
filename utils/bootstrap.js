const { Telegraf } = require('telegraf')

const bot = new Telegraf('1797006980:AAEX4AkomPF7YCixZBhiea2Hih7r3wZ2TxI')

console.log('Bot has been started')
bot.launch()


module.exports = bot