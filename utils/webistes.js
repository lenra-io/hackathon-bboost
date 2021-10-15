const YOUTUBE = {
    url: "www.youtube.com",
    name: "YouTube",
    debit: 2.1,
};
const FACEBOOK = {
    url: "www.facebook.com",
    name: "Facebook",
    debit: 0.1,
};

const INSTA = {
    url: "www.instagram.com",
    name: "Instagram",
    debit: 0.1,
};

const DAILYMOTION = {
    url: "www.dailymotion.com",
    name: "Dailymotion",
    debit: 2.1,
};


module.exports = {
    YOUTUBE: YOUTUBE,
    FACEBOOK: FACEBOOK,
    INSTA: INSTA,
    DAILYMOTION: DAILYMOTION,
    fromName: {
        [INSTA.name]: INSTA,
        [YOUTUBE.name]: YOUTUBE,
        [FACEBOOK.name]: FACEBOOK,
        [DAILYMOTION.name]: DAILYMOTION,
    },
    apps: [YOUTUBE, FACEBOOK, INSTA, DAILYMOTION],
}