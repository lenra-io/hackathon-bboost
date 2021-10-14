const header = require("../components/header");
const cityHops = require("../components/cityHops");
const cityHop = require("../components/cityHop");
const appSelectButtons = require("../components/appSelectButtons");

module.exports = function resultPage(data) {
    return {
        type: "flex",
        direction: "col",
        scroll: true,
        spacing: 4,
        fillParent: true,
        crossAxisAlignment: "stretch",
        children: [
            header(),
            {
                type: "flex",
                direction: "col",
                spacing: 5,
                crossAxisAlignment: "center",
                children: [
                    {
                        type: "flex",
                        direction: "col",
                        spacing: 2,
                        crossAxisAlignment: "center",
                        children: [
                            {
                                type: "text",
                                value: "Consommation Générale en kWh : ",
                                style: "headline1"
                            },
                            {
                                type: "text",
                                style: "headline3",
                                value: `0 kWh`
                            }
                        ]
                    },
                    {
                        type: "flex",
                        direction: "col",
                        spacing: 2,
                        children: [
                            {
                                type: "text",
                                value: "Chemin que votre connexion emprunte : ",
                                style: "headline2"
                            },
                            // TODO : Add cityHops below
                            appSelectButtons(data.dataset.sites),

                            cityHops(
                                [cityHop(data.dataset.sites[data.selectedApp].dataset.hops[0].data, data.dataset.sites[data.selectedApp].dataset.totalDistance, true)].concat(data.dataset.sites[data.selectedApp].dataset.hops.slice(1).map(hop => cityHop(hop.data, hop.data.distance)))
                            )
                        ]
                    }
                ]
            }
        ]
    }
}