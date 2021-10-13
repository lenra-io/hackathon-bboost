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
                children: [
                    {
                        type: "text",
                        style: "headline1",
                        value: '404 NOT FOUND'
                    }
                ]
            }
        ]
    }
}