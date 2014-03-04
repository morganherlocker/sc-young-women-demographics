var geocolor = require('geocolor'),
    fs = require('fs')


var counties = JSON.parse(fs.readFileSync('./yw-counties-simplified.json'))

var z = 'yw_percent',
    numberOfBreaks = 8,
    colors = ['white', 'red']

// jenks
jenks = geocolor.jenks(counties, z, numberOfBreaks, colors)
fs.writeFileSync('./ywPercent_jenks.geojson', JSON.stringify(jenks))

// quantiles
quantiles = geocolor.quantiles(counties, z, numberOfBreaks, colors)
fs.writeFileSync('./ywPercent_quantiles.geojson', JSON.stringify(quantiles))

// equal intervals
equalIntervals = geocolor.equalIntervals(counties, z, numberOfBreaks, colors)
fs.writeFileSync('./ywPercent_equalInterval.geojson', JSON.stringify(equalIntervals))