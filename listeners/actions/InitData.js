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
        page: "resultPage",
        applications: ["YouTube", "Facebook", "Instagram", "Twitch", "Audi"],
        selectedItems: [],
        forms: {},
        errors: {},
        dataset: [
            { ville: "La Rochelle", nbKmParcouru: 0, emissionCarbone: 15 },
            { ville: "Lyon", nbKmParcouru: 370, emissionCarbone: 250 },
            { ville: "Paris", nbKmParcouru: 680, emissionCarbone: 360 },
            { ville: "Rennes", nbKmParcouru: 250, emissionCarbone: 150 },
            { ville: "Chicago", nbKmParcouru: 3500, emissionCarbone: 1402 },
            { ville: "San Francisco", nbKmParcouru: 2150, emissionCarbone: 879 },
        ],
        ip: {},
    }
}
