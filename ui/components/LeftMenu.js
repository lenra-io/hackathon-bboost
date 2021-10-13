const MenuItem = require("./MenuItem");

module.exports = () => {
    return {
        type: "styledContainer",
        color: 0xFF1e232c,
        child: {
            type: "flex",
            direction: "col",
            fillParent: true,
            crossAxisAlignment: "center",

            children: [
                {
                    type: "flex",
                    padding: {
                        top: 3,
                        bottom: 2,
                    },
                    children: [{
                        type: "text",
                        style: "blueBodyText",
                        value: "BBoost 2021"
                    }],
                },

                {
                    type: "menu",
                    children: [
                        MenuItem({ text: "Menu 1                    " }),
                        MenuItem({ text: "Menu 2" }),
                        MenuItem({ text: "Menu 3" }),
                        MenuItem({ text: "Menu 4" }),
                    ]
                }
            ]
        },
    }
}