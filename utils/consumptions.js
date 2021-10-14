const _const = require("./const")

module.exports = (data) => {

}

function Q(P) {
    return _const.INTERNET_CONSUMPTION * P;
}

function calcCableCo2(percent_country, R) {
    return percent_country * _const.CABLE_PERCENT * R;
}
