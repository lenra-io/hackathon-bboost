const actions = require("../../listeners/actions");

module.exports = appCheckbox;

function appCheckbox(appName, selectedItems) {
    return {
        type: "flex",
        direction: "col",
        crossAxisAlignment: "center",
        children: [
            {
                type: "text",
                value: appName
            },
            {
                type: "checkbox",
                value: selectedItems.includes(appName),
                onPressed: {
                    action: actions.SET_CHECKBOX,
                    props: {
                        page: appName,
                    }
                }
            }
        ]
    }
}