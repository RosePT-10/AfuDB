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
                image.setAttribute('src', `assets/mod_img/${item.image_file_name}`, 'class', 'image_cell')
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
    "developer_name": "AstelleBT-02",
    "supported_game_versions": ["Beta 1", "Beta 2", "Beta 3", "Beta 4", "Beta 5"],
    "download_link": "https://github.com/AstelleBT-02/AFU-SeizurePrevention",
    "description": "Removes lighting effect of EMP's and Riot stick, makes flashbangs black instead of white, and removes the low health red pulse, all to prevent seizures.",
    "image_file_name": "AFUSeizurePrevention.png"
})

mods.push({
    "mod_name": "AFU: Ultimate Premium Edition",
    "developer_name": "AstelleBT-02",
    "supported_game_versions": ["Beta 4"],
    "download_link": "https://github.com/AstelleBT-02/AFU-Ultimate-Premium-Edition",
    "description": "A mod for Airframe Ultra which makes extensive changes to... pretty much everything. It's AFU Repainted if you know what that means. If you don't, its just replacing the games assets with a bunch of memes.",
    "image_file_name": "AirframeUltraUltimatePremiumEdition.png"
})

mods.push({
    "mod_name": "Timer Mod",
    "developer_name": "Knight-Ragu",
    "supported_game_versions": ["Beta 1", "Beta 2", "Beta 3"],
    "download_link": "https://github.com/Knight-Ragu/TimerMod",
    "description": "Timer mod for Airframe Ultra, for racing against yourself on the track!",
    "image_file_name": "TimerMod.png"
})

mods.push({
    "mod_name": "FreeRoam",
    "developer_name": "AstelleBT-02",
    "supported_game_versions": ["Beta 4", "Beta 5"],
    "download_link": "https://github.com/AstelleBT-02/AFU-FreeRoam",
    "description": "Removes the OOB timer, allowing you to go (almost) wherever you want! Removal of the invisible walls and killplanes is planned but not yet implemented.",
    "image_file_name": "FreeRoam.png"
})

mods.push({
    "mod_name": "ShrimpleWeaponCustomizer",
    "developer_name": "blankochan",
    "supported_game_versions": ["Beta 4", "Beta 5"],
    "download_link": "https://github.com/blankochan/ShrimpleWeaponCustomizer",
    "description": "A mod for Airframe Ultra which allows customization of the weapons",
    "image_file_name": "ShrimpleWeaponCustomizer.png"
})

mods.push({
    "mod_name": "King's Ransom",
    "developer_name": "Astelle and Pit King",
    "supported_game_versions": ["Beta 4", "Beta 5"],
    "download_link": "https://github.com/AstelleBT-02/AFU-KingsRansom",
    "description": "A balance mod for Airframe Ultra that focuses on general price and economy changes, as well as reworking most gun's and grenade's ammo counts to be consistent between racing and on foot arenas.",
    "image_file_name": "KingsRansom.png"
})

mods.push({
    "mod_name": "Speedometer",
    "developer_name": "AstelleBT-02",
    "supported_game_versions": ["Beta 4"],
    "download_link": "https://github.com/AstelleBT-02/AFU-Speedometer",
    "description": "Add's a center screen speedometer which displays ground speed in a more truthful unit than the hud speedometer's \"kmh\"",
    "image_file_name": "Speedometer.png"
})
