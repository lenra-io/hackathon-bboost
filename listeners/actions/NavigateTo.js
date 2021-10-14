const _const = require("../../utils/const");
const calcConsumption = require("../../utils/consumptions");
const traceroute = require("../../utils/traceroute");


module.exports = async (data, props, event) => {
    if (props.page == "resultPage") {
        var res = await traceroute("www.youtube.com");
        console.log(JSON.stringify(res));
        data.dataset = res;

        data.consumption = calcConsumption(res, 1, _const.YOUTUBE_1080);
    }
    data.page = props.page;
    return data;
}