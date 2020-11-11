const { prefix } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.id == require('../../config.json').creatorUserID) {
            try {
				console.log(args.join(' '));
                client.shard.broadcastEval(args.join(' '));
            } catch (err) {
                message.channel.send(`JavaScript error occured: ${err}`);
				console.log(err);
            }
        } else {
            message.channel.send(`Only ${require('../../config.json').creator} can use this command!`);
        }
};

module.exports.help = {
    name: "dingus",
    description: "Executes raw JavaScript code. Bot owner only!",
    aliases: ['console']
};
