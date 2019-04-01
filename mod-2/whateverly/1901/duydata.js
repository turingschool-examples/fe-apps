const wowCapitals = [
    {
      "capital": "Darnassus",
      "race": "Night Elf",
      "faction": "The Alliance",
      "raceId": 2
    },
    {
      "capital": "Exodar",
      "race": "Draenei",
      "faction": "The Alliance",
      "raceId": 3
    },
    {
      "capital": "IronForge",
      "race": "Gnome",
      "faction": "The Alliance",
      "raceId": 12
    },
    {
      "capital": "IronForge",
      "race": "Dwarf",
      "faction": "The Alliance",
      "raceId": 1
    },
    {
      "capital": "Stormwind City",
      "race": "Human",
      "faction": "The Alliance",
      "raceId": 4
    },
    {
      "capital": "Gilneas",
      "race": "Worgen",
      "faction": "The Alliance",
      "raceId": 5
    },
    {
      "capital": "Orgrimmar",
      "race": "Orc",
      "faction": "The Horde",
      "raceId": 6
    },
    {
      "capital": "Silvermoon City",
      "race": "Blood Elf",
      "faction": "The Horde",
      "raceId": 7
    },
    {
      "capital": "Undercity",
      "race": "Undead",
      "faction": "The Horde",
      "raceId": 8
    },
    {
      "capital": "Thunder Bluff",
      "race": "Tauren",
      "faction": "The Horde",
      "raceId": 9
    },
    {
      "capital": "Orgrimmar",
      "race": "Troll",
      "faction": "The Horde",
      "raceId": 10
    },
    {
      "capital": "Orgrimmar",
      "race": "Goblin",
      "faction": "The Horde",
      "raceId": 11
    }
  ];

  const wowZones = [
    {  
      "name": "Dun Morogh",
      "affiliation": "The Alliance",
      "raceIdsPresent": [1,12],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Elwynn Forest",
      "affiliation": "The Alliance",
      "raceIdsPresent": [1,4,12],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Eversong Woods",
      "affiliation": "The Horde",
      "raceIdsPresent": [7,10],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Tirisfal Glades",
      "affiliation": "The Horde",
      "raceIdsPresent": [6,8],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Westfall",
      "affiliation": "The Alliance",
      "raceIdsPresent": [4],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Ghostlands",
      "affiliation": "The Horde",
      "raceIdsPresent": [7],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Loch Modan",
      "affiliation": "The Alliance",
      "raceIdsPresent": [1,12],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Silverpine Forest",
      "affiliation": "The Horde",
      "raceIdsPresent": [6,8],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Redridge Mountains",
      "affiliation": "The Alliance",
      "raceIdsPresent": [1,4],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Duskwood",
      "affiliation": "The Alliance",
      "raceIdsPresent": [1,4,5],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Hillsbrad Foothills",
      "affiliation": "The Horde",
      "raceIdsPresent": [6,8,11],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Wetlands",
      "affiliation": "The Alliance",
      "raceIdsPresent": [2,3,5],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Echo Isles",
      "affiliation": "The Horde",
      "raceIdsPresent": [10],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Azuremyst Isle",
      "affiliation": "The Alliance",
      "raceIdsPresent": [1,2,3,4,12],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Durotar",
      "affiliation": "The Horde",
      "raceIdsPresent": [6,10,11],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Mulgore",
      "affiliation": "The Horde",
      "raceIdsPresent": [6,9,10,11],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Teldrassil",
      "affiliation": "The Horde",
      "raceIdsPresent": [2,4,5],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Azshara",
      "affiliation": "The Horde",
      "raceIdsPresent": [6,7,11],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Bloodmyst Isle",
      "affiliation": "The Alliance",
      "raceIdsPresent": [3],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Darkshore",
      "affiliation": "The Alliance",
      "raceIdsPresent": [1,2,4,5],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Northern Barrens",
      "affiliation": "The Horde",
      "raceIdsPresent": [6,9,11],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Ashenvale",
      "affiliation": "Contested",
      "raceIdsPresent": [2,3,4,5,6,10],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Stonetalon Mountains",
      "affiliation": "Contested",
      "raceIdsPresent": [],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Desolace",
      "affiliation": "Contested",
      "raceIdsPresent": [2,4,5,6,9,11],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Feralas",
      "affiliation": "Contested",
      "raceIdsPresent": [2,5,6,9],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Silithus",
      "affiliation": "Contested",
      "raceIdsPresent": [1,2,4,12,6,9,10,11],
      "continent": 'Kalimdor'
    },
    {  
      "name": "Swamp of Sorrows",
      "affiliation": "Contested",
      "raceIdsPresent": [3,4,6,10,11],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Blasted Lands",
      "affiliation": "Contested",
      "raceIdsPresent": [1,2,4,5,6,7,8,11],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Deadwind Pass",
      "affiliation": "Contested",
      "raceIdsPresent": [4,8],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Western Plaguelands",
      "affiliation": "Contested",
      "raceIdsPresent": [2,4,8,9],
      "continent": "Eastern Kingdoms"
    },
    {  
      "name": "Eastern Plaguelands",
      "affiliation": "Contested",
      "raceIdsPresent": [2,4,8],
      "continent": "Eastern Kingdoms"
    }
  ];