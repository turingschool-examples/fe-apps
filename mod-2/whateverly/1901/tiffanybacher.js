const constellations = [
  {
    "name": "Aquarius",
    "sky": "southern",
    "season": "Winter",
    "squareDegrees": "980",
    "majorStars": [
      "Alpha Aquarii",
      "Beta Aquarii",
      "Delta Aquarii",
      "Gamma Aquarii",
      "Zeta Aquarii"
    ]
  },
  {
    "name": "Aries",
    "sky": "northern",
    "animal": "the Ram",
    "season": "Spring",
    "squareDegrees": "441",
    "majorStars": [
      "Alpha Arietis",
      "Beta Arietis",
      "Delta Arietis",
      "Epsilon Arietis",
      "Gamma Arietis"
    ]
  },
  {
    "name": "Cancer",
    "sky": "northern",
    "animal": "the Crab",
    "season": "Summer",
    "squareDegrees": "506",
    "majorStars": [
      "Alpha Cancri",
      "Beta Cancri",
      "Delta Cancri",
      "Gamma Cancri",
      "Zeta Cancri"
    ]
  },
  {
    "name": "Capricornus",
    "sky": "southern",
    "animal": "the Goat",
    "season": "Winter",
    "squareDegrees": "414",
    "majorStars": [
      "Alpha Capricorni",
      "Delta Capricorni",
      "Gamma Capricorni",
      "Theta Capricorni",
      "Zeta Capricorni"
    ]
  },
  {
    "name": "Gemini",
    "sky": "northern",
    "season": "Spring",
    "squareDegrees": "514",
    "majorStars": [
      "Alpha Geminorum",
      "Beta Geminorum",
      "Gamma Geminorum",
      "Epsilon Geminorum",
      "Mu Geminorum"
    ]
  },
  {
    "name": "Leo",
    "sky": "northern",
    "animal": "the Lion",
    "season": "Summer",
    "squareDegrees": "947",
    "majorStars": [
      "Alpha Leonis",
      "Beta Leonis",
      "Delta Leonis",
      "Gamma Leonis",
      "Theta Leonis"
    ]
  },
  {
    "name": "Libra",
    "sky": "southern",
    "season": "Autumn",
    "squareDegrees": "538",
    "majorStars": [
      "Alpha Librae",
      "Beta Librae",
      "HD 140283",
      "Sigma Librae",
      "Upsilon Librae"
    ]
  },
  {
    "name": "Pisces",
    "sky": "northern",
    "animal": "the Fish",
    "season": "Winter",
    "squareDegrees": "889",
    "majorStars": [
      "Eta Piscium",
      "Gamma Piscium",
      "Iota Piscium",
      "Omega Piscium",
      "Omicron Piscium"
    ]
  },
  {
    "name": "Sagittarius",
    "sky": "southern",
    "season": "Autumn",
    "squareDegrees": "867",
    "majorStars": [
      "Alpha Sagittarii",
      "Delta Sagittarii",
      "Epsilon Sagittarii",
      "Lambda Sagittarii",
      "Sigma Sagittarii"
    ]
  },
  {
    "name": "Scorpius",
    "sky": "southern",
    "animal": "the Scorpion",
    "season": "Autumn",
    "squareDegrees": "497",
    "majorStars": [
      "Alpha Scorpii",
      "Beta Scorpii",
      "Delta Scorpii",
      "Lambda Scorpii",
      "Theta Scorpii"
    ]
  },
  {
    "name": "Taurus",
    "sky": "northern",
    "animal": "the Bull",
    "season": "Spring",
    "squareDegrees": "797",
    "majorStars": [
      "Alpha Tauri",
      "Beta Tauri",
      "Epsilon Tauri",
      "Lambda Tauri",
      "Zeta Tauri"
    ]
  },
  {
    "name": "Virgo",
    "sky": "southern",
    "season": "Summer",
    "squareDegrees": "1294",
    "majorStars": [
      "Alpha Virginis",
      "Beta Virginis",
      "Delta Virginis",
      "Epsilon Virginis",
      "Gamma Virginis"
    ]
  }
]

