const ipToContry = require("../../utils/ipToContryCode");
const traceroute = require("../../utils/traceroute")

module.exports = async function initData() {
    console.log("InitDATA")
    var res = await traceroute("www.youtube.com");
    console.log(JSON.stringify(res));
    return {
        page: "homePage",
        value: JSON.stringify(res),
    };
}
