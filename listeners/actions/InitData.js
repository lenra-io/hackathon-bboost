const traceroute = require("../../utils/traceroute")

module.exports = async function initData() {
    console.log("InitDATA")
    var res = await traceroute("www.google.fr");
    console.log("DONE");
    return {
        page: "homePage",
        value: JSON.stringify(res),
    }
}
