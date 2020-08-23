const Discord = require('discord.js');

exports.userExists = function(userObj, client){
    let found = false;
    if (userObj.includes("!") || userObj.includes("@"))
        found = true;                  
    else{  
        let guild = client.guilds.cache.get('415964135394770944');
        client.users.cache.forEach(element => {   
            if (guild.member(element.id) && guild.member(element.id).user.bot == false){    
                if(element.username.toLowerCase() === userObj.toLowerCase() && !element.bot)
                    found = true;     
            }
        });          
    }
    return found;
}

exports.processList = function(list, usersProcessed, passes){
    var i = usersProcessed;
    var returnList = [];
        
    for (i; i < list.length; i++) {
        if(i<8 && i!=undefined && i!=null){
            returnList.push(list[i]);
            usersProcessed++;
            
        }
        else if(i>=8 && i<16 && i!=undefined && i!=null && passes == 1){
            returnList.push(list[i]);
            usersProcessed++;     
        }
        else if(i>=16 && i<24 && i!=undefined && i!=null && passes == 2){
            returnList.push(list[i]);
            usersProcessed++;     
        }
        else if(i>=24 && i<32 && i!=undefined && i!=null && passes == 3){
            returnList.push(list[i]);
            usersProcessed++;     
        }
        else if(i>=32 && i<40 && i!=undefined && i!=null && passes == 4){
            returnList.push(list[i]);
            usersProcessed++;     
        }
        else if(i>=40 && i<48 && i!=undefined && i!=null && passes == 5){
            returnList.push(list[i]);
            usersProcessed++;     
        }
        else if(i>=48 && i<56 && i!=undefined && i!=null && passes == 6){
            returnList.push(list[i]);
            usersProcessed++;     
        }
        // else if(i<42 && i!=undefined && i!=null && passes == 1){
        //     returnList.push(list[i]);
        //     usersProcessed++;
        // }
        // else if(i<63 && i!=undefined && i!=null && passes == 2){
        //     returnList.push(list[i]);
        //     usersProcessed++;
        // }
        // else if(i<84 && i!=undefined && i!=null && passes == 3){
        //     returnList.push(list[i]);
        //     usersProcessed++;
        // }
    }
    return [returnList, usersProcessed];
}

exports.listUsersMessage = function(users){
    if(users.length > 0){
        let exampleEmbed = new Discord.MessageEmbed()
                .setColor(3447003)
                .setTitle('Active members')
                .setDescription('List of members with activity points'); 
        users.forEach(element => { 
            let lastActivityDate = "No date on record";
            if(element.lastActivity != null)
                lastActivityDate = new Date(element.lastActivity);    

            exampleEmbed.addFields(
                { name: element.userName, value: element.points, inline: true },
                { name: "Guild Quests", value: element.questCount, inline: true },
                { name: "Last GQ", value: lastActivityDate, inline: true },
            )   
        });  
        return exampleEmbed;
    }
    else
        return "do not send"
}

exports.getUser = function(userObj, client, message){
    let returnUser;
    if (userObj.includes('<@') && userObj.includes('>')) {
		userObj = userObj.slice(2, -1);

		if (userObj.includes('!'))
			userObj = userObj.slice(1);

		returnUser = client.users.cache.get(userObj);
	}             
    else{  
        client.users.cache.forEach(element => {                
            if(element.username.toLowerCase() == userObj.toLowerCase())
                returnUser = element;               
        });                   
    }
    return returnUser;
}

exports.collectionContainsDuplicate = function containsObject(userObj, userCollection) {
    var i;
    for (i = 0; i < userCollection.length; i++) {
        if (userCollection[i] === userObj)
            return true;  
    }

    return false;
}

exports.embededFindMessage = function(user, avatar){
    let lastActivityDate = "No date on record";
    let givenDescription = "";

    if(user.lastActivity != "")
        lastActivityDate = new Date(user.lastActivity);

    let message = {
        embed: {
            color: 3447003,
            author: { name: user.userName },
            description: givenDescription,
            thumbnail: {
                avatar_url: avatar,
            },
            fields: [{
                name: "Activity points",
                value: user.points
            },
            {
                name: "Date of last guild activity",
                value: lastActivityDate,
                inline: true
            }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: avatar,
                text: "Mutiny"
            }
        } 
    }   
    return message;
} 

exports.getDiscUser = function(userObj, client, message){
    let returnUser;
    if (userObj.includes("!") || userObj.includes("@"))
        returnUser = message.mentions.users.first();                     
 
    client.users.cache.forEach(element => {                
        if(element.username.toLowerCase() == userObj.toLowerCase())
            returnUser = element;              
    });                   
    
    return returnUser;
}
