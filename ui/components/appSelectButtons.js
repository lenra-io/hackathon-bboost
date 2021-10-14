const actions = require("../../listeners/actions");

module.exports = appSelectButtons;

function appSelectButtons(siteList) {
    return {
        type: "flex",
        direction: "row",
        fillParent: true,
        crossAxisAlignment: "center",
        spacing: 2,
        children: siteList.map(function (site, index) {
            return {
                type: "button", text: site.name, onPressed: {
                    action: actions.SET_SELECTED_APP,
                    props: {
                        selectedApp: index
                    }
                }
            };
        })
    }
}