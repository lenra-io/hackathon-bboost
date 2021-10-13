'use strict'

const LeftMenu = require("./components/LeftMenu");
const pages = require("./pages");


function getCurrentPage(pageName, data) {
	const page = require(`./pages/${pageName}`);

	if (page == null) return require(`./pages/${pages.ERROR_404}`)(data);
	return page(data);
}

module.exports = function mainUi(data) {
	return {
		root: {
			type: "flex",
			direction: "row",
			crossAxisAlignment: "stretch",
			children: [
				LeftMenu(),
				getCurrentPage(data.page, data)
			],
		}
	};
}