const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity(`Taking Back Jerusalem`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member} to gain access to the rest of the server, type +roles.`);
});

client.on('message', message => {
  if (message.content === '+roles') {
    message.channel.send('To add a role type +role and your role. The Roles are: Catholic, Orthodox, Protestant, and Non-Christian.');
  }
});

client.on('message', message => {
  let userToModify = message.member;
  let rolec = message.guild.roles.find(r => r.name === "Catholic");
  let roleo = message.guild.roles.find(r => r.name === "Orthodox");
  let rolep = message.guild.roles.find(r => r.name === "Protestant");
  let rolen = message.guild.roles.find(r => r.name === "Non-Christian");
  if (message.content === '+role Catholic') {
    userToModify.addRole(rolec);
  }
  if (message.content === '+role Orthodox') {
    userToModify.addRole(roleo);
  }
  if (message.content === '+role Protestant') {
    userToModify.addRole(rolep);
  }
  if (message.content === '+role Non-Christian') {
    userToModify.addRole(rolen);
  }
});

client.login(process.env.BOT_TOKEN);
