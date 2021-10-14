module.exports = (data, props, event) => {
   /*if (Number(event.value) === event.value && event.value % 1 !== 0){
    data.forms[props.page] = {
        hours: event.value,
    }
   }else{
       data.errors[props.page] = "La valeur doit être décimale"
   }*/
   data.forms[props.page] = {
        hours: event.value,
    }
   console.log(data);
   return data;
}