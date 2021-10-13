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
                        type: "text",
                        style: "headline",
                        value: '404 NOT FOUND'
                    }
                ]
            }
        ]
    }
}