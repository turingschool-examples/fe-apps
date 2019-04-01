const highestGrossingFranchises = [
  {
    id: 1,
    title:"Pokémon",
    initialRelease:1996,
    lifeTimeRevenue:"$70 Billion",
    revenueBreakdown: {
        JapanRetail:"$4.51 billion",
        OverSeasRetail:"$9.265 billion",
        mobileGames:"$3.31 billion",
      },
    franchiseOwner:"Nintendo",
    platformOfOrigin: "Game Boy"
  },

  {
    id: 2,
    title:"Mario",
    initialRelease: 1981,
    lifeTimeRevenue:"$29.6 billion",
    revenueBreakdown:[
      {
        title:"Super Mario",
        revenue:"$15.7 billion"
      },
      {
        title: "Donkey Kong",
        revenue:"$6.3 // BUG: illion",
      },

      {
        title:"Mario Kart",
        revenue:"$5.2 billion",
      }
    ],
    franchiseOwner:"Nintendo",
    platformOfOrigin:"Arcade"
  },

  {
    id: 3,
    title:"Dungeon Fighter Online",
    initialRelease: 2005,
    lifeTimeRevenue: "$11.8 billion",
    franchiseOwner:"Neople",
    platformOfOrigin:"PC"

  },

  {
    id: 4,
    title:"Warcraft",
    initialRelease: 1994,
    lifeTimeRevenue:"$10.6 billion",
    revenueBreakdown:[
      {
        title:"Origional Trilogy",
        revenue:"$236 million"
      },

      {
        title: "World of Warcraft",
        revenue:"$9.3 billion"
      },

      {
        title:"HearthStone",
        revenue:"$1 billion"
      },
    ],
    franchiseOwner:"Blizzard Entertainment",
    platformOfOrigin:"PC"
  },

  {
    id: 5,
    title:"Street Fighter",
    initialRelease:1987,
    lifeTimeRevenue:"$11.2 billion",
    franchiseOwner:"Capcom",
    platformOfOrigin:"Arcade"
  },

  {
    id: 6,
    title:"Pac-Man",
    initialRelease:1980,
    lifeTimeRevenue:"$14.1 billion",
    revenueBreakdown:[
      {
        title:"Pac-Man",
        revenue:"$12.8 billion"
      },
      {
        title:"Ms. Pac-Man",
        revenue:"1.2 billion"
      },
      {
        title:"Other Games",
        revenue:"97 million"
      }
    ],
    franchiseOwner:"Namco Entertainment",
    platformOfOrigin:"Arcade"
  },

  {
    id: 7,
    title:"Space Invaders",
    initialRelease:1978,
    lifeTimeRevenue:"$13.9 billion",
    franchiseOwner:"Taito",
    platformOfOrigin:"Arcade"
  },

  {
    id: 8,
    title:"Call of Duty",
    initialRelease:2003,
    lifeTimeRevenue:"$17 Billion",
    franchiseOwner:"Activision/ Blizzard Entertainment",
    platformOfOrigin:["PC", "PS3", "Xbox360"]
  },

  {
    id: 9,
    title:"Clash of Clans",
    initialRelease: 2012,
    lifeTimeRevenue:"$6 billion",
    franchiseOwner:"Supercell",
    platformOfOrigin: "Mobile"
  },

  {
    id: 10,
    title:"Clash Royale",
    initialRelease: 2016,
    lifeTimeRevenue:"$2 billion",
    franchiseOwner:"Supercell",
    platformOfOrigin: "Mobile"
  },

  {
    id: 11,
    title: "Resident Evil",
    initialRelease:1996,
    lifeTimeRevenue: "$3.3 billion",
    franchiseOwner:"Capcom",
    platformOfOrigin:"PlayStation"
  },

  {
    id:12,
    title:"Grand Theft Auto",
    initialRelease: 1997,
    lifeTimeRevenue:"$9.3 billion",
    franchiseOwner:"Rockstar Games",
    platformOfOrigin:"PC"
  },

  {
    id:13,
    title:"Honor of Kings",
    initialRelease:2015,
    lifeTimeRevenue:"$6.3 billion",
    franchiseOwner:"Tencent Games",
    platformOfOrigin:"Mobile"
  },

  {
    id:14,
    title:"Dragon Ball",
    initialRelease:1986,
    lifeTimeRevenue:"$5.2 billion",
    franchiseOwner:"Namco Entertainment",
    platformOfOrigin:"Super Cassette Vision"
  },

  {
    id:15,
    title:"Final Fantasy".
    initialRelease: 1987,
    lifeTimeRevenue:"$10 billion",
    franchiseOwner:"Square Enix",
    platformOfOrigin:"Nintendo Entertainment System"
  },

  {
    id:16,
    title:"Minecraft",
    initialRelease: 2011,
    lifeTimeRevenue:"$2.2 billion",
    franchiseOwner:"Mojang",
    platformOfOrigin:["PC", "Mac"]
  },

  {
    id:17,
    title:"Sonic the Hedgehog",
    initialRelease:1991,
    lifeTimeRevenue:"$6.2 billion",
    franchiseOwner:"Sega",
    platformOfOrigin:"Sega Mega Drive"
  },

  {
    id:18,
    title:"The Legend of Zelda",
    initialRelease:1986,
    lifeTimeRevenue:"$3.2 billion",
    revenueBreakdown:{
      Japan:"$788 million",
      Overseas:"$1.9 billion"
    },
    franchiseOwner:"Nintendo",
    platformOfOrigin:"Famicon Disk System"
  },

  {
    id:19,
    title:"Skylanders",
    initialRelease:2011,
    lifeTimeRevenue:"$3.5 billion",
    franchiseOwner:"Activision",
    platformOfOrigin:"Wii"
  },

  {
    id:20,
    title:"StarCraft",
    initialRelease:1998,
    lifeTimeRevenue:"$1 billion",
    franchiseOwner:"Blizzard Entertainment",
    platformOfOrigin:"PC"
  },

  {
    id:21,
    title:"Overwatch",
    initialRelease:2016,
    lifeTimeRevenue:"$1 billion",
    franchiseOwner:"Blizzard Entertainment",
    platformOfOrigin:["PC", "PS4", "Xbox One"]
  },

  {
    id:22,
    title:"Heros of the Storm",
    initialRelease:2015,
    lifeTimeRevenue:"$1 billion",
    franchiseOwner:"Blizzard Entertainment",
    platformOfOrigin:["PC", "Mac"]
  },

  {
    id:23,
    title:"Heros of the Storm",
    initialRelease:2015,
    lifeTimeRevenue:"$1 billion",
    franchiseOwner:"Blizzard Entertainment",
    platformOfOrigin:"PC"
  },

  {
    id:24,
    title:"Halo",
    initialRelease:2001,
    lifeTimeRevenue:"$5 billion",
    franchiseOwner:"Microsoft",
    platformOfOrigin:"Xbox"
  },

  {
    id:25,
    title:"Metal Gear",
    initialRelease:1987,
    lifeTimeRevenue:"$2.5 billion",
    franchiseOwner:"Konami",
    platformOfOrigin:"MSX2"
  },

  {
    id:26,
    title:"Guitar Hero",
    initialRelease:2005,
    lifeTimeRevenue:"$2 billion",
    franchiseOwner:"Activision",
    platformOfOrigin:"PlayStation 2"
  },

  {
    id:27,
    title:"The Sims",
    initialRelease:2000,
    lifeTimeRevenue:"$2.5 billion",
    franchiseOwner:"Electronic Arts",
    platformOfOrigin:"PC"
  },

  {
    id:28,
    title:"Super Smash Bros.",
    initialRelease:1999,
    lifeTimeRevenue:"$2.7 billion",
    franchiseOwner:"Nintendo",
    platformOfOrigin:"Nintendo 64"
  },

  {
    id:29,
    title:"Mortal Kombat",
    initialRelease:1992,
    lifeTimeRevenue:"$1.8 billion",
    franchiseOwner:"Warner Bros. Interactive Entertainment",
    platformOfOrigin:"Arcade"
  },

  {
    id:30,
    title:"League of Legends",
    initialRelease:2009,
    lifeTimeRevenue:"$8.3 billion",
    franchiseOwner:"Riot Games",
    platformOfOrigin:["PC", "Mac"]
  }
]

