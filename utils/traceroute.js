const Traceroute = require('nodejs-traceroute');
module.exports = async (url) => {
    var promise = new Promise((resolve, reject) => {
        var ips = [];
        var hops = 0;
        const tracer = new Traceroute();
        tracer.on("hop", (hop) => {
            console.log(JSON.stringify(hop));
            ips.push(hop.ip);
            hops++;
        }).on("close", () => {
            resolve({
                ips: ips,
                hops: hops,
            });
        });
        tracer.trace(url);
    });
    return promise;

}