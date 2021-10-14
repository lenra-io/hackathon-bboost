const header = require("../components/header");


module.exports = function resultPage(data) {
    console.log(data.dataset);
    data.dataset.sites.map(console.log);
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
                        ]
                    }
                ]
            }
        ]
    }
}