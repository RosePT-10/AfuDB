var mods = [];
var mods_length = mods.length;

function displayListing() {
    // iterate over the entire array and display listings one at a time
    mods.forEach(function (item, index) {
        //console.log(item, index);
        let br = document.createElement('br');
        let element = document.getElementById('modListings');

        element.innerHTML += `${item.mod_name}`
        element.appendChild(br);
        element.innerHTML += `${item.developer_name}`
        element.appendChild(br);
        element.innerHTML += `${item.supported_game_versions}`
        element.appendChild(br);
        element.innerHTML += `${item.download_link}`
        element.appendChild(br);
        element.innerHTML += `${item.description}`
        element.appendChild(br);
        element.innerHTML += `${item.order}`
        element.appendChild(br);
        element.appendChild(br);    
    });
    
}

function testing(){
    alert (mods.at(2).mod_name)
}


mods.push({
    "mod_name": "AFUSeizurePrevention",
    "developer_name": "RosePT-10",
    "supported_game_versions": ["0.12", "0.152", "0.17", "0.26", "0.34"],
    "download_link": "https://github.com/RosePT-10/AFUSeizurePrevention",
    "description": "A mod which alters the lighting effect of the Riot Stick and EMP Grenades, as well as visually removing flashbangs entirely, to prevent seizures. ",
    "order": "0"
})

mods.push({
    "mod_name": "AFU: Ultimate Premium Edition",
    "developer_name": "RosePT-10",
    "supported_game_versions": ["v0.26"],
    "download_link": "https://github.com/RosePT-10/AFU-Ultimate-Premium-Edition",
    "description": "A mod for Airframe Ultra which makes extensive changes to... pretty much everything. It's AFU Repainted if you know what that means. If you don't, its just replacing the games assets with a bunch of memes.",
    "order": "1"
})

mods.push({
    "mod_name": "TimerMod",
    "developer_name": "Knight-Ragu",
    "supported_game_versions": ["v0.26"],
    "download_link": "https://github.com/Knight-Ragu/TimerMod",
    "description": "Timer mod for Airframe Ultra, for racing against yourself on the track! Adds an in-game timer that automatically starts/stops when races begin/end. Keeps track of your best times for each map, and each bike on each map! Individual 'splits' as well as your fastest pace finishing each race Works for beta 2 and 3, don't know about beta 1",
    "order": "2"
})
