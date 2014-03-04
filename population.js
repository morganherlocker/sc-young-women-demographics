var geocolor = require('geocolor')

var counties = {
  
}

var z = 'Population',
    numberOfBreaks = 5,
    colors = ['green', 'yellow', 'red']

// jenks
geoJenks = geocolor.jenks(cities, z, numberOfBreaks, colors)
console.log(geoJenks)

// quantiles
geoQuantiles = geocolor.quantiles(cities, z, numberOfBreaks, colors)
console.log(geoQuantiles)

// equal intervals
geoEqualIntervals = geocolor.equalIntervals(cities, z, numberOfBreaks, colors)
console.log(geoEqualIntervals)

// custom breaks
geoCustom = geocolor.custom(cities, z, [0,200000,300000,400000,500000,800000,1000000,1000000000], colors)
console.log(geoCustom)