const appCheckbox = require("../components/appCheckbox");
const appForm = require("../components/appForm");
const header = require("../components/header");

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
            header(),
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
                            children: data.applications.map(application => appCheckbox(application, data.selectedItems))
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