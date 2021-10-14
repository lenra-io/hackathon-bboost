function calculateGlobalConsumption(data) {
    let res = 0;
    data.dataset.forEach((step) => res += step.emissionCarbone);
    return res;
}

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
                                value: `${calculateGlobalConsumption(data)} kWh`
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
                            {
                                type: "flex",
                                direction: "row",
                                children: [
                                    {
                                        type: "flexible",
                                        flex: 1,
                                        fit: "tight",
                                        child:
                                        {
                                            type: "styledContainer",
                                            border: {
                                                right: {},
                                                bottom: {},
                                                top: {},
                                                left: {}
                                            },
                                            child: {
                                                type: "flex",
                                                mainAxisAlignment: "center",
                                                padding: { top: 2, bottom: 2, right: 2, left: 2 },
                                                children: [
                                                    {
                                                        type: "text",
                                                        value: JSON.stringify(data.fakeData.hops)
                                                    }
                                                ]
                                            }
                                        },
                                    },
                                    {
                                        type: "flexible",
                                        flex: 1,
                                        fit: "tight",
                                        child:
                                        {
                                            type: "styledContainer",
                                            border: {
                                                right: {},
                                                bottom: {},
                                                top: {},
                                                left: {}
                                            },
                                            child: {
                                                type: "flex",
                                                mainAxisAlignment: "center",
                                                padding: { top: 2, bottom: 2, right: 2, left: 2 },
                                                children: [
                                                    {
                                                        type: "text",
                                                        value: "Km parcouru "
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}