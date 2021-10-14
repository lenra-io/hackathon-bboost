module.exports = (data, props, event) => {
    var i = data.selectedItems.indexOf(props.page);     
    if (i === -1)         
        data.selectedItems.push(props.page);     
    else         
        data.selectedItems.splice(i,1);
    return data;
}