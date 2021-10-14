const YOUTUBE = {
    url: "www.youtube.com",
    name: "YouTube",
    debit: {
        "1080": 2.1,
        "720": 1.6,
        "360": 0.5,
    }
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

module.exports = {
    YOUTUBE: YOUTUBE,
    FACEBOOK: FACEBOOK,
    INSTA: INSTA,
    fromName: {
        [INSTA.name]: INSTA,
        [YOUTUBE.name]: YOUTUBE,
        [FACEBOOK.name]: FACEBOOK
    },
    apps: [YOUTUBE, FACEBOOK, INSTA],
}