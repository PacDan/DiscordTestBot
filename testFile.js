const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzUzNjExMTY2NDM1NjM5Mjk4.DIyNnQ.ak4KHNKkYRO-n3Ag4DfoQHu9ESU';

client.on('ready', () => {
    console.log("I am ready!");
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.login(token);
