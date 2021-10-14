const printConso = require("../../utils/printConso");
const header = require("../components/header");


module.exports = function resultPage(data) {
    console.log(data.dataset);
    return {
        type: "flex",
        direction: "col",
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
                style: "headline1"
            }
        ]
    }
}