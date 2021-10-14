module.exports = (data, props, event) => {
    console.log(data);
    if (props.page in data.forms) {
        data.forms[props.page].quality = props.quality;
    } else {
        data.forms[props.page] = {
            quality: props.quality
        }
    }
    console.log(data);
    return data;
}