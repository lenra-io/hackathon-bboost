const traceroute = require("../../utils/traceroute")

module.exports = async (data, props, event) => {
    // console.log(data);

    var res = await traceroute("www.youtube.com");
    console.log(JSON.stringify(res));

    data.consumptions = res;

    return data;
}
