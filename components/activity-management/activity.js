const Discord = require('discord.js');

exports.addPoints = function(newPoints, currentPoints){
    let parsedNewPoints = parseInt(newPoints);
    let parsedCurrentPoints = parseInt(currentPoints);
    parsedCurrentPoints += parsedNewPoints;

    return parsedCurrentPoints;
}

exports.removePoints = function(newPoints, currentPoints){
    let parsedNewPoints = parseInt(newPoints);
    let parsedCurrentPoints = parseInt(currentPoints);
    parsedCurrentPoints -= parsedNewPoints;

    return parsedCurrentPoints;
}

exports.embededActivityMessage = function(username, points, totalPoints, questCount, command){
    points = parseInt(points);
    if(command == "add" || command == "a" || command == "+"){
        let messageAdd = new Discord.MessageEmbed()
        .setColor(3066993)
        .setTitle(username)
        .addFields({name: "Points Allocated", value: points})
        .addFields({name: "Total Points", value: totalPoints})
        if(questCount > 0)
            messageAdd.addFields({name: "Quests Participated", value: questCount});
        messageAdd.setTimestamp()
        messageAdd.setFooter('Mutiny');

        return messageAdd;
    }
    else if(command == "remove" || command == "rem" || command == "r" || command == "-"){
        let messageRemove = new Discord.MessageEmbed()
        .setColor(15158332)
        .setTitle(username)
        .addFields({name: "Points Removed", value: points})
        .addFields({name: "Total Points", value: totalPoints})
        messageRemove.setTimestamp()
        messageRemove.setFooter('Mutiny');
        
        return messageRemove;
    }  
    return "Fatal error! moderator has been notified.";
} 