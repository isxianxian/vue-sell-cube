const path = require('path');
const allData = require('./data.json');
const seller = allData.seller,
    goods = allData.goods,
    ratings = allData.ratings;


function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    },
    chainWebpack(config) {
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('assets', resolve('src/assets'))
            .set('api', resolve('src/api'))
    },
    devServer: {
        before(app) {
            app.get('/api/seller', function (req, res) {
                res.json({
                    error: 0,
                    data: seller
                })
            }),
            app.get('/api/goods', function (req, res) {
                res.json({
                    error: 0,
                    data: goods
                })
            }),
            app.get('/api/ratings', function (req, res) {
                res.json({
                    error: 0,
                    data: ratings
                })
            })
        }
    }
}
