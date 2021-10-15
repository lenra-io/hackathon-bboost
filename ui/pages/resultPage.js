const printConso = require("../../utils/printConso");
const header = require("../components/header");
const cityHops = require("../components/cityHops");
const cityHop = require("../components/cityHop");
const appSelectButtons = require("../components/appSelectButtons");
const map = require("../components/map");

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
                            totalCons(data.dataset.total),
                            specificCons(data.dataset)
                        ]
                    },
                    {
                        type: "flex",
                        direction: "col",
                        crossAxisAlignment: "center",
                        spacing: 2,
                        children: [
                            {
                                type: "text",
                                value: "Chemin que votre connexion emprunte : ",
                                style: "headline2"
                            },
                            // TODO : Add cityHops below
                            appSelectButtons(data.dataset.sites, data.selectedApp),
                            totalCons(data.dataset.sites[data.selectedApp].consumptions.total),

                            map(data.dataset.sites[data.selectedApp].name),

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


function totalCons(total) {
    return {
        type: "text",
        value: printConso(total),
        style: "headline1"
    }
}

function specificCons(dataset) {
    return {
        type: "flex",
        spacing: 3,
        children: [
            labeledCons("Smartphone", dataset.smartphone),
            labeledCons("Transport", dataset.transport),
            labeledCons("Datacenter", dataset.datacenter),
        ]
    }
}

function labeledCons(label, cons) {
    return {
        type: "flex",
        direction: "col",
        spacing: 1,
        children: [
            {
                type: "text",
                value: label,
                style: "headline3"
            },
            {
                type: "text",
                value: printConso(cons),
                style: "headline2"
            }
        ]
    }
}