function check_api_key(apikey) {
    const fs = require('fs');
    try {
        if(!apikey) return {
            error: 1,
            msg: 'missing api key. Please Contact Owner : SAIMUM SABIK. FB: https://facebook.com/S41MUM.S4B1K'
        }
        const data_apikey = require(global.APIKEY);
        if (!data_apikey.find(i => i.apikey == apikey)) {
            return {
                error: 1,
                msg: 'APIKEY is not correct! Please Contact : SAIMUM SABIK. FB: https://www.facebook.com/S41MUM.S4B1K'
            }
        } else {
            let APIKEY = data_apikey.find(i => i.apikey == apikey);
            if (APIKEY.request == 0) {
                return {
                    error: 1,
                    msg: 'Your APIKEY request has expired. Please Contact  : SAIMUM SABIK. FB: https://www.facebook.com/S41MUM.S4B1K'
                }
            } 
            else {
                if (APIKEY.type == 'free') {
                    APIKEY.request = APIKEY.request - 1;
                    fs.writeFileSync(global.APIKEY, JSON.stringify(data_apikey, null, 2), 'utf-8');
                    return {
                        error: 0
                    }
                }
                if (APIKEY.type == 'premium') {
                    return {
                        error: 0
                    }
                }
            }
        }
    } catch (e) {
        return {
            error: 1,
            msg: 'Something went wrong with your API KEY!'
        }
    }
}

module.exports = {
    check_api_key
};

