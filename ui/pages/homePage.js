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
        direction: "row",
        spacing: 4,
        children: [
            {
                type: "flex",
                direction: "col",
                children: [
                    {
                        type: "image",
                        path: "appicon.png"
                    },
                    {
                        type: "button",
                        text: `click ${data.value}!`,
                        onPressed: {
                            action: actions.SET_VALUE,
                            props: {
                                value: "Me",
                            }
                        }
                    }
                ]
            }
        ]
    }
}