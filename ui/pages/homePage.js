const appForm = require("../../components/appForm");
const actions = require("../../listeners/actions");

function checkbox(applicationname, data) {
    return {
        type: "flex",
        direction: "col",
        crossAxisAlignment: "center",
        children: [
            {
                type: "text",
                value: applicationname
            },
            {
                type: "checkbox",
                value: data.selectedItems.includes(applicationname),
                onPressed: {
                    action: actions.SET_CHECKBOX,
                    props: {
                        page: applicationname,
                    }
                }
            }
        ]
    }
}

function showValidateButton(data) {
    if (data.selectedItems.length > 0) {
        return {
            type: "button",
            text: "Valider",
            onPressed: {
                action: "NavigateTo",
                props: {
                    page: "resultPage"
                }
            }
        }
    } else {
        return {
            type: "text",
            value: ""
        }
    }
}

module.exports = function homePage(data) {
    return {
        type: "flex",
        direction: "col",
        spacing: 4,
        fillParent: true,
        scroll: true,
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
                crossAxisAlignment: "center",
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
                        scroll: true,
                        spacing: 2,
                        children: [{
                            type: "flex",
                            spacing: 2,
                            children: data.applications.map(application => checkbox(application, data))
                        }]
                    }
                ]
            },
            {
                type: "flex",
                direction: "col",
                crossAxisAlignment: "center",
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
                        spacing: 5,
                        direction: "col",
                        children: data.selectedItems.map(application => appForm(application, data.forms, data.errors))
                    }

                ]
            },
            {
                type: "flex",
                fillParent: true,
                padding: { right: 2 },
                mainAxisAlignment: "center",
                crossAxisAlignment: "end",
                children: [showValidateButton(data)],
            }
        ]
    }

}