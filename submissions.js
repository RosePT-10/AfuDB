var mods = [];
var mods_length = mods.length;

function filterResultsBySearch(){
    var input = document.getElementById("search-bar").value
    return input;
}

function filterResultsByVersion(){
    var ver = document.getElementById("version-drop-down").value
    return ver;
}

function displayListing() {
    // clear out previous listings
    let element = document.getElementById('mod_container_id');
    element.textContent = ''
    
    // iterate over the entire array and display listings one at a time
    mods.forEach(function (item, index) { 
        if (item.mod_name.toLowerCase().includes(filterResultsBySearch().toLowerCase())){
            if (filterResultsByVersion() == "Any" || item.supported_game_versions.includes(filterResultsByVersion())){

                var cell = document.createElement("div");
                var image = document.createElement("img");
                var title = document.createElement("div");
                var link = document.createElement("a");
                var dev = document.createElement("div");
                var desc = document.createElement("div");


                // assemble the nested cells
                // image
                image.setAttribute('src', `assets/mod_img/${item.mod_name}.png`, 'class', 'image_cell')
                cell.appendChild(image);
                
                // title with link to mod page
                link.innerHTML += `${item.mod_name}`
                title.setAttribute('class', 'title_cell')
                link.setAttribute('href', `${item.download_link}`)
                title.appendChild(link);
                cell.appendChild(title);

                // developer name
                dev.innerHTML += `By ${item.developer_name}`
                dev.setAttribute('class', 'dev_cell')
                cell.appendChild(dev);

                // mod description
                desc.innerHTML += `${item.description}`
                desc.setAttribute('class', 'desc_cell')
                cell.appendChild(desc);

                // append the fully assembled mod listing
                element.appendChild(cell);
            }
        }
        
    });
    
}

function testing(){
    alert (mods.at(2).mod_name)
}


mods.push({
    "mod_name": "AFUSeizurePrevention",
    "developer_name": "RosePT-10",
    "supported_game_versions": ["Beta 1", "Beta 2", "Beta 3", "Beta 4", "Beta 5"],
    "download_link": "https://github.com/RosePT-10/AFUSeizurePrevention",
    "description": "A mod which alters the lighting effect of the Riot Stick and EMP Grenades, as well as visually removing flashbangs entirely, to prevent seizures. "
})

mods.push({
    "mod_name": "AFU: Ultimate Premium Edition",
    "developer_name": "RosePT-10",
    "supported_game_versions": ["Beta 4"],
    "download_link": "https://github.com/RosePT-10/AFU-Ultimate-Premium-Edition",
    "description": "A mod for Airframe Ultra which makes extensive changes to... pretty much everything. It's AFU Repainted if you know what that means. If you don't, its just replacing the games assets with a bunch of memes."
})

mods.push({
    "mod_name": "UPEAssetSwapper",
    "developer_name": "RosePT-10",
    "supported_game_versions": ["Beta 4"],
    "download_link": "https://github.com/RosePT-10/UPEAssetSwapper",
    "description": "Melon Loader mod to replace assets in the game Airframe Ultra. Was created for use in Aiframe Ulta: Ultimate Premium Edition (UPE), a mod which replaces game assets with memes. Currently it is non functional. I started my Melon Loader modding journey with this but hit a wall and couldn't figure it out. I then got UPEAddons working and that was a huge success. I plan to come back to this tool at a later time. Until this mod has a release posted, assume that it doesnt do anything."
})

mods.push({
    "mod_name": "Timer Mod",
    "developer_name": "Knight-Ragu",
    "supported_game_versions": ["Beta 1", "Beta 2", "Beta 3"],
    "download_link": "https://github.com/Knight-Ragu/TimerMod",
    "description": "Timer mod for Airframe Ultra, for racing against yourself on the track!",
})
