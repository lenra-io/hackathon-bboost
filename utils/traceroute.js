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
                return cleanData(ips);
            }).then(ips => {
                let _previous = 0;
                ips.forEach(ip => {
                    if (_previous != 0)
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
        const last = acc.last;
        if(last && curr.latitude == last.latitude && curr.longitude == last.longitude) {
            last.nbHops++;
            return acc;
        } else {
            curr.nbHops = 1;
            return acc.concat([curr]);
        }
      }, []);
}