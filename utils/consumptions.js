const _const = require("./const")

module.exports = calcConsumption;

function getVolume(duration, debit) {
    return duration * debit;
}

// duration (s) debit (Go/s) Transport Consumption (KWH/Go) => Consumption (KWH)
function T(dataVolume) {
    return dataVolume * _const.TRANSPORT_CONSUMPTION;
}

function TCO2(dataVolume, mixPercent) {
    var transportConsumption = T(dataVolume);
    return Object.keys(mixPercent).reduce((acc, key) => {
        return acc + transportConsumption * mixPercent[key].ME * mixPercent[key].percent;
    }, 0);
}

function I(dataVolume) {
    return dataVolume * _const.INFRASTRUCTURE_CONSUMPTION;
}

function ICO2(dataVolume, mix) {
    return mix * I(dataVolume);
}

function S(dataVolume) {
    return dataVolume * _const.SMARTPHONE_CONSUMPTION;
}

function SCO2(dataVolume, mix) {
    return mix * S(dataVolume);
}

function hopsToPercentMEMap(data) {
    var distanceMEMap = data.hops.reduce((acc, hop, idx) => {
        if (acc[hop.data.country_code] == null) {
            acc[hop.data.country_code] = {
                ME: getMix(hop.data.country_code),
                distance: 0,
            };
        }
        if (idx != 0)
            acc[hop.data.country_code].distance += hop.data.distance / 2;
        if (idx != data.hops.length - 1)
            acc[hop.data.country_code].distance += data.hops[idx + 1].data.distance / 2;
        return acc;
    }, {});
    Object.keys(distanceMEMap).forEach(key => {
        distanceMEMap[key].percent = distanceMEMap[key].distance / data.totalDistance;
    });
    return distanceMEMap;
}




function calcConsumption(data, duration, debit) {
    var percentMEMap = hopsToPercentMEMap(data);
    var dataVolume = getVolume(duration, debit);
    var tco2 = TCO2(dataVolume, percentMEMap);
    var ico2 = ICO2(dataVolume, getMix(data.hops[data.hops.length - 1].data.country_code));
    var sco2 = SCO2(dataVolume, getMix(data.hops[0].data.country_code));
    return {
        total: tco2 + ico2 + dco2,
        transport: dco2,
        datacenter: ico2,
        smartphone: sco2,
    };
}


function getMix(country_code) {
    return _const.ME[country_code];
}