const stars = [
  {
    "name": "Alpha Arietis",
    "aka": "Hamal",
    "constellation": "Aries",
    "apparentMagnitude": "2.00"
  },
  {
    "name": "Alpha Cancri",
    "aka": "Acubens",
    "constellation": "Cancer",
    "apparentMagnitude": "4.20"
  },
  {
    "name": "Alpha Geminorum",
    "aka": "Castor",
    "constellation": "Gemini",
    "apparentMagnitude": "1.58"
  },
  {
    "name": "Alpha Leonis",
    "aka": "Regulus",
    "constellation": "Leo",
    "apparentMagnitude": "1.35"
  },
  {
    "name": "Alpha Librae",
    "aka": "Zubenelgenubi",
    "constellation": "Libra",
    "apparentMagnitude": "5.15"
  },
  {
    "name": "Alpha Tauri",
    "aka": "Aldebaran",
    "constellation": "Taurus",
    "apparentMagnitude": ".86"
  },
  {
    "name": "Alpha Virginis",
    "aka": "Spica",
    "constellation": "Virgo",
    "apparentMagnitude": "1.04"
  },
  {
    "name": "Beta Arietis",
    "aka": "Sheratan",
    "constellation": "Aries",
    "apparentMagnitude": "2.66"
  },
  {
    "name": "Beta Cancri",
    "aka": "Al Tarf",
    "constellation": "Cancer",
    "apparentMagnitude": "3.5"
  },
  {
    "name": "Beta Geminorum",
    "aka": "Pollux",
    "constellation": "Gemini",
    "apparentMagnitude": "1.14"
  },
  {
    "name": "Beta Leonis",
    "aka": "Denebola",
    "constellation": "Leo",
    "apparentMagnitude": "2.11"
  },
  {
    "name": "Beta Librae",
    "aka": "Zubeneschamali",
    "constellation": "Libra",
    "apparentMagnitude": "2.61"
  },
  {
    "name": "Beta Tauri",
    "aka": "Elnath",
    "constellation": "Taurus",
    "apparentMagnitude": "1.65"
  },
  {
    "name": "Beta Virginis",
    "aka": "Zavijava",
    "constellation": "Virgo",
    "apparentMagnitude": "3.60"
  },
  {
    "name": "Delta Arietis",
    "aka": "Botein",
    "constellation": "Aries",
    "apparentMagnitude": "4.35"
  },
  {
    "name": "Delta Cancri",
    "aka": "Asellus Australis",
    "constellation": "Cancer",
    "apparentMagnitude": "3.94"
  },
  {
    "name": "Delta Leonis",
    "aka": "Zosma",
    "constellation": "Leo",
    "apparentMagnitude": "2.56"
  },
  {
    "name": "Delta Virginis",
    "aka": "Auva",
    "constellation": "Virgo",
    "apparentMagnitude": "3.32"
  },
  {
    "name": "Epsilon Arietis",
    "constellation": "Aries",
    "apparentMagnitude": "4.63"
  },
  {
    "name": "Epsilon Geminorum",
    "aka": "Mebsuta",
    "constellation": "Gemini",
    "apparentMagnitude": "3.06"
  },
  {
    "name": "Epsilon Tauri",
    "aka": "Ain",
    "constellation": "Taurus",
    "apparentMagnitude": "3.53"
  },
  {
    "name": "Epsilon Virginis",
    "aka": "Vindemiatrix",
    "constellation": "Virgo",
    "apparentMagnitude": "2.83"
  },
  {
    "name": "Gamma Arietis",
    "aka": "Mesarthim",
    "constellation": "Aries",
    "apparentMagnitude": "3.86"
  },
  {
    "name": "Gamma Cancri",
    "aka": "Asellus Borealis",
    "constellation": "Cancer",
    "apparentMagnitude": "4.66"
  },
  {
    "name": "Gamma Geminorum",
    "aka": "Alhena",
    "constellation": "Gemini",
    "apparentMagnitude": "1.91"
  },
  {
    "name": "Gamma Leonis",
    "aka": "Algieba",
    "constellation": "Leo",
    "apparentMagnitude": "2.28"
  },
  {
    "name": "Gamma Virginis",
    "aka": "Porrima",
    "constellation": "Virgo",
    "apparentMagnitude": "2.74"
  },
  {
    "name": "HD 140283",
    "aka": "Methuselah",
    "constellation": "Libra",
    "apparentMagnitude": "7.22"
  },
  {
   "name": "Lambda Tauri",
   "aka": "Pectus Tauri",
   "constellation": "Taurus",
   "apparentMagnitude": "3.47"
  },
  {
    "name": "Mu Geminorum",
    "aka": "Tejat Posterior",
    "constellation": "Gemini",
    "apparentMagnitude": "2.86"
  },
  {
    "name": "Sigma Librae",
    "aka": "Brachium",
    "constellation": "Libra",
    "apparentMagnitude": "3.29"
  },
  {
    "name": "Theta Leonis",
    "aka": "Chort",
    "constellation": "Leo",
    "apparentMagnitude": "3.32"
  },
  {
    "name": "Upsilon Librae",
    "constellation": "Libra",
    "apparentMagnitude": "3.63"
  },
  {
    "name": "Zeta Cancri",
    "aka": "Tegmine",
    "constellation": "Cancer",
    "apparentMagnitude": "4.67"
  },
  {
    "name": "Zeta Tauri",
    "aka": "Tianguan",
    "constellation": "Taurus",
    "apparentMagnitude": "3.01"
  }
]

module.exports = {
  constellations,
  stars
}