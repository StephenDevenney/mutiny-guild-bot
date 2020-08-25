const DiscordGE = require('discord.js');

exports.eventCountdown = eventCountdown;

function eventCountdown(eventDate){ 
    let now = new Date().getTime();
    let distance = eventDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds]
}

exports.formatCountdown = formatCountdown;

function formatCountdown(countdownArray){
    let returnString = "";
    if(countdownArray[0] > 0)
        returnString = countdownArray[0] + "d " + countdownArray[1] + "h " + countdownArray[2] + "m ";
    else if(countdownArray[0] <= 0 && countdownArray[1] <= 0)
        returnString = countdownArray[2] + "m ";
    else if(countdownArray[0] <= 0)
        returnString = countdownArray[1] + "h " + countdownArray[2] + "m ";

    return returnString;
}

exports.checkRecurringValue = function(isRecurring){
    let returnValue = false;
    if(isRecurring == "yes" || isRecurring == "y" || isRecurring == "true")
        returnValue = true;

    return returnValue;
} 


exports.embededAddEventMessage = function(eventName, eventDate, isRecurring, serverName){
    let countdownArray = eventCountdown(eventDate);
    let countdown = formatCountdown(countdownArray);
    let messageAdd = new DiscordGE.MessageEmbed()
        .setColor(3447003)
    if(!isRecurring){
        messageAdd.setTitle("Event Added");
        messageAdd.addFields({name: "Event Name", value: eventName})
        messageAdd.addFields({name: "Event Date", value: new Date(eventDate)})
    }
    else{
        messageAdd.setTitle("Recurring Event Added");
        messageAdd.addFields({name: "Event Name", value: eventName})
        messageAdd.addFields({name: "Next Event Date", value: new Date(eventDate)})
    }

    messageAdd.addFields({name: "Event Server", value: serverName})
    messageAdd.addFields({name: "Time to event", value: countdown})
    messageAdd.setTimestamp();
    messageAdd.setFooter('Mutiny');

    return messageAdd;
} 

exports.nextEvents = function(eventsArray){ 
    if(eventsArray.length > 1){
        let countdownArray = [];
        eventsArray.forEach(item => {
            if(!Number.isNaN(Number(eventCountdown(item.eventDateTime).join(''))))
                countdownArray.push(Number(eventCountdown(item.eventDateTime).join('')));
        });
        let shortestCD = Math.min.apply(null, countdownArray);
        var secondCD = Math.min.apply(null, countdownArray.filter(n => n != shortestCD));
        let returnArray = [];
        eventsArray.forEach(item => {
            if(Number(eventCountdown(item.eventDateTime).join('')) == shortestCD && Number(eventCountdown(item.eventDateTime).join('')) != NaN){
                returnArray.push(item);
            }
        });
        eventsArray.forEach(item => {
            if(Number(eventCountdown(item.eventDateTime).join('')) == secondCD && Number(eventCountdown(item.eventDateTime).join('')) != NaN){
                returnArray.push(item);
            }
        });
        return [returnArray[0], returnArray[1]];
    }
    else if(eventsArray.length < 2)
        return [eventsArray[0]];
    else
        return [];
}

