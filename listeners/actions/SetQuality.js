module.exports = (data, props, event) => {
    if (props.page in data.forms) {
        data.forms[props.page].quality = props.quality;
    } else {
        data.forms[props.page] = {
            quality: props.quality
        }
    }
    return data;
}