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

function appForm(applicationName, data) {
    let fields = [
        {
            type: "text",
            value: applicationName,
        },
    ];

    if (applicationName == "YouTube") {
        fields.push({
            type: "flex",
            direction: "col",
            children: [
                {
                    type: "radio",
                    value: "1080",
                    groupValue: data.forms[applicationName] != null ? data.forms[applicationName].quality : "",
                    label: "1080p",
                    onPressed: {
                        action: actions.SET_QUALITY,
                        props: {
                            page: applicationName,
                            quality: "1080"
                        }
                    }
                },
                {
                    type: "radio",
                    value: "720",
                    groupValue: data.forms[applicationName] != null ? data.forms[applicationName].quality : "",
                    label: "720p",
                    onPressed: {
                        action: actions.SET_QUALITY,
                        props: {
                            page: applicationName,
                            quality: "720"
                        }
                    }
                },
                {
                    type: "radio",
                    value: "480",
                    groupValue: data.forms[applicationName] != null ? data.forms[applicationName].quality : "",
                    label: "480p",
                    onPressed: {
                        action: actions.SET_QUALITY,
                        props: {
                            page: applicationName,
                            quality: "480"
                        }
                    }
                }
            ]
        });
    }

    fields.push({
        type: "textfield",
        value: "",
        error: applicationName in data.errors,
        hintText: "Nombre d'heures (15min = 0.25)",
        onChanged: {
            action: actions.SET_HOURS,
            props: {
                page: applicationName
            }
        },
    });

    return {
        type: "flex",
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        fillParent: true,
        spacing: 1,
        children: fields
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
                        children: data.selectedItems.map(application => appForm(application, data))
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