exports.guildEventsMessage = function(upcomingEvents){ 
    let returnMessage = new DiscordGE.MessageEmbed()
        .setColor(3447003);

    if(upcomingEvents.length >= 1){   
        if(upcomingEvents.length > 1){
            returnMessage.setTitle("Upcoming Events");
            let countdownFirst = eventCountdown(upcomingEvents[0].eventDateTime);
            let countdownSecond = eventCountdown(upcomingEvents[1].eventDateTime);
            if(upcomingEvents[0].serverName === null)
                upcomingEvents[0].serverName = "N/A";
            else if(upcomingEvents[1].serverName === null)
                upcomingEvents[1].serverName = "N/A";

            returnMessage.addFields({name: upcomingEvents[0].eventName, value: new Date(upcomingEvents[0].eventDateTime) + "\nServer: " + upcomingEvents[0].serverName + "\n" + formatCountdown(countdownFirst)});
            returnMessage.addFields({name: upcomingEvents[1].eventName, value: new Date(upcomingEvents[1].eventDateTime) + "\nServer: " + upcomingEvents[1].serverName + "\n" + formatCountdown(countdownSecond)});
        }
        else if(upcomingEvents.length < 2){
            returnMessage.setTitle("Upcoming Events");
            let countdownFirst = eventCountdown(upcomingEvents[0].eventDateTime);
            returnMessage.addFields({name: upcomingEvents[0].eventName, value: new Date(upcomingEvents[0].eventDateTime) + "\nServer: " + upcomingEvents[0].serverName + "\n" + formatCountdown(countdownFirst)});
        } 
        if(upcomingEvents[0].eventName.includes("Red Battle Field"))
            returnMessage.setImage('https://d1lss44hh2trtw.cloudfront.net/assets/article/2020/02/20/black-desert-online-screenshot-2_feature.jpg');
        else if(upcomingEvents[0].eventName.includes("Khan"))
            returnMessage.setImage('https://akamai-webcdn.blackdesertonline.com/bdo/resources/news/include/2805c4f270c7490013225f0864f3f7fb.jpg');
        else if(upcomingEvents[0].eventName.includes("Arena of Arsha"))
            returnMessage.setImage('https://i.imgur.com/sB3alSh.jpg');
        else if(upcomingEvents[0].eventName.includes("Tribute Wagon"))
            returnMessage.setImage('https://i.imgur.com/9wYJCC2.jpg');
        else
            returnMessage.setImage('https://mmoboost.pro/wp-content/uploads/2019/04/1544421560_maxresdefault-1.jpg');
    }
    else{
        returnMessage.setTitle("No Upcoming Events");
        returnMessage.setImage('https://mmoboost.pro/wp-content/uploads/2019/04/1544421560_maxresdefault-1.jpg');
    }
        
    returnMessage.setTimestamp()
    returnMessage.setFooter('Mutiny');

    return returnMessage;
}

exports.checkServerName = function(server){
    let returnServer = "";
    let serverName = server.slice(0, (server.length-1));;
    let serverNumber = server[server.length-1];

    switch(serverName.toLowerCase()){   
        case 'sea':
        case 'season':
            returnServer = "[Season " + serverNumber + "]";
            break;
        case 'olv':
        case 'olvia':
            returnServer = "[Olvia " + serverNumber + "]";
            break;
        case 'cal':
        case 'calpheon':
            returnServer = "[Calpheon " + serverNumber + "]";
            break;
        case 'med':
        case 'mediah':
            returnServer = "[Mediah " + serverNumber + "]";
            break;
        case 'bal':
        case 'balenos':
            returnServer = "[Balenos " + serverNumber + "]";
            break;
        case 'vel':
        case 'velia':
            returnServer = "[Velia " + serverNumber + "]";
            break;
        case 'val':
        case 'valencia':
            returnServer = "[Valencia " + serverNumber + "]";
            break;
        case 'ser':
        case 'serendia':
            returnServer = "[Serendia " + serverNumber + "]";
            break;
        case 'ar':
        case 'ars':
        case 'arsha':
            returnServer = "[Arsha]";
            break;
        default:
            returnServer = "Any";

    }
    return returnServer;
} 

exports.sendAnnouncementMessage = function(event){
    let returnMessage = "";
    let countdown = eventCountdown(event.eventDateTime);
    if(countdown[0] == 0 && countdown[1] == 3 && countdown[2] == 0){// 3 Hours
        returnMessage = "<@&495339225366134788> 3 hours until " + event.eventName + ", check <#731972787773636639> for more details.";
        if(event.eventName.includes("Khan"))
            returnMessage += "\nPlease remember that the server is subject to change depending on if a guild is currently doing Khan at this time."
    }
    else if(countdown[0] == 0 && countdown[1] == 1 && countdown[2] == 0){// 1 hour
        returnMessage = "<@&495339225366134788> 1 hour until " + event.eventName + ", check <#731972787773636639> for more details.";
        if(event.eventName.includes("Khan"))
            returnMessage += "\nPlease remember that the server is subject to change depending on if a guild is currently doing Khan at this time."
    }
    else{
        returnMessage = "do not send";
    }   

    return returnMessage;
}

exports.getItemForDeletion = function(itemName, itemDate, itemTime, events){
    let returnArray = [];
    events.forEach(item => {
        if(item.eventName.includes(itemName)){
            if(item.eventDate == itemDate && item.eventTime == itemTime)
                returnArray.push(item);
        }
    });

    return returnArray;
}