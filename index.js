const bot = require('./utils/bootstrap')
const { startWF, chooseDay } = require('./utils/keyboard')
const { chooseWeather, days, findDay} = require('./utils/weather')

bot.start(ctx => ctx.reply(`Привет, ${ctx.message.from.first_name}!`, startWF()))


bot.hears('погода', ctx => ctx.reply(`Сегодня ${chooseWeather()}`))
 
bot.hears(days, ctx => ctx.reply(findDay()))

bot.hears('Выбрать день', ctx => ctx.reply('Выберите день:', chooseDay()))

bot.hears('Погода на сегодня', ctx => ctx.reply(chooseWeather()))

bot.hears('Назад', ctx => ctx.reply('Ок', startWF()))

