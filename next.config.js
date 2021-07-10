const { resolve } = require('path')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    sassOptions: {
        includePaths: [
            resolve(__dirname, 'styles')
        ]
    },
    basePath: isProduction ? '/Schedule-JS' : ''
}