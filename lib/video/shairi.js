var owner = "𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊"
var caption = "☆《𝐒𝐇𝐀𝐈𝐑𝐈 𝐕𝐈𝐃𝐄𝐎》☆"
exports.name = '/video/shairi';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/shairi.json');
        var video = n[Math.floor(Math.random() * n.length)].trim();
        res.jsonp({
            data: video,
            count: n.length,
            owner: `${owner}`,
            name: `${caption}`
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}