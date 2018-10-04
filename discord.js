const discord = require('discord.js');
const client = new discord.Client();

client.on('ready',() => {
    console.log('logged in as ${client.user.tag}!')
})

client.on('message',msg => {
    if(msg.content === 'ping')
    msg.reply(client.user.id)
})

client.login('Token')

