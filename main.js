import {Telegraf, Markup} from 'telegraf'
import {message} from 'telegraf/filters'

const token = '6795345857:AAFaJYMQW5wNd07t9g-XF55rRdK5hWLnWvQ'
const webAppUrl = 'https://angular-tg-app-fe631.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже..',
        Markup.keyboard([Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`)])
    )
})

bot.on(message('web_app_data'), async (ctx) => {
    const myData = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${myData?.feedback}` ?? 'Empty message')
})

bot.launch()