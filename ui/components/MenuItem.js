module.exports = (text, page) => {
    return {
        type: "menuItem",
        text: text,
        onPressed: {
            action: "NavigateTo",
            props: {
                page: page,
            }
        }
    }
}