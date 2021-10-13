'use strict'

const homePage = require("./homePage");

function getCurrentPage(currentPage, data) {
	switch (currentPage) {
		case "homePage":
			return homePage(data);
	}
}

module.exports =
	function mainUi(data) {
		return {
			root: getCurrentPage(data.currentPage, data)
		};
	}