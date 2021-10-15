const Traceroute = require('nodejs-traceroute');
const ipToContryCode = require('./ipToContryCode');
const distanceUtils = require('./DistanceUtils');
const webistes = require('./webistes');
const { INSTA, DAILYMOTION } = require('./webistes');
module.exports = async (url) => {
    /*var res = await trace(url).then(trace => {
        return Promise.all(trace.hops.map(hop => ipToContryCode(hop.ip).then((data) => {
            return {
                ip: hop.ip,
                data: data,
            }
        })));
    }).then(locatedHops => {
        return cleanData(locatedHops);
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
    }).then(ips => {
        return {
            hops: ips,
            totalDistance: ips.reduce((acc, cur) => {
                return acc + cur.data.distance;
            }, 0)
        }
    });
    console.log(JSON.stringify(res));
    return res;*/
    switch (url) {
        case webistes.YOUTUBE.url:
            return Promise.resolve(YT_DATA);
        case webistes.INSTA.url:
            return Promise.resolve(INSTA_DATA);
        case webistes.DAILYMOTION.url:
            return Promise.resolve(DAILY_DATA);
    }
}

async function trace(url) {
    /*var promise = new Promise((resolve, reject) => {
        var nbHops = 0;
        const tracer = new Traceroute();
        var hops = []
        // const promises = [];
        tracer.on("hop", (hop) => {
            console.log(hop);
            hops.push(hop);
            nbHops++;
        }).on("close", () => {
            resolve({
                nbHops: nbHops,
                hops: hops,
            });
        });
        tracer.trace(url);
    });
    var res = await promise;
    console.log(res);
    return promise;*/
    console.log(url)
    switch (url) {
        case webistes.YOUTUBE.url:
            return Promise.resolve(YT_TRACEROUTE);
        case webistes.INSTA.url:
            return Promise.resolve(INSTA_TRACEROUTE);
        case webistes.DAILYMOTION.url:
            return Promise.resolve(DAILYMOTION_TRACEROUTE);
    }
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

const YT_TRACEROUTE = {
    nbHops: 11,
    hops: [
        { hop: 1, ip: '172.17.0.1', rtt1: '0.006 ms' },
        { hop: 2, ip: '192.168.1.1', rtt1: '6.113 ms' },
        { hop: 3, ip: '80.10.237.65', rtt1: '7.766 ms' },
        { hop: 4, ip: '193.253.93.86', rtt1: '16.896 ms' },
        { hop: 5, ip: '81.253.130.6', rtt1: '27.674 ms' },
        { hop: 6, ip: '193.252.137.14', rtt1: '17.706 ms' },
        { hop: 7, ip: '193.251.251.110', rtt1: '18.836 ms' },
        { hop: 8, ip: '129.134.38.82', rtt1: '17.629 ms' },
        { hop: 9, ip: '31.13.26.217', rtt1: '17.356 ms' },
        { hop: 10, ip: '157.240.38.157', rtt1: '15.817 ms' },
        { hop: 11, ip: '179.60.192.36', rtt1: '17.939 ms' }
    ]
}
const DAILYMOTION_TRACEROUTE = {
    nbHops: 10,
    hops: [
        { hop: 1, ip: '172.17.0.1', rtt1: '0.016 ms' },
        { hop: 2, ip: '192.168.1.1', rtt1: '5.846 ms' },
        { hop: 3, ip: '80.10.237.65', rtt1: '8.296 ms' },
        { hop: 4, ip: '193.253.93.86', rtt1: '16.711 ms' },
        { hop: 5, ip: '193.252.100.46', rtt1: '17.393 ms' },
        { hop: 6, ip: '193.251.126.14', rtt1: '18.823 ms' },
        { hop: 7, ip: '193.252.98.106', rtt1: '17.351 ms' },
        { hop: 8, ip: '193.252.98.109', rtt1: '15.995 ms' },
        { hop: 9, ip: '193.252.230.98', rtt1: '16.620 ms' },
        { hop: 10, ip: '128.127.131.33', rtt1: '31.848 ms' }
    ]
}

const INSTA_TRACEROUTE = {
    nbHops: 11,
    hops: [
        { hop: 1, ip: '172.17.0.1', rtt1: '0.007 ms' },
        { hop: 2, ip: '192.168.1.1', rtt1: '6.751 ms' },
        { hop: 3, ip: '80.10.237.65', rtt1: '7.129 ms' },
        { hop: 4, ip: '193.253.93.86', rtt1: '17.931 ms' },
        { hop: 5, ip: '81.253.130.6', rtt1: '24.634 ms' },
        { hop: 6, ip: '193.252.137.14', rtt1: '16.993 ms' },
        { hop: 7, ip: '193.251.251.108', rtt1: '15.069 ms' },
        { hop: 8, ip: '129.134.38.68', rtt1: '15.319 ms' },
        { hop: 9, ip: '157.240.44.235', rtt1: '19.189 ms' },
        { hop: 10, ip: '157.240.38.213', rtt1: '16.098 ms' },
        { hop: 11, ip: '179.60.192.174', rtt1: '21.208 ms' }
    ]
};

const INSTA_DATA = { "hops": [{ "ip": "172.17.0.1", "data": { "country_code": "FR", "city": "La Rochelle", "latitude": 46.14998051397976, "longitude": -1.1512845018323963, "nbHops": 2, "distance": 0 } }, { "ip": "80.10.237.65", "data": { "country_code": "FR", "latitude": 45.764043, "longitude": 4.835659, "city": "Lyon", "nbHops": 1, "distance": 464.67891215035587 } }, { "ip": "193.253.93.86", "data": { "country_code": "FR", "latitude": 48.117266, "longitude": -1.6777926, "city": "Rennes", "nbHops": 3, "distance": 559.1967020183588 } }, { "ip": "193.251.251.108", "data": { "country_code": "FR", "latitude": 48.856614, "longitude": 2.3522219, "city": "Paris", "nbHops": 1, "distance": 308.1333570466813 } }, { "ip": "129.134.38.68", "data": { "country_code": "US", "latitude": 38.9071923, "longitude": -77.0368707, "city": "Washington", "nbHops": 2, "distance": 6164.810049947095 } }, { "ip": "157.240.38.213", "data": { "country_code": "US", "latitude": 40.735657, "longitude": -74.1723667, "city": "Newark", "nbHops": 2, "distance": 318.06200225700104 } }], "totalDistance": 7814.881023419492 };
const YT_DATA = { "hops": [{ "ip": "172.17.0.1", "data": { "country_code": "FR", "city": "La Rochelle", "latitude": 46.14998051397976, "longitude": -1.1512845018323963, "nbHops": 2, "distance": 0 } }, { "ip": "80.10.237.65", "data": { "country_code": "FR", "latitude": 45.764043, "longitude": 4.835659, "city": "Lyon", "nbHops": 1, "distance": 464.67891215035587 } }, { "ip": "193.253.93.86", "data": { "country_code": "FR", "latitude": 48.117266, "longitude": -1.6777926, "city": "Rennes", "nbHops": 2, "distance": 559.1967020183588 } }, { "ip": "193.252.137.14", "data": { "country_code": "FR", "latitude": 43.7101728, "longitude": 7.2619532, "city": "Nice", "nbHops": 1, "distance": 846.7412619783032 } }, { "ip": "193.251.251.110", "data": { "country_code": "FR", "latitude": 48.856614, "longitude": 2.3522219, "city": "Paris", "nbHops": 1, "distance": 685.1086000245363 } }, { "ip": "129.134.38.82", "data": { "country_code": "US", "latitude": 38.9071923, "longitude": -77.0368707, "city": "Washington", "nbHops": 2, "distance": 6164.810049947095 } }, { "ip": "157.240.38.157", "data": { "country_code": "US", "latitude": 40.735657, "longitude": -74.1723667, "city": "Newark", "nbHops": 1, "distance": 318.06200225700104 } }, { "ip": "179.60.192.36", "data": { "country_code": "FR", "latitude": 48.894533, "longitude": 2.40963, "city": "Pantin", "nbHops": 1, "distance": 5849.354934394546 } }], "totalDistance": 14887.952462770194 };
const DAILY_DATA = { "hops": [{ "ip": "172.17.0.1", "data": { "country_code": "FR", "city": "La Rochelle", "latitude": 46.14998051397976, "longitude": -1.1512845018323963, "nbHops": 4, "distance": 0 } }, { "ip": "193.252.100.46", "data": { "country_code": "FR", "latitude": 46.580224, "longitude": 0.340375, "city": "Poitiers", "nbHops": 5, "distance": 124.05028051713923 } }, { "ip": "128.127.131.33", "data": { "country_code": "FR", "latitude": 49.6055725, "longitude": -1.5771391, "city": "La Glacerie", "nbHops": 1, "distance": 365.27460259881 } }], "totalDistance": 489.32488311594926 };