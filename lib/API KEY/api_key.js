const fs = require('fs');
const path = require('path');
exports.name = '/apikey';
exports.index = async(req, res, next) => {
    const path_D = path.join(global.APIKEY);
    if (!fs.existsSync(path_D)) {
        fs.writeFileSync(path_D, '[]', 'utf-8');
    }
    const data_apikey = require(global.APIKEY)
    if (data_apikey.find(i => i.name == req.query.name)) {
        return res.json({
            error: 'You already have the key on the system'
        });
    }
    if (req.query.type == 'register') {
        let name = req.query.name;
        if (!name) return res.json({
            error: 'Missing data to make your request.'
        });
        else {
            if (req.query.apikey == 'S4B1K-15') {
                var type = 'premium';
                var apikey = 'S4B1K-BOT';
                var request = 'infinite';
            } else {
                var type = 'free';
                var request = 50;
                var apikey = 'BOT_USER';
            }
            const data = require(global.APIKEY)
            var random = '12345';
            var number = 10;
            for (var i = 0; i < number; i++) {
                apikey += random.charAt(Math.floor(Math.random() * random.length));
            }
            data.push({ apikey, name, request, type });
            fs.writeFileSync(path_D, JSON.stringify(data, null, 2), 'utf-8');
            res.json({
                success: 200,
                apikey,
                type,
                message: 'Successfully created apikey!'
            })
        }
    } else if (req.query.type == 'checker') {
        var apikey = req.query.apikey;
        const data = require(global.APIKEY)
        if (!data.find(i => i.apikey == apikey)) {
            return res.json({
                error: 'APIKEY does not exist!'
            })
        } else {
            var APIKEY = data.find(i => i.apikey == apikey);
            return res.json(APIKEY)
        }
    } else {
        return res.json({
            error: 'The command you requested was not found'
        })
    }
}