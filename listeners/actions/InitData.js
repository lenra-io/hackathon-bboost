module.exports = function initData() {
    return {
        page: "resultPage",
        applications: ["YouTube", "Facebook", "Instagram", "Twitch", "Audi"],
        selectedItems: [],
        forms: {},
        errors: {},
        dataset: [
            { ville: "La Rochelle", nbKmParcouru: 0, emissionCarbone: 15 },
            { ville: "Lyon", nbKmParcouru: 370, emissionCarbone: 250 },
            { ville: "Paris", nbKmParcouru: 680, emissionCarbone: 360 },
            { ville: "Rennes", nbKmParcouru: 250, emissionCarbone: 150 },
            { ville: "Chicago", nbKmParcouru: 3500, emissionCarbone: 1402 },
            { ville: "San Francisco", nbKmParcouru: 2150, emissionCarbone: 879 },
        ]
    }
}
