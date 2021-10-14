const Traceroute = require('nodejs-traceroute');
const ipToContryCode = require('./ipToContryCode');
module.exports = async (url) => {
    var promise = new Promise((resolve, reject) => {
        var hops = 0;
        const tracer = new Traceroute();
        const promises = [];
        tracer.on("hop", (hop) => {
            promises.push(
                ipToContryCode(hop.ip).then((data) => {
                    return {
                        ip: hop.ip,
                        data: data,
                    }
                })
            );
            hops++;
        }).on("close", () => {
            Promise.all(promises).then(ips => {
                resolve({
                    ips: ips,
                    hops: hops,
                });
            })
        });
        tracer.trace(url);
    });
    return promise;

}