module.exports = function initData(data) {
    if (!data) {
        return {
            currentPage: "homePage",
            value: "world"
        }
    } else {
        return data;
    }
}
