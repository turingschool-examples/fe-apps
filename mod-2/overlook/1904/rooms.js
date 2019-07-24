const rooms = [
  {
    "number": 1,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 265.03
  },
  {
    "number": 2,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "full",
    "numBeds": 1,
    "costPerNight": 228.01
  },
  {
    "number": 3,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 275.99
  },
  {
    "number": 4,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 1,
    "costPerNight": 177.03
  },
  {
    "number": 5,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 2,
    "costPerNight": 246.65
  },
  {
    "number": 6,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 211.42
  },
  {
    "number": 7,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 376.56
  },
  {
    "number": 8,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 1,
    "costPerNight": 177.04
  },
  {
    "number": 9,
    "roomType": "residential suite",
    "bidet": true,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 327.76
  },
  {
    "number": 10,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 296.48
  },
  {
    "number": 11,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 216.05
  },
  {
    "number": 12,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 247.86
  },
  {
    "number": 13,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 1,
    "costPerNight": 372.83
  },
  {
    "number": 14,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 207.64
  },
  {
    "number": 15,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 163.1
  },
  {
    "number": 16,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 229.8
  },
  {
    "number": 17,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 2,
    "costPerNight": 393.97
  },
  {
    "number": 18,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 332.07
  },
  {
    "number": 19,
    "roomType": "residential suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 356.33
  },
  {
    "number": 20,
    "roomType": "suite",
    "bidet": true,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 356.72
  },
  {
    "number": 21,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 480.56
  },
  {
    "number": 22,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 190.26
  },
  {
    "number": 23,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 245.42
  },
  {
    "number": 24,
    "roomType": "suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 174.95
  },
  {
    "number": 25,
    "roomType": "junior suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 307.49
  },
  {
    "number": 26,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 391.55
  },
  {
    "number": 27,
    "roomType": "junior suite",
    "bidet": true,
    "bedSize": "king",
    "numBeds": 2,
    "costPerNight": 286.48
  },
  {
    "number": 28,
    "roomType": "residential suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 215.76
  },
  {
    "number": 29,
    "roomType": "junior suite",
    "bidet": true,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 351.66
  },
  {
    "number": 30,
    "roomType": "junior suite",
    "bidet": true,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 372.85
  },
  {
    "number": 31,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 390.68
  },
  {
    "number": 32,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 366.89
  },
  {
    "number": 33,
    "roomType": "suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 245.52
  },
  {
    "number": 34,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "king",
    "numBeds": 2,
    "costPerNight": 329.96
  },
  {
    "number": 35,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 230.28
  },
  {
    "number": 36,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 458.41
  },
  {
    "number": 37,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 404.59
  },
  {
    "number": 38,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 379.66
  },
  {
    "number": 39,
    "roomType": "suite",
    "bidet": true,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 399.52
  },
  {
    "number": 40,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 346.42
  },
  {
    "number": 41,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 405.13
  },
  {
    "number": 42,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 409.37
  },
  {
    "number": 43,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 457.17
  },
  {
    "number": 44,
    "roomType": "residential suite",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 368.33
  },
  {
    "number": 45,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 301.62
  },
  {
    "number": 46,
    "roomType": "junior suite",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 2,
    "costPerNight": 353.97
  },
  {
    "number": 47,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 2,
    "costPerNight": 171.23
  },
  {
    "number": 48,
    "roomType": "suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 344.92
  },
  {
    "number": 49,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "twin",
    "numBeds": 1,
    "costPerNight": 271.95
  },
  {
    "number": 50,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 493.38
  }
];

module.exports = { rooms };