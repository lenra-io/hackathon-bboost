const axios = require('axios')
const distanceUtils = require('./DistanceUtils');

module.exports = async (ip) => {
    try {
        if (ip == '*') return null;
        var res = await axios.get('http://ipwhois.app/json/' + ip);
        if (res.data.success)
            return {
                country_code: res.data.country_code,
                latitude: res.data.latitude,
                longitude: res.data.longitude,
                city: res.data.city,
            };
        return {
            country_code: "FR",
            city: "La Rochelle",
            latitude: 46.14998051397976,
            longitude: -1.1512845018323963,
        };
    } catch {
        console.error("OUPS error request whois");
        return null;
    }
}
