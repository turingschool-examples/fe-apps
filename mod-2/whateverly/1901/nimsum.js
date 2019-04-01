const rockets = {
  "title": "Orbital Launch Rocket Systems",
  "rocketsByOrigin": {
    "USA": [
      "Alpha",
      "Antares",
      "Atlas V",
      "Delta IV Heavy",
      "Delta IV",
      "Electron",
      "Falcon 9 B5",
      "Falcon Heavy",
      "LauncherOne",
      "Minotaur",
      "New Glenn",
      "OmegA",
      "Pegasus",
      "Space Launch System ",
      "Starship and Super Heavy (formerly BFR)",
      "Vector",
      "Vulcan"
    ],
    "China": [
      "Hyperbola",
      "Kuaizhou",
      "Long March 5",	  
      "New Line 1 ",
      "Zhuque"
    ],
    "Russia": [
      "Proton-M / M+",	 
      "Angara",
      "Rokot",
      "Soyuz-2",
      "Yenisei"
    ],
    "Europe": [
      "Ariane-5",
      "Vega"
    ],
    "Japan": [
      "H-IIB",
      "H3"
    ],
    "India": [
      "GSLV",
      "PSLV"
    ]
  }
}

const rocketInformation = [
  { 
    "name": "Alpha",
    "manufacturer": "Firefly Aerospace",
    "costToLaunch": "15 million",
    "size": {
      "heightInFeet":	"95",
      "diameterInFeet":	"6",
      "massInLbs":	"119,000"
    },
    "payloadCapacity": {
      "LEOInLbs": "2200"
    }
  }, 
  {
    "name": "Angara",
    "manufacturer": "Khrunichev, KBKhA",
    "costToLaunch": "Government Owned",
    "size": {
      "heightInFeet": "210",
      "diameterInFeet": "29",
      "massInLbs": "1740000"
    },
    "payloadCapacity": {
      "LEOInLbs": "54000",
      "GTOInLbs": "16500"
    }
  }, 
  {
    "name": "Angara",
    "manufacturer": "Khrunichev, KBKhA",
    "costToLaunch": "Government Owned",
    "size": {
      "heightInFeet": "210",
      "diameterInFeet": "29",
      "massInLbs": "1740000"
    },
    "payloadCapacity": {
      "LEOInLbs": "54000",
      "GTOInLbs": "16500"
    }
  },
  {
    "name": "Antares",
    "manufacturer": "Northrop Grumman",
    "costToLaunch": "80 million",
    "size": {
      "heightInFeet": "133",
      "diameterInFeet": "13",
      "massInLbs": "657000"
    },
    "payloadCapacity": {
      "LEOInLbs": "18000"
    }
  }, 
  {
    "name": "Ariane-5",
    "manufacturer": "Airbus Defence and Space",
    "costToLaunch": "220 million ",
    "size": {
      "heightInFeet": "171",
      "diameterInFeet": "18",
      "massInLbs": "1713000"
    },
    "payloadCapacity": {
      "LEOInLbs": "44000",
      "GTOInLbs": "24504"
    }
  },
  {
    "name": "Atlas V",
    "manufacturer": "United Launch Alliance",
    "costToLaunch": "110 million",
    "size": {
      "heightInFeet": "191",
      "diameterInFeet": "12.5",
      "massInLbs": "737400"
    },
    "payloadCapacity": {
      "LEOInLbs": "45240",
      "GTOInLbs": "19620"
    }
  }, 
  {
    "name": "Delta IV Heavy",
    "manufacturer": "United Launch Alliance",
    "costToLaunch": "350 million",
    "size": {
      "heightInFeet": "236",
      "diameterInFeet": "16",
      "massInLbs": "1616000"
    },
    "payloadCapacity": {
      "LEOInLbs": "63470",
      "GTOInLbs": "31350"
    }
  }, 
  {
    "name": "Delta IV M+",
    "manufacturer": "United Launch Alliance",
    "costToLaunch": "164 million",
    "size": {
      "heightInFeet": "207 ft",
      "diameterInFeet": "16",
      "massInLbs": "550100"
    },
    "payloadCapacity": {
      "LEOInLbs": "13140",
      "GTOInLbs": "6390"
    }
  }, 
  {
    "name": "Electron",
    "manufacturer": "Rocket Lab",
    "costToLaunch": "6 million",
    "size": {
      "heightInFeet": "56",
      "diameterInFeet": "3.9",
      "massInLbs": "27600"
    },
    "payloadCapacity": {
      "SSOInLbs": "495"
    }
  }, 
  {
    "name": "Falcon 9 B5",
    "manufacturer": "SpaceX",
    "costToLaunch": "62 million",
    "size": {
      "heightInFeet": "230",
      "diameterInFeet": "12",
      "massInLbs": "1210457"
    },
    "payloadCapacity": {
      "LEOInLbs": "50300",
      "GTOInLbs": "18300"
    },
    "partiallyReusable": "true"
  }, 
  {
    "name": "Falcon Heavy",
    "manufacturer": "SpaceX",
    "costToLaunch": "150 million",
    "size": {
      "heightInFeet": "230",
      "diameterInFeet": "12",
      "massInLbs": "3132301"
    },
    "payloadCapacity": {
      "LEOInLbs": "140700",
      "GTOInLbs": "58900"
    },
    "partiallyReusable": "true"
  }, 
  {
    "name": "GSLV",
    "manufacturer": "ISRO",
    "costToLaunch": "47 million",
    "size": {
      "heightInFeet": "161.2",
      "diameterInFeet": "9.2",
      "massInLbs": "914370"
    },
    "payloadCapacity": {
      "LEOInLbs": "11000",
      "SSOInLbs": "6000"
    }
  }, 
  {
    "name": "Hyperbola",
    "manufacturer": "Beijing Interstellar Glory Space Technology Ltd.",
    "underDevelopment": "true"
  }, 
  {
    "name": "H-IIB",
    "manufacturer": "Mitsubishi Heavy Industries",
    "costToLaunch": "112.5 million",
    "size": {
      "heightInFeet": "186",
      "diameterInFeet": "17",
      "massInLbs": "1171000"
    },
    "payloadCapacity": {
      "LEOInLbs": "36400",
      "SSOInLbs": "18000"
    }
  }, 
  {
    "name": "H3",
    "manufacturer": "Mitsubishi Heavy Industries",
    "costToLaunch": "50 million",
    "underDevelopment": "true",
    "size": {
      "heightInFeet": "207",
      "diameterInFeet": "17.3",
      "massInLbs": "1265000"
    },
    "payloadCapacity": {
      "GTOInLbs": "14300"
    }
  }, 
  {
    "name": "Kuaizhou",
    "manufacturer": "ExPace",
    "costToLaunch": "6 million",
    "size": {
      "heightInFeet": "64",
      "diameterInFeet": "4.6",
      "massInLbs": "66138"
    },
    "payloadCapacity": {
      "LEOInLbs": "660",
      "SSOInLbs": "550"
    }
  }, 
  {
    "name": "LauncherOne",
    "manufacturer": "Virgin Orbit",
    "costToLaunch": "12 million", 
    "size": {
      "heightInFeet": "52",
      "diameterInFeet": "5.2"
    },
    "payloadCapacity": {
      "SSOInLbs": "1100"
    }
  }, 
  {
    "name": "Long March 5",
    "manufacturer": "CALT",
    "costToLaunch": "Government Owned",
    "size": {
      "heightInFeet": "187",
      "diameterInFeet": "16",
      "massInLbs": "1911000"
    },
    "payloadCapacity": {
      "LEOInLbs": "55000",
      "GTOInLbs": "31000"
    }
  },   
  {
    "name": "Minotaur",
    "manufacturer": "Orbital Sciences, Orbital ATK, Northrop Grumman",
    "costToLaunch": "50 million",
    "size": {
      "heightInFeet": "91.5",
      "diameterInFeet": "7.7",
      "massInLbs": "160000"
    },
    "payloadCapacity": {
      "LEOInLbs": "2910"
    }
  }, 
  {
    "name": "New Glenn",
    "manufacturer": "Blue Origin",
    "underDevelopment": "true",
    "size": {
      "heightInFeet": "270",
      "diameterInFeet": "23"
    },
    "payloadCapacity": {
      "LEOInLbs": "99000",
      "GTOInLbs": "29000"
    },
    "partiallyReusable": "true"
  }, 
  {
    "name": "New Line 1",
    "manufacturer": "Link Space Aerospace Technology Inc.",
    "underDevelopment": "true",
    "size": {
      "heightInFeet": "66",
      "diameterInFeet": "5.9",
      "massInLbs": "72752"
    },
    "payloadCapacity": {
      "SSOInLbs": "440"
    }
  },  
  {
    "name": "OmegA",
    "manufacturer": "Northrop Gumman",
    "underDevelopment": "true",
    "size": {
      "heightInFeet": "196.3",
      "diameterInFeet": "17.2"
    },
    "payloadCapacity": {
      "LEOInLbs": "22300",
      "GTOInLbs": "17200"
    }
  }, 
  {
    "name": "Pegasus",
    "manufacturer": "Northrop Gumman",
    "costToLaunch": "40 million",
    "size": {
      "heightInFeet": "58",
      "diameterInFeet": "4.2",
      "massInLbs": "50990"
    },
    "payloadCapacity": {
      "LEOInLbs": "977"
    }
  }, 
  {
    "name": "Proton-M / M+",
    "manufacturer": "Khrunichev",
    "costToLaunch": "65 million",
    "size": {
      "heightInFeet": "191",
      "diameterInFeet": "24",
      "massInLbs": "1554000"
    },
    "payloadCapacity": {
      "LEOInLbs": "51000",
      "GTOInLbs": "15260"
    }
  },	
  {
    "name": "PSLV",
    "manufacturer": "ISRO",
    "costToLaunch": "31 million",
    "size": {
      "heightInFeet": "144",
      "diameterInFeet": "9.2",
      "massInLbs": "710000"
    },
    "payloadCapacity": {
      "LEOInLbs": "8400",
      "GTOInLbs": "2600"
    }
  },  
  {
    "name": "Rokot",
    "manufacturer": "Eurockot Launch Services",
    "costToLaunch": "41.8 million",
    "size": {
      "heightInFeet": "95",
      "diameterInFeet": "8.3",
      "massInLbs": "236000"
    },
    "payloadCapacity": {
      "LEOInLbs": "4300",
      "GTOInLbs": "2600"
    }
  },
  {
    "name": "Soyuz-2",
    "manufacturer": "TsSKB-Progress",
    "costToLaunch": "80 million",
    "size": {
      "heightInFeet": "152",
      "diameterInFeet": "9.7",
      "massInLbs": "688000"
    },
    "payloadCapacity": {
      "LEOInLbs": "18100",
      "GTOInLbs": "7170"
    }
  },
  {
    "name": "Space Launch System",
    "manufacturer": "Boeing, United Launch Alliance, Northrop Grumman, Aerojet Rocketdyne",
    "underDevelopment": "true",
    "size": {
      "heightInFeet": "365",
      "diameterInFeet": "27.6"
    },
    "payloadCapacity": {
      "LEOInLbs": "209000"
    }
  }, 
  {
    "name": "Starship and Super Heavy (formerly BFR)",
    "manufacturer": "SpaceX",
    "underDevelopment": "true",
    "size": {
      "heightInFeet": "387",
      "diameterInFeet": "30",
      "massInLbs": "9700000"
    },
    "payloadCapacity": {
      "LEOInLbs": "220000"
    }
  }, 
  {
    "name": "Vector",
    "manufacturer": "Vector Launch",
    "costToLaunch": "4.5 million",
    "size": {
      "heightInFeet": "64",
      "diameterInFeet": "3.9",
      "massInLbs": "26260"
    },
    "payloadCapacity": {
      "LEOInLbs": "640",
      "SSOInLbs": "209"
    }
  }, 
  {
    "name": "Vulcan",
    "manufacturer": "United Launch Alliance",
    "underDevelopment": "true",
    "size": {
      "heightInFeet": "191",
      "diameterInFeet": "18",
      "massInLbs": "1205300"
    },
    "payloadCapacity": {
      "LEOInLbs": "76900",
      "GTOInLbs": "35900"
    },
    "partiallyReusable": "true"
  }, 
  {
    "name": "Yenisei",
    "manufacturer": "RKK Energia, JSC SRC Progress",
    "underDevelopment": "true",
    "payloadCapacity": {
      "LEOInLbs": "227000"
    }
  },
  {
    "name": "Vega",
    "manufacturer": "Avio",
    "costToLaunch": "37 million",
    "size": {
      "heightInFeet": "98",
      "diameterInFeet": "9.8",
      "massInLbs": "302000"
    },
    "payloadCapacity": {
      "SSOInLbs": "3200"
    }
  },
  {
    "name": "Zhuque",
    "manufacturer": "LandSpace",
    "underDevelopment": "true",
    "payloadCapacity": {
      "LEOInLbs": "8818",
      "SSOInLbs": "4409"
    }
  } 
]

module.exports {
  rockets,
  rocketInformation
}