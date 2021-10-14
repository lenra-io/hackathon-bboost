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
                                    type: "image",
                                    path: "bboost.png"
                                }
                            ]
                        },
                        {
                            type: "flex",
                            direction: "row",
                            spacing: 1.5,
                            crossAxisAlignment: "center",
                            children: [
                                {
                                    type: "image",
                                    path: "logo-only-black-x64.png"
                                },
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
                spacing: 5,
                crossAxisAlignment: "center",
                children: [
                    {
                        type: "flex",
                        children:[ 
                            { 
                                type: "text", 
                                value: "Consommation Générale en KW/H : ",
                                style: "headline2"
                            },
                        // {type: "text", value: data}
                        ]
                    },
                    {
                        type: "flex",
                        children: [
                            {
                                type: "text",
                                value: "Chemin que votre connexion empreinte : ",
                                style: "headline2"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}