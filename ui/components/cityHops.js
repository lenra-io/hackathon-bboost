module.exports = cityHops;

function cityHops(cityHopList) {
    return {
        type: "flex",
        direction: "col",
        fillParent: true,
        crossAxisAlignment: "center",
        spacing: 2,
        children: cityHopList
    }
}