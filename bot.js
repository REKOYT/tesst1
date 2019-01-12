const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("533565936788045824")
setInterval(function() {
channel.send(`REKOYT am gaming:stuck_out_tongue:`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
