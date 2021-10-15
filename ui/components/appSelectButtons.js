const actions = require("../../listeners/actions");

module.exports = appSelectButtons;

function appSelectButtons(siteList, selectedIdx) {
    return {
        type: "flex",
        direction: "row",
        fillParent: true,
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        spacing: 2,
        children: siteList.map(function (site, index) {
            return {
                type: "button", text: site.name, mainStyle: selectedIdx == index ? "primary": "secondary", onPressed: {
                    action: actions.SET_SELECTED_APP,
                    props: {
                        selectedApp: index
                    }
                }
            };
        })
    }
}