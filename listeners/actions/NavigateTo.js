const pages = require("../../ui/pages");
const _const = require("../../utils/const");
const calcConsumption = require("../../utils/consumptions");
const traceroute = require("../../utils/traceroute");
const webistes = require("../../utils/webistes");


module.exports = async (data, props, event) => {
    if (props.page == pages.RESULT_PAGE) {
        data.dataset = await calcForForm(data.forms);
    }
    data.page = props.page;
    return data;
}

async function calcForForm(forms) {
    var sites = Object.keys(forms).map(key => {
        var site = webistes.fromName[key];
        site.form = forms[key];
        return site;
    });
    var sitesConsumptions = [];
    for (var site of sites) {
        console.log(site);
        sitesConsumptions.push(await calcForWebsite(site));
        console.log(sitesConsumptions);
    }
    // var sitesConsumptionsF = sites.map(calcForWebsite);
    // var sitesConsumptions = await Promise.all(sitesConsumptionsF);
    var totals = sitesConsumptions.reduce((acc, siteCons) => {
        acc.total += siteCons.consumptions.total;
        acc.transport += siteCons.consumptions.transport;
        acc.smartphone += siteCons.consumptions.smartphone;
        acc.datacenter += siteCons.consumptions.datacenter;
        return acc;
    }, { total: 0, transport: 0, datacenter: 0, smartphone: 0 });
    totals.sites = sitesConsumptions;
    return totals;
}

async function calcForWebsite(site) {
    var res = await traceroute(site.url);

    return {
        name: site.name,
        url: site.url,
        consumptions: calcConsumption(res, parseFloat(site.form.hours), getDebit(site)),
        dataset: res,
    };
}

function getDebit(site) {
    switch (site.name) {
        case webistes.YOUTUBE.name:
            return webistes.YOUTUBE.debit;
        case webistes.FACEBOOK.name:
            return webistes.FACEBOOK.debit;
        case webistes.INSTA.name:
            return webistes.INSTA.debit;
        case webistes.DAILYMOTION.name:
            return webistes.DAILYMOTION.debit;
    }
}