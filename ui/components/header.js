module.exports = function header() {
    return {
        type: "styledContainer",
        color: 0xFFFFFFFF,
        child: {
            type: "flex",
            direction: "row",
            fillParent: true,
            mainAxisAlignment: "spaceBetween",
            crossAxisAlignment: "center",
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
                    type: "text",
                    value: "Trace Carbone",
                    style: "headline1"
                },
                {
                    type: "flex",
                    direction: "row",
                    spacing: 1,
                    crossAxisAlignment: "center",
                    children: [
                        {
                            type: "image",
                            path: "logo-only-black-x64.png"
                        },
                        {
                            type: "text",
                            style: "headline3",
                            value: "Lenra"
                        }
                    ]
                }
            ]
        }
    }
}