// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
const helpCmds = require('./components/help/help.js');
const findCmds = require('./components/find-member/find.js');
const activityCmds = require('./components/activity-management/activity.js');
const eventCmds = require('./components/guild-events/guildEvents.js');
const guideCmds = require('./components/guides/guides.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    let guild = client.guilds.cache.get(process.env.SERVER_ID);
    const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'mutiny';").get();
    if (!table['count(*)']) {
        sql.prepare("CREATE TABLE mutiny (id INTEGER PRIMARY KEY AUTOINCREMENT, userId TEXT, userName TEXT, points INTEGER, tier TEXT, lastActivity TEXT, questCount INTEGER)").run();
        sql.prepare("CREATE UNIQUE INDEX idx_mutiny_id ON mutiny (id);").run();
        sql.pragma("synchronous = 1");
        sql.pragma("journal_mode = wal");   
        console.log("passed through creation, activity");
        client.insertUser = sql.prepare("INSERT OR REPLACE INTO mutiny (userId, userName, points, tier, lastActivity, questCount) VALUES (@userId, @userName, @points, @tier, @lastActivity, @questCount)");   

        // add users to table
        let discUsers;
        client.users.cache.forEach(user => {   
            if (guild.member(user.id) && guild.member(user.id).user.bot == false){
                discUsers = {
                    userId: user.id,
                    userName: user.username,
                    points: "0",
                    tier: "0",
                    lastActivity: null,
                    questCount: 0
                }
                client.insertUser.run(discUsers);
            }
        });
    }  
    const tableEvents = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'events';").get(); 
    if (!tableEvents['count(*)']) {
        sql.prepare("CREATE TABLE events (id INTEGER PRIMARY KEY AUTOINCREMENT, eventName TEXT, eventDate TEXT, eventTime TEXT, isRecurring INTEGER, serverName TEXT)").run();
        sql.prepare("CREATE UNIQUE INDEX idx_events_id ON events (id);").run();
        sql.pragma("synchronous = 1");
        sql.pragma("journal_mode = wal");   
        console.log("passed through creation, events");
    }

    const tableBosses = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'bosses';").get(); 
    if (!tableBosses['count(*)']) {
        sql.prepare("CREATE TABLE bosses (id INTEGER PRIMARY KEY AUTOINCREMENT, bossName TEXT, bossDate TEXT, bossTime TEXT, alert INTEGER)").run();
        sql.prepare("CREATE UNIQUE INDEX idx_bosses_id ON events (id);").run();
        sql.pragma("synchronous = 1");
        sql.pragma("journal_mode = wal");   
        console.log("passed through creation, bosses");
    }

    // Events
    client.selectAllEvents = sql.prepare("SELECT * FROM events");
    client.updateEventDate = sql.prepare("UPDATE events SET eventDate = ? WHERE id = ?");
    client.updateEventTime = sql.prepare("UPDATE events SET eventTime = ? WHERE id = ?");
    client.dropEvent = sql.prepare("DELETE FROM events WHERE id = ?");

    // Bosses
    client.selectAllBosses = sql.prepare("SELECT * FROM bosses");
    client.updateBossDate = sql.prepare("UPDATE bosses SET bossDate = ? WHERE id = ?");
    client.updateBossTime = sql.prepare("UPDATE bosses SET bossTime = ? WHERE id = ?");
    client.dropBoss = sql.prepare("DELETE FROM bosses WHERE id = ?");

    let upcomingEvents = [];
    reloadEvents();
    function reloadEvents() {
        let eventList = client.selectAllEvents.all();
        let eventArray = [];

        if(eventList.length > 0){
            eventList.forEach(item => {
                let dateArray = item.eventDate.split("-");
                    if(dateArray.length < 2)
                        dateArray = item.eventDate.split("/");

                let date = dateArray[2] + '-'
                        + ('0' + dateArray[1]).slice(-2) + '-'
                        + ('0' + dateArray[0]).slice(-2);

                let dateTimeString = date + "T" + item.eventTime;
                let dateTime = Date.parse(dateTimeString); 
                let countdown = eventCmds.eventCountdown(dateTime);

                if(countdown[0] <= 0 && countdown[1] <= 0 && countdown[2] <= 0 && countdown[3] <= 0){  
                    if(item.isRecurring == 1){
                        //update time
                        let nextWeek = dateTime + 7 * 24 * 60 * 60 * 1000;
                        dateTime = nextWeek;
                        let updatedDate = new Date(nextWeek).toLocaleDateString();
                        updatedDate = new Date(updatedDate);
                        updatedDate = ('0' + updatedDate.getDate()).slice(-2) + '/'
                        + ('0' + (updatedDate.getMonth()+1)).slice(-2) + '/'
                        + updatedDate.getFullYear();

                        let nextWeekDate = new Date(nextWeek);
                        let updatedTime = ('0' + nextWeekDate.getHours()).slice(-2) + ':'
                        + ('0' + nextWeekDate.getMinutes()).slice(-2) + ':00';
                        
                        client.updateEventDate.run([updatedDate, item.id]);
                        client.updateEventTime.run([updatedTime, item.id]);
                    }
                    else{
                        console.log("event dropped: " + item.eventName);
                        client.dropEvent.run([item.id]);
                    }
                }

                let event = {
                    eventName: item.eventName,
                    eventDateTime: dateTime,
                    isRecurring: item.isRecurring,
                    serverName: item.serverName
                }
                eventArray.push(event);
            });
            // get next events (up to 2)
            upcomingEvents = eventCmds.nextEvents(eventArray);
            messageFilter(eventCmds.sendAnnouncementMessage(upcomingEvents[0]));
        }
    }

    guild.channels.cache.forEach(channel => {   
        if(channel.id == process.env.CHANNEL_GUILD_EVENTS_ID){
            let i = 0;
            updateEventCountdown();
            function updateEventCountdown(){
                channel.messages.fetch({ limit: 1 }).then(messages => {
                    if(messages.first() !== undefined){
                        let lastMessage = messages.first();
                        try{
                            setInterval(function() {
                                lastMessage.edit(eventCmds.guildEventsMessage(upcomingEvents));
                                reloadEvents();
                            }, 60000)//60000
                        }
                        catch(err){
                            console.log(err);
                        }
                        
                    }
                    else{
                        if(i==0)
                            channel.send(eventCmds.guildEventsMessage(upcomingEvents));

                        i++;
                        updateEventCountdown();
                    }
                })
            }
            
        }
    });
    // Announce Event Reminder
    function messageFilter(msg){
        if(msg != "do not send")
            client.channels.cache.get(process.env.CHANNEL_ANNOUNCEMENTS_ID).send(msg);
    }
    client.user.setActivity("PEN Roulette", {});
});

