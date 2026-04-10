var mods = [];
var mods_length = mods.length;

function displayListing() {
    // iterate over the entire array and display listings one at a time
    for (var i = 0; i < mods_length; i++){
        var current_mod = mods.at(i);
        current_mod.mod_name.alert;
    }
    
}

function testing(){
    alert (mods)
}


mods.push({
    "mod_name": "AFUSeizurePrevention",
    "developer_name": "RosePT-10",
    "supported_game_versions": "v0.26",
    "download_link": "https://github.com/RosePT-10/AFUSeizurePrevention",
    "description": "A mod which alters the lighting effect of the Riot Stick and EMP Grenades, as well as visually removing flashbangs entirely, to prevent seizures. ",
    "order": "0"
})

mods.push({
    "mod_name": "AFU: Ultimate Premium Edition",
    "developer_name": "RosePT-10",
    "supported_game_versions": "v0.26",
    "download_link": "https://github.com/RosePT-10/AFU-Ultimate-Premium-Edition",
    "description": "A mod for Airframe Ultra which makes extensive changes to... pretty much everything. It's AFU Repainted if you know what that means. If you don't, its just replacing the games assets with a bunch of memes.",
    "order": "1"
})

displayListing();