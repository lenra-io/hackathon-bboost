'use strict'

module.exports = function main(data) {
  return {
    root: {
      type: "flex",
      children: [{
        type: "text",
        value: `Hello ${data.value}!`
      }]
    }
  }
}