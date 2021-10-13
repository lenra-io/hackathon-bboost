'use strict'

const initData = require('./InitData');
const change = require('./Change');

module.exports = async (action, data, props, event) => {
  console.log("Call listener", action, data, props, event);
  try {
    if (!data && action=="InitData") return initData(data);
    if (action.startsWith("Change")) return change(action, data, props, event);
    console.log("Not managed action", action);
  }
  catch(exc) {
    console.log("Exception while executing action "+action, exc);
  }
  return data;
}
