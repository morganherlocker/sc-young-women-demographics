var geocolor = require('geocolor'),
    fs = require('fs')


var counties = JSON.parse(fs.readFileSync('./yw-counties-simplified.json'))

var z = 'TotalPop',
    numberOfBreaks = 8,
    colors = ['green', 'yellow', 'red']

// jenks
jenks = geocolor.jenks(counties, z, numberOfBreaks, colors)
fs.writeFileSync('./population_jenks.geojson', JSON.stringify(jenks))

// quantiles
quantiles = geocolor.quantiles(counties, z, numberOfBreaks, colors)
fs.writeFileSync('./population_quantiles.geojson', JSON.stringify(quantiles))

// equal intervals
equalIntervals = geocolor.equalIntervals(counties, z, numberOfBreaks, colors)
fs.writeFileSync('./population_equalInterval.geojson', JSON.stringify(equalIntervals))