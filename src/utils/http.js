const axios = require('axios')

export default (url, options={}) => {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: options.method || 'GET'
        }).then(res => {
            return resolve(res)
        }).catch(err => {
            return reject(err)
        })
    })
}
