const Discord = require('discord.js');
const Equation = require('equations').default; // .default to fix a problem I encountered while importing without it

const client = new Discord.Client();
client.login(require('fs').readFileSync('bot_token.txt').toString().trim()); // bot token is the content of an ignored file so that the token is not leaked

client.on('ready', async () => {
	console.log(`Logged in successfully as bot!`);
});

client.on('message', (msg) => {
	msg.content = msg.content.trim(); // remove extra whitespace
	const flag = '!solve ';
	if (msg.content.startsWith(flag)) {
		const toSolve = msg.content.slice(flag.length, msg.content.length);
		try {
			const solved = Equation.solve(toSolve);

			msg.reply(`${toSolve} = ${solved}`);
		} catch (err) {
			msg.reply(`Could not solve the equation '${toSolve}'.`);
		}
	}
});
