module.exports = function resultPage(data) {
    return {
        type: "flex",
        direction: "col",
        spacing: 4,
        fillParent: true,
        crossAxisAlignment: "stretch",
        children: [
            {
                type: "styledContainer",
                color: 0xFFFFFFFF,

                child: {
                    type: "flex",
                    direction: "row",
                    fillParent: true,
                    mainAxisAlignment: "spaceBetween",
                    padding: {
                        left: 2,
                        right: 2,
                        top: 2,
                        bottom: 2,
                    },
                    children: [
                        {
                            type: "flex",
                            direction: "row",
                            children: [
                                {
                                    type: "text",
                                    style: "headline1",
                                    value: "BBoost"
                                }
                            ]
                        },
                        {
                            type: "flex",
                            direction: "row",
                            children: [
                                {
                                    type: "text",
                                    style: "headline1",
                                    value: "Lenra"
                                }
                            ]
                        }
                    ]
                }
            },
            {
                type: "flex",
                direction: "col",
                crossAxisAlignment: "center",
                children: [
                    {
                        type: "flex",
                        children:[ 
                            { 
                                type: "text", 
                                value: "Consommation Générale en KW/H : " 
                            },
                        // {type: "text", value: data}
                        ]
                    },
                    {
                        type: "flex",
                        children: [
                            {
                                type: "text",
                                value: "Chemin que votre connexion empreinte : "
                            }
                        ]
                    }
                ]
            }
        ]
    }
}