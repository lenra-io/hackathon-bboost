const _const = require("../../utils/const");
const consumptions = require("../../utils/consumptions");
const ipToContry = require("../../utils/ipToContryCode");
const traceroute = require("../../utils/traceroute")

module.exports = async function initData() {
    return {
        page: "homePage",
        applications: ["YouTube", "Facebook", "Instagram", "Twitch", "Audi"],
        selectedItems: [],
        forms: {},
        errors: {},
        dataset: {},
        consumptions: { "total": 12.0, "smartphone": 5.0, "datacenter": 6.0, "transport": 1.0 },
        fakeData: {
            "hops": [{
                "ip": "172.17.0.1",
                "data": {
                    "country_code": "FR",
                    "city": "La Rochelle",
                    "latitude": 46.14998051397976,
                    "longitude": -1.1512845018323963,
                    "distance": 0
                },
                "nbHops": 1
            }, {
                "ip": "192.168.1.1",
                "data": {
                    "country_code": "FR",
                    "city": "La Rochelle",
                    "latitude": 46.14998051397976,
                    "longitude": -1.1512845018323963,
                    "distance": 0
                },
                "nbHops": 1
            }, {
                "ip": "80.10.237.65",
                "data": {
                    "country_code": "FR",
                    "latitude": 45.764043,
                    "longitude": 4.835659,
                    "city": "Lyon",
                    "distance": 464.67891215035587
                },
                "nbHops": 1
            }, {
                "ip": "193.253.93.86",
                "data": {
                    "country_code": "FR",
                    "latitude": 48.117266,
                    "longitude": -1.6777926,
                    "city": "Rennes",
                    "distance": 559.1967020183588
                },
                "nbHops": 1
            }, {
                "ip": "81.253.130.6",
                "data": {
                    "country_code": "FR",
                    "latitude": 48.117266,
                    "longitude": -1.6777926,
                    "city": "Rennes",
                    "distance": 0
                },
                "nbHops": 1
            }, {
                "ip": "193.252.137.14",
                "data": {
                    "country_code": "FR",
                    "latitude": 43.7101728,
                    "longitude": 7.2619532,
                    "city": "Nice",
                    "distance": 846.7412619783032
                },
                "nbHops": 1
            }, {
                "ip": "72.14.202.232",
                "data": {
                    "country_code": "US",
                    "latitude": 37.3860517,
                    "longitude": -122.0838511,
                    "city": "Mountain View",
                    "distance": 0
                },
                "nbHops": 1
            }, {
                "ip": "72.14.202.232",
                "data": {
                    "country_code": "US",
                    "latitude": 37.3860517,
                    "longitude": -122.0838511,
                    "city": "Mountain View",
                    "distance": 0
                },
                "nbHops": 1
            }, {
                "ip": "216.239.59.209",
                "data": {
                    "country_code": "US",
                    "latitude": 37.3860517,
                    "longitude": -122.0838511,
                    "city": "Mountain View",
                    "distance": 0
                },
                "nbHops": 1
            }, {
                "ip": "172.217.19.238",
                "data": {
                    "country_code": "US",
                    "latitude": 37.3860517,
                    "longitude": -122.0838511,
                    "city": "Mountain View",
                    "distance": 0
                },
                "nbHops": 1
            }],
            "nbHops": 10,
            "totalDistance": 1870.616876147018
        }
    }
}