const topGames2018 = [
  {
    id:1,
    title:"Red Dead Redemption 2",
    genre:["Action/Adventure", "Shooter", "RPG"],
    developer:"Rockstar Games",
    publisher:"Rockstar Games",
    openingWeekend:"$725 million",
    platforms:["PlatStation 4", "Xbox One"]
  },

  {
    id:2,
    title:"Call of Duty: Black Ops 4",
    genre:["First Person Shooter", "Battle Royale"],
    developer:"Treyarch",
    publisher:"Activision",
    openingWeekend:"$500 million",
    platforms:["PC", "PlatStation 4", "Xbox One"],
  },

  {
    id:3,
    title:"NBA 2K19",
    genre:"Sports",
    developer:"Visual Concepts",
    publisher:"2k Sports",
    openingWeekend:"$90 million",
    platforms:["PC", "Nintendo Switch", "PlatStation 4", "Xbox One", "Andriod", "iOS"]
  },

  {
    id:4,
    title:"Madden NFL 19",
    genre:"Sports",
    developer:"EA Tiburon",
    publisher:"EA Sports",
    platforms:["PC", "PlatStation 4", "Xbox One", "Mac OS"]
  },

  {
    id:5,
    title:"Super Smash Bros. Ultimate",
    genre:"Fighting",
    developer:"Namco Studios",
    publisher:"Nintendo",
    openingWeekend:"$522 million",
    platforms:"Nintendo Switch"
  },

  {
    id:6,
    title:"Marvel’s Spider-Man",
    genre:"Action-adventure",
    openingWeekend:"$198 million",
    developer:"Insomniac Games",
    publisher:"Sony Interactive Entertainment",
    platforms:"PlatStation 4"
  },

  {
    id:7,
    title:"Far Cry 5",
    genre:["Action-Adventure", "first-person shooter"],
    developer:"Ubisoft Montreal",
    publisher:"Ubisoft",
    openingWeekend:"$310 million",
    platforms:["PC", "PlayStation 4", "Xbox One"]
  },

  {
    id:8,
    title:"God of War",
    genre:"Action/Adventure",
    developer:"Santa Monica Studio",
    publisher:"Sony Interactive Entertainment",
    openingWeekend:"$180 million",
    platforms:"PlayStation 4"
  },

  {
    id:9,
    title:"Monster Hunter: World",
    genre:"Action role-playing",
    developer:"Capcom",
    publisher:"Capcom",
    openingWeekend:"$30 million",
    platforms:["PlatStation 4", "Xbox One", "PC"]
  },

  {
  id:10,
  title:"Assassin's Creed Odyssey",
  genre:"Role Playing",
  developer:"Ubisoft Quebec",
  publisher:"Ubisoft",
  platforms:["PC", "PlatStation 4", "Xbox One", "Nintendo Switch", "Stadia"]
  }
]

module.exports = {
  topGames2018,
  highestGrossingFranchisesls

}
