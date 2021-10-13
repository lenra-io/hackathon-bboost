const actions = require("../../listeners/actions")

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