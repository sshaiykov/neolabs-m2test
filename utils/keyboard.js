const { Markup,  } = require('telegraf')
const bot = require('./bootstrap')

module.exports.startWF = () => 
Markup.keyboard([
        [ 'Выбрать день', 'Погода на сегодня']
    ])
    .resize()

module.exports.daysOfWeek = () =>
    Markup.keyboard([
        ['Понедельник', 'Вторник', 'Среда'], 
        ['Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        ['Назад']
    ])
    .resize()
