'use strict'

const actions = require("./actions");

module.exports = async (action, data, props, event) => {
  //console.log("Call listener", action, data, props, event);
  try {
    var actionFunction = require(`./actions/${action}`);
    if (actionFunction == null) require(`./actions/${actions.DEFAULT_ACTION}`);
    return await actionFunction(data, props, event);
  } catch (exc) {
    console.log("Exception while executing action " + action, exc);
  }
  return data;
}
