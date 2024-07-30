*/

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/TPBgGX8HPf";
      const githubLink = "https://github.com/Sythe44";
      const gunlink = "https://guns.lol/sythe44";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'LS Services Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&', 
              url: 'https://discord.gg/TPBgGX8HPf'
          })
            .setDescription(`➡️ **Join the Discord server for support and RL and Val Services:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- guns - ${gunslink}`)
            .setImage('https://cdn.discordapp.com/attachments/1263941942035742742/1263942902816571403/standard_1.gif?ex=66aa928e&is=66a9410e&hm=dc382bb00d831eb806ba2d71af96959ac975504bd68d3cebf2d416d4ce103d52&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

/*
