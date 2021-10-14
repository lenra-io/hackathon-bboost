const YOUTUBE = {
    url: "www.youtube.com",
    name: "YouTube",
};
const FACEBOOK = {
    url: "www.facebook.com",
    name: "Facebook",
};

const INSTA = {
    url: "www.instagram.com",
    name: "Instagram",
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