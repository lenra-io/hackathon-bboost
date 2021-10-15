module.exports = (data, props, event) => {
    /*if (Number(event.value) === event.value && event.value % 1 !== 0){
     data.forms[props.page] = {
         hours: event.value,
     }
    }else{
        data.errors[props.page] = "La valeur doit être décimale"
    }*/
    if (props.page in data.forms) {
        data.forms[props.page].hours = event.value;
    } else {
        data.forms[props.page] = {
            hours: event.value,
        }
    }

    return data;
}