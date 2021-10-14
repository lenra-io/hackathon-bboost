module.exports = cityHop;

function cityHop(cityData, distance, isFirstHop = false) {

    return {
        type: "flex",
        direction: "col",
        crossAxisAlignment: "center",
        spacing: 2,
        children: [
            {
                type: "text",
                style: "headline4",
                value: `${isFirstHop ? "Total" : ""} ${distance.toFixed(0)} km`
            },
            {
                type: "styledContainer",
                color: 0xFFFFFFFF,
                boxShadow: {
                    color: 0x1A000000,
                    blurRadius: 5,
                    spreadRadius: 5,
                    offset: {
                        dx: 2,
                        dy: 2
                    }
                },
                child: {
                        type: "flex",
                        direction: "row",
                        fillParent: true,
                        mainAxisAlignment :"center",
                        padding: {bottom:2,right:2,top:2,left:2},
                        spacing: 1,
                        children: [
                            {
                                type: "text",
                                value: cityData.country_code
                            },
                            {
                                type: "text",
                                value: cityData.city
                            }
                        ]
                    }
                   
                }            
        ]
    }
}