const Traceroute = require('nodejs-traceroute');
const ipToContryCode = require('./ipToContryCode');
const distanceUtils = require('./DistanceUtils');
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
                let _previous = 0;
                ips.forEach(ip => {
                    if (_previous != 0)
                        ip.data.distance = distanceUtils.getDistance(ip.data.lat, ip.data.lng, _previous.data.lat, _previous.data.lng);
                    _previous = ip;
                });
                resolve({
                    ips: ips,
                    hops: hops,
                    totalDistance: ips.reduce((acc, cur) => {
                        return acc + cur.data.distance;
                    })
                });
            })
        });
        tracer.trace(url);
    });
    return promise;

}