module.exports = function change(action, data, props, event) {
    switch (action) {
        case "ChangeData":
            data.data = event.value;
            break;
        case "ChangeFunction":
            data.function = event.value;
            break;
        case "ChangePage":
            data.currentPage = props.page;
            break;
    }
    return data;
}
