var geocolor = require('geocolor'),
    fs = require('fs')


var counties = JSON.parse(fs.readFileSync('./yw-counties-simplified.json'))

var z = 'yw_percent',
    numberOfBreaks = 8,
    colors = ['white', 'red']

// jenks
jenks = geocolor.jenks(counties, z, numberOfBreaks, colors)
fs.writeFileSync('./output/ywPercent_jenks.geojson', JSON.stringify(jenks))

// quantiles
quantiles = geocolor.quantiles(counties, z, numberOfBreaks, colors)
fs.writeFileSync('./output/ywPercent_quantiles.geojson', JSON.stringify(quantiles))

// equal intervals
equalIntervals = geocolor.equalIntervals(counties, z, numberOfBreaks, colors)
fs.writeFileSync('./output/ywPercent_equalInterval.geojson', JSON.stringify(equalIntervals))

// custom
custom = geocolor.custom(counties, z, [0.0558,.0846,.0882,.0914,.0937,.0978,.1010,.1103,.1330], colors)
fs.writeFileSync('./output/ywPercent_custom.geojson', JSON.stringify(custom))