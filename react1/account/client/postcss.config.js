module.exports = {
    "plugins": [
        require("postcss-pxtorem")({
            rootValue: 37.5,
            proList: ['*'],
            selectorBlackList: ['.norem']
        })
    ]
}