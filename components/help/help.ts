const DiscordH = require('discord.js');

exports.help = { 
    embed: {
        color: 3447003,
        author: {
            name: "Available Commands",
        },
        description: "This is the help section, commands are not case sensitive.\n ahoy help (command) for syntax.",
        fields: [{
                name: "add",
                value: "Give a member activity points."
            },
            {
                name: "remove",
                value: "Take activity points from a member."
            },
            {
                name: "list",
                value: "List all members along with activity points."
            },
            {
                name: "find",
                value: "Show activity points for a specific member."
            },
            {
                name: "payout",
                value: "Sends back payment tiers for members and hard resets activity points."
            },
            {
                name: "events",
                value: "Add an event to the event tracker, accepts both recurring and non-recurring events."
            },
            {
                name: "feedback",
                value: "Send feedback on the bot, this is the preferred method to receive it as it's all in one location."
            },
            {
                name: "docs",
                value: "Documentation of everything the bot does and possibly will do."
            }
        ],
        timestamp: new Date(),
        footer: {
            text: "Mutiny"
        }
    }
}

exports.syntaxHelp = function(args){
    let syntaxDescription= "";
    switch(args){
        case 'add':
        case 'a':
            syntaxDescription = "ahoy add Commander386 10k";
            return embededSyntaxHelp(syntaxDescription, "add");
        case 'remove':
        case 'rem':
        case 'r':
            syntaxDescription = "ahoy remove Commander386 10k";
            return embededSyntaxHelp(syntaxDescription, "remove");
        case 'list':
        case 'l':
            syntaxDescription = "ahoy list";
            return embededSyntaxHelp(syntaxDescription, "list");
        case 'find':
        case 'f':
            syntaxDescription = "ahoy find Commander386";
            return embededSyntaxHelp(syntaxDescription, "find");
        case 'payout':
        case 'pay':
        case 'p':
            syntaxDescription = "ahoy payout";
            return embededSyntaxHelp(syntaxDescription, "payout");
        case 'events':
        case 'event':
        case 'e':
            syntaxDescription = "ahoy events name dd-mm-yyyy hh:mm yes/no";
            return embededSyntaxHelp(syntaxDescription, "events");
        case 'feedback':
        case 'feed':
        case 'f':
            syntaxDescription = "ahoy feedback text";
            return embededSyntaxHelp(syntaxDescription, "events");
        case 'docs':
        case 'doc':
        case 'd':
            syntaxDescription = "ahoy docs";
            return embededSyntaxHelp(syntaxDescription, "docs");
        case 'help':
        case 'h':
            syntaxDescription = "really?";
            return embededSyntaxHelp(syntaxDescription, "help");
        default:  
            return "Unknown Command";       
    }

    function embededSyntaxHelp(givenDescription, givenArg){
        let message = {
            embed: {
                color: 3447003,
                author: { name: givenArg },
                description: givenDescription,
            } 
        }
        return message;
    } 
     
}

exports.docs = function embededDocs(){
    let message = new DiscordH.MessageEmbed()
        .setColor(3447003)
        .setTitle('Documentation')
        .setDescription('[Docs](https://docs.google.com/document/d/1y2B7kS1lCX_0_SFnUt0jetUe64LAndCwvzge0j5i5UM/edit?usp=sharing)\n\nContact <@' + process.env.USER_COMMANDER386_ID + '> with any questions.')
        .setTimestamp()
        .setFooter('Mutiny');

    return message;
}

exports.errorMessage = function(msg, error, clientMessage){
    let exampleEmbed = new DiscordH.MessageEmbed()
        .setColor(3447003)
        .setTitle('Bot Error!')
        .setDescription('Server: ' + clientMessage.guild.name)
        .addFields({name: "Where: ", value: msg})
        .addFields({name: "Content: ", value: clientMessage.content})
        .addFields({name: "Author: ", value: clientMessage.author.username})
        if(error != null || error != undefined)
            exampleEmbed.addFields({name: "Error: ", value: error});
        exampleEmbed.setTimestamp()
        exampleEmbed.setFooter('Mutiny');

    return exampleEmbed;
}

exports.feedback = function embededFeedback(args, clientMessage){
    let feedback = args.join(" "); 
    let message = new DiscordH.MessageEmbed()
        .setColor(3447003)
        .setTitle('Feedback Form')
        .setDescription('Server: ' + clientMessage.guild.name)
        .addFields({name: "Author: ", value: clientMessage.author.username})
        .addFields({name: "Feedback: ", value: feedback})
        .setTimestamp()
        .setFooter('Mutiny');

    return message;
}