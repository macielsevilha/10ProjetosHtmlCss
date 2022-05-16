const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appIMG } = require('./gulpTasks/app')
const { monitorArquivos, servidor } = require('./gulpTasks/servidor')



module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appIMG)
    ),
    servidor,
    monitorArquivos
)