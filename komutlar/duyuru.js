const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id != "325347998496456714") return message.channel.send("Bu komutu sadece botun sahibi kullanabilir!");

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Komutun yanına birşey yazmalısınız!');

  message.delete();

  console.log(Duyuru: "{message.author.username}#{message.author.discriminator}" "{mesaj}");

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(:white_check_mark: Mesaj başarıyla ** + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ** kullanıcıya gönderildi.);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyurbot'],
  permLevel: 4
};

exports.help = {
  name: 'duyurbot',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyurbot'
};
