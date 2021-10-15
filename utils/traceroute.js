const Traceroute = require('nodejs-traceroute');
const ipToContryCode = require('./ipToContryCode');
const distanceUtils = require('./DistanceUtils');
module.exports = async (url) => {
    var promise = new Promise((resolve, reject) => {
        var hops = 0;
        const tracer = new Traceroute();
        const promises = [];
        tracer.on("hop", (hop) => {
            console.log(hop);
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
                return cleanData(ips);
            }).then(ips => {
                let _previous = null;
                ips.forEach(ip => {
                    if (_previous != null)
                        ip.data.distance = distanceUtils.getDistanceFromLatLon(ip.data.latitude, ip.data.longitude, _previous.data.latitude, _previous.data.longitude);
                    else
                        ip.data.distance = 0;
                    _previous = ip;
                });
                return ips;
            }).then((ips) => {
                resolve({
                    hops: ips,
                    nbHops: hops,
                    totalDistance: ips.reduce((acc, cur) => {
                        return acc + cur.data.distance;
                    }, 0)
                });
            });
        });
        tracer.trace(url);
    });
    return promise;

}

function cleanData(ips) {
    var tmp = [];
    ips.forEach((e, idx) => {
        if (e.data == null) tmp.push(tmp[idx - 1]);
        else tmp.push(e);
    });

    return tmp.reduce((acc, curr) => {
        if (!curr) return acc;
        const last = acc.length > 0 ? acc[acc.length - 1] : null;
        if (last && curr.data.latitude == last.data.latitude && curr.data.longitude == last.data.longitude) {
            last.data.nbHops++;
            return acc;
        } else {
            curr.data.nbHops = 1;
            return acc.concat([curr]);
        }
    }, []);
}