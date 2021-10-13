module.exports = (action, data, props, event) => {
    console.warn(`The action ${action} is not handled.`)
    return data;
}
