var mods = [];
var mods_length = mods.length;

function displayListing() {
    // iterate over the entire array and display listings one at a time
    mods.forEach(function (item, index) {
        //console.log(item, index);
        //let br = document.createElement('br');
        let element = document.getElementById('mod_container_id');
        var cell = document.createElement("div");
        var image = document.createElement("img");
        var title = document.createElement("div");
        var dev = document.createElement("div");
        var desc = document.createElement("div");

        //image.innerHTML += `${item.image_link}`
        //image.setAttribute('class', 'image_cell', 'src', item.image_link)
        //cell.appendChild(image);
        
        title.innerHTML += `${item.mod_name}`
        title.setAttribute('class', 'title_cell')
        cell.appendChild(title);

        dev.innerHTML += `By ${item.developer_name}`
        dev.setAttribute('class', 'dev_cell')
        cell.appendChild(dev);

        desc.innerHTML += `${item.description}`
        desc.setAttribute('class', 'desc_cell')
        cell.appendChild(desc);

        //cell.innerHTML += `${item.supported_game_versions}`
        //cell.appendChild(br);
        //cell.innerHTML += `${item.download_link}`
        //cell.appendChild(br);

        //cell.innerHTML += `${item.order}`
        //cell.appendChild(br);
        //cell.appendChild(br);   
        
        element.appendChild(cell);
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

mods.push({
    "mod_name": "UPEAddons",
    "developer_name": "RosePT-10",
    "supported_game_versions": ["v0.26"],
    "download_link": "https://github.com/RosePT-10/UPEAddons",
    "description": "Extension of UPEAssetSwapper for use in Airframe Ultra: Ultimate Premuim Edition (AFU: UPE). Adds silly mods and memes to the game.",
    "order": "3"
})

mods.push({
    "mod_name": "UPEAssetSwapper",
    "developer_name": "RosePT-10",
    "supported_game_versions": ["v0.26"],
    "download_link": "https://github.com/RosePT-10/UPEAssetSwapper",
    "description": "Melon Loader mod to replace assets in the game Airframe Ultra. Was created for use in Aiframe Ulta: Ultimate Premium Edition (UPE), a mod which replaces game assets with memes. Currently it is non functional. I started my Melon Loader modding journey with this but hit a wall and couldn't figure it out. I then got UPEAddons working and that was a huge success. I plan to come back to this tool at a later time. Until this mod has a release posted, assume that it doesnt do anything.",
    "order": "4"
})