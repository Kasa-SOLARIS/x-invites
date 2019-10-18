const Discord = require('discord.js')
const bot = new Discord.Client()
let prefix = "?"
 
bot.login('NjM0ODgxNTk0ODcxNTEzMTI5.XapCHw.KI3R2vZHPmbbRgWwvUnZvdeNys4')
 
bot.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('634881998577729536').send(embed)
  
})
 
bot.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('634881998577729536').send(embed)
})
