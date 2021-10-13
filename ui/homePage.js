module.exports = function homePage(data) {
    return {
        type: "flex",
        direction: "row",
        mainAxisAlignment: "center",
        fillParent: true,
        children: [
            {
                type: "flex",
                direction: "col",
                mainAxisAlignment: "center",
                crossAxisAlignment: "center",
                fillParent: true,
                spacing: 4,
                children: [
                    {
                        type: "image",
                        path: "appicon.png"
                    },
                    {
                        type: "text",
                        style: "headline1",
                        value: `Hello ${data.value}!`
                    }
                ]
            }
        ]
    }
}