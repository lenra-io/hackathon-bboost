const axios = require('axios')
const distanceUtils = require('./DistanceUtils');

module.exports = async (ip) => {
    try {
        if (ip == '*') return null;
        var res = await axios.get('http://ipwhois.app/json/' + ip);
        if (res.data.success){
            return res.data;
        }
        return null;
    } catch {
        console.error("OUPS error request whois");
        return null;
    }
}
