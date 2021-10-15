const _const = require("../../utils/const");
const consumptions = require("../../utils/consumptions");
const ipToContry = require("../../utils/ipToContryCode");
const traceroute = require("../../utils/traceroute")

module.exports = async function initData() {
    console.log("InitDATA")
    
    var data = await traceroute("www.youtube.com");
    var consumtions = consumptions(data, 1, _const.YOUTUBE_1080);
    console.log("CONSOMMATIONS");
    console.log(consumtions);
    return {
        page: "homePage",
        applications: ["YouTube", "Facebook", "Instagram", "Twitch", "Audi"],
        selectedItems: [],
        forms: {},
        errors: {},
        ip: {},
    }
}
