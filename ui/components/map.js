const actions = require("../../listeners/actions");

module.exports = map;

function map(index){
    switch(index){
        case "YouTube":
            return {
                type: "image",
                path: "youtube.png"
            }
        case "Dailymotion":
            return {
                type: "image",
                path: "daily.png"
            }
        case "Instagram":
            return {
                type: "image",
                path: "insta.png"
            }
    }
}