const actions = require("../../listeners/actions")

function checkbox(applicationname, data){
    return{
        type: "checkbox",
        value: data.selectedItems.includes(applicationname),
        label: applicationname,
        onPressed: {
            action = action.SET_CHECKBOX,
            props : {
                page: applicationname,
            }
        }

    }
}

module.exports = function homePage(data) {
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
                spacing: 2,
                padding: {
                    left: 2,
                    right: 2
                },
                children: [
                    {
                        type: "text",
                        style: "headline1",
                        value: "Applications utilisées:"
                    },
                    {
                        type: "flex",
                        direction: "row",
                        children: [
                            {
                                type: "text",
                                value: "foo"
                            }
                        ]
                    }
                ]
            },
            {
                type: "flex",
                direction: "col",
                spacing: 2,
                padding: {
                    left: 2,
                    right: 2
                },
                children: [
                    {
                        type: "text",
                        style: "headline1",
                        value: "Consommations:"
                    },
                    {
                        type: "flex",
                        direction: "row",
                        children: [
                            {
                                type: "text",
                                value: "YouTube"
                            },
                            {
                                type: "dropdownButton",
                                value: "YouTube"
                            },
                            {
                                type: "text",
                                value: "YouTube"
                            }
                        ]
                    }
                ]
            }

        ]
    }

}