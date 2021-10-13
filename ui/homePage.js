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
                        type: "text",
                        value: `Hello ${data.value}!`
                    }
                ]
            }
        ]
    }
}