client.login(process.env.DISCORD_TOKEN);

client.on('guildMemberAdd', member => {
    client.insertUser = sql.prepare("INSERT OR REPLACE INTO mutiny (userId, userName, points, tier, lastActivity, questCount) VALUES (@userId, @userName, @points, @tier, @lastActivity, @questCount)");
    let newUser = {
        userId: member.user.id,
        userName: member.user.username,
        points: "0",
        tier: "0",
        lastActivity: null,
        questCount: 0
    }
    client.insertUser.run(newUser);
    console.log(newUser.userName + " was added to database");
});

client.on('message', message => {
    // let guild = client.guilds.cache.get(process.env.SERVER_ID);

    if(message.author.bot) return;
    if(message.channel.type === process.env.DIRECT_MESSAGE){
        try {
            // Check Shorthand
            let shorthand = false;
            if(message.content.startsWith(process.env.PREFIX) || message.content.startsWith(process.env.PREFIXSHORT)){
                if(message.content.startsWith(process.env.PREFIXSHORT))
                    shorthand = true;
    }
    else
        return;
            messageModerator(helpCmds.anonFeedback(message, shorthand));
        } 
        catch (err){
            let errMessage = helpCmds.errorMessage("Error sending feedback", err, message);
            messageFilter("Fatal error! moderator has been notified.");
            messageModerator(errMessage);
            return;
        } 
    }

    // Activity
    client.updateUserPoints = sql.prepare("UPDATE mutiny SET points = ? WHERE userId = ?");
    client.updateLastActivity = sql.prepare("UPDATE mutiny SET lastActivity = ? WHERE userId = ?");
    client.updateQuestCount = sql.prepare("UPDATE mutiny SET questCount = ? WHERE userId = ?");
    client.findUser = sql.prepare("SELECT * FROM mutiny WHERE userName = ?");
    client.selectAll = sql.prepare("SELECT * FROM mutiny");
    client.selectAllWithPoints = sql.prepare("SELECT * FROM mutiny WHERE points > 0 ORDER BY points DESC");
    client.insertUser = sql.prepare("INSERT OR REPLACE INTO mutiny (userId, userName, points, tier, lastActivity, questCount) VALUES (@userId, @userName, @points, @tier, @lastActivity, @questCount)");   
    // Events
    client.addEvent = sql.prepare("INSERT OR REPLACE INTO events (eventName, eventDate, eventTime, isRecurring, serverName) VALUES (@eventName, @eventDate, @eventTime, @isRecurring, @serverName)");
    // Bosses

    if(message.channel.id == process.env.CHANNEL_GUILD_BOT_ID)
        activity();

    if(message.channel.id == process.env.CHANNEL_GUIDES_ID)
        guidesChannel();

    if(message.channel.id == process.env.CHANNEL_GAMES_ROOM_ID)
        gamesRoom();

    // Activity
    function activity(){
    // check user roles instead of channel
    if(!message.member.roles.cache.some(role => role.id === process.env.ROLE_GUILD_MASTER_ID || role.id === process.env.ROLE_OFFICER_ID)) return message.channel.send("Unauthorized user"); 

    if(message.channel.id != process.env.CHANNEL_GUILD_BOT_ID) return;

    // Check Shorthand
    let shorthand = false;
    if(message.content.startsWith(process.env.PREFIX) || message.content.startsWith(process.env.PREFIXSHORT)){
        if(message.content.startsWith(process.env.PREFIXSHORT))
            shorthand = true;
    }
    else
        return;

    let removePrefix = "";
    let prefix = "";
    let args = [];
    if(shorthand){
        removePrefix = message.content.slice(process.env.PREFIXSHORT.length);
        prefix = process.env.PREFIXSHORT;
        args = removePrefix.slice(prefix.length-1).trim().split(/ +/g);
    } 
    else{
        removePrefix = message.content.slice(process.env.PREFIX.length);
        prefix = process.env.PREFIX;
        args = removePrefix.slice(prefix.length-4).trim().split(/ +/g);
    } 
    const command = args.shift().toLowerCase();
    let userExists;
    let user;
    let givenPoints;

    switch(command){   
        case 'add':
        case 'a':
        case '+':        
        try {
            // let userCollection = [];
            // let possibleUsers = args.slice(0, (args.length-1));
            // try{
            //     possibleUsers.forEach(item => {
            //         if(findCmds.userExists(item, client)){
            //             let user = findCmds.getUser(item,client, message);
            //             if(!user.bot && !findCmds.collectionContainsDuplicate(user, userCollection))
            //                 userCollection.push(user);
            //         }  
            //     });
            // }
            // catch(err){
            //     messageFilter("Incorrect Syntax.");
            //     let errMessage = helpCmds.errorMessage("Error adding points", err, message);
            //     messageModerator(errMessage);
            //     return;
            // }
            
            // if(userCollection.length == 0){
            //     messageFilter("User not found"); 
            //     return;
            // }
            // let argsPoints = args[args.length-1];
            // let activityPoints = args[args.length-1];
            // if(findCmds.userExists(activityPoints, client)){
            //     messageFilter("Incorrect Syntax.");    
            //     return;
            // }
            // userCollection.forEach(item => {
            //     let userObj = item;
            //     givenPoints = 0;
            //     let user = client.findUser.get(userObj.username);        
            //     let activityPoints = activityCmds.addPoints(argsPoints, user.points);
            //     if(activityPoints === undefined || isNaN(activityPoints))
            //         messageFilter("Incorrect Syntax.");       
            //     else{
            //         user.points = activityPoints;
            //         user.lastActivity = Date.now();
            //         user.questCount++;
            //         client.updateUserPoints.run([user.points, user.userId]);
            //         client.updateLastActivity.run([user.lastActivity, user.userId]);
            //         client.updateQuestCount.run([user.questCount, user.userId]);
            //         messageFilter(activityCmds.embededActivityMessage(user.userName, argsPoints, user.points, user.questCount, command));
            //     } 
            // });
            // break;
            messageFilter("Not Implemented.");
            break;
        } 
        catch (err){
            let errMessage = helpCmds.errorMessage("Error adding points", err, message);
            messageFilter("Fatal error! moderator has been notified.");
            messageModerator(errMessage);
            break;
        }
        case 'remove':
        case 'rem':
        case 'r':
        case '-': 
            try{
                // let [userObj, activityPoints] = args;
                // try{
                //     userExists = findCmds.userExists(userObj.toLowerCase(), client);
                // }catch{
                //     userExists = false;
                // }
                // if(!userExists){
                //     messageFilter("User not found"); 
                //     break;
                // }
                // user = findCmds.getUser(userObj, client, message);
                // user = client.findUser.get(user.username);  
                // givenPoints = activityPoints;   
                // activityPoints = activityCmds.removePoints(activityPoints, user.points);
                // if(activityPoints === undefined || isNaN(Number(activityPoints)))
                //     messageFilter("Incorrect Syntax.");       
                // else{
                //     user.points = activityPoints;
                //     client.updateUserPoints.run([user.points, user.userId]);
                //     messageFilter(activityCmds.embededActivityMessage(user.userName, givenPoints, user.points, user.questCount, command));
                // } 
                // break;
                messageFilter("Not Implemented.");
                break;
            }
            catch(err){
                let errMessage = helpCmds.errorMessage("Error removing points", err, message);
                messageFilter("Fatal error! moderator has been notified.");
                messageModerator(errMessage);
                break;
            } 
        case 'list':
        case 'l':
            try{
                let userList = client.selectAllWithPoints.all();
                if(userList.length > 0){
                    let usersProcessed = 0;
                    let list = userList;
                    let msgList = userList;
                    let i = 0;
                    do{           
                        msgList = list.slice(usersProcessed, msgList.length);
                        let arrayList = findCmds.processList(list, usersProcessed, i);
                        msgList = arrayList[0];
                        usersProcessed = arrayList[1];
                        let msg = findCmds.listUsersMessage(msgList);
                        messageFilter(msg);
                        i++;
                        
                    }while(msgList.length > 0)
                }       
                else
                    messageFilter("No activity yet this week");

                break;
            }catch (err){
                let errMessage = helpCmds.errorMessage("Error listing members", err, message);
                messageFilter("Fatal error! moderator has been notified.");
                messageModerator(errMessage);
                break;
            }
        case 'find':
        case 'f':
            try{
                let [userObj, activityPoints] = args;
                try{
                    userExists = findCmds.userExists(userObj.toLowerCase(), client);
                }catch{
                    userExists = false;
                }
                if(!userExists){
                    messageFilter("User not found"); 
                    return;
                }
                user = findCmds.getUser(userObj, client, message);
                user = client.findUser.get(user.username);  
                // let discU = findCmds.getDiscUser(userObj, client, message);
                messageFilter(findCmds.embededFindMessage(user));
                break;
            }
            catch(err){
                let errMessage = helpCmds.errorMessage("Error finding member", err, message);
                messageFilter("Fatal error! moderator has been notified.");
                messageModerator(errMessage);
                break;
            }  
        case 'payout':
        case 'pay':
        case 'p':
            try{
                message.channel.send("Not Implemented");
                break;
            } 
            catch (err){
                let errMessage = helpCmds.errorMessage("Error performing payout", err, message);
                messageFilter("Fatal error! moderator has been notified.");
                messageModerator(errMessage);
                break;
            }
        case 'events':
        case 'event':
        case 'e':
            try {
                let thisEventDate = args[args.length-4];
                let thisEventTime = args[args.length-3];
                let thisIsRecurring = args[args.length-2];
                let thisServerName = args[args.length-1];

                let dateArray = thisEventDate.split("-");
                if(dateArray.length < 2)
                    dateArray = thisEventDate.split("/");

                let date = dateArray[2] + '-'
                    + ('0' + dateArray[1]).slice(-2) + '-'
                    + ('0' + dateArray[0]).slice(-2);

                let dateCheck = Date.parse(date);
                let eventNameArray = args.slice(0, (args.length-4));
                let thisEventName = eventNameArray[0];
                eventNameArray.forEach(item => {
                    if(item != eventNameArray[0])
                        thisEventName += " " + item;
                });

                if(thisEventName == null || date == null || thisIsRecurring == null || thisEventName == undefined || date == undefined || thisIsRecurring == undefined || isNaN(dateCheck) || thisServerName == undefined){
                    messageFilter("Incorrect Syntax.");
                    break;
                }
                        
                let reccurs = eventCmds.checkRecurringValue(thisIsRecurring);

                if(reccurs)
                    thisIsRecurring = 1;
                else if(!reccurs)
                    thisIsRecurring = 0;

                let showDate = Date.parse(date + "T" + thisEventTime);
                let postDate = ('0' + dateArray[0]).slice(-2) + '/'
                    + ('0' + dateArray[1]).slice(-2) + '/'
                    + dateArray[2];

                thisServerName = eventCmds.checkServerName(thisServerName);

                let newEvent = {
                    eventName: thisEventName,
                    eventDate: postDate,
                    eventTime:  new Date(showDate).toLocaleTimeString(),
                    isRecurring: thisIsRecurring,
                    serverName: thisServerName
                }

                client.addEvent.run(newEvent);
                messageFilter(eventCmds.embededAddEventMessage(thisEventName, showDate, reccurs, thisServerName));
                break;  
            } 
            catch (err){
                let errMessage = helpCmds.errorMessage("Error adding event", err, message);
                messageFilter("Fatal error! moderator has been notified.");
                messageModerator(errMessage);
                break;
            }
        case 'delete':
        case 'del':
            try{
                let table = args[0],
                itemDate = args[args.length-2],
                itemTime = args[args.length-1];
                let itemNameArray = args.slice(1, (args.length-2));
                let itemName = itemNameArray.join(" ");
                itemTime = itemTime + ":00";

                if(table.includes("events")){
                    let events = client.selectAllEvents.all();
                    let eventItemArray = eventCmds.getItemForDeletion(itemName, itemDate, itemTime, events);

                    if(eventItemArray.length > 0){
                        if(eventItemArray.length < 2){
                            messageFilter(eventItemArray[0].eventName + " deleted.");
                            client.dropEvent.run([eventItemArray[0].id]);
                        }
                        else
                            messageFilter("Too many matches.");
                    }
                    else
                        messageFilter(itemName + " was not found.");
                }
                else if(table.includes("bosses")){
                    let bosses = client.selectAllBosses.all();
                    let bossItemArray = eventCmds.getItemForDeletion(itemName, itemDate, itemTime, bosses);
                    
                    if(bossItemArray.length > 0){
                        if(bossItemArray.length < 2){
                            messageFilter(bossItemArray[0].eventName + " deleted.");
                            client.dropBoss.run([bossItemArray[0].id]);
                        }
                        else
                            messageFilter("Too many matches.");
                    }
                    else
                        messageFilter(itemName + " was not found.");
                }
                else
                    messageFilter("Table " + table + " does not exist.");

                break;
            } 
            catch (err){
                let errMessage = helpCmds.errorMessage("Error deleting event/boss", err, message);
                messageFilter("Fatal error! moderator has been notified.");
                messageModerator(errMessage);
                break;
            } 
        case 'docs':
        case 'doc':
        case 'd':
            try{
                messageFilter(helpCmds.docs());
                break;
            } 
            catch (err){
                let errMessage = helpCmds.errorMessage("Error performing payout", err, message);
                messageFilter("Fatal error! moderator has been notified.");
                messageModerator(errMessage);
                break;
            }
        case 'feedback':
        case 'feed':
        case 'fb':
            try {
                messageModerator(helpCmds.feedback(args, message));
                break;  
            } 
            catch (err){
                let errMessage = helpCmds.errorMessage("Error sending feedback", err, message);
                messageFilter("Fatal error! moderator has been notified.");
                messageModerator(errMessage);
                break;
            } 
        case 'help':
        case 'h':
            try {
                if(args.length === 0)
                    messageFilter(helpCmds.help);
                else if(args.length === 1)
                    messageFilter(helpCmds.syntaxHelp(args.toString()));
                break;  
            } 
            catch (err){
                let errMessage = helpCmds.errorMessage("Error displaying help menu", err, message);
                messageFilter("Fatal error! moderator has been notified.");
                messageModerator(errMessage);
                break;
            } 
        default:  
            messageFilter("Unknown Command");            
    }
    // end of activity commands switch
    }

    function guidesChannel(){
        let shorthand = false;
        if(message.content.startsWith(process.env.PREFIX) || message.content.startsWith(process.env.PREFIXSHORT) || message.content.startsWith(process.env.PREFIX_GUIDES)){
            if(message.content.startsWith(process.env.PREFIX_GUIDES) || message.content.startsWith(process.env.PREFIXSHORT))
                shorthand = true;
        }
        else
            return;

        let removePrefix = "";
        let prefix = "";
        let args = [];
        if(shorthand){
            if(message.content.startsWith(process.env.PREFIX_GUIDES)){
                removePrefix = message.content.slice(process.env.PREFIX_GUIDES.length);
                prefix = process.env.PREFIX_GUIDES;
            }
            else {
                removePrefix = message.content.slice(process.env.PREFIXSHORT.length);
                prefix = process.env.PREFIXSHORT;
            }  
            args = removePrefix.slice(prefix.length-1).trim().split(/ +/g);
        } 
        else{
            removePrefix = message.content.slice(process.env.PREFIX.length);
            prefix = process.env.PREFIX;
            args = removePrefix.slice(prefix.length-4).trim().split(/ +/g);
        } 

        let guideName = args.join(" ");

        try{
            let guide = guideCmds.retrieveGuide(guideName);
            messageFilter(guide);
        }
        catch (err){
            let errMessage = helpCmds.errorMessage("Error retrieving guide", err, message);
            messageFilter("Fatal error! moderator has been notified.");
            messageModerator(errMessage);
        } 
    }

    function gamesRoom(){
        let shorthand = false;
        if(message.content.startsWith(process.env.PREFIX) || message.content.startsWith(process.env.PREFIXSHORT)){
            if(message.content.startsWith(process.env.PREFIXSHORT))
                shorthand = true;
        }
        else
            return;

        let removePrefix = "";
        let prefix = "";
        let args = [];
        if(shorthand){
            removePrefix = message.content.slice(process.env.PREFIXSHORT.length);
            prefix = process.env.PREFIXSHORT;
            args = removePrefix.slice(prefix.length-1).trim().split(/ +/g);
        } 
        else{
            removePrefix = message.content.slice(process.env.PREFIX.length);
            prefix = process.env.PREFIX;
            args = removePrefix.slice(prefix.length-4).trim().split(/ +/g);
        } 
    
        const command = args.shift().toLowerCase();

        switch(command){   
            case 'rng': 
                try {
                    let number = Math.floor((Math.random() * 28) + 1);
                    messageFilter(number);
                    break;
                } 
                catch (err){
                    let errMessage = helpCmds.errorMessage("Error with rng calculation", err, message);
                    messageFilter("Fatal error! moderator has been notified.");
                    messageModerator(errMessage);
                    break;
                }
            case 'die': 
                try {
                    let img = "";
                    let number = Math.floor((Math.random() * 6) + 1);
                    switch(number){
                        case 1: 
                            img = "https://cdn.discordapp.com/attachments/746514337484767303/746515419053031514/d1.png";
                            break;
                        case 2: 
                            img = "https://cdn.discordapp.com/attachments/746514337484767303/746515771093549077/d2.png";
                            break;
                        case 3: 
                            img = "https://cdn.discordapp.com/attachments/746514337484767303/746517360432775179/d4.png";
                            break;
                        case 4: 
                            img = "https://cdn.discordapp.com/attachments/746514337484767303/746517360432775179/d4.png";
                            break;
                        case 5: 
                            img = "https://cdn.discordapp.com/attachments/746514337484767303/746517413822201896/d5.png";
                            break;
                        case 6: 
                            img = "https://cdn.discordapp.com/attachments/746514337484767303/746517565139976342/d6.png";
                            break;
                    }
                        
                    messageFilter(img);
                    break;
                } 
                catch (err){
                    let errMessage = helpCmds.errorMessage("Error with rng calculation", err, message);
                    messageFilter("Fatal error! moderator has been notified.");
                    messageModerator(errMessage);
                    break;
                }
            case 'dice': 
                try {
                    let imageFirst = getDiceImage(Math.floor((Math.random() * 6) + 1));
                    let imageSecond = getDiceImage(Math.floor((Math.random() * 6) + 1));

                    function getDiceImage(number){
                        let img = "";
                        switch(number){
                            case 1: 
                                img = "https://cdn.discordapp.com/attachments/746514337484767303/746515419053031514/d1.png";
                                break;
                            case 2: 
                                img = "https://cdn.discordapp.com/attachments/746514337484767303/746515771093549077/d2.png";
                                break;
                            case 3: 
                                img = "https://cdn.discordapp.com/attachments/746514337484767303/746517360432775179/d4.png";
                                break;
                            case 4: 
                                img = "https://cdn.discordapp.com/attachments/746514337484767303/746517360432775179/d4.png";
                                break;
                            case 5: 
                                img = "https://cdn.discordapp.com/attachments/746514337484767303/746517413822201896/d5.png";
                                break;
                            case 6: 
                                img = "https://cdn.discordapp.com/attachments/746514337484767303/746517565139976342/d6.png";
                                break;
                        }
                        return img;
                    }
                    messageFilter(imageFirst);
                    messageFilter(imageSecond);
                    break;
                } 
                catch (err){
                    let errMessage = helpCmds.errorMessage("Error with rng calculation", err, message);
                    messageFilter("Fatal error! moderator has been notified.");
                    messageModerator(errMessage);
                    break;
                }
            case 'coin': 
                try {
                    if(Math.random() < 0.50)
                        messageFilter("heads");
                    else
                        messageFilter("tails");
                    
                    break;
                } 
                catch (err){
                    let errMessage = helpCmds.errorMessage("Error with rng calculation", err, message);
                    messageFilter("Fatal error! moderator has been notified.");
                    messageModerator(errMessage);
                    break;
                }
            default:  
                messageFilter("Not Available");   

        }
        
    }

    function messageFilter(msg){
        if(msg != "do not send")
            message.channel.send(msg);   

        if(msg === "Unknown Command")
            message.channel.send(helpCmds.help); 
        else if(msg === "Incorrect Syntax.")
            message.channel.send(helpCmds.syntaxHelp(this.command)); 
        else if(msg === "Fatal error! moderator has been notified.")
            messageModerator(msg);
        else if(msg === "No guide available.")
            messageUnknownGuide(message.content.slice(process.env.PREFIX_GUIDES.length));   
    }

    function messageModerator(errMessage){
        let userObj = "Commander386";
        let moderator = findCmds.getDiscUser(userObj, client, "");
        if(errMessage != "Fatal error! moderator has been notified.")
            moderator.send(errMessage);
        else
            moderator.send(helpCmds.errorMessage("Error in activity points", "Newly added '" + this.command + "' command wasn't added to activityCmds.embededActivityMessage", message));
    }

    function messageUnknownGuide(content){
        let userObj = "Commander386";
        let moderator = findCmds.getDiscUser(userObj, client, "");
        let msg = new Discord.MessageEmbed()
        .setColor(3447003)
        .setTitle('Unfound Guide')
        .addFields({name: "Content: ", value: content})
        .addFields({name: "Author: ", value: message.author.username})
        .setTimestamp()
        .setFooter('Mutiny');
        moderator.send(msg);
    }
});