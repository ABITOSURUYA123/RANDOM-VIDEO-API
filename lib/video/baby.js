var owner = "𝐒𝐀𝐈𝐌𝐔𝐌 𝐒𝐀𝐁𝐈𝐊"
var caption = "☆《𝐂𝐔𝐓𝐄 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎》☆"
exports.name = '/video/baby';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/baby.json');
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
