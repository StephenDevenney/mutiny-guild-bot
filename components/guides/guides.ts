exports.retrieveGuide = function(messageContent){
    let returnMessage = "";
    switch(messageContent.toLowerCase()){   
        case 'khan': 
            returnMessage = "https://preview.redd.it/fx5or768at341.png?auto=webp&s=fcd8f0893e9ad07fec1681504f36d6d684e40619";
            break;
        case 'khan cannons rotation': 
        case 'khan cannon rotation':
        case 'khan cannons':
        case 'khan cannon':
            returnMessage = "https://www.youtube.com/watch?v=D-UAmsG3jY8";
            break;
        case 'vell':
            returnMessage = "http://dulfy.net/2018/01/24/black-desert-vell-sea-monster-guide/";
            break;
        case 'tribute wagon':
            returnMessage = "https://www.youtube.com/watch?v=HH3viEDNHjE";
                break;
        case 'peridot leaves':
        case 'peridot leave':
        case 'peridot leaf':
        case 'peridot':
            returnMessage = "https://i.imgur.com/DqLcqQd.jpg";
                break;
        case 'kzarka':
        case 'karanda':
        case 'kutum':
        case 'nouver':
        case 'mirumok destroyer offin':
        case 'offin':
        case 'garmoth the red dragon':
        case 'garmoth':
        case 'muraka':
        case 'quint':
        case 'red nose':
        case 'dim tree spirit':
        case 'dim tree':
        case 'dastard bheg':
        case 'bheg':
        case 'giant mudster':
        case 'mudster':
        case 'katzvariak':
            returnMessage = "https://www.blackdesertfoundry.com/world-bosses-dungeons-guide/";
                break;
        case 'boss timer':
        case 'timer':
            returnMessage = "https://bdobosstimer.com/?&server=eu";
                break;
        case 'bartering':
        case 'barter':
            returnMessage = "https://grumpygreen.cricket/bdo-barter-sailing/";
                break;
        case 'bartering map':
        case 'barter map':
            returnMessage = "https://grumpygreen.cricket/wp-content/uploads/Margoria_Route.png";
            break;
        case 'bdo map':
        case 'map':
            returnMessage = "http://www.somethinglovely.net/bdo/";
            break;
        case 'caphras':
            returnMessage = "https://grumpygreen.cricket/caphras-stone/#:~:text=Caphras%20Stones%20are%20used%20in,by%20feeding%20them%20Caphras%20Stones.";
            break;
        case 'trina matchlock':
        case 'trina axe':
        case 'trina':
            returnMessage = "https://www.youtube.com/watch?v=T6VZiYZn2z8";
            break;
        case 'dorin morgrim adventure journal':
        case 'morgrim adventure journal':
        case 'dorin morgrim':
        case 'morgrim':
            returnMessage = "https://www.youtube.com/watch?v=tv5bxojROF8";
            break;
        case 'infinite hp potion':
        case 'infinite mana potion':
        case 'infinite potions':
        case 'infinite potion':
        case 'hp potion':
        case 'mana potion':
            returnMessage = "https://grumpygreen.cricket/infinite-potion/";
            break;
        case 'sycraia lower':
        case 'lower sycraia':
            returnMessage = "https://external-preview.redd.it/-8HPyYOHC3qksjx14aXjVIImpBxQe1H_b33sCXCE93k.png?auto=webp&s=f5eead6eed7c1c797115ba65217518fbf703d54d";
            break;
        case 'life mastery':
        case 'mastery':
            returnMessage = "https://grumpygreen.cricket/bdo-life-skill-mastery-levels/";
            break;
        case 'training mastery':
        case 'training':
            returnMessage = "https://grumpygreen.cricket/bdo-life-mastery-training/";
            break;
        case 'gathering mastery':
        case 'gathering':
            returnMessage = "https://grumpygreen.cricket/bdo-gathering-mastery/";
            break;
        case 'processing mastery':
        case 'mastery':
            returnMessage = "https://grumpygreen.cricket/bdo-processing-mastery/";
            break;
        case 'processing mastery':
        case 'processing':
            returnMessage = "https://grumpygreen.cricket/bdo-processing-mastery/";
            break;
        case 'sailing mastery':
        case 'sailing':
            returnMessage = "https://grumpygreen.cricket/sailing-mastery/";
            break;
        case 'hunting mastery':
        case 'hunting':
            returnMessage = "https://grumpygreen.cricket/hunting-mastery/";
            break;
        case 'fishing mastery':
        case 'fishing':
            returnMessage = "https://grumpygreen.cricket/life-mastery-fishing/";
            break;
        case 'alchemy mastery':
        case 'alchemy':
            returnMessage = "https://grumpygreen.cricket/alchemy-mastery/";
            break;
        case 'cooking mastery':
        case 'cooking':
            returnMessage = "https://grumpygreen.cricket/cooking-mastery/";
            break;
        case 'life mastery enhancement':
        case 'mastery enhancement':
        case 'life enhancement':
            returnMessage = "https://grumpygreen.cricket/bdo-life-mastery-enhancement/";
            break;
        case 'imperial delivery spreadsheet':
        case 'imperial cooking spreadsheet':
        case 'imperial alchemy spreadsheet':
            returnMessage = "https://docs.google.com/spreadsheets/d/1D7mFcXYFm4BUS_MKxTvgBY2lXkGtwWqn2AW91ntUvzE/edit#gid=1178773194";
            break;
        case 'imperial cooking delivery':
        case 'imperial cooking':
            returnMessage = "https://grumpygreen.cricket/bdo-imperial-cooking/";
            break;
        case 'imperial alchemy delivery':
        case 'imperial alchemy':
            returnMessage = "https://grumpygreen.cricket/bdo-imperial-alchemy/";
            break;
        case 'ocean':
        case 'sea':
            returnMessage = "https://grumpygreen.cricket/bdo-sailing-guide-halk/";
            break;
        case 'carrack balance':
        case 'carrack advance':
        case 'balance':
        case 'advance':
            returnMessage = "https://grumpygreen.cricket/bdo-epheria-caravel-upgrade/";
            break;
        case 'carrack valor':
        case 'carrack volante':
        case 'valor':
        case 'volante':
            returnMessage = "https://grumpygreen.cricket/bdo-epheria-caravel-upgrade/";
            break;
        case 'improved epheria frigate':
        case 'improved frigate':
        case 'galleass':
            returnMessage = "https://grumpygreen.cricket/bdo-epheria-frigate-upgrade-galleass-or-improved-design-materials-quest/";
            break;
        case 'improved epheria sailboat':
        case 'improved sailboat':
        case 'caravel':
            returnMessage = "https://grumpygreen.cricket/bdo-epheria-sailboat-upgrade-design-materials-quest/";
            break;
        case 'epheria sailboat':
        case 'sailboat':
            returnMessage = "https://grumpygreen.cricket/bdo-epheria-sailboat-guide/#:~:text=BDO%20Epheria%20Sailboat%20is%20known,T2%20Barter%20and%20Trade%20ship.&text=Epheria%20Sailboat%20is%20best%20at,to%20buy%20on%20the%20Marketplace.";
            break;
        case 'epheria frigate':
        case 'frigate':
            returnMessage = "https://grumpygreen.cricket/bdo-epheria-frigate-guide/";
            break;
        case 'valentine adventure log':
            returnMessage = "https://www.youtube.com/watch?v=Vsfzsv-WJaM";
            break;
        case 'questing to 61':
        case '61':
            returnMessage = "https://www.youtube.com/watch?v=LSBzDQNT49I";
            break;
        case 'grinding locations':
        case 'grinding spots':
        case 'grinding':
            returnMessage = "https://grumpygreen.cricket/bdo-grinding-spots/";
            break;
        case 'marketplace tax calculator':
        case 'tax calculator':
            returnMessage = "http://bdocalculator.com/";
            break;
        case 'fruits':
        case 'fruit of':
            returnMessage = "https://cdn.discordapp.com/attachments/511015098274545674/550725435051212800/unknown.png";
            break;
        case 'failstack chart':
        case 'failstacking':
        case 'failstack':
        case 'enhancing':
            returnMessage = "https://grumpygreen.cricket/bdo-failstack-chart/";
            break;
        case 'map of unknown piece':
        case 'Archaeologist map':
        case 'map of unknown':
        case 'permanent map':
        case 'arch map':
            returnMessage = "https://bdonexus.info/wiki/archaeologists-map-guide";
            break;
        case 'combat mechanics':
        case 'skill state modifiers':
        case 'crowd control resistances':
            returnMessage = "https://sites.google.com/site/whiteoceanonline/combat-mechanics";
            break;
        case 'pet food':
        case 'pet feed':
        case 'pets':
            returnMessage = "https://grumpygreen.cricket/bdo-pet-guide/";
        case 'events':
            returnMessage = "https://www.blackdesertonline.com/news/list/event";
            break;
        case 'patch notes':
        case 'patches':
        case 'patch':
            returnMessage = "https://www.blackdesertonline.com/news/list/event";
            break;
        case 'ap brackets':
        case 'dp brackets':
        case 'ap bracket':
        case 'dp bracket':
        case 'brackets':
            returnMessage = "https://grumpygreen.cricket/bdo-ap-brackets/";
            break;
        case 'lafi bedmountain upgraded compass':
        case 'permanent compass':
        case 'lafi bedmountain':
        case 'upgraded compass':
            returnMessage = "https://www.blackdesertfoundry.com/upgraded-compass-guide/";
            break;
        case 'make blackstar armour':
        case 'make blackstar armor':
            returnMessage = "https://grumpygreen.cricket/blackstar-armor/";
            break;
        case 'make blackstar weapons':
        case 'make blackstar weapon':
            returnMessage = "https://grumpygreen.cricket/bdo-black-star-weapon/";
            break;
        case 'blackstar weapons':
        case 'blackstar weapon':
            returnMessage = "https://grumpygreen.cricket/bdo-black-star-weapon/";
            break;
        case 'tungrad necklace':
            returnMessage = "https://bdocodex.com/us/item/11629/";
            break;
        case 'tungrad ring':
            returnMessage = "https://bdocodex.com/us/item/12061/";
            break;
        case 'tungrad belt':
            returnMessage = "https://bddatabase.net/us/item/12237/";
            break;
        case 'tungrad earring':
            returnMessage = "https://bdocodex.com/us/item/11828/";
            break;
        case 'eye of the ruins':
        case 'eotr':
            returnMessage = "https://bdocodex.com/us/item/12060/";
            break;
        case 'laytenn power stone':
        case 'laytenn necklace':
        case 'laytenn':
            returnMessage = "https://bdocodex.com/us/item/11630/";
            break;
        case 'ogre necklace':
        case 'ogre ring':
            returnMessage = "https://bddatabase.net/us/item/11607/";
            break;
        case 'valtarra belt':
            returnMessage = "https://bddatabase.net/us/item/11607/";
            break;
        case 'ring of crescent guardian':
        case "crescent's ring":
        case 'crescent ring':
        case 'crescents':
            returnMessage = "https://bddatabase.net/us/item/12031/";
            break;
        case "basilisk's belt":
        case "basilisks belt":
        case 'basilisk belt':
        case 'basi belt':
            returnMessage = "https://bddatabase.net/us/item/12230/";
            break;
        case 'narc ear accessory':
        case 'narc earring':
            returnMessage = "https://bddatabase.net/us/item/11834/";
            break;
        case "capotia's ring":
        case "capotias ring":
        case 'capotia ring':
            returnMessage = "https://bddatabase.net/us/item/12053/";
            break;
        case "capotia's earring":
        case "capotias earring":
        case 'capotia earring':
            returnMessage = "https://bdocodex.com/us/item/11847/";
            break;
        case 'forest ronaros ring':
        case 'ronaros ring':
            returnMessage = "https://bdocodex.com/us/item/12042/";
            break;
        case 'tuvala ring':
            returnMessage = "https://bdocodex.com/us/item/694111/";
            break;
        case 'tuvala earring':
            returnMessage = "https://bdocodex.com/us/item/694110/";
            break;
        case 'tuvala necklace':
            returnMessage = "https://bdocodex.com/us/item/694109/";
            break;
        case 'tuvala belt':
            returnMessage = "https://bdocodex.com/us/item/694112/";
            break;
        case 'ring of cadry guardian':
        case 'cadry ring':
            returnMessage = "https://bddatabase.net/us/item/12032/";
            break;
        case 'centaurus belt':
        case 'centaur belt':
            returnMessage = "https://bddatabase.net/us/item/12229/";
            break;
        case 'capotia belt':
            returnMessage = "https://bddatabase.net/us/item/12245/";
            break;
        case 'orkinrad belt':
        case 'orkinrads':
        case 'orkinrad':
            returnMessage = "https://bdocodex.com/us/item/12251/";
            break;
        case 'black distortion earring':
        case 'distortion earring':
        case 'disto earring':
        case 'disto':
            returnMessage = "https://bdocodex.com/us/item/12251/";
            break;
        case 'deboreka necklace':
        case 'deboreka':
            returnMessage = "https://bdocodex.com/us/item/11653/";
            break;
        case 'dim tree spirit armour':
        case 'dim tree spirit armor':
        case 'dim tree armour':
        case 'dim tree armor':
            returnMessage = "https://bdocodex.com/us/item/11017/";
            break;
        case 'bhegs gloves':
            returnMessage = "https://bdocodex.com/us/item/11015/";
            break;
        case 'urugons shoes':
            returnMessage = "https://bdocodex.com/us/item/11103/";
            break;
        case 'griffons helmet':
            returnMessage = "https://bdocodex.com/us/item/11101/";
            break;
        case 'giaths helmet':
            returnMessage = "https://bddatabase.net/us/item/11013/";
            break;
        case 'blackstar armour':
        case 'blackstar armor':
            returnMessage = "https://bdocodex.com/us/item/719902/";
            break;
        case 'lemoria armour':
        case 'lemoria armor':
            returnMessage = "https://bdocodex.com/us/item/11071/";
            break;
        case 'red noses armour':
        case 'red noses armor':
        case 'red nose armour':
        case 'red nose armor':
            returnMessage = "https://bdocodex.com/us/item/11014/";
            break;
        case 'roaring magical armour':
        case 'roaring magical armor':
            returnMessage = "https://bdocodex.com/us/item/11071/";
            break;
        case "leebur's gloves":
        case 'leeburs gloves':
            returnMessage = "https://bdocodex.com/us/item/11102/";
            break;
        case 'tuvala gloves':
            returnMessage = "https://bdocodex.com/us/item/695107//";
            break;
        case 'tuvala armour':
        case 'tuvala armor':
            returnMessage = "https://bdocodex.com/us/item/695106/";
            break;
        case 'lemoria gloves':
            returnMessage = "https://bdocodex.com/us/item/11072/";
            break;
        case "vell's heart":
        case "vells heart":
            returnMessage = "https://bddatabase.net/us/item/45332/";
            break;
        case "vell's concentrated magic":
        case "vells concentrated magic":
            returnMessage = "https://bddatabase.net/us/item/44335/";
            break;
        case "muskan's shoes":
        case "muskans shoes":
        case "muskan shoes":
            returnMessage = "https://bdocodex.com/us/item/694245/";
            break;
        case "tuvala shoes":
            returnMessage = "https://bdocodex.com/us/item/694245/";
            break;
        case "lemoria shoes":
            returnMessage = "https://bdocodex.com/us/item/11073/";
            break;
        case "akum shoes":
            returnMessage = "https://bdocodex.com/us/item/701014/";
            break;
        case "akum armour":
        case "akum armor":
            returnMessage = "https://bdocodex.com/us/item/701012/";
            break;
        case "akum gloves":
            returnMessage = "https://bdocodex.com/us/item/701013/";
            break;
        case "akum helmet":
            returnMessage = "https://bdocodex.com/us/item/701011/";
            break;
        case "lemoria helmet":
            returnMessage = "https://bdocodex.com/us/item/11070/";
            break;
        case "tuvala helmet":
            returnMessage = "https://bdocodex.com/us/item/695105/";
            break;
        case "khan's heart: destruction":
        case "khan's heart destruction":
        case "khans heart: destruction":
        case "khans heart destruction":
        case "khan's heart: protection":
        case "khan's heart protection":
        case "khans heart: protection":
        case "khans heart protection":
        case "khan's heart: life":
        case "khan's heart life":
        case "khans heart: life":
        case "khans heart life":
        case "khan's heart":
        case "khans heart":
            returnMessage = "https://bdonexus.info/wiki/khans-hearts/";
            break;
        case "manos gear":
        case "make manos gear":
            returnMessage = "https://saarith.com/bdo-how-to-make-manos-clothes-tools-and-accessories/";
            break;
        case "sailors":
        case "sailor":
            returnMessage = "https://grumpygreen.cricket/bdo-sailors-guide/";
            break;
        case "agerian helmet green":
        case "agerian helmet":
            returnMessage = "https://bdocodex.com/us/item/10809/";
            break;
        case "ultimate agerian helmet":
        case "agerian helmet yellow":
            returnMessage = "https://bdocodex.com/us/item/10837/";
            break;
        case "agerian armour green":
        case "agerian armor green":
        case "agerian armour":
        case "agerian armor":
            returnMessage = "https://bdocodex.com/us/item/10810/";
            break;
        case "ultimate agerian armour":
        case "ultimate agerian armor":
        case "agerian armour yellow":
        case "agerian armor yellow":
            returnMessage = "https://bdocodex.com/us/item/10838/";
            break;
        case "agerian gloves green":
        case "agerian gloves":
            returnMessage = "https://bdocodex.com/us/item/10809/";
            break;
        case "ultimate agerian gloves":
        case "agerian gloves yellow":
            returnMessage = "https://bdocodex.com/us/item/10839/";
            break;
        case "agerian shoes green":
        case "agerian shoes":
            returnMessage = "https://bdocodex.com/us/item/10812/";
            break;
        case "ultimate agerian shoes":
        case "agerian shoes yellow":
            returnMessage = "https://bdocodex.com/us/item/10840/";
            break;
        case "ultimate akum shoes":
        case "akum shoes yellow":
            returnMessage = "https://bdocodex.com/us/item/701080/";
            break;
        case "ultimate akum helmet":
        case "akum helmet yellow":
            returnMessage = "https://bdocodex.com/us/item/701077/";
            break;
        case "ultimate akum gloves":
        case "akum gloves yellow":
            returnMessage = "https://bdocodex.com/us/item/701079/";
            break;
        case "ultimate akum armour":
        case "ultimate akum armor":
        case "akum armour yellow":
        case "akum armor yellow":
            returnMessage = "https://bdocodex.com/us/item/701078/";
            break;
        case "ultimate grunil helmet":
        case "grunil helmet yellow":
            returnMessage = "https://bdocodex.com/us/item/10961/";
            break;
        case "grunil helmet green":
        case "grunil helmet":
            returnMessage = "https://bdocodex.com/us/item/10933/";
            break;
        case "ultimate grunil gloves":
        case "grunil gloves yellow":
            returnMessage = "https://bdocodex.com/us/item/10935/";
            break;
        case "grunil gloves green":
        case "grunil gloves":
            returnMessage = "https://bdocodex.com/us/item/10963/";
            break;
        case "ultimate grunil shoes":
        case "grunil shoes yellow":
            returnMessage = "https://bdocodex.com/us/item/10964/";
            break;
        case "grunil shoes green":
        case "grunil shoes":
            returnMessage = "https://bdocodex.com/us/item/10936/";
            break;
        case "ultimate grunil armour":
        case "ultimate grunil armor":
        case "grunil armour yellow":
        case "grunil armor yellow":
            returnMessage = "https://bdocodex.com/us/item/10962/";
            break;
        case "grunil armour green":
        case "grunil armor green":
        case "grunil armour":
        case "grunil armor":
            returnMessage = "https://bdocodex.com/us/item/10934/";
            break;
        case "ultimate armour of hercule's might":
        case "ultimate armor of hercule's might":
        case "ultimate armour of hercules might":
        case "ultimate armor of hercules might":
        case "armour of hercule's might yellow":
        case "armour of hercules might yellow":
        case "armor of hercule's might yellow":
        case "armor of hercules might yellow":
            returnMessage = "https://bdocodex.com/us/item/11031/";
            break;
        case "armour of hercule's might green":
        case "armor of hercule's might green":
        case "armour of hercule's might":
        case "armour of hercules might":
        case "armor of hercule's might":
        case "armor of hercules might":
        case "armour of hercule's":
        case "armor of hercule's":
        case "armour of hercules":
        case "armor of hercules":
            returnMessage = "https://bdocodex.com/us/item/11002/";
            break;
        case "ultimate shoes of hercule's might":
        case "ultimate shoes of hercules might":
        case "shoes of hercule's might yellow":
        case "shoes of hercules might yellow":
            returnMessage = "https://bdocodex.com/us/item/11033/";
            break;
        case "shoes of hercule's might green":
        case "shoes of hercules might":
            returnMessage = "https://bdocodex.com/us/item/11004/";
            break;
        case "ultimate gloves of hercule's might":
        case "ultimate gloves of hercules might":
        case "gloves of hercule's might yellow":
        case "gloves of hercules might yellow":
            returnMessage = "https://bdocodex.com/us/item/11032/";
            break;
        case "gloves of hercule's might green":
        case "gloves of hercules might":
            returnMessage = "https://bdocodex.com/us/item/11003/";
            break;
        case "ultimate helmet of hercule's might":
        case "ultimate helmet of hercules might":
        case "helmet of hercule's might yellow":
        case "helmet of hercules might yellow":
            returnMessage = "https://bdocodex.com/us/item/11030/";
            break;
        case "helmet of hercule's might green":
        case "helmet of hercules might":
            returnMessage = "https://bdocodex.com/us/item/11001/";
            break;
        case "ultimate luck helmet of fortuna":
        case "luck helmet of fortuna yellow":
            returnMessage = "https://bdocodex.com/us/item/11062/";
            break;
        case "luck helmet of fortuna green":
        case "luck helmet of fortuna":
            returnMessage = "https://bdocodex.com/us/item/11009/";
            break;
        case "ultimate luck shoes of fortuna":
        case "luck shoes of fortuna yellow":
            returnMessage = "https://bdocodex.com/us/item/11065/";
            break;
        case "luck shoes of fortuna green":
        case "luck shoes of fortuna":
            returnMessage = "https://bdocodex.com/us/item/11012/";
            break;
        case "ultimate gloves shoes of fortuna":
        case "luck gloves of fortuna yellow":
            returnMessage = "https://bdocodex.com/us/item/11064/";
            break;
        case "luck gloves of fortuna green":
        case "luck gloves of fortuna":
            returnMessage = "https://bdocodex.com/us/item/11011/";
            break;
        case "ultimate armour shoes of fortuna":
        case "ultimate armor shoes of fortuna":
        case "luck armour of fortuna yellow":
        case "luck armor of fortuna yellow":
            returnMessage = "https://bdocodex.com/us/item/11063/";
            break;
        case "luck armour of fortuna green":
        case "luck armor of fortuna green":
        case "luck armour of fortuna":
        case "luck armor of fortuna":
            returnMessage = "https://bdocodex.com/us/item/11010/";
            break;
        case "ultimate strength armour of heve":
        case "ultimate strength armor of heve":
        case "strength armour of heve yellow":
        case "strength armor of heve yellow":
            returnMessage = "https://bdocodex.com/us/item/11047/";
            break;
        case "strength armour of heve green":
        case "strength armor of heve green":
        case "strength armour of heve":
        case "strength armor of heve":
            returnMessage = "https://bdocodex.com/us/item/11006/";
            break;
        case "ultimate strength gloves of heve":
        case "strength gloves of heve yellow":
            returnMessage = "https://bdocodex.com/us/item/11048/";
            break;
        case "strength gloves of heve green":
        case "strength gloves of heve":
            returnMessage = "https://bdocodex.com/us/item/11007/";
            break;
        case "ultimate strength shoes of heve":
        case "strength shoes of heve yellow":
            returnMessage = "https://bdocodex.com/us/item/11049/";
            break;
        case "strength shoes of heve green":
        case "strength shoes of heve":
            returnMessage = "https://bdocodex.com/us/item/11008/";
            break;
        case 'ultimate strength helmet of heve':
        case 'strength helmet of heve yellow':
            returnMessage = "https://bdocodex.com/us/item/11046/";
            break;
        case "strength helmet of heve green":
        case "strength helmet of heve":
            returnMessage = "https://bdocodex.com/us/item/11005/";
            break;
        case 'ultimate rocaba helmet':
        case 'rocaba helmet yellow':
            returnMessage = "https://bdocodex.com/us/item/10985/";
            break;
        case "rocaba helmet green":
        case "rocaba helmet":
            returnMessage = "https://bdocodex.com/us/item/10937/";
            break;
        case 'ultimate rocaba gloves':
        case 'rocaba gloves yellow':
            returnMessage = "https://bdocodex.com/us/item/10987/";
            break;
        case "rocaba gloves green":
        case "rocaba gloves":
            returnMessage = "https://bdocodex.com/us/item/10939/";
            break;
        case "ultimate rocaba shoes":
        case "rocaba shoes yellow":
            returnMessage = "https://bdocodex.com/us/item/10988/";
            break;
        case "rocaba shoes green":
        case "rocaba shoes":
            returnMessage = "https://bdocodex.com/us/item/10940/";
            break;
        case "ultimate rocaba armour":
        case "ultimate rocaba armor":
        case "rocaba armour yellow":
        case "rocaba armor yellow":
            returnMessage = "https://bdocodex.com/us/item/10986/";
            break;
        case "rocaba armour green":
        case "rocaba armor green":
        case "rocaba armour":
        case "rocaba armor":
            returnMessage = "https://bdocodex.com/us/item/10938/";
            break;
        case "ultimate talis armour":
        case "ultimate talis armor":
        case "talis armour yellow":
        case "talis armor yellow":
            returnMessage = "https://bdocodex.com/us/item/10886/";
            break;
        case "talis armour green":
        case "talis armor green":
        case "talis armour":
        case "talis armor":
            returnMessage = "https://bdocodex.com/us/item/10822/";
            break;
        case "ultimate talis shoes":
        case "talis shoes yellow":
            returnMessage = "https://bdocodex.com/us/item/10888/";
            break;
        case "talis shoes green":
        case "talis shoes":
            returnMessage = "https://bdocodex.com/us/item/10824/";
            break;
        case "ultimate talis gloves":
        case "talis gloves yellow":
            returnMessage = "https://bdocodex.com/us/item/10887/";
            break;
        case "talis gloves green":
        case "talis gloves":
            returnMessage = "https://bdocodex.com/us/item/10823/";
            break;
        case "ultimate talis helmet":
        case "talis helmet yellow":
            returnMessage = "https://bdocodex.com/us/item/10885/";
            break;
        case "talis helmet green":
        case "talis helmet":
            returnMessage = "https://bdocodex.com/us/item/10821/";
            break;
        case "ultimate steel taritas helmet":
        case "steel taritas helmet yellow":
            returnMessage = "https://bdocodex.com/us/item/14121/";
            break;
        case "steel taritas helmet green":
        case "steel taritas helmet":
            returnMessage = "https://bdocodex.com/us/item/14101/";
            break;
        case "ultimate steel taritas gloves":
        case "steel taritas gloves yellow":
            returnMessage = "https://bdocodex.com/us/item/14123/";
            break;
        case "steel taritas gloves green":
        case "steel taritas gloves":
            returnMessage = "https://bdocodex.com/us/item/14103/";
            break;
        case "ultimate steel taritas shoes":
        case "steel taritas shoes yellow":
            returnMessage = "https://bdocodex.com/us/item/14124/";
            break;
        case "steel taritas shoes green":
        case "steel taritas shoes":
            returnMessage = "https://bdocodex.com/us/item/14104/";
            break;
        case "ultimate steel taritas armour":
        case "ultimate steel taritas armor":
        case "steel taritas armour yellow":
        case "steel taritas armor yellow":
            returnMessage = "https://bdocodex.com/us/item/14122/";
            break;
        case "steel taritas armour green":
        case "steel taritas armor green":
        case "steel taritas armour":
        case "steel taritas armor":
            returnMessage = "https://bdocodex.com/us/item/14102/";
            break;
        case "ultimate taritas helmet":
        case "taritas helmet yellow":
            returnMessage = "https://bdocodex.com/us/item/10853/";
            break;
        case "taritas helmet green":
        case "taritas helmet":
            returnMessage = "https://bdocodex.com/us/item/10813/";
            break;
        case "ultimate taritas gloves":
        case "taritas gloves yellow":
            returnMessage = "https://bdocodex.com/us/item/10855/";
            break;
        case "taritas gloves green":
        case "taritas gloves":
            returnMessage = "https://bdocodex.com/us/item/10815/";
            break;
        case "ultimate taritas shoes":
        case "taritas shoes yellow":
            returnMessage = "https://bdocodex.com/us/item/10856/";
            break;
        case "taritas shoes green":
        case "taritas shoes":
            returnMessage = "https://bdocodex.com/us/item/10816/";
            break;
        case "ultimate taritas armour":
        case "ultimate taritas armor":
        case "taritas armour yellow":
        case "taritas armor yellow":
            returnMessage = "https://bdocodex.com/us/item/10854/";
            break;
        case "taritas armour green":
        case "taritas armor green":
        case "taritas armour":
        case "taritas armor":
            returnMessage = "https://bdocodex.com/us/item/10814/";
            break;
        case "ultimate zereth helmet":
        case "zereth helmet yellow":
            returnMessage = "https://bdocodex.com/us/item/10869/";
            break;
        case "zereth helmet green":
        case "zereth helmet":
            returnMessage = "https://bdocodex.com/us/item/10817/";
            break;
        case "ultimate zereth gloves":
        case "zereth gloves yellow":
            returnMessage = "https://bdocodex.com/us/item/10871/";
            break;
        case "zereth gloves green":
        case "zereth gloves":
            returnMessage = "https://bdocodex.com/us/item/10819/";
            break;
        case "ultimate zereth shoes":
        case "zereth shoes yellow":
            returnMessage = "https://bdocodex.com/us/item/10872/";
            break;
        case "zereth shoes green":
        case "zereth shoes":
            returnMessage = "https://bdocodex.com/us/item/10820/";
            break;
        case "ultimate zereth armour":
        case "ultimate zereth armor":
        case "zereth armour yellow":
        case "zereth armor yellow":
            returnMessage = "https://bdocodex.com/us/item/10870/";
            break;
        case "zereth armour green":
        case "zereth armor green":
        case "zereth armour":
        case "zereth armor":
            returnMessage = "https://bdocodex.com/us/item/10818/";
            break;
        case "suppressed weapons":
        case "suppressed weapon":
        case "suppressed sub-weapon":
        case "suppressed armours":
        case "suppressed armors":
        case "suppressed armour":
        case "suppressed armor":
        case "suppressed kzarka":
        case "suppressed dandelion":
        case "suppressed dande":
        case "suppressed kutum":
        case "suppressed giath":
        case "suppressed bhegs":
        case "suppressed muskans":
        case "suppressed dim tree":
            returnMessage = "https://www.blackdesertonline.com/news/view/3716";
            break;
        case "book of margahan":
        case "argris fever":
        case "margahan": 
        case "agris":
            returnMessage = "https://grumpygreen.cricket/margahan-agris/";
            break;
        case "knowledge":
            returnMessage = "https://grumpygreen.cricket/bdo-knowledge-guide/";
            break;
        case "devour":
            returnMessage = "https://grumpygreen.cricket/devour/";
            break;
        case "tuvala gear":
        case "tuvala":
            returnMessage = "https://grumpygreen.cricket/tuvala-gear/";
            break;
        case "pit of undying":
            returnMessage = "https://grumpygreen.cricket/pit-undying/";
            break;
        case "boss gear":
            returnMessage = "https://grumpygreen.cricket/boss-gear/";
            break;
        case "gear progression":
            returnMessage = "https://grumpygreen.cricket/bdo-gear-progression-guide/";
            break;
        case "dark rifts":
        case "dark rift":
        case "rifts":
        case "rift":
            returnMessage = "https://grumpygreen.cricket/bdo-dark-rift/";
            break;
        case "yona fragments":
            returnMessage = "https://grumpygreen.cricket/yona-capotia/";
            break;
        case "chenga tome":
        case "adventurer's tome":
        case "adventurers tome":
        case "adventurer tome":
            returnMessage = "https://grumpygreen.cricket/chenga-tome/";
            break;
        case "leveling combat":
        case "leveling":
            returnMessage = "https://grumpygreen.cricket/bdo-leveling-guide/";
            break;
        case "naru gear":
        case "naru":
            returnMessage = "https://grumpygreen.cricket/naru-gear/";
            break;
        case "pavino greko's collection":
        case "pavino grekos collection":
        case "pavino greko":
            returnMessage = "https://grumpygreen.cricket/pavino-greko/";
            break;
        case "rich merchant's ring":
        case "rich merchants ring":
        case "merchant's ring":
        case "merchants ring":
            returnMessage = "https://grumpygreen.cricket/rich-merchant-ring/";
            break;
        case "hunter's seals":
        case "hunter's seal":
        case "hunters seals": 
        case "hunters seal": 
            returnMessage = "https://grumpygreen.cricket/hunter-seals/";
            break;
        case "nesser gear": 
            returnMessage = "https://grumpygreen.cricket/nesser-gear/";
            break;
        case "donkey gear": 
            returnMessage = "https://grumpygreen.cricket/donkey-gear/";
            break;
        case "papua vs otter": 
        case "papua crinea": 
        case "papua": 
        case "otter":
            returnMessage = "https://grumpygreen.cricket/papua-crinea/";
            break;
        case "dream horses":
        case "dream horse":
        case "dream horse failstacks":
        case "dream horse failstack":
        case "dream horse failstack":
        case "T9":
            returnMessage = "https://grumpygreen.cricket/dream-horse-failstack/";
            break;
        case "season server":
        case "seasons":
            returnMessage = "https://grumpygreen.cricket/season-servers/";
            break;
        case "sid protty evolution":
        case "sid protty":
            returnMessage = "https://grumpygreen.cricket/sid-protty/";
            break;
        case "bartering exploration quests":
        case "barter exploration quests":
        case "bartering exploration quest":
        case "barter exploration quest":
        case "bartering exploration":
        case "barter exploration":
            returnMessage = "https://grumpygreen.cricket/sid-protty/";
            break;
        case "witch's delicacy":
        case "witchs delicacy":
            returnMessage = "https://grumpygreen.cricket/bdo-witch-delicacy/";
            break;
        case "[event] shinning shakatu seals":
        case "[event] shinning shakatu seal":
        case "event shinning shakatu seals":
        case "event shinning shakatu seal":
        case "shinning shakatu seals":
        case "shinning shakatu seal":
        case "shakatu seals":
        case "shakatu seal":
            returnMessage = "https://grumpygreen.cricket/shining-shakatu-seals/";
            break;
        case "deleted item":
        case "item recovery":
            returnMessage = "https://grumpygreen.cricket/bdo-item-recovery/";
            break;
        case "cliff's weapons":
        case "cliffs weapons":
            returnMessage = "https://grumpygreen.cricket/bdo-item-recovery/";
            break;
        case "campside tent":
        case "tent":
            returnMessage = "https://grumpygreen.cricket/bdo-item-recovery/";
            break;
        case "barter level 1 items":
        case "barter level 1":
            returnMessage = "https://grumpygreen.cricket/bdo-land-item-barter/";
            break;
        case "barter paintings":
            returnMessage = "https://grumpygreen.cricket/bdo-painting-barter/";
            break;
        case "swimming":
        case "underwater gathering":
        case "underwater":
            returnMessage = "https://grumpygreen.cricket/bdo-swimming-underwater-gathering-maps-items-gear/";
            break;
        case "freed magical black stone":
        case "freed magical blackstone":
        case "freed black stone":
        case "freed blackstone":
            returnMessage = "https://grumpygreen.cricket/bdo-freed-magical-black-stone-accessories/";
            break;
        case "ship rations":
        case "ship ration":
        case "ship repair":
        case "ship durability":
            returnMessage = "https://grumpygreen.cricket/bdo-sailing-guide-ship-durability-rations-repair-ui/";
            break;
        case "bartali sailboat":
        case "bartali":
            returnMessage = "https://grumpygreen.cricket/bdo-bartali-sailboat-great-ocean-ship/";
            break;
        case "sailing dailies":
        case "boat upgrade materials":
        case "ship upgrade materials":
        case "boat upgrade material":
        case "ship upgrade material":
            returnMessage = "https://grumpygreen.cricket/bdo-daily-repeatable-sailing-quests-for-sailing-exp/";
            break;
        case "epheria cog":
        case "cog":
            returnMessage = "https://grumpygreen.cricket/bdo-cog-ship/";
            break;
        case "crow's coin shop":
        case "crows coin shop":
        case "crow coin shop":
        case "crow's coin":
        case "crows coin":
        case "crow coin":
        case "barter rewards":
        case "ravinia":
            returnMessage = "https://grumpygreen.cricket/bdo-sea-coin-shop/";
            break;
        case "free pets":
            returnMessage = "https://grumpygreen.cricket/bdo-free-pets/";
            break;
        case "black gems": 
        case "black gem": 
            returnMessage = "https://grumpygreen.cricket/bdo-black-gem-guide/";
            break;
        case "krogdalo's horse gear": 
        case "krogdalos horse gear": 
        case "krogdalo's": 
        case "krogdalos": 
        case "krogdalo": 
            returnMessage = "https://grumpygreen.cricket/krogdalo-horse-gear/";
            break;
        case "node calculator": 
        case "node investment": 
            returnMessage = "https://grumpygreen.cricket/bdo-node-calculator/";
            break;
        case "worker empire": 
            returnMessage = "https://grumpygreen.cricket/bdo-worker-guide/";
            break;
        case "workers": 
        case "nodes":
            returnMessage = "https://grumpygreen.cricket/bdo-worker-guide/";
            break;
        case "protty cave":
        case "sycraia":
            returnMessage = "https://grumpygreen.cricket/bdo-underwater/";
            break;
        case "horse training":
            returnMessage = "https://grumpygreen.cricket/bdo-training-guide-eminent/";
            break;
        case "shadow arena":
            returnMessage = "https://grumpygreen.cricket/bdo-shadow-arena-battle-royal/";
            break;
        case "rulupee's travel log":
        case "rulupees travel log":
        case "rulupee":
            returnMessage = "https://grumpygreen.cricket/bdo-rulupee-travel-log/";
            break;
        case "sky balloon":
        case "balloon":
        case "ferry":
            returnMessage = "https://grumpygreen.cricket/npc-travel/";
            break;
        case "memory fragments":
        case "memory fragment":
        case "memory frags":
        case "memory frag":
        case "meme frags":
            returnMessage = "https://grumpygreen.cricket/bdo-memory-fragment-guide/";
            break;
        case "test server":
        case "global labs":
        case "global lab":
            returnMessage = "https://grumpygreen.cricket/bdo-global-lab-test-server/";
            break;
        case "general accessories":
        case "general acc":
            returnMessage = "https://grumpygreen.cricket/bdo-general-accessories/";
            break;
        case "elephant mount":
        case "baby elephant":
        case "elephant":
            returnMessage = "https://grumpygreen.cricket/bdo-elephant/";
            break;
        case "cooking beer":
        case "beer":
            returnMessage = "https://grumpygreen.cricket/bdo-beer-guide/";
            break;
        case "afk fishing":
            returnMessage = "https://grumpygreen.cricket/bdo-balenos-fishing-rod/";
            break;
        case "asula set":
        case "asula":
            returnMessage = "https://grumpygreen.cricket/bdo-asula-set-guide/";
            break;
        case "altar of blood":
            returnMessage = "https://www.youtube.com/watch?v=yTA4uatYJW0";
            break;
        case "asula's crimson eye belt":
        case "asulas crimson eye belt":
        case "asula's belt":
        case "asulas belt":
        case "asula belt":
            returnMessage = "https://bdocodex.com/us/item/12238/";
            break;
        case "asula's crimson eye earring":
        case "asulas crimson eye earring":
        case "asula's earring":
        case "asulas earring":
        case "asula earring":
            returnMessage = "https://bdocodex.com/us/item/11838/";
            break;
        case "asula's crimson eye necklace":
        case "asulas crimson eye necklace":
        case "asula's necklace":
        case "asulas necklace":
        case "asula necklace":
            returnMessage = "https://bdocodex.com/us/item/11640/";
            break;
        case "asula's crimson eye ring":
        case "asulas crimson eye ring":
        case "asula's ring":
        case "asulas ring":
        case "asula ring":
            returnMessage = "https://bdocodex.com/us/item/12044/";
            break;
        case "barhan's ring of conquest":
        case "barhans ring of conquest":
        case "barhan ring of conquest":
        case "ring of conquest":
            returnMessage = "https://bdocodex.com/us/item/12028/";
            break;
        case "sahazad's ring of monarch":
        case "sahazads ring of monarch":
        case "sahazad ring of monarch":
        case "ring of monarch":
            returnMessage = "https://bdocodex.com/us/item/12027/";
            break;
        case "manmehan's ring of gold":
        case "manmehans ring of gold":
        case "manmehan ring of gold":
        case "ring of gold":
            returnMessage = "https://bdocodex.com/us/item/12029/";
            break;
        case "saya's ring of eternity":
        case "sayas ring of eternity":
        case "saya ring of eternity":
        case "ring of eternity":
            returnMessage = "https://bdocodex.com/us/item/12030/";
            break;
        case "root treant's stem ring":
        case "root treants stem ring":
        case "root treant's ring":
        case "root treants ring":
            returnMessage = "https://bdocodex.com/us/item/12049/";
            break;
        case "root treant's stem earring":
        case "root treants stem earring":
        case "root treant's earring":
        case "root treants earring":
            returnMessage = "https://bdocodex.com/us/item/11843/";
            break;
        case "root treant's stem belt":
        case "root treants stem belt":
        case "root treant's belt":
        case "root treants belt":
            returnMessage = "https://bdocodex.com/us/item/12242/";
            break;
        case "root treant's stem necklace":
        case "root treants stem necklace":
        case "root treant's necklace":
        case "root treants necklace":
            returnMessage = "https://bdocodex.com/us/item/11645/";
            break;
        case "treant spirit's cheer necklace":
        case "treant spirits cheer necklace":
        case "treant spirit's necklace":
        case "treant spirits necklace":
            returnMessage = "https://bdocodex.com/us/item/11646/";
            break;
        case "treant spirit's echo ring":
        case "treant spirits echo ring":
        case "treant spirit's ring":
        case "treant spirits ring":
            returnMessage = "https://bdocodex.com/us/item/12050/";
            break;
        case "treant spirit's hope belt":
        case "treant spirits hope belt":
        case "treant spirit's belt":
        case "treant spirits belt":
            returnMessage = "https://bdocodex.com/us/item/12243/";
            break;
        case "treant spirit's whisper earring":
        case "treant spirits whisper earring":
        case "treant spirit's earring":
        case "treant spirits earring":
            returnMessage = "https://bdocodex.com/us/item/11844/";
            break;
        case "bares ring":
            returnMessage = "https://bdocodex.com/us/item/12002/";
            break;
        case "blood ruby ring":
            returnMessage = "https://bdocodex.com/us/item/12103/";
            break;
        case "dark blood ruby ring":
            returnMessage = "https://bdocodex.com/us/item/12104/";
            break;
        case "blue coral ring":
            returnMessage = "https://bdocodex.com/us/item/12017/";
            break;
        case "corrupt ruby ring":
            returnMessage = "https://bdocodex.com/us/item/12105/";
            break;
        case "cultist's black ring":
        case "cultists black ring":
            returnMessage = "https://bdocodex.com/us/item/12046/";
            break;
        case "gold topaz ring":
            returnMessage = "https://bdocodex.com/us/item/12113/";
            break;
        case "shining gold topaz ring":
            returnMessage = "https://bdocodex.com/us/item/12114/";
            break;
        case "hesus ring":
            returnMessage = "https://bdocodex.com/us/item/12003/";
            break;
        case "kalis ring":
            returnMessage = "https://bdocodex.com/us/item/12005/";
            break;
        case "manos ruby ring":
            returnMessage = "https://bdocodex.com/us/item/12126/";
            break;
        case "manos topaz ring":
            returnMessage = "https://bdocodex.com/us/item/12128/";
            break;
        case "mark of shadow":
            returnMessage = "https://bdocodex.com/us/item/12007/";
            break;
        case "nert ring":
            returnMessage = "https://bdocodex.com/us/item/12011/";
            break;
        case "outlaw's ring":
        case "outlaws ring":
            returnMessage = "https://bdocodex.com/us/item/12012/";
            break;
        case "rainbow coral ring":
            returnMessage = "https://bdocodex.com/us/item/12045/";
            break;
        case "red coral ring":
            returnMessage = "https://bdocodex.com/us/item/12018/";
            break;
        case "red sand crystal ring":
            returnMessage = "https://bdocodex.com/us/item/12067/";
            break;
        case "ring of concentrated magical power":
            returnMessage = "https://bdocodex.com/us/item/12014/";
            break;
        case "ring of dim magical power":
            returnMessage = "https://bdocodex.com/us/item/12013/";
            break;
        case "ring of power":
            returnMessage = "https://bdocodex.com/us/item/12062/";
            break;
        case "ring of sealed magical power":
            returnMessage = "https://bdocodex.com/us/item/12015/";
            break;
        case "shrine guardian token":
        case "shrine guardian":
        case "shrine token":
            returnMessage = "https://bdocodex.com/us/item/12008/";
            break;
        case "talis ring":
            returnMessage = "https://bdocodex.com/us/item/12006/";
            break;
        case "topaz ring of regeneration":
            returnMessage = "https://bdocodex.com/us/item/12115/";
            break;
        case "yuria ring":
            returnMessage = "https://bdocodex.com/us/item/12001/";
            break;
        case "grana harmony ring":
        case "grána harmony ring":
            returnMessage = "https://bdocodex.com/us/item/12001/";
            break;
        case "jarette's ring":
        case "jarettes ring":
            returnMessage = "https://bdocodex.com/us/item/12035/";
            break;
        case "jarette's earring":
        case "jarettes earring":
            returnMessage = "https://bdocodex.com/us/item/11829/";
            break;
        case "jarette's necklace":
        case "jarettes necklace":
            returnMessage = "https://bdocodex.com/us/item/11626/";
            break;
        case "jarette's belt":
        case "jarettes belt":
            returnMessage = "https://bdocodex.com/us/item/12231/";
            break;
        case "ancient guardian's seal":
        case "ancient guardians seal":
            returnMessage = "https://bdocodex.com/us/item/11613/";
            break;
        case "grana guardian necklace":
        case "grána guardian necklace":
            returnMessage = "https://bdocodex.com/us/item/11639/";
            break;
        case "necklace of sealed magical power":
            returnMessage = "https://bdocodex.com/us/item/11624/";
            break;
        case "necklace of sealed spell":
            returnMessage = "https://bdocodex.com/us/item/11638/";
            break;
        case "bares necklace":
            returnMessage = "https://bdocodex.com/us/item/11602/";
            break;
        case "bensho's necklace":
        case "benshos necklace":
            returnMessage = "https://bdocodex.com/us/item/11611/";
            break;
        case "capotia necklace":
            returnMessage = "https://bdocodex.com/us/item/11648/";
            break;
        case "corrupt ruby necklace":
            returnMessage = "https://bdocodex.com/us/item/11705/";
            break;
        case "dark ruby necklace":
            returnMessage = "https://bdocodex.com/us/item/11704/";
            break;
        case "eagle's talon":
        case "eagles talon":
            returnMessage = "https://bdocodex.com/us/item/11641/";
            break;
        case "elisha necklace":
            returnMessage = "https://bdocodex.com/us/item/11604/";
            break;
        case "emerald necklace of tranquility":
            returnMessage = "https://bdocodex.com/us/item/11720/";
            break;
        case "hesus necklace":
            returnMessage = "https://bdocodex.com/us/item/11603/";
            break;
        case "kaia necklace":
            returnMessage = "https://bdocodex.com/us/item/11642/";
            break;
        case "kalis necklace":
            returnMessage = "https://bdocodex.com/us/item/11605/";
            break;
        case "manos diamond necklace":
            returnMessage = "https://bdocodex.com/us/item/11730/";
            break;
        case "manos emerald necklace":
            returnMessage = "https://bdocodex.com/us/item/11729/";
            break;
        case "manos ruby necklace":
            returnMessage = "https://bdocodex.com/us/item/11726/";
            break;
        case "manos sapphire necklace":
            returnMessage = "https://bdocodex.com/us/item/11727/";
            break;
        case "manos topaz necklace":
            returnMessage = "https://bdocodex.com/us/item/11728/";
            break;
        case "necklace of concentrated magical power":
            returnMessage = "https://bdocodex.com/us/item/11623/";
            break;
        case "necklace of concentrated spell":
            returnMessage = "https://bdocodex.com/us/item/11637/";
            break;
        case "necklace of dim magical power":
            returnMessage = "https://bdocodex.com/us/item/11622/";
            break;
        case "necklace of dim spell":
            returnMessage = "https://bdocodex.com/us/item/11636/";
            break;
        case "necklace of good deeds":
            returnMessage = "https://bdocodex.com/us/item/11609/";
            break;
        case "necklace of shultz the gladiator":
            returnMessage = "https://bdocodex.com/us/item/11631/";
            break;
        case "placid forest emerald necklace":
            returnMessage = "https://bdocodex.com/us/item/11719/";
            break;
        case "sapphire necklace of storms":
            returnMessage = "https://bdocodex.com/us/item/11710/";
            break;
        case "scarla necklace":
            returnMessage = "https://bdocodex.com/us/item/11610/";
            break;
        case "serap's necklace":
        case "seraps necklace":
            returnMessage = "https://bdocodex.com/us/item/11628/";
            break;
        case "shining gold topaz necklace":
            returnMessage = "https://bdocodex.com/us/item/11714/";
            break;
        case "sicil's necklace":
        case "sicils necklace":
            returnMessage = "https://bdocodex.com/us/item/11625/";
            break;
        case "talis necklace":
            returnMessage = "https://bdocodex.com/us/item/11606/";
            break;
        case "topaz necklace of regeneration":
            returnMessage = "https://bdocodex.com/us/item/11715/";
            break;
        case "translucent ocean sapphire necklace":
            returnMessage = "https://bdocodex.com/us/item/11709/";
            break;
        case "yuria necklace":
            returnMessage = "https://bdocodex.com/us/item/11601/";
            break;
        case "ancient weapon core":
            returnMessage = "https://bdocodex.com/us/item/12220/";
            break;
        case "helm destroyer's belt":
        case "helm destroyers belt":
            returnMessage = "https://bdocodex.com/us/item/12220/";
            break;
        case "bares belt":
            returnMessage = "https://bdocodex.com/us/item/12202/";
            break;
        case "bares belt":
            returnMessage = "https://bdocodex.com/us/item/12202/";
            break;
        case "belt of shultz the gladiator":
        case "shultz the gladiator":
        case "shultz belt":
            returnMessage = "https://bdocodex.com/us/item/12211/";
            break;
        case "blue coral belt":
            returnMessage = "https://bdocodex.com/us/item/12308/";
            break;
        case "breezy white coral belt":
            returnMessage = "https://bdocodex.com/us/item/12325/";
            break;
        case "brilliant blue coral belt":
            returnMessage = "https://bdocodex.com/us/item/12309/";
            break;
        case "brilliant golden coral belt":
            returnMessage = "https://bdocodex.com/us/item/12319/";
            break;
        case "brilliant green coral belt":
            returnMessage = "https://bdocodex.com/us/item/12314/";
            break;
        case "brilliant red coral belt":
            returnMessage = "https://bdocodex.com/us/item/12304/";
            break;
        case "brilliant white coral belt":
            returnMessage = "https://bdocodex.com/us/item/12324/";
            break;
        case "daybreak blue coral belt":
            returnMessage = "https://bdocodex.com/us/item/12310/";
            break;
        case "elisha belt":
            returnMessage = "https://bdocodex.com/us/item/12204/";
            break;
        case "gartner belt":
            returnMessage = "https://bdocodex.com/us/item/12212/";
            break;
        case "golden coral belt":
            returnMessage = "https://bdocodex.com/us/item/12318/";
            break;
        case "golden sun coral belt":
            returnMessage = "https://bdocodex.com/us/item/12320/";
            break;
        case "green coral belt":
            returnMessage = "https://bdocodex.com/us/item/12313/";
            break;
        case "hesus belt":
            returnMessage = "https://bdocodex.com/us/item/12203/";
            break;
        case "kalis belt":
            returnMessage = "https://bdocodex.com/us/item/12205/";
            break;
        case "manos blue coral belt":
            returnMessage = "https://bdocodex.com/us/item/12327/";
            break;
        case "manos golden coral belt":
            returnMessage = "https://bdocodex.com/us/item/12329/";
            break;
        case "manos green coral belt":
            returnMessage = "https://bdocodex.com/us/item/12328/";
            break;
        case "manos red coral belt":
            returnMessage = "https://bdocodex.com/us/item/12326/";
            break;
        case "manos white coral belt":
            returnMessage = "https://bdocodex.com/us/item/12330/";
            break;
        case "prairie green coral belt":
            returnMessage = "https://bdocodex.com/us/item/12315/";
            break;
        case "recreated scientist's will":
        case "recreated scientists will":
        case "recreated scientist will":
            returnMessage = "https://bdocodex.com/us/item/12219/";
            break;
        case "red coral belt":
            returnMessage = "https://bdocodex.com/us/item/12303/";
            break;
        case "rhutum belt":
            returnMessage = "https://bdocodex.com/us/item/12207/";
            break;
        case "rhutum elite belt":
            returnMessage = "https://bdocodex.com/us/item/12208/";
            break;
        case "sturdy rhutum elite fighter belt":
            returnMessage = "https://bdocodex.com/us/item/12216/";
            break;
        case "rhutum elite fighter belt":
            returnMessage = "https://bdocodex.com/us/item/12215/";
            break;
        case "rhutum fighter belt":
            returnMessage = "https://bdocodex.com/us/item/12213/";
            break;
        case "rock heart belt":
            returnMessage = "https://bdocodex.com/us/item/12256/";
            break;
        case "scientist's will":
        case "scientists will":
        case "scientist will":
            returnMessage = "https://bdocodex.com/us/item/12218/";
            break;
        case "tree spirit belt":
            returnMessage = "https://bdocodex.com/us/item/12210/";
            break;
        case "twilight red coral belt":
            returnMessage = "https://bdocodex.com/us/item/12305/";
            break;
        case "white coral belt":
            returnMessage = "https://bdocodex.com/us/item/12323/";
            break;
        case "yuria belt":
            returnMessage = "https://bdocodex.com/us/item/12201/";
            break;
        case "grana oath earring":
        case "grána oath earring":
            returnMessage = "https://bdocodex.com/us/item/11837/";
            break;
        case "bares earring":
            returnMessage = "https://bdocodex.com/us/item/11802/";
            break;
        case "blood ruby earrings":
        case "blood ruby earring":
            returnMessage = "https://bdocodex.com/us/item/11903/";
            break;
        case "dark blood ruby earrings":
        case "dark blood ruby earring":
            returnMessage = "https://bdocodex.com/us/item/11904/";
            break;
        case "blue coral earring":
            returnMessage = "https://bdocodex.com/us/item/11816/";
            break;
        case "blue whale molar earring":
            returnMessage = "https://bdocodex.com/us/item/11815/";
            break;
        case "chimera's pupil gem":
        case "chimeras pupil gem":
        case "chimera pupil gem":
            returnMessage = "https://bdocodex.com/us/item/11840/";
            break;
        case "corrupt ruby earring":
            returnMessage = "https://bdocodex.com/us/item/11905/";
            break;
        case "dawn earring":
            returnMessage = "https://bdocodex.com/us/item/11855/";
            break;
        case "earring of concentrated magical power":
            returnMessage = "https://bdocodex.com/us/item/11813/";
            break;
        case "earring of dim magical power":
            returnMessage = "https://bdocodex.com/us/item/11812/";
            break;
        case "earring of sealed magical power":
            returnMessage = "https://bdocodex.com/us/item/11814/";
            break;
        case "elisha earring":
            returnMessage = "https://bdocodex.com/us/item/11804/";
            break;
        case "ethereal earrings":
        case "ethereal earring":
            returnMessage = "https://bdocodex.com/us/item/11856/";
            break;
        case "exquisite naga ear accessory":
        case "naga ear accessory":
            returnMessage = "https://bdocodex.com/us/item/11839/";
            break;
        case "forest's eye earring":
        case "forests eye earring":
            returnMessage = "https://bdocodex.com/us/item/11854/";
            break;
        case "fugitive khalk's earring":
        case "fugitive khalks earring":
            returnMessage = "https://bdocodex.com/us/item/11827/";
            break;
        case "gold topaz earring":
            returnMessage = "https://bdocodex.com/us/item/11913/";
            break;
        case "hesus earring":
            returnMessage = "https://bdocodex.com/us/item/11803/";
            break;
        case "kalis earring":
            returnMessage = "https://bdocodex.com/us/item/11805/";
            break;
        case "manos ruby earring":
            returnMessage = "https://bdocodex.com/us/item/11926/";
            break;
        case "manos ruby earring":
            returnMessage = "https://bdocodex.com/us/item/11926/";
            break;
        case "manos diamond earring":
            returnMessage = "https://bdocodex.com/us/item/11930/";
            break;
        case "manos emerald earring":
            returnMessage = "https://bdocodex.com/us/item/11929/";
            break;
        case "manos sapphire earring":
            returnMessage = "https://bdocodex.com/us/item/11927/";
            break;
        case "manos topaz earring":
            returnMessage = "https://bdocodex.com/us/item/11928/";
            break;
        case "mesto earring":
            returnMessage = "https://bdocodex.com/us/item/11810/";
            break;
        case "ocean sapphire earring":
            returnMessage = "https://bdocodex.com/us/item/11908/";
            break;
        case "translucent ocean sapphire earring":
            returnMessage = "https://bdocodex.com/us/item/11909/";
            break;
        case "red coral earring":
            returnMessage = "https://bdocodex.com/us/item/11817/";
            break;
        case "ridell earring":
            returnMessage = "https://bdocodex.com/us/item/11811/";
            break;
        case "sapphire earring of storms":
            returnMessage = "https://bdocodex.com/us/item/11910/";
            break;
        case "shining gold topaz earrings":
        case "shining gold topaz earring":
            returnMessage = "https://bdocodex.com/us/item/11914/";
            break;
        case "talis earring":
            returnMessage = "https://bdocodex.com/us/item/11806/";
            break;
        case "token of friendship":
            returnMessage = "https://bdocodex.com/us/item/11807/";
            break;
        case "topaz earrings of regeneration":
        case "topaz earring of regeneration":
            returnMessage = "https://bdocodex.com/us/item/11915/";
            break;
        case "witch's earring":
        case "witchs earring":
            returnMessage = "https://bdocodex.com/us/item/11808/";
            break;
        case "yuria earring":
            returnMessage = "https://bdocodex.com/us/item/11801/";
            break;
        default:  
            returnMessage = "No guide available.";
                break;
    }

    return returnMessage;
}