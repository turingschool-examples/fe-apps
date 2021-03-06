const breweries = [
  {
    "FIELD1": 0,
    "name": "NorthGate Brewing ",
    "city": "Minneapolis",
    "state": "Minnesota"
  },
  {
    "FIELD1": 1,
    "name": "Against the Grain Brewery",
    "city": "Louisville",
    "state": "Kentucky"
  },
  {
    "FIELD1": 2,
    "name": "Jack's Abby Craft Lagers",
    "city": "Framingham",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 3,
    "name": "Mike Hess Brewing Company",
    "city": "San Diego",
    "state": "California"
  },
  {
    "FIELD1": 4,
    "name": "Fort Point Beer Company",
    "city": "San Francisco",
    "state": "California"
  },
  {
    "FIELD1": 5,
    "name": "COAST Brewing Company",
    "city": "Charleston",
    "state": "South Carolina"
  },
  {
    "FIELD1": 6,
    "name": "Great Divide Brewing Company",
    "city": "Denver",
    "state": "Colorado"
  },
  {
    "FIELD1": 7,
    "name": "Tapistry Brewing",
    "city": "Bridgman",
    "state": "Michigan"
  },
  {
    "FIELD1": 8,
    "name": "Big Lake Brewing",
    "city": "Holland",
    "state": "Michigan"
  },
  {
    "FIELD1": 9,
    "name": "The Mitten Brewing Company",
    "city": "Grand Rapids",
    "state": "Michigan"
  },
  {
    "FIELD1": 10,
    "name": "Brewery Vivant",
    "city": "Grand Rapids",
    "state": "Michigan"
  },
  {
    "FIELD1": 11,
    "name": "Petoskey Brewing",
    "city": "Petoskey",
    "state": "Michigan"
  },
  {
    "FIELD1": 12,
    "name": "Blackrocks Brewery",
    "city": "Marquette",
    "state": "Michigan"
  },
  {
    "FIELD1": 13,
    "name": "Perrin Brewing Company",
    "city": "Comstock Park",
    "state": "Michigan"
  },
  {
    "FIELD1": 14,
    "name": "Witch's Hat Brewing Company",
    "city": "South Lyon",
    "state": "Michigan"
  },
  {
    "FIELD1": 15,
    "name": "Founders Brewing Company",
    "city": "Grand Rapids",
    "state": "Michigan"
  },
  {
    "FIELD1": 16,
    "name": "Flat 12 Bierwerks",
    "city": "Indianapolis",
    "state": "Indiana"
  },
  {
    "FIELD1": 17,
    "name": "Tin Man Brewing Company",
    "city": "Evansville",
    "state": "Indiana"
  },
  {
    "FIELD1": 18,
    "name": "Black Acre Brewing Co.",
    "city": "Indianapolis",
    "state": "Indiana"
  },
  {
    "FIELD1": 19,
    "name": "Brew Link Brewing",
    "city": "Plainfield",
    "state": "Indiana"
  },
  {
    "FIELD1": 20,
    "name": "Bare Hands Brewery",
    "city": "Granger",
    "state": "Indiana"
  },
  {
    "FIELD1": 21,
    "name": "Three Pints Brewing",
    "city": "Martinsville",
    "state": "Indiana"
  },
  {
    "FIELD1": 22,
    "name": "Four Fathers Brewing ",
    "city": "Valparaiso",
    "state": "Indiana"
  },
  {
    "FIELD1": 23,
    "name": "Indiana City Brewing",
    "city": "Indianapolis",
    "state": "Indiana"
  },
  {
    "FIELD1": 24,
    "name": "Burn 'Em Brewing",
    "city": "Michigan City",
    "state": "Indiana"
  },
  {
    "FIELD1": 25,
    "name": "Sun King Brewing Company",
    "city": "Indianapolis",
    "state": "Indiana"
  },
  {
    "FIELD1": 26,
    "name": "Evil Czech Brewery",
    "city": "Mishawaka",
    "state": "Indiana"
  },
  {
    "FIELD1": 27,
    "name": "450 North Brewing Company",
    "city": "Columbus",
    "state": "Indiana"
  },
  {
    "FIELD1": 28,
    "name": "Taxman Brewing Company",
    "city": "Bargersville",
    "state": "Indiana"
  },
  {
    "FIELD1": 29,
    "name": "Cedar Creek Brewery",
    "city": "Seven Points",
    "state": "Texas"
  },
  {
    "FIELD1": 30,
    "name": "SanTan Brewing Company",
    "city": "Chandler",
    "state": "Arizona"
  },
  {
    "FIELD1": 31,
    "name": "Boulevard Brewing Company",
    "city": "Kansas City",
    "state": "Missouri"
  },
  {
    "FIELD1": 32,
    "name": "James Page Brewing Company",
    "city": "Stevens Point",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 33,
    "name": "The Dudes' Brewing Company",
    "city": "Torrance",
    "state": "California"
  },
  {
    "FIELD1": 34,
    "name": "Ballast Point Brewing Company",
    "city": "San Diego",
    "state": "California"
  },
  {
    "FIELD1": 35,
    "name": "Anchor Brewing Company",
    "city": "San Francisco",
    "state": "California"
  },
  {
    "FIELD1": 36,
    "name": "Figueroa Mountain Brewing Company",
    "city": "Buellton",
    "state": "California"
  },
  {
    "FIELD1": 37,
    "name": "Avery Brewing Company",
    "city": "Boulder",
    "state": "Colorado"
  },
  {
    "FIELD1": 38,
    "name": "Twisted X Brewing Company",
    "city": "Dripping Springs",
    "state": "Texas"
  },
  {
    "FIELD1": 39,
    "name": "Gonzo's BiggDogg Brewing",
    "city": "Kalamazoo",
    "state": "Michigan"
  },
  {
    "FIELD1": 40,
    "name": "Big Muddy Brewing",
    "city": "Murphysboro",
    "state": "Illinois"
  },
  {
    "FIELD1": 41,
    "name": "Lost Nation Brewing",
    "city": "East Fairfield",
    "state": "Vermont"
  },
  {
    "FIELD1": 42,
    "name": "Rising Tide Brewing Company",
    "city": "Portland",
    "state": "Maine"
  },
  {
    "FIELD1": 43,
    "name": "Rivertowne Brewing Company",
    "city": "Export",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 44,
    "name": "Revolution Brewing Company",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "FIELD1": 45,
    "name": "Tallgrass Brewing Company",
    "city": "Manhattan",
    "state": "Kansas"
  },
  {
    "FIELD1": 46,
    "name": "Sixpoint Craft Ales",
    "city": "Brooklyn",
    "state": "New York"
  },
  {
    "FIELD1": 47,
    "name": "White Birch Brewing",
    "city": "Hooksett",
    "state": "New Hampshire"
  },
  {
    "FIELD1": 48,
    "name": "Firestone Walker Brewing Company",
    "city": "Paso Robles",
    "state": "California"
  },
  {
    "FIELD1": 49,
    "name": "SweetWater Brewing Company",
    "city": "Atlanta",
    "state": "Georgia"
  },
  {
    "FIELD1": 50,
    "name": "Flying Mouse Brewery",
    "city": "Troutville",
    "state": "Virginia"
  },
  {
    "FIELD1": 51,
    "name": "Upslope Brewing Company",
    "city": "Boulder",
    "state": "Colorado"
  },
  {
    "FIELD1": 52,
    "name": "Pipeworks Brewing Company",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "FIELD1": 53,
    "name": "Bent Brewstillery",
    "city": "Roseville",
    "state": "Minnesota"
  },
  {
    "FIELD1": 54,
    "name": "Flesk Brewing Company",
    "city": "Lombard",
    "state": "Illinois"
  },
  {
    "FIELD1": 55,
    "name": "Pollyanna Brewing Company",
    "city": "Lemont",
    "state": "Illinois"
  },
  {
    "FIELD1": 56,
    "name": "BuckleDown Brewing",
    "city": "Lyons",
    "state": "Illinois"
  },
  {
    "FIELD1": 57,
    "name": "Destihl Brewery",
    "city": "Bloomington",
    "state": "Illinois"
  },
  {
    "FIELD1": 58,
    "name": "Summit Brewing Company",
    "city": "St. Paul",
    "state": "Minnesota"
  },
  {
    "FIELD1": 59,
    "name": "Latitude 42 Brewing Company",
    "city": "Portage",
    "state": "Michigan"
  },
  {
    "FIELD1": 60,
    "name": "4 Hands Brewing Company",
    "city": "Saint Louis",
    "state": "Missouri"
  },
  {
    "FIELD1": 61,
    "name": "Surly Brewing Company",
    "city": "Brooklyn Center",
    "state": "Minnesota"
  },
  {
    "FIELD1": 62,
    "name": "Against The Grain Brewery",
    "city": "Louisville",
    "state": "Kentucky"
  },
  {
    "FIELD1": 63,
    "name": "Crazy Mountain Brewing Company",
    "city": "Edwards",
    "state": "Colorado"
  },
  {
    "FIELD1": 64,
    "name": "SlapShot Brewing Company",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "FIELD1": 65,
    "name": "Mikerphone Brewing",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "FIELD1": 66,
    "name": "Freetail Brewing Company",
    "city": "San Antonio",
    "state": "Texas"
  },
  {
    "FIELD1": 67,
    "name": "3 Daughters Brewing",
    "city": "St Petersburg",
    "state": "Florida"
  },
  {
    "FIELD1": 68,
    "name": "Red Shedman Farm Brewery and Hop...",
    "city": "Mt. Airy",
    "state": "Maryland"
  },
  {
    "FIELD1": 69,
    "name": "Appalachian Mountain Brewery",
    "city": "Boone",
    "state": "North Carolina"
  },
  {
    "FIELD1": 70,
    "name": "Birdsong Brewing Company",
    "city": "Charlotte",
    "state": "North Carolina"
  },
  {
    "FIELD1": 71,
    "name": "Union Craft Brewing",
    "city": "Baltimore",
    "state": "Maryland"
  },
  {
    "FIELD1": 72,
    "name": "Atwater Brewery",
    "city": "Detroit",
    "state": "Michigan"
  },
  {
    "FIELD1": 73,
    "name": "Ale Asylum",
    "city": "Madison",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 74,
    "name": "Two Brothers Brewing Company",
    "city": "Warrenville",
    "state": "Illinois"
  },
  {
    "FIELD1": 75,
    "name": "Bent Paddle Brewing Company",
    "city": "Duluth",
    "state": "Minnesota"
  },
  {
    "FIELD1": 76,
    "name": "Bell's Brewery",
    "city": "Kalamazoo",
    "state": "Michigan"
  },
  {
    "FIELD1": 77,
    "name": "Blue Owl Brewing",
    "city": "Austin",
    "state": "Texas"
  },
  {
    "FIELD1": 78,
    "name": "Speakasy Ales & Lagers",
    "city": "San Francisco",
    "state": "California"
  },
  {
    "FIELD1": 79,
    "name": "Black Tooth Brewing Company",
    "city": "Sheridan",
    "state": "Wyoming"
  },
  {
    "FIELD1": 80,
    "name": "Hopworks Urban Brewery",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 81,
    "name": "Epic Brewing",
    "city": "Denver",
    "state": "Colorado"
  },
  {
    "FIELD1": 82,
    "name": "New Belgium Brewing Company",
    "city": "Fort Collins",
    "state": "Colorado"
  },
  {
    "FIELD1": 83,
    "name": "Sierra Nevada Brewing Company",
    "city": "Chico",
    "state": "California"
  },
  {
    "FIELD1": 84,
    "name": "Keweenaw Brewing Company",
    "city": "Houghton",
    "state": "Michigan"
  },
  {
    "FIELD1": 85,
    "name": "Brewery Terra Firma",
    "city": "Traverse City",
    "state": "Michigan"
  },
  {
    "FIELD1": 86,
    "name": "Grey Sail Brewing Company",
    "city": "Westerly",
    "state": "Rhode Island"
  },
  {
    "FIELD1": 87,
    "name": "Kirkwood Station Brewing Company",
    "city": "Kirkwood",
    "state": "Missouri"
  },
  {
    "FIELD1": 88,
    "name": "Goose Island Brewing Company",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "FIELD1": 89,
    "name": "Broad Brook Brewing LLC",
    "city": "East Windsor",
    "state": "Conneticut"
  },
  {
    "FIELD1": 90,
    "name": "The Lion Brewery",
    "city": "Wilkes-Barre",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 91,
    "name": "Madtree Brewing Company",
    "city": "Cincinnati",
    "state": "Ohio"
  },
  {
    "FIELD1": 92,
    "name": "Jackie O's Pub & Brewery",
    "city": "Athens",
    "state": "Ohio"
  },
  {
    "FIELD1": 93,
    "name": "Rhinegeist Brewery",
    "city": "Cincinnati",
    "state": "Ohio"
  },
  {
    "FIELD1": 94,
    "name": "Warped Wing Brewing Company",
    "city": "Dayton",
    "state": "Ohio"
  },
  {
    "FIELD1": 95,
    "name": "Blackrocks Brewery",
    "city": "Marquette",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 96,
    "name": "Catawba Valley Brewing Company",
    "city": "Morganton",
    "state": "North Carolina"
  },
  {
    "FIELD1": 97,
    "name": "Tröegs Brewing Company",
    "city": "Hershey",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 98,
    "name": "Mission Brewery",
    "city": "San Diego",
    "state": "California"
  },
  {
    "FIELD1": 99,
    "name": "Christian Moerlein Brewing Company",
    "city": "Cincinnati",
    "state": "Ohio"
  },
  {
    "FIELD1": 100,
    "name": "West Sixth Brewing",
    "city": "Lexington",
    "state": "Kentucky"
  },
  {
    "FIELD1": 101,
    "name": "Coastal Extreme Brewing Company",
    "city": "Newport",
    "state": "Rhode Island"
  },
  {
    "FIELD1": 102,
    "name": "King Street Brewing Company",
    "city": "Anchorage",
    "state": "Alaska"
  },
  {
    "FIELD1": 103,
    "name": "Beer Works Brewery",
    "city": "Lowell",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 104,
    "name": "Lone Tree Brewing Company",
    "city": "Lone Tree",
    "state": "Colorado"
  },
  {
    "FIELD1": 105,
    "name": "Four String Brewing Company",
    "city": "Columbus",
    "state": "Ohio"
  },
  {
    "FIELD1": 106,
    "name": "Glabrous Brewing Company",
    "city": "Pineland",
    "state": "Maine"
  },
  {
    "FIELD1": 107,
    "name": "Bonfire Brewing Company",
    "city": "Eagle",
    "state": "Colorado"
  },
  {
    "FIELD1": 108,
    "name": "Thomas Hooker Brewing Company",
    "city": "Bloomfield",
    "state": "Conneticut"
  },
  {
    "FIELD1": 109,
    "name": "Woodstock Inn, Station & Brewery",
    "city": "North Woodstock",
    "state": "New Hampshire"
  },
  {
    "FIELD1": 110,
    "name": "Renegade Brewing Company",
    "city": "Denver",
    "state": "Colorado"
  },
  {
    "FIELD1": 111,
    "name": "Mother Earth Brew Company",
    "city": "Vista",
    "state": "California"
  },
  {
    "FIELD1": 112,
    "name": "Black Market Brewing Company",
    "city": "Temecula",
    "state": "California"
  },
  {
    "FIELD1": 113,
    "name": "Vault Brewing Company",
    "city": "Yardley",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 114,
    "name": "Jailbreak Brewing Company",
    "city": "Laurel",
    "state": "Maryland"
  },
  {
    "FIELD1": 115,
    "name": "Smartmouth Brewing Company",
    "city": "Norfolk",
    "state": "Virginia"
  },
  {
    "FIELD1": 116,
    "name": "Base Camp Brewing Co.",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 117,
    "name": "Alameda Brewing",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 118,
    "name": "Southern Star Brewing Company",
    "city": "Conroe",
    "state": "Texas"
  },
  {
    "FIELD1": 119,
    "name": "Steamworks Brewing Company",
    "city": "Durango",
    "state": "Colorado"
  },
  {
    "FIELD1": 120,
    "name": "Horny Goat Brew Pub",
    "city": "Milwaukee",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 121,
    "name": "Cheboygan Brewing Company",
    "city": "Cheboygan",
    "state": "Michigan"
  },
  {
    "FIELD1": 122,
    "name": "Center of the Universe Brewing C...",
    "city": "Ashland",
    "state": "Virginia"
  },
  {
    "FIELD1": 123,
    "name": "Ipswich Ale Brewery",
    "city": "Ipswich",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 124,
    "name": "Griffin Claw Brewing Company",
    "city": "Birmingham",
    "state": "Michigan"
  },
  {
    "FIELD1": 125,
    "name": "Karbach Brewing Company",
    "city": "Houston",
    "state": "Texas"
  },
  {
    "FIELD1": 126,
    "name": "Uncle Billy's Brewery and Smokeh...",
    "city": "Austin",
    "state": "Texas"
  },
  {
    "FIELD1": 127,
    "name": "Deep Ellum Brewing Company",
    "city": "Dallas",
    "state": "Texas"
  },
  {
    "FIELD1": 128,
    "name": "Real Ale Brewing Company",
    "city": "Blanco",
    "state": "Texas"
  },
  {
    "FIELD1": 129,
    "name": "Straub Brewery",
    "city": "St Mary's",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 130,
    "name": "Shebeen Brewing Company",
    "city": "Wolcott",
    "state": "Conneticut"
  },
  {
    "FIELD1": 131,
    "name": "Stevens Point Brewery",
    "city": "Stevens Point",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 132,
    "name": "Weston Brewing Company",
    "city": "Weston",
    "state": "Missouri"
  },
  {
    "FIELD1": 133,
    "name": "Southern Prohibition Brewing Com...",
    "city": "Hattiesburg",
    "state": "MS"
  },
  {
    "FIELD1": 134,
    "name": "Minhas Craft Brewery",
    "city": "Monroe",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 135,
    "name": "Pug Ryan's Brewery",
    "city": "Dillon",
    "state": "Colorado"
  },
  {
    "FIELD1": 136,
    "name": "Hops & Grains Brewing Company",
    "city": "Austin",
    "state": "Texas"
  },
  {
    "FIELD1": 137,
    "name": "Sietsema Orchards and Cider Mill",
    "city": "Ada",
    "state": "Michigan"
  },
  {
    "FIELD1": 138,
    "name": "Summit Brewing Company",
    "city": "St Paul",
    "state": "Minnesota"
  },
  {
    "FIELD1": 139,
    "name": "Core Brewing & Distilling Company",
    "city": "Springdale",
    "state": "Arkansas"
  },
  {
    "FIELD1": 140,
    "name": "Independence Brewing Company",
    "city": "Austin",
    "state": "Texas"
  },
  {
    "FIELD1": 141,
    "name": "Cigar City Brewing Company",
    "city": "Tampa",
    "state": "Florida"
  },
  {
    "FIELD1": 142,
    "name": "Third Street Brewhouse",
    "city": "Cold Spring",
    "state": "Minnesota"
  },
  {
    "FIELD1": 143,
    "name": "Narragansett Brewing Company",
    "city": "Providence",
    "state": "Rhode Island"
  },
  {
    "FIELD1": 144,
    "name": "Grimm Brothers Brewhouse",
    "city": "Loveland",
    "state": "Colorado"
  },
  {
    "FIELD1": 145,
    "name": "Cisco Brewers",
    "city": "Nantucket",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 146,
    "name": "Angry Minnow",
    "city": "Hayward",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 147,
    "name": "Platform Beer Company",
    "city": "Cleveland",
    "state": "Ohio"
  },
  {
    "FIELD1": 148,
    "name": "Odyssey Beerwerks",
    "city": "Arvada",
    "state": "Colorado"
  },
  {
    "FIELD1": 149,
    "name": "Lonerider Brewing Company",
    "city": "Raleigh",
    "state": "North Carolina"
  },
  {
    "FIELD1": 150,
    "name": "Oakshire Brewing",
    "city": "Eugene",
    "state": "Oregon"
  },
  {
    "FIELD1": 151,
    "name": "Fort Pitt Brewing Company",
    "city": "Latrobe",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 152,
    "name": "Tin Roof Brewing Company",
    "city": "Baton Rouge",
    "state": "Louisiana"
  },
  {
    "FIELD1": 153,
    "name": "Three Creeks Brewing",
    "city": "Sisters",
    "state": "Oregon"
  },
  {
    "FIELD1": 154,
    "name": "2 Towns Ciderhouse",
    "city": "Corvallis",
    "state": "Oregon"
  },
  {
    "FIELD1": 155,
    "name": "Caldera Brewing Company",
    "city": "Ashland",
    "state": "Oregon"
  },
  {
    "FIELD1": 156,
    "name": "Greenbrier Valley Brewing Company",
    "city": "Lewisburg",
    "state": "West Virginia"
  },
  {
    "FIELD1": 157,
    "name": "Phoenix Ale Brewery",
    "city": "Phoenix",
    "state": "Arizona"
  },
  {
    "FIELD1": 158,
    "name": "Lumberyard Brewing Company",
    "city": "Flagstaff",
    "state": "Arizona"
  },
  {
    "FIELD1": 159,
    "name": "Uinta Brewing Company",
    "city": "Salt Lake City",
    "state": "Utah"
  },
  {
    "FIELD1": 160,
    "name": "Four Peaks Brewing Company",
    "city": "Tempe",
    "state": "Arizona"
  },
  {
    "FIELD1": 161,
    "name": "Martin House Brewing Company",
    "city": "Fort Worth",
    "state": "Texas"
  },
  {
    "FIELD1": 162,
    "name": "Right Brain Brewery",
    "city": "Traverse City",
    "state": "Michigan"
  },
  {
    "FIELD1": 163,
    "name": "Sly Fox Brewing Company",
    "city": "Phoenixville",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 164,
    "name": "Round Guys Brewing",
    "city": "Lansdale",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 165,
    "name": "Great Crescent Brewery",
    "city": "Aurora",
    "state": "Indiana"
  },
  {
    "FIELD1": 166,
    "name": "Oskar Blues Brewery",
    "city": "Longmont",
    "state": "Colorado"
  },
  {
    "FIELD1": 167,
    "name": "Boxcar Brewing Company",
    "city": "West Chester",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 168,
    "name": "High Hops Brewery",
    "city": "Windsor",
    "state": "Colorado"
  },
  {
    "FIELD1": 169,
    "name": "Crooked Fence Brewing Company",
    "city": "Garden City",
    "state": "Idaho"
  },
  {
    "FIELD1": 170,
    "name": "Everybody's Brewing",
    "city": "White Salmon",
    "state": "Washington"
  },
  {
    "FIELD1": 171,
    "name": "Anderson Valley Brewing Company",
    "city": "Boonville",
    "state": "California"
  },
  {
    "FIELD1": 172,
    "name": "Fiddlehead Brewing Company",
    "city": "Shelburne",
    "state": "Vermont"
  },
  {
    "FIELD1": 173,
    "name": "Evil Twin Brewing",
    "city": "Brooklyn",
    "state": "New York"
  },
  {
    "FIELD1": 174,
    "name": "New Orleans Lager & Ale Brewing ...",
    "city": "New Orleans",
    "state": "Louisiana"
  },
  {
    "FIELD1": 175,
    "name": "Spiteful Brewing Company",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "FIELD1": 176,
    "name": "Rahr & Sons Brewing Company",
    "city": "Fort Worth",
    "state": "Texas"
  },
  {
    "FIELD1": 177,
    "name": "18th Street Brewery",
    "city": "Gary",
    "state": "Indiana"
  },
  {
    "FIELD1": 178,
    "name": "Cambridge Brewing Company",
    "city": "Cambridge",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 179,
    "name": "Carolina Brewery",
    "city": "Pittsboro",
    "state": "North Carolina"
  },
  {
    "FIELD1": 180,
    "name": "Frog Level Brewing Company",
    "city": "Waynesville",
    "state": "North Carolina"
  },
  {
    "FIELD1": 181,
    "name": "Wild Wolf Brewing Company",
    "city": "Nellysford",
    "state": "Virginia"
  },
  {
    "FIELD1": 182,
    "name": "COOP Ale Works",
    "city": "Oklahoma City",
    "state": "Oklahoma"
  },
  {
    "FIELD1": 183,
    "name": "Seventh Son Brewing Company",
    "city": "Columbus",
    "state": "Ohio"
  },
  {
    "FIELD1": 184,
    "name": "Oasis Texas Brewing Company",
    "city": "Austin",
    "state": "Texas"
  },
  {
    "FIELD1": 185,
    "name": "Vander Mill Ciders",
    "city": "Spring Lake",
    "state": "Michigan"
  },
  {
    "FIELD1": 186,
    "name": "St. Julian Winery",
    "city": "Paw Paw",
    "state": "Michigan"
  },
  {
    "FIELD1": 187,
    "name": "Pedernales Brewing Company",
    "city": "Fredericksburg",
    "state": "Texas"
  },
  {
    "FIELD1": 188,
    "name": "Mother's Brewing",
    "city": "Springfield",
    "state": "Missouri"
  },
  {
    "FIELD1": 189,
    "name": "Modern Monks Brewery",
    "city": "Lincoln",
    "state": "Nebraska"
  },
  {
    "FIELD1": 190,
    "name": "Two Beers Brewing Company",
    "city": "Seattle",
    "state": "Washington"
  },
  {
    "FIELD1": 191,
    "name": "Snake River Brewing Company",
    "city": "Jackson",
    "state": "Wyoming"
  },
  {
    "FIELD1": 192,
    "name": "Capital Brewery",
    "city": "Middleton",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 193,
    "name": "Anthem Brewing Company",
    "city": "Oklahoma City",
    "state": "Oklahoma"
  },
  {
    "FIELD1": 194,
    "name": "Goodlife Brewing Co.",
    "city": "Bend",
    "state": "Oregon"
  },
  {
    "FIELD1": 195,
    "name": "Breakside Brewery",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 196,
    "name": "Goose Island Brewery Company",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "FIELD1": 197,
    "name": "Burnside Brewing Co.",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 198,
    "name": "Hop Valley Brewing Company",
    "city": "Springfield",
    "state": "Oregon"
  },
  {
    "FIELD1": 199,
    "name": "Worthy Brewing Company",
    "city": "Bend",
    "state": "Oregon"
  },
  {
    "FIELD1": 200,
    "name": "Occidental Brewing Company",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 201,
    "name": "Fearless Brewing Company",
    "city": "Estacada",
    "state": "Oregon"
  },
  {
    "FIELD1": 202,
    "name": "Upland Brewing Company",
    "city": "Bloomington",
    "state": "Indiana"
  },
  {
    "FIELD1": 203,
    "name": "Mehana Brewing Co.",
    "city": "Hilo",
    "state": "Hawaii"
  },
  {
    "FIELD1": 204,
    "name": "Hawai'i Nui Brewing Co.",
    "city": "Hilo",
    "state": "Hawaii"
  },
  {
    "FIELD1": 205,
    "name": "People's Brewing Company",
    "city": "Lafayette",
    "state": "Indiana"
  },
  {
    "FIELD1": 206,
    "name": "Fort George Brewery",
    "city": "Astoria",
    "state": "Oregon"
  },
  {
    "FIELD1": 207,
    "name": "Branchline Brewing Company",
    "city": "San Antonio",
    "state": "Texas"
  },
  {
    "FIELD1": 208,
    "name": "Kalona Brewing Company",
    "city": "Kalona",
    "state": "Iowa"
  },
  {
    "FIELD1": 209,
    "name": "Modern Times Beer",
    "city": "San Diego",
    "state": "California"
  },
  {
    "FIELD1": 210,
    "name": "Temperance Beer Company",
    "city": "Evanston",
    "state": "Illinois"
  },
  {
    "FIELD1": 211,
    "name": "Wisconsin Brewing Company",
    "city": "Verona",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 212,
    "name": "Crow Peak Brewing Company",
    "city": "Spearfish",
    "state": "South Dakota"
  },
  {
    "FIELD1": 213,
    "name": "Grapevine Craft Brewery",
    "city": "Farmers Branch",
    "state": "Texas"
  },
  {
    "FIELD1": 214,
    "name": "Buffalo Bayou Brewing Company",
    "city": "Houston",
    "state": "Texas"
  },
  {
    "FIELD1": 215,
    "name": "Texian Brewing Co.",
    "city": "Richmond",
    "state": "Texas"
  },
  {
    "FIELD1": 216,
    "name": "Orpheus Brewing",
    "city": "Atlanta",
    "state": "Georgia"
  },
  {
    "FIELD1": 217,
    "name": "Forgotten Boardwalk",
    "city": "Cherry Hill",
    "state": "NJ"
  },
  {
    "FIELD1": 218,
    "name": "Laughing Dog Brewing Company",
    "city": "Ponderay",
    "state": "Idaho"
  },
  {
    "FIELD1": 219,
    "name": "Bozeman Brewing Company",
    "city": "Bozeman",
    "state": "Montana"
  },
  {
    "FIELD1": 220,
    "name": "Big Choice Brewing",
    "city": "Broomfield",
    "state": "Colorado"
  },
  {
    "FIELD1": 221,
    "name": "Big Storm Brewing Company",
    "city": "Odessa",
    "state": "Florida"
  },
  {
    "FIELD1": 222,
    "name": "Carton Brewing Company",
    "city": "Atlantic Highlands",
    "state": "NJ"
  },
  {
    "FIELD1": 223,
    "name": "Midnight Sun Brewing Company",
    "city": "Anchorage",
    "state": "Alaska"
  },
  {
    "FIELD1": 224,
    "name": "Fat Head's Brewery",
    "city": "Middleburg Heights",
    "state": "Ohio"
  },
  {
    "FIELD1": 225,
    "name": "Refuge Brewery",
    "city": "Temecula",
    "state": "California"
  },
  {
    "FIELD1": 226,
    "name": "Chatham Brewing",
    "city": "Chatham",
    "state": "New York"
  },
  {
    "FIELD1": 227,
    "name": "DC Brau Brewing Company",
    "city": "Washington",
    "state": "DC"
  },
  {
    "FIELD1": 228,
    "name": "Geneva Lake Brewing Company",
    "city": "Lake Geneva",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 229,
    "name": "Rochester Mills Brewing Company",
    "city": "Rochester",
    "state": "Michigan"
  },
  {
    "FIELD1": 230,
    "name": "Cape Ann Brewing Company",
    "city": "Gloucester",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 231,
    "name": "Borderlands Brewing Company",
    "city": "Tucson",
    "state": "Arizona"
  },
  {
    "FIELD1": 232,
    "name": "College Street Brewhouse and Pub",
    "city": "Lake Havasu City",
    "state": "Arizona"
  },
  {
    "FIELD1": 233,
    "name": "Joseph James Brewing Company",
    "city": "Henderson",
    "state": "Nevada"
  },
  {
    "FIELD1": 234,
    "name": "Harpoon Brewery",
    "city": "Boston",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 235,
    "name": "Back East Brewing Company",
    "city": "Bloomfield",
    "state": "Conneticut"
  },
  {
    "FIELD1": 236,
    "name": "Champion Brewing Company",
    "city": "Charlottesville",
    "state": "Virginia"
  },
  {
    "FIELD1": 237,
    "name": "Devil's Backbone Brewing Company",
    "city": "Lexington",
    "state": "Virginia"
  },
  {
    "FIELD1": 238,
    "name": "Newburgh Brewing Company",
    "city": "Newburgh",
    "state": "New York"
  },
  {
    "FIELD1": 239,
    "name": "Wiseacre Brewing Company",
    "city": "Memphis",
    "state": "Tennessee"
  },
  {
    "FIELD1": 240,
    "name": "Golden Road Brewing",
    "city": "Los Angeles",
    "state": "California"
  },
  {
    "FIELD1": 241,
    "name": "New Republic Brewing Company",
    "city": "College Station",
    "state": "Texas"
  },
  {
    "FIELD1": 242,
    "name": "Infamous Brewing Company",
    "city": "Austin",
    "state": "Texas"
  },
  {
    "FIELD1": 243,
    "name": "Two Henrys Brewing Company",
    "city": "Plant City",
    "state": "Florida"
  },
  {
    "FIELD1": 244,
    "name": "Lift Bridge Brewing Company",
    "city": "Stillwater",
    "state": "Minnesota"
  },
  {
    "FIELD1": 245,
    "name": "Lucky Town Brewing Company",
    "city": "Jackson",
    "state": "MS"
  },
  {
    "FIELD1": 246,
    "name": "Quest Brewing Company",
    "city": "Greenville",
    "state": "South Carolina"
  },
  {
    "FIELD1": 247,
    "name": "Creature Comforts",
    "city": "Athens",
    "state": "Georgia"
  },
  {
    "FIELD1": 248,
    "name": "Half Full Brewery",
    "city": "Stamford",
    "state": "Conneticut"
  },
  {
    "FIELD1": 249,
    "name": "Southampton Publick House",
    "city": "Southampton",
    "state": "New York"
  },
  {
    "FIELD1": 250,
    "name": "Chapman's Brewing",
    "city": "Angola",
    "state": "Indiana"
  },
  {
    "FIELD1": 251,
    "name": "Barrio Brewing Company",
    "city": "Tucson",
    "state": "Arizona"
  },
  {
    "FIELD1": 252,
    "name": "Santa Cruz Mountain Brewing",
    "city": "Santa Cruz",
    "state": "California"
  },
  {
    "FIELD1": 253,
    "name": "Frankenmuth Brewery",
    "city": "Frankenmuth",
    "state": "Michigan"
  },
  {
    "FIELD1": 254,
    "name": "Meckley's Cidery",
    "city": "Somerset Center",
    "state": "Michigan"
  },
  {
    "FIELD1": 255,
    "name": "Stillwater Artisanal Ales",
    "city": "Baltimore",
    "state": "Maryland"
  },
  {
    "FIELD1": 256,
    "name": "Finch's Beer Company",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "FIELD1": 257,
    "name": "South Austin Brewery",
    "city": "South Austin",
    "state": "Texas"
  },
  {
    "FIELD1": 258,
    "name": "Bauhaus Brew Labs",
    "city": "Minneapolis",
    "state": "Minnesota"
  },
  {
    "FIELD1": 259,
    "name": "Ozark Beer Company",
    "city": "Rogers",
    "state": "Arkansas"
  },
  {
    "FIELD1": 260,
    "name": "Mountain Town Brewing Company ",
    "city": "Mount Pleasant",
    "state": "Michigan"
  },
  {
    "FIELD1": 261,
    "name": "Otter Creek Brewing",
    "city": "Waterbury",
    "state": "Vermont"
  },
  {
    "FIELD1": 262,
    "name": "The Brewer's Art",
    "city": "Baltimore",
    "state": "Maryland"
  },
  {
    "FIELD1": 263,
    "name": "Denver Beer Company",
    "city": "Denver",
    "state": "Colorado"
  },
  {
    "FIELD1": 264,
    "name": "Ska Brewing Company",
    "city": "Durango",
    "state": "Colorado"
  },
  {
    "FIELD1": 265,
    "name": "Tractor Brewing Company",
    "city": "Albuquerque",
    "state": "New Mexico"
  },
  {
    "FIELD1": 266,
    "name": "Peak Organic Brewing Company",
    "city": "Portland",
    "state": "Maine"
  },
  {
    "FIELD1": 267,
    "name": "Cape Cod Beer",
    "city": "Hyannis",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 268,
    "name": "Long Trail Brewing Company",
    "city": "Bridgewater Corners",
    "state": "Vermont"
  },
  {
    "FIELD1": 269,
    "name": "Great Raft Brewing Company",
    "city": "Shreveport",
    "state": "Louisiana"
  },
  {
    "FIELD1": 270,
    "name": "Alaskan Brewing Company",
    "city": "Juneau",
    "state": "Alaska"
  },
  {
    "FIELD1": 271,
    "name": "Notch Brewing Company",
    "city": "Ipswich",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 272,
    "name": "The Alchemist",
    "city": "Waterbury",
    "state": "Vermont"
  },
  {
    "FIELD1": 273,
    "name": "Three Notch'd Brewing Company",
    "city": "Charlottesville",
    "state": "Virginia"
  },
  {
    "FIELD1": 274,
    "name": "Portside Brewery",
    "city": "Cleveland",
    "state": "Ohio"
  },
  {
    "FIELD1": 275,
    "name": "Otter Creek Brewing",
    "city": "Middlebury",
    "state": "Vermont"
  },
  {
    "FIELD1": 276,
    "name": "Montauk Brewing Company",
    "city": "Montauk",
    "state": "New York"
  },
  {
    "FIELD1": 277,
    "name": "Indeed Brewing Company",
    "city": "Minneapolis",
    "state": "Minnesota"
  },
  {
    "FIELD1": 278,
    "name": "Berkshire Brewing Company",
    "city": "South Deerfield",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 279,
    "name": "Foolproof Brewing Company",
    "city": "Pawtucket",
    "state": "Rhode Island"
  },
  {
    "FIELD1": 280,
    "name": "Headlands Brewing Company",
    "city": "Mill Valley",
    "state": "California"
  },
  {
    "FIELD1": 281,
    "name": "Bolero Snort Brewery",
    "city": "Ridgefield Park",
    "state": "NJ"
  },
  {
    "FIELD1": 282,
    "name": "Thunderhead Brewing Company",
    "city": "Kearney",
    "state": "Nebraska"
  },
  {
    "FIELD1": 283,
    "name": "Defiance Brewing Company",
    "city": "Hays",
    "state": "Kansas"
  },
  {
    "FIELD1": 284,
    "name": "Milwaukee Brewing Company",
    "city": "Milwaukee",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 285,
    "name": "Catawba Island Brewing",
    "city": "Port Clinton",
    "state": "Ohio"
  },
  {
    "FIELD1": 286,
    "name": "Back Forty Beer Company",
    "city": "Gadsden",
    "state": "Alabama"
  },
  {
    "FIELD1": 287,
    "name": "Four Corners Brewing Company",
    "city": "Dallas",
    "state": "Texas"
  },
  {
    "FIELD1": 288,
    "name": "Saint Archer Brewery",
    "city": "San Diego",
    "state": "California"
  },
  {
    "FIELD1": 289,
    "name": "Rogue Ales",
    "city": "Newport",
    "state": "Oregon"
  },
  {
    "FIELD1": 290,
    "name": "Hale's Ales",
    "city": "Seattle",
    "state": "Washington"
  },
  {
    "FIELD1": 291,
    "name": "Tommyknocker Brewery",
    "city": "Idaho Springs",
    "state": "Colorado"
  },
  {
    "FIELD1": 292,
    "name": "Baxter Brewing Company",
    "city": "Lewiston",
    "state": "Maine"
  },
  {
    "FIELD1": 293,
    "name": "Northampton Brewery",
    "city": "Northamtpon",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 294,
    "name": "Black Shirt Brewing Company",
    "city": "Denver",
    "state": "Colorado"
  },
  {
    "FIELD1": 295,
    "name": "Wachusett Brewing Company",
    "city": "Westminster",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 296,
    "name": "Widmer Brothers Brewing Company",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 297,
    "name": "Hop Farm Brewing Company",
    "city": "Pittsburgh",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 298,
    "name": "Liquid Hero Brewery",
    "city": "York",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 299,
    "name": "Matt Brewing Company",
    "city": "Utica",
    "state": "New York"
  },
  {
    "FIELD1": 300,
    "name": "Boston Beer Company",
    "city": "Boston",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 301,
    "name": "Old Forge Brewing Company",
    "city": "Danville",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 302,
    "name": "Utah Brewers Cooperative",
    "city": "Salt Lake City",
    "state": "Utah"
  },
  {
    "FIELD1": 303,
    "name": "Magic Hat Brewing Company",
    "city": "South Burlington",
    "state": "Vermont"
  },
  {
    "FIELD1": 304,
    "name": "Blue Hills Brewery",
    "city": "Canton",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 305,
    "name": "Night Shift Brewing",
    "city": "Everett",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 306,
    "name": "Beach Brewing Company",
    "city": "Virginia Beach",
    "state": "Virginia"
  },
  {
    "FIELD1": 307,
    "name": "Payette Brewing Company",
    "city": "Garden City",
    "state": "Idaho"
  },
  {
    "FIELD1": 308,
    "name": "Brew Bus Brewing",
    "city": "Tampa",
    "state": "Florida"
  },
  {
    "FIELD1": 309,
    "name": "Sockeye Brewing Company",
    "city": "Boise",
    "state": "Idaho"
  },
  {
    "FIELD1": 310,
    "name": "Pine Street Brewery",
    "city": "San Francisco",
    "state": "California"
  },
  {
    "FIELD1": 311,
    "name": "Dirty Bucket Brewing Company",
    "city": "Woodinville",
    "state": "Washington"
  },
  {
    "FIELD1": 312,
    "name": "Jackalope Brewing Company",
    "city": "Nashville",
    "state": "Tennessee"
  },
  {
    "FIELD1": 313,
    "name": "Slanted Rock Brewing Company",
    "city": "Meridian",
    "state": "Idaho"
  },
  {
    "FIELD1": 314,
    "name": "Piney River Brewing Company",
    "city": "Bucryus",
    "state": "Missouri"
  },
  {
    "FIELD1": 315,
    "name": "Cutters Brewing Company",
    "city": "Avon",
    "state": "Indiana"
  },
  {
    "FIELD1": 316,
    "name": "Iron Hill Brewery & Restaurant",
    "city": "Wilmington",
    "state": "Delaware"
  },
  {
    "FIELD1": 317,
    "name": "Marshall Wharf Brewing Company",
    "city": "Belfast",
    "state": "Maine"
  },
  {
    "FIELD1": 318,
    "name": "Banner Beer Company",
    "city": "Williamsburg",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 319,
    "name": "Dick's Brewing Company",
    "city": "Centralia",
    "state": "Washington"
  },
  {
    "FIELD1": 320,
    "name": "Claremont Craft Ales",
    "city": "Claremont",
    "state": "California"
  },
  {
    "FIELD1": 321,
    "name": "Rivertown Brewing Company",
    "city": "Lockland",
    "state": "Ohio"
  },
  {
    "FIELD1": 322,
    "name": "Voodoo Brewery",
    "city": "Meadville",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 323,
    "name": "D.L. Geary Brewing Company",
    "city": "Portland",
    "state": "Maine"
  },
  {
    "FIELD1": 324,
    "name": "Pisgah Brewing Company",
    "city": "Black Mountain",
    "state": "North Carolina"
  },
  {
    "FIELD1": 325,
    "name": "Neshaminy Creek Brewing Company",
    "city": "Croydon",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 326,
    "name": "Morgan Street Brewery",
    "city": "Saint Louis",
    "state": "Missouri"
  },
  {
    "FIELD1": 327,
    "name": "Half Acre Beer Company",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "FIELD1": 328,
    "name": "The Just Beer Project",
    "city": "Burlington",
    "state": "Vermont"
  },
  {
    "FIELD1": 329,
    "name": "The Bronx Brewery",
    "city": "Bronx",
    "state": "New York"
  },
  {
    "FIELD1": 330,
    "name": "Dead Armadillo Craft Brewing",
    "city": "Tulsa",
    "state": "Oklahoma"
  },
  {
    "FIELD1": 331,
    "name": "Catawba Brewing Company",
    "city": "Morganton",
    "state": "North Carolina"
  },
  {
    "FIELD1": 332,
    "name": "La Cumbre Brewing Company",
    "city": "Albuquerque",
    "state": "New Mexico"
  },
  {
    "FIELD1": 333,
    "name": "David's Ale Works",
    "city": "Diamond Springs",
    "state": "California"
  },
  {
    "FIELD1": 334,
    "name": "The Traveler Beer Company",
    "city": "Burlington",
    "state": "Vermont"
  },
  {
    "FIELD1": 335,
    "name": "Fargo Brewing Company",
    "city": "Fargo",
    "state": "North Dakota"
  },
  {
    "FIELD1": 336,
    "name": "Big Sky Brewing Company",
    "city": "Missoula",
    "state": "Montana"
  },
  {
    "FIELD1": 337,
    "name": "Nebraska Brewing Company",
    "city": "Papillion",
    "state": "Nebraska"
  },
  {
    "FIELD1": 338,
    "name": "Uncle John's Fruit House Winery",
    "city": "St. John's",
    "state": "Michigan"
  },
  {
    "FIELD1": 339,
    "name": "Wormtown Brewery",
    "city": "Worcester",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 340,
    "name": "Due South Brewing Company",
    "city": "Boynton Beach",
    "state": "Florida"
  },
  {
    "FIELD1": 341,
    "name": "Palisade Brewing Company",
    "city": "Palisade",
    "state": "Colorado"
  },
  {
    "FIELD1": 342,
    "name": "KelSo Beer Company",
    "city": "Brooklyn",
    "state": "New York"
  },
  {
    "FIELD1": 343,
    "name": "Hardywood Park Craft Brewery",
    "city": "Richmond",
    "state": "Virginia"
  },
  {
    "FIELD1": 344,
    "name": "Wolf Hills Brewing Company",
    "city": "Abingdon",
    "state": "Virginia"
  },
  {
    "FIELD1": 345,
    "name": "Lavery Brewing Company",
    "city": "Erie",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 346,
    "name": "Manzanita Brewing Company",
    "city": "Santee",
    "state": "California"
  },
  {
    "FIELD1": 347,
    "name": "Fullsteam Brewery",
    "city": "Durham",
    "state": "North Carolina"
  },
  {
    "FIELD1": 348,
    "name": "Four Horsemen Brewing Company",
    "city": "South Bend",
    "state": "Indiana"
  },
  {
    "FIELD1": 349,
    "name": "Hinterland Brewery",
    "city": "Green Bay",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 350,
    "name": "Central Coast Brewing Company",
    "city": "San Luis Obispo",
    "state": "California"
  },
  {
    "FIELD1": 351,
    "name": "Westfield River Brewing Company",
    "city": "Westfield",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 352,
    "name": "Elevator Brewing Company",
    "city": "Columbus",
    "state": "Ohio"
  },
  {
    "FIELD1": 353,
    "name": "Aslan Brewing Company",
    "city": "Bellingham",
    "state": "Washington"
  },
  {
    "FIELD1": 354,
    "name": "Kulshan Brewery",
    "city": "Bellingham",
    "state": "Washington"
  },
  {
    "FIELD1": 355,
    "name": "Pikes Peak Brewing Company",
    "city": "Monument",
    "state": "Colorado"
  },
  {
    "FIELD1": 356,
    "name": "Manayunk Brewing Company",
    "city": "Philadelphia",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 357,
    "name": "Buckeye Brewing",
    "city": "Cleveland",
    "state": "Ohio"
  },
  {
    "FIELD1": 358,
    "name": "Daredevil Brewing Company",
    "city": "Shelbyville",
    "state": "Indiana"
  },
  {
    "FIELD1": 359,
    "name": "NoDa Brewing Company",
    "city": "Charlotte",
    "state": "North Carolina"
  },
  {
    "FIELD1": 360,
    "name": "Aviator Brewing Company",
    "city": "Fuquay-Varina",
    "state": "North Carolina"
  },
  {
    "FIELD1": 361,
    "name": "Wild Onion Brewing Company",
    "city": "Lake Barrington",
    "state": "Illinois"
  },
  {
    "FIELD1": 362,
    "name": "Hilliard's Beer",
    "city": "Seattle",
    "state": "Washington"
  },
  {
    "FIELD1": 363,
    "name": "Mikkeller",
    "city": "Pottstown",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 364,
    "name": "Bohemian Brewery",
    "city": "Midvale",
    "state": "Utah"
  },
  {
    "FIELD1": 365,
    "name": "Great River Brewery",
    "city": "Davenport",
    "state": "Iowa"
  },
  {
    "FIELD1": 366,
    "name": "Mustang Brewing Company",
    "city": "Mustang",
    "state": "Oklahoma"
  },
  {
    "FIELD1": 367,
    "name": "Airways Brewing Company",
    "city": "Kent",
    "state": "Washington"
  },
  {
    "FIELD1": 368,
    "name": "21st Amendment Brewery",
    "city": "San Francisco",
    "state": "California"
  },
  {
    "FIELD1": 369,
    "name": "Eddyline Brewery & Restaurant",
    "city": "Buena Vista",
    "state": "Colorado"
  },
  {
    "FIELD1": 370,
    "name": "Pizza Port Brewing Company",
    "city": "Carlsbad",
    "state": "California"
  },
  {
    "FIELD1": 371,
    "name": "Sly Fox Brewing Company",
    "city": "Pottstown",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 372,
    "name": "Spring House Brewing Company",
    "city": "Conestoga",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 373,
    "name": "7venth Sun",
    "city": "Dunedin",
    "state": "Florida"
  },
  {
    "FIELD1": 374,
    "name": "Astoria Brewing Company",
    "city": "Astoria",
    "state": "Oregon"
  },
  {
    "FIELD1": 375,
    "name": "Maui Brewing Company",
    "city": "Lahaina",
    "state": "Hawaii"
  },
  {
    "FIELD1": 376,
    "name": "RoughTail Brewing Company",
    "city": "Midwest City",
    "state": "Oklahoma"
  },
  {
    "FIELD1": 377,
    "name": "Lucette Brewing Company",
    "city": "Menominee",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 378,
    "name": "Bold City Brewery",
    "city": "Jacksonville",
    "state": "Florida"
  },
  {
    "FIELD1": 379,
    "name": "Grey Sail Brewing of Rhode Island",
    "city": "Westerly",
    "state": "Rhode Island"
  },
  {
    "FIELD1": 380,
    "name": "Blue Blood Brewing Company",
    "city": "Lincoln",
    "state": "Nebraska"
  },
  {
    "FIELD1": 381,
    "name": "Swashbuckler Brewing Company",
    "city": "Manheim",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 382,
    "name": "Blue Mountain Brewery",
    "city": "Afton",
    "state": "Virginia"
  },
  {
    "FIELD1": 383,
    "name": "Starr Hill Brewery",
    "city": "Crozet",
    "state": "Virginia"
  },
  {
    "FIELD1": 384,
    "name": "Westbrook Brewing Company",
    "city": "Mt. Pleasant",
    "state": "South Carolina"
  },
  {
    "FIELD1": 385,
    "name": "Shipyard Brewing Company",
    "city": "Portland",
    "state": "Maine"
  },
  {
    "FIELD1": 386,
    "name": "Revolution Brewing",
    "city": "Paonia",
    "state": "Colorado"
  },
  {
    "FIELD1": 387,
    "name": "Natian Brewery",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 388,
    "name": "Alltech's Lexington Brewing Company",
    "city": "Lexington",
    "state": "Kentucky"
  },
  {
    "FIELD1": 389,
    "name": "Oskar Blues Brewery (North Carol...",
    "city": "Brevard",
    "state": "North Carolina"
  },
  {
    "FIELD1": 390,
    "name": "Orlison Brewing Company",
    "city": "Airway Heights",
    "state": "Washington"
  },
  {
    "FIELD1": 391,
    "name": "Breckenridge Brewery",
    "city": "Denver",
    "state": "Colorado"
  },
  {
    "FIELD1": 392,
    "name": "Santa Fe Brewing Company",
    "city": "Santa Fe",
    "state": "New Mexico"
  },
  {
    "FIELD1": 393,
    "name": "Miami Brewing Company",
    "city": "Miami",
    "state": "Florida"
  },
  {
    "FIELD1": 394,
    "name": "Schilling & Company",
    "city": "Seattle",
    "state": "Washington"
  },
  {
    "FIELD1": 395,
    "name": "Hops & Grain Brewery",
    "city": "Austin",
    "state": "Texas"
  },
  {
    "FIELD1": 396,
    "name": "White Flame Brewing Company",
    "city": "Hudsonville",
    "state": "Michigan"
  },
  {
    "FIELD1": 397,
    "name": "Ruhstaller Beer Company",
    "city": "Sacramento",
    "state": "California"
  },
  {
    "FIELD1": 398,
    "name": "Saugatuck Brewing Company",
    "city": "Douglas",
    "state": "Michigan"
  },
  {
    "FIELD1": 399,
    "name": "Moab Brewery",
    "city": "Moab",
    "state": "Utah"
  },
  {
    "FIELD1": 400,
    "name": "Macon Beer Company",
    "city": "Macon",
    "state": "Georgia"
  },
  {
    "FIELD1": 401,
    "name": "Amnesia Brewing Company",
    "city": "Washougal",
    "state": "Washington"
  },
  {
    "FIELD1": 402,
    "name": "Wolverine State Brewing Company",
    "city": "Ann Arbor",
    "state": "Michigan"
  },
  {
    "FIELD1": 403,
    "name": "Red Tank Cider Company",
    "city": "Bend",
    "state": "Oregon"
  },
  {
    "FIELD1": 404,
    "name": "Cascadia Ciderworks United",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 405,
    "name": "Fate Brewing Company",
    "city": "Boulder",
    "state": "Colorado"
  },
  {
    "FIELD1": 406,
    "name": "Lazy Monk Brewing",
    "city": "Eau Claire",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 407,
    "name": "Bitter Root Brewing",
    "city": "Hamilton",
    "state": "Montana"
  },
  {
    "FIELD1": 408,
    "name": "10 Barrel Brewing Company",
    "city": "Bend",
    "state": "Oregon"
  },
  {
    "FIELD1": 409,
    "name": "Tamarack Brewing Company",
    "city": "Lakeside",
    "state": "Montana"
  },
  {
    "FIELD1": 410,
    "name": "New England Brewing Company",
    "city": "Woodbridge",
    "state": "Conneticut"
  },
  {
    "FIELD1": 411,
    "name": "Seattle Cider Company",
    "city": "Seattle",
    "state": "Washington"
  },
  {
    "FIELD1": 412,
    "name": "Straight to Ale",
    "city": "Huntsville",
    "state": "Alabama"
  },
  {
    "FIELD1": 413,
    "name": "Austin Beerworks",
    "city": "Austin",
    "state": "Texas"
  },
  {
    "FIELD1": 414,
    "name": "Blue Mountain Brewery",
    "city": "Arrington",
    "state": "Virginia"
  },
  {
    "FIELD1": 415,
    "name": "Coastal Empire Beer Company",
    "city": "Savannah",
    "state": "Georgia"
  },
  {
    "FIELD1": 416,
    "name": "Jack's Hard Cider (Hauser Estate...",
    "city": "Biglerville",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 417,
    "name": "Boulder Beer Company",
    "city": "Boulder",
    "state": "Colorado"
  },
  {
    "FIELD1": 418,
    "name": "Coalition Brewing Company",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 419,
    "name": "Sanitas Brewing Company",
    "city": "Boulder",
    "state": "Colorado"
  },
  {
    "FIELD1": 420,
    "name": "Gore Range Brewery",
    "city": "Edwards",
    "state": "Colorado"
  },
  {
    "FIELD1": 421,
    "name": "Redstone Meadery",
    "city": "Boulder",
    "state": "Colorado"
  },
  {
    "FIELD1": 422,
    "name": "Blue Dog Mead",
    "city": "Eugene",
    "state": "Oregon"
  },
  {
    "FIELD1": 423,
    "name": "Hess Brewing Company",
    "city": "San Diego",
    "state": "California"
  },
  {
    "FIELD1": 424,
    "name": "Wynkoop Brewing Company",
    "city": "Denver",
    "state": "Colorado"
  },
  {
    "FIELD1": 425,
    "name": "Ciderboys",
    "city": "Stevens Point",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 426,
    "name": "Armadillo Ale Works",
    "city": "Denton",
    "state": "Texas"
  },
  {
    "FIELD1": 427,
    "name": "Roanoke Railhouse Brewery",
    "city": "Roanoke",
    "state": "Virginia"
  },
  {
    "FIELD1": 428,
    "name": "Schlafly Brewing Company",
    "city": "Saint Louis",
    "state": "Missouri"
  },
  {
    "FIELD1": 429,
    "name": "Asher Brewing Company",
    "city": "Boulder",
    "state": "Colorado"
  },
  {
    "FIELD1": 430,
    "name": "Lost Rhino Brewing Company",
    "city": "Ashburn",
    "state": "Virginia"
  },
  {
    "FIELD1": 431,
    "name": "North Country Brewing Company",
    "city": "Slippery Rock",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 432,
    "name": "Seabright Brewery",
    "city": "Santa Cruz",
    "state": "California"
  },
  {
    "FIELD1": 433,
    "name": "French Broad Brewery",
    "city": "Asheville",
    "state": "North Carolina"
  },
  {
    "FIELD1": 434,
    "name": "Angry Orchard Cider Company",
    "city": "Cincinnati",
    "state": "Ohio"
  },
  {
    "FIELD1": 435,
    "name": "Two Roads Brewing Company",
    "city": "Stratford",
    "state": "Conneticut"
  },
  {
    "FIELD1": 436,
    "name": "Southern Oregon Brewing Company",
    "city": "Medford",
    "state": "Oregon"
  },
  {
    "FIELD1": 437,
    "name": "Brooklyn Brewery",
    "city": "Brooklyn",
    "state": "New York"
  },
  {
    "FIELD1": 438,
    "name": "The Right Brain Brewery",
    "city": "Traverse City",
    "state": "Michigan"
  },
  {
    "FIELD1": 439,
    "name": "Kona Brewing Company",
    "city": "Kona",
    "state": "Hawaii"
  },
  {
    "FIELD1": 440,
    "name": "MillKing It Productions",
    "city": "Royal Oak",
    "state": "Michigan"
  },
  {
    "FIELD1": 441,
    "name": "Pateros Creek Brewing Company",
    "city": "Fort Collins",
    "state": "Colorado"
  },
  {
    "FIELD1": 442,
    "name": "O'Fallon Brewery",
    "city": "O'Fallon",
    "state": "Missouri"
  },
  {
    "FIELD1": 443,
    "name": "Marble Brewery",
    "city": "Albuquerque",
    "state": "New Mexico"
  },
  {
    "FIELD1": 444,
    "name": "Big Wood Brewery",
    "city": "Vadnais Heights",
    "state": "Minnesota"
  },
  {
    "FIELD1": 445,
    "name": "Howard Brewing Company",
    "city": "Lenoir",
    "state": "North Carolina"
  },
  {
    "FIELD1": 446,
    "name": "Downeast Cider House",
    "city": "Leominster",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 447,
    "name": "Swamp Head Brewery",
    "city": "Gainesville",
    "state": "Florida"
  },
  {
    "FIELD1": 448,
    "name": "Mavericks Beer Company",
    "city": "Half Moon Bay",
    "state": "California"
  },
  {
    "FIELD1": 449,
    "name": "TailGate Beer",
    "city": "San Diego",
    "state": "California"
  },
  {
    "FIELD1": 450,
    "name": "Northwest Brewing Company",
    "city": "Pacific",
    "state": "Washington"
  },
  {
    "FIELD1": 451,
    "name": "Dad & Dude's Breweria",
    "city": "Aurora",
    "state": "Colorado"
  },
  {
    "FIELD1": 452,
    "name": "Centennial Beer Company",
    "city": "Edwards",
    "state": "Colorado"
  },
  {
    "FIELD1": 453,
    "name": "Denali Brewing Company",
    "city": "Talkeetna",
    "state": "Alaska"
  },
  {
    "FIELD1": 454,
    "name": "Deschutes Brewery",
    "city": "Bend",
    "state": "Oregon"
  },
  {
    "FIELD1": 455,
    "name": "Sunken City Brewing Company",
    "city": "Hardy",
    "state": "Virginia"
  },
  {
    "FIELD1": 456,
    "name": "Lucette Brewing Company",
    "city": "Menominie",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 457,
    "name": "The Black Tooth Brewing Company",
    "city": "Sheridan",
    "state": "Wyoming"
  },
  {
    "FIELD1": 458,
    "name": "Kenai River Brewing Company",
    "city": "Soldotna",
    "state": "Alaska"
  },
  {
    "FIELD1": 459,
    "name": "River North Brewery",
    "city": "Denver",
    "state": "Colorado"
  },
  {
    "FIELD1": 460,
    "name": "Fremont Brewing Company",
    "city": "Seattle",
    "state": "Washington"
  },
  {
    "FIELD1": 461,
    "name": "Armstrong Brewing Company",
    "city": "South San Francisco",
    "state": "California"
  },
  {
    "FIELD1": 462,
    "name": "AC Golden Brewing Company",
    "city": "Golden",
    "state": "Colorado"
  },
  {
    "FIELD1": 463,
    "name": "Big Bend Brewing Company",
    "city": "Alpine",
    "state": "Texas"
  },
  {
    "FIELD1": 464,
    "name": "Good Life Brewing Company",
    "city": "Bend",
    "state": "Oregon"
  },
  {
    "FIELD1": 465,
    "name": "Engine 15 Brewing",
    "city": "Jacksonville Beach",
    "state": "Florida"
  },
  {
    "FIELD1": 466,
    "name": "Green Room Brewing",
    "city": "Jacksonville",
    "state": "Florida"
  },
  {
    "FIELD1": 467,
    "name": "Brindle Dog Brewing Company",
    "city": "Tampa Bay",
    "state": "Florida"
  },
  {
    "FIELD1": 468,
    "name": "Peace Tree Brewing Company",
    "city": "Knoxville",
    "state": "Iowa"
  },
  {
    "FIELD1": 469,
    "name": "Terrapin Brewing Company",
    "city": "Athens",
    "state": "Georgia"
  },
  {
    "FIELD1": 470,
    "name": "Pete's Brewing Company",
    "city": "San Antonio",
    "state": "Texas"
  },
  {
    "FIELD1": 471,
    "name": "Okoboji Brewing Company",
    "city": "Spirit Lake",
    "state": "Iowa"
  },
  {
    "FIELD1": 472,
    "name": "Crystal Springs Brewing Company",
    "city": "Boulder",
    "state": "Colorado"
  },
  {
    "FIELD1": 473,
    "name": "Engine House 9",
    "city": "Tacoma",
    "state": "Washington"
  },
  {
    "FIELD1": 474,
    "name": "Tonka Beer Company",
    "city": "Minnetonka",
    "state": "Minnesota"
  },
  {
    "FIELD1": 475,
    "name": "Red Hare Brewing Company",
    "city": "Marietta",
    "state": "Georgia"
  },
  {
    "FIELD1": 476,
    "name": "Hangar 24 Craft Brewery",
    "city": "Redlands",
    "state": "California"
  },
  {
    "FIELD1": 477,
    "name": "Big Elm Brewing",
    "city": "Sheffield",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 478,
    "name": "Good People Brewing Company",
    "city": "Birmingham",
    "state": "Alabama"
  },
  {
    "FIELD1": 479,
    "name": "Heavy Seas Beer",
    "city": "Halethorpe",
    "state": "Maryland"
  },
  {
    "FIELD1": 480,
    "name": "Telluride Brewing Company",
    "city": "Telluride",
    "state": "Colorado"
  },
  {
    "FIELD1": 481,
    "name": "7 Seas Brewing Company",
    "city": "Gig Harbor",
    "state": "Washington"
  },
  {
    "FIELD1": 482,
    "name": "Confluence Brewing Company",
    "city": "Des Moines",
    "state": "Iowa"
  },
  {
    "FIELD1": 483,
    "name": "Bale Breaker Brewing Company",
    "city": "Yakima",
    "state": "Washington"
  },
  {
    "FIELD1": 484,
    "name": "The Manhattan Brewing Company",
    "city": "New York",
    "state": "New York"
  },
  {
    "FIELD1": 485,
    "name": "MacTarnahans Brewing Company",
    "city": "Portland",
    "state": "Oregon"
  },
  {
    "FIELD1": 486,
    "name": "Stillmank Beer Company",
    "city": "Green Bay",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 487,
    "name": "Redhook Brewery",
    "city": "Woodinville",
    "state": "Washington"
  },
  {
    "FIELD1": 488,
    "name": "Dock Street Brewery",
    "city": "Philadelphia",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 489,
    "name": "Blue Point Brewing Company",
    "city": "Patchogue",
    "state": "New York"
  },
  {
    "FIELD1": 490,
    "name": "Tampa Bay Brewing Company",
    "city": "Tampa",
    "state": "Florida"
  },
  {
    "FIELD1": 491,
    "name": "Devil's Canyon Brewery",
    "city": "Belmont",
    "state": "California"
  },
  {
    "FIELD1": 492,
    "name": "Stone Coast Brewing Company",
    "city": "Portland",
    "state": "Maine"
  },
  {
    "FIELD1": 493,
    "name": "Broken Tooth Brewing Company",
    "city": "Anchorage",
    "state": "Alaska"
  },
  {
    "FIELD1": 494,
    "name": "Seven Brides Brewery",
    "city": "Silverton",
    "state": "Oregon"
  },
  {
    "FIELD1": 495,
    "name": "Newburyport Brewing Company",
    "city": "Newburyport",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 496,
    "name": "Dry Dock Brewing Company",
    "city": "Aurora",
    "state": "Colorado"
  },
  {
    "FIELD1": 497,
    "name": "Cans Bar and Canteen",
    "city": "Charlotte",
    "state": "North Carolina"
  },
  {
    "FIELD1": 498,
    "name": "Sprecher Brewing Company",
    "city": "Glendale",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 499,
    "name": "Wildwood Brewing Company",
    "city": "Stevensville",
    "state": "Montana"
  },
  {
    "FIELD1": 500,
    "name": "High Noon Saloon And Brewery",
    "city": "Leavenworth",
    "state": "Kansas"
  },
  {
    "FIELD1": 501,
    "name": "Woodchuck Hard Cider",
    "city": "Middlebury",
    "state": "Vermont"
  },
  {
    "FIELD1": 502,
    "name": "Sea Dog Brewing Company",
    "city": "Portland",
    "state": "Maine"
  },
  {
    "FIELD1": 503,
    "name": "Oskar Blues Brewery",
    "city": "Lyons",
    "state": "Colorado"
  },
  {
    "FIELD1": 504,
    "name": "Carolina Beer & Beverage",
    "city": "Mooresville",
    "state": "North Carolina"
  },
  {
    "FIELD1": 505,
    "name": "Krebs Brewing Company (Pete's Pl...",
    "city": "Krebs",
    "state": "Oklahoma"
  },
  {
    "FIELD1": 506,
    "name": "Warbird Brewing Company",
    "city": "Fort Wayne",
    "state": "Indiana"
  },
  {
    "FIELD1": 507,
    "name": "Mudshark Brewing Company",
    "city": "Lake Havasu City",
    "state": "Arizona"
  },
  {
    "FIELD1": 508,
    "name": "Spilker Ales",
    "city": "Cortland",
    "state": "Nebraska"
  },
  {
    "FIELD1": 509,
    "name": "Wingman Brewers",
    "city": "Tacoma",
    "state": "Washington"
  },
  {
    "FIELD1": 510,
    "name": "Kettle House Brewing Company",
    "city": "Missoula",
    "state": "Montana"
  },
  {
    "FIELD1": 511,
    "name": "Sherwood Forest Brewers",
    "city": "Marlborough",
    "state": "Massachusetts"
  },
  {
    "FIELD1": 512,
    "name": "Cottrell Brewing",
    "city": "Pawcatuck",
    "state": "Conneticut"
  },
  {
    "FIELD1": 513,
    "name": "Arctic Craft Brewery",
    "city": "Colorado Springs",
    "state": "Colorado"
  },
  {
    "FIELD1": 514,
    "name": "Monkey Paw Pub & Brewery",
    "city": "San Diego",
    "state": "California"
  },
  {
    "FIELD1": 515,
    "name": "Crabtree Brewing Company",
    "city": "Greeley",
    "state": "Colorado"
  },
  {
    "FIELD1": 516,
    "name": "Emerald City Beer Company",
    "city": "Seattle",
    "state": "Washington"
  },
  {
    "FIELD1": 517,
    "name": "Butcher's Brewing",
    "city": "Carlsbad",
    "state": "California"
  },
  {
    "FIELD1": 518,
    "name": "New South Brewing Company",
    "city": "Myrtle Beach",
    "state": "South Carolina"
  },
  {
    "FIELD1": 519,
    "name": "Big River Brewing Company",
    "city": "Chattanooga",
    "state": "Tennessee"
  },
  {
    "FIELD1": 520,
    "name": "Twisted Pine Brewing Company",
    "city": "Boulder",
    "state": "Colorado"
  },
  {
    "FIELD1": 521,
    "name": "Flying Dog Brewery",
    "city": "Frederick",
    "state": "Maryland"
  },
  {
    "FIELD1": 522,
    "name": "Uncommon Brewers",
    "city": "Santa Cruz",
    "state": "California"
  },
  {
    "FIELD1": 523,
    "name": "Aspen Brewing Company",
    "city": "Aspen",
    "state": "Colorado"
  },
  {
    "FIELD1": 524,
    "name": "Triangle Brewing Company",
    "city": "Durham",
    "state": "North Carolina"
  },
  {
    "FIELD1": 525,
    "name": "Bomb Beer Company",
    "city": "New York",
    "state": "New York"
  },
  {
    "FIELD1": 526,
    "name": "Churchkey Can Company",
    "city": "Seattle",
    "state": "Washington"
  },
  {
    "FIELD1": 527,
    "name": "Intuition Ale Works",
    "city": "Jacksonville",
    "state": "Florida"
  },
  {
    "FIELD1": 528,
    "name": "Asheville Brewing Company",
    "city": "Asheville",
    "state": "North Carolina"
  },
  {
    "FIELD1": 529,
    "name": "Northwoods Brewpub",
    "city": "Eau Claire",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 530,
    "name": "Buckbean Brewing Company",
    "city": "Reno",
    "state": "Nevada"
  },
  {
    "FIELD1": 531,
    "name": "Dolores River Brewery",
    "city": "Dolores",
    "state": "Colorado"
  },
  {
    "FIELD1": 532,
    "name": "Flat Rock Brewing Company",
    "city": "Smithton",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 533,
    "name": "Abita Brewing Company",
    "city": "Abita Springs",
    "state": "Louisiana"
  },
  {
    "FIELD1": 534,
    "name": "Mammoth Brewing Company",
    "city": "Mammoth Lakes",
    "state": "California"
  },
  {
    "FIELD1": 535,
    "name": "Harvest Moon Brewing Company",
    "city": "Belt",
    "state": "Montana"
  },
  {
    "FIELD1": 536,
    "name": "Grand Canyon Brewing Company",
    "city": "Williams",
    "state": "Arizona"
  },
  {
    "FIELD1": 537,
    "name": "Lewis and Clark Brewing Company",
    "city": "Helena",
    "state": "Montana"
  },
  {
    "FIELD1": 538,
    "name": "Dundee Brewing Company",
    "city": "Rochester",
    "state": "New York"
  },
  {
    "FIELD1": 539,
    "name": "Twin Lakes Brewing Company",
    "city": "Greenville",
    "state": "Delaware"
  },
  {
    "FIELD1": 540,
    "name": "Mother Earth Brewing Company",
    "city": "Kinston",
    "state": "North Carolina"
  },
  {
    "FIELD1": 541,
    "name": "Arcadia Brewing Company",
    "city": "Battle Creek",
    "state": "Michigan"
  },
  {
    "FIELD1": 542,
    "name": "Angry Minnow Brewing Company",
    "city": "Hayward",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 543,
    "name": "Great Northern Brewing Company",
    "city": "Whitefish",
    "state": "Montana"
  },
  {
    "FIELD1": 544,
    "name": "Pyramid Breweries",
    "city": "Seattle",
    "state": "Washington"
  },
  {
    "FIELD1": 545,
    "name": "Lancaster Brewing Company",
    "city": "Lancaster",
    "state": "Pennsylvania"
  },
  {
    "FIELD1": 546,
    "name": "Upstate Brewing Company",
    "city": "Elmira",
    "state": "New York"
  },
  {
    "FIELD1": 547,
    "name": "Moat Mountain Smoke House & Brew...",
    "city": "North Conway",
    "state": "New Hampshire"
  },
  {
    "FIELD1": 548,
    "name": "Prescott Brewing Company",
    "city": "Prescott",
    "state": "Arizona"
  },
  {
    "FIELD1": 549,
    "name": "Mogollon Brewing Company",
    "city": "Flagstaff",
    "state": "Arizona"
  },
  {
    "FIELD1": 550,
    "name": "Wind River Brewing Company",
    "city": "Pinedale",
    "state": "Wyoming"
  },
  {
    "FIELD1": 551,
    "name": "Silverton Brewery",
    "city": "Silverton",
    "state": "Colorado"
  },
  {
    "FIELD1": 552,
    "name": "Mickey Finn's Brewery",
    "city": "Libertyville",
    "state": "Illinois"
  },
  {
    "FIELD1": 553,
    "name": "Covington Brewhouse",
    "city": "Covington",
    "state": "Louisiana"
  },
  {
    "FIELD1": 554,
    "name": "Dave's Brewfarm",
    "city": "Wilson",
    "state": "Wisconsin"
  },
  {
    "FIELD1": 555,
    "name": "Ukiah Brewing Company",
    "city": "Ukiah",
    "state": "California"
  },
  {
    "FIELD1": 556,
    "name": "Butternuts Beer and Ale",
    "city": "Garrattsville",
    "state": "New York"
  },
  {
    "FIELD1": 557,
    "name": "Sleeping Lady Brewing Company",
    "city": "Anchorage",
    "state": "Alaska"
  }
 ]

const beers = [
 {
   "FIELD1": 0,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1436,
   "name": "Pub Beer",
   "style": "American Pale Lager",
   "brewery_id": 408,
   "ounces": 12
 },
 {
   "FIELD1": 1,
   "abv": 0.066,
   "ibu": null,
   "Idaho": 2265,
   "name": "Devil's Cup",
   "style": "American Pale Ale (APA)",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 2,
   "abv": 0.071,
   "ibu": null,
   "Idaho": 2264,
   "name": "Rise of the Phoenix",
   "style": "American IPA",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 3,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 2263,
   "name": "Sinister",
   "style": "American Double / Imperial IPA",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 4,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 2262,
   "name": "Sex and Candy",
   "style": "American IPA",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 5,
   "abv": 0.077,
   "ibu": null,
   "Idaho": 2261,
   "name": "Black Exodus",
   "style": "Oatmeal Stout",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 6,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2260,
   "name": "Lake Street Express",
   "style": "American Pale Ale (APA)",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 7,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2259,
   "name": "Foreman",
   "style": "American Porter",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 8,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2258,
   "name": "Jade",
   "style": "American Pale Ale (APA)",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 9,
   "abv": 0.086,
   "ibu": null,
   "Idaho": 2131,
   "name": "Cone Crusher",
   "style": "American Double / Imperial IPA",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 10,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 2099,
   "name": "Sophomoric Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 11,
   "abv": 0.073,
   "ibu": null,
   "Idaho": 2098,
   "name": "Regional Ring Of Fire",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 12,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 2097,
   "name": "Garce Selé",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 13,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 1980,
   "name": "Troll Destroyer",
   "style": "Belgian IPA",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 14,
   "abv": 0.061,
   "ibu": 60,
   "Idaho": 1979,
   "name": "Bitter Bitch",
   "style": "American Pale Ale (APA)",
   "brewery_id": 177,
   "ounces": 12
 },
 {
   "FIELD1": 15,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2318,
   "name": "Ginja Ninja",
   "style": "Cider",
   "brewery_id": 154,
   "ounces": 12
 },
 {
   "FIELD1": 16,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2170,
   "name": "Cherried Away",
   "style": "Cider",
   "brewery_id": 154,
   "ounces": 12
 },
 {
   "FIELD1": 17,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2169,
   "name": "Rhubarbarian",
   "style": "Cider",
   "brewery_id": 154,
   "ounces": 12
 },
 {
   "FIELD1": 18,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1502,
   "name": "BrightCider",
   "style": "Cider",
   "brewery_id": 154,
   "ounces": 12
 },
 {
   "FIELD1": 19,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 1593,
   "name": "He Said Baltic-Style Porter",
   "style": "Baltic Porter",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 20,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 1592,
   "name": "He Said Belgian-Style Tripel",
   "style": "Tripel",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 21,
   "abv": 0.099,
   "ibu": 92,
   "Idaho": 1036,
   "name": "Lower De Boom",
   "style": "American Barleywine",
   "brewery_id": 368,
   "ounces": 8.4
 },
 {
   "FIELD1": 22,
   "abv": 0.079,
   "ibu": 45,
   "Idaho": 1024,
   "name": "Fireside Chat",
   "style": "Winter Warmer",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 23,
   "abv": 0.079,
   "ibu": null,
   "Idaho": 976,
   "name": "Marooned On Hog Island",
   "style": "American Stout",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 24,
   "abv": 0.044000000000000004,
   "ibu": 42,
   "Idaho": 876,
   "name": "Bitter American",
   "style": "American Pale Ale (APA)",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 25,
   "abv": 0.049,
   "ibu": 17,
   "Idaho": 802,
   "name": "Hell or High Watermelon Wheat (2009)",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 26,
   "abv": 0.049,
   "ibu": 17,
   "Idaho": 801,
   "name": "Hell or High Watermelon Wheat (2009)",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 27,
   "abv": 0.049,
   "ibu": 17,
   "Idaho": 800,
   "name": "21st Amendment Watermelon Wheat Beer (2006)",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 28,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 799,
   "name": "21st Amendment IPA (2006)",
   "style": "American IPA",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 29,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 797,
   "name": "Brew Free! or Die IPA (2008)",
   "style": "American IPA",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 30,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 796,
   "name": "Brew Free! or Die IPA (2009)",
   "style": "American IPA",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 31,
   "abv": 0.085,
   "ibu": 52,
   "Idaho": 531,
   "name": "Special Edition: Allies Win The War!",
   "style": "English Strong Ale",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 32,
   "abv": 0.09699999999999999,
   "ibu": 94,
   "Idaho": 432,
   "name": "Hop Crisis",
   "style": "American Double / Imperial IPA",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 33,
   "abv": 0.044000000000000004,
   "ibu": 42,
   "Idaho": 353,
   "name": "Bitter American (2011)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 34,
   "abv": 0.079,
   "ibu": 45,
   "Idaho": 321,
   "name": "Fireside Chat (2010)",
   "style": "Winter Warmer",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 35,
   "abv": 0.068,
   "ibu": 65,
   "Idaho": 173,
   "name": "Back in Black",
   "style": "American Black Ale",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 36,
   "abv": 0.083,
   "ibu": 35,
   "Idaho": 11,
   "name": "Monk's Blood",
   "style": "Belgian Dark Ale",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 37,
   "abv": 0.07,
   "ibu": 65,
   "Idaho": 10,
   "name": "Brew Free! or Die IPA",
   "style": "American IPA",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 38,
   "abv": 0.049,
   "ibu": 17,
   "Idaho": 9,
   "name": "Hell or High Watermelon Wheat",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 368,
   "ounces": 12
 },
 {
   "FIELD1": 39,
   "abv": 0.07,
   "ibu": 82,
   "Idaho": 2519,
   "name": "Bimini Twist",
   "style": "American IPA",
   "brewery_id": 67,
   "ounces": 12
 },
 {
   "FIELD1": 40,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2518,
   "name": "Beach Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 67,
   "ounces": 12
 },
 {
   "FIELD1": 41,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 2517,
   "name": "Rod Bender Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 67,
   "ounces": 12
 },
 {
   "FIELD1": 42,
   "abv": 0.035,
   "ibu": 11,
   "Idaho": 2545,
   "name": "Passion Fruit Prussia",
   "style": "Berliner Weissbier",
   "brewery_id": 60,
   "ounces": 12
 },
 {
   "FIELD1": 43,
   "abv": 0.045,
   "ibu": 18,
   "Idaho": 2544,
   "name": "Send Help",
   "style": "American Blonde Ale",
   "brewery_id": 60,
   "ounces": 12
 },
 {
   "FIELD1": 44,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2324,
   "name": "Cast Iron Oatmeal Brown",
   "style": "American Brown Ale",
   "brewery_id": 60,
   "ounces": 12
 },
 {
   "FIELD1": 45,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2288,
   "name": "Reprise Centennial Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 60,
   "ounces": 12
 },
 {
   "FIELD1": 46,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2287,
   "name": "Alter Ego",
   "style": "American Black Ale",
   "brewery_id": 60,
   "ounces": 12
 },
 {
   "FIELD1": 47,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2286,
   "name": "Divided Sky",
   "style": "American IPA",
   "brewery_id": 60,
   "ounces": 12
 },
 {
   "FIELD1": 48,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2285,
   "name": "Resurrected",
   "style": "American IPA",
   "brewery_id": 60,
   "ounces": 12
 },
 {
   "FIELD1": 49,
   "abv": 0.05,
   "ibu": 28,
   "Idaho": 1870,
   "name": "Contact High",
   "style": "American Pale Wheat Ale",
   "brewery_id": 60,
   "ounces": 12
 },
 {
   "FIELD1": 50,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2603,
   "name": "Galaxyfest",
   "style": "American IPA",
   "brewery_id": 27,
   "ounces": 16
 },
 {
   "FIELD1": 51,
   "abv": 0.05,
   "ibu": 45,
   "Idaho": 2602,
   "name": "Citrafest",
   "style": "American IPA",
   "brewery_id": 27,
   "ounces": 16
 },
 {
   "FIELD1": 52,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 2220,
   "name": "Barn Yeti",
   "style": "Belgian Strong Dark Ale",
   "brewery_id": 27,
   "ounces": 16
 },
 {
   "FIELD1": 53,
   "abv": 0.069,
   "ibu": 65,
   "Idaho": 2219,
   "name": "Scarecrow",
   "style": "American IPA",
   "brewery_id": 27,
   "ounces": 16
 },
 {
   "FIELD1": 54,
   "abv": 0.09,
   "ibu": 50,
   "Idaho": 2218,
   "name": "Ironman",
   "style": "English Strong Ale",
   "brewery_id": 27,
   "ounces": 16
 },
 {
   "FIELD1": 55,
   "abv": 0.046,
   "ibu": 15,
   "Idaho": 2217,
   "name": "Honey Kolsch",
   "style": "Kölsch",
   "brewery_id": 27,
   "ounces": 16
 },
 {
   "FIELD1": 56,
   "abv": 0.052000000000000005,
   "ibu": 18,
   "Idaho": 2216,
   "name": "Copperhead Amber",
   "style": "Belgian Dark Ale",
   "brewery_id": 27,
   "ounces": 16
 },
 {
   "FIELD1": 57,
   "abv": 0.059000000000000004,
   "ibu": 75,
   "Idaho": 972,
   "name": "Rude Parrot IPA",
   "style": "American IPA",
   "brewery_id": 481,
   "ounces": 16
 },
 {
   "FIELD1": 58,
   "abv": 0.054000000000000006,
   "ibu": 30,
   "Idaho": 866,
   "name": "British Pale Ale (2010)",
   "style": "English Pale Ale",
   "brewery_id": 481,
   "ounces": 16
 },
 {
   "FIELD1": 59,
   "abv": 0.054000000000000006,
   "ibu": 30,
   "Idaho": 48,
   "name": "British Pale Ale",
   "style": "English Pale Ale",
   "brewery_id": 481,
   "ounces": 16
 },
 {
   "FIELD1": 60,
   "abv": 0.084,
   "ibu": 82,
   "Idaho": 47,
   "name": "Ballz Deep Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 481,
   "ounces": 16
 },
 {
   "FIELD1": 61,
   "abv": 0.038,
   "ibu": null,
   "Idaho": 1583,
   "name": "Wolfman's Berliner",
   "style": "Berliner Weissbier",
   "brewery_id": 373,
   "ounces": 12
 },
 {
   "FIELD1": 62,
   "abv": 0.055,
   "ibu": 26,
   "Idaho": 1165,
   "name": "Colorado Native",
   "style": "American Amber / Red Lager",
   "brewery_id": 462,
   "ounces": 12
 },
 {
   "FIELD1": 63,
   "abv": 0.055,
   "ibu": 26,
   "Idaho": 431,
   "name": "Colorado Native (2011)",
   "style": "American Amber / Red Lager",
   "brewery_id": 462,
   "ounces": 12
 },
 {
   "FIELD1": 64,
   "abv": 0.065,
   "ibu": 52,
   "Idaho": 516,
   "name": "Jockamo IPA",
   "style": "American IPA",
   "brewery_id": 533,
   "ounces": 12
 },
 {
   "FIELD1": 65,
   "abv": 0.042,
   "ibu": 13,
   "Idaho": 515,
   "name": "Purple Haze",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 533,
   "ounces": 12
 },
 {
   "FIELD1": 66,
   "abv": 0.045,
   "ibu": 17,
   "Idaho": 514,
   "name": "Abita Amber",
   "style": "American Amber / Red Lager",
   "brewery_id": 533,
   "ounces": 12
 },
 {
   "FIELD1": 67,
   "abv": 0.08199999999999999,
   "ibu": 68,
   "Idaho": 2540,
   "name": "Citra Ass Down",
   "style": "American IPA",
   "brewery_id": 62,
   "ounces": 16
 },
 {
   "FIELD1": 68,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 2539,
   "name": "The Brown Note",
   "style": "American Brown Ale",
   "brewery_id": 62,
   "ounces": 16
 },
 {
   "FIELD1": 69,
   "abv": 0.08,
   "ibu": 68,
   "Idaho": 2686,
   "name": "Citra Ass Down",
   "style": "American Double / Imperial IPA",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 70,
   "abv": 0.125,
   "ibu": 80,
   "Idaho": 2685,
   "name": "London Balling",
   "style": "English Barleywine",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 71,
   "abv": 0.077,
   "ibu": 25,
   "Idaho": 2684,
   "name": "35 K",
   "style": "Milk / Sweet Stout",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 72,
   "abv": 0.042,
   "ibu": 42,
   "Idaho": 2683,
   "name": "A Beer",
   "style": "American Pale Ale (APA)",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 73,
   "abv": 0.05,
   "ibu": 25,
   "Idaho": 2682,
   "name": "Rules are Rules",
   "style": "German Pilsener",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 74,
   "abv": 0.066,
   "ibu": 21,
   "Idaho": 2681,
   "name": "Flesh Gourd'n",
   "style": "Pumpkin Ale",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 75,
   "abv": 0.04,
   "ibu": 13,
   "Idaho": 2680,
   "name": "Sho'nuff",
   "style": "Belgian Pale Ale",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 76,
   "abv": 0.055,
   "ibu": 17,
   "Idaho": 2679,
   "name": "Bloody Show",
   "style": "American Pilsner",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 77,
   "abv": 0.076,
   "ibu": 68,
   "Idaho": 2678,
   "name": "Rico Sauvin",
   "style": "American Double / Imperial IPA",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 78,
   "abv": 0.051,
   "ibu": 38,
   "Idaho": 2677,
   "name": "Coq de la Marche",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 79,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2676,
   "name": "Kamen Knuddeln",
   "style": "American Wild Ale",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 80,
   "abv": 0.06,
   "ibu": 65,
   "Idaho": 2675,
   "name": "Pile of Face",
   "style": "American IPA",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 81,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 2674,
   "name": "The Brown Note",
   "style": "English Brown Ale",
   "brewery_id": 1,
   "ounces": 16
 },
 {
   "FIELD1": 82,
   "abv": 0.053,
   "ibu": 35,
   "Idaho": 1594,
   "name": "Maylani's Coconut Stout",
   "style": "American Stout",
   "brewery_id": 367,
   "ounces": 16
 },
 {
   "FIELD1": 83,
   "abv": 0.05,
   "ibu": 35,
   "Idaho": 1162,
   "name": "Oatmeal PSA",
   "style": "American Pale Ale (APA)",
   "brewery_id": 367,
   "ounces": 16
 },
 {
   "FIELD1": 84,
   "abv": 0.052000000000000005,
   "ibu": 33,
   "Idaho": 1137,
   "name": "Pre Flight Pilsner",
   "style": "American Pilsner",
   "brewery_id": 367,
   "ounces": 16
 },
 {
   "FIELD1": 85,
   "abv": 0.04,
   "ibu": 20,
   "Idaho": 2403,
   "name": "P-Town Pilsner",
   "style": "American Pilsner",
   "brewery_id": 117,
   "ounces": 12
 },
 {
   "FIELD1": 86,
   "abv": 0.053,
   "ibu": 36,
   "Idaho": 2402,
   "name": "Klickitat Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 117,
   "ounces": 12
 },
 {
   "FIELD1": 87,
   "abv": 0.08199999999999999,
   "ibu": 103,
   "Idaho": 2401,
   "name": "Yellow Wolf Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 117,
   "ounces": 12
 },
 {
   "FIELD1": 88,
   "abv": 0.053,
   "ibu": 40,
   "Idaho": 1921,
   "name": "Freeride APA",
   "style": "American Pale Ale (APA)",
   "brewery_id": 270,
   "ounces": 12
 },
 {
   "FIELD1": 89,
   "abv": 0.053,
   "ibu": 18,
   "Idaho": 1920,
   "name": "Alaskan Amber",
   "style": "Altbier",
   "brewery_id": 270,
   "ounces": 12
 },
 {
   "FIELD1": 90,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 2501,
   "name": "Hopalicious",
   "style": "American Pale Ale (APA)",
   "brewery_id": 73,
   "ounces": 12
 },
 {
   "FIELD1": 91,
   "abv": 0.043,
   "ibu": null,
   "Idaho": 1535,
   "name": "Kentucky Kölsch",
   "style": "Kölsch",
   "brewery_id": 388,
   "ounces": 16
 },
 {
   "FIELD1": 92,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1149,
   "name": "Kentucky IPA",
   "style": "American IPA",
   "brewery_id": 388,
   "ounces": 16
 },
 {
   "FIELD1": 93,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 1474,
   "name": "Dusty Trail Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 401,
   "ounces": 16
 },
 {
   "FIELD1": 94,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 1473,
   "name": "Damnesia",
   "style": "American IPA",
   "brewery_id": 401,
   "ounces": 16
 },
 {
   "FIELD1": 95,
   "abv": 0.062,
   "ibu": 43,
   "Idaho": 837,
   "name": "Desolation IPA",
   "style": "American IPA",
   "brewery_id": 401,
   "ounces": 16
 },
 {
   "FIELD1": 96,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 2592,
   "name": "Liberty Ale",
   "style": "American IPA",
   "brewery_id": 35,
   "ounces": 12
 },
 {
   "FIELD1": 97,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2578,
   "name": "IPA",
   "style": "American IPA",
   "brewery_id": 35,
   "ounces": 12
 },
 {
   "FIELD1": 98,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2577,
   "name": "Summer Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 35,
   "ounces": 12
 },
 {
   "FIELD1": 99,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 2103,
   "name": "California Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 35,
   "ounces": 12
 },
 {
   "FIELD1": 100,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 2102,
   "name": "Brotherhood Steam",
   "style": "California Common / Steam Beer",
   "brewery_id": 35,
   "ounces": 12
 },
 {
   "FIELD1": 101,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 2291,
   "name": "Blood Orange Gose",
   "style": "Gose",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 102,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 1818,
   "name": "Keebarlin' Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 103,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1738,
   "name": "the Kimmie, the Yink and the Holy Gose",
   "style": "Gose",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 104,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1563,
   "name": "Fall Hornin'",
   "style": "Pumpkin Ale",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 105,
   "abv": 0.057,
   "ibu": 13,
   "Idaho": 1520,
   "name": "Barney Flats Oatmeal Stout",
   "style": "Oatmeal Stout",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 106,
   "abv": 0.055999999999999994,
   "ibu": 4,
   "Idaho": 1350,
   "name": "Summer Solstice",
   "style": "Cream Ale",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 107,
   "abv": 0.07,
   "ibu": 80,
   "Idaho": 1327,
   "name": "Hop Ottin' IPA",
   "style": "American IPA",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 108,
   "abv": 0.057999999999999996,
   "ibu": 15,
   "Idaho": 1326,
   "name": "Boont Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 109,
   "abv": 0.057,
   "ibu": 13,
   "Idaho": 1221,
   "name": "Barney Flats Oatmeal Stout",
   "style": "Oatmeal Stout",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 110,
   "abv": 0.055,
   "ibu": 25,
   "Idaho": 1217,
   "name": "El Steinber Dark Lager",
   "style": "Vienna Lager",
   "brewery_id": 171,
   "ounces": 16
 },
 {
   "FIELD1": 111,
   "abv": 0.057999999999999996,
   "ibu": 15,
   "Idaho": 811,
   "name": "Boont Amber Ale (2010)",
   "style": "American Amber / Red Ale",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 112,
   "abv": 0.055999999999999994,
   "ibu": 4,
   "Idaho": 753,
   "name": "Summer Solstice Cerveza Crema (2009)",
   "style": "Cream Ale",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 113,
   "abv": 0.057,
   "ibu": 13,
   "Idaho": 572,
   "name": "Barney Flats Oatmeal Stout (2012)",
   "style": "Oatmeal Stout",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 114,
   "abv": 0.069,
   "ibu": 6,
   "Idaho": 523,
   "name": "Winter Solstice",
   "style": "Winter Warmer",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 115,
   "abv": 0.07,
   "ibu": 80,
   "Idaho": 367,
   "name": "Hop Ottin' IPA (2011)",
   "style": "American IPA",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 116,
   "abv": 0.057999999999999996,
   "ibu": 15,
   "Idaho": 78,
   "name": "Boont Amber Ale (2011)",
   "style": "American Amber / Red Ale",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 117,
   "abv": 0.055999999999999994,
   "ibu": 4,
   "Idaho": 77,
   "name": "Summer Solstice (2011)",
   "style": "Cream Ale",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 118,
   "abv": 0.055,
   "ibu": 28,
   "Idaho": 76,
   "name": "Poleeko Gold Pale Ale (2009)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 171,
   "ounces": 12
 },
 {
   "FIELD1": 119,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2337,
   "name": "Charlie's Rye IPA",
   "style": "American IPA",
   "brewery_id": 146,
   "ounces": 16
 },
 {
   "FIELD1": 120,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 410,
   "name": "River Pig Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 542,
   "ounces": 16
 },
 {
   "FIELD1": 121,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 409,
   "name": "Oaky's Oatmeal Stout",
   "style": "Oatmeal Stout",
   "brewery_id": 542,
   "ounces": 16
 },
 {
   "FIELD1": 122,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1294,
   "name": "Angry Orchard Apple Ginger",
   "style": "Cider",
   "brewery_id": 434,
   "ounces": 16
 },
 {
   "FIELD1": 123,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1293,
   "name": "Angry Orchard Crisp Apple",
   "style": "Cider",
   "brewery_id": 434,
   "ounces": 16
 },
 {
   "FIELD1": 124,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1292,
   "name": "Angry Orchard Crisp Apple",
   "style": "Cider",
   "brewery_id": 434,
   "ounces": 12
 },
 {
   "FIELD1": 125,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 2207,
   "name": "Golden One",
   "style": "Belgian Pale Ale",
   "brewery_id": 193,
   "ounces": 12
 },
 {
   "FIELD1": 126,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2040,
   "name": "Arjuna",
   "style": "Witbier",
   "brewery_id": 193,
   "ounces": 12
 },
 {
   "FIELD1": 127,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 2039,
   "name": "Uroboros",
   "style": "American Stout",
   "brewery_id": 193,
   "ounces": 12
 },
 {
   "FIELD1": 128,
   "abv": 0.071,
   "ibu": 75,
   "Idaho": 2511,
   "name": "Long Leaf",
   "style": "American IPA",
   "brewery_id": 69,
   "ounces": 16
 },
 {
   "FIELD1": 129,
   "abv": 0.047,
   "ibu": 19,
   "Idaho": 2510,
   "name": "Honey Badger Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 69,
   "ounces": 16
 },
 {
   "FIELD1": 130,
   "abv": 0.06,
   "ibu": 23,
   "Idaho": 2509,
   "name": "Porter (a/k/a Black Gold Porter)",
   "style": "American Porter",
   "brewery_id": 69,
   "ounces": 16
 },
 {
   "FIELD1": 131,
   "abv": 0.06,
   "ibu": 55,
   "Idaho": 413,
   "name": "Sky High Rye",
   "style": "American Pale Ale (APA)",
   "brewery_id": 541,
   "ounces": 12
 },
 {
   "FIELD1": 132,
   "abv": 0.062,
   "ibu": 17,
   "Idaho": 390,
   "name": "Whitsun",
   "style": "American Pale Wheat Ale",
   "brewery_id": 541,
   "ounces": 12
 },
 {
   "FIELD1": 133,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 735,
   "name": "On-On Ale (2008)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 513,
   "ounces": 12
 },
 {
   "FIELD1": 134,
   "abv": 0.092,
   "ibu": 50,
   "Idaho": 1333,
   "name": "Quakertown Stout",
   "style": "American Double / Imperial Stout",
   "brewery_id": 426,
   "ounces": 12
 },
 {
   "FIELD1": 135,
   "abv": 0.051,
   "ibu": 20,
   "Idaho": 1332,
   "name": "Greenbelt Farmhouse Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 426,
   "ounces": 12
 },
 {
   "FIELD1": 136,
   "abv": 0.052000000000000005,
   "ibu": 10,
   "Idaho": 1172,
   "name": "Mo's Gose",
   "style": "Gose",
   "brewery_id": 461,
   "ounces": 16
 },
 {
   "FIELD1": 137,
   "abv": 0.07,
   "ibu": 45,
   "Idaho": 1322,
   "name": "Green Bullet Organic India Pale Ale",
   "style": "American IPA",
   "brewery_id": 429,
   "ounces": 16
 },
 {
   "FIELD1": 138,
   "abv": 0.032,
   "ibu": 27,
   "Idaho": 550,
   "name": "Rocket Girl",
   "style": "Kölsch",
   "brewery_id": 528,
   "ounces": 12
 },
 {
   "FIELD1": 139,
   "abv": 0.053,
   "ibu": 26,
   "Idaho": 429,
   "name": "Ninja Porter",
   "style": "American Porter",
   "brewery_id": 528,
   "ounces": 12
 },
 {
   "FIELD1": 140,
   "abv": 0.06,
   "ibu": 69,
   "Idaho": 428,
   "name": "Shiva IPA",
   "style": "American IPA",
   "brewery_id": 528,
   "ounces": 12
 },
 {
   "FIELD1": 141,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1640,
   "name": "Aslan Kölsch",
   "style": "Kölsch",
   "brewery_id": 353,
   "ounces": 16
 },
 {
   "FIELD1": 142,
   "abv": 0.077,
   "ibu": null,
   "Idaho": 1639,
   "name": "Aslan IPA",
   "style": "American IPA",
   "brewery_id": 353,
   "ounces": 16
 },
 {
   "FIELD1": 143,
   "abv": 0.077,
   "ibu": null,
   "Idaho": 1638,
   "name": "Aslan Amber",
   "style": "American Amber / Red Ale",
   "brewery_id": 353,
   "ounces": 16
 },
 {
   "FIELD1": 144,
   "abv": 0.055999999999999994,
   "ibu": 27,
   "Idaho": 597,
   "name": "This Season's Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 523,
   "ounces": 12
 },
 {
   "FIELD1": 145,
   "abv": 0.07,
   "ibu": 67,
   "Idaho": 596,
   "name": "Independence Pass Ale",
   "style": "American IPA",
   "brewery_id": 523,
   "ounces": 12
 },
 {
   "FIELD1": 146,
   "abv": 0.057,
   "ibu": 40,
   "Idaho": 1580,
   "name": "Trolley Stop Stout",
   "style": "American Stout",
   "brewery_id": 374,
   "ounces": 12
 },
 {
   "FIELD1": 147,
   "abv": 0.08199999999999999,
   "ibu": 138,
   "Idaho": 980,
   "name": "Bitter Bitch Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 374,
   "ounces": 12
 },
 {
   "FIELD1": 148,
   "abv": 0.062,
   "ibu": 35,
   "Idaho": 979,
   "name": "Poop Deck Porter",
   "style": "American Porter",
   "brewery_id": 374,
   "ounces": 12
 },
 {
   "FIELD1": 149,
   "abv": 0.06,
   "ibu": 35,
   "Idaho": 978,
   "name": "Old Red Beard Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 374,
   "ounces": 12
 },
 {
   "FIELD1": 150,
   "abv": 0.075,
   "ibu": 115,
   "Idaho": 2503,
   "name": "Hop A-Peel",
   "style": "American Double / Imperial IPA",
   "brewery_id": 72,
   "ounces": 16
 },
 {
   "FIELD1": 151,
   "abv": 0.055,
   "ibu": 12,
   "Idaho": 2502,
   "name": "Vanilla Java Porter",
   "style": "American Porter",
   "brewery_id": 72,
   "ounces": 16
 },
 {
   "FIELD1": 152,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2495,
   "name": "Michelada",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 72,
   "ounces": 16
 },
 {
   "FIELD1": 153,
   "abv": 0.045,
   "ibu": 8,
   "Idaho": 534,
   "name": "Dirty Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 72,
   "ounces": 12
 },
 {
   "FIELD1": 154,
   "abv": 0.05,
   "ibu": 62,
   "Idaho": 528,
   "name": "Grand Circus IPA",
   "style": "American IPA",
   "brewery_id": 72,
   "ounces": 12
 },
 {
   "FIELD1": 155,
   "abv": 0.05,
   "ibu": 12,
   "Idaho": 527,
   "name": "Atwater's Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 72,
   "ounces": 12
 },
 {
   "FIELD1": 156,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1409,
   "name": "Heavy Machinery IPA Series #1: Heavy Fist",
   "style": "American Black Ale",
   "brewery_id": 413,
   "ounces": 16
 },
 {
   "FIELD1": 157,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 343,
   "name": "Fire Eagle IPA",
   "style": "American IPA",
   "brewery_id": 413,
   "ounces": 12
 },
 {
   "FIELD1": 158,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 342,
   "name": "Peacemaker",
   "style": "American Pale Ale (APA)",
   "brewery_id": 413,
   "ounces": 12
 },
 {
   "FIELD1": 159,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 341,
   "name": "Pearl-Snap",
   "style": "German Pilsener",
   "brewery_id": 413,
   "ounces": 12
 },
 {
   "FIELD1": 160,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 340,
   "name": "Black Thunder",
   "style": "Schwarzbier",
   "brewery_id": 413,
   "ounces": 12
 },
 {
   "FIELD1": 161,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 2589,
   "name": "Raja",
   "style": "American Double / Imperial IPA",
   "brewery_id": 37,
   "ounces": 12
 },
 {
   "FIELD1": 162,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 2546,
   "name": "Perzik Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 37,
   "ounces": 12
 },
 {
   "FIELD1": 163,
   "abv": 0.047,
   "ibu": 42,
   "Idaho": 146,
   "name": "Avery Joe’s Premium American Pilsner",
   "style": "German Pilsener",
   "brewery_id": 37,
   "ounces": 12
 },
 {
   "FIELD1": 164,
   "abv": 0.055999999999999994,
   "ibu": 10,
   "Idaho": 108,
   "name": "White Rascal",
   "style": "Witbier",
   "brewery_id": 37,
   "ounces": 12
 },
 {
   "FIELD1": 165,
   "abv": 0.063,
   "ibu": 69,
   "Idaho": 107,
   "name": "Avery India Pale Ale",
   "style": "American IPA",
   "brewery_id": 37,
   "ounces": 12
 },
 {
   "FIELD1": 166,
   "abv": 0.055,
   "ibu": 17,
   "Idaho": 106,
   "name": "Ellie’s Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 37,
   "ounces": 12
 },
 {
   "FIELD1": 167,
   "abv": 0.062,
   "ibu": 17,
   "Idaho": 1620,
   "name": "Pumpkin Beast",
   "style": "Pumpkin Ale",
   "brewery_id": 360,
   "ounces": 12
 },
 {
   "FIELD1": 168,
   "abv": 0.07200000000000001,
   "ibu": 22,
   "Idaho": 1579,
   "name": "OktoberBeast",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 360,
   "ounces": 12
 },
 {
   "FIELD1": 169,
   "abv": 0.048,
   "ibu": 23,
   "Idaho": 1228,
   "name": "Mad Beach",
   "style": "American Pale Wheat Ale",
   "brewery_id": 360,
   "ounces": 12
 },
 {
   "FIELD1": 170,
   "abv": 0.067,
   "ibu": null,
   "Idaho": 705,
   "name": "Hog Wild India Pale Ale",
   "style": "American IPA",
   "brewery_id": 360,
   "ounces": 12
 },
 {
   "FIELD1": 171,
   "abv": 0.092,
   "ibu": 5,
   "Idaho": 704,
   "name": "Devils Tramping Ground Tripel",
   "style": "Tripel",
   "brewery_id": 360,
   "ounces": 12
 },
 {
   "FIELD1": 172,
   "abv": 0.061,
   "ibu": 41,
   "Idaho": 702,
   "name": "Hot Rod Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 360,
   "ounces": 12
 },
 {
   "FIELD1": 173,
   "abv": 0.086,
   "ibu": null,
   "Idaho": 2058,
   "name": "Palate Mallet",
   "style": "American Double / Imperial IPA",
   "brewery_id": 235,
   "ounces": 12
 },
 {
   "FIELD1": 174,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1483,
   "name": "Back East Porter",
   "style": "American Porter",
   "brewery_id": 235,
   "ounces": 12
 },
 {
   "FIELD1": 175,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 1426,
   "name": "Back East Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 235,
   "ounces": 12
 },
 {
   "FIELD1": 176,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1132,
   "name": "Misty Mountain IPA",
   "style": "American IPA",
   "brewery_id": 235,
   "ounces": 12
 },
 {
   "FIELD1": 177,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1131,
   "name": "Back East Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 235,
   "ounces": 12
 },
 {
   "FIELD1": 178,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1876,
   "name": "Truck Stop Honey Brown Ale",
   "style": "English Brown Ale",
   "brewery_id": 286,
   "ounces": 12
 },
 {
   "FIELD1": 179,
   "abv": 0.06,
   "ibu": 43,
   "Idaho": 1875,
   "name": "Naked Pig Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 286,
   "ounces": 12
 },
 {
   "FIELD1": 180,
   "abv": 0.068,
   "ibu": 70,
   "Idaho": 966,
   "name": "Topcutter India Pale Ale",
   "style": "American IPA",
   "brewery_id": 483,
   "ounces": 12
 },
 {
   "FIELD1": 181,
   "abv": 0.044000000000000004,
   "ibu": 38,
   "Idaho": 965,
   "name": "Field 41 Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 483,
   "ounces": 12
 },
 {
   "FIELD1": 182,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 2593,
   "name": "Grapefruit Sculpin",
   "style": "American IPA",
   "brewery_id": 34,
   "ounces": 12
 },
 {
   "FIELD1": 183,
   "abv": 0.038,
   "ibu": 40,
   "Idaho": 2105,
   "name": "Even Keel",
   "style": "American IPA",
   "brewery_id": 34,
   "ounces": 12
 },
 {
   "FIELD1": 184,
   "abv": 0.052000000000000005,
   "ibu": 23,
   "Idaho": 1401,
   "name": "Ballast Point Pale Ale",
   "style": "Kölsch",
   "brewery_id": 34,
   "ounces": 12
 },
 {
   "FIELD1": 185,
   "abv": 0.07,
   "ibu": 75,
   "Idaho": 1400,
   "name": "Big Eye India Pale Ale",
   "style": "American IPA",
   "brewery_id": 34,
   "ounces": 12
 },
 {
   "FIELD1": 186,
   "abv": 0.046,
   "ibu": null,
   "Idaho": 1019,
   "name": "Longfin Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 34,
   "ounces": 12
 },
 {
   "FIELD1": 187,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 1018,
   "name": "Sculpin IPA",
   "style": "American IPA",
   "brewery_id": 34,
   "ounces": 12
 },
 {
   "FIELD1": 188,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1776,
   "name": "All Nighter Ale",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 318,
   "ounces": 12
 },
 {
   "FIELD1": 189,
   "abv": 0.045,
   "ibu": 20,
   "Idaho": 1644,
   "name": "Banner American Rye",
   "style": "Rye Beer",
   "brewery_id": 318,
   "ounces": 12
 },
 {
   "FIELD1": 190,
   "abv": 0.035,
   "ibu": 45,
   "Idaho": 1643,
   "name": "Banner American Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 318,
   "ounces": 12
 },
 {
   "FIELD1": 191,
   "abv": 0.07,
   "ibu": 46,
   "Idaho": 2618,
   "name": "Thai.p.a",
   "style": "American IPA",
   "brewery_id": 20,
   "ounces": 16
 },
 {
   "FIELD1": 192,
   "abv": 0.06,
   "ibu": 60,
   "Idaho": 2005,
   "name": "Barrio Blanco",
   "style": "American IPA",
   "brewery_id": 251,
   "ounces": 12
 },
 {
   "FIELD1": 193,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1343,
   "name": "Barrio Tucson Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 251,
   "ounces": 12
 },
 {
   "FIELD1": 194,
   "abv": 0.049,
   "ibu": 22,
   "Idaho": 2404,
   "name": "Hop in the ‘Pool Helles",
   "style": "American Pilsner",
   "brewery_id": 116,
   "ounces": 12
 },
 {
   "FIELD1": 195,
   "abv": 0.067,
   "ibu": 60,
   "Idaho": 2323,
   "name": "Ultra Gnar Gnar IPA",
   "style": "American IPA",
   "brewery_id": 116,
   "ounces": 12
 },
 {
   "FIELD1": 196,
   "abv": 0.068,
   "ibu": 62,
   "Idaho": 2189,
   "name": "In-Tents India Pale Lager",
   "style": "American Pale Lager",
   "brewery_id": 116,
   "ounces": 12
 },
 {
   "FIELD1": 197,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 2188,
   "name": "Lost Meridian Wit",
   "style": "Witbier",
   "brewery_id": 116,
   "ounces": 12
 },
 {
   "FIELD1": 198,
   "abv": 0.051,
   "ibu": 45,
   "Idaho": 2187,
   "name": "Celestial Meridian Cascadian Dark Lager",
   "style": "Euro Dark Lager",
   "brewery_id": 116,
   "ounces": 12
 },
 {
   "FIELD1": 199,
   "abv": 0.054000000000000006,
   "ibu": 55,
   "Idaho": 1966,
   "name": "Wagon Party",
   "style": "California Common / Steam Beer",
   "brewery_id": 258,
   "ounces": 12
 },
 {
   "FIELD1": 200,
   "abv": 0.067,
   "ibu": 70,
   "Idaho": 1965,
   "name": "Sky-Five",
   "style": "American IPA",
   "brewery_id": 258,
   "ounces": 12
 },
 {
   "FIELD1": 201,
   "abv": 0.05,
   "ibu": 28,
   "Idaho": 1964,
   "name": "Stargrazer",
   "style": "Schwarzbier",
   "brewery_id": 258,
   "ounces": 12
 },
 {
   "FIELD1": 202,
   "abv": 0.054000000000000006,
   "ibu": 48,
   "Idaho": 1963,
   "name": "Wonderstuff",
   "style": "German Pilsener",
   "brewery_id": 258,
   "ounces": 12
 },
 {
   "FIELD1": 203,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 1855,
   "name": "Tarnation California-Style Lager",
   "style": "California Common / Steam Beer",
   "brewery_id": 292,
   "ounces": 12
 },
 {
   "FIELD1": 204,
   "abv": 0.07,
   "ibu": 42,
   "Idaho": 1778,
   "name": "On the Count of 3 (2015)",
   "style": "Hefeweizen",
   "brewery_id": 292,
   "ounces": 16
 },
 {
   "FIELD1": 205,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1209,
   "name": "Summer Swelter",
   "style": "American Pale Wheat Ale",
   "brewery_id": 292,
   "ounces": 12
 },
 {
   "FIELD1": 206,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 954,
   "name": "Phantom Punch Winter Stout",
   "style": "Foreign / Export Stout",
   "brewery_id": 292,
   "ounces": 12
 },
 {
   "FIELD1": 207,
   "abv": 0.066,
   "ibu": null,
   "Idaho": 910,
   "name": "Hayride Autumn Ale",
   "style": "Rye Beer",
   "brewery_id": 292,
   "ounces": 12
 },
 {
   "FIELD1": 208,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 707,
   "name": "Celsius Summer Ale (2012)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 292,
   "ounces": 12
 },
 {
   "FIELD1": 209,
   "abv": 0.055,
   "ibu": 35,
   "Idaho": 533,
   "name": "Amber Road",
   "style": "American Amber / Red Ale",
   "brewery_id": 292,
   "ounces": 12
 },
 {
   "FIELD1": 210,
   "abv": 0.049,
   "ibu": 28,
   "Idaho": 183,
   "name": "Pamola Xtra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 292,
   "ounces": 12
 },
 {
   "FIELD1": 211,
   "abv": 0.069,
   "ibu": 69,
   "Idaho": 182,
   "name": "Stowaway IPA",
   "style": "American IPA",
   "brewery_id": 292,
   "ounces": 12
 },
 {
   "FIELD1": 212,
   "abv": 0.08800000000000001,
   "ibu": 108,
   "Idaho": 1806,
   "name": "Hoptopus Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 306,
   "ounces": 16
 },
 {
   "FIELD1": 213,
   "abv": 0.05,
   "ibu": 10,
   "Idaho": 2435,
   "name": "Watermelon Ale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 103,
   "ounces": 12
 },
 {
   "FIELD1": 214,
   "abv": 0.057999999999999996,
   "ibu": 45,
   "Idaho": 2423,
   "name": "Fenway American Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 103,
   "ounces": 12
 },
 {
   "FIELD1": 215,
   "abv": 0.068,
   "ibu": 85,
   "Idaho": 2420,
   "name": "Back Bay IPA",
   "style": "American IPA",
   "brewery_id": 103,
   "ounces": 12
 },
 {
   "FIELD1": 216,
   "abv": 0.048,
   "ibu": 16,
   "Idaho": 2419,
   "name": "Bunker Hill Blueberry Ale ",
   "style": "Other",
   "brewery_id": 103,
   "ounces": 12
 },
 {
   "FIELD1": 217,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 2494,
   "name": "Oberon",
   "style": "American Pale Wheat Ale",
   "brewery_id": 76,
   "ounces": 12
 },
 {
   "FIELD1": 218,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2325,
   "name": "Smitten",
   "style": "Rye Beer",
   "brewery_id": 76,
   "ounces": 16
 },
 {
   "FIELD1": 219,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2022,
   "name": "Winter White",
   "style": "Witbier",
   "brewery_id": 76,
   "ounces": 16
 },
 {
   "FIELD1": 220,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 1989,
   "name": "Oberon",
   "style": "American Pale Wheat Ale",
   "brewery_id": 76,
   "ounces": 16
 },
 {
   "FIELD1": 221,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1988,
   "name": "Two Hearted",
   "style": "American IPA",
   "brewery_id": 76,
   "ounces": 16
 },
 {
   "FIELD1": 222,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 1955,
   "name": "Best Brown",
   "style": "American Brown Ale",
   "brewery_id": 76,
   "ounces": 16
 },
 {
   "FIELD1": 223,
   "abv": 0.044000000000000004,
   "ibu": 44,
   "Idaho": 2558,
   "name": "Moar",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 53,
   "ounces": 12
 },
 {
   "FIELD1": 224,
   "abv": 0.083,
   "ibu": null,
   "Idaho": 2557,
   "name": "Uber Lupin Schwarz IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 53,
   "ounces": 16
 },
 {
   "FIELD1": 225,
   "abv": 0.057,
   "ibu": 27,
   "Idaho": 2556,
   "name": "Nordic Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 53,
   "ounces": 12
 },
 {
   "FIELD1": 226,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2496,
   "name": "Cold Press",
   "style": "American Black Ale",
   "brewery_id": 75,
   "ounces": 12
 },
 {
   "FIELD1": 227,
   "abv": 0.07200000000000001,
   "ibu": 87,
   "Idaho": 2410,
   "name": "Harness the Winter",
   "style": "American IPA",
   "brewery_id": 75,
   "ounces": 12
 },
 {
   "FIELD1": 228,
   "abv": 0.055999999999999994,
   "ibu": 32,
   "Idaho": 1902,
   "name": "14° ESB ",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 75,
   "ounces": 12
 },
 {
   "FIELD1": 229,
   "abv": 0.062,
   "ibu": 68,
   "Idaho": 1901,
   "name": "Bent Hop Golden IPA",
   "style": "American IPA",
   "brewery_id": 75,
   "ounces": 12
 },
 {
   "FIELD1": 230,
   "abv": 0.06,
   "ibu": 34,
   "Idaho": 1261,
   "name": "Bent Paddle Black Ale",
   "style": "American Black Ale",
   "brewery_id": 75,
   "ounces": 12
 },
 {
   "FIELD1": 231,
   "abv": 0.05,
   "ibu": 38,
   "Idaho": 1253,
   "name": "Venture Pils",
   "style": "German Pilsener",
   "brewery_id": 75,
   "ounces": 12
 },
 {
   "FIELD1": 232,
   "abv": 0.055,
   "ibu": 40,
   "Idaho": 1900,
   "name": "Lost Sailor IPA",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 278,
   "ounces": 12
 },
 {
   "FIELD1": 233,
   "abv": 0.053,
   "ibu": 20,
   "Idaho": 1317,
   "name": "Steel Rail Extra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 278,
   "ounces": 12
 },
 {
   "FIELD1": 234,
   "abv": 0.078,
   "ibu": null,
   "Idaho": 1158,
   "name": "La Frontera Premium IPA",
   "style": "American IPA",
   "brewery_id": 463,
   "ounces": 12
 },
 {
   "FIELD1": 235,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1157,
   "name": "Tejas Lager",
   "style": "Czech Pilsener",
   "brewery_id": 463,
   "ounces": 12
 },
 {
   "FIELD1": 236,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 1156,
   "name": "Number 22 Porter",
   "style": "American Porter",
   "brewery_id": 463,
   "ounces": 12
 },
 {
   "FIELD1": 237,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 1155,
   "name": "Big Bend Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 463,
   "ounces": 12
 },
 {
   "FIELD1": 238,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1154,
   "name": "Terlingua Gold",
   "style": "American Blonde Ale",
   "brewery_id": 463,
   "ounces": 12
 },
 {
   "FIELD1": 239,
   "abv": 0.081,
   "ibu": 17,
   "Idaho": 2104,
   "name": "Aprè Shred",
   "style": "American Strong Ale",
   "brewery_id": 220,
   "ounces": 16
 },
 {
   "FIELD1": 240,
   "abv": 0.095,
   "ibu": 104,
   "Idaho": 1762,
   "name": "Hemlock Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 220,
   "ounces": 12
 },
 {
   "FIELD1": 241,
   "abv": 0.040999999999999995,
   "ibu": null,
   "Idaho": 1422,
   "name": "West Portal Colorado Common Summer Ale",
   "style": "California Common / Steam Beer",
   "brewery_id": 220,
   "ounces": 16
 },
 {
   "FIELD1": 242,
   "abv": 0.067,
   "ibu": 85,
   "Idaho": 1067,
   "name": "Disconnected Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 220,
   "ounces": 16
 },
 {
   "FIELD1": 243,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1003,
   "name": "Big Elm IPA",
   "style": "American IPA",
   "brewery_id": 477,
   "ounces": 12
 },
 {
   "FIELD1": 244,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1002,
   "name": "Gerry Dog Stout",
   "style": "American Stout",
   "brewery_id": 477,
   "ounces": 12
 },
 {
   "FIELD1": 245,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1001,
   "name": "413 Farmhouse Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 477,
   "ounces": 12
 },
 {
   "FIELD1": 246,
   "abv": 0.08,
   "ibu": 54,
   "Idaho": 2639,
   "name": "Dark Star",
   "style": "American Stout",
   "brewery_id": 8,
   "ounces": 16
 },
 {
   "FIELD1": 247,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2469,
   "name": "Ryecoe",
   "style": "American IPA",
   "brewery_id": 8,
   "ounces": 16
 },
 {
   "FIELD1": 248,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2586,
   "name": "Blueberry Blonde",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 40,
   "ounces": 12
 },
 {
   "FIELD1": 249,
   "abv": 0.075,
   "ibu": 60,
   "Idaho": 2585,
   "name": "Galaxy IPA",
   "style": "American IPA",
   "brewery_id": 40,
   "ounces": 16
 },
 {
   "FIELD1": 250,
   "abv": 0.05,
   "ibu": 32,
   "Idaho": 643,
   "name": "Big River Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 519,
   "ounces": 12
 },
 {
   "FIELD1": 251,
   "abv": 0.06,
   "ibu": 55,
   "Idaho": 632,
   "name": "House Brand IPA",
   "style": "American IPA",
   "brewery_id": 519,
   "ounces": 12
 },
 {
   "FIELD1": 252,
   "abv": 0.062,
   "ibu": 65,
   "Idaho": 1714,
   "name": "Big Sky IPA",
   "style": "American IPA",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 253,
   "abv": 0.05,
   "ibu": 40,
   "Idaho": 1713,
   "name": "Scape Goat Pale Ale",
   "style": "English Pale Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 254,
   "abv": 0.05,
   "ibu": 35,
   "Idaho": 1712,
   "name": "Montana Trout Slayer Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 255,
   "abv": 0.051,
   "ibu": 26,
   "Idaho": 1711,
   "name": "Moose Drool Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 256,
   "abv": 0.07200000000000001,
   "ibu": 60,
   "Idaho": 1456,
   "name": "Powder Hound Winter Ale",
   "style": "English Strong Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 257,
   "abv": 0.051,
   "ibu": 26,
   "Idaho": 767,
   "name": "Moose Drool Brown Ale (2011)",
   "style": "American Brown Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 258,
   "abv": 0.05,
   "ibu": 35,
   "Idaho": 766,
   "name": "Montana Trout Slayer Ale (2012)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 259,
   "abv": 0.062,
   "ibu": 65,
   "Idaho": 579,
   "name": "Big Sky IPA (2012)",
   "style": "American IPA",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 260,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 168,
   "name": "Summer Honey",
   "style": "American Blonde Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 261,
   "abv": 0.05,
   "ibu": 40,
   "Idaho": 159,
   "name": "Scape Goat Pale Ale (2010)",
   "style": "English Pale Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 262,
   "abv": 0.05,
   "ibu": 35,
   "Idaho": 35,
   "name": "Montana Trout Slayer Ale (2009)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 263,
   "abv": 0.051,
   "ibu": 26,
   "Idaho": 34,
   "name": "Moose Drool Brown Ale (2009)",
   "style": "American Brown Ale",
   "brewery_id": 336,
   "ounces": 12
 },
 {
   "FIELD1": 264,
   "abv": 0.069,
   "ibu": 81,
   "Idaho": 2096,
   "name": "Arcus IPA",
   "style": "American IPA",
   "brewery_id": 221,
   "ounces": 12
 },
 {
   "FIELD1": 265,
   "abv": 0.057999999999999996,
   "ibu": 38,
   "Idaho": 2095,
   "name": "Wavemaker",
   "style": "American Amber / Red Ale",
   "brewery_id": 221,
   "ounces": 12
 },
 {
   "FIELD1": 266,
   "abv": 0.053,
   "ibu": 43,
   "Idaho": 1257,
   "name": "Jack Pine Savage",
   "style": "American Pale Ale (APA)",
   "brewery_id": 444,
   "ounces": 16
 },
 {
   "FIELD1": 267,
   "abv": 0.099,
   "ibu": 85,
   "Idaho": 1256,
   "name": "Forest Fire Imperial Smoked Rye",
   "style": "Rye Beer",
   "brewery_id": 444,
   "ounces": 16
 },
 {
   "FIELD1": 268,
   "abv": 0.098,
   "ibu": 76,
   "Idaho": 1255,
   "name": "Bad Axe Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 444,
   "ounces": 16
 },
 {
   "FIELD1": 269,
   "abv": 0.055,
   "ibu": 35,
   "Idaho": 986,
   "name": "Morning Wood",
   "style": "Oatmeal Stout",
   "brewery_id": 444,
   "ounces": 16
 },
 {
   "FIELD1": 270,
   "abv": 0.066,
   "ibu": 50,
   "Idaho": 985,
   "name": "Bark Bite IPA",
   "style": "American IPA",
   "brewery_id": 444,
   "ounces": 16
 },
 {
   "FIELD1": 271,
   "abv": 0.055,
   "ibu": 45,
   "Idaho": 2508,
   "name": "Jalapeno Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 70,
   "ounces": 16
 },
 {
   "FIELD1": 272,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1441,
   "name": "Blown Out Brown",
   "style": "American Brown Ale",
   "brewery_id": 407,
   "ounces": 12
 },
 {
   "FIELD1": 273,
   "abv": 0.063,
   "ibu": null,
   "Idaho": 1413,
   "name": "Single Hop Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 407,
   "ounces": 12
 },
 {
   "FIELD1": 274,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 1411,
   "name": "Sawtooth Ale",
   "style": "American Blonde Ale",
   "brewery_id": 407,
   "ounces": 12
 },
 {
   "FIELD1": 275,
   "abv": 0.07200000000000001,
   "ibu": 75,
   "Idaho": 2620,
   "name": "Saucy Intruder",
   "style": "Rye Beer",
   "brewery_id": 18,
   "ounces": 16
 },
 {
   "FIELD1": 276,
   "abv": 0.045,
   "ibu": 16,
   "Idaho": 2412,
   "name": "Deception",
   "style": "American Blonde Ale",
   "brewery_id": 112,
   "ounces": 12
 },
 {
   "FIELD1": 277,
   "abv": 0.075,
   "ibu": 35,
   "Idaho": 1898,
   "name": "Blackmarket Rye IPA",
   "style": "American IPA",
   "brewery_id": 112,
   "ounces": 12
 },
 {
   "FIELD1": 278,
   "abv": 0.05,
   "ibu": 8,
   "Idaho": 1897,
   "name": "Black Market Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 112,
   "ounces": 12
 },
 {
   "FIELD1": 279,
   "abv": 0.057999999999999996,
   "ibu": 44,
   "Idaho": 1896,
   "name": "Aftermath Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 112,
   "ounces": 12
 },
 {
   "FIELD1": 280,
   "abv": 0.071,
   "ibu": 83,
   "Idaho": 1850,
   "name": "American India Red Ale",
   "style": "American Strong Ale",
   "brewery_id": 294,
   "ounces": 12
 },
 {
   "FIELD1": 281,
   "abv": 0.071,
   "ibu": 45,
   "Idaho": 1849,
   "name": "American Red Porter",
   "style": "American Porter",
   "brewery_id": 294,
   "ounces": 12
 },
 {
   "FIELD1": 282,
   "abv": 0.078,
   "ibu": 34,
   "Idaho": 1848,
   "name": "American Red Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 294,
   "ounces": 12
 },
 {
   "FIELD1": 283,
   "abv": 0.066,
   "ibu": 44,
   "Idaho": 1847,
   "name": "Colorado Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 294,
   "ounces": 12
 },
 {
   "FIELD1": 284,
   "abv": 0.048,
   "ibu": 16,
   "Idaho": 2485,
   "name": "Saddle Bronc Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 79,
   "ounces": 12
 },
 {
   "FIELD1": 285,
   "abv": 0.046,
   "ibu": 20,
   "Idaho": 2484,
   "name": "Bomber Mountain Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 79,
   "ounces": 12
 },
 {
   "FIELD1": 286,
   "abv": 0.073,
   "ibu": null,
   "Idaho": 2449,
   "name": "Flying Sailor",
   "style": "Rye Beer",
   "brewery_id": 95,
   "ounces": 12
 },
 {
   "FIELD1": 287,
   "abv": 0.048,
   "ibu": 47,
   "Idaho": 2634,
   "name": "Nordskye ",
   "style": "American IPA",
   "brewery_id": 12,
   "ounces": 12
 },
 {
   "FIELD1": 288,
   "abv": 0.06,
   "ibu": 30,
   "Idaho": 2153,
   "name": "North Third Stout",
   "style": "Foreign / Export Stout",
   "brewery_id": 12,
   "ounces": 12
 },
 {
   "FIELD1": 289,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1953,
   "name": "Honey Lav",
   "style": "American Pale Wheat Ale",
   "brewery_id": 12,
   "ounces": 12
 },
 {
   "FIELD1": 290,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1496,
   "name": "Coconut Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 12,
   "ounces": 12
 },
 {
   "FIELD1": 291,
   "abv": 0.07,
   "ibu": 51,
   "Idaho": 1481,
   "name": "51K IPA",
   "style": "American IPA",
   "brewery_id": 12,
   "ounces": 12
 },
 {
   "FIELD1": 292,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1480,
   "name": "Grand Rabbits",
   "style": "Cream Ale",
   "brewery_id": 12,
   "ounces": 12
 },
 {
   "FIELD1": 293,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1564,
   "name": "1800 Big Log Wheat (2012)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 294,
   "abv": null,
   "ibu": null,
   "Idaho": 1541,
   "name": "Double Play Pilsner",
   "style": "American Pilsner",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 295,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1321,
   "name": "Brewerhood Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 296,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1320,
   "name": "Last Call Imperial Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 297,
   "abv": 0.096,
   "ibu": null,
   "Idaho": 1319,
   "name": "Pernicious Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 298,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1303,
   "name": "6-4-3 Double Play Pilsner",
   "style": "German Pilsener",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 299,
   "abv": null,
   "ibu": null,
   "Idaho": 1025,
   "name": "N Street Drive-In 50th Anniversary IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 300,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1012,
   "name": "467 Ethan's Stout",
   "style": "American Stout",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 301,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 942,
   "name": "1335 Wicked Snout",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 302,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 937,
   "name": "543 Skull Creek Fresh Hopped Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 303,
   "abv": 0.055999999999999994,
   "ibu": 37,
   "Idaho": 888,
   "name": "1327 Pod's ESB",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 304,
   "abv": 0.055999999999999994,
   "ibu": 37,
   "Idaho": 886,
   "name": "1327 Pod's ESB",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 305,
   "abv": 0.055999999999999994,
   "ibu": 37,
   "Idaho": 612,
   "name": "1327 Pod's ESB",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 306,
   "abv": 0.046,
   "ibu": 35,
   "Idaho": 611,
   "name": "834 Happy As Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 380,
   "ounces": 12
 },
 {
   "FIELD1": 307,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 1372,
   "name": "Yellow Collar",
   "style": "Mead",
   "brewery_id": 422,
   "ounces": 12
 },
 {
   "FIELD1": 308,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 1371,
   "name": "Green Collar",
   "style": "Mead",
   "brewery_id": 422,
   "ounces": 12
 },
 {
   "FIELD1": 309,
   "abv": 0.08,
   "ibu": 80,
   "Idaho": 1812,
   "name": "Quarter Mile Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 304,
   "ounces": 12
 },
 {
   "FIELD1": 310,
   "abv": 0.059000000000000004,
   "ibu": 60,
   "Idaho": 1547,
   "name": "Full Nelson Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 382,
   "ounces": 12
 },
 {
   "FIELD1": 311,
   "abv": 0.065,
   "ibu": 30,
   "Idaho": 1546,
   "name": "Steel Wheels ESB",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 382,
   "ounces": 12
 },
 {
   "FIELD1": 312,
   "abv": 0.053,
   "ibu": 22,
   "Idaho": 1545,
   "name": "Blue Mountain Classic Lager",
   "style": "Euro Pale Lager",
   "brewery_id": 382,
   "ounces": 12
 },
 {
   "FIELD1": 313,
   "abv": 0.059000000000000004,
   "ibu": 60,
   "Idaho": 119,
   "name": "Full Nelson Pale Ale (2010)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 382,
   "ounces": 12
 },
 {
   "FIELD1": 314,
   "abv": 0.049,
   "ibu": 16,
   "Idaho": 1408,
   "name": "Kölsch 151",
   "style": "Kölsch",
   "brewery_id": 414,
   "ounces": 12
 },
 {
   "FIELD1": 315,
   "abv": null,
   "ibu": null,
   "Idaho": 2490,
   "name": "Professor Black",
   "style": "American Stout",
   "brewery_id": 77,
   "ounces": 12
 },
 {
   "FIELD1": 316,
   "abv": null,
   "ibu": null,
   "Idaho": 2489,
   "name": "Little Boss",
   "style": "American Pale Wheat Ale",
   "brewery_id": 77,
   "ounces": 12
 },
 {
   "FIELD1": 317,
   "abv": null,
   "ibu": null,
   "Idaho": 2488,
   "name": "Van Dayum!",
   "style": "American Amber / Red Ale",
   "brewery_id": 77,
   "ounces": 12
 },
 {
   "FIELD1": 318,
   "abv": null,
   "ibu": null,
   "Idaho": 2487,
   "name": "Spirit Animal",
   "style": "American Pale Ale (APA)",
   "brewery_id": 77,
   "ounces": 12
 },
 {
   "FIELD1": 319,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 939,
   "name": "Toxic Sludge",
   "style": "American Black Ale",
   "brewery_id": 489,
   "ounces": 16
 },
 {
   "FIELD1": 320,
   "abv": 0.06,
   "ibu": 40,
   "Idaho": 692,
   "name": "Blue Point White IPA",
   "style": "American White IPA",
   "brewery_id": 489,
   "ounces": 12
 },
 {
   "FIELD1": 321,
   "abv": 0.044000000000000004,
   "ibu": 16,
   "Idaho": 667,
   "name": "Blue Point Summer Ale",
   "style": "American Blonde Ale",
   "brewery_id": 489,
   "ounces": 12
 },
 {
   "FIELD1": 322,
   "abv": 0.055,
   "ibu": 28,
   "Idaho": 665,
   "name": "Toasted Lager",
   "style": "Vienna Lager",
   "brewery_id": 489,
   "ounces": 12
 },
 {
   "FIELD1": 323,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1607,
   "name": "Bohemian Export Lager",
   "style": "Dortmunder / Export Lager",
   "brewery_id": 364,
   "ounces": 12
 },
 {
   "FIELD1": 324,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 1597,
   "name": "Altus Bohemes Altbier",
   "style": "Altbier",
   "brewery_id": 364,
   "ounces": 12
 },
 {
   "FIELD1": 325,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 344,
   "name": "Cherny Bock",
   "style": "Schwarzbier",
   "brewery_id": 364,
   "ounces": 12
 },
 {
   "FIELD1": 326,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 89,
   "name": "Czech Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 364,
   "ounces": 12
 },
 {
   "FIELD1": 327,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 88,
   "name": "Viennese Lager",
   "style": "Vienna Lager",
   "brewery_id": 364,
   "ounces": 12
 },
 {
   "FIELD1": 328,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1569,
   "name": "Mad Manatee IPA",
   "style": "American IPA",
   "brewery_id": 378,
   "ounces": 12
 },
 {
   "FIELD1": 329,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1568,
   "name": "Killer Whale Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 378,
   "ounces": 12
 },
 {
   "FIELD1": 330,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1188,
   "name": "Duke's Cold Nose Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 378,
   "ounces": 12
 },
 {
   "FIELD1": 331,
   "abv": 0.042,
   "ibu": 30,
   "Idaho": 1891,
   "name": "Longhop IPA",
   "style": "American IPA",
   "brewery_id": 281,
   "ounces": 16
 },
 {
   "FIELD1": 332,
   "abv": 0.04,
   "ibu": 34,
   "Idaho": 1890,
   "name": "Lucky Buck",
   "style": "Irish Dry Stout",
   "brewery_id": 281,
   "ounces": 16
 },
 {
   "FIELD1": 333,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 577,
   "name": "Bomb Lager (New Recipe)",
   "style": "Munich Helles Lager",
   "brewery_id": 525,
   "ounces": 12
 },
 {
   "FIELD1": 334,
   "abv": 0.045,
   "ibu": 27,
   "Idaho": 513,
   "name": "Bomb Lager (Old Recipe)",
   "style": "Munich Helles Lager",
   "brewery_id": 525,
   "ounces": 12
 },
 {
   "FIELD1": 335,
   "abv": 0.066,
   "ibu": 72,
   "Idaho": 2422,
   "name": "Firestarter India Pale Ale",
   "style": "American IPA",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 336,
   "abv": 0.075,
   "ibu": 22,
   "Idaho": 1727,
   "name": "Kilt Dropper Scotch Ale",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 107,
   "ounces": 16
 },
 {
   "FIELD1": 337,
   "abv": 0.048,
   "ibu": 30,
   "Idaho": 1614,
   "name": "Wood Splitter Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 107,
   "ounces": 16
 },
 {
   "FIELD1": 338,
   "abv": 0.055999999999999994,
   "ibu": 26,
   "Idaho": 1613,
   "name": "Gyptoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 339,
   "abv": 0.07,
   "ibu": 94,
   "Idaho": 1549,
   "name": "Farmer Wirtz India Pale Ale",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 107,
   "ounces": 16
 },
 {
   "FIELD1": 340,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1548,
   "name": "Slow & Steady Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 341,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1517,
   "name": "Pink-I Raspberry IPA",
   "style": "American IPA",
   "brewery_id": 107,
   "ounces": 16
 },
 {
   "FIELD1": 342,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1500,
   "name": "Moe's Original Bar B Que 'Bama Brew Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 343,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1421,
   "name": "Live Local Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 344,
   "abv": 0.048,
   "ibu": 38,
   "Idaho": 1360,
   "name": "Screaming Eagle Special Ale ESB",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 345,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 1184,
   "name": "Dirtbag Dunkel",
   "style": "Munich Dunkel Lager",
   "brewery_id": 107,
   "ounces": 16
 },
 {
   "FIELD1": 346,
   "abv": 0.053,
   "ibu": 45,
   "Idaho": 1183,
   "name": "Kindler Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 347,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 1023,
   "name": "Mistress Winter Wheat",
   "style": "Winter Warmer",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 348,
   "abv": 0.061,
   "ibu": null,
   "Idaho": 998,
   "name": "Tent Pole Vanilla Porter",
   "style": "American Porter",
   "brewery_id": 107,
   "ounces": 16
 },
 {
   "FIELD1": 349,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 997,
   "name": "Awry Rye Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 350,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 996,
   "name": "Demshitz Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 351,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 931,
   "name": "Wood Splitter Pilsner (2012)",
   "style": "Czech Pilsener",
   "brewery_id": 107,
   "ounces": 12
 },
 {
   "FIELD1": 352,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 798,
   "name": "Brush Creek Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 107,
   "ounces": 16
 },
 {
   "FIELD1": 353,
   "abv": 0.066,
   "ibu": 72,
   "Idaho": 633,
   "name": "Firestarter India Pale Ale",
   "style": "American IPA",
   "brewery_id": 107,
   "ounces": 16
 },
 {
   "FIELD1": 354,
   "abv": 0.071,
   "ibu": 16,
   "Idaho": 2062,
   "name": "Noche Dulce",
   "style": "American Porter",
   "brewery_id": 231,
   "ounces": 16
 },
 {
   "FIELD1": 355,
   "abv": 0.045,
   "ibu": 8,
   "Idaho": 1830,
   "name": "Porch Rocker",
   "style": "Radler",
   "brewery_id": 300,
   "ounces": 12
 },
 {
   "FIELD1": 356,
   "abv": 0.065,
   "ibu": 45,
   "Idaho": 1629,
   "name": "Rebel IPA",
   "style": "American IPA",
   "brewery_id": 300,
   "ounces": 16
 },
 {
   "FIELD1": 357,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1601,
   "name": "Cold Snap",
   "style": "Witbier",
   "brewery_id": 300,
   "ounces": 12
 },
 {
   "FIELD1": 358,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 1427,
   "name": "Samuel Adams Winter Lager",
   "style": "Bock",
   "brewery_id": 300,
   "ounces": 12
 },
 {
   "FIELD1": 359,
   "abv": 0.049,
   "ibu": 30,
   "Idaho": 1349,
   "name": "Boston Lager",
   "style": "Vienna Lager",
   "brewery_id": 300,
   "ounces": 16
 },
 {
   "FIELD1": 360,
   "abv": 0.049,
   "ibu": 30,
   "Idaho": 1310,
   "name": "Boston Lager",
   "style": "Vienna Lager",
   "brewery_id": 300,
   "ounces": 12
 },
 {
   "FIELD1": 361,
   "abv": 0.053,
   "ibu": 15,
   "Idaho": 1281,
   "name": "Samuel Adams Octoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 300,
   "ounces": 12
 },
 {
   "FIELD1": 362,
   "abv": 0.053,
   "ibu": 7,
   "Idaho": 1144,
   "name": "Samuel Adams Summer Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 300,
   "ounces": 12
 },
 {
   "FIELD1": 363,
   "abv": 0.049,
   "ibu": 30,
   "Idaho": 1143,
   "name": "Boston Lager",
   "style": "Vienna Lager",
   "brewery_id": 300,
   "ounces": 12
 },
 {
   "FIELD1": 364,
   "abv": 0.049,
   "ibu": 35,
   "Idaho": 1395,
   "name": "Hazed & Infused",
   "style": "American Pale Ale (APA)",
   "brewery_id": 417,
   "ounces": 12
 },
 {
   "FIELD1": 365,
   "abv": 0.057,
   "ibu": 35,
   "Idaho": 808,
   "name": "Hoopla Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 417,
   "ounces": 12
 },
 {
   "FIELD1": 366,
   "abv": 0.049,
   "ibu": 35,
   "Idaho": 81,
   "name": "Hazed & Infused (2010)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 417,
   "ounces": 12
 },
 {
   "FIELD1": 367,
   "abv": 0.062,
   "ibu": 80,
   "Idaho": 2596,
   "name": "Heavy Lifting",
   "style": "American IPA",
   "brewery_id": 31,
   "ounces": 12
 },
 {
   "FIELD1": 368,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2300,
   "name": "1492",
   "style": "American Pale Ale (APA)",
   "brewery_id": 167,
   "ounces": 12
 },
 {
   "FIELD1": 369,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 2299,
   "name": "Mango Ginger",
   "style": "American IPA",
   "brewery_id": 167,
   "ounces": 12
 },
 {
   "FIELD1": 370,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 2298,
   "name": "Passenger",
   "style": "English Dark Mild Ale",
   "brewery_id": 167,
   "ounces": 12
 },
 {
   "FIELD1": 371,
   "abv": 0.06,
   "ibu": 52,
   "Idaho": 2107,
   "name": "Plum St. Porter",
   "style": "American Porter",
   "brewery_id": 219,
   "ounces": 12
 },
 {
   "FIELD1": 372,
   "abv": 0.057,
   "ibu": 52,
   "Idaho": 1573,
   "name": "Plum St. Porter",
   "style": "American Porter",
   "brewery_id": 219,
   "ounces": 12
 },
 {
   "FIELD1": 373,
   "abv": 0.07,
   "ibu": 80,
   "Idaho": 1289,
   "name": "Bozone HopZone IPA",
   "style": "American IPA",
   "brewery_id": 219,
   "ounces": 12
 },
 {
   "FIELD1": 374,
   "abv": 0.06,
   "ibu": 25,
   "Idaho": 1288,
   "name": "Bozone Hefe Weizen",
   "style": "Hefeweizen",
   "brewery_id": 219,
   "ounces": 12
 },
 {
   "FIELD1": 375,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 470,
   "name": "Bozone Select Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 219,
   "ounces": 12
 },
 {
   "FIELD1": 376,
   "abv": 0.052000000000000005,
   "ibu": 40,
   "Idaho": 2167,
   "name": "Evil Owl",
   "style": "American Amber / Red Ale",
   "brewery_id": 207,
   "ounces": 12
 },
 {
   "FIELD1": 377,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2204,
   "name": "Post Time Kölsch",
   "style": "Kölsch",
   "brewery_id": 195,
   "ounces": 16
 },
 {
   "FIELD1": 378,
   "abv": 0.042,
   "ibu": 9,
   "Idaho": 1522,
   "name": "Agave Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 391,
   "ounces": 12
 },
 {
   "FIELD1": 379,
   "abv": 0.045,
   "ibu": 15,
   "Idaho": 397,
   "name": "SummerBright Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 391,
   "ounces": 12
 },
 {
   "FIELD1": 380,
   "abv": 0.062,
   "ibu": 68,
   "Idaho": 193,
   "name": "Lucky U IPA",
   "style": "American IPA",
   "brewery_id": 391,
   "ounces": 12
 },
 {
   "FIELD1": 381,
   "abv": 0.054000000000000006,
   "ibu": 19,
   "Idaho": 83,
   "name": "Avalanche Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 391,
   "ounces": 12
 },
 {
   "FIELD1": 382,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1802,
   "name": "You're My Boy, Blue",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 308,
   "ounces": 12
 },
 {
   "FIELD1": 383,
   "abv": 0.07200000000000001,
   "ibu": 60,
   "Idaho": 1801,
   "name": "Last Stop IPA",
   "style": "American IPA",
   "brewery_id": 308,
   "ounces": 12
 },
 {
   "FIELD1": 384,
   "abv": 0.05,
   "ibu": 21,
   "Idaho": 1800,
   "name": "Rollin Dirty Red Ale",
   "style": "Irish Red Ale",
   "brewery_id": 308,
   "ounces": 12
 },
 {
   "FIELD1": 385,
   "abv": 0.055,
   "ibu": 28,
   "Idaho": 1799,
   "name": "Are Wheat There Yet?",
   "style": "American Pale Wheat Ale",
   "brewery_id": 308,
   "ounces": 12
 },
 {
   "FIELD1": 386,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 2619,
   "name": "Insert Hop Reference",
   "style": "American Pale Ale (APA)",
   "brewery_id": 19,
   "ounces": 16
 },
 {
   "FIELD1": 387,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 2468,
   "name": "Manitou Amber",
   "style": "American Amber / Red Ale",
   "brewery_id": 85,
   "ounces": 16
 },
 {
   "FIELD1": 388,
   "abv": 0.067,
   "ibu": null,
   "Idaho": 2637,
   "name": "Belfort",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 389,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2636,
   "name": "Star Runner",
   "style": "Belgian Pale Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 390,
   "abv": 0.098,
   "ibu": null,
   "Idaho": 2598,
   "name": "Tart Side of the Barrel",
   "style": "American Double / Imperial Stout",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 391,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2597,
   "name": "Linnaeus Mango IPA",
   "style": "American IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 392,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 2548,
   "name": "Beasts A'Burnin'",
   "style": "Rauchbier",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 393,
   "abv": 0.077,
   "ibu": null,
   "Idaho": 2542,
   "name": "Verdun",
   "style": "Bière de Garde",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 394,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2541,
   "name": "Barrel Aged Triomphe",
   "style": "Belgian IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 395,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2504,
   "name": "Cherry Doppelbock",
   "style": "Doppelbock",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 396,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2500,
   "name": "Tropical Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 397,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2499,
   "name": "Beach Patrol",
   "style": "Witbier",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 398,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2498,
   "name": "Nuit Serpent",
   "style": "Belgian IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 399,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 2481,
   "name": "Paris",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 400,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2476,
   "name": "The Grand Army",
   "style": "Belgian IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 401,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 2467,
   "name": "Acidulated Trip",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 402,
   "abv": 0.066,
   "ibu": null,
   "Idaho": 2466,
   "name": "Root Stock",
   "style": "Rye Beer",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 403,
   "abv": 0.040999999999999995,
   "ibu": null,
   "Idaho": 2465,
   "name": "Mind Games",
   "style": "Dunkelweizen",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 404,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 2433,
   "name": "Sous Chef",
   "style": "Belgian Strong Pale Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 405,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2418,
   "name": "Dubbelicious",
   "style": "Dubbel",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 406,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2416,
   "name": "Psychopomp",
   "style": "Belgian Dark Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 407,
   "abv": null,
   "ibu": null,
   "Idaho": 2382,
   "name": "Fat Paczki",
   "style": "Belgian Dark Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 408,
   "abv": null,
   "ibu": null,
   "Idaho": 2381,
   "name": "Earth-Like Planets",
   "style": "Belgian Pale Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 409,
   "abv": 0.061,
   "ibu": null,
   "Idaho": 2290,
   "name": "Ski Patrol",
   "style": "Witbier",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 410,
   "abv": 0.063,
   "ibu": null,
   "Idaho": 2241,
   "name": "Viking Ice Hole",
   "style": "Oatmeal Stout",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 411,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 2240,
   "name": "Rye Porter",
   "style": "American Porter",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 412,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 2137,
   "name": "Wizard Burial Ground",
   "style": "Quadrupel (Quad)",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 413,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 2101,
   "name": "Smoky Wheat",
   "style": "Rauchbier",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 414,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2092,
   "name": "BRIPA",
   "style": "Belgian IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 415,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2091,
   "name": "Mela",
   "style": "Belgian Dark Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 416,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 2086,
   "name": "W.I.P.A Snappa",
   "style": "Belgian IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 417,
   "abv": 0.063,
   "ibu": null,
   "Idaho": 2023,
   "name": "Pepper in the Rye",
   "style": "Rye Beer",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 418,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 2006,
   "name": "Moe Lasses'",
   "style": "American Stout",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 419,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1997,
   "name": "Pumpkin Tart",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 420,
   "abv": 0.067,
   "ibu": null,
   "Idaho": 1977,
   "name": "Undertaker",
   "style": "Belgian Dark Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 421,
   "abv": 0.067,
   "ibu": null,
   "Idaho": 1976,
   "name": "Undertaker (2014)",
   "style": "Belgian Dark Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 422,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1974,
   "name": "Coq D'Or",
   "style": "Belgian Pale Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 423,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1973,
   "name": "North French",
   "style": "Bière de Garde",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 424,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1959,
   "name": "Agent a Deux",
   "style": "Belgian Dark Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 425,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1958,
   "name": "Belgian Wit",
   "style": "Witbier",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 426,
   "abv": 0.063,
   "ibu": null,
   "Idaho": 1949,
   "name": "Pothole Stout",
   "style": "American Stout",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 427,
   "abv": 0.09300000000000001,
   "ibu": null,
   "Idaho": 1947,
   "name": "Tree Bucket",
   "style": "Belgian IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 428,
   "abv": 0.073,
   "ibu": null,
   "Idaho": 1785,
   "name": "Le Flaneur Ale",
   "style": "American Wild Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 429,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 1651,
   "name": "Maize & Blueberry",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 430,
   "abv": 0.09300000000000001,
   "ibu": null,
   "Idaho": 1443,
   "name": "Trebuchet Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 431,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1352,
   "name": "Contemplation",
   "style": "Bière de Garde",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 432,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1267,
   "name": "Black Rabbit",
   "style": "American Black Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 433,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 1266,
   "name": "Zaison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 434,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 1178,
   "name": "Vivant Tripel",
   "style": "Tripel",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 435,
   "abv": 0.098,
   "ibu": null,
   "Idaho": 1136,
   "name": "Tart Side of the Moon",
   "style": "Belgian Dark Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 436,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1044,
   "name": "Big Red Coq",
   "style": "American Amber / Red Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 437,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 1033,
   "name": "Hubris Quadrupel Anniversary Ale",
   "style": "Quadrupel (Quad)",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 438,
   "abv": 0.095,
   "ibu": null,
   "Idaho": 1031,
   "name": "Plow Horse Belgian Style Imperial Stout",
   "style": "American Double / Imperial Stout",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 439,
   "abv": 0.092,
   "ibu": null,
   "Idaho": 909,
   "name": "Escoffier Bretta Ale",
   "style": "American Wild Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 440,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 873,
   "name": "Contemplation (2012)",
   "style": "Bière de Garde",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 441,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 860,
   "name": "Vivant Belgian Style Imperial Stout (2012)",
   "style": "Russian Imperial Stout",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 442,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 677,
   "name": "Big Red Coq (2012)",
   "style": "American Amber / Red Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 443,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 671,
   "name": "Zaison (2012)",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 444,
   "abv": 0.092,
   "ibu": null,
   "Idaho": 670,
   "name": "Vivant Tripel (2012)",
   "style": "Tripel",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 445,
   "abv": 0.09699999999999999,
   "ibu": null,
   "Idaho": 669,
   "name": "Trebuchet Double IPA (2012)",
   "style": "Belgian IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 446,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 627,
   "name": "Kludde",
   "style": "Belgian Strong Dark Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 447,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 387,
   "name": "Farm Hand",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 448,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 385,
   "name": "Solitude",
   "style": "Belgian Pale Ale",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 449,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 384,
   "name": "Triomphe",
   "style": "Belgian IPA",
   "brewery_id": 10,
   "ounces": 16
 },
 {
   "FIELD1": 450,
   "abv": null,
   "ibu": null,
   "Idaho": 1096,
   "name": "Tampa Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 467,
   "ounces": 12
 },
 {
   "FIELD1": 451,
   "abv": null,
   "ibu": null,
   "Idaho": 1095,
   "name": "Orange Grove Wheat Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 467,
   "ounces": 12
 },
 {
   "FIELD1": 452,
   "abv": 0.061,
   "ibu": null,
   "Idaho": 2456,
   "name": "Broad Brook Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 89,
   "ounces": 16
 },
 {
   "FIELD1": 453,
   "abv": 0.05,
   "ibu": 15,
   "Idaho": 921,
   "name": "Northern Lights Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 493,
   "ounces": 12
 },
 {
   "FIELD1": 454,
   "abv": 0.052000000000000005,
   "ibu": 17,
   "Idaho": 920,
   "name": "Polar Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 493,
   "ounces": 12
 },
 {
   "FIELD1": 455,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 919,
   "name": "Chugach Session Ale",
   "style": "Cream Ale",
   "brewery_id": 493,
   "ounces": 12
 },
 {
   "FIELD1": 456,
   "abv": 0.061,
   "ibu": 64,
   "Idaho": 648,
   "name": "Fairweather IPA",
   "style": "American IPA",
   "brewery_id": 493,
   "ounces": 12
 },
 {
   "FIELD1": 457,
   "abv": 0.068,
   "ibu": 47,
   "Idaho": 1279,
   "name": "East India Pale Ale",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 437,
   "ounces": 16
 },
 {
   "FIELD1": 458,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 756,
   "name": "Brooklyn Summer Ale",
   "style": "English Pale Mild Ale",
   "brewery_id": 437,
   "ounces": 12
 },
 {
   "FIELD1": 459,
   "abv": 0.068,
   "ibu": 47,
   "Idaho": 566,
   "name": "East India Pale Ale",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 437,
   "ounces": 12
 },
 {
   "FIELD1": 460,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 328,
   "name": "Brooklyn Summer Ale (2011)",
   "style": "English Pale Mild Ale",
   "brewery_id": 437,
   "ounces": 12
 },
 {
   "FIELD1": 461,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 66,
   "name": "Brooklyn Lager (16 oz.)",
   "style": "American Amber / Red Lager",
   "brewery_id": 437,
   "ounces": 16
 },
 {
   "FIELD1": 462,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 65,
   "name": "Brooklyn Lager (12 oz.)",
   "style": "American Amber / Red Lager",
   "brewery_id": 437,
   "ounces": 12
 },
 {
   "FIELD1": 463,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 538,
   "name": "Tour de Nez Belgian IPA (Current)",
   "style": "Belgian IPA",
   "brewery_id": 530,
   "ounces": 16
 },
 {
   "FIELD1": 464,
   "abv": null,
   "ibu": null,
   "Idaho": 504,
   "name": "Roler Bock (Current)",
   "style": "Maibock / Helles Bock",
   "brewery_id": 530,
   "ounces": 16
 },
 {
   "FIELD1": 465,
   "abv": 0.073,
   "ibu": 85,
   "Idaho": 383,
   "name": "Black Adder IBA (Current)",
   "style": "American Black Ale",
   "brewery_id": 530,
   "ounces": 16
 },
 {
   "FIELD1": 466,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 29,
   "name": "Very Noddy Lager (Current)",
   "style": "Schwarzbier",
   "brewery_id": 530,
   "ounces": 16
 },
 {
   "FIELD1": 467,
   "abv": 0.062,
   "ibu": 42,
   "Idaho": 28,
   "name": "Tule Duck Red Ale (Current)",
   "style": "American Amber / Red Ale",
   "brewery_id": 530,
   "ounces": 16
 },
 {
   "FIELD1": 468,
   "abv": 0.057999999999999996,
   "ibu": 35,
   "Idaho": 27,
   "name": "Original Orange Blossom Ale (Current)",
   "style": "Herbed / Spiced Beer",
   "brewery_id": 530,
   "ounces": 16
 },
 {
   "FIELD1": 469,
   "abv": 0.052000000000000005,
   "ibu": 40,
   "Idaho": 26,
   "name": "Black Noddy Lager (Current)",
   "style": "Schwarzbier",
   "brewery_id": 530,
   "ounces": 16
 },
 {
   "FIELD1": 470,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 1627,
   "name": "Cleveland Beer Week 2013",
   "style": "Munich Helles Lager",
   "brewery_id": 357,
   "ounces": 16
 },
 {
   "FIELD1": 471,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2552,
   "name": "Painted Turtle",
   "style": "American Pale Ale (APA)",
   "brewery_id": 56,
   "ounces": 12
 },
 {
   "FIELD1": 472,
   "abv": 0.06,
   "ibu": 40,
   "Idaho": 2125,
   "name": "1836",
   "style": "American Blonde Ale",
   "brewery_id": 214,
   "ounces": 12
 },
 {
   "FIELD1": 473,
   "abv": 0.06,
   "ibu": 20,
   "Idaho": 2124,
   "name": "Summer's Wit",
   "style": "Witbier",
   "brewery_id": 214,
   "ounces": 12
 },
 {
   "FIELD1": 474,
   "abv": 0.09,
   "ibu": 118,
   "Idaho": 2123,
   "name": "More Cowbell",
   "style": "American Double / Imperial IPA",
   "brewery_id": 214,
   "ounces": 16
 },
 {
   "FIELD1": 475,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2608,
   "name": "Wrath of Pele",
   "style": "American Brown Ale",
   "brewery_id": 24,
   "ounces": 16
 },
 {
   "FIELD1": 476,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 2607,
   "name": "Black Beer'd",
   "style": "American Black Ale",
   "brewery_id": 24,
   "ounces": 16
 },
 {
   "FIELD1": 477,
   "abv": 0.078,
   "ibu": null,
   "Idaho": 2606,
   "name": "Mr. Tea",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 24,
   "ounces": 24
 },
 {
   "FIELD1": 478,
   "abv": 0.055,
   "ibu": 40,
   "Idaho": 2478,
   "name": "Pale Alement",
   "style": "American Pale Ale (APA)",
   "brewery_id": 24,
   "ounces": 12
 },
 {
   "FIELD1": 479,
   "abv": 0.099,
   "ibu": 115,
   "Idaho": 2471,
   "name": "Hopkick Dropkick",
   "style": "American Double / Imperial IPA",
   "brewery_id": 24,
   "ounces": 12
 },
 {
   "FIELD1": 480,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2470,
   "name": "Kreamed Corn",
   "style": "Cream Ale",
   "brewery_id": 24,
   "ounces": 12
 },
 {
   "FIELD1": 481,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2464,
   "name": "Coconoats",
   "style": "American Pale Wheat Ale",
   "brewery_id": 24,
   "ounces": 16
 },
 {
   "FIELD1": 482,
   "abv": 0.068,
   "ibu": 16,
   "Idaho": 2160,
   "name": "Joey Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 24,
   "ounces": 16
 },
 {
   "FIELD1": 483,
   "abv": 0.07200000000000001,
   "ibu": 86,
   "Idaho": 2158,
   "name": "3:33 Black IPA",
   "style": "American IPA",
   "brewery_id": 24,
   "ounces": 16
 },
 {
   "FIELD1": 484,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 2072,
   "name": "MCA",
   "style": "American IPA",
   "brewery_id": 24,
   "ounces": 16
 },
 {
   "FIELD1": 485,
   "abv": 0.055,
   "ibu": 40,
   "Idaho": 2054,
   "name": "Pale Alement",
   "style": "American Pale Ale (APA)",
   "brewery_id": 24,
   "ounces": 16
 },
 {
   "FIELD1": 486,
   "abv": 0.05,
   "ibu": 14,
   "Idaho": 2196,
   "name": "Couch Select Lager",
   "style": "American Pale Lager",
   "brewery_id": 197,
   "ounces": 12
 },
 {
   "FIELD1": 487,
   "abv": 0.055999999999999994,
   "ibu": 36,
   "Idaho": 668,
   "name": "Mucho Aloha Hawaiian Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 517,
   "ounces": 12
 },
 {
   "FIELD1": 488,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 52,
   "name": "Heinnieweisse Weissebier",
   "style": "Hefeweizen",
   "brewery_id": 556,
   "ounces": 12
 },
 {
   "FIELD1": 489,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 51,
   "name": "Snapperhead IPA",
   "style": "American IPA",
   "brewery_id": 556,
   "ounces": 12
 },
 {
   "FIELD1": 490,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 50,
   "name": "Moo Thunder Stout",
   "style": "Milk / Sweet Stout",
   "brewery_id": 556,
   "ounces": 12
 },
 {
   "FIELD1": 491,
   "abv": 0.043,
   "ibu": null,
   "Idaho": 49,
   "name": "Porkslap Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 556,
   "ounces": 12
 },
 {
   "FIELD1": 492,
   "abv": 0.09300000000000001,
   "ibu": null,
   "Idaho": 2657,
   "name": "Blackbeard",
   "style": "American Double / Imperial Stout",
   "brewery_id": 5,
   "ounces": 12
 },
 {
   "FIELD1": 493,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2656,
   "name": "Rye Knot",
   "style": "American Brown Ale",
   "brewery_id": 5,
   "ounces": 12
 },
 {
   "FIELD1": 494,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2655,
   "name": "Dead Arm",
   "style": "American Pale Ale (APA)",
   "brewery_id": 5,
   "ounces": 12
 },
 {
   "FIELD1": 495,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 2654,
   "name": "32°/50° Kölsch ",
   "style": "Kölsch",
   "brewery_id": 5,
   "ounces": 16
 },
 {
   "FIELD1": 496,
   "abv": 0.077,
   "ibu": null,
   "Idaho": 2653,
   "name": "HopArt",
   "style": "American IPA",
   "brewery_id": 5,
   "ounces": 16
 },
 {
   "FIELD1": 497,
   "abv": 0.09699999999999999,
   "ibu": null,
   "Idaho": 2652,
   "name": "Boy King",
   "style": "American Double / Imperial IPA",
   "brewery_id": 5,
   "ounces": 16
 },
 {
   "FIELD1": 498,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2252,
   "name": "Gran Sport",
   "style": "American Porter",
   "brewery_id": 182,
   "ounces": 16
 },
 {
   "FIELD1": 499,
   "abv": 0.053,
   "ibu": 25,
   "Idaho": 2214,
   "name": "Horny Toad Cerveza",
   "style": "American Blonde Ale",
   "brewery_id": 182,
   "ounces": 16
 },
 {
   "FIELD1": 500,
   "abv": 0.063,
   "ibu": 35,
   "Idaho": 2213,
   "name": "Native Amber",
   "style": "American Amber / Red Ale",
   "brewery_id": 182,
   "ounces": 16
 },
 {
   "FIELD1": 501,
   "abv": 0.068,
   "ibu": 100,
   "Idaho": 1442,
   "name": "F5 IPA",
   "style": "American IPA",
   "brewery_id": 182,
   "ounces": 16
 },
 {
   "FIELD1": 502,
   "abv": 0.063,
   "ibu": 35,
   "Idaho": 170,
   "name": "Native Amber (2013)",
   "style": "American Amber / Red Ale",
   "brewery_id": 182,
   "ounces": 16
 },
 {
   "FIELD1": 503,
   "abv": 0.053,
   "ibu": 25,
   "Idaho": 169,
   "name": "Horny Toad Cerveza (2013)",
   "style": "American Blonde Ale",
   "brewery_id": 182,
   "ounces": 16
 },
 {
   "FIELD1": 504,
   "abv": 0.068,
   "ibu": 100,
   "Idaho": 2315,
   "name": "Hopportunity Knocks IPA",
   "style": "American IPA",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 505,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1808,
   "name": "Pilot Rock Porter",
   "style": "American Porter",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 506,
   "abv": 0.055999999999999994,
   "ibu": 55,
   "Idaho": 1419,
   "name": "Caldera Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 507,
   "abv": 0.039,
   "ibu": 16,
   "Idaho": 878,
   "name": "Lawnmower Lager",
   "style": "American Adjunct Lager",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 508,
   "abv": 0.054000000000000006,
   "ibu": 24,
   "Idaho": 794,
   "name": "Ashland Amber Ale (2009)",
   "style": "American Amber / Red Ale",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 509,
   "abv": 0.061,
   "ibu": 94,
   "Idaho": 793,
   "name": "Caldera IPA (2009)",
   "style": "American IPA",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 510,
   "abv": 0.061,
   "ibu": 94,
   "Idaho": 792,
   "name": "Caldera IPA (2007)",
   "style": "American IPA",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 511,
   "abv": 0.055999999999999994,
   "ibu": 55,
   "Idaho": 791,
   "name": "Caldera Pale Ale (2010)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 512,
   "abv": 0.055999999999999994,
   "ibu": 55,
   "Idaho": 790,
   "name": "Caldera Pale Ale (2009)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 513,
   "abv": 0.055999999999999994,
   "ibu": 55,
   "Idaho": 789,
   "name": "Caldera Pale Ale (2005)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 514,
   "abv": 0.055999999999999994,
   "ibu": 55,
   "Idaho": 788,
   "name": "Caldera Pale Ale (2007)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 515,
   "abv": 0.055999999999999994,
   "ibu": 55,
   "Idaho": 38,
   "name": "Caldera Pale Ale (2011)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 516,
   "abv": 0.054000000000000006,
   "ibu": 24,
   "Idaho": 37,
   "name": "Ashland Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 517,
   "abv": 0.061,
   "ibu": 94,
   "Idaho": 36,
   "name": "Caldera IPA",
   "style": "American IPA",
   "brewery_id": 155,
   "ounces": 12
 },
 {
   "FIELD1": 518,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2257,
   "name": "Remain in Light",
   "style": "American Pilsner",
   "brewery_id": 178,
   "ounces": 12
 },
 {
   "FIELD1": 519,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2256,
   "name": "Flower Child (2014)",
   "style": "American IPA",
   "brewery_id": 178,
   "ounces": 12
 },
 {
   "FIELD1": 520,
   "abv": null,
   "ibu": null,
   "Idaho": 870,
   "name": "THP White (2006)",
   "style": "Witbier",
   "brewery_id": 497,
   "ounces": 12
 },
 {
   "FIELD1": 521,
   "abv": null,
   "ibu": null,
   "Idaho": 869,
   "name": "THP Amber (2006)",
   "style": "American Amber / Red Ale",
   "brewery_id": 497,
   "ounces": 12
 },
 {
   "FIELD1": 522,
   "abv": null,
   "ibu": null,
   "Idaho": 868,
   "name": "THP Light (2006)",
   "style": "American Blonde Ale",
   "brewery_id": 497,
   "ounces": 12
 },
 {
   "FIELD1": 523,
   "abv": null,
   "ibu": null,
   "Idaho": 867,
   "name": "THP Dark (2006)",
   "style": "English Dark Mild Ale",
   "brewery_id": 497,
   "ounces": 12
 },
 {
   "FIELD1": 524,
   "abv": 0.099,
   "ibu": 43,
   "Idaho": 2068,
   "name": "Imperial Pumpkin Stout",
   "style": "Pumpkin Ale",
   "brewery_id": 230,
   "ounces": 16
 },
 {
   "FIELD1": 525,
   "abv": 0.09,
   "ibu": 130,
   "Idaho": 2067,
   "name": "Dead-Eye DIPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 230,
   "ounces": 16
 },
 {
   "FIELD1": 526,
   "abv": 0.055,
   "ibu": 64,
   "Idaho": 2066,
   "name": "Fisherman's IPA",
   "style": "American IPA",
   "brewery_id": 230,
   "ounces": 12
 },
 {
   "FIELD1": 527,
   "abv": 0.054000000000000006,
   "ibu": 35,
   "Idaho": 2065,
   "name": "Fisherman's Pils",
   "style": "German Pilsener",
   "brewery_id": 230,
   "ounces": 12
 },
 {
   "FIELD1": 528,
   "abv": 0.055,
   "ibu": 30,
   "Idaho": 2064,
   "name": "Fisherman's Brew",
   "style": "American Amber / Red Ale",
   "brewery_id": 230,
   "ounces": 12
 },
 {
   "FIELD1": 529,
   "abv": 0.055,
   "ibu": 35,
   "Idaho": 1928,
   "name": "Cape Cod Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 267,
   "ounces": 16
 },
 {
   "FIELD1": 530,
   "abv": 0.049,
   "ibu": 10,
   "Idaho": 1927,
   "name": "Beach Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 267,
   "ounces": 16
 },
 {
   "FIELD1": 531,
   "abv": 0.065,
   "ibu": 80,
   "Idaho": 2227,
   "name": "Dark Voyage Black IPA (2013)",
   "style": "American Black Ale",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 532,
   "abv": 0.052000000000000005,
   "ibu": 28,
   "Idaho": 2226,
   "name": "Wisconsin Amber",
   "style": "Vienna Lager",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 533,
   "abv": 0.046,
   "ibu": 18,
   "Idaho": 2225,
   "name": "Lake House",
   "style": "Munich Helles Lager",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 534,
   "abv": 0.055999999999999994,
   "ibu": 55,
   "Idaho": 1954,
   "name": "Ghost Ship White IPA",
   "style": "American IPA",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 535,
   "abv": 0.046,
   "ibu": 18,
   "Idaho": 1910,
   "name": "Lake House",
   "style": "Munich Helles Lager",
   "brewery_id": 192,
   "ounces": 16
 },
 {
   "FIELD1": 536,
   "abv": 0.062,
   "ibu": 70,
   "Idaho": 1177,
   "name": "Mutiny IPA",
   "style": "American IPA",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 537,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 840,
   "name": "Wisconsin Amber (1998)",
   "style": "Vienna Lager",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 538,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 180,
   "name": "Island Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 539,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 63,
   "name": "Wisconsin Amber (2013)",
   "style": "Vienna Lager",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 540,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 62,
   "name": "U.S. Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 541,
   "abv": null,
   "ibu": null,
   "Idaho": 61,
   "name": "Supper Club Lager",
   "style": "American Pale Lager",
   "brewery_id": 192,
   "ounces": 12
 },
 {
   "FIELD1": 542,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 784,
   "name": "Carolina Lighthouse (2007)",
   "style": "American Blonde Ale",
   "brewery_id": 504,
   "ounces": 12
 },
 {
   "FIELD1": 543,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 783,
   "name": "Carolina Blonde (2006)",
   "style": "American Blonde Ale",
   "brewery_id": 504,
   "ounces": 12
 },
 {
   "FIELD1": 544,
   "abv": 0.035,
   "ibu": null,
   "Idaho": 782,
   "name": "Carolina Blonde Light (2005)",
   "style": "American Blonde Ale",
   "brewery_id": 504,
   "ounces": 12
 },
 {
   "FIELD1": 545,
   "abv": 0.059000000000000004,
   "ibu": 22,
   "Idaho": 2255,
   "name": "Santa's Secret",
   "style": "Winter Warmer",
   "brewery_id": 179,
   "ounces": 16
 },
 {
   "FIELD1": 546,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 530,
   "name": "Flagship IPA",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 179,
   "ounces": 12
 },
 {
   "FIELD1": 547,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 427,
   "name": "Sky Blue Golden Ale",
   "style": "Kölsch",
   "brewery_id": 179,
   "ounces": 12
 },
 {
   "FIELD1": 548,
   "abv": 0.099,
   "ibu": 100,
   "Idaho": 2094,
   "name": "Epitome",
   "style": "American Black Ale",
   "brewery_id": 222,
   "ounces": 16
 },
 {
   "FIELD1": 549,
   "abv": 0.039,
   "ibu": 9,
   "Idaho": 1941,
   "name": "Monkey Chased the Weasel",
   "style": "Berliner Weissbier",
   "brewery_id": 222,
   "ounces": 16
 },
 {
   "FIELD1": 550,
   "abv": 0.078,
   "ibu": 80,
   "Idaho": 1940,
   "name": "077XX",
   "style": "American Double / Imperial IPA",
   "brewery_id": 222,
   "ounces": 16
 },
 {
   "FIELD1": 551,
   "abv": 0.042,
   "ibu": 35,
   "Idaho": 1439,
   "name": "Boat Beer",
   "style": "American IPA",
   "brewery_id": 222,
   "ounces": 12
 },
 {
   "FIELD1": 552,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 1465,
   "name": "Granny Smith Hard Apple Cider",
   "style": "Cider",
   "brewery_id": 404,
   "ounces": 16
 },
 {
   "FIELD1": 553,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 1464,
   "name": "Dry Hard Apple Cider",
   "style": "Cider",
   "brewery_id": 404,
   "ounces": 16
 },
 {
   "FIELD1": 554,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 1744,
   "name": "Farmer Ted's Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 331,
   "ounces": 12
 },
 {
   "FIELD1": 555,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1743,
   "name": "Firewater India Pale Ale",
   "style": "American IPA",
   "brewery_id": 331,
   "ounces": 12
 },
 {
   "FIELD1": 556,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1742,
   "name": "White Zombie Ale",
   "style": "Witbier",
   "brewery_id": 331,
   "ounces": 12
 },
 {
   "FIELD1": 557,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1719,
   "name": "King Winterbolt Winter Ale",
   "style": "Winter Warmer",
   "brewery_id": 331,
   "ounces": 12
 },
 {
   "FIELD1": 558,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 638,
   "name": "White Zombie Ale",
   "style": "Witbier",
   "brewery_id": 331,
   "ounces": 12
 },
 {
   "FIELD1": 559,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 507,
   "name": "Firewater India Pale Ale",
   "style": "American IPA",
   "brewery_id": 331,
   "ounces": 12
 },
 {
   "FIELD1": 560,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 480,
   "name": "Farmer Ted's Farmhouse Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 331,
   "ounces": 12
 },
 {
   "FIELD1": 561,
   "abv": 0.048,
   "ibu": 16,
   "Idaho": 1882,
   "name": "Whitecap Wit",
   "style": "Witbier",
   "brewery_id": 285,
   "ounces": 16
 },
 {
   "FIELD1": 562,
   "abv": 0.078,
   "ibu": 16,
   "Idaho": 1881,
   "name": "Seiche Scottish Ale",
   "style": "Scottish Ale",
   "brewery_id": 285,
   "ounces": 16
 },
 {
   "FIELD1": 563,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 2446,
   "name": "Peanut Butter Jelly Time",
   "style": "American Brown Ale",
   "brewery_id": 96,
   "ounces": 12
 },
 {
   "FIELD1": 564,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 2106,
   "name": "King Coconut",
   "style": "American Porter",
   "brewery_id": 96,
   "ounces": 12
 },
 {
   "FIELD1": 565,
   "abv": 0.085,
   "ibu": 90,
   "Idaho": 2600,
   "name": "Gone A-Rye",
   "style": "American Double / Imperial IPA",
   "brewery_id": 29,
   "ounces": 16
 },
 {
   "FIELD1": 566,
   "abv": null,
   "ibu": null,
   "Idaho": 2210,
   "name": "Special Release",
   "style": "",
   "brewery_id": 29,
   "ounces": 16
 },
 {
   "FIELD1": 567,
   "abv": 0.068,
   "ibu": 70,
   "Idaho": 2052,
   "name": "Dankosaurus",
   "style": "American IPA",
   "brewery_id": 29,
   "ounces": 16
 },
 {
   "FIELD1": 568,
   "abv": 0.051,
   "ibu": 35,
   "Idaho": 1584,
   "name": "Scruffy's Smoked Alt",
   "style": "Smoked Beer",
   "brewery_id": 29,
   "ounces": 16
 },
 {
   "FIELD1": 569,
   "abv": 0.051,
   "ibu": 36,
   "Idaho": 1182,
   "name": "Elliott's Phoned Home Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 29,
   "ounces": 16
 },
 {
   "FIELD1": 570,
   "abv": 0.05,
   "ibu": 18,
   "Idaho": 1050,
   "name": "The Lawn Ranger",
   "style": "Cream Ale",
   "brewery_id": 29,
   "ounces": 16
 },
 {
   "FIELD1": 571,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1219,
   "name": "All American Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 452,
   "ounces": 12
 },
 {
   "FIELD1": 572,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1218,
   "name": "All American Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 452,
   "ounces": 12
 },
 {
   "FIELD1": 573,
   "abv": 0.05,
   "ibu": 40,
   "Idaho": 2377,
   "name": "Main St. Virginia Ale",
   "style": "Altbier",
   "brewery_id": 122,
   "ounces": 12
 },
 {
   "FIELD1": 574,
   "abv": 0.045,
   "ibu": 24,
   "Idaho": 1839,
   "name": "Chin Music Amber Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 122,
   "ounces": 12
 },
 {
   "FIELD1": 575,
   "abv": 0.05,
   "ibu": 40,
   "Idaho": 1248,
   "name": "Main St. Virginia Ale",
   "style": "Altbier",
   "brewery_id": 122,
   "ounces": 12
 },
 {
   "FIELD1": 576,
   "abv": 0.052000000000000005,
   "ibu": 42,
   "Idaho": 1247,
   "name": "Ray Ray’s Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 122,
   "ounces": 12
 },
 {
   "FIELD1": 577,
   "abv": 0.051,
   "ibu": 15,
   "Idaho": 1649,
   "name": "Chai Ale",
   "style": "Herbed / Spiced Beer",
   "brewery_id": 350,
   "ounces": 16
 },
 {
   "FIELD1": 578,
   "abv": 0.07200000000000001,
   "ibu": 85,
   "Idaho": 1648,
   "name": "Lucky Day IPA",
   "style": "American IPA",
   "brewery_id": 350,
   "ounces": 16
 },
 {
   "FIELD1": 579,
   "abv": 0.095,
   "ibu": 99,
   "Idaho": 1647,
   "name": "Terrace Hill Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 350,
   "ounces": 16
 },
 {
   "FIELD1": 580,
   "abv": 0.075,
   "ibu": 77,
   "Idaho": 1646,
   "name": "Catch 23",
   "style": "American Black Ale",
   "brewery_id": 350,
   "ounces": 16
 },
 {
   "FIELD1": 581,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 2057,
   "name": "Stickin' In My Rye",
   "style": "Rye Beer",
   "brewery_id": 236,
   "ounces": 24
 },
 {
   "FIELD1": 582,
   "abv": 0.06,
   "ibu": 45,
   "Idaho": 2056,
   "name": "Black Me Stout",
   "style": "American Stout",
   "brewery_id": 236,
   "ounces": 12
 },
 {
   "FIELD1": 583,
   "abv": 0.05,
   "ibu": 22,
   "Idaho": 2055,
   "name": "Killer Kolsch",
   "style": "Kölsch",
   "brewery_id": 236,
   "ounces": 12
 },
 {
   "FIELD1": 584,
   "abv": 0.07,
   "ibu": 65,
   "Idaho": 1933,
   "name": "Missile IPA",
   "style": "American IPA",
   "brewery_id": 236,
   "ounces": 12
 },
 {
   "FIELD1": 585,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2019,
   "name": "Enlighten",
   "style": "Kölsch",
   "brewery_id": 250,
   "ounces": 16
 },
 {
   "FIELD1": 586,
   "abv": 0.065,
   "ibu": 8,
   "Idaho": 2018,
   "name": "Ale Cider",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 250,
   "ounces": 16
 },
 {
   "FIELD1": 587,
   "abv": 0.055,
   "ibu": 30,
   "Idaho": 2017,
   "name": "Pail Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 250,
   "ounces": 16
 },
 {
   "FIELD1": 588,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2016,
   "name": "Englishman",
   "style": "English Brown Ale",
   "brewery_id": 250,
   "ounces": 16
 },
 {
   "FIELD1": 589,
   "abv": 0.08,
   "ibu": 69,
   "Idaho": 2080,
   "name": "8 Barrel",
   "style": "American Strong Ale",
   "brewery_id": 226,
   "ounces": 16
 },
 {
   "FIELD1": 590,
   "abv": 0.055,
   "ibu": 40,
   "Idaho": 2079,
   "name": "Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 226,
   "ounces": 16
 },
 {
   "FIELD1": 591,
   "abv": 0.057,
   "ibu": 58,
   "Idaho": 2380,
   "name": "IPA #11",
   "style": "American IPA",
   "brewery_id": 121,
   "ounces": 16
 },
 {
   "FIELD1": 592,
   "abv": 0.057,
   "ibu": 10,
   "Idaho": 2379,
   "name": "Blood Orange Honey",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 121,
   "ounces": 16
 },
 {
   "FIELD1": 593,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2354,
   "name": "Lighthouse Amber",
   "style": "Altbier",
   "brewery_id": 121,
   "ounces": 16
 },
 {
   "FIELD1": 594,
   "abv": 0.08900000000000001,
   "ibu": 126,
   "Idaho": 2440,
   "name": "Bay of Bengal Double IPA (2014)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 99,
   "ounces": 12
 },
 {
   "FIELD1": 595,
   "abv": 0.049,
   "ibu": 29,
   "Idaho": 567,
   "name": "Churchkey Pilsner Style Beer",
   "style": "American Pilsner",
   "brewery_id": 526,
   "ounces": 12
 },
 {
   "FIELD1": 596,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1342,
   "name": "First Press",
   "style": "Cider",
   "brewery_id": 425,
   "ounces": 12
 },
 {
   "FIELD1": 597,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1341,
   "name": "Magic Apple",
   "style": "Cider",
   "brewery_id": 425,
   "ounces": 12
 },
 {
   "FIELD1": 598,
   "abv": 0.055,
   "ibu": 25,
   "Idaho": 2349,
   "name": "Cubano Espresso",
   "style": "Bock",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 599,
   "abv": 0.062,
   "ibu": 65,
   "Idaho": 2014,
   "name": "Operation Homefront",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 600,
   "abv": 0.08199999999999999,
   "ibu": 65,
   "Idaho": 2013,
   "name": "Wandering Pelican",
   "style": "American Black Ale",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 601,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2012,
   "name": "Sugar Plum",
   "style": "American Brown Ale",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 602,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2011,
   "name": "Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 603,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2010,
   "name": "Puppy's Breath Porter",
   "style": "American Porter",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 604,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2009,
   "name": "Happening Now",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 605,
   "abv": 0.07,
   "ibu": 60,
   "Idaho": 1726,
   "name": "Hopped on the High Seas (Hop #529)",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 606,
   "abv": 0.07,
   "ibu": 60,
   "Idaho": 1725,
   "name": "Hopped on the High Seas (Calypso)",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 607,
   "abv": 0.063,
   "ibu": null,
   "Idaho": 1695,
   "name": "Wiregrass Post-Prohibition Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 608,
   "abv": 0.07,
   "ibu": 60,
   "Idaho": 1694,
   "name": "Dry-Hopped On The High Seas Caribbean-Style IPA",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 609,
   "abv": 0.07,
   "ibu": 60,
   "Idaho": 1693,
   "name": "Hopped on the High Seas (Citra)",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 610,
   "abv": 0.07,
   "ibu": 60,
   "Idaho": 1692,
   "name": "Hopped on the High Seas (Ahtanum)",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 611,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1369,
   "name": "Gwar Beer",
   "style": "American Pale Ale (APA)",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 612,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1243,
   "name": "Tropical Heatwave",
   "style": "American Pale Wheat Ale",
   "brewery_id": 141,
   "ounces": 16
 },
 {
   "FIELD1": 613,
   "abv": 0.075,
   "ibu": 70,
   "Idaho": 1142,
   "name": "Humidor Series India Pale Ale",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 614,
   "abv": 0.075,
   "ibu": 70,
   "Idaho": 1141,
   "name": "Jai Alai IPA Aged on White Oak",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 615,
   "abv": 0.08,
   "ibu": 65,
   "Idaho": 1140,
   "name": "José Martí American Porter",
   "style": "American Porter",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 616,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1139,
   "name": "Invasion Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 617,
   "abv": 0.055,
   "ibu": 25,
   "Idaho": 1138,
   "name": "Maduro Brown Ale",
   "style": "English Brown Ale",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 618,
   "abv": 0.055,
   "ibu": 25,
   "Idaho": 571,
   "name": "Maduro Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 619,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 570,
   "name": "Hotter Than Helles Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 620,
   "abv": 0.07200000000000001,
   "ibu": 75,
   "Idaho": 569,
   "name": "Tocobaga Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 621,
   "abv": 0.075,
   "ibu": 70,
   "Idaho": 546,
   "name": "Jai Alai IPA",
   "style": "American IPA",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 622,
   "abv": 0.05,
   "ibu": 18,
   "Idaho": 545,
   "name": "Florida Cracker Belgian Wit",
   "style": "Witbier",
   "brewery_id": 141,
   "ounces": 12
 },
 {
   "FIELD1": 623,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 2338,
   "name": "Shark Tracker Light lager",
   "style": "Light Lager",
   "brewery_id": 145,
   "ounces": 12
 },
 {
   "FIELD1": 624,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1365,
   "name": "Pumple Drumkin",
   "style": "Pumpkin Ale",
   "brewery_id": 145,
   "ounces": 12
 },
 {
   "FIELD1": 625,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1094,
   "name": "Grey Lady",
   "style": "Witbier",
   "brewery_id": 145,
   "ounces": 12
 },
 {
   "FIELD1": 626,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 657,
   "name": "Summer of Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 145,
   "ounces": 12
 },
 {
   "FIELD1": 627,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 656,
   "name": "Indie Pale Ale",
   "style": "American IPA",
   "brewery_id": 145,
   "ounces": 12
 },
 {
   "FIELD1": 628,
   "abv": 0.038,
   "ibu": null,
   "Idaho": 359,
   "name": "Sankaty Light Lager",
   "style": "Light Lager",
   "brewery_id": 145,
   "ounces": 12
 },
 {
   "FIELD1": 629,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 56,
   "name": "Whale's Tale Pale Ale",
   "style": "English Pale Ale",
   "brewery_id": 145,
   "ounces": 12
 },
 {
   "FIELD1": 630,
   "abv": 0.067,
   "ibu": 60,
   "Idaho": 1772,
   "name": "Jacaranada Rye IPA",
   "style": "American IPA",
   "brewery_id": 320,
   "ounces": 16
 },
 {
   "FIELD1": 631,
   "abv": 0.06,
   "ibu": 75,
   "Idaho": 1393,
   "name": "Cascadian Dark Ale",
   "style": "American Black Ale",
   "brewery_id": 418,
   "ounces": 12
 },
 {
   "FIELD1": 632,
   "abv": 0.044000000000000004,
   "ibu": 13,
   "Idaho": 893,
   "name": "Wheat the People",
   "style": "American Pale Wheat Ale",
   "brewery_id": 418,
   "ounces": 16
 },
 {
   "FIELD1": 633,
   "abv": 0.047,
   "ibu": 17,
   "Idaho": 1407,
   "name": "Tybee Island Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 415,
   "ounces": 12
 },
 {
   "FIELD1": 634,
   "abv": 0.062,
   "ibu": 55,
   "Idaho": 1406,
   "name": "Savannah Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 415,
   "ounces": 12
 },
 {
   "FIELD1": 635,
   "abv": 0.046,
   "ibu": 11,
   "Idaho": 2438,
   "name": "Rhode Island Blueberry",
   "style": "Kölsch",
   "brewery_id": 101,
   "ounces": 12
 },
 {
   "FIELD1": 636,
   "abv": 0.065,
   "ibu": 75,
   "Idaho": 2437,
   "name": "Newport Storm IPA",
   "style": "American IPA",
   "brewery_id": 101,
   "ounces": 12
 },
 {
   "FIELD1": 637,
   "abv": 0.052000000000000005,
   "ibu": 24,
   "Idaho": 751,
   "name": "Hurricane Amber Ale (2004)",
   "style": "American Amber / Red Ale",
   "brewery_id": 101,
   "ounces": 12
 },
 {
   "FIELD1": 638,
   "abv": 0.052000000000000005,
   "ibu": 24,
   "Idaho": 120,
   "name": "Hurricane Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 101,
   "ounces": 12
 },
 {
   "FIELD1": 639,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 2061,
   "name": "Big Blue Van",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 232,
   "ounces": 16
 },
 {
   "FIELD1": 640,
   "abv": 0.068,
   "ibu": 75,
   "Idaho": 970,
   "name": "Des Moines IPA",
   "style": "American IPA",
   "brewery_id": 482,
   "ounces": 16
 },
 {
   "FIELD1": 641,
   "abv": 0.048,
   "ibu": 22,
   "Idaho": 969,
   "name": "Capital Gold Golden Lager",
   "style": "German Pilsener",
   "brewery_id": 482,
   "ounces": 16
 },
 {
   "FIELD1": 642,
   "abv": 0.055999999999999994,
   "ibu": 21,
   "Idaho": 968,
   "name": "Farmer John's Multi-Grain Ale",
   "style": "American Blonde Ale",
   "brewery_id": 482,
   "ounces": 16
 },
 {
   "FIELD1": 643,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2351,
   "name": "Behemoth",
   "style": "American Pilsner",
   "brewery_id": 139,
   "ounces": 12
 },
 {
   "FIELD1": 644,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1650,
   "name": "Arkansas Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 139,
   "ounces": 12
 },
 {
   "FIELD1": 645,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 1337,
   "name": "Core Oatmeal Stout",
   "style": "Oatmeal Stout",
   "brewery_id": 139,
   "ounces": 12
 },
 {
   "FIELD1": 646,
   "abv": 0.061,
   "ibu": null,
   "Idaho": 1336,
   "name": "Core ESB",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 139,
   "ounces": 12
 },
 {
   "FIELD1": 647,
   "abv": 0.038,
   "ibu": null,
   "Idaho": 737,
   "name": "Chester's Beer (2005)",
   "style": "American Pale Lager",
   "brewery_id": 512,
   "ounces": 12
 },
 {
   "FIELD1": 648,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 129,
   "name": "Heiner Brau Kölsch",
   "style": "Kölsch",
   "brewery_id": 553,
   "ounces": 12
 },
 {
   "FIELD1": 649,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 716,
   "name": "Trigger Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 515,
   "ounces": 16
 },
 {
   "FIELD1": 650,
   "abv": 0.075,
   "ibu": 29,
   "Idaho": 659,
   "name": "Crabtree Oatmeal Stout",
   "style": "Oatmeal Stout",
   "brewery_id": 515,
   "ounces": 16
 },
 {
   "FIELD1": 651,
   "abv": 0.077,
   "ibu": 71,
   "Idaho": 556,
   "name": "Eclipse Black IPA",
   "style": "American Black Ale",
   "brewery_id": 515,
   "ounces": 16
 },
 {
   "FIELD1": 652,
   "abv": 0.06,
   "ibu": 46,
   "Idaho": 2538,
   "name": "Neomexicanus Native",
   "style": "American Pale Ale (APA)",
   "brewery_id": 63,
   "ounces": 12
 },
 {
   "FIELD1": 653,
   "abv": 0.075,
   "ibu": 25,
   "Idaho": 2355,
   "name": "Old Soul",
   "style": "Belgian Strong Pale Ale",
   "brewery_id": 63,
   "ounces": 12
 },
 {
   "FIELD1": 654,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 1689,
   "name": "Snowcat Coffee Stout",
   "style": "American Stout",
   "brewery_id": 63,
   "ounces": 12
 },
 {
   "FIELD1": 655,
   "abv": null,
   "ibu": null,
   "Idaho": 1163,
   "name": "WinterWonderGrass Festival Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 63,
   "ounces": 12
 },
 {
   "FIELD1": 656,
   "abv": null,
   "ibu": null,
   "Idaho": 940,
   "name": "Boohai Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 63,
   "ounces": 12
 },
 {
   "FIELD1": 657,
   "abv": 0.052000000000000005,
   "ibu": 15,
   "Idaho": 685,
   "name": "Lava Lake Wit",
   "style": "Witbier",
   "brewery_id": 63,
   "ounces": 12
 },
 {
   "FIELD1": 658,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 613,
   "name": "Mountain Livin' Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 63,
   "ounces": 12
 },
 {
   "FIELD1": 659,
   "abv": 0.052000000000000005,
   "ibu": 25,
   "Idaho": 356,
   "name": "Crazy Mountain Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 63,
   "ounces": 12
 },
 {
   "FIELD1": 660,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 2029,
   "name": "Tropicalia",
   "style": "American IPA",
   "brewery_id": 247,
   "ounces": 12
 },
 {
   "FIELD1": 661,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2028,
   "name": "Athena",
   "style": "Berliner Weissbier",
   "brewery_id": 247,
   "ounces": 12
 },
 {
   "FIELD1": 662,
   "abv": 0.049,
   "ibu": 25,
   "Idaho": 2293,
   "name": "Aviator Raspberry Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 169,
   "ounces": 12
 },
 {
   "FIELD1": 663,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1105,
   "name": "3 Picket Porter",
   "style": "American Porter",
   "brewery_id": 169,
   "ounces": 12
 },
 {
   "FIELD1": 664,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 1104,
   "name": "Rusty Nail Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 169,
   "ounces": 12
 },
 {
   "FIELD1": 665,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2145,
   "name": "Red Water Irish Style Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 212,
   "ounces": 12
 },
 {
   "FIELD1": 666,
   "abv": 0.066,
   "ibu": null,
   "Idaho": 1804,
   "name": "Mjöllnir",
   "style": "Herbed / Spiced Beer",
   "brewery_id": 212,
   "ounces": 12
 },
 {
   "FIELD1": 667,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1602,
   "name": "Bear Butte Nut Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 212,
   "ounces": 12
 },
 {
   "FIELD1": 668,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1301,
   "name": "Easy Livin' Summer Ale",
   "style": "American Blonde Ale",
   "brewery_id": 212,
   "ounces": 12
 },
 {
   "FIELD1": 669,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 542,
   "name": "Canyon Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 212,
   "ounces": 12
 },
 {
   "FIELD1": 670,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 272,
   "name": "Pile O'Dirt Porter",
   "style": "American Porter",
   "brewery_id": 212,
   "ounces": 12
 },
 {
   "FIELD1": 671,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 271,
   "name": "11th Hour IPA",
   "style": "American IPA",
   "brewery_id": 212,
   "ounces": 12
 },
 {
   "FIELD1": 672,
   "abv": 0.06,
   "ibu": 31,
   "Idaho": 1057,
   "name": "South Ridge Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 472,
   "ounces": 16
 },
 {
   "FIELD1": 673,
   "abv": 0.052000000000000005,
   "ibu": 23,
   "Idaho": 681,
   "name": "Summertime Ale",
   "style": "Kölsch",
   "brewery_id": 472,
   "ounces": 16
 },
 {
   "FIELD1": 674,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 1789,
   "name": "Lost River Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 315,
   "ounces": 16
 },
 {
   "FIELD1": 675,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 1788,
   "name": "Monon Wheat",
   "style": "Witbier",
   "brewery_id": 315,
   "ounces": 16
 },
 {
   "FIELD1": 676,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1787,
   "name": "Floyd's Folly",
   "style": "Scottish Ale",
   "brewery_id": 315,
   "ounces": 16
 },
 {
   "FIELD1": 677,
   "abv": 0.063,
   "ibu": null,
   "Idaho": 1786,
   "name": "Half Court IPA",
   "style": "American IPA",
   "brewery_id": 315,
   "ounces": 16
 },
 {
   "FIELD1": 678,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1763,
   "name": "Geary's Pale Ale",
   "style": "English Pale Ale",
   "brewery_id": 323,
   "ounces": 12
 },
 {
   "FIELD1": 679,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1311,
   "name": "Geary's Summer Ale",
   "style": "Kölsch",
   "brewery_id": 323,
   "ounces": 12
 },
 {
   "FIELD1": 680,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 2078,
   "name": "Stone of Arbroath",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 227,
   "ounces": 12
 },
 {
   "FIELD1": 681,
   "abv": 0.05,
   "ibu": 15,
   "Idaho": 1809,
   "name": "The Tradition",
   "style": "American Blonde Ale",
   "brewery_id": 227,
   "ounces": 12
 },
 {
   "FIELD1": 682,
   "abv": 0.053,
   "ibu": 11,
   "Idaho": 1263,
   "name": "El Hefe Speaks",
   "style": "Hefeweizen",
   "brewery_id": 227,
   "ounces": 12
 },
 {
   "FIELD1": 683,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1092,
   "name": "Penn Quarter Porter",
   "style": "American Porter",
   "brewery_id": 227,
   "ounces": 12
 },
 {
   "FIELD1": 684,
   "abv": 0.092,
   "ibu": 115,
   "Idaho": 851,
   "name": "On the Wings of Armageddon",
   "style": "American Double / Imperial IPA",
   "brewery_id": 227,
   "ounces": 12
 },
 {
   "FIELD1": 685,
   "abv": 0.065,
   "ibu": 80,
   "Idaho": 186,
   "name": "The Corruption",
   "style": "American IPA",
   "brewery_id": 227,
   "ounces": 12
 },
 {
   "FIELD1": 686,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 185,
   "name": "The Citizen",
   "style": "Belgian Pale Ale",
   "brewery_id": 227,
   "ounces": 12
 },
 {
   "FIELD1": 687,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 184,
   "name": "The Public",
   "style": "American Pale Ale (APA)",
   "brewery_id": 227,
   "ounces": 12
 },
 {
   "FIELD1": 688,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1224,
   "name": "Dank IPA",
   "style": "American IPA",
   "brewery_id": 451,
   "ounces": 16
 },
 {
   "FIELD1": 689,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 964,
   "name": "Dank IPA (2012)",
   "style": "American IPA",
   "brewery_id": 451,
   "ounces": 16
 },
 {
   "FIELD1": 690,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 1623,
   "name": "Lift Off IPA",
   "style": "American IPA",
   "brewery_id": 358,
   "ounces": 16
 },
 {
   "FIELD1": 691,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 110,
   "name": "BrewFarm Select Golden Lager",
   "style": "American Pale Lager",
   "brewery_id": 554,
   "ounces": 12
 },
 {
   "FIELD1": 692,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1735,
   "name": "Sprocket Blonde Ale (2006)",
   "style": "American Blonde Ale",
   "brewery_id": 333,
   "ounces": 12
 },
 {
   "FIELD1": 693,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1734,
   "name": "Sprocket Pale Ale (2006)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 333,
   "ounces": 12
 },
 {
   "FIELD1": 694,
   "abv": 0.063,
   "ibu": 37,
   "Idaho": 1746,
   "name": "Dead Armadillo Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 330,
   "ounces": 12
 },
 {
   "FIELD1": 695,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2371,
   "name": "Neato Bandito",
   "style": "Euro Pale Lager",
   "brewery_id": 127,
   "ounces": 12
 },
 {
   "FIELD1": 696,
   "abv": 0.075,
   "ibu": 33,
   "Idaho": 2251,
   "name": "Oak Cliff Coffee Ale",
   "style": "American Brown Ale",
   "brewery_id": 127,
   "ounces": 12
 },
 {
   "FIELD1": 697,
   "abv": 0.085,
   "ibu": 100,
   "Idaho": 2166,
   "name": "Dream Crusher Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 127,
   "ounces": 12
 },
 {
   "FIELD1": 698,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1827,
   "name": "Deep Ellum Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 127,
   "ounces": 12
 },
 {
   "FIELD1": 699,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1203,
   "name": "Double Brown Stout",
   "style": "Baltic Porter",
   "brewery_id": 127,
   "ounces": 12
 },
 {
   "FIELD1": 700,
   "abv": 0.048,
   "ibu": 25,
   "Idaho": 1202,
   "name": "Farmhouse Wit",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 127,
   "ounces": 16
 },
 {
   "FIELD1": 701,
   "abv": 0.046,
   "ibu": null,
   "Idaho": 1161,
   "name": "Rye Pils Session Lager",
   "style": "German Pilsener",
   "brewery_id": 127,
   "ounces": 12
 },
 {
   "FIELD1": 702,
   "abv": 0.052000000000000005,
   "ibu": 23,
   "Idaho": 946,
   "name": "Dallas Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 127,
   "ounces": 12
 },
 {
   "FIELD1": 703,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 943,
   "name": "Deep Ellum IPA",
   "style": "American IPA",
   "brewery_id": 127,
   "ounces": 12
 },
 {
   "FIELD1": 704,
   "abv": 0.045,
   "ibu": 44,
   "Idaho": 1886,
   "name": "Thrasher Session India Pale Ale",
   "style": "American IPA",
   "brewery_id": 283,
   "ounces": 12
 },
 {
   "FIELD1": 705,
   "abv": 0.05,
   "ibu": 16,
   "Idaho": 1885,
   "name": "Gutch English Style Mild Ale",
   "style": "English Pale Mild Ale",
   "brewery_id": 283,
   "ounces": 12
 },
 {
   "FIELD1": 706,
   "abv": 0.059000000000000004,
   "ibu": 55,
   "Idaho": 1213,
   "name": "Chuli Stout",
   "style": "Irish Dry Stout",
   "brewery_id": 453,
   "ounces": 12
 },
 {
   "FIELD1": 707,
   "abv": 0.055999999999999994,
   "ibu": 46,
   "Idaho": 1159,
   "name": "Mother Ale",
   "style": "American Blonde Ale",
   "brewery_id": 453,
   "ounces": 12
 },
 {
   "FIELD1": 708,
   "abv": 0.065,
   "ibu": 71,
   "Idaho": 947,
   "name": "Twister Creek India Pale Ale",
   "style": "American IPA",
   "brewery_id": 453,
   "ounces": 12
 },
 {
   "FIELD1": 709,
   "abv": 0.057999999999999996,
   "ibu": 46,
   "Idaho": 929,
   "name": "Single Engine Red",
   "style": "Irish Red Ale",
   "brewery_id": 453,
   "ounces": 12
 },
 {
   "FIELD1": 710,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1944,
   "name": "Incredible Pedal IPA",
   "style": "American IPA",
   "brewery_id": 263,
   "ounces": 12
 },
 {
   "FIELD1": 711,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1943,
   "name": "Graham Cracker Porter",
   "style": "American Porter",
   "brewery_id": 263,
   "ounces": 12
 },
 {
   "FIELD1": 712,
   "abv": 0.05,
   "ibu": 40,
   "Idaho": 1210,
   "name": "Mirror Pond Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 454,
   "ounces": 12
 },
 {
   "FIELD1": 713,
   "abv": 0.052000000000000005,
   "ibu": 16,
   "Idaho": 2550,
   "name": "Weissenheimer",
   "style": "Hefeweizen",
   "brewery_id": 57,
   "ounces": 12
 },
 {
   "FIELD1": 714,
   "abv": 0.049,
   "ibu": 22,
   "Idaho": 2505,
   "name": "Abbey's Single (2015- )",
   "style": "Abbey Single Ale",
   "brewery_id": 57,
   "ounces": 12
 },
 {
   "FIELD1": 715,
   "abv": 0.063,
   "ibu": 76,
   "Idaho": 2025,
   "name": "Vertex IPA",
   "style": "American IPA",
   "brewery_id": 57,
   "ounces": 12
 },
 {
   "FIELD1": 716,
   "abv": 0.05,
   "ibu": 12,
   "Idaho": 2021,
   "name": "Here Gose Nothin'",
   "style": "Gose",
   "brewery_id": 57,
   "ounces": 12
 },
 {
   "FIELD1": 717,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2015,
   "name": "Strawberry Blonde",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 57,
   "ounces": 12
 },
 {
   "FIELD1": 718,
   "abv": 0.096,
   "ibu": 85,
   "Idaho": 1888,
   "name": "Hoperation Overload",
   "style": "American Double / Imperial IPA",
   "brewery_id": 57,
   "ounces": 12
 },
 {
   "FIELD1": 719,
   "abv": 0.049,
   "ibu": 22,
   "Idaho": 1887,
   "name": "Abbey's Single Ale (Current)",
   "style": "Abbey Single Ale",
   "brewery_id": 57,
   "ounces": 12
 },
 {
   "FIELD1": 720,
   "abv": 0.044000000000000004,
   "ibu": 45,
   "Idaho": 2051,
   "name": "Bravo Four Point",
   "style": "American Pale Ale (APA)",
   "brewery_id": 237,
   "ounces": 12
 },
 {
   "FIELD1": 721,
   "abv": 0.052000000000000005,
   "ibu": 26,
   "Idaho": 1201,
   "name": "Striped Bass Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 237,
   "ounces": 12
 },
 {
   "FIELD1": 722,
   "abv": 0.054000000000000006,
   "ibu": 27,
   "Idaho": 924,
   "name": "Deadicated Amber",
   "style": "American Amber / Red Ale",
   "brewery_id": 491,
   "ounces": 16
 },
 {
   "FIELD1": 723,
   "abv": null,
   "ibu": null,
   "Idaho": 731,
   "name": "Kaleidoscope Collaboration 2012",
   "style": "American Black Ale",
   "brewery_id": 491,
   "ounces": 16
 },
 {
   "FIELD1": 724,
   "abv": 0.071,
   "ibu": 85,
   "Idaho": 730,
   "name": "California Sunshine Rye IPA",
   "style": "American IPA",
   "brewery_id": 491,
   "ounces": 16
 },
 {
   "FIELD1": 725,
   "abv": 0.07400000000000001,
   "ibu": 12,
   "Idaho": 647,
   "name": "Full Boar Scotch Ale",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 491,
   "ounces": 16
 },
 {
   "FIELD1": 726,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1773,
   "name": "12 Man Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 319,
   "ounces": 12
 },
 {
   "FIELD1": 727,
   "abv": 0.065,
   "ibu": 72,
   "Idaho": 1795,
   "name": "Filthy Hoppin' IPA",
   "style": "American IPA",
   "brewery_id": 311,
   "ounces": 16
 },
 {
   "FIELD1": 728,
   "abv": null,
   "ibu": null,
   "Idaho": 944,
   "name": "Dock Street Amber Beer (1992)",
   "style": "American Amber / Red Ale",
   "brewery_id": 488,
   "ounces": 12
 },
 {
   "FIELD1": 729,
   "abv": null,
   "ibu": null,
   "Idaho": 524,
   "name": "Dolores River Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 531,
   "ounces": 16
 },
 {
   "FIELD1": 730,
   "abv": null,
   "ibu": null,
   "Idaho": 450,
   "name": "Dolores River ESB",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 531,
   "ounces": 16
 },
 {
   "FIELD1": 731,
   "abv": null,
   "ibu": null,
   "Idaho": 449,
   "name": "Snaggletooth Double Pale Ale",
   "style": "American Double / Imperial IPA",
   "brewery_id": 531,
   "ounces": 16
 },
 {
   "FIELD1": 732,
   "abv": null,
   "ibu": null,
   "Idaho": 448,
   "name": "Dolores River Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 531,
   "ounces": 16
 },
 {
   "FIELD1": 733,
   "abv": null,
   "ibu": null,
   "Idaho": 447,
   "name": "Dolores River Dry Stout",
   "style": "Irish Dry Stout",
   "brewery_id": 531,
   "ounces": 16
 },
 {
   "FIELD1": 734,
   "abv": null,
   "ibu": null,
   "Idaho": 446,
   "name": "Dolores River Mild",
   "style": "English Dark Mild Ale",
   "brewery_id": 531,
   "ounces": 16
 },
 {
   "FIELD1": 735,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 1246,
   "name": "Cranberry Blend",
   "style": "Cider",
   "brewery_id": 446,
   "ounces": 12
 },
 {
   "FIELD1": 736,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 977,
   "name": "Orignal Blend",
   "style": "Cider",
   "brewery_id": 446,
   "ounces": 12
 },
 {
   "FIELD1": 737,
   "abv": 0.066,
   "ibu": 100,
   "Idaho": 881,
   "name": "Hop Abomination",
   "style": "American IPA",
   "brewery_id": 496,
   "ounces": 12
 },
 {
   "FIELD1": 738,
   "abv": 0.051,
   "ibu": 17,
   "Idaho": 880,
   "name": "Apricot Blonde",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 496,
   "ounces": 12
 },
 {
   "FIELD1": 739,
   "abv": 0.043,
   "ibu": 12,
   "Idaho": 872,
   "name": "Dry Dock Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 496,
   "ounces": 12
 },
 {
   "FIELD1": 740,
   "abv": 0.057999999999999996,
   "ibu": 49,
   "Idaho": 871,
   "name": "Dry Dock Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 496,
   "ounces": 12
 },
 {
   "FIELD1": 741,
   "abv": 0.061,
   "ibu": 64,
   "Idaho": 1685,
   "name": "Category 3 IPA",
   "style": "American IPA",
   "brewery_id": 340,
   "ounces": 12
 },
 {
   "FIELD1": 742,
   "abv": 0.045,
   "ibu": 18,
   "Idaho": 457,
   "name": "Dundee Summer Wheat Beer",
   "style": "American Pale Wheat Ale",
   "brewery_id": 538,
   "ounces": 12
 },
 {
   "FIELD1": 743,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1590,
   "name": "Pumpkin Patch Ale",
   "style": "Pumpkin Ale",
   "brewery_id": 369,
   "ounces": 16
 },
 {
   "FIELD1": 744,
   "abv": 0.078,
   "ibu": 74,
   "Idaho": 1382,
   "name": "Crank Yanker IPA",
   "style": "American IPA",
   "brewery_id": 369,
   "ounces": 16
 },
 {
   "FIELD1": 745,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1110,
   "name": "River Runners Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 369,
   "ounces": 16
 },
 {
   "FIELD1": 746,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1014,
   "name": "Pumpkin Patch Ale (2012)",
   "style": "Pumpkin Ale",
   "brewery_id": 369,
   "ounces": 16
 },
 {
   "FIELD1": 747,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 911,
   "name": "Mountain Fairy Raspberry Wheat",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 369,
   "ounces": 16
 },
 {
   "FIELD1": 748,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 680,
   "name": "Boater Beer",
   "style": "German Pilsener",
   "brewery_id": 369,
   "ounces": 16
 },
 {
   "FIELD1": 749,
   "abv": 0.078,
   "ibu": 74,
   "Idaho": 395,
   "name": "Crank Yanker IPA (2011)",
   "style": "American IPA",
   "brewery_id": 369,
   "ounces": 16
 },
 {
   "FIELD1": 750,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 1642,
   "name": "Bleeding Buckeye Red Ale",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 352,
   "ounces": 16
 },
 {
   "FIELD1": 751,
   "abv": 0.049,
   "ibu": 25,
   "Idaho": 673,
   "name": "Dottie Seattle Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 516,
   "ounces": 16
 },
 {
   "FIELD1": 752,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1107,
   "name": "Nut Sack Imperial Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 465,
   "ounces": 12
 },
 {
   "FIELD1": 753,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1039,
   "name": "Underachiever",
   "style": "American Adjunct Lager",
   "brewery_id": 473,
   "ounces": 16
 },
 {
   "FIELD1": 754,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2477,
   "name": "Lil' Brainless Raspberries",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 81,
   "ounces": 12
 },
 {
   "FIELD1": 755,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2008,
   "name": "Element 29",
   "style": "American Pale Ale (APA)",
   "brewery_id": 81,
   "ounces": 12
 },
 {
   "FIELD1": 756,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2004,
   "name": "Hop Syndrome",
   "style": "American Pale Lager",
   "brewery_id": 81,
   "ounces": 12
 },
 {
   "FIELD1": 757,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2003,
   "name": "Escape to Colorado",
   "style": "American IPA",
   "brewery_id": 81,
   "ounces": 12
 },
 {
   "FIELD1": 758,
   "abv": 0.043,
   "ibu": 60,
   "Idaho": 2292,
   "name": "Little Sister India Style Session Ale",
   "style": "American IPA",
   "brewery_id": 170,
   "ounces": 12
 },
 {
   "FIELD1": 759,
   "abv": 0.062,
   "ibu": 80,
   "Idaho": 1504,
   "name": "Country Boy IPA",
   "style": "American IPA",
   "brewery_id": 170,
   "ounces": 12
 },
 {
   "FIELD1": 760,
   "abv": 0.049,
   "ibu": 23,
   "Idaho": 2604,
   "name": "Blonde Czich",
   "style": "American Blonde Ale",
   "brewery_id": 26,
   "ounces": 16
 },
 {
   "FIELD1": 761,
   "abv": 0.07,
   "ibu": 61,
   "Idaho": 2432,
   "name": "White Reaper",
   "style": "Belgian IPA",
   "brewery_id": 26,
   "ounces": 16
 },
 {
   "FIELD1": 762,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 2431,
   "name": "Bobblehead",
   "style": "American Pale Wheat Ale",
   "brewery_id": 26,
   "ounces": 16
 },
 {
   "FIELD1": 763,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2430,
   "name": "Lucky Dog",
   "style": "American Pale Ale (APA)",
   "brewery_id": 26,
   "ounces": 16
 },
 {
   "FIELD1": 764,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 2429,
   "name": "Voodoo",
   "style": "American Porter",
   "brewery_id": 26,
   "ounces": 16
 },
 {
   "FIELD1": 765,
   "abv": 0.054000000000000006,
   "ibu": 48,
   "Idaho": 1967,
   "name": "General George Patton Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 26,
   "ounces": 16
 },
 {
   "FIELD1": 766,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 2283,
   "name": "Nomader Weiss",
   "style": "Berliner Weissbier",
   "brewery_id": 173,
   "ounces": 12
 },
 {
   "FIELD1": 767,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 2248,
   "name": "Molotov Lite",
   "style": "American Double / Imperial IPA",
   "brewery_id": 173,
   "ounces": 16
 },
 {
   "FIELD1": 768,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1287,
   "name": "Hipster Ale (Two Roads Brewing)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 173,
   "ounces": 12
 },
 {
   "FIELD1": 769,
   "abv": 0.027000000000000003,
   "ibu": null,
   "Idaho": 1286,
   "name": "Bikini Beer",
   "style": "American IPA",
   "brewery_id": 173,
   "ounces": 12
 },
 {
   "FIELD1": 770,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 640,
   "name": "Hipster Ale (Westbrook Brewing)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 173,
   "ounces": 12
 },
 {
   "FIELD1": 771,
   "abv": 0.05,
   "ibu": 32,
   "Idaho": 1722,
   "name": "Iron Horse Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 335,
   "ounces": 12
 },
 {
   "FIELD1": 772,
   "abv": 0.045,
   "ibu": 19,
   "Idaho": 1435,
   "name": "Stone's Throw IPA",
   "style": "Scottish Ale",
   "brewery_id": 335,
   "ounces": 12
 },
 {
   "FIELD1": 773,
   "abv": 0.067,
   "ibu": 70,
   "Idaho": 1434,
   "name": "Wood Chipper India Pale Ale",
   "style": "American IPA",
   "brewery_id": 335,
   "ounces": 12
 },
 {
   "FIELD1": 774,
   "abv": 0.063,
   "ibu": 55,
   "Idaho": 2089,
   "name": "Trail Head",
   "style": "American Pale Ale (APA)",
   "brewery_id": 224,
   "ounces": 12
 },
 {
   "FIELD1": 775,
   "abv": 0.07,
   "ibu": 80,
   "Idaho": 2088,
   "name": "Hop Stalker Fresh Hop IPA",
   "style": "American IPA",
   "brewery_id": 224,
   "ounces": 16
 },
 {
   "FIELD1": 776,
   "abv": 0.07,
   "ibu": 58,
   "Idaho": 1455,
   "name": "Sudice American Stout",
   "style": "American Stout",
   "brewery_id": 405,
   "ounces": 16
 },
 {
   "FIELD1": 777,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 1454,
   "name": "Parcae Belgian Style Pale Ale",
   "style": "Belgian Pale Ale",
   "brewery_id": 405,
   "ounces": 16
 },
 {
   "FIELD1": 778,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 1453,
   "name": "Norns Roggenbier",
   "style": "Roggenbier",
   "brewery_id": 405,
   "ounces": 16
 },
 {
   "FIELD1": 779,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 1452,
   "name": "Laimas Kölsch Style Ale",
   "style": "Kölsch",
   "brewery_id": 405,
   "ounces": 16
 },
 {
   "FIELD1": 780,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 1451,
   "name": "Moirai India Pale Ale",
   "style": "American IPA",
   "brewery_id": 405,
   "ounces": 16
 },
 {
   "FIELD1": 781,
   "abv": 0.075,
   "ibu": 53,
   "Idaho": 2191,
   "name": "Loki Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 201,
   "ounces": 16
 },
 {
   "FIELD1": 782,
   "abv": 0.046,
   "ibu": null,
   "Idaho": 1731,
   "name": "Peaches & Cream",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 201,
   "ounces": 16
 },
 {
   "FIELD1": 783,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 1022,
   "name": "Quaff India Style Session Ale",
   "style": "American IPA",
   "brewery_id": 201,
   "ounces": 16
 },
 {
   "FIELD1": 784,
   "abv": 0.075,
   "ibu": 53,
   "Idaho": 895,
   "name": "Loki Red Ale (2013)",
   "style": "American Amber / Red Ale",
   "brewery_id": 201,
   "ounces": 16
 },
 {
   "FIELD1": 785,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 682,
   "name": "Mjolnir Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 201,
   "ounces": 16
 },
 {
   "FIELD1": 786,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 112,
   "name": "Fearless Scottish Ale",
   "style": "Scottish Ale",
   "brewery_id": 201,
   "ounces": 16
 },
 {
   "FIELD1": 787,
   "abv": 0.081,
   "ibu": null,
   "Idaho": 2289,
   "name": "Mastermind",
   "style": "American Double / Imperial IPA",
   "brewery_id": 172,
   "ounces": 12
 },
 {
   "FIELD1": 788,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 2027,
   "name": "Hyzer Flip",
   "style": "American Double / Imperial IPA",
   "brewery_id": 172,
   "ounces": 16
 },
 {
   "FIELD1": 789,
   "abv": 0.08199999999999999,
   "ibu": 80,
   "Idaho": 1929,
   "name": "Second Fiddle",
   "style": "American Double / Imperial IPA",
   "brewery_id": 172,
   "ounces": 16
 },
 {
   "FIELD1": 790,
   "abv": 0.055,
   "ibu": 30,
   "Idaho": 1858,
   "name": "Hodad Porter",
   "style": "American Porter",
   "brewery_id": 172,
   "ounces": 16
 },
 {
   "FIELD1": 791,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2591,
   "name": "Weiss Weiss Baby",
   "style": "Kristalweizen",
   "brewery_id": 36,
   "ounces": 12
 },
 {
   "FIELD1": 792,
   "abv": 0.055,
   "ibu": 45,
   "Idaho": 2590,
   "name": "Czech Yo Self",
   "style": "Czech Pilsener",
   "brewery_id": 36,
   "ounces": 12
 },
 {
   "FIELD1": 793,
   "abv": 0.048,
   "ibu": 20,
   "Idaho": 1968,
   "name": "FMB 101",
   "style": "Kölsch",
   "brewery_id": 36,
   "ounces": 12
 },
 {
   "FIELD1": 794,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 1981,
   "name": "Hardcore Chimera",
   "style": "American Double / Imperial IPA",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 795,
   "abv": 0.08,
   "ibu": 80,
   "Idaho": 1664,
   "name": "Sobek & Set",
   "style": "American Black Ale",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 796,
   "abv": 0.086,
   "ibu": null,
   "Idaho": 1663,
   "name": "Nuclear Winter",
   "style": "Belgian Strong Dark Ale",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 797,
   "abv": 0.05,
   "ibu": 22,
   "Idaho": 1662,
   "name": "Wet Hot American Wheat Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 798,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 941,
   "name": "Secret Stache Stout",
   "style": "American Stout",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 799,
   "abv": 0.08,
   "ibu": 72,
   "Idaho": 935,
   "name": "Fascist Pig Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 800,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 809,
   "name": "Cut Throat Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 801,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 481,
   "name": "Threadless IPA",
   "style": "American IPA",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 802,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 351,
   "name": "Cut Throat Pale Ale (2011)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 803,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 350,
   "name": "Golden Wing Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 256,
   "ounces": 16
 },
 {
   "FIELD1": 804,
   "abv": 0.045,
   "ibu": 47,
   "Idaho": 2569,
   "name": "Easy Jack",
   "style": "American IPA",
   "brewery_id": 48,
   "ounces": 12
 },
 {
   "FIELD1": 805,
   "abv": 0.075,
   "ibu": 75,
   "Idaho": 2463,
   "name": "Union Jack",
   "style": "American IPA",
   "brewery_id": 48,
   "ounces": 12
 },
 {
   "FIELD1": 806,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 2462,
   "name": "Pivo Pils",
   "style": "German Pilsener",
   "brewery_id": 48,
   "ounces": 12
 },
 {
   "FIELD1": 807,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1957,
   "name": "805 Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 48,
   "ounces": 12
 },
 {
   "FIELD1": 808,
   "abv": 0.047,
   "ibu": 20,
   "Idaho": 1733,
   "name": "805",
   "style": "American Blonde Ale",
   "brewery_id": 48,
   "ounces": 12
 },
 {
   "FIELD1": 809,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2624,
   "name": "Deflator",
   "style": "Doppelbock",
   "brewery_id": 16,
   "ounces": 16
 },
 {
   "FIELD1": 810,
   "abv": 0.05,
   "ibu": 27,
   "Idaho": 2284,
   "name": "Hinchtown Hammer Down",
   "style": "American Blonde Ale",
   "brewery_id": 16,
   "ounces": 16
 },
 {
   "FIELD1": 811,
   "abv": 0.06,
   "ibu": 104,
   "Idaho": 1610,
   "name": "Half Cycle IPA",
   "style": "American IPA",
   "brewery_id": 16,
   "ounces": 16
 },
 {
   "FIELD1": 812,
   "abv": null,
   "ibu": null,
   "Idaho": 520,
   "name": "Inclined Plane Ale",
   "style": "American IPA",
   "brewery_id": 532,
   "ounces": 12
 },
 {
   "FIELD1": 813,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2554,
   "name": "Moped Traveler",
   "style": "American Pale Ale (APA)",
   "brewery_id": 54,
   "ounces": 16
 },
 {
   "FIELD1": 814,
   "abv": 0.071,
   "ibu": 60,
   "Idaho": 608,
   "name": "Snake Dog IPA",
   "style": "American IPA",
   "brewery_id": 521,
   "ounces": 12
 },
 {
   "FIELD1": 815,
   "abv": 0.047,
   "ibu": 28,
   "Idaho": 607,
   "name": "Underdog Atlantic Lager",
   "style": "American Pale Lager",
   "brewery_id": 521,
   "ounces": 12
 },
 {
   "FIELD1": 816,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 2567,
   "name": "Flying Mouse 8",
   "style": "American Porter",
   "brewery_id": 50,
   "ounces": 12
 },
 {
   "FIELD1": 817,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 2566,
   "name": "Flying Mouse 4",
   "style": "American IPA",
   "brewery_id": 50,
   "ounces": 12
 },
 {
   "FIELD1": 818,
   "abv": 0.078,
   "ibu": null,
   "Idaho": 1899,
   "name": "La Ferme Urbaine Farmhouse Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 279,
   "ounces": 12
 },
 {
   "FIELD1": 819,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 983,
   "name": "Backyahd IPA",
   "style": "American IPA",
   "brewery_id": 279,
   "ounces": 12
 },
 {
   "FIELD1": 820,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 982,
   "name": "Raincloud Robust Porter",
   "style": "American Porter",
   "brewery_id": 279,
   "ounces": 12
 },
 {
   "FIELD1": 821,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 981,
   "name": "Barstool American Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 279,
   "ounces": 12
 },
 {
   "FIELD1": 822,
   "abv": 0.05,
   "ibu": 18,
   "Idaho": 2111,
   "name": "What the Butler Saw",
   "style": "Witbier",
   "brewery_id": 217,
   "ounces": 12
 },
 {
   "FIELD1": 823,
   "abv": 0.069,
   "ibu": 65,
   "Idaho": 2110,
   "name": "1916 Shore Shiver",
   "style": "American IPA",
   "brewery_id": 217,
   "ounces": 12
 },
 {
   "FIELD1": 824,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2172,
   "name": "Quick WIT",
   "style": "Belgian Pale Ale",
   "brewery_id": 206,
   "ounces": 12
 },
 {
   "FIELD1": 825,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2171,
   "name": "The Optimist",
   "style": "American IPA",
   "brewery_id": 206,
   "ounces": 12
 },
 {
   "FIELD1": 826,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1911,
   "name": "Suicide Squeeze IPA",
   "style": "American IPA",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 827,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1803,
   "name": "Java the Hop",
   "style": "American IPA",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 828,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 1566,
   "name": "Next Adventure Black IPA",
   "style": "American Black Ale",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 829,
   "abv": 0.067,
   "ibu": null,
   "Idaho": 1515,
   "name": "3-Way IPA (2013)",
   "style": "American IPA",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 830,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 1214,
   "name": "Tender Loving Empire NWPA",
   "style": "American Pale Ale (APA)",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 831,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 674,
   "name": "Quick Wit Belgianesque Ale",
   "style": "Witbier",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 832,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 562,
   "name": "Sunrise Oatmeal Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 833,
   "abv": 0.08800000000000001,
   "ibu": null,
   "Idaho": 552,
   "name": "Cavatica Stout",
   "style": "American Double / Imperial Stout",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 834,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 319,
   "name": "1811 Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 835,
   "abv": 0.07400000000000001,
   "ibu": 97,
   "Idaho": 318,
   "name": "Vortex IPA",
   "style": "American IPA",
   "brewery_id": 206,
   "ounces": 16
 },
 {
   "FIELD1": 836,
   "abv": null,
   "ibu": null,
   "Idaho": 2322,
   "name": "Fort Pitt Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 151,
   "ounces": 12
 },
 {
   "FIELD1": 837,
   "abv": 0.047,
   "ibu": 19,
   "Idaho": 2661,
   "name": "Park",
   "style": "American Pale Wheat Ale",
   "brewery_id": 4,
   "ounces": 12
 },
 {
   "FIELD1": 838,
   "abv": 0.055999999999999994,
   "ibu": 16,
   "Idaho": 2660,
   "name": "Westfalia",
   "style": "American Amber / Red Ale",
   "brewery_id": 4,
   "ounces": 12
 },
 {
   "FIELD1": 839,
   "abv": 0.046,
   "ibu": 17,
   "Idaho": 2659,
   "name": "KSA",
   "style": "Kölsch",
   "brewery_id": 4,
   "ounces": 12
 },
 {
   "FIELD1": 840,
   "abv": 0.063,
   "ibu": 42,
   "Idaho": 2658,
   "name": "Villager",
   "style": "American IPA",
   "brewery_id": 4,
   "ounces": 12
 },
 {
   "FIELD1": 841,
   "abv": 0.085,
   "ibu": 50,
   "Idaho": 2625,
   "name": "Dirty Bastard",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 15,
   "ounces": 12
 },
 {
   "FIELD1": 842,
   "abv": 0.07200000000000001,
   "ibu": 65,
   "Idaho": 1565,
   "name": "Centennial IPA",
   "style": "American IPA",
   "brewery_id": 15,
   "ounces": 12
 },
 {
   "FIELD1": 843,
   "abv": 0.047,
   "ibu": 42,
   "Idaho": 1223,
   "name": "All Day IPA",
   "style": "American IPA",
   "brewery_id": 15,
   "ounces": 12
 },
 {
   "FIELD1": 844,
   "abv": 0.076,
   "ibu": 73,
   "Idaho": 1874,
   "name": "El Chingon IPA",
   "style": "American IPA",
   "brewery_id": 287,
   "ounces": 12
 },
 {
   "FIELD1": 845,
   "abv": 0.057,
   "ibu": 40,
   "Idaho": 1873,
   "name": "Block Party Robust Porter",
   "style": "American Porter",
   "brewery_id": 287,
   "ounces": 12
 },
 {
   "FIELD1": 846,
   "abv": 0.052000000000000005,
   "ibu": 20,
   "Idaho": 1872,
   "name": "Local Buzz",
   "style": "American Blonde Ale",
   "brewery_id": 287,
   "ounces": 12
 },
 {
   "FIELD1": 847,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2613,
   "name": "Feel Like Maplin' Love",
   "style": "Oatmeal Stout",
   "brewery_id": 22,
   "ounces": 16
 },
 {
   "FIELD1": 848,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2612,
   "name": "Father's Beer",
   "style": "Belgian Pale Ale",
   "brewery_id": 22,
   "ounces": 16
 },
 {
   "FIELD1": 849,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2611,
   "name": "The 26th",
   "style": "American IPA",
   "brewery_id": 22,
   "ounces": 16
 },
 {
   "FIELD1": 850,
   "abv": 0.064,
   "ibu": 90,
   "Idaho": 2610,
   "name": "The Gadget",
   "style": "American IPA",
   "brewery_id": 22,
   "ounces": 16
 },
 {
   "FIELD1": 851,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 1657,
   "name": "Leprechaun Lager",
   "style": "American Pale Lager",
   "brewery_id": 348,
   "ounces": 12
 },
 {
   "FIELD1": 852,
   "abv": 0.052000000000000005,
   "ibu": 17,
   "Idaho": 2309,
   "name": "Sunbru Kölsch",
   "style": "Kölsch",
   "brewery_id": 160,
   "ounces": 12
 },
 {
   "FIELD1": 853,
   "abv": 0.06,
   "ibu": 21,
   "Idaho": 1635,
   "name": "Kilt Lifter Scottish-Style Ale",
   "style": "",
   "brewery_id": 160,
   "ounces": 12
 },
 {
   "FIELD1": 854,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 1616,
   "name": "Pumpkin Porter",
   "style": "American Porter",
   "brewery_id": 160,
   "ounces": 12
 },
 {
   "FIELD1": 855,
   "abv": 0.042,
   "ibu": 9,
   "Idaho": 1585,
   "name": "Four Peaks Peach Ale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 160,
   "ounces": 12
 },
 {
   "FIELD1": 856,
   "abv": 0.067,
   "ibu": 47,
   "Idaho": 358,
   "name": "Hop Knot IPA",
   "style": "American IPA",
   "brewery_id": 160,
   "ounces": 12
 },
 {
   "FIELD1": 857,
   "abv": 0.06,
   "ibu": 21,
   "Idaho": 179,
   "name": "Kilt Lifter Scottish-Style Ale (2009)",
   "style": "Scottish Ale",
   "brewery_id": 160,
   "ounces": 12
 },
 {
   "FIELD1": 858,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 178,
   "name": "Sunbru Kölsch",
   "style": "Kölsch",
   "brewery_id": 160,
   "ounces": 12
 },
 {
   "FIELD1": 859,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2428,
   "name": "Four String Vanilla Porter",
   "style": "American Porter",
   "brewery_id": 105,
   "ounces": 12
 },
 {
   "FIELD1": 860,
   "abv": 0.05,
   "ibu": 28,
   "Idaho": 2427,
   "name": "Suncaster Summer Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 105,
   "ounces": 12
 },
 {
   "FIELD1": 861,
   "abv": 0.057,
   "ibu": 36,
   "Idaho": 2425,
   "name": "Brass Knuckle Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 105,
   "ounces": 12
 },
 {
   "FIELD1": 862,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 2424,
   "name": "Big Star White IPA",
   "style": "American White IPA",
   "brewery_id": 105,
   "ounces": 12
 },
 {
   "FIELD1": 863,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 1998,
   "name": "Old Detroit",
   "style": "American Amber / Red Ale",
   "brewery_id": 253,
   "ounces": 12
 },
 {
   "FIELD1": 864,
   "abv": 0.069,
   "ibu": 69,
   "Idaho": 1556,
   "name": "Batch 69 IPA",
   "style": "American IPA",
   "brewery_id": 253,
   "ounces": 12
 },
 {
   "FIELD1": 865,
   "abv": 0.055,
   "ibu": 18,
   "Idaho": 1208,
   "name": "Twisted Helles Summer Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 253,
   "ounces": 12
 },
 {
   "FIELD1": 866,
   "abv": 0.053,
   "ibu": 27,
   "Idaho": 2527,
   "name": "OktoberFiesta",
   "style": "",
   "brewery_id": 66,
   "ounces": 12
 },
 {
   "FIELD1": 867,
   "abv": 0.065,
   "ibu": 33,
   "Idaho": 2526,
   "name": "Texicali ",
   "style": "American Brown Ale",
   "brewery_id": 66,
   "ounces": 12
 },
 {
   "FIELD1": 868,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2525,
   "name": "Pinata Protest",
   "style": "Witbier",
   "brewery_id": 66,
   "ounces": 12
 },
 {
   "FIELD1": 869,
   "abv": 0.042,
   "ibu": 20,
   "Idaho": 2524,
   "name": "Bat Outta Helles",
   "style": "Munich Helles Lager",
   "brewery_id": 66,
   "ounces": 12
 },
 {
   "FIELD1": 870,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 2523,
   "name": "Original",
   "style": "American Amber / Red Ale",
   "brewery_id": 66,
   "ounces": 12
 },
 {
   "FIELD1": 871,
   "abv": 0.042,
   "ibu": 10,
   "Idaho": 2522,
   "name": "Rye Wit",
   "style": "Witbier",
   "brewery_id": 66,
   "ounces": 12
 },
 {
   "FIELD1": 872,
   "abv": 0.059000000000000004,
   "ibu": 70,
   "Idaho": 2521,
   "name": "Soul Doubt",
   "style": "American IPA",
   "brewery_id": 66,
   "ounces": 12
 },
 {
   "FIELD1": 873,
   "abv": 0.044000000000000004,
   "ibu": 5,
   "Idaho": 2520,
   "name": "Yo Soy Un Berliner",
   "style": "Berliner Weissbier",
   "brewery_id": 66,
   "ounces": 12
 },
 {
   "FIELD1": 874,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 1174,
   "name": "77 Fremont Select Spring Session IPA",
   "style": "American IPA",
   "brewery_id": 460,
   "ounces": 12
 },
 {
   "FIELD1": 875,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1116,
   "name": "Fremont Organic Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 460,
   "ounces": 12
 },
 {
   "FIELD1": 876,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 994,
   "name": "Abominable Ale",
   "style": "English Strong Ale",
   "brewery_id": 460,
   "ounces": 12
 },
 {
   "FIELD1": 877,
   "abv": 0.065,
   "ibu": 35,
   "Idaho": 901,
   "name": "Harvest Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 460,
   "ounces": 12
 },
 {
   "FIELD1": 878,
   "abv": 0.065,
   "ibu": 45,
   "Idaho": 875,
   "name": "Fremont Summer Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 460,
   "ounces": 12
 },
 {
   "FIELD1": 879,
   "abv": 0.055999999999999994,
   "ibu": 30,
   "Idaho": 858,
   "name": "Universale Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 460,
   "ounces": 12
 },
 {
   "FIELD1": 880,
   "abv": 0.065,
   "ibu": 80,
   "Idaho": 857,
   "name": "Interurban IPA",
   "style": "American IPA",
   "brewery_id": 460,
   "ounces": 12
 },
 {
   "FIELD1": 881,
   "abv": 0.053,
   "ibu": 32,
   "Idaho": 1300,
   "name": "Gateway Kolsch Style Ale",
   "style": "Kölsch",
   "brewery_id": 433,
   "ounces": 12
 },
 {
   "FIELD1": 882,
   "abv": 0.07,
   "ibu": 24,
   "Idaho": 1260,
   "name": "Wee-Heavy-Er Scotch Ale",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 433,
   "ounces": 12
 },
 {
   "FIELD1": 883,
   "abv": 0.052000000000000005,
   "ibu": 42,
   "Idaho": 1259,
   "name": "13 Rebels ESB",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 433,
   "ounces": 12
 },
 {
   "FIELD1": 884,
   "abv": 0.07,
   "ibu": 73,
   "Idaho": 2254,
   "name": "Salamander Slam",
   "style": "American IPA",
   "brewery_id": 180,
   "ounces": 16
 },
 {
   "FIELD1": 885,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1658,
   "name": "Cack-A-Lacky",
   "style": "American Pale Ale (APA)",
   "brewery_id": 347,
   "ounces": 12
 },
 {
   "FIELD1": 886,
   "abv": 0.07200000000000001,
   "ibu": 50,
   "Idaho": 2077,
   "name": "No Wake IPA",
   "style": "American IPA",
   "brewery_id": 228,
   "ounces": 12
 },
 {
   "FIELD1": 887,
   "abv": 0.049,
   "ibu": 15,
   "Idaho": 2076,
   "name": "Boathouse Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 228,
   "ounces": 12
 },
 {
   "FIELD1": 888,
   "abv": 0.05,
   "ibu": 26,
   "Idaho": 2075,
   "name": "Cedar Point",
   "style": "American Amber / Red Ale",
   "brewery_id": 228,
   "ounces": 12
 },
 {
   "FIELD1": 889,
   "abv": 0.067,
   "ibu": 70,
   "Idaho": 2426,
   "name": "Clean Shave IPA",
   "style": "American IPA",
   "brewery_id": 106,
   "ounces": 12
 },
 {
   "FIELD1": 890,
   "abv": 0.07200000000000001,
   "ibu": 75,
   "Idaho": 2045,
   "name": "Might As Well IPL",
   "style": "American Pale Lager",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 891,
   "abv": 0.057999999999999996,
   "ibu": 35,
   "Idaho": 1960,
   "name": "Saison Pamplemousse",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 240,
   "ounces": 12
 },
 {
   "FIELD1": 892,
   "abv": 0.07400000000000001,
   "ibu": 74,
   "Idaho": 1777,
   "name": "2020 IPA",
   "style": "American IPA",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 893,
   "abv": 0.08,
   "ibu": 70,
   "Idaho": 1698,
   "name": "Wolf Among Weeds IPA",
   "style": "American IPA",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 894,
   "abv": 0.094,
   "ibu": 92,
   "Idaho": 1641,
   "name": "Better Weather IPA",
   "style": "American IPA",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 895,
   "abv": 0.059000000000000004,
   "ibu": 60,
   "Idaho": 1490,
   "name": "Point the Way IPA",
   "style": "American IPA",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 896,
   "abv": 0.046,
   "ibu": 15,
   "Idaho": 1489,
   "name": "Golden Road Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 897,
   "abv": 0.068,
   "ibu": 65,
   "Idaho": 1399,
   "name": "Heal the Bay IPA",
   "style": "American IPA",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 898,
   "abv": 0.059000000000000004,
   "ibu": 60,
   "Idaho": 1296,
   "name": "Point the Way IPA",
   "style": "American IPA",
   "brewery_id": 240,
   "ounces": 12
 },
 {
   "FIELD1": 899,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1034,
   "name": "Cabrillo Kölsch",
   "style": "Kölsch",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 900,
   "abv": 0.055,
   "ibu": 20,
   "Idaho": 991,
   "name": "Get Up Offa That Brown",
   "style": "American Brown Ale",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 901,
   "abv": 0.08,
   "ibu": 70,
   "Idaho": 750,
   "name": "Burning Bush Smoked IPA",
   "style": "American IPA",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 902,
   "abv": 0.08,
   "ibu": 70,
   "Idaho": 749,
   "name": "Wolf Among Weeds IPA (2012)",
   "style": "American IPA",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 903,
   "abv": 0.059000000000000004,
   "ibu": 60,
   "Idaho": 549,
   "name": "Point the Way IPA (2012)",
   "style": "American IPA",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 904,
   "abv": 0.046,
   "ibu": 15,
   "Idaho": 548,
   "name": "Golden Road Hefeweizen (2012)",
   "style": "Hefeweizen",
   "brewery_id": 240,
   "ounces": 16
 },
 {
   "FIELD1": 905,
   "abv": 0.07,
   "ibu": 11,
   "Idaho": 2587,
   "name": "Vanilla Porter",
   "style": "American Porter",
   "brewery_id": 39,
   "ounces": 16
 },
 {
   "FIELD1": 906,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 1109,
   "name": "Descender IPA",
   "style": "American IPA",
   "brewery_id": 464,
   "ounces": 12
 },
 {
   "FIELD1": 907,
   "abv": 0.06,
   "ibu": 18,
   "Idaho": 1108,
   "name": "Sweet As Pacific Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 464,
   "ounces": 12
 },
 {
   "FIELD1": 908,
   "abv": 0.055999999999999994,
   "ibu": 36,
   "Idaho": 1000,
   "name": "Good People Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 478,
   "ounces": 12
 },
 {
   "FIELD1": 909,
   "abv": 0.09300000000000001,
   "ibu": 103,
   "Idaho": 312,
   "name": "Snake Handler Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 478,
   "ounces": 12
 },
 {
   "FIELD1": 910,
   "abv": 0.06,
   "ibu": 54,
   "Idaho": 311,
   "name": "Coffee Oatmeal Stout",
   "style": "Oatmeal Stout",
   "brewery_id": 478,
   "ounces": 12
 },
 {
   "FIELD1": 911,
   "abv": 0.06,
   "ibu": 64,
   "Idaho": 309,
   "name": "Good People IPA",
   "style": "American IPA",
   "brewery_id": 478,
   "ounces": 12
 },
 {
   "FIELD1": 912,
   "abv": 0.057999999999999996,
   "ibu": 36,
   "Idaho": 308,
   "name": "Good People American Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 478,
   "ounces": 12
 },
 {
   "FIELD1": 913,
   "abv": 0.055,
   "ibu": 40,
   "Idaho": 2205,
   "name": "Mountain Rescue Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 194,
   "ounces": 12
 },
 {
   "FIELD1": 914,
   "abv": 0.059000000000000004,
   "ibu": 55,
   "Idaho": 2198,
   "name": "Goose Island India Pale Ale",
   "style": "American IPA",
   "brewery_id": 196,
   "ounces": 12
 },
 {
   "FIELD1": 915,
   "abv": 0.054000000000000006,
   "ibu": 30,
   "Idaho": 2457,
   "name": "312 Urban Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 88,
   "ounces": 16
 },
 {
   "FIELD1": 916,
   "abv": 0.054000000000000006,
   "ibu": 30,
   "Idaho": 2202,
   "name": "312 Urban Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 88,
   "ounces": 12
 },
 {
   "FIELD1": 917,
   "abv": 0.042,
   "ibu": 18,
   "Idaho": 2201,
   "name": "312 Urban Wheat Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 88,
   "ounces": 16
 },
 {
   "FIELD1": 918,
   "abv": 0.042,
   "ibu": 18,
   "Idaho": 1829,
   "name": "312 Urban Wheat Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 88,
   "ounces": 12
 },
 {
   "FIELD1": 919,
   "abv": 0.042,
   "ibu": 20,
   "Idaho": 581,
   "name": "312 Urban Wheat Ale (2012)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 88,
   "ounces": 12
 },
 {
   "FIELD1": 920,
   "abv": 0.052000000000000005,
   "ibu": 19,
   "Idaho": 1383,
   "name": "Beaver Logger",
   "style": "American Pale Lager",
   "brewery_id": 420,
   "ounces": 12
 },
 {
   "FIELD1": 921,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 477,
   "name": "White Water Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 536,
   "ounces": 12
 },
 {
   "FIELD1": 922,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 476,
   "name": "Grand Canyon American Pilsner",
   "style": "American Pilsner",
   "brewery_id": 536,
   "ounces": 12
 },
 {
   "FIELD1": 923,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 143,
   "name": "Grand Canyon Sunset Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 536,
   "ounces": 12
 },
 {
   "FIELD1": 924,
   "abv": null,
   "ibu": null,
   "Idaho": 142,
   "name": "Black Iron India Pale Ale",
   "style": "American IPA",
   "brewery_id": 536,
   "ounces": 12
 },
 {
   "FIELD1": 925,
   "abv": 0.043,
   "ibu": 21,
   "Idaho": 2129,
   "name": "Monarch Classic American Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 213,
   "ounces": 12
 },
 {
   "FIELD1": 926,
   "abv": 0.049,
   "ibu": 21,
   "Idaho": 2127,
   "name": "Sir William's English Brown Ale",
   "style": "English Brown Ale",
   "brewery_id": 213,
   "ounces": 12
 },
 {
   "FIELD1": 927,
   "abv": 0.055,
   "ibu": 35,
   "Idaho": 2126,
   "name": "Lakefire Rye Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 213,
   "ounces": 12
 },
 {
   "FIELD1": 928,
   "abv": 0.053,
   "ibu": 22,
   "Idaho": 2303,
   "name": "Beer Agent Re-Ignition",
   "style": "American Blonde Ale",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 929,
   "abv": 0.057,
   "ibu": 18,
   "Idaho": 1990,
   "name": "Cherry Ale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 930,
   "abv": 0.055999999999999994,
   "ibu": 33,
   "Idaho": 1702,
   "name": "Bourbon Barrel Aged Coconut Porter",
   "style": "American Porter",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 931,
   "abv": 0.062,
   "ibu": 60,
   "Idaho": 1701,
   "name": "Great Crescent IPA",
   "style": "American IPA",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 932,
   "abv": 0.057,
   "ibu": 27,
   "Idaho": 1700,
   "name": "Aurora Lager",
   "style": "Dortmunder / Export Lager",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 933,
   "abv": 0.053,
   "ibu": 22,
   "Idaho": 1699,
   "name": "Great Crescent Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 934,
   "abv": 0.055999999999999994,
   "ibu": 33,
   "Idaho": 1269,
   "name": "Great Crescent Coconut Porter",
   "style": "American Porter",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 935,
   "abv": 0.057,
   "ibu": 25,
   "Idaho": 930,
   "name": "Great Crescent Oktoberfest Lager",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 936,
   "abv": 0.045,
   "ibu": 36,
   "Idaho": 649,
   "name": "Great Crescent Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 937,
   "abv": 0.057,
   "ibu": 18,
   "Idaho": 639,
   "name": "Cherry Ale (1)",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 938,
   "abv": 0.057,
   "ibu": 27,
   "Idaho": 626,
   "name": "Aurora Lager (2011)",
   "style": "Dortmunder / Export Lager",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 939,
   "abv": 0.06,
   "ibu": 25,
   "Idaho": 615,
   "name": "Frosted Fields Winter Wheat",
   "style": "American Dark Wheat Ale",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 940,
   "abv": 0.051,
   "ibu": 13,
   "Idaho": 478,
   "name": "Great Crescent Belgian Style Wit",
   "style": "Witbier",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 941,
   "abv": 0.075,
   "ibu": 65,
   "Idaho": 455,
   "name": "Bourbon's Barrel Stout",
   "style": "American Stout",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 942,
   "abv": 0.08,
   "ibu": 66,
   "Idaho": 442,
   "name": "Great Crescent Stout",
   "style": "English Stout",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 943,
   "abv": 0.055999999999999994,
   "ibu": 33,
   "Idaho": 441,
   "name": "Great Crescent Coconut Porter (2012)",
   "style": "American Porter",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 944,
   "abv": 0.057,
   "ibu": 23,
   "Idaho": 440,
   "name": "Great Crescent Dark Lager",
   "style": "Euro Dark Lager",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 945,
   "abv": 0.042,
   "ibu": 26,
   "Idaho": 439,
   "name": "Great Crescent Mild Ale",
   "style": "English Dark Mild Ale",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 946,
   "abv": 0.062,
   "ibu": 60,
   "Idaho": 436,
   "name": "Great Crescent IPA (2011)",
   "style": "American IPA",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 947,
   "abv": 0.053,
   "ibu": 22,
   "Idaho": 389,
   "name": "Great Crescent Blonde Ale (2011)",
   "style": "American Blonde Ale",
   "brewery_id": 165,
   "ounces": 16
 },
 {
   "FIELD1": 948,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2650,
   "name": "Denver Pale Ale (Artist Series No. 1)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 6,
   "ounces": 12
 },
 {
   "FIELD1": 949,
   "abv": 0.087,
   "ibu": null,
   "Idaho": 2649,
   "name": "Hibernation Ale",
   "style": "Old Ale",
   "brewery_id": 6,
   "ounces": 12
 },
 {
   "FIELD1": 950,
   "abv": 0.061,
   "ibu": null,
   "Idaho": 2648,
   "name": "Whitewater",
   "style": "American Pale Wheat Ale",
   "brewery_id": 6,
   "ounces": 12
 },
 {
   "FIELD1": 951,
   "abv": 0.071,
   "ibu": null,
   "Idaho": 2647,
   "name": "Rumble",
   "style": "American IPA",
   "brewery_id": 6,
   "ounces": 12
 },
 {
   "FIELD1": 952,
   "abv": 0.083,
   "ibu": null,
   "Idaho": 2646,
   "name": "Orabelle",
   "style": "Tripel",
   "brewery_id": 6,
   "ounces": 12
 },
 {
   "FIELD1": 953,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2645,
   "name": "Lasso",
   "style": "American IPA",
   "brewery_id": 6,
   "ounces": 12
 },
 {
   "FIELD1": 954,
   "abv": 0.095,
   "ibu": 75,
   "Idaho": 2644,
   "name": "Yeti  Imperial Stout",
   "style": "Russian Imperial Stout",
   "brewery_id": 6,
   "ounces": 12
 },
 {
   "FIELD1": 955,
   "abv": 0.073,
   "ibu": null,
   "Idaho": 2643,
   "name": "Colette",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 6,
   "ounces": 12
 },
 {
   "FIELD1": 956,
   "abv": 0.071,
   "ibu": null,
   "Idaho": 2642,
   "name": "Titan IPA",
   "style": "American IPA",
   "brewery_id": 6,
   "ounces": 12
 },
 {
   "FIELD1": 957,
   "abv": 0.045,
   "ibu": 15,
   "Idaho": 404,
   "name": "Black Star Double Hopped Golden Lager (24 oz.)",
   "style": "American Pale Lager",
   "brewery_id": 543,
   "ounces": 24
 },
 {
   "FIELD1": 958,
   "abv": 0.045,
   "ibu": 15,
   "Idaho": 164,
   "name": "Black Star Double Hopped Golden Lager (12 oz.)",
   "style": "American Pale Lager",
   "brewery_id": 543,
   "ounces": 12
 },
 {
   "FIELD1": 959,
   "abv": 0.052000000000000005,
   "ibu": 49,
   "Idaho": 1923,
   "name": "Commotion APA",
   "style": "American Pale Ale (APA)",
   "brewery_id": 269,
   "ounces": 12
 },
 {
   "FIELD1": 960,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1922,
   "name": "Southern Drawl Pale Lager",
   "style": "American Pale Lager",
   "brewery_id": 269,
   "ounces": 12
 },
 {
   "FIELD1": 961,
   "abv": 0.05,
   "ibu": 5,
   "Idaho": 1604,
   "name": "Chickawawa Lemonale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 365,
   "ounces": 12
 },
 {
   "FIELD1": 962,
   "abv": 0.07,
   "ibu": 22,
   "Idaho": 1574,
   "name": "Barrel Aged Farmer",
   "style": "American Brown Ale",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 963,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1446,
   "name": "Great River Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 365,
   "ounces": 12
 },
 {
   "FIELD1": 964,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1275,
   "name": "Dirty Blonde Chocolate Ale",
   "style": "American Blonde Ale",
   "brewery_id": 365,
   "ounces": 12
 },
 {
   "FIELD1": 965,
   "abv": 0.048,
   "ibu": 20,
   "Idaho": 1244,
   "name": "Dos Pistolas",
   "style": "Vienna Lager",
   "brewery_id": 365,
   "ounces": 12
 },
 {
   "FIELD1": 966,
   "abv": 0.05,
   "ibu": 30,
   "Idaho": 1064,
   "name": "Owney Irish Style Red Ale",
   "style": "Irish Red Ale",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 967,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1028,
   "name": "Aaah Bock Lager",
   "style": "Vienna Lager",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 968,
   "abv": 0.055,
   "ibu": 10,
   "Idaho": 865,
   "name": "Widespread Wit",
   "style": "Witbier",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 969,
   "abv": 0.054000000000000006,
   "ibu": 30,
   "Idaho": 864,
   "name": "Roller Dam Red Ale",
   "style": "Irish Red Ale",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 970,
   "abv": 0.053,
   "ibu": 48,
   "Idaho": 863,
   "name": "483 Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 971,
   "abv": 0.09,
   "ibu": 99,
   "Idaho": 672,
   "name": "Hop A Potamus Double Dark Rye Pale Ale",
   "style": "Rye Beer",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 972,
   "abv": 0.07,
   "ibu": 22,
   "Idaho": 655,
   "name": "Farmer Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 973,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 540,
   "name": "Big Cock IPA",
   "style": "American IPA",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 974,
   "abv": 0.059000000000000004,
   "ibu": 25,
   "Idaho": 539,
   "name": "Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 975,
   "abv": 0.048,
   "ibu": 25,
   "Idaho": 517,
   "name": "40th Annual Bix Street Fest Copper Ale (Current)",
   "style": "American Amber / Red Ale",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 976,
   "abv": 0.06,
   "ibu": 36,
   "Idaho": 371,
   "name": "Redband Stout",
   "style": "American Stout",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 977,
   "abv": 0.053,
   "ibu": 48,
   "Idaho": 190,
   "name": "483 Pale Ale (2010)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 978,
   "abv": 0.054000000000000006,
   "ibu": 30,
   "Idaho": 189,
   "name": "Roller Dam Red Ale (2010)",
   "style": "Irish Red Ale",
   "brewery_id": 365,
   "ounces": 16
 },
 {
   "FIELD1": 979,
   "abv": 0.05,
   "ibu": 30,
   "Idaho": 1106,
   "name": "Pablo Beach Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 466,
   "ounces": 12
 },
 {
   "FIELD1": 980,
   "abv": 0.057,
   "ibu": 44,
   "Idaho": 2314,
   "name": "Wild Trail Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 156,
   "ounces": 12
 },
 {
   "FIELD1": 981,
   "abv": 0.067,
   "ibu": 71,
   "Idaho": 2313,
   "name": "Mothman Black IPA",
   "style": "American Black Ale",
   "brewery_id": 156,
   "ounces": 12
 },
 {
   "FIELD1": 982,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 2461,
   "name": "Autumn Winds Fest Beer",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 86,
   "ounces": 16
 },
 {
   "FIELD1": 983,
   "abv": 0.085,
   "ibu": 69,
   "Idaho": 2044,
   "name": "Captain's Daughter",
   "style": "American Double / Imperial IPA",
   "brewery_id": 86,
   "ounces": 12
 },
 {
   "FIELD1": 984,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 1567,
   "name": "Autumn Winds",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 379,
   "ounces": 16
 },
 {
   "FIELD1": 985,
   "abv": 0.06,
   "ibu": 54,
   "Idaho": 1505,
   "name": "Flying Jenny Extra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 379,
   "ounces": 12
 },
 {
   "FIELD1": 986,
   "abv": 0.04,
   "ibu": 20,
   "Idaho": 1186,
   "name": "Hazy Day Belgian-Style Wit",
   "style": "Witbier",
   "brewery_id": 379,
   "ounces": 16
 },
 {
   "FIELD1": 987,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1185,
   "name": "Bring Back the Beach Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 379,
   "ounces": 16
 },
 {
   "FIELD1": 988,
   "abv": 0.06,
   "ibu": 34,
   "Idaho": 984,
   "name": "Leaning Chimney Smoked Porter",
   "style": "American Porter",
   "brewery_id": 379,
   "ounces": 16
 },
 {
   "FIELD1": 989,
   "abv": 0.06,
   "ibu": 54,
   "Idaho": 693,
   "name": "Flying Jenny Extra Pale Ale (2012)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 379,
   "ounces": 12
 },
 {
   "FIELD1": 990,
   "abv": 0.049,
   "ibu": 22,
   "Idaho": 631,
   "name": "Flagship Ale",
   "style": "Cream Ale",
   "brewery_id": 379,
   "ounces": 12
 },
 {
   "FIELD1": 991,
   "abv": 0.045,
   "ibu": 6,
   "Idaho": 2375,
   "name": "Mr. Blue Sky",
   "style": "American Pale Wheat Ale",
   "brewery_id": 124,
   "ounces": 16
 },
 {
   "FIELD1": 992,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2143,
   "name": "3 Scrooges",
   "style": "Winter Warmer",
   "brewery_id": 124,
   "ounces": 16
 },
 {
   "FIELD1": 993,
   "abv": 0.05,
   "ibu": 25,
   "Idaho": 2142,
   "name": "Screamin’ Pumpkin",
   "style": "Pumpkin Ale",
   "brewery_id": 124,
   "ounces": 16
 },
 {
   "FIELD1": 994,
   "abv": 0.05,
   "ibu": 35,
   "Idaho": 2141,
   "name": "Grand Trunk Bohemian Pils",
   "style": "Czech Pilsener",
   "brewery_id": 124,
   "ounces": 16
 },
 {
   "FIELD1": 995,
   "abv": 0.065,
   "ibu": 25,
   "Idaho": 2140,
   "name": "El Rojo",
   "style": "American Amber / Red Ale",
   "brewery_id": 124,
   "ounces": 16
 },
 {
   "FIELD1": 996,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 2139,
   "name": "Norm's Raggedy Ass IPA",
   "style": "American IPA",
   "brewery_id": 124,
   "ounces": 16
 },
 {
   "FIELD1": 997,
   "abv": 0.05,
   "ibu": 35,
   "Idaho": 2138,
   "name": "Grind Line",
   "style": "American Pale Ale (APA)",
   "brewery_id": 124,
   "ounces": 16
 },
 {
   "FIELD1": 998,
   "abv": 0.04,
   "ibu": 55,
   "Idaho": 2007,
   "name": "Norm's Gateway IPA",
   "style": "American IPA",
   "brewery_id": 124,
   "ounces": 12
 },
 {
   "FIELD1": 999,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 1570,
   "name": "Lemon Shandy Tripel",
   "style": "Tripel",
   "brewery_id": 124,
   "ounces": 16
 },
 {
   "FIELD1": 1000,
   "abv": 0.063,
   "ibu": 43,
   "Idaho": 2339,
   "name": "Little Red Cap",
   "style": "Altbier",
   "brewery_id": 144,
   "ounces": 12
 },
 {
   "FIELD1": 1001,
   "abv": 0.069,
   "ibu": 67,
   "Idaho": 1857,
   "name": "Supergoose IPA",
   "style": "American IPA",
   "brewery_id": 290,
   "ounces": 12
 },
 {
   "FIELD1": 1002,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1440,
   "name": "Hale's Pale American Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 290,
   "ounces": 12
 },
 {
   "FIELD1": 1003,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1753,
   "name": "Heyoka IPA",
   "style": "American IPA",
   "brewery_id": 327,
   "ounces": 16
 },
 {
   "FIELD1": 1004,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1448,
   "name": "Guest Lager",
   "style": "American Double / Imperial Pilsner",
   "brewery_id": 327,
   "ounces": 16
 },
 {
   "FIELD1": 1005,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 1134,
   "name": "Pony Pilsner",
   "style": "German Pilsener",
   "brewery_id": 327,
   "ounces": 16
 },
 {
   "FIELD1": 1006,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1066,
   "name": "Akari Shogun American Wheat Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 327,
   "ounces": 16
 },
 {
   "FIELD1": 1007,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 849,
   "name": "Meat Wave",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 327,
   "ounces": 16
 },
 {
   "FIELD1": 1008,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 352,
   "name": "Over Ale",
   "style": "American Brown Ale",
   "brewery_id": 327,
   "ounces": 16
 },
 {
   "FIELD1": 1009,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 149,
   "name": "Gossamer Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 327,
   "ounces": 16
 },
 {
   "FIELD1": 1010,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 148,
   "name": "Daisy Cutter Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 327,
   "ounces": 16
 },
 {
   "FIELD1": 1011,
   "abv": 0.07,
   "ibu": 40,
   "Idaho": 2026,
   "name": "Pursuit",
   "style": "American IPA",
   "brewery_id": 248,
   "ounces": 12
 },
 {
   "FIELD1": 1012,
   "abv": 0.052000000000000005,
   "ibu": 18,
   "Idaho": 1361,
   "name": "Half Full Bright Ale",
   "style": "American Blonde Ale",
   "brewery_id": 248,
   "ounces": 12
 },
 {
   "FIELD1": 1013,
   "abv": 0.046,
   "ibu": 17,
   "Idaho": 1016,
   "name": "Orange Wheat",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 476,
   "ounces": 12
 },
 {
   "FIELD1": 1014,
   "abv": 0.043,
   "ibu": 14,
   "Idaho": 1015,
   "name": "Hangar 24 Helles Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 476,
   "ounces": 12
 },
 {
   "FIELD1": 1015,
   "abv": 0.075,
   "ibu": 70,
   "Idaho": 1677,
   "name": "The Great Return",
   "style": "American IPA",
   "brewery_id": 343,
   "ounces": 16
 },
 {
   "FIELD1": 1016,
   "abv": 0.044000000000000004,
   "ibu": 18,
   "Idaho": 1331,
   "name": "Hardywood Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 343,
   "ounces": 12
 },
 {
   "FIELD1": 1017,
   "abv": 0.055999999999999994,
   "ibu": 55,
   "Idaho": 1270,
   "name": "Capital Trail Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 343,
   "ounces": 12
 },
 {
   "FIELD1": 1018,
   "abv": 0.052000000000000005,
   "ibu": 15,
   "Idaho": 2059,
   "name": "UFO Gingerland",
   "style": "Herbed / Spiced Beer",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1019,
   "abv": 0.062,
   "ibu": 45,
   "Idaho": 1653,
   "name": "The Long Thaw White IPA",
   "style": "American White IPA",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1020,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1558,
   "name": "Honey Cider",
   "style": "Cider",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1021,
   "abv": 0.05,
   "ibu": 28,
   "Idaho": 1380,
   "name": "Harpoon Summer Beer",
   "style": "Kölsch",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1022,
   "abv": 0.059000000000000004,
   "ibu": 42,
   "Idaho": 1379,
   "name": "Harpoon IPA",
   "style": "American IPA",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1023,
   "abv": 0.059000000000000004,
   "ibu": 20,
   "Idaho": 1340,
   "name": "UFO Pumpkin",
   "style": "Pumpkin Ale",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1024,
   "abv": 0.055,
   "ibu": 30,
   "Idaho": 1313,
   "name": "Harpoon Octoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1025,
   "abv": 0.059000000000000004,
   "ibu": 42,
   "Idaho": 770,
   "name": "Harpoon IPA (2012)",
   "style": "American IPA",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1026,
   "abv": 0.05,
   "ibu": 28,
   "Idaho": 769,
   "name": "Harpoon Summer Beer (2012)",
   "style": "Kölsch",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1027,
   "abv": 0.048,
   "ibu": 10,
   "Idaho": 610,
   "name": "UFO White",
   "style": "American Pale Wheat Ale",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1028,
   "abv": 0.05,
   "ibu": 28,
   "Idaho": 192,
   "name": "Harpoon Summer Beer (2010)",
   "style": "Kölsch",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1029,
   "abv": 0.059000000000000004,
   "ibu": 42,
   "Idaho": 126,
   "name": "Harpoon IPA (2010)",
   "style": "American IPA",
   "brewery_id": 234,
   "ounces": 12
 },
 {
   "FIELD1": 1030,
   "abv": null,
   "ibu": null,
   "Idaho": 506,
   "name": "Great Falls Select Pale Ale",
   "style": "American Blonde Ale",
   "brewery_id": 535,
   "ounces": 12
 },
 {
   "FIELD1": 1031,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 181,
   "name": "Beltian White",
   "style": "Witbier",
   "brewery_id": 535,
   "ounces": 12
 },
 {
   "FIELD1": 1032,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 2183,
   "name": "Kaua'i Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 204,
   "ounces": 12
 },
 {
   "FIELD1": 1033,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 2182,
   "name": "Sunset Amber",
   "style": "American Pale Ale (APA)",
   "brewery_id": 204,
   "ounces": 12
 },
 {
   "FIELD1": 1034,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 2181,
   "name": "Hapa Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 204,
   "ounces": 19.2
 },
 {
   "FIELD1": 1035,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 2180,
   "name": "Hapa Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 204,
   "ounces": 12
 },
 {
   "FIELD1": 1036,
   "abv": 0.083,
   "ibu": null,
   "Idaho": 2179,
   "name": "Southern Cross",
   "style": "Flanders Red Ale",
   "brewery_id": 204,
   "ounces": 19.2
 },
 {
   "FIELD1": 1037,
   "abv": 0.076,
   "ibu": 65,
   "Idaho": 1895,
   "name": "Groupe G",
   "style": "Belgian IPA",
   "brewery_id": 280,
   "ounces": 16
 },
 {
   "FIELD1": 1038,
   "abv": 0.062,
   "ibu": 40,
   "Idaho": 1894,
   "name": "Pt. Bonita Rustic Lager",
   "style": "American Pale Lager",
   "brewery_id": 280,
   "ounces": 16
 },
 {
   "FIELD1": 1039,
   "abv": 0.08800000000000001,
   "ibu": 77,
   "Idaho": 1893,
   "name": "Hill 88 Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 280,
   "ounces": 16
 },
 {
   "FIELD1": 1040,
   "abv": 0.07200000000000001,
   "ibu": 45,
   "Idaho": 990,
   "name": "Loose Cannon",
   "style": "American IPA",
   "brewery_id": 479,
   "ounces": 12
 },
 {
   "FIELD1": 1041,
   "abv": 0.06,
   "ibu": 30,
   "Idaho": 989,
   "name": "AARGHtoberfest!",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 479,
   "ounces": 12
 },
 {
   "FIELD1": 1042,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 988,
   "name": "Davy Jones Lager",
   "style": "Cream Ale",
   "brewery_id": 479,
   "ounces": 12
 },
 {
   "FIELD1": 1043,
   "abv": 0.063,
   "ibu": 30,
   "Idaho": 1351,
   "name": "Grazias",
   "style": "Cream Ale",
   "brewery_id": 423,
   "ounces": 16
 },
 {
   "FIELD1": 1044,
   "abv": 0.08,
   "ibu": 86,
   "Idaho": 1346,
   "name": "Habitus IPA",
   "style": "American IPA",
   "brewery_id": 423,
   "ounces": 16
 },
 {
   "FIELD1": 1045,
   "abv": 0.099,
   "ibu": 85,
   "Idaho": 904,
   "name": "Ex Umbris Rye Imperial Stout",
   "style": "American Double / Imperial Stout",
   "brewery_id": 423,
   "ounces": 16
 },
 {
   "FIELD1": 1046,
   "abv": 0.063,
   "ibu": 21,
   "Idaho": 2295,
   "name": "The Golden One",
   "style": "American Pilsner",
   "brewery_id": 168,
   "ounces": 12
 },
 {
   "FIELD1": 1047,
   "abv": 0.07,
   "ibu": 68,
   "Idaho": 2294,
   "name": "The Power of Zeus",
   "style": "American Pale Ale (APA)",
   "brewery_id": 168,
   "ounces": 12
 },
 {
   "FIELD1": 1048,
   "abv": 0.044000000000000004,
   "ibu": 22,
   "Idaho": 824,
   "name": "Tonganoxie Honey Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 500,
   "ounces": 12
 },
 {
   "FIELD1": 1049,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 616,
   "name": "Oregon Trail Unfiltered Raspberry Wheat",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 500,
   "ounces": 12
 },
 {
   "FIELD1": 1050,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 96,
   "name": "Annie's Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 500,
   "ounces": 12
 },
 {
   "FIELD1": 1051,
   "abv": 0.045,
   "ibu": 32,
   "Idaho": 1615,
   "name": "The 12th Can™",
   "style": "American Pale Ale (APA)",
   "brewery_id": 362,
   "ounces": 16
 },
 {
   "FIELD1": 1052,
   "abv": 0.055,
   "ibu": 34,
   "Idaho": 889,
   "name": "Hilliard's Pils",
   "style": "Czech Pilsener",
   "brewery_id": 362,
   "ounces": 16
 },
 {
   "FIELD1": 1053,
   "abv": 0.049,
   "ibu": 20,
   "Idaho": 724,
   "name": "Hilliard's Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 362,
   "ounces": 16
 },
 {
   "FIELD1": 1054,
   "abv": 0.055,
   "ibu": 60,
   "Idaho": 497,
   "name": "Hilliard's Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 362,
   "ounces": 16
 },
 {
   "FIELD1": 1055,
   "abv": 0.066,
   "ibu": 30,
   "Idaho": 496,
   "name": "Hilliard's Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 362,
   "ounces": 16
 },
 {
   "FIELD1": 1056,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 1652,
   "name": "White Cap White IPA",
   "style": "American White IPA",
   "brewery_id": 349,
   "ounces": 16
 },
 {
   "FIELD1": 1057,
   "abv": 0.042,
   "ibu": 25,
   "Idaho": 1835,
   "name": "Provision",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 297,
   "ounces": 12
 },
 {
   "FIELD1": 1058,
   "abv": 0.047,
   "ibu": 28,
   "Idaho": 1834,
   "name": "One Nut Brown",
   "style": "American Brown Ale",
   "brewery_id": 297,
   "ounces": 12
 },
 {
   "FIELD1": 1059,
   "abv": 0.057999999999999996,
   "ibu": 45,
   "Idaho": 1833,
   "name": "Hop Farm IPA",
   "style": "American IPA",
   "brewery_id": 297,
   "ounces": 12
 },
 {
   "FIELD1": 1060,
   "abv": 0.049,
   "ibu": 20,
   "Idaho": 2195,
   "name": "Double D Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 198,
   "ounces": 12
 },
 {
   "FIELD1": 1061,
   "abv": 0.078,
   "ibu": 60,
   "Idaho": 1605,
   "name": "Festeroo Winter Ale",
   "style": "American Strong Ale",
   "brewery_id": 198,
   "ounces": 12
 },
 {
   "FIELD1": 1062,
   "abv": 0.063,
   "ibu": 70,
   "Idaho": 1543,
   "name": "Proxima IPA",
   "style": "American IPA",
   "brewery_id": 198,
   "ounces": 12
 },
 {
   "FIELD1": 1063,
   "abv": 0.049,
   "ibu": 20,
   "Idaho": 1390,
   "name": "Double D Blonde (2013)",
   "style": "American Blonde Ale",
   "brewery_id": 198,
   "ounces": 12
 },
 {
   "FIELD1": 1064,
   "abv": 0.048,
   "ibu": 13,
   "Idaho": 1354,
   "name": "541 American Lager",
   "style": "American Pale Lager",
   "brewery_id": 198,
   "ounces": 12
 },
 {
   "FIELD1": 1065,
   "abv": 0.065,
   "ibu": 90,
   "Idaho": 1353,
   "name": "Alphadelic IPA",
   "style": "American IPA",
   "brewery_id": 198,
   "ounces": 12
 },
 {
   "FIELD1": 1066,
   "abv": 0.065,
   "ibu": 90,
   "Idaho": 499,
   "name": "Alphadelic IPA (2011)",
   "style": "American IPA",
   "brewery_id": 198,
   "ounces": 12
 },
 {
   "FIELD1": 1067,
   "abv": 0.049,
   "ibu": 20,
   "Idaho": 498,
   "name": "Double D Blonde (2011)",
   "style": "American Blonde Ale",
   "brewery_id": 198,
   "ounces": 12
 },
 {
   "FIELD1": 1068,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1501,
   "name": "Green House India Pale Ale",
   "style": "American IPA",
   "brewery_id": 395,
   "ounces": 12
 },
 {
   "FIELD1": 1069,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 1004,
   "name": "The One They Call Zoe",
   "style": "American Pale Lager",
   "brewery_id": 395,
   "ounces": 12
 },
 {
   "FIELD1": 1070,
   "abv": 0.051,
   "ibu": 40,
   "Idaho": 502,
   "name": "Alteration",
   "style": "Altbier",
   "brewery_id": 395,
   "ounces": 12
 },
 {
   "FIELD1": 1071,
   "abv": 0.06,
   "ibu": 50,
   "Idaho": 501,
   "name": "Pale Dog",
   "style": "American Pale Ale (APA)",
   "brewery_id": 395,
   "ounces": 12
 },
 {
   "FIELD1": 1072,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2357,
   "name": "Porter Culture",
   "style": "American Porter",
   "brewery_id": 136,
   "ounces": 12
 },
 {
   "FIELD1": 1073,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 2483,
   "name": "Hard Cider",
   "style": "Cider",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1074,
   "abv": 0.027000000000000003,
   "ibu": 21,
   "Idaho": 2482,
   "name": "Totally Radler",
   "style": "Radler",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1075,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2400,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1076,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2399,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1077,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2398,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1078,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2397,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1079,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2396,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1080,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2395,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1081,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2394,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1082,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2393,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1083,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2392,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1084,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2391,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1085,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2390,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1086,
   "abv": 0.039,
   "ibu": 20,
   "Idaho": 2389,
   "name": "Nonstop Hef Hop",
   "style": "American Pale Wheat Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1087,
   "abv": 0.057999999999999996,
   "ibu": 60,
   "Idaho": 2388,
   "name": "Rise Up Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1088,
   "abv": 0.057999999999999996,
   "ibu": 35,
   "Idaho": 2200,
   "name": "Survival Stout",
   "style": "American Stout",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1089,
   "abv": 0.066,
   "ibu": 75,
   "Idaho": 2199,
   "name": "Hopworks IPA",
   "style": "American IPA",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1090,
   "abv": 0.073,
   "ibu": 70,
   "Idaho": 2193,
   "name": "Abominable Winter Ale",
   "style": "American Strong Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1091,
   "abv": 0.06,
   "ibu": 60,
   "Idaho": 1398,
   "name": "Pigwar White India Pale Ale",
   "style": "American White IPA",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1092,
   "abv": 0.057999999999999996,
   "ibu": 60,
   "Idaho": 1085,
   "name": "Rise-Up Red (2014)",
   "style": "American Amber / Red Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1093,
   "abv": 0.073,
   "ibu": 70,
   "Idaho": 916,
   "name": "Abominable Winter Ale (2012)",
   "style": "American Strong Ale",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1094,
   "abv": 0.051,
   "ibu": 32,
   "Idaho": 658,
   "name": "HUB Lager",
   "style": "Czech Pilsener",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1095,
   "abv": 0.066,
   "ibu": 75,
   "Idaho": 653,
   "name": "Hopworks IPA (2012)",
   "style": "American IPA",
   "brewery_id": 80,
   "ounces": 16
 },
 {
   "FIELD1": 1096,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 2385,
   "name": "Watermelon Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 120,
   "ounces": 12
 },
 {
   "FIELD1": 1097,
   "abv": 0.051,
   "ibu": 17,
   "Idaho": 2384,
   "name": "Laka Laka Pineapple",
   "style": "Hefeweizen",
   "brewery_id": 120,
   "ounces": 12
 },
 {
   "FIELD1": 1098,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2383,
   "name": "Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 120,
   "ounces": 16
 },
 {
   "FIELD1": 1099,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1251,
   "name": "Trail Maker Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 445,
   "ounces": 12
 },
 {
   "FIELD1": 1100,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1250,
   "name": "Action Man Lager",
   "style": "Vienna Lager",
   "brewery_id": 445,
   "ounces": 12
 },
 {
   "FIELD1": 1101,
   "abv": 0.068,
   "ibu": 90,
   "Idaho": 1903,
   "name": "Let It Ride IPA",
   "style": "American IPA",
   "brewery_id": 277,
   "ounces": 12
 },
 {
   "FIELD1": 1102,
   "abv": 0.065,
   "ibu": 22,
   "Idaho": 1691,
   "name": "Stir Crazy Winter Ale",
   "style": "Winter Warmer",
   "brewery_id": 277,
   "ounces": 12
 },
 {
   "FIELD1": 1103,
   "abv": 0.05,
   "ibu": 10,
   "Idaho": 1555,
   "name": "Sweet Yamma Jamma Ale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 277,
   "ounces": 12
 },
 {
   "FIELD1": 1104,
   "abv": 0.046,
   "ibu": 27,
   "Idaho": 1115,
   "name": "Shenanigans Summer Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 277,
   "ounces": 12
 },
 {
   "FIELD1": 1105,
   "abv": 0.065,
   "ibu": 80,
   "Idaho": 729,
   "name": "Midnight Ryder",
   "style": "American Black Ale",
   "brewery_id": 277,
   "ounces": 12
 },
 {
   "FIELD1": 1106,
   "abv": 0.054000000000000006,
   "ibu": 45,
   "Idaho": 728,
   "name": "Day Tripper Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 277,
   "ounces": 12
 },
 {
   "FIELD1": 1107,
   "abv": 0.048,
   "ibu": 32,
   "Idaho": 2350,
   "name": "Oklahoma Suks",
   "style": "American Amber / Red Ale",
   "brewery_id": 140,
   "ounces": 12
 },
 {
   "FIELD1": 1108,
   "abv": 0.055,
   "ibu": 42,
   "Idaho": 2301,
   "name": "Power & Light",
   "style": "American Pale Ale (APA)",
   "brewery_id": 140,
   "ounces": 12
 },
 {
   "FIELD1": 1109,
   "abv": 0.059000000000000004,
   "ibu": 27,
   "Idaho": 1904,
   "name": "White Rabbit ",
   "style": "Witbier",
   "brewery_id": 140,
   "ounces": 12
 },
 {
   "FIELD1": 1110,
   "abv": 0.057999999999999996,
   "ibu": 58,
   "Idaho": 2609,
   "name": "Tribute",
   "style": "American Pale Ale (APA)",
   "brewery_id": 23,
   "ounces": 12
 },
 {
   "FIELD1": 1111,
   "abv": 0.07,
   "ibu": 75,
   "Idaho": 2038,
   "name": "Infamous IPA",
   "style": "American IPA",
   "brewery_id": 242,
   "ounces": 12
 },
 {
   "FIELD1": 1112,
   "abv": 0.055,
   "ibu": 20,
   "Idaho": 1774,
   "name": "Hijack",
   "style": "Cream Ale",
   "brewery_id": 242,
   "ounces": 12
 },
 {
   "FIELD1": 1113,
   "abv": 0.045,
   "ibu": 20,
   "Idaho": 559,
   "name": "Jon Boat Coastal Ale",
   "style": "American Blonde Ale",
   "brewery_id": 527,
   "ounces": 12
 },
 {
   "FIELD1": 1114,
   "abv": 0.068,
   "ibu": 55,
   "Idaho": 558,
   "name": "I-10 IPA",
   "style": "American IPA",
   "brewery_id": 527,
   "ounces": 12
 },
 {
   "FIELD1": 1115,
   "abv": 0.053,
   "ibu": 28,
   "Idaho": 553,
   "name": "People's Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 527,
   "ounces": 12
 },
 {
   "FIELD1": 1116,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 2376,
   "name": "Summer Ale",
   "style": "American Blonde Ale",
   "brewery_id": 123,
   "ounces": 12
 },
 {
   "FIELD1": 1117,
   "abv": null,
   "ibu": null,
   "Idaho": 1784,
   "name": "Appreciation Ale",
   "style": "American IPA",
   "brewery_id": 316,
   "ounces": 16
 },
 {
   "FIELD1": 1118,
   "abv": 0.052000000000000005,
   "ibu": 18,
   "Idaho": 2673,
   "name": "House Lager",
   "style": "Keller Bier / Zwickel Bier",
   "brewery_id": 2,
   "ounces": 16
 },
 {
   "FIELD1": 1119,
   "abv": 0.048,
   "ibu": 15,
   "Idaho": 2672,
   "name": "Leisure Time",
   "style": "American Pale Lager",
   "brewery_id": 2,
   "ounces": 12
 },
 {
   "FIELD1": 1120,
   "abv": 0.07200000000000001,
   "ibu": 80,
   "Idaho": 2671,
   "name": "Excess IPL",
   "style": "American India Pale Lager",
   "brewery_id": 2,
   "ounces": 16
 },
 {
   "FIELD1": 1121,
   "abv": 0.067,
   "ibu": 65,
   "Idaho": 2670,
   "name": "Hoponius Union",
   "style": "American India Pale Lager",
   "brewery_id": 2,
   "ounces": 12
 },
 {
   "FIELD1": 1122,
   "abv": 0.049,
   "ibu": 45,
   "Idaho": 2669,
   "name": "Calyptra",
   "style": "American India Pale Lager",
   "brewery_id": 2,
   "ounces": 12
 },
 {
   "FIELD1": 1123,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1405,
   "name": "Helen's Blend",
   "style": "Cider",
   "brewery_id": 416,
   "ounces": 12
 },
 {
   "FIELD1": 1124,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 823,
   "name": "Jack's Hard Cider",
   "style": "Cider",
   "brewery_id": 416,
   "ounces": 12
 },
 {
   "FIELD1": 1125,
   "abv": 0.055,
   "ibu": 37,
   "Idaho": 1793,
   "name": "Thunder Ann",
   "style": "American Pale Ale (APA)",
   "brewery_id": 312,
   "ounces": 12
 },
 {
   "FIELD1": 1126,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2453,
   "name": "Razz Wheat",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 92,
   "ounces": 12
 },
 {
   "FIELD1": 1127,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2363,
   "name": "Hop Ryot",
   "style": "American IPA",
   "brewery_id": 92,
   "ounces": 12
 },
 {
   "FIELD1": 1128,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 689,
   "name": "Mystic Mama IPA",
   "style": "American IPA",
   "brewery_id": 92,
   "ounces": 12
 },
 {
   "FIELD1": 1129,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 688,
   "name": "Firefly Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 92,
   "ounces": 12
 },
 {
   "FIELD1": 1130,
   "abv": 0.067,
   "ibu": null,
   "Idaho": 687,
   "name": "Chomolungma Honey Nut Brown Ale",
   "style": "English Brown Ale",
   "brewery_id": 92,
   "ounces": 12
 },
 {
   "FIELD1": 1131,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 2408,
   "name": "Welcome to Scoville",
   "style": "American IPA",
   "brewery_id": 114,
   "ounces": 12
 },
 {
   "FIELD1": 1132,
   "abv": null,
   "ibu": null,
   "Idaho": 2595,
   "name": "Bastian",
   "style": "American Strong Ale",
   "brewery_id": 32,
   "ounces": 12
 },
 {
   "FIELD1": 1133,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2480,
   "name": "Healani",
   "style": "Hefeweizen",
   "brewery_id": 32,
   "ounces": 12
 },
 {
   "FIELD1": 1134,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1525,
   "name": "Yabba Dhaba Chai Tea Porter",
   "style": "American Porter",
   "brewery_id": 32,
   "ounces": 12
 },
 {
   "FIELD1": 1135,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1524,
   "name": "A Capella Gluten Free Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 32,
   "ounces": 12
 },
 {
   "FIELD1": 1136,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1523,
   "name": "Casper White Stout",
   "style": "American Blonde Ale",
   "brewery_id": 32,
   "ounces": 12
 },
 {
   "FIELD1": 1137,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1254,
   "name": "JP's Ould Sod Irish Red IPA",
   "style": "American IPA",
   "brewery_id": 32,
   "ounces": 12
 },
 {
   "FIELD1": 1138,
   "abv": 0.05,
   "ibu": 15,
   "Idaho": 2060,
   "name": "Weize Guy",
   "style": "Hefeweizen",
   "brewery_id": 233,
   "ounces": 12
 },
 {
   "FIELD1": 1139,
   "abv": 0.05,
   "ibu": 50,
   "Idaho": 469,
   "name": "Fox Tail Gluten Free Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 233,
   "ounces": 12
 },
 {
   "FIELD1": 1140,
   "abv": 0.09300000000000001,
   "ibu": 90,
   "Idaho": 468,
   "name": "Hop Box Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 233,
   "ounces": 12
 },
 {
   "FIELD1": 1141,
   "abv": 0.052000000000000005,
   "ibu": 15,
   "Idaho": 467,
   "name": "Joseph James American Lager",
   "style": "American Adjunct Lager",
   "brewery_id": 233,
   "ounces": 12
 },
 {
   "FIELD1": 1142,
   "abv": 0.071,
   "ibu": null,
   "Idaho": 2163,
   "name": "Sucha Much IPA",
   "style": "American IPA",
   "brewery_id": 208,
   "ounces": 12
 },
 {
   "FIELD1": 1143,
   "abv": 0.075,
   "ibu": 24,
   "Idaho": 2162,
   "name": "Lewbricator Wheat Dopplebock ",
   "style": "Doppelbock",
   "brewery_id": 208,
   "ounces": 12
 },
 {
   "FIELD1": 1144,
   "abv": 0.052000000000000005,
   "ibu": 16,
   "Idaho": 2374,
   "name": "Weisse Versa (2012)",
   "style": "Hefeweizen",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1145,
   "abv": 0.057999999999999996,
   "ibu": 25,
   "Idaho": 1560,
   "name": "Mother in Lager",
   "style": "Munich Dunkel Lager",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1146,
   "abv": 0.055,
   "ibu": 40,
   "Idaho": 1557,
   "name": "Weekend Warrior Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1147,
   "abv": 0.055,
   "ibu": 25,
   "Idaho": 1458,
   "name": "Karbachtoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1148,
   "abv": 0.047,
   "ibu": 20,
   "Idaho": 1235,
   "name": "Love Street Summer Seasonal (2014)",
   "style": "Kölsch",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1149,
   "abv": 0.066,
   "ibu": 20,
   "Idaho": 1068,
   "name": "Barn Burner Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1150,
   "abv": 0.095,
   "ibu": 85,
   "Idaho": 666,
   "name": "Rodeo Clown Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1151,
   "abv": 0.049,
   "ibu": 45,
   "Idaho": 465,
   "name": "Sympathy for the Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1152,
   "abv": 0.052000000000000005,
   "ibu": 15,
   "Idaho": 464,
   "name": "Weisse Versa",
   "style": "Hefeweizen",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1153,
   "abv": 0.066,
   "ibu": 70,
   "Idaho": 463,
   "name": "Hopadillo India Pale Ale",
   "style": "American IPA",
   "brewery_id": 125,
   "ounces": 12
 },
 {
   "FIELD1": 1154,
   "abv": 0.057,
   "ibu": 19,
   "Idaho": 1678,
   "name": "KelSo Nut Brown Lager",
   "style": "Euro Dark Lager",
   "brewery_id": 342,
   "ounces": 12
 },
 {
   "FIELD1": 1155,
   "abv": 0.06,
   "ibu": 64,
   "Idaho": 1572,
   "name": "KelSo India Pale Ale",
   "style": "American IPA",
   "brewery_id": 342,
   "ounces": 12
 },
 {
   "FIELD1": 1156,
   "abv": 0.055,
   "ibu": 23,
   "Idaho": 1348,
   "name": "KelSo Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 342,
   "ounces": 12
 },
 {
   "FIELD1": 1157,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 1193,
   "name": "Skilak Scottish Ale",
   "style": "Scottish Ale",
   "brewery_id": 458,
   "ounces": 12
 },
 {
   "FIELD1": 1158,
   "abv": 0.05,
   "ibu": 15,
   "Idaho": 1187,
   "name": "Peninsula Brewers Reserve (PBR)",
   "style": "American Blonde Ale",
   "brewery_id": 458,
   "ounces": 12
 },
 {
   "FIELD1": 1159,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 349,
   "name": "Sunken Island IPA",
   "style": "American IPA",
   "brewery_id": 458,
   "ounces": 12
 },
 {
   "FIELD1": 1160,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 348,
   "name": "Skilak Scottish Ale (2011)",
   "style": "Scottish Ale",
   "brewery_id": 458,
   "ounces": 12
 },
 {
   "FIELD1": 1161,
   "abv": 0.065,
   "ibu": 11,
   "Idaho": 760,
   "name": "Cold Smoke Scotch Ale (2007)",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 510,
   "ounces": 16
 },
 {
   "FIELD1": 1162,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 759,
   "name": "Double Haul IPA (2009)",
   "style": "American IPA",
   "brewery_id": 510,
   "ounces": 16
 },
 {
   "FIELD1": 1163,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 758,
   "name": "Double Haul IPA (2006)",
   "style": "American IPA",
   "brewery_id": 510,
   "ounces": 16
 },
 {
   "FIELD1": 1164,
   "abv": 0.055,
   "ibu": 50,
   "Idaho": 87,
   "name": "Eddy Out Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 510,
   "ounces": 16
 },
 {
   "FIELD1": 1165,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 86,
   "name": "Double Haul IPA",
   "style": "American IPA",
   "brewery_id": 510,
   "ounces": 16
 },
 {
   "FIELD1": 1166,
   "abv": 0.065,
   "ibu": 11,
   "Idaho": 85,
   "name": "Cold Smoke Scotch Ale",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 510,
   "ounces": 16
 },
 {
   "FIELD1": 1167,
   "abv": null,
   "ibu": null,
   "Idaho": 2472,
   "name": "U. P. Witbier",
   "style": "Witbier",
   "brewery_id": 84,
   "ounces": 12
 },
 {
   "FIELD1": 1168,
   "abv": null,
   "ibu": null,
   "Idaho": 779,
   "name": "November Gale Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 84,
   "ounces": 12
 },
 {
   "FIELD1": 1169,
   "abv": null,
   "ibu": null,
   "Idaho": 364,
   "name": "Olde Ore Dock Scottish Ale",
   "style": "Scottish Ale",
   "brewery_id": 84,
   "ounces": 12
 },
 {
   "FIELD1": 1170,
   "abv": null,
   "ibu": null,
   "Idaho": 60,
   "name": "Widow Maker Black Ale",
   "style": "American Brown Ale",
   "brewery_id": 84,
   "ounces": 12
 },
 {
   "FIELD1": 1171,
   "abv": null,
   "ibu": null,
   "Idaho": 59,
   "name": "Lift Bridge Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 84,
   "ounces": 12
 },
 {
   "FIELD1": 1172,
   "abv": null,
   "ibu": null,
   "Idaho": 58,
   "name": "Pick Axe Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 84,
   "ounces": 12
 },
 {
   "FIELD1": 1173,
   "abv": null,
   "ibu": null,
   "Idaho": 57,
   "name": "Red Jacket Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 84,
   "ounces": 12
 },
 {
   "FIELD1": 1174,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 2436,
   "name": "Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 102,
   "ounces": 12
 },
 {
   "FIELD1": 1175,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1706,
   "name": "King Street Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 102,
   "ounces": 12
 },
 {
   "FIELD1": 1176,
   "abv": 0.06,
   "ibu": 70,
   "Idaho": 1667,
   "name": "King Street IPA",
   "style": "American IPA",
   "brewery_id": 102,
   "ounces": 12
 },
 {
   "FIELD1": 1177,
   "abv": 0.057,
   "ibu": 10,
   "Idaho": 1666,
   "name": "King Street Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 102,
   "ounces": 12
 },
 {
   "FIELD1": 1178,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 1665,
   "name": "King Street Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 102,
   "ounces": 12
 },
 {
   "FIELD1": 1179,
   "abv": 0.063,
   "ibu": 65,
   "Idaho": 2460,
   "name": "India Pale Ale",
   "style": "American IPA",
   "brewery_id": 87,
   "ounces": 16
 },
 {
   "FIELD1": 1180,
   "abv": 0.048,
   "ibu": 11,
   "Idaho": 2459,
   "name": "Blackberry Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 87,
   "ounces": 16
 },
 {
   "FIELD1": 1181,
   "abv": 0.046,
   "ibu": 18,
   "Idaho": 1274,
   "name": "Longboard Island Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 439,
   "ounces": 24
 },
 {
   "FIELD1": 1182,
   "abv": 0.046,
   "ibu": 18,
   "Idaho": 1220,
   "name": "Longboard Island Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 439,
   "ounces": 16
 },
 {
   "FIELD1": 1183,
   "abv": 0.046,
   "ibu": 18,
   "Idaho": 1070,
   "name": "Longboard Island Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 439,
   "ounces": 12
 },
 {
   "FIELD1": 1184,
   "abv": 0.046,
   "ibu": 18,
   "Idaho": 590,
   "name": "Longboard Island Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 439,
   "ounces": 12
 },
 {
   "FIELD1": 1185,
   "abv": 0.04,
   "ibu": 9,
   "Idaho": 781,
   "name": "Choc Beer (2003)",
   "style": "American Dark Wheat Ale",
   "brewery_id": 505,
   "ounces": 12
 },
 {
   "FIELD1": 1186,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1637,
   "name": "Bellingham Beer Week 2013 Collaboration",
   "style": "Belgian Strong Dark Ale",
   "brewery_id": 354,
   "ounces": 16
 },
 {
   "FIELD1": 1187,
   "abv": 0.054000000000000006,
   "ibu": 15,
   "Idaho": 1741,
   "name": "A Slice of Hefen",
   "style": "Hefeweizen",
   "brewery_id": 332,
   "ounces": 16
 },
 {
   "FIELD1": 1188,
   "abv": 0.07200000000000001,
   "ibu": 100,
   "Idaho": 664,
   "name": "Elevated IPA",
   "style": "American IPA",
   "brewery_id": 332,
   "ounces": 16
 },
 {
   "FIELD1": 1189,
   "abv": 0.066,
   "ibu": 30,
   "Idaho": 392,
   "name": "Rumspringa Golden Bock",
   "style": "Maibock / Helles Bock",
   "brewery_id": 545,
   "ounces": 12
 },
 {
   "FIELD1": 1190,
   "abv": 0.048,
   "ibu": 28,
   "Idaho": 195,
   "name": "Lancaster German Style Kölsch",
   "style": "Kölsch",
   "brewery_id": 545,
   "ounces": 12
 },
 {
   "FIELD1": 1191,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2547,
   "name": "Beach Cruiser",
   "style": "Hefeweizen",
   "brewery_id": 59,
   "ounces": 12
 },
 {
   "FIELD1": 1192,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 2493,
   "name": "I.P. Eh!",
   "style": "American IPA",
   "brewery_id": 59,
   "ounces": 12
 },
 {
   "FIELD1": 1193,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2492,
   "name": "Schoolhouse Honey",
   "style": "American Amber / Red Ale",
   "brewery_id": 59,
   "ounces": 12
 },
 {
   "FIELD1": 1194,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2491,
   "name": "10 Degrees of Separation",
   "style": "English Brown Ale",
   "brewery_id": 59,
   "ounces": 12
 },
 {
   "FIELD1": 1195,
   "abv": 0.05,
   "ibu": 12,
   "Idaho": 2108,
   "name": "Laughing Dog Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 218,
   "ounces": 12
 },
 {
   "FIELD1": 1196,
   "abv": 0.048,
   "ibu": 9,
   "Idaho": 1397,
   "name": "Two-One Niner",
   "style": "American Pilsner",
   "brewery_id": 218,
   "ounces": 12
 },
 {
   "FIELD1": 1197,
   "abv": 0.064,
   "ibu": 66,
   "Idaho": 1396,
   "name": "Laughing Dog IPA",
   "style": "American IPA",
   "brewery_id": 218,
   "ounces": 12
 },
 {
   "FIELD1": 1198,
   "abv": 0.064,
   "ibu": 95,
   "Idaho": 1675,
   "name": "Madra Allta",
   "style": "American IPA",
   "brewery_id": 345,
   "ounces": 12
 },
 {
   "FIELD1": 1199,
   "abv": 0.055999999999999994,
   "ibu": 70,
   "Idaho": 1249,
   "name": "Duluchan India Pale Ale",
   "style": "American IPA",
   "brewery_id": 345,
   "ounces": 12
 },
 {
   "FIELD1": 1200,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1445,
   "name": "Lazy Monk Bohemian Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 406,
   "ounces": 16
 },
 {
   "FIELD1": 1201,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 475,
   "name": "Yellowstone Golden Ale",
   "style": "Kölsch",
   "brewery_id": 537,
   "ounces": 12
 },
 {
   "FIELD1": 1202,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 474,
   "name": "Tumbleweed IPA",
   "style": "American IPA",
   "brewery_id": 537,
   "ounces": 12
 },
 {
   "FIELD1": 1203,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 473,
   "name": "Lewis & Clark Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 537,
   "ounces": 12
 },
 {
   "FIELD1": 1204,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 472,
   "name": "Miner's Gold Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 537,
   "ounces": 12
 },
 {
   "FIELD1": 1205,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 471,
   "name": "Back Country Scottish Ale",
   "style": "Scottish Ale",
   "brewery_id": 537,
   "ounces": 12
 },
 {
   "FIELD1": 1206,
   "abv": 0.052000000000000005,
   "ibu": 30,
   "Idaho": 2036,
   "name": "Getaway",
   "style": "German Pilsener",
   "brewery_id": 244,
   "ounces": 16
 },
 {
   "FIELD1": 1207,
   "abv": 0.06,
   "ibu": 30,
   "Idaho": 1168,
   "name": "Farm Girl Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 244,
   "ounces": 16
 },
 {
   "FIELD1": 1208,
   "abv": 0.057999999999999996,
   "ibu": 40,
   "Idaho": 1832,
   "name": "Adam's Stout",
   "style": "American Stout",
   "brewery_id": 298,
   "ounces": 12
 },
 {
   "FIELD1": 1209,
   "abv": 0.057,
   "ibu": 42,
   "Idaho": 1688,
   "name": "American Hero",
   "style": "American Amber / Red Ale",
   "brewery_id": 298,
   "ounces": 12
 },
 {
   "FIELD1": 1210,
   "abv": 0.052000000000000005,
   "ibu": 20,
   "Idaho": 1687,
   "name": "Schweet Ale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 298,
   "ounces": 12
 },
 {
   "FIELD1": 1211,
   "abv": 0.065,
   "ibu": 75,
   "Idaho": 1686,
   "name": "Irregardless IPA",
   "style": "American IPA",
   "brewery_id": 298,
   "ounces": 12
 },
 {
   "FIELD1": 1212,
   "abv": 0.057,
   "ibu": 40,
   "Idaho": 2434,
   "name": "Peach Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 104,
   "ounces": 12
 },
 {
   "FIELD1": 1213,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2332,
   "name": "Deadeye Jack",
   "style": "American Porter",
   "brewery_id": 149,
   "ounces": 12
 },
 {
   "FIELD1": 1214,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 2330,
   "name": "Pistols at Dawn",
   "style": "American Stout",
   "brewery_id": 149,
   "ounces": 16
 },
 {
   "FIELD1": 1215,
   "abv": 0.057,
   "ibu": 47,
   "Idaho": 2329,
   "name": "Peacemaker Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 149,
   "ounces": 12
 },
 {
   "FIELD1": 1216,
   "abv": 0.057999999999999996,
   "ibu": 11,
   "Idaho": 2327,
   "name": "Shotgun Betty",
   "style": "Hefeweizen",
   "brewery_id": 149,
   "ounces": 12
 },
 {
   "FIELD1": 1217,
   "abv": 0.061,
   "ibu": 30,
   "Idaho": 2326,
   "name": "Sweet Josie",
   "style": "American Brown Ale",
   "brewery_id": 149,
   "ounces": 12
 },
 {
   "FIELD1": 1218,
   "abv": 0.059000000000000004,
   "ibu": 42,
   "Idaho": 1926,
   "name": "Long Trail IPA",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 268,
   "ounces": 12
 },
 {
   "FIELD1": 1219,
   "abv": 0.046,
   "ibu": 30,
   "Idaho": 1924,
   "name": "Long Trail Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 268,
   "ounces": 12
 },
 {
   "FIELD1": 1220,
   "abv": 0.07200000000000001,
   "ibu": 33,
   "Idaho": 1090,
   "name": "Double Bag",
   "style": "Altbier",
   "brewery_id": 268,
   "ounces": 16
 },
 {
   "FIELD1": 1221,
   "abv": 0.04,
   "ibu": 8,
   "Idaho": 574,
   "name": "Blackbeary Wheat",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 268,
   "ounces": 12
 },
 {
   "FIELD1": 1222,
   "abv": 0.046,
   "ibu": 30,
   "Idaho": 573,
   "name": "Long Trail Ale (1)",
   "style": "Altbier",
   "brewery_id": 268,
   "ounces": 12
 },
 {
   "FIELD1": 1223,
   "abv": 0.046,
   "ibu": 8,
   "Idaho": 2584,
   "name": "Gose",
   "style": "Gose",
   "brewery_id": 41,
   "ounces": 16
 },
 {
   "FIELD1": 1224,
   "abv": 0.048,
   "ibu": 20,
   "Idaho": 2583,
   "name": "Vermont Pilsner",
   "style": "German Pilsener",
   "brewery_id": 41,
   "ounces": 16
 },
 {
   "FIELD1": 1225,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2582,
   "name": "Mosaic Single Hop IPA",
   "style": "American IPA",
   "brewery_id": 41,
   "ounces": 16
 },
 {
   "FIELD1": 1226,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2581,
   "name": "Lost Galaxy",
   "style": "American IPA",
   "brewery_id": 41,
   "ounces": 16
 },
 {
   "FIELD1": 1227,
   "abv": 0.062,
   "ibu": 65,
   "Idaho": 1309,
   "name": "Face Plant IPA",
   "style": "American IPA",
   "brewery_id": 430,
   "ounces": 12
 },
 {
   "FIELD1": 1228,
   "abv": 0.055999999999999994,
   "ibu": 55,
   "Idaho": 1308,
   "name": "Rhino Chasers Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 430,
   "ounces": 12
 },
 {
   "FIELD1": 1229,
   "abv": 0.052000000000000005,
   "ibu": 29,
   "Idaho": 1571,
   "name": "Slow Hand Stout",
   "style": "American Stout",
   "brewery_id": 377,
   "ounces": 16
 },
 {
   "FIELD1": 1230,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 1204,
   "name": "Hips Don't Lie",
   "style": "Hefeweizen",
   "brewery_id": 456,
   "ounces": 16
 },
 {
   "FIELD1": 1231,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1122,
   "name": "Ride Again Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 456,
   "ounces": 16
 },
 {
   "FIELD1": 1232,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 700,
   "name": "The Farmer's Daughter",
   "style": "American Blonde Ale",
   "brewery_id": 456,
   "ounces": 16
 },
 {
   "FIELD1": 1233,
   "abv": 0.038,
   "ibu": 18,
   "Idaho": 2033,
   "name": "Pub Ale",
   "style": "English Dark Mild Ale",
   "brewery_id": 245,
   "ounces": 12
 },
 {
   "FIELD1": 1234,
   "abv": 0.051,
   "ibu": 31,
   "Idaho": 2032,
   "name": "Ballistic Blonde",
   "style": "Belgian Pale Ale",
   "brewery_id": 245,
   "ounces": 12
 },
 {
   "FIELD1": 1235,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 2311,
   "name": "Knotty Pine",
   "style": "American Pale Ale (APA)",
   "brewery_id": 158,
   "ounces": 12
 },
 {
   "FIELD1": 1236,
   "abv": 0.053,
   "ibu": 20,
   "Idaho": 1153,
   "name": "Lumberyard Pilsner",
   "style": "American Pilsner",
   "brewery_id": 158,
   "ounces": 12
 },
 {
   "FIELD1": 1237,
   "abv": 0.061,
   "ibu": null,
   "Idaho": 355,
   "name": "Lumberyard IPA",
   "style": "American IPA",
   "brewery_id": 158,
   "ounces": 12
 },
 {
   "FIELD1": 1238,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 125,
   "name": "Lumberyard Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 158,
   "ounces": 12
 },
 {
   "FIELD1": 1239,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 962,
   "name": "Mac's Highlander Pale Ale (2000)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 485,
   "ounces": 12
 },
 {
   "FIELD1": 1240,
   "abv": 0.051,
   "ibu": 32,
   "Idaho": 961,
   "name": "Mac's Scottish Style Amber Ale (2000)",
   "style": "American Amber / Red Ale",
   "brewery_id": 485,
   "ounces": 12
 },
 {
   "FIELD1": 1241,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1475,
   "name": "Macon Progress Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 400,
   "ounces": 12
 },
 {
   "FIELD1": 1242,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1008,
   "name": "Macon History Ale",
   "style": "American Brown Ale",
   "brewery_id": 400,
   "ounces": 12
 },
 {
   "FIELD1": 1243,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 2454,
   "name": "Galaxy High",
   "style": "American Double / Imperial IPA",
   "brewery_id": 91,
   "ounces": 12
 },
 {
   "FIELD1": 1244,
   "abv": 0.043,
   "ibu": 18,
   "Idaho": 2209,
   "name": "Sol Drifter",
   "style": "American Blonde Ale",
   "brewery_id": 91,
   "ounces": 12
 },
 {
   "FIELD1": 1245,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 2133,
   "name": "Thunder Snow",
   "style": "Winter Warmer",
   "brewery_id": 91,
   "ounces": 12
 },
 {
   "FIELD1": 1246,
   "abv": 0.079,
   "ibu": 18,
   "Idaho": 1994,
   "name": "The Great Pumpcan",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 91,
   "ounces": 16
 },
 {
   "FIELD1": 1247,
   "abv": 0.047,
   "ibu": 11,
   "Idaho": 1816,
   "name": "LIFT",
   "style": "Kölsch",
   "brewery_id": 91,
   "ounces": 12
 },
 {
   "FIELD1": 1248,
   "abv": 0.05,
   "ibu": 40,
   "Idaho": 1815,
   "name": "SPRYE",
   "style": "American Pale Ale (APA)",
   "brewery_id": 91,
   "ounces": 12
 },
 {
   "FIELD1": 1249,
   "abv": 0.069,
   "ibu": 70,
   "Idaho": 1126,
   "name": "Psychopathy",
   "style": "American IPA",
   "brewery_id": 91,
   "ounces": 12
 },
 {
   "FIELD1": 1250,
   "abv": 0.07,
   "ibu": 32,
   "Idaho": 1125,
   "name": "Gnarly Brown",
   "style": "American Brown Ale",
   "brewery_id": 91,
   "ounces": 12
 },
 {
   "FIELD1": 1251,
   "abv": 0.06,
   "ibu": 30,
   "Idaho": 1124,
   "name": "Happy Amber",
   "style": "American Amber / Red Ale",
   "brewery_id": 91,
   "ounces": 12
 },
 {
   "FIELD1": 1252,
   "abv": 0.051,
   "ibu": 20,
   "Idaho": 1813,
   "name": "#9",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 303,
   "ounces": 16
 },
 {
   "FIELD1": 1253,
   "abv": 0.055,
   "ibu": 13,
   "Idaho": 1113,
   "name": "Elder Betty",
   "style": "Hefeweizen",
   "brewery_id": 303,
   "ounces": 12
 },
 {
   "FIELD1": 1254,
   "abv": 0.051,
   "ibu": 20,
   "Idaho": 360,
   "name": "#9",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 303,
   "ounces": 12
 },
 {
   "FIELD1": 1255,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 511,
   "name": "High Country Pilsner (Current)",
   "style": "German Pilsener",
   "brewery_id": 534,
   "ounces": 12
 },
 {
   "FIELD1": 1256,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 75,
   "name": "Epic IPA",
   "style": "American IPA",
   "brewery_id": 534,
   "ounces": 12
 },
 {
   "FIELD1": 1257,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 74,
   "name": "Golden Trout Pilsner",
   "style": "German Pilsener",
   "brewery_id": 534,
   "ounces": 12
 },
 {
   "FIELD1": 1258,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 73,
   "name": "Real McCoy Amber Ale (Current)",
   "style": "American Amber / Red Ale",
   "brewery_id": 534,
   "ounces": 12
 },
 {
   "FIELD1": 1259,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 1628,
   "name": "Festivus (1)",
   "style": "Winter Warmer",
   "brewery_id": 356,
   "ounces": 12
 },
 {
   "FIELD1": 1260,
   "abv": 0.067,
   "ibu": null,
   "Idaho": 1626,
   "name": "Manayunk Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 356,
   "ounces": 12
 },
 {
   "FIELD1": 1261,
   "abv": 0.045,
   "ibu": 21,
   "Idaho": 1625,
   "name": "Belgian Style Session Ale",
   "style": "Belgian Pale Ale",
   "brewery_id": 356,
   "ounces": 12
 },
 {
   "FIELD1": 1262,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1624,
   "name": "Manayunk IPA",
   "style": "American IPA",
   "brewery_id": 356,
   "ounces": 12
 },
 {
   "FIELD1": 1263,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1600,
   "name": "Yunkin' Punkin'",
   "style": "Pumpkin Ale",
   "brewery_id": 356,
   "ounces": 12
 },
 {
   "FIELD1": 1264,
   "abv": 0.05,
   "ibu": 18,
   "Idaho": 1484,
   "name": "Summer Paradise",
   "style": "American Pale Wheat Ale",
   "brewery_id": 356,
   "ounces": 12
 },
 {
   "FIELD1": 1265,
   "abv": 0.09,
   "ibu": 30,
   "Idaho": 1356,
   "name": "Monk from the 'Yunk",
   "style": "Tripel",
   "brewery_id": 356,
   "ounces": 12
 },
 {
   "FIELD1": 1266,
   "abv": 0.06,
   "ibu": 14,
   "Idaho": 1355,
   "name": "Schuylkill Punch",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 356,
   "ounces": 12
 },
 {
   "FIELD1": 1267,
   "abv": 0.085,
   "ibu": 85,
   "Idaho": 1334,
   "name": "Dreamin' Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 356,
   "ounces": 12
 },
 {
   "FIELD1": 1268,
   "abv": 0.099,
   "ibu": 93,
   "Idaho": 1674,
   "name": "Chaotic Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 346,
   "ounces": 12
 },
 {
   "FIELD1": 1269,
   "abv": 0.08,
   "ibu": 88,
   "Idaho": 1673,
   "name": "Manzanita IPA",
   "style": "American IPA",
   "brewery_id": 346,
   "ounces": 12
 },
 {
   "FIELD1": 1270,
   "abv": 0.06,
   "ibu": 25,
   "Idaho": 1672,
   "name": "Riverwalk Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 346,
   "ounces": 12
 },
 {
   "FIELD1": 1271,
   "abv": 0.095,
   "ibu": 49,
   "Idaho": 1671,
   "name": "Gillespie Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 346,
   "ounces": 12
 },
 {
   "FIELD1": 1272,
   "abv": 0.066,
   "ibu": 44,
   "Idaho": 1670,
   "name": "Manzanita Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 346,
   "ounces": 12
 },
 {
   "FIELD1": 1273,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1262,
   "name": "Marble Pilsner",
   "style": "German Pilsener",
   "brewery_id": 443,
   "ounces": 12
 },
 {
   "FIELD1": 1274,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 845,
   "name": "Marble India Pale Ale",
   "style": "American IPA",
   "brewery_id": 443,
   "ounces": 12
 },
 {
   "FIELD1": 1275,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 1783,
   "name": "Toughcats IPA",
   "style": "American IPA",
   "brewery_id": 317,
   "ounces": 16
 },
 {
   "FIELD1": 1276,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1717,
   "name": "Tug Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 317,
   "ounces": 16
 },
 {
   "FIELD1": 1277,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 1716,
   "name": "Sexy Chaos",
   "style": "Russian Imperial Stout",
   "brewery_id": 317,
   "ounces": 16
 },
 {
   "FIELD1": 1278,
   "abv": 0.063,
   "ibu": null,
   "Idaho": 1516,
   "name": "Ace Hole American Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 317,
   "ounces": 16
 },
 {
   "FIELD1": 1279,
   "abv": 0.09699999999999999,
   "ibu": null,
   "Idaho": 725,
   "name": "Cant Dog Imperial Pale Ale",
   "style": "American Double / Imperial IPA",
   "brewery_id": 317,
   "ounces": 16
 },
 {
   "FIELD1": 1280,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 2308,
   "name": "River House",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 161,
   "ounces": 16
 },
 {
   "FIELD1": 1281,
   "abv": 0.065,
   "ibu": 47,
   "Idaho": 2268,
   "name": "Pretzel Stout",
   "style": "American Stout",
   "brewery_id": 161,
   "ounces": 16
 },
 {
   "FIELD1": 1282,
   "abv": 0.05,
   "ibu": 35,
   "Idaho": 2197,
   "name": "Rubberneck Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 161,
   "ounces": 16
 },
 {
   "FIELD1": 1283,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 2120,
   "name": "The Imperial Texan",
   "style": "American Double / Imperial IPA",
   "brewery_id": 161,
   "ounces": 16
 },
 {
   "FIELD1": 1284,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1234,
   "name": "The Imperial Texan",
   "style": "American Double / Imperial IPA",
   "brewery_id": 161,
   "ounces": 12
 },
 {
   "FIELD1": 1285,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1233,
   "name": "Day Break 4-Grain Breakfast Beer",
   "style": "Rye Beer",
   "brewery_id": 161,
   "ounces": 16
 },
 {
   "FIELD1": 1286,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1232,
   "name": "River House Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 161,
   "ounces": 12
 },
 {
   "FIELD1": 1287,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1231,
   "name": "There Will Be Stout",
   "style": "American Stout",
   "brewery_id": 161,
   "ounces": 12
 },
 {
   "FIELD1": 1288,
   "abv": 0.065,
   "ibu": 60,
   "Idaho": 1831,
   "name": "Our Legacy IPA",
   "style": "American IPA",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1289,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 1359,
   "name": "Saranac Shandy",
   "style": "Shandy",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1290,
   "abv": 0.065,
   "ibu": 60,
   "Idaho": 1135,
   "name": "Our Legacy IPA",
   "style": "American IPA",
   "brewery_id": 299,
   "ounces": 16
 },
 {
   "FIELD1": 1291,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 960,
   "name": "Saranac Golden Pilsener (2003)",
   "style": "German Pilsener",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1292,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 959,
   "name": "Saranac Adirondack Light (2002)",
   "style": "Light Lager",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1293,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 958,
   "name": "DAX Light (1998)",
   "style": "Light Lager",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1294,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 957,
   "name": "Saranac Traditional Lager (2000)",
   "style": "American Pale Lager",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1295,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 956,
   "name": "Pomegranate Wheat (2008)",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1296,
   "abv": 0.05,
   "ibu": 12,
   "Idaho": 773,
   "name": "Blueberry Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1297,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 686,
   "name": "Saranac White IPA",
   "style": "American IPA",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1298,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 453,
   "name": "Saranac Summer Ale (2011)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1299,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 150,
   "name": "Saranac Pale Ale (12 oz.)",
   "style": "English Pale Ale",
   "brewery_id": 299,
   "ounces": 12
 },
 {
   "FIELD1": 1300,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 133,
   "name": "Saranac Pale Ale (16 oz.)",
   "style": "English Pale Ale",
   "brewery_id": 299,
   "ounces": 16
 },
 {
   "FIELD1": 1301,
   "abv": 0.051,
   "ibu": 20,
   "Idaho": 1578,
   "name": "Lahaina Town Brown",
   "style": "American Brown Ale",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1302,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1429,
   "name": "Pau Hana Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1303,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1271,
   "name": "Lemongrass Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1304,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 713,
   "name": "Aloha B’ak’tun",
   "style": "Belgian Strong Dark Ale",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1305,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 712,
   "name": "Liquid Breadfruit",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1306,
   "abv": 0.06,
   "ibu": 24,
   "Idaho": 690,
   "name": "Sobrehumano Palena'ole",
   "style": "American Amber / Red Ale",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1307,
   "abv": 0.05,
   "ibu": 12,
   "Idaho": 547,
   "name": "La Perouse White",
   "style": "Witbier",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1308,
   "abv": 0.068,
   "ibu": 68,
   "Idaho": 435,
   "name": "Flyin' HI.P.Hay",
   "style": "American IPA",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1309,
   "abv": 0.055,
   "ibu": 15,
   "Idaho": 313,
   "name": "Mana Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1310,
   "abv": 0.045,
   "ibu": 18,
   "Idaho": 33,
   "name": "Bikini Blonde Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1311,
   "abv": 0.057,
   "ibu": 30,
   "Idaho": 32,
   "name": "CoCoNut Porter",
   "style": "American Porter",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1312,
   "abv": 0.062,
   "ibu": 65,
   "Idaho": 31,
   "name": "Big Swell IPA",
   "style": "American IPA",
   "brewery_id": 375,
   "ounces": 12
 },
 {
   "FIELD1": 1313,
   "abv": 0.037000000000000005,
   "ibu": 34,
   "Idaho": 1237,
   "name": "Pit Stop Chocolate Porter",
   "style": "American Porter",
   "brewery_id": 448,
   "ounces": 12
 },
 {
   "FIELD1": 1314,
   "abv": 0.037000000000000005,
   "ibu": 21,
   "Idaho": 1236,
   "name": "Pace Setter Belgian Style Wit",
   "style": "Witbier",
   "brewery_id": 448,
   "ounces": 12
 },
 {
   "FIELD1": 1315,
   "abv": 0.037000000000000005,
   "ibu": 53,
   "Idaho": 1047,
   "name": "Back in the Saddle Rye Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 448,
   "ounces": 12
 },
 {
   "FIELD1": 1316,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 1986,
   "name": "Bushwhacker Cider",
   "style": "Cider",
   "brewery_id": 254,
   "ounces": 16
 },
 {
   "FIELD1": 1317,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 1985,
   "name": "Weim-R-Iner",
   "style": "Cider",
   "brewery_id": 254,
   "ounces": 16
 },
 {
   "FIELD1": 1318,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 1984,
   "name": "Cherry Bomb",
   "style": "Cider",
   "brewery_id": 254,
   "ounces": 16
 },
 {
   "FIELD1": 1319,
   "abv": 0.07200000000000001,
   "ibu": 75,
   "Idaho": 2186,
   "name": "Tsunami IPA",
   "style": "American IPA",
   "brewery_id": 203,
   "ounces": 19.2
 },
 {
   "FIELD1": 1320,
   "abv": 0.07200000000000001,
   "ibu": 75,
   "Idaho": 2185,
   "name": "Tsunami IPA",
   "style": "American IPA",
   "brewery_id": 203,
   "ounces": 12
 },
 {
   "FIELD1": 1321,
   "abv": 0.042,
   "ibu": 22,
   "Idaho": 2184,
   "name": "Humpback Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 203,
   "ounces": 12
 },
 {
   "FIELD1": 1322,
   "abv": 0.052000000000000005,
   "ibu": 27,
   "Idaho": 2178,
   "name": "Hawaiian Crow Porter",
   "style": "American Porter",
   "brewery_id": 203,
   "ounces": 12
 },
 {
   "FIELD1": 1323,
   "abv": 0.052000000000000005,
   "ibu": 23,
   "Idaho": 2177,
   "name": "Volcano Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 203,
   "ounces": 12
 },
 {
   "FIELD1": 1324,
   "abv": 0.054000000000000006,
   "ibu": 42,
   "Idaho": 2176,
   "name": "Mauna Kea Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 203,
   "ounces": 12
 },
 {
   "FIELD1": 1325,
   "abv": 0.053,
   "ibu": 11,
   "Idaho": 1508,
   "name": "Shark Bait",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 393,
   "ounces": 12
 },
 {
   "FIELD1": 1326,
   "abv": 0.053,
   "ibu": 30,
   "Idaho": 1507,
   "name": "Gator Tail Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 393,
   "ounces": 12
 },
 {
   "FIELD1": 1327,
   "abv": 0.071,
   "ibu": 62,
   "Idaho": 1506,
   "name": "Miami Vice IPA",
   "style": "American IPA",
   "brewery_id": 393,
   "ounces": 12
 },
 {
   "FIELD1": 1328,
   "abv": 0.053,
   "ibu": 16,
   "Idaho": 1325,
   "name": "Big Rod Coconut Ale",
   "style": "American Blonde Ale",
   "brewery_id": 393,
   "ounces": 12
 },
 {
   "FIELD1": 1329,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 174,
   "name": "Mickey Finn's Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 552,
   "ounces": 12
 },
 {
   "FIELD1": 1330,
   "abv": 0.063,
   "ibu": 61,
   "Idaho": 2093,
   "name": "Pleasure Town",
   "style": "American IPA",
   "brewery_id": 223,
   "ounces": 12
 },
 {
   "FIELD1": 1331,
   "abv": 0.063,
   "ibu": 61,
   "Idaho": 1814,
   "name": "Pleasure Town IPA",
   "style": "American IPA",
   "brewery_id": 223,
   "ounces": 12
 },
 {
   "FIELD1": 1332,
   "abv": 0.048,
   "ibu": 12,
   "Idaho": 587,
   "name": "Snowshoe White Ale",
   "style": "Witbier",
   "brewery_id": 223,
   "ounces": 12
 },
 {
   "FIELD1": 1333,
   "abv": 0.05,
   "ibu": 24,
   "Idaho": 586,
   "name": "Kodiak Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 223,
   "ounces": 12
 },
 {
   "FIELD1": 1334,
   "abv": 0.057,
   "ibu": 70,
   "Idaho": 434,
   "name": "Sockeye Red IPA",
   "style": "American IPA",
   "brewery_id": 223,
   "ounces": 12
 },
 {
   "FIELD1": 1335,
   "abv": 0.08,
   "ibu": 100,
   "Idaho": 2668,
   "name": "Habitus (2014)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 3,
   "ounces": 16
 },
 {
   "FIELD1": 1336,
   "abv": 0.075,
   "ibu": 85,
   "Idaho": 2667,
   "name": "Solis",
   "style": "American IPA",
   "brewery_id": 3,
   "ounces": 16
 },
 {
   "FIELD1": 1337,
   "abv": 0.06,
   "ibu": 24,
   "Idaho": 2666,
   "name": "Jucundus",
   "style": "Wheat Ale",
   "brewery_id": 3,
   "ounces": 16
 },
 {
   "FIELD1": 1338,
   "abv": 0.08,
   "ibu": 100,
   "Idaho": 2664,
   "name": "Habitus",
   "style": "American Double / Imperial IPA",
   "brewery_id": 3,
   "ounces": 16
 },
 {
   "FIELD1": 1339,
   "abv": 0.063,
   "ibu": 30,
   "Idaho": 2663,
   "name": "Grazias",
   "style": "Cream Ale",
   "brewery_id": 3,
   "ounces": 16
 },
 {
   "FIELD1": 1340,
   "abv": 0.057999999999999996,
   "ibu": 28,
   "Idaho": 2662,
   "name": "Claritas",
   "style": "Kölsch",
   "brewery_id": 3,
   "ounces": 16
 },
 {
   "FIELD1": 1341,
   "abv": 0.083,
   "ibu": null,
   "Idaho": 2535,
   "name": "Vinyl Frontier",
   "style": "American Double / Imperial IPA",
   "brewery_id": 65,
   "ounces": 24
 },
 {
   "FIELD1": 1342,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 2534,
   "name": "Disco Superfly",
   "style": "American IPA",
   "brewery_id": 65,
   "ounces": 24
 },
 {
   "FIELD1": 1343,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 2533,
   "name": "Misty Mountain Hop",
   "style": "American IPA",
   "brewery_id": 65,
   "ounces": 24
 },
 {
   "FIELD1": 1344,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 2532,
   "name": "One-Hit Wonderful",
   "style": "Belgian IPA",
   "brewery_id": 65,
   "ounces": 24
 },
 {
   "FIELD1": 1345,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2531,
   "name": "En Parfaite Harmonie",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 65,
   "ounces": 24
 },
 {
   "FIELD1": 1346,
   "abv": 0.043,
   "ibu": 8,
   "Idaho": 2530,
   "name": "Daft Funk",
   "style": "Berliner Weissbier",
   "brewery_id": 65,
   "ounces": 24
 },
 {
   "FIELD1": 1347,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 2529,
   "name": "Love In An Ellavator",
   "style": "American IPA",
   "brewery_id": 65,
   "ounces": 24
 },
 {
   "FIELD1": 1348,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 2528,
   "name": "Spin Doctor",
   "style": "American Pale Ale (APA)",
   "brewery_id": 65,
   "ounces": 24
 },
 {
   "FIELD1": 1349,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1612,
   "name": "Keeper (Current)",
   "style": "American Pilsner",
   "brewery_id": 363,
   "ounces": 12
 },
 {
   "FIELD1": 1350,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1611,
   "name": "Better Half",
   "style": "American IPA",
   "brewery_id": 363,
   "ounces": 12
 },
 {
   "FIELD1": 1351,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1273,
   "name": "SNO White Ale",
   "style": "Witbier",
   "brewery_id": 440,
   "ounces": 16
 },
 {
   "FIELD1": 1352,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 365,
   "name": "BRIK Irish Red Ale",
   "style": "Irish Red Ale",
   "brewery_id": 440,
   "ounces": 16
 },
 {
   "FIELD1": 1353,
   "abv": null,
   "ibu": null,
   "Idaho": 273,
   "name": "AXL Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 440,
   "ounces": 16
 },
 {
   "FIELD1": 1354,
   "abv": 0.087,
   "ibu": 80,
   "Idaho": 1884,
   "name": "Hop Freak",
   "style": "American Double / Imperial IPA",
   "brewery_id": 284,
   "ounces": 16
 },
 {
   "FIELD1": 1355,
   "abv": 0.051,
   "ibu": 24,
   "Idaho": 1272,
   "name": "Louie's Demise Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 284,
   "ounces": 16
 },
 {
   "FIELD1": 1356,
   "abv": 0.075,
   "ibu": 51,
   "Idaho": 1080,
   "name": "Hop Happy",
   "style": "American IPA",
   "brewery_id": 284,
   "ounces": 16
 },
 {
   "FIELD1": 1357,
   "abv": 0.065,
   "ibu": 20,
   "Idaho": 932,
   "name": "Booyah Farmhouse Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 284,
   "ounces": 16
 },
 {
   "FIELD1": 1358,
   "abv": 0.092,
   "ibu": null,
   "Idaho": 776,
   "name": "O-Gii",
   "style": "Witbier",
   "brewery_id": 284,
   "ounces": 16
 },
 {
   "FIELD1": 1359,
   "abv": 0.048,
   "ibu": 18,
   "Idaho": 172,
   "name": "Flaming Damsel Lager (2010)",
   "style": "Vienna Lager",
   "brewery_id": 284,
   "ounces": 16
 },
 {
   "FIELD1": 1360,
   "abv": 0.051,
   "ibu": 24,
   "Idaho": 171,
   "name": "Louie’s Demise Immort-Ale (2010)",
   "style": "American Amber / Red Ale",
   "brewery_id": 284,
   "ounces": 16
 },
 {
   "FIELD1": 1361,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 2361,
   "name": "Axe Head Malt Liquor",
   "style": "American Malt Liquor",
   "brewery_id": 134,
   "ounces": 24
 },
 {
   "FIELD1": 1362,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 2359,
   "name": "Huber Bock (2014)",
   "style": "Bock",
   "brewery_id": 134,
   "ounces": 16
 },
 {
   "FIELD1": 1363,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 2358,
   "name": "Minhas Light (2012)",
   "style": "Light Lager",
   "brewery_id": 134,
   "ounces": 12
 },
 {
   "FIELD1": 1364,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2282,
   "name": "Huber",
   "style": "American Pale Lager",
   "brewery_id": 134,
   "ounces": 12
 },
 {
   "FIELD1": 1365,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2281,
   "name": "Clear Creek Ice",
   "style": "American Pale Lager",
   "brewery_id": 134,
   "ounces": 16
 },
 {
   "FIELD1": 1366,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2280,
   "name": "Clear Creek Ice",
   "style": "American Pale Lager",
   "brewery_id": 134,
   "ounces": 12
 },
 {
   "FIELD1": 1367,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2279,
   "name": "Mountain Crest",
   "style": "American Pale Lager",
   "brewery_id": 134,
   "ounces": 16
 },
 {
   "FIELD1": 1368,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2278,
   "name": "Mountain Crest",
   "style": "American Pale Lager",
   "brewery_id": 134,
   "ounces": 12
 },
 {
   "FIELD1": 1369,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2277,
   "name": "Mountain Creek (2013)",
   "style": "American Pale Lager",
   "brewery_id": 134,
   "ounces": 12
 },
 {
   "FIELD1": 1370,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2276,
   "name": "Boxer",
   "style": "American Adjunct Lager",
   "brewery_id": 134,
   "ounces": 24
 },
 {
   "FIELD1": 1371,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 2275,
   "name": "Boxer Light",
   "style": "Light Lager",
   "brewery_id": 134,
   "ounces": 12
 },
 {
   "FIELD1": 1372,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2274,
   "name": "Boxer Ice",
   "style": "American Adjunct Lager",
   "brewery_id": 134,
   "ounces": 12
 },
 {
   "FIELD1": 1373,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2273,
   "name": "Boxer",
   "style": "American Adjunct Lager",
   "brewery_id": 134,
   "ounces": 12
 },
 {
   "FIELD1": 1374,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2442,
   "name": "Cortez Gold",
   "style": "Belgian Pale Ale",
   "brewery_id": 98,
   "ounces": 32
 },
 {
   "FIELD1": 1375,
   "abv": 0.068,
   "ibu": 66,
   "Idaho": 2441,
   "name": "Mission IPA",
   "style": "American IPA",
   "brewery_id": 98,
   "ounces": 32
 },
 {
   "FIELD1": 1376,
   "abv": 0.048,
   "ibu": 44,
   "Idaho": 1460,
   "name": "El Conquistador Extra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 98,
   "ounces": 32
 },
 {
   "FIELD1": 1377,
   "abv": 0.092,
   "ibu": 75,
   "Idaho": 1459,
   "name": "Shipwrecked Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 98,
   "ounces": 32
 },
 {
   "FIELD1": 1378,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 1476,
   "name": "Squeaky Bike Nut Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 399,
   "ounces": 16
 },
 {
   "FIELD1": 1379,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 902,
   "name": "Dead Horse Amber",
   "style": "American Pale Wheat Ale",
   "brewery_id": 399,
   "ounces": 16
 },
 {
   "FIELD1": 1380,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 645,
   "name": "Rocket Bike American Lager",
   "style": "California Common / Steam Beer",
   "brewery_id": 399,
   "ounces": 16
 },
 {
   "FIELD1": 1381,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 644,
   "name": "Johnny's American IPA",
   "style": "American IPA",
   "brewery_id": 399,
   "ounces": 16
 },
 {
   "FIELD1": 1382,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 337,
   "name": "Boneshaker Brown Ale",
   "style": "English Brown Ale",
   "brewery_id": 547,
   "ounces": 24
 },
 {
   "FIELD1": 1383,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 336,
   "name": "Iron Mike Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 547,
   "ounces": 24
 },
 {
   "FIELD1": 1384,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 2236,
   "name": "Monkadelic",
   "style": "American Pale Ale (APA)",
   "brewery_id": 189,
   "ounces": 12
 },
 {
   "FIELD1": 1385,
   "abv": 0.075,
   "ibu": 85,
   "Idaho": 2159,
   "name": "City of the Sun",
   "style": "American IPA",
   "brewery_id": 209,
   "ounces": 16
 },
 {
   "FIELD1": 1386,
   "abv": 0.068,
   "ibu": 75,
   "Idaho": 2157,
   "name": "Booming Rollers",
   "style": "American IPA",
   "brewery_id": 209,
   "ounces": 16
 },
 {
   "FIELD1": 1387,
   "abv": 0.052000000000000005,
   "ibu": 50,
   "Idaho": 2156,
   "name": "Oneida",
   "style": "American Pale Ale (APA)",
   "brewery_id": 209,
   "ounces": 16
 },
 {
   "FIELD1": 1388,
   "abv": 0.067,
   "ibu": 75,
   "Idaho": 2154,
   "name": "Aurora ",
   "style": "American Amber / Red Ale",
   "brewery_id": 209,
   "ounces": 16
 },
 {
   "FIELD1": 1389,
   "abv": 0.055,
   "ibu": 30,
   "Idaho": 1495,
   "name": "Lomaland",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 209,
   "ounces": 16
 },
 {
   "FIELD1": 1390,
   "abv": 0.047,
   "ibu": 46,
   "Idaho": 1494,
   "name": "Fortunate Islands",
   "style": "American Pale Wheat Ale",
   "brewery_id": 209,
   "ounces": 16
 },
 {
   "FIELD1": 1391,
   "abv": 0.057999999999999996,
   "ibu": 40,
   "Idaho": 1493,
   "name": "Black House",
   "style": "American Stout",
   "brewery_id": 209,
   "ounces": 16
 },
 {
   "FIELD1": 1392,
   "abv": 0.065,
   "ibu": 115,
   "Idaho": 1492,
   "name": "Blazing World",
   "style": "American Amber / Red Ale",
   "brewery_id": 209,
   "ounces": 16
 },
 {
   "FIELD1": 1393,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 327,
   "name": "Wapiti Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 549,
   "ounces": 12
 },
 {
   "FIELD1": 1394,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 719,
   "name": "Sweet Georgia Brown",
   "style": "American Brown Ale",
   "brewery_id": 514,
   "ounces": 16
 },
 {
   "FIELD1": 1395,
   "abv": 0.087,
   "ibu": null,
   "Idaho": 718,
   "name": "Rich Man's IIPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 514,
   "ounces": 16
 },
 {
   "FIELD1": 1396,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 717,
   "name": "Monkey Paw Oatmeal Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 514,
   "ounces": 16
 },
 {
   "FIELD1": 1397,
   "abv": 0.055999999999999994,
   "ibu": 28,
   "Idaho": 1907,
   "name": "Montauk Summer Ale",
   "style": "American Blonde Ale",
   "brewery_id": 276,
   "ounces": 12
 },
 {
   "FIELD1": 1398,
   "abv": 0.06,
   "ibu": 49,
   "Idaho": 1906,
   "name": "Driftwood Ale",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 276,
   "ounces": 12
 },
 {
   "FIELD1": 1399,
   "abv": 0.055999999999999994,
   "ibu": 18,
   "Idaho": 1756,
   "name": "When Helles Freezes Over",
   "style": "Munich Helles Lager",
   "brewery_id": 326,
   "ounces": 12
 },
 {
   "FIELD1": 1400,
   "abv": 0.049,
   "ibu": 24,
   "Idaho": 1617,
   "name": "Morgan Street Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 326,
   "ounces": 12
 },
 {
   "FIELD1": 1401,
   "abv": 0.047,
   "ibu": 14,
   "Idaho": 1052,
   "name": "Honey Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 326,
   "ounces": 12
 },
 {
   "FIELD1": 1402,
   "abv": 0.046,
   "ibu": 24,
   "Idaho": 1051,
   "name": "Black Bear Dark Lager",
   "style": "Schwarzbier",
   "brewery_id": 326,
   "ounces": 12
 },
 {
   "FIELD1": 1403,
   "abv": 0.05,
   "ibu": 35,
   "Idaho": 1046,
   "name": "Golden Pilsner",
   "style": "German Pilsener",
   "brewery_id": 326,
   "ounces": 12
 },
 {
   "FIELD1": 1404,
   "abv": 0.052000000000000005,
   "ibu": 21,
   "Idaho": 2413,
   "name": "Cali Creamin'",
   "style": "Cream Ale",
   "brewery_id": 111,
   "ounces": 12
 },
 {
   "FIELD1": 1405,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 419,
   "name": "Second Wind Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 540,
   "ounces": 12
 },
 {
   "FIELD1": 1406,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 408,
   "name": "Sunny Haze",
   "style": "Hefeweizen",
   "brewery_id": 540,
   "ounces": 12
 },
 {
   "FIELD1": 1407,
   "abv": 0.052000000000000005,
   "ibu": 21,
   "Idaho": 2237,
   "name": "Towhead",
   "style": "American Blonde Ale",
   "brewery_id": 188,
   "ounces": 12
 },
 {
   "FIELD1": 1408,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 2208,
   "name": "Lil' Helper",
   "style": "American IPA",
   "brewery_id": 188,
   "ounces": 12
 },
 {
   "FIELD1": 1409,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 1952,
   "name": "Train Wreck",
   "style": "American Amber / Red Ale",
   "brewery_id": 260,
   "ounces": 16
 },
 {
   "FIELD1": 1410,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 768,
   "name": "Full Moon Belgian White Ale",
   "style": "Witbier",
   "brewery_id": 507,
   "ounces": 12
 },
 {
   "FIELD1": 1411,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 625,
   "name": "Desert Magic IPA",
   "style": "American IPA",
   "brewery_id": 507,
   "ounces": 12
 },
 {
   "FIELD1": 1412,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 326,
   "name": "Up River Light",
   "style": "Light Lager",
   "brewery_id": 507,
   "ounces": 12
 },
 {
   "FIELD1": 1413,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 132,
   "name": "Full Moon Belgian White Ale (2007)",
   "style": "Witbier",
   "brewery_id": 507,
   "ounces": 12
 },
 {
   "FIELD1": 1414,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 131,
   "name": "Dry Heat Hefeweizen (2006)",
   "style": "Hefeweizen",
   "brewery_id": 507,
   "ounces": 12
 },
 {
   "FIELD1": 1415,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1598,
   "name": "Mustang Sixty-Six",
   "style": "American Amber / Red Lager",
   "brewery_id": 366,
   "ounces": 12
 },
 {
   "FIELD1": 1416,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 862,
   "name": "Mustang '33",
   "style": "American Pale Lager",
   "brewery_id": 366,
   "ounces": 12
 },
 {
   "FIELD1": 1417,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 699,
   "name": "Session '33 (2011)",
   "style": "American Pale Lager",
   "brewery_id": 366,
   "ounces": 12
 },
 {
   "FIELD1": 1418,
   "abv": 0.053,
   "ibu": 10,
   "Idaho": 421,
   "name": "Mustang Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 366,
   "ounces": 12
 },
 {
   "FIELD1": 1419,
   "abv": 0.053,
   "ibu": 14,
   "Idaho": 420,
   "name": "Washita Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 366,
   "ounces": 12
 },
 {
   "FIELD1": 1420,
   "abv": 0.037000000000000005,
   "ibu": 10,
   "Idaho": 2345,
   "name": "Gansett Light",
   "style": "Light Lager",
   "brewery_id": 143,
   "ounces": 16
 },
 {
   "FIELD1": 1421,
   "abv": 0.052000000000000005,
   "ibu": 30,
   "Idaho": 2224,
   "name": "Bohemian Pils",
   "style": "American Pilsner",
   "brewery_id": 143,
   "ounces": 16
 },
 {
   "FIELD1": 1422,
   "abv": 0.053,
   "ibu": 30,
   "Idaho": 1775,
   "name": "Autocrat Coffee Milk Stout",
   "style": "Milk / Sweet Stout",
   "brewery_id": 143,
   "ounces": 16
 },
 {
   "FIELD1": 1423,
   "abv": 0.086,
   "ibu": 35,
   "Idaho": 1291,
   "name": "Narragansett Bohemian Pilsner",
   "style": "German Pilsener",
   "brewery_id": 143,
   "ounces": 16
 },
 {
   "FIELD1": 1424,
   "abv": 0.042,
   "ibu": 24,
   "Idaho": 1093,
   "name": "Narragansett Summer Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 143,
   "ounces": 12
 },
 {
   "FIELD1": 1425,
   "abv": 0.05,
   "ibu": 22,
   "Idaho": 580,
   "name": "Narragansett Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 143,
   "ounces": 16
 },
 {
   "FIELD1": 1426,
   "abv": 0.042,
   "ibu": 24,
   "Idaho": 403,
   "name": "Narragansett Summer Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 143,
   "ounces": 16
 },
 {
   "FIELD1": 1427,
   "abv": 0.07,
   "ibu": 22,
   "Idaho": 316,
   "name": "Narragansett Porter",
   "style": "American Porter",
   "brewery_id": 143,
   "ounces": 16
 },
 {
   "FIELD1": 1428,
   "abv": 0.065,
   "ibu": 32,
   "Idaho": 315,
   "name": "Narragansett Bock",
   "style": "Bock",
   "brewery_id": 143,
   "ounces": 16
 },
 {
   "FIELD1": 1429,
   "abv": 0.055,
   "ibu": 15,
   "Idaho": 314,
   "name": "Narragansett Fest Lager",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 143,
   "ounces": 16
 },
 {
   "FIELD1": 1430,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 1537,
   "name": "Undun Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 387,
   "ounces": 16
 },
 {
   "FIELD1": 1431,
   "abv": 0.07400000000000001,
   "ibu": null,
   "Idaho": 1536,
   "name": "CuDa Cascadian Dark Ale",
   "style": "American Black Ale",
   "brewery_id": 387,
   "ounces": 16
 },
 {
   "FIELD1": 1432,
   "abv": 0.085,
   "ibu": 86,
   "Idaho": 1265,
   "name": "Old Grogham Imperial India Pale Ale",
   "style": "American Double / Imperial IPA",
   "brewery_id": 387,
   "ounces": 16
 },
 {
   "FIELD1": 1433,
   "abv": 0.085,
   "ibu": 86,
   "Idaho": 747,
   "name": "Old Grogham Imperial India Pale Ale (2012)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 387,
   "ounces": 16
 },
 {
   "FIELD1": 1434,
   "abv": 0.07400000000000001,
   "ibu": null,
   "Idaho": 746,
   "name": "CuDa Cascadian Dark Ale (2012)",
   "style": "American Black Ale",
   "brewery_id": 387,
   "ounces": 16
 },
 {
   "FIELD1": 1435,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 654,
   "name": "Undun Blonde Ale (2012)",
   "style": "American Blonde Ale",
   "brewery_id": 387,
   "ounces": 16
 },
 {
   "FIELD1": 1436,
   "abv": 0.061,
   "ibu": 11,
   "Idaho": 1705,
   "name": "Wick For Brains",
   "style": "Pumpkin Ale",
   "brewery_id": 337,
   "ounces": 12
 },
 {
   "FIELD1": 1437,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 1148,
   "name": "Nebraska India Pale Ale",
   "style": "American IPA",
   "brewery_id": 337,
   "ounces": 12
 },
 {
   "FIELD1": 1438,
   "abv": 0.048,
   "ibu": 10,
   "Idaho": 1147,
   "name": "EOS Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 337,
   "ounces": 12
 },
 {
   "FIELD1": 1439,
   "abv": 0.048,
   "ibu": 15,
   "Idaho": 1146,
   "name": "Brunette Nut Brown Ale",
   "style": "English Brown Ale",
   "brewery_id": 337,
   "ounces": 12
 },
 {
   "FIELD1": 1440,
   "abv": 0.057,
   "ibu": 29,
   "Idaho": 1145,
   "name": "Cardinal Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 337,
   "ounces": 12
 },
 {
   "FIELD1": 1441,
   "abv": 0.066,
   "ibu": null,
   "Idaho": 1758,
   "name": "County Line IPA",
   "style": "American IPA",
   "brewery_id": 325,
   "ounces": 12
 },
 {
   "FIELD1": 1442,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1757,
   "name": "Trauger Pilsner",
   "style": "German Pilsener",
   "brewery_id": 325,
   "ounces": 12
 },
 {
   "FIELD1": 1443,
   "abv": 0.045,
   "ibu": 40,
   "Idaho": 2475,
   "name": "Slow Ride",
   "style": "American IPA",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1444,
   "abv": 0.065,
   "ibu": 70,
   "Idaho": 2230,
   "name": "Ranger IPA",
   "style": "American IPA",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1445,
   "abv": 0.05,
   "ibu": 29,
   "Idaho": 1987,
   "name": "Shift",
   "style": "American Pale Lager",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1446,
   "abv": 0.055999999999999994,
   "ibu": 21,
   "Idaho": 1978,
   "name": "1554 Black Lager",
   "style": "Euro Dark Lager",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1447,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1975,
   "name": "Blue Paddle",
   "style": "Czech Pilsener",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1448,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1737,
   "name": "California Route",
   "style": "American Amber / Red Lager",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1449,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1707,
   "name": "Snapshot",
   "style": "American Pale Wheat Ale",
   "brewery_id": 82,
   "ounces": 16
 },
 {
   "FIELD1": 1450,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1690,
   "name": "Sunshine Wheat Beer",
   "style": "American Pale Wheat Ale",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1451,
   "abv": 0.052000000000000005,
   "ibu": 18,
   "Idaho": 1586,
   "name": "Fat Tire Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1452,
   "abv": 0.05,
   "ibu": 29,
   "Idaho": 952,
   "name": "Shift (1)",
   "style": "American Pale Lager",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1453,
   "abv": 0.052000000000000005,
   "ibu": 18,
   "Idaho": 748,
   "name": "Fat Tire Amber Ale (2011)",
   "style": "American Amber / Red Ale",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1454,
   "abv": 0.05,
   "ibu": 29,
   "Idaho": 578,
   "name": "Shift",
   "style": "American Pale Lager",
   "brewery_id": 82,
   "ounces": 16
 },
 {
   "FIELD1": 1455,
   "abv": 0.065,
   "ibu": 70,
   "Idaho": 564,
   "name": "Ranger IPA",
   "style": "American IPA",
   "brewery_id": 82,
   "ounces": 16
 },
 {
   "FIELD1": 1456,
   "abv": 0.052000000000000005,
   "ibu": 18,
   "Idaho": 563,
   "name": "Fat Tire Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 82,
   "ounces": 16
 },
 {
   "FIELD1": 1457,
   "abv": 0.065,
   "ibu": 70,
   "Idaho": 115,
   "name": "Ranger IPA (Current)",
   "style": "American IPA",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1458,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 72,
   "name": "Sunshine Wheat Beer (2009)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1459,
   "abv": 0.052000000000000005,
   "ibu": 18,
   "Idaho": 71,
   "name": "Fat Tire Amber Ale (2008)",
   "style": "American Amber / Red Ale",
   "brewery_id": 82,
   "ounces": 12
 },
 {
   "FIELD1": 1460,
   "abv": 0.034,
   "ibu": 6,
   "Idaho": 1417,
   "name": "Weiss Trash Culture",
   "style": "Berliner Weissbier",
   "brewery_id": 410,
   "ounces": 12
 },
 {
   "FIELD1": 1461,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 885,
   "name": "Sea Hag IPA",
   "style": "American IPA",
   "brewery_id": 410,
   "ounces": 12
 },
 {
   "FIELD1": 1462,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 884,
   "name": "Elm City Pilsner",
   "style": "American Pilsner",
   "brewery_id": 410,
   "ounces": 12
 },
 {
   "FIELD1": 1463,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 757,
   "name": "Atlantic Amber Ale (2004)",
   "style": "American Amber / Red Ale",
   "brewery_id": 410,
   "ounces": 12
 },
 {
   "FIELD1": 1464,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 568,
   "name": "668 Neighbor of the Beast12 oz.",
   "style": "Belgian Pale Ale",
   "brewery_id": 410,
   "ounces": 12
 },
 {
   "FIELD1": 1465,
   "abv": 0.08800000000000001,
   "ibu": 85,
   "Idaho": 320,
   "name": "Gandhi-Bot Double IPA (12 oz.)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 410,
   "ounces": 12
 },
 {
   "FIELD1": 1466,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 43,
   "name": "668 Neighbor of the Beast (16 oz.) (2010)",
   "style": "Belgian Pale Ale",
   "brewery_id": 410,
   "ounces": 16
 },
 {
   "FIELD1": 1467,
   "abv": 0.08800000000000001,
   "ibu": 85,
   "Idaho": 42,
   "name": "Gandhi-Bot Double IPA (16 oz.) (2010)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 410,
   "ounces": 16
 },
 {
   "FIELD1": 1468,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 41,
   "name": "Elm City Lager (2007)",
   "style": "American Pilsner",
   "brewery_id": 410,
   "ounces": 12
 },
 {
   "FIELD1": 1469,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 40,
   "name": "Atlantic Amber Ale (2007)",
   "style": "American Amber / Red Ale",
   "brewery_id": 410,
   "ounces": 12
 },
 {
   "FIELD1": 1470,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 39,
   "name": "Sea Hag IPA (Current)",
   "style": "American IPA",
   "brewery_id": 410,
   "ounces": 12
 },
 {
   "FIELD1": 1471,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2272,
   "name": "Rebirth Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 174,
   "ounces": 12
 },
 {
   "FIELD1": 1472,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1582,
   "name": "Irish Channel Stout",
   "style": "American Stout",
   "brewery_id": 174,
   "ounces": 16
 },
 {
   "FIELD1": 1473,
   "abv": 0.08800000000000001,
   "ibu": null,
   "Idaho": 1114,
   "name": "MechaHopzilla",
   "style": "American Double / Imperial IPA",
   "brewery_id": 174,
   "ounces": 16
 },
 {
   "FIELD1": 1474,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 486,
   "name": "Hopitoulas IPA",
   "style": "American IPA",
   "brewery_id": 174,
   "ounces": 16
 },
 {
   "FIELD1": 1475,
   "abv": 0.039,
   "ibu": null,
   "Idaho": 485,
   "name": "NOLA Brown Ale",
   "style": "English Dark Mild Ale",
   "brewery_id": 174,
   "ounces": 12
 },
 {
   "FIELD1": 1476,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 484,
   "name": "NOLA Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 174,
   "ounces": 12
 },
 {
   "FIELD1": 1477,
   "abv": 0.055999999999999994,
   "ibu": 20,
   "Idaho": 2043,
   "name": "Skylight",
   "style": "Dunkelweizen",
   "brewery_id": 241,
   "ounces": 12
 },
 {
   "FIELD1": 1478,
   "abv": 0.055999999999999994,
   "ibu": 30,
   "Idaho": 2042,
   "name": "Kadigan",
   "style": "American Blonde Ale",
   "brewery_id": 241,
   "ounces": 12
 },
 {
   "FIELD1": 1479,
   "abv": 0.052000000000000005,
   "ibu": 50,
   "Idaho": 2041,
   "name": "Dammit Jim!",
   "style": "American Amber / Red Ale",
   "brewery_id": 241,
   "ounces": 12
 },
 {
   "FIELD1": 1480,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 646,
   "name": "Nut Brown Ale",
   "style": "English Brown Ale",
   "brewery_id": 518,
   "ounces": 12
 },
 {
   "FIELD1": 1481,
   "abv": 0.046,
   "ibu": null,
   "Idaho": 165,
   "name": "White Ale",
   "style": "Witbier",
   "brewery_id": 518,
   "ounces": 12
 },
 {
   "FIELD1": 1482,
   "abv": 0.042,
   "ibu": 35,
   "Idaho": 2050,
   "name": "Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 238,
   "ounces": 12
 },
 {
   "FIELD1": 1483,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 915,
   "name": "Green Head IPA",
   "style": "American IPA",
   "brewery_id": 495,
   "ounces": 12
 },
 {
   "FIELD1": 1484,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 914,
   "name": "Plum Island Belgian White",
   "style": "Witbier",
   "brewery_id": 495,
   "ounces": 12
 },
 {
   "FIELD1": 1485,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 913,
   "name": "Newburyport Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 495,
   "ounces": 12
 },
 {
   "FIELD1": 1486,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1811,
   "name": "Marblehead",
   "style": "American Amber / Red Ale",
   "brewery_id": 305,
   "ounces": 16
 },
 {
   "FIELD1": 1487,
   "abv": 0.051,
   "ibu": 31,
   "Idaho": 1622,
   "name": "Jam Session",
   "style": "American Pale Ale (APA)",
   "brewery_id": 359,
   "ounces": 16
 },
 {
   "FIELD1": 1488,
   "abv": 0.07200000000000001,
   "ibu": 80,
   "Idaho": 1621,
   "name": "Hop Drop 'N Roll IPA",
   "style": "American IPA",
   "brewery_id": 359,
   "ounces": 16
 },
 {
   "FIELD1": 1489,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1307,
   "name": "Paleo IPA",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 431,
   "ounces": 12
 },
 {
   "FIELD1": 1490,
   "abv": 0.061,
   "ibu": null,
   "Idaho": 1306,
   "name": "Buck Snort Stout",
   "style": "American Stout",
   "brewery_id": 431,
   "ounces": 12
 },
 {
   "FIELD1": 1491,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1305,
   "name": "Station 33 Firehouse Red",
   "style": "Irish Red Ale",
   "brewery_id": 431,
   "ounces": 12
 },
 {
   "FIELD1": 1492,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1304,
   "name": "Slimy Pebble Pils",
   "style": "German Pilsener",
   "brewery_id": 431,
   "ounces": 12
 },
 {
   "FIELD1": 1493,
   "abv": 0.045,
   "ibu": 50,
   "Idaho": 2692,
   "name": "Get Together",
   "style": "American IPA",
   "brewery_id": 0,
   "ounces": 16
 },
 {
   "FIELD1": 1494,
   "abv": 0.049,
   "ibu": 26,
   "Idaho": 2691,
   "name": "Maggie's Leap",
   "style": "Milk / Sweet Stout",
   "brewery_id": 0,
   "ounces": 16
 },
 {
   "FIELD1": 1495,
   "abv": 0.048,
   "ibu": 19,
   "Idaho": 2690,
   "name": "Wall's End",
   "style": "English Brown Ale",
   "brewery_id": 0,
   "ounces": 16
 },
 {
   "FIELD1": 1496,
   "abv": 0.06,
   "ibu": 38,
   "Idaho": 2689,
   "name": "Pumpion",
   "style": "Pumpkin Ale",
   "brewery_id": 0,
   "ounces": 16
 },
 {
   "FIELD1": 1497,
   "abv": 0.06,
   "ibu": 25,
   "Idaho": 2688,
   "name": "Stronghold",
   "style": "American Porter",
   "brewery_id": 0,
   "ounces": 16
 },
 {
   "FIELD1": 1498,
   "abv": 0.055999999999999994,
   "ibu": 47,
   "Idaho": 2687,
   "name": "Parapet ESB",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 0,
   "ounces": 16
 },
 {
   "FIELD1": 1499,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 1854,
   "name": "Blue Boots IPA",
   "style": "American IPA",
   "brewery_id": 293,
   "ounces": 16
 },
 {
   "FIELD1": 1500,
   "abv": 0.063,
   "ibu": null,
   "Idaho": 1227,
   "name": "Hoppy Bitch IPA",
   "style": "American IPA",
   "brewery_id": 450,
   "ounces": 16
 },
 {
   "FIELD1": 1501,
   "abv": 0.063,
   "ibu": 42,
   "Idaho": 1226,
   "name": "Three Skulls Ale Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 450,
   "ounces": 16
 },
 {
   "FIELD1": 1502,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 541,
   "name": "Walter's Premium Pilsener Beer",
   "style": "German Pilsener",
   "brewery_id": 529,
   "ounces": 12
 },
 {
   "FIELD1": 1503,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 109,
   "name": "Floppin' Crappie",
   "style": "American Pale Wheat Ale",
   "brewery_id": 529,
   "ounces": 12
 },
 {
   "FIELD1": 1504,
   "abv": 0.043,
   "ibu": null,
   "Idaho": 1917,
   "name": "Left of the Dial IPA",
   "style": "American IPA",
   "brewery_id": 271,
   "ounces": 12
 },
 {
   "FIELD1": 1505,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 1190,
   "name": "Notch Session Pils",
   "style": "Czech Pilsener",
   "brewery_id": 271,
   "ounces": 12
 },
 {
   "FIELD1": 1506,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1264,
   "name": "O'Fallon Pumpkin Beer",
   "style": "Pumpkin Ale",
   "brewery_id": 442,
   "ounces": 12
 },
 {
   "FIELD1": 1507,
   "abv": 0.061,
   "ibu": 66,
   "Idaho": 1258,
   "name": "5 Day IPA",
   "style": "American IPA",
   "brewery_id": 442,
   "ounces": 12
 },
 {
   "FIELD1": 1508,
   "abv": 0.051,
   "ibu": 7,
   "Idaho": 128,
   "name": "O'Fallon Wheach",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 442,
   "ounces": 12
 },
 {
   "FIELD1": 1509,
   "abv": 0.067,
   "ibu": 70,
   "Idaho": 2331,
   "name": "Watershed IPA",
   "style": "American IPA",
   "brewery_id": 150,
   "ounces": 12
 },
 {
   "FIELD1": 1510,
   "abv": 0.054000000000000006,
   "ibu": 24,
   "Idaho": 1669,
   "name": "Oakshire Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 150,
   "ounces": 12
 },
 {
   "FIELD1": 1511,
   "abv": 0.057999999999999996,
   "ibu": 27,
   "Idaho": 1668,
   "name": "Overcast Espresso Stout",
   "style": "American Stout",
   "brewery_id": 150,
   "ounces": 12
 },
 {
   "FIELD1": 1512,
   "abv": 0.067,
   "ibu": 70,
   "Idaho": 999,
   "name": "Watershed IPA (2013)",
   "style": "American IPA",
   "brewery_id": 150,
   "ounces": 12
 },
 {
   "FIELD1": 1513,
   "abv": 0.08199999999999999,
   "ibu": 25,
   "Idaho": 2247,
   "name": "Lake Monster",
   "style": "Baltic Porter",
   "brewery_id": 184,
   "ounces": 16
 },
 {
   "FIELD1": 1514,
   "abv": 0.049,
   "ibu": 27,
   "Idaho": 2071,
   "name": "London Homesick Ale",
   "style": "English Bitter",
   "brewery_id": 184,
   "ounces": 12
 },
 {
   "FIELD1": 1515,
   "abv": 0.048,
   "ibu": 35,
   "Idaho": 2070,
   "name": "Luchesa Lager",
   "style": "Keller Bier / Zwickel Bier",
   "brewery_id": 184,
   "ounces": 12
 },
 {
   "FIELD1": 1516,
   "abv": 0.048,
   "ibu": 35,
   "Idaho": 2069,
   "name": "Slow Ride",
   "style": "American Pale Ale (APA)",
   "brewery_id": 184,
   "ounces": 12
 },
 {
   "FIELD1": 1517,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 2192,
   "name": "Occidental Hefeweizen",
   "style": "American Pale Wheat Ale",
   "brewery_id": 200,
   "ounces": 16
 },
 {
   "FIELD1": 1518,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 1130,
   "name": "Occidental Dunkel",
   "style": "Dunkelweizen",
   "brewery_id": 200,
   "ounces": 16
 },
 {
   "FIELD1": 1519,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1129,
   "name": "Occidental Altbier",
   "style": "Altbier",
   "brewery_id": 200,
   "ounces": 16
 },
 {
   "FIELD1": 1520,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1081,
   "name": "Occidental Kölsch",
   "style": "Kölsch",
   "brewery_id": 200,
   "ounces": 16
 },
 {
   "FIELD1": 1521,
   "abv": 0.092,
   "ibu": 72,
   "Idaho": 2335,
   "name": "Perpetual Darkness",
   "style": "Belgian Strong Dark Ale",
   "brewery_id": 148,
   "ounces": 12
 },
 {
   "FIELD1": 1522,
   "abv": 0.087,
   "ibu": 29,
   "Idaho": 2334,
   "name": "Clan Warrior",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 148,
   "ounces": 12
 },
 {
   "FIELD1": 1523,
   "abv": 0.054000000000000006,
   "ibu": 36,
   "Idaho": 2333,
   "name": "Psycho Penguin Vanilla Porter",
   "style": "American Porter",
   "brewery_id": 148,
   "ounces": 12
 },
 {
   "FIELD1": 1524,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1721,
   "name": "Heliocentric Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 148,
   "ounces": 12
 },
 {
   "FIELD1": 1525,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 1720,
   "name": "Ghose Drifter Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 148,
   "ounces": 12
 },
 {
   "FIELD1": 1526,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 1431,
   "name": "Ghost Rider Pale Ale (2013)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 148,
   "ounces": 12
 },
 {
   "FIELD1": 1527,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1430,
   "name": "Helios Hefeweizen (2013)",
   "style": "Hefeweizen",
   "brewery_id": 148,
   "ounces": 12
 },
 {
   "FIELD1": 1528,
   "abv": 0.095,
   "ibu": 19,
   "Idaho": 1059,
   "name": "The Hole in Hadrian's Wall",
   "style": "Scottish Ale",
   "brewery_id": 471,
   "ounces": 16
 },
 {
   "FIELD1": 1529,
   "abv": 0.065,
   "ibu": 26,
   "Idaho": 1058,
   "name": "33 Select Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 471,
   "ounces": 16
 },
 {
   "FIELD1": 1530,
   "abv": 0.06,
   "ibu": 29,
   "Idaho": 603,
   "name": "Midwest Charm Farmhouse Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 471,
   "ounces": 16
 },
 {
   "FIELD1": 1531,
   "abv": 0.05,
   "ibu": 45,
   "Idaho": 602,
   "name": "Boji Blue Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 471,
   "ounces": 16
 },
 {
   "FIELD1": 1532,
   "abv": 0.057,
   "ibu": 26,
   "Idaho": 601,
   "name": "Winter Games Select #32 Stout",
   "style": "American Stout",
   "brewery_id": 471,
   "ounces": 16
 },
 {
   "FIELD1": 1533,
   "abv": 0.05,
   "ibu": 23,
   "Idaho": 600,
   "name": "Boji Beach Golden Rye Ale",
   "style": "Rye Beer",
   "brewery_id": 471,
   "ounces": 16
 },
 {
   "FIELD1": 1534,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1828,
   "name": "Hopsmith Pale Lager",
   "style": "American Pale Lager",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1535,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 1487,
   "name": "Falling Down Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1536,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1486,
   "name": "Resolution Rye Stout",
   "style": "American Stout",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1537,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1485,
   "name": "Plowshare Porter",
   "style": "American Porter",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1538,
   "abv": 0.046,
   "ibu": 20,
   "Idaho": 1394,
   "name": "Old Forge Pumpkin Ale",
   "style": "Pumpkin Ale",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1539,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1381,
   "name": "Endless Sun Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1540,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 900,
   "name": "Celestial Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1541,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 891,
   "name": "Overbite IPA",
   "style": "American IPA",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1542,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 509,
   "name": "T-Rail Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1543,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 508,
   "name": "Endless Summer Ale (2011)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 301,
   "ounces": 16
 },
 {
   "FIELD1": 1544,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 1530,
   "name": "Clem's Gold",
   "style": "American Pale Lager",
   "brewery_id": 390,
   "ounces": 16
 },
 {
   "FIELD1": 1545,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1529,
   "name": "Lizzy's Red",
   "style": "American Amber / Red Lager",
   "brewery_id": 390,
   "ounces": 16
 },
 {
   "FIELD1": 1546,
   "abv": 0.067,
   "ibu": null,
   "Idaho": 1528,
   "name": "Orlison India Pale Lager",
   "style": "American Pale Lager",
   "brewery_id": 390,
   "ounces": 16
 },
 {
   "FIELD1": 1547,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 1527,
   "name": "Brünette",
   "style": "Euro Dark Lager",
   "brewery_id": 390,
   "ounces": 16
 },
 {
   "FIELD1": 1548,
   "abv": 0.040999999999999995,
   "ibu": null,
   "Idaho": 1526,
   "name": "Havanüther",
   "style": "Light Lager",
   "brewery_id": 390,
   "ounces": 16
 },
 {
   "FIELD1": 1549,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2113,
   "name": "Lyric Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 216,
   "ounces": 12
 },
 {
   "FIELD1": 1550,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 2112,
   "name": "Atalanta",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 216,
   "ounces": 12
 },
 {
   "FIELD1": 1551,
   "abv": 0.049,
   "ibu": 35,
   "Idaho": 2302,
   "name": "Pinner Throwback IPA",
   "style": "American IPA",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1552,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1883,
   "name": "Centennial State Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 166,
   "ounces": 19.2
 },
 {
   "FIELD1": 1553,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1859,
   "name": "Old Chub NITRO",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 166,
   "ounces": 16
 },
 {
   "FIELD1": 1554,
   "abv": null,
   "ibu": null,
   "Idaho": 1796,
   "name": "The CROWLER™",
   "style": "",
   "brewery_id": 166,
   "ounces": 32
 },
 {
   "FIELD1": 1555,
   "abv": null,
   "ibu": null,
   "Idaho": 1790,
   "name": "CAN'D AID Foundation",
   "style": "",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1556,
   "abv": null,
   "ibu": null,
   "Idaho": 1752,
   "name": "Icey.P.A.",
   "style": "American IPA",
   "brewery_id": 166,
   "ounces": 16
 },
 {
   "FIELD1": 1557,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1751,
   "name": "One Nut Brown",
   "style": "English Brown Ale",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1558,
   "abv": null,
   "ibu": null,
   "Idaho": 1750,
   "name": "Birth IPA",
   "style": "American IPA",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1559,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 1444,
   "name": "Dale's Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1560,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 1252,
   "name": "Dale's Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1561,
   "abv": 0.053,
   "ibu": 35,
   "Idaho": 1167,
   "name": "Mama's Little Yella Pils",
   "style": "Czech Pilsener",
   "brewery_id": 166,
   "ounces": 19.2
 },
 {
   "FIELD1": 1562,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 993,
   "name": "oSKAr the G'Rauch",
   "style": "American IPA",
   "brewery_id": 166,
   "ounces": 19.2
 },
 {
   "FIELD1": 1563,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 992,
   "name": "oSKAr the G'Rauch",
   "style": "American IPA",
   "brewery_id": 166,
   "ounces": 16
 },
 {
   "FIELD1": 1564,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 955,
   "name": "Dale's Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 166,
   "ounces": 19.2
 },
 {
   "FIELD1": 1565,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 933,
   "name": "The Deuce",
   "style": "American Brown Ale",
   "brewery_id": 166,
   "ounces": 16
 },
 {
   "FIELD1": 1566,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 892,
   "name": "Dale's Pale Ale (10 Year Anniversary)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1567,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 828,
   "name": "Dale's Pale Ale (2012)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1568,
   "abv": 0.087,
   "ibu": 85,
   "Idaho": 806,
   "name": "Gordon Imperial Red (2010)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1569,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 755,
   "name": "Dale's Pale Ale (2011)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1570,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 754,
   "name": "Dale's Pale Ale (2010)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1571,
   "abv": 0.087,
   "ibu": 85,
   "Idaho": 726,
   "name": "G'KNIGHT (16 oz.)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 166,
   "ounces": 16
 },
 {
   "FIELD1": 1572,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 720,
   "name": "15th Anniversary Abbey Ale (2012)",
   "style": "Belgian Dark Ale",
   "brewery_id": 166,
   "ounces": 16
 },
 {
   "FIELD1": 1573,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 661,
   "name": "Chaka",
   "style": "Belgian Strong Pale Ale",
   "brewery_id": 166,
   "ounces": 16
 },
 {
   "FIELD1": 1574,
   "abv": 0.08,
   "ibu": 70,
   "Idaho": 585,
   "name": "HGH (Home Grown Hops): Part Duh",
   "style": "American Strong Ale",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1575,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 565,
   "name": "Deviant Dale's IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 166,
   "ounces": 16
 },
 {
   "FIELD1": 1576,
   "abv": 0.09,
   "ibu": 60,
   "Idaho": 391,
   "name": "One Hit Wonder",
   "style": "American Double / Imperial IPA",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1577,
   "abv": 0.087,
   "ibu": 85,
   "Idaho": 388,
   "name": "G'KNIGHT (12 oz.)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1578,
   "abv": 0.099,
   "ibu": 98,
   "Idaho": 8,
   "name": "Ten Fidy Imperial Stout",
   "style": "Russian Imperial Stout",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1579,
   "abv": 0.053,
   "ibu": 35,
   "Idaho": 7,
   "name": "Mama's Little Yella Pils",
   "style": "Czech Pilsener",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1580,
   "abv": 0.099,
   "ibu": 100,
   "Idaho": 6,
   "name": "GUBNA Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1581,
   "abv": 0.08,
   "ibu": 35,
   "Idaho": 5,
   "name": "Old Chub",
   "style": "Scottish Ale",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1582,
   "abv": 0.087,
   "ibu": 85,
   "Idaho": 4,
   "name": "Gordon Ale (2009)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1583,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 1,
   "name": "Dale's Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 166,
   "ounces": 12
 },
 {
   "FIELD1": 1584,
   "abv": 0.092,
   "ibu": 85,
   "Idaho": 805,
   "name": "Gordon (2005)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1585,
   "abv": 0.095,
   "ibu": 98,
   "Idaho": 804,
   "name": "Ten Fidy Imperial Stout (2008)",
   "style": "Russian Imperial Stout",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1586,
   "abv": 0.099,
   "ibu": 98,
   "Idaho": 803,
   "name": "Ten Fidy Imperial Stout (2007)",
   "style": "Russian Imperial Stout",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1587,
   "abv": 0.08,
   "ibu": 35,
   "Idaho": 787,
   "name": "Old Chub (2008)",
   "style": "Scottish Ale",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1588,
   "abv": 0.08,
   "ibu": 35,
   "Idaho": 786,
   "name": "Old Chub (2004)",
   "style": "Scottish Ale",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1589,
   "abv": 0.08,
   "ibu": 35,
   "Idaho": 785,
   "name": "Old Chub (2003)",
   "style": "Scottish Ale",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1590,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 745,
   "name": "Dale's Pale Ale (2008)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1591,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 744,
   "name": "Dale's Pale Ale (2006)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1592,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 743,
   "name": "Dale's Pale Ale (2004)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1593,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 742,
   "name": "Dale's Pale Ale (2003)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1594,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 741,
   "name": "Dale's Pale Ale (2002)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1595,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 734,
   "name": "Leroy (2005)",
   "style": "American Brown Ale",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1596,
   "abv": 0.087,
   "ibu": 60,
   "Idaho": 733,
   "name": "Gordon Beer (2006)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 503,
   "ounces": 12
 },
 {
   "FIELD1": 1597,
   "abv": 0.087,
   "ibu": 85,
   "Idaho": 1533,
   "name": "G'KNIGHT",
   "style": "American Double / Imperial IPA",
   "brewery_id": 389,
   "ounces": 12
 },
 {
   "FIELD1": 1598,
   "abv": 0.099,
   "ibu": 98,
   "Idaho": 1532,
   "name": "Ten Fidy",
   "style": "Russian Imperial Stout",
   "brewery_id": 389,
   "ounces": 12
 },
 {
   "FIELD1": 1599,
   "abv": 0.08,
   "ibu": 85,
   "Idaho": 1328,
   "name": "Deviant Dale's IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 389,
   "ounces": 16
 },
 {
   "FIELD1": 1600,
   "abv": 0.08,
   "ibu": 35,
   "Idaho": 1175,
   "name": "Old Chub",
   "style": "Scottish Ale",
   "brewery_id": 389,
   "ounces": 12
 },
 {
   "FIELD1": 1601,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 1166,
   "name": "Dale's Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 389,
   "ounces": 19.2
 },
 {
   "FIELD1": 1602,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 1065,
   "name": "Dale's Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 389,
   "ounces": 12
 },
 {
   "FIELD1": 1603,
   "abv": 0.055,
   "ibu": 45,
   "Idaho": 1908,
   "name": "Fresh Slice White IPA",
   "style": "American White IPA",
   "brewery_id": 275,
   "ounces": 12
 },
 {
   "FIELD1": 1604,
   "abv": 0.055,
   "ibu": 55,
   "Idaho": 1946,
   "name": "Overgrown American Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 261,
   "ounces": 12
 },
 {
   "FIELD1": 1605,
   "abv": 0.04,
   "ibu": 39,
   "Idaho": 1961,
   "name": "Ozark American Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 259,
   "ounces": 12
 },
 {
   "FIELD1": 1606,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1684,
   "name": "Hula Hoppie Session IPA",
   "style": "American IPA",
   "brewery_id": 341,
   "ounces": 12
 },
 {
   "FIELD1": 1607,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 927,
   "name": "Dirty Hippie Dark Wheat",
   "style": "American Dark Wheat Ale",
   "brewery_id": 341,
   "ounces": 12
 },
 {
   "FIELD1": 1608,
   "abv": 0.052000000000000005,
   "ibu": 23,
   "Idaho": 1268,
   "name": "Rustic Red",
   "style": "Irish Red Ale",
   "brewery_id": 441,
   "ounces": 16
 },
 {
   "FIELD1": 1609,
   "abv": 0.053,
   "ibu": 48,
   "Idaho": 697,
   "name": "Stimulator Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 441,
   "ounces": 16
 },
 {
   "FIELD1": 1610,
   "abv": 0.045,
   "ibu": 22,
   "Idaho": 696,
   "name": "Old Town Ale",
   "style": "Kölsch",
   "brewery_id": 441,
   "ounces": 16
 },
 {
   "FIELD1": 1611,
   "abv": 0.044000000000000004,
   "ibu": 28,
   "Idaho": 695,
   "name": "Car 21",
   "style": "English Bitter",
   "brewery_id": 441,
   "ounces": 16
 },
 {
   "FIELD1": 1612,
   "abv": 0.05,
   "ibu": 24,
   "Idaho": 694,
   "name": "Cache La Porter",
   "style": "American Porter",
   "brewery_id": 441,
   "ounces": 16
 },
 {
   "FIELD1": 1613,
   "abv": 0.042,
   "ibu": 35,
   "Idaho": 1805,
   "name": "Rodeo Rye Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 307,
   "ounces": 12
 },
 {
   "FIELD1": 1614,
   "abv": 0.062,
   "ibu": 65,
   "Idaho": 1048,
   "name": "Outlaw IPA",
   "style": "American IPA",
   "brewery_id": 307,
   "ounces": 12
 },
 {
   "FIELD1": 1615,
   "abv": 0.044000000000000004,
   "ibu": null,
   "Idaho": 1043,
   "name": "North Fork Lager",
   "style": "American Pale Lager",
   "brewery_id": 307,
   "ounces": 12
 },
 {
   "FIELD1": 1616,
   "abv": 0.048,
   "ibu": 35,
   "Idaho": 890,
   "name": "Payette Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 307,
   "ounces": 12
 },
 {
   "FIELD1": 1617,
   "abv": 0.055,
   "ibu": 25,
   "Idaho": 775,
   "name": "Mutton Buster",
   "style": "American Brown Ale",
   "brewery_id": 307,
   "ounces": 12
 },
 {
   "FIELD1": 1618,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1087,
   "name": "Side Kick Kölsch",
   "style": "Kölsch",
   "brewery_id": 468,
   "ounces": 12
 },
 {
   "FIELD1": 1619,
   "abv": 0.046,
   "ibu": null,
   "Idaho": 1931,
   "name": "Fresh Cut Pilsner",
   "style": "American Pilsner",
   "brewery_id": 266,
   "ounces": 12
 },
 {
   "FIELD1": 1620,
   "abv": 0.05,
   "ibu": 61,
   "Idaho": 1930,
   "name": "Summer Session Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 266,
   "ounces": 12
 },
 {
   "FIELD1": 1621,
   "abv": 0.04,
   "ibu": 12,
   "Idaho": 2238,
   "name": "Lobo Lito",
   "style": "Light Lager",
   "brewery_id": 187,
   "ounces": 12
 },
 {
   "FIELD1": 1622,
   "abv": 0.05,
   "ibu": 17,
   "Idaho": 2144,
   "name": "Robert Earl Keen Honey Pils",
   "style": "American Pilsner",
   "brewery_id": 187,
   "ounces": 12
 },
 {
   "FIELD1": 1623,
   "abv": 0.065,
   "ibu": 77,
   "Idaho": 2175,
   "name": "Mound Builder IPA",
   "style": "American IPA",
   "brewery_id": 205,
   "ounces": 12
 },
 {
   "FIELD1": 1624,
   "abv": 0.062,
   "ibu": 62,
   "Idaho": 2168,
   "name": "Amazon Princess IPA",
   "style": "American IPA",
   "brewery_id": 205,
   "ounces": 12
 },
 {
   "FIELD1": 1625,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 1956,
   "name": "Farmer's Daughter Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 205,
   "ounces": 12
 },
 {
   "FIELD1": 1626,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1794,
   "name": "People's Pilsner",
   "style": "German Pilsener",
   "brewery_id": 205,
   "ounces": 12
 },
 {
   "FIELD1": 1627,
   "abv": 0.055,
   "ibu": 10,
   "Idaho": 2633,
   "name": "Hotbox Brown",
   "style": "American Brown Ale",
   "brewery_id": 13,
   "ounces": 12
 },
 {
   "FIELD1": 1628,
   "abv": 0.048,
   "ibu": 15,
   "Idaho": 2632,
   "name": "Gold",
   "style": "American Blonde Ale",
   "brewery_id": 13,
   "ounces": 12
 },
 {
   "FIELD1": 1629,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 2631,
   "name": "Black",
   "style": "American Black Ale",
   "brewery_id": 13,
   "ounces": 12
 },
 {
   "FIELD1": 1630,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 2630,
   "name": "98 Problems (Cuz A Hop Ain't One)",
   "style": "American IPA",
   "brewery_id": 13,
   "ounces": 12
 },
 {
   "FIELD1": 1631,
   "abv": 0.05,
   "ibu": 40,
   "Idaho": 2629,
   "name": "Veteran’s Pale Ale (VPA)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 13,
   "ounces": 12
 },
 {
   "FIELD1": 1632,
   "abv": 0.05,
   "ibu": 35,
   "Idaho": 2628,
   "name": "Grapefruit IPA",
   "style": "American IPA",
   "brewery_id": 13,
   "ounces": 12
 },
 {
   "FIELD1": 1633,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 1062,
   "name": "Pete's ESP Lager (1998)",
   "style": "American Pale Lager",
   "brewery_id": 470,
   "ounces": 12
 },
 {
   "FIELD1": 1634,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1061,
   "name": "Pete's Wicked Summer Brew (1995)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 470,
   "ounces": 12
 },
 {
   "FIELD1": 1635,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 1060,
   "name": "Pete's Wicked Bohemian Pilsner (1997)",
   "style": "Czech Pilsener",
   "brewery_id": 470,
   "ounces": 12
 },
 {
   "FIELD1": 1636,
   "abv": null,
   "ibu": null,
   "Idaho": 1056,
   "name": "Pete's Wicked Pale Ale (1997)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 470,
   "ounces": 12
 },
 {
   "FIELD1": 1637,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1055,
   "name": "Pete's Wicked Summer Brew (2002)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 470,
   "ounces": 12
 },
 {
   "FIELD1": 1638,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1054,
   "name": "Pete's Wicked Summer Brew (1997)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 470,
   "ounces": 12
 },
 {
   "FIELD1": 1639,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1053,
   "name": "Pete's Wicked Summer Brew (1996)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 470,
   "ounces": 12
 },
 {
   "FIELD1": 1640,
   "abv": 0.040999999999999995,
   "ibu": 12,
   "Idaho": 2635,
   "name": "Sparkle",
   "style": "American Pale Lager",
   "brewery_id": 11,
   "ounces": 16
 },
 {
   "FIELD1": 1641,
   "abv": 0.059000000000000004,
   "ibu": 25,
   "Idaho": 1404,
   "name": "North 45 Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 11,
   "ounces": 16
 },
 {
   "FIELD1": 1642,
   "abv": 0.069,
   "ibu": 20,
   "Idaho": 1403,
   "name": "Horny Monk",
   "style": "Dubbel",
   "brewery_id": 11,
   "ounces": 16
 },
 {
   "FIELD1": 1643,
   "abv": 0.067,
   "ibu": 74,
   "Idaho": 1402,
   "name": "Mind's Eye PA",
   "style": "American IPA",
   "brewery_id": 11,
   "ounces": 16
 },
 {
   "FIELD1": 1644,
   "abv": 0.061,
   "ibu": 60,
   "Idaho": 2312,
   "name": "Camelback",
   "style": "American IPA",
   "brewery_id": 157,
   "ounces": 12
 },
 {
   "FIELD1": 1645,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 1636,
   "name": "Local 5 Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 355,
   "ounces": 16
 },
 {
   "FIELD1": 1646,
   "abv": 0.073,
   "ibu": null,
   "Idaho": 1518,
   "name": "Devils Head Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 355,
   "ounces": 16
 },
 {
   "FIELD1": 1647,
   "abv": 0.07,
   "ibu": 75,
   "Idaho": 1384,
   "name": "Elephant Rock IPA",
   "style": "American IPA",
   "brewery_id": 355,
   "ounces": 12
 },
 {
   "FIELD1": 1648,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1797,
   "name": "Black Bay Milk Stout",
   "style": "Milk / Sweet Stout",
   "brewery_id": 310,
   "ounces": 12
 },
 {
   "FIELD1": 1649,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1437,
   "name": "Atom Splitter Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 310,
   "ounces": 12
 },
 {
   "FIELD1": 1650,
   "abv": 0.06,
   "ibu": 20,
   "Idaho": 1791,
   "name": "Hot Date Ale",
   "style": "Chile Beer",
   "brewery_id": 314,
   "ounces": 16
 },
 {
   "FIELD1": 1651,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1540,
   "name": "Masked Bandit IPA",
   "style": "American Black Ale",
   "brewery_id": 314,
   "ounces": 16
 },
 {
   "FIELD1": 1652,
   "abv": 0.06,
   "ibu": 24,
   "Idaho": 1491,
   "name": "Sweet Potato Ale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 314,
   "ounces": 16
 },
 {
   "FIELD1": 1653,
   "abv": 0.045,
   "ibu": 18,
   "Idaho": 1335,
   "name": "Float Trip Ale",
   "style": "American Blonde Ale",
   "brewery_id": 314,
   "ounces": 16
 },
 {
   "FIELD1": 1654,
   "abv": 0.055,
   "ibu": 25,
   "Idaho": 847,
   "name": "Old Tom Porter",
   "style": "American Porter",
   "brewery_id": 314,
   "ounces": 16
 },
 {
   "FIELD1": 1655,
   "abv": 0.045,
   "ibu": 18,
   "Idaho": 846,
   "name": "Black Walnut Wheat",
   "style": "American Dark Wheat Ale",
   "brewery_id": 314,
   "ounces": 16
 },
 {
   "FIELD1": 1656,
   "abv": 0.055,
   "ibu": 20,
   "Idaho": 521,
   "name": "McKinney Eddy Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 314,
   "ounces": 16
 },
 {
   "FIELD1": 1657,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 479,
   "name": "Missouri Mule India Pale Ale",
   "style": "American IPA",
   "brewery_id": 314,
   "ounces": 16
 },
 {
   "FIELD1": 1658,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 2559,
   "name": "Blood of the Unicorn",
   "style": "American Amber / Red Ale",
   "brewery_id": 52,
   "ounces": 16
 },
 {
   "FIELD1": 1659,
   "abv": 0.069,
   "ibu": 51,
   "Idaho": 1760,
   "name": "GreyBeard™ IPA",
   "style": "American IPA",
   "brewery_id": 324,
   "ounces": 12
 },
 {
   "FIELD1": 1660,
   "abv": 0.057,
   "ibu": 31,
   "Idaho": 1759,
   "name": "Pisgah Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 324,
   "ounces": 12
 },
 {
   "FIELD1": 1661,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1589,
   "name": "PONTO S.I.P.A.",
   "style": "American IPA",
   "brewery_id": 370,
   "ounces": 16
 },
 {
   "FIELD1": 1662,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 1457,
   "name": "Chronic Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 370,
   "ounces": 16
 },
 {
   "FIELD1": 1663,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1191,
   "name": "Swami's India Pale Ale",
   "style": "American IPA",
   "brewery_id": 370,
   "ounces": 16
 },
 {
   "FIELD1": 1664,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2336,
   "name": "New Cleveland Palesner",
   "style": "American Pilsner",
   "brewery_id": 147,
   "ounces": 12
 },
 {
   "FIELD1": 1665,
   "abv": 0.054000000000000006,
   "ibu": 45,
   "Idaho": 2553,
   "name": "Mazzie",
   "style": "American Pale Ale (APA)",
   "brewery_id": 55,
   "ounces": 12
 },
 {
   "FIELD1": 1666,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 1909,
   "name": "Big Chuck Barleywine",
   "style": "American Barleywine",
   "brewery_id": 274,
   "ounces": 12
 },
 {
   "FIELD1": 1667,
   "abv": null,
   "ibu": null,
   "Idaho": 335,
   "name": "Ponderosa IPA",
   "style": "American IPA",
   "brewery_id": 548,
   "ounces": 12
 },
 {
   "FIELD1": 1668,
   "abv": null,
   "ibu": null,
   "Idaho": 64,
   "name": "Liquid Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 548,
   "ounces": 12
 },
 {
   "FIELD1": 1669,
   "abv": 0.059000000000000004,
   "ibu": 14,
   "Idaho": 2360,
   "name": "Morning Wood Wheat (Current)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 135,
   "ounces": 12
 },
 {
   "FIELD1": 1670,
   "abv": 0.069,
   "ibu": 17,
   "Idaho": 1463,
   "name": "Hideout Helles",
   "style": "Munich Helles Lager",
   "brewery_id": 135,
   "ounces": 12
 },
 {
   "FIELD1": 1671,
   "abv": 0.06,
   "ibu": 15,
   "Idaho": 1462,
   "name": "Dead Eye Dunkel",
   "style": "Munich Dunkel Lager",
   "brewery_id": 135,
   "ounces": 12
 },
 {
   "FIELD1": 1672,
   "abv": 0.057999999999999996,
   "ibu": 21,
   "Idaho": 1461,
   "name": "Peacemaker Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 135,
   "ounces": 12
 },
 {
   "FIELD1": 1673,
   "abv": 0.057,
   "ibu": 68,
   "Idaho": 711,
   "name": "Over the Rail Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 135,
   "ounces": 12
 },
 {
   "FIELD1": 1674,
   "abv": 0.057999999999999996,
   "ibu": 21,
   "Idaho": 188,
   "name": "Pallavicini Pilsner (2009)",
   "style": "Czech Pilsener",
   "brewery_id": 135,
   "ounces": 12
 },
 {
   "FIELD1": 1675,
   "abv": 0.059000000000000004,
   "ibu": 14,
   "Idaho": 130,
   "name": "Morning Wood Wheat (Current)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 135,
   "ounces": 12
 },
 {
   "FIELD1": 1676,
   "abv": 0.052000000000000005,
   "ibu": 18,
   "Idaho": 399,
   "name": "Pyramid Hefeweizen (2011)",
   "style": "Hefeweizen",
   "brewery_id": 544,
   "ounces": 12
 },
 {
   "FIELD1": 1677,
   "abv": 0.052000000000000005,
   "ibu": 18,
   "Idaho": 82,
   "name": "Haywire Hefeweizen (2010)",
   "style": "Hefeweizen",
   "brewery_id": 544,
   "ounces": 16
 },
 {
   "FIELD1": 1678,
   "abv": 0.045,
   "ibu": 35,
   "Idaho": 2031,
   "name": "Golden Fleece",
   "style": "Belgian Pale Ale",
   "brewery_id": 246,
   "ounces": 12
 },
 {
   "FIELD1": 1679,
   "abv": 0.055,
   "ibu": 30,
   "Idaho": 2030,
   "name": "Smoking Mirror",
   "style": "American Porter",
   "brewery_id": 246,
   "ounces": 12
 },
 {
   "FIELD1": 1680,
   "abv": 0.046,
   "ibu": null,
   "Idaho": 2269,
   "name": "Rahr's Blonde",
   "style": "Munich Helles Lager",
   "brewery_id": 176,
   "ounces": 12
 },
 {
   "FIELD1": 1681,
   "abv": 0.057999999999999996,
   "ibu": 60,
   "Idaho": 2229,
   "name": "Pride of Texas Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 176,
   "ounces": 12
 },
 {
   "FIELD1": 1682,
   "abv": 0.044000000000000004,
   "ibu": 5,
   "Idaho": 2370,
   "name": "18th Anniversary Gose",
   "style": "Gose",
   "brewery_id": 128,
   "ounces": 12
 },
 {
   "FIELD1": 1683,
   "abv": 0.046,
   "ibu": 25,
   "Idaho": 2211,
   "name": "White (2015)",
   "style": "Witbier",
   "brewery_id": 128,
   "ounces": 12
 },
 {
   "FIELD1": 1684,
   "abv": 0.099,
   "ibu": 85,
   "Idaho": 1861,
   "name": "BLAKKR",
   "style": "American Black Ale",
   "brewery_id": 128,
   "ounces": 12
 },
 {
   "FIELD1": 1685,
   "abv": 0.051,
   "ibu": 21,
   "Idaho": 1718,
   "name": "Firemans #4 Blonde Ale (2013)",
   "style": "American Blonde Ale",
   "brewery_id": 128,
   "ounces": 12
 },
 {
   "FIELD1": 1686,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 1290,
   "name": "The Sword Iron Swan Ale",
   "style": "English Pale Ale",
   "brewery_id": 128,
   "ounces": 12
 },
 {
   "FIELD1": 1687,
   "abv": 0.053,
   "ibu": 52,
   "Idaho": 1091,
   "name": "Hans' Pils (2015)",
   "style": "German Pilsener",
   "brewery_id": 128,
   "ounces": 12
 },
 {
   "FIELD1": 1688,
   "abv": 0.06,
   "ibu": 50,
   "Idaho": 1086,
   "name": "Four Squared (2015)",
   "style": "American Blonde Ale",
   "brewery_id": 128,
   "ounces": 12
 },
 {
   "FIELD1": 1689,
   "abv": 0.051,
   "ibu": 21,
   "Idaho": 830,
   "name": "Firemans #4 Blonde Ale (2015)",
   "style": "American Blonde Ale",
   "brewery_id": 128,
   "ounces": 12
 },
 {
   "FIELD1": 1690,
   "abv": 0.07200000000000001,
   "ibu": 55,
   "Idaho": 1021,
   "name": "Watership Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 475,
   "ounces": 12
 },
 {
   "FIELD1": 1691,
   "abv": 0.062,
   "ibu": 55,
   "Idaho": 938,
   "name": "Gangway IPA",
   "style": "American IPA",
   "brewery_id": 475,
   "ounces": 12
 },
 {
   "FIELD1": 1692,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 715,
   "name": "Long Day Lager",
   "style": "Czech Pilsener",
   "brewery_id": 475,
   "ounces": 12
 },
 {
   "FIELD1": 1693,
   "abv": 0.051,
   "ibu": 17,
   "Idaho": 2516,
   "name": "Farmer's Daughter Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 68,
   "ounces": 16
 },
 {
   "FIELD1": 1694,
   "abv": 0.055,
   "ibu": 45,
   "Idaho": 2515,
   "name": "Pump House IPA",
   "style": "American IPA",
   "brewery_id": 68,
   "ounces": 16
 },
 {
   "FIELD1": 1695,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 2514,
   "name": "Suicide Blonde IPA",
   "style": "Belgian IPA",
   "brewery_id": 68,
   "ounces": 16
 },
 {
   "FIELD1": 1696,
   "abv": 0.047,
   "ibu": 25,
   "Idaho": 2513,
   "name": "Vanilla Porter",
   "style": "American Porter",
   "brewery_id": 68,
   "ounces": 16
 },
 {
   "FIELD1": 1697,
   "abv": 0.057999999999999996,
   "ibu": 18,
   "Idaho": 2512,
   "name": "Honey Rye",
   "style": "Rye Beer",
   "brewery_id": 68,
   "ounces": 16
 },
 {
   "FIELD1": 1698,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1467,
   "name": "Happy Cider",
   "style": "Cider",
   "brewery_id": 403,
   "ounces": 16
 },
 {
   "FIELD1": 1699,
   "abv": 0.065,
   "ibu": 44,
   "Idaho": 945,
   "name": "Long Hammer IPA",
   "style": "American IPA",
   "brewery_id": 487,
   "ounces": 16
 },
 {
   "FIELD1": 1700,
   "abv": 0.065,
   "ibu": 44,
   "Idaho": 583,
   "name": "Long Hammer IPA",
   "style": "American IPA",
   "brewery_id": 487,
   "ounces": 12
 },
 {
   "FIELD1": 1701,
   "abv": 0.057999999999999996,
   "ibu": 27,
   "Idaho": 339,
   "name": "Copper Hook (2011)",
   "style": "American Amber / Red Ale",
   "brewery_id": 487,
   "ounces": 12
 },
 {
   "FIELD1": 1702,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1375,
   "name": "Nectar of the Hops",
   "style": "Mead",
   "brewery_id": 421,
   "ounces": 16
 },
 {
   "FIELD1": 1703,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1374,
   "name": "Sunshine Nectar",
   "style": "Mead",
   "brewery_id": 421,
   "ounces": 16
 },
 {
   "FIELD1": 1704,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1373,
   "name": "Black Raspberry Nectar",
   "style": "Mead",
   "brewery_id": 421,
   "ounces": 16
 },
 {
   "FIELD1": 1705,
   "abv": 0.05,
   "ibu": 16,
   "Idaho": 2087,
   "name": "Blood Orange Wit",
   "style": "Witbier",
   "brewery_id": 225,
   "ounces": 16
 },
 {
   "FIELD1": 1706,
   "abv": 0.05,
   "ibu": 40,
   "Idaho": 2414,
   "name": "Consilium",
   "style": "American Pale Ale (APA)",
   "brewery_id": 110,
   "ounces": 12
 },
 {
   "FIELD1": 1707,
   "abv": 0.09,
   "ibu": 60,
   "Idaho": 1581,
   "name": "Hammer & Sickle",
   "style": "Russian Imperial Stout",
   "brewery_id": 110,
   "ounces": 12
 },
 {
   "FIELD1": 1708,
   "abv": 0.07,
   "ibu": 100,
   "Idaho": 1176,
   "name": "Redacted Rye IPA",
   "style": "American IPA",
   "brewery_id": 110,
   "ounces": 16
 },
 {
   "FIELD1": 1709,
   "abv": 0.099,
   "ibu": 100,
   "Idaho": 1006,
   "name": "Elevation Triple India Pale Ale",
   "style": "American Double / Imperial IPA",
   "brewery_id": 110,
   "ounces": 12
 },
 {
   "FIELD1": 1710,
   "abv": 0.05,
   "ibu": 25,
   "Idaho": 1005,
   "name": "5:00 O'Clock Afternoon Ale",
   "style": "American Blonde Ale",
   "brewery_id": 110,
   "ounces": 16
 },
 {
   "FIELD1": 1711,
   "abv": 0.07,
   "ibu": 100,
   "Idaho": 636,
   "name": "Ryeteous Rye IPA (2012)",
   "style": "American IPA",
   "brewery_id": 110,
   "ounces": 16
 },
 {
   "FIELD1": 1712,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 1538,
   "name": "Stout Ol' Friend",
   "style": "American Stout",
   "brewery_id": 386,
   "ounces": 16
 },
 {
   "FIELD1": 1713,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 1075,
   "name": "Stout Ol' Friend (2012)",
   "style": "American Stout",
   "brewery_id": 386,
   "ounces": 16
 },
 {
   "FIELD1": 1714,
   "abv": null,
   "ibu": null,
   "Idaho": 710,
   "name": "Rye Porter",
   "style": "American Porter",
   "brewery_id": 386,
   "ounces": 16
 },
 {
   "FIELD1": 1715,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 709,
   "name": "Miner's Gold",
   "style": "American Blonde Ale",
   "brewery_id": 386,
   "ounces": 16
 },
 {
   "FIELD1": 1716,
   "abv": 0.046,
   "ibu": null,
   "Idaho": 708,
   "name": "Vienna Lager",
   "style": "Vienna Lager",
   "brewery_id": 386,
   "ounces": 16
 },
 {
   "FIELD1": 1717,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 706,
   "name": "Jessie's Garage",
   "style": "American Pale Ale (APA)",
   "brewery_id": 386,
   "ounces": 16
 },
 {
   "FIELD1": 1718,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 220,
   "name": "Colorado Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 386,
   "ounces": 12
 },
 {
   "FIELD1": 1719,
   "abv": null,
   "ibu": null,
   "Idaho": 219,
   "name": "Miner's Gold",
   "style": "American Blonde Ale",
   "brewery_id": 386,
   "ounces": 12
 },
 {
   "FIELD1": 1720,
   "abv": 0.055,
   "ibu": 40,
   "Idaho": 2576,
   "name": "Fist City",
   "style": "American Pale Ale (APA)",
   "brewery_id": 44,
   "ounces": 12
 },
 {
   "FIELD1": 1721,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1133,
   "name": "A Little Crazy",
   "style": "Belgian Pale Ale",
   "brewery_id": 44,
   "ounces": 12
 },
 {
   "FIELD1": 1722,
   "abv": 0.057999999999999996,
   "ibu": 15,
   "Idaho": 609,
   "name": "Rosa Hibiscus Ale",
   "style": "Herbed / Spiced Beer",
   "brewery_id": 44,
   "ounces": 12
 },
 {
   "FIELD1": 1723,
   "abv": 0.061,
   "ibu": 31,
   "Idaho": 418,
   "name": "Fistmas Ale",
   "style": "Herbed / Spiced Beer",
   "brewery_id": 44,
   "ounces": 12
 },
 {
   "FIELD1": 1724,
   "abv": 0.057,
   "ibu": 25,
   "Idaho": 417,
   "name": "Oktoberfest Revolution",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 44,
   "ounces": 12
 },
 {
   "FIELD1": 1725,
   "abv": 0.068,
   "ibu": 28,
   "Idaho": 416,
   "name": "Eugene Porter",
   "style": "American Porter",
   "brewery_id": 44,
   "ounces": 12
 },
 {
   "FIELD1": 1726,
   "abv": 0.065,
   "ibu": 70,
   "Idaho": 415,
   "name": "Anti-Hero IPA",
   "style": "American IPA",
   "brewery_id": 44,
   "ounces": 12
 },
 {
   "FIELD1": 1727,
   "abv": 0.05,
   "ibu": 14,
   "Idaho": 414,
   "name": "Bottom Up Belgian Wit",
   "style": "Witbier",
   "brewery_id": 44,
   "ounces": 12
 },
 {
   "FIELD1": 1728,
   "abv": 0.057,
   "ibu": 42,
   "Idaho": 2452,
   "name": "Hustle",
   "style": "American Amber / Red Ale",
   "brewery_id": 93,
   "ounces": 12
 },
 {
   "FIELD1": 1729,
   "abv": 0.055,
   "ibu": 42,
   "Idaho": 2451,
   "name": "Pure Fury",
   "style": "American Pale Ale (APA)",
   "brewery_id": 93,
   "ounces": 12
 },
 {
   "FIELD1": 1730,
   "abv": 0.06,
   "ibu": 60,
   "Idaho": 2132,
   "name": "Dad",
   "style": "American Amber / Red Ale",
   "brewery_id": 93,
   "ounces": 12
 },
 {
   "FIELD1": 1731,
   "abv": 0.057999999999999996,
   "ibu": 35,
   "Idaho": 1993,
   "name": "Panther",
   "style": "American Porter",
   "brewery_id": 93,
   "ounces": 12
 },
 {
   "FIELD1": 1732,
   "abv": 0.052000000000000005,
   "ibu": 21,
   "Idaho": 1992,
   "name": "Franz",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 93,
   "ounces": 12
 },
 {
   "FIELD1": 1733,
   "abv": 0.043,
   "ibu": 45,
   "Idaho": 1935,
   "name": "Zen",
   "style": "American Pale Ale (APA)",
   "brewery_id": 93,
   "ounces": 12
 },
 {
   "FIELD1": 1734,
   "abv": 0.07200000000000001,
   "ibu": 75,
   "Idaho": 1852,
   "name": "Truth",
   "style": "American IPA",
   "brewery_id": 93,
   "ounces": 12
 },
 {
   "FIELD1": 1735,
   "abv": 0.048,
   "ibu": 25,
   "Idaho": 1851,
   "name": "Cougar",
   "style": "American Blonde Ale",
   "brewery_id": 93,
   "ounces": 12
 },
 {
   "FIELD1": 1736,
   "abv": 0.038,
   "ibu": null,
   "Idaho": 2307,
   "name": "Smooth Operator",
   "style": "Cream Ale",
   "brewery_id": 162,
   "ounces": 16
 },
 {
   "FIELD1": 1737,
   "abv": 0.035,
   "ibu": null,
   "Idaho": 2580,
   "name": "Gose",
   "style": "Gose",
   "brewery_id": 42,
   "ounces": 16
 },
 {
   "FIELD1": 1738,
   "abv": 0.043,
   "ibu": null,
   "Idaho": 1807,
   "name": "Maine Island Trail Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 42,
   "ounces": 16
 },
 {
   "FIELD1": 1739,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1180,
   "name": "River North White Ale",
   "style": "Witbier",
   "brewery_id": 459,
   "ounces": 16
 },
 {
   "FIELD1": 1740,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1179,
   "name": "River North Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 459,
   "ounces": 16
 },
 {
   "FIELD1": 1741,
   "abv": 0.05,
   "ibu": 55,
   "Idaho": 1771,
   "name": "Lil SIPA",
   "style": "American IPA",
   "brewery_id": 321,
   "ounces": 16
 },
 {
   "FIELD1": 1742,
   "abv": 0.055,
   "ibu": 60,
   "Idaho": 1654,
   "name": "Hop Bomber Rye Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 321,
   "ounces": 16
 },
 {
   "FIELD1": 1743,
   "abv": 0.05,
   "ibu": 100,
   "Idaho": 2579,
   "name": "Jah Mon",
   "style": "American IPA",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1744,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 2373,
   "name": "Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1745,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 2049,
   "name": "Headless Wylie",
   "style": "Pumpkin Ale",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1746,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2048,
   "name": "Dayman IPA",
   "style": "American IPA",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1747,
   "abv": 0.071,
   "ibu": null,
   "Idaho": 1880,
   "name": "All Aboard! Anniversary Stout",
   "style": "Oatmeal Stout",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1748,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 1879,
   "name": "Hop Lace",
   "style": "American White IPA",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1749,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1878,
   "name": "OH-PA Session Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1750,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1877,
   "name": "Patrick's Poison",
   "style": "American Amber / Red Ale",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1751,
   "abv": 0.081,
   "ibu": null,
   "Idaho": 1764,
   "name": "Rudolph's Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1752,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 1103,
   "name": "Babbling Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1753,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 1102,
   "name": "Maxwell's Scottish Ale",
   "style": "Scottish Ale",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1754,
   "abv": 0.061,
   "ibu": null,
   "Idaho": 1101,
   "name": "Grateful White",
   "style": "Witbier",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1755,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1100,
   "name": "RT Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1756,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 1099,
   "name": "Old Wylie's IPA",
   "style": "American IPA",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1757,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1098,
   "name": "Hala Kahiki Pineapple Beer",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 43,
   "ounces": 12
 },
 {
   "FIELD1": 1758,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1330,
   "name": "Track 1 Amber Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 427,
   "ounces": 16
 },
 {
   "FIELD1": 1759,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 2074,
   "name": "Pine Knob Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 229,
   "ounces": 16
 },
 {
   "FIELD1": 1760,
   "abv": null,
   "ibu": null,
   "Idaho": 1724,
   "name": "Cal and Co. Black Cherry Porter",
   "style": "American Porter",
   "brewery_id": 229,
   "ounces": 16
 },
 {
   "FIELD1": 1761,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1280,
   "name": "Lazy Daze Lager",
   "style": "American Adjunct Lager",
   "brewery_id": 229,
   "ounces": 16
 },
 {
   "FIELD1": 1762,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 899,
   "name": "Rochester Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 229,
   "ounces": 16
 },
 {
   "FIELD1": 1763,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 363,
   "name": "Milkshake Stout",
   "style": "Milk / Sweet Stout",
   "brewery_id": 229,
   "ounces": 16
 },
 {
   "FIELD1": 1764,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 158,
   "name": "Cornerstone IPA",
   "style": "American IPA",
   "brewery_id": 229,
   "ounces": 16
 },
 {
   "FIELD1": 1765,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 97,
   "name": "Lazy Daze Lager",
   "style": "American Adjunct Lager",
   "brewery_id": 229,
   "ounces": 12
 },
 {
   "FIELD1": 1766,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 1860,
   "name": "Rogue American Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 289,
   "ounces": 16
 },
 {
   "FIELD1": 1767,
   "abv": 0.076,
   "ibu": 78,
   "Idaho": 1577,
   "name": "12th Round",
   "style": "American Strong Ale",
   "brewery_id": 376,
   "ounces": 16
 },
 {
   "FIELD1": 1768,
   "abv": 0.07,
   "ibu": 80,
   "Idaho": 1576,
   "name": "RoughTail IPA",
   "style": "American IPA",
   "brewery_id": 376,
   "ounces": 16
 },
 {
   "FIELD1": 1769,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1575,
   "name": "Polar Night Stout",
   "style": "American Stout",
   "brewery_id": 376,
   "ounces": 16
 },
 {
   "FIELD1": 1770,
   "abv": 0.071,
   "ibu": 36,
   "Idaho": 2304,
   "name": "Sundown",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 164,
   "ounces": 12
 },
 {
   "FIELD1": 1771,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 2249,
   "name": "Sanctified",
   "style": "Belgian Strong Pale Ale",
   "brewery_id": 164,
   "ounces": 12
 },
 {
   "FIELD1": 1772,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 2053,
   "name": "Fear of a Brett Planet",
   "style": "American Pale Ale (APA)",
   "brewery_id": 164,
   "ounces": 12
 },
 {
   "FIELD1": 1773,
   "abv": 0.055999999999999994,
   "ibu": 40,
   "Idaho": 1842,
   "name": "Original Slacker Ale",
   "style": "English Brown Ale",
   "brewery_id": 164,
   "ounces": 12
 },
 {
   "FIELD1": 1774,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 1841,
   "name": "Alpha Blackback",
   "style": "American Black Ale",
   "brewery_id": 164,
   "ounces": 12
 },
 {
   "FIELD1": 1775,
   "abv": 0.063,
   "ibu": null,
   "Idaho": 1782,
   "name": "Kiss Off IPA",
   "style": "American IPA",
   "brewery_id": 164,
   "ounces": 12
 },
 {
   "FIELD1": 1776,
   "abv": 0.045,
   "ibu": 28,
   "Idaho": 1552,
   "name": "Dog Days Summer Ale",
   "style": "Kölsch",
   "brewery_id": 164,
   "ounces": 12
 },
 {
   "FIELD1": 1777,
   "abv": 0.055999999999999994,
   "ibu": 35,
   "Idaho": 1479,
   "name": "1881 California Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 397,
   "ounces": 12
 },
 {
   "FIELD1": 1778,
   "abv": 0.073,
   "ibu": 55,
   "Idaho": 1478,
   "name": "CAPT Black IPA",
   "style": "American Black Ale",
   "brewery_id": 397,
   "ounces": 12
 },
 {
   "FIELD1": 1779,
   "abv": 0.048,
   "ibu": 42,
   "Idaho": 1370,
   "name": "Ruhstaller's Gilt Edge Lager Beer",
   "style": "American Amber / Red Lager",
   "brewery_id": 397,
   "ounces": 12
 },
 {
   "FIELD1": 1780,
   "abv": 0.073,
   "ibu": 55,
   "Idaho": 883,
   "name": "CAPT Black IPA",
   "style": "American Black Ale",
   "brewery_id": 397,
   "ounces": 16
 },
 {
   "FIELD1": 1781,
   "abv": 0.055999999999999994,
   "ibu": 35,
   "Idaho": 882,
   "name": "1881 California Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 397,
   "ounces": 16
 },
 {
   "FIELD1": 1782,
   "abv": 0.05,
   "ibu": 15,
   "Idaho": 1868,
   "name": "Saint Archer White Ale",
   "style": "Witbier",
   "brewery_id": 288,
   "ounces": 12
 },
 {
   "FIELD1": 1783,
   "abv": 0.068,
   "ibu": 66,
   "Idaho": 1867,
   "name": "Saint Archer IPA",
   "style": "American IPA",
   "brewery_id": 288,
   "ounces": 12
 },
 {
   "FIELD1": 1784,
   "abv": 0.052000000000000005,
   "ibu": 40,
   "Idaho": 1865,
   "name": "Saint Archer Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 288,
   "ounces": 12
 },
 {
   "FIELD1": 1785,
   "abv": 0.048,
   "ibu": 22,
   "Idaho": 1864,
   "name": "Saint Archer Blonde",
   "style": "Kölsch",
   "brewery_id": 288,
   "ounces": 12
 },
 {
   "FIELD1": 1786,
   "abv": 0.069,
   "ibu": 20,
   "Idaho": 2599,
   "name": "Sex Panther",
   "style": "American Porter",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1787,
   "abv": 0.095,
   "ibu": 25,
   "Idaho": 2073,
   "name": "Winter Warmer (Vault Series)",
   "style": "Winter Warmer",
   "brewery_id": 30,
   "ounces": 16
 },
 {
   "FIELD1": 1788,
   "abv": 0.091,
   "ibu": 99,
   "Idaho": 2063,
   "name": "Count Hopula (Vault Series)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 30,
   "ounces": 16
 },
 {
   "FIELD1": 1789,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1995,
   "name": "Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1790,
   "abv": 0.05,
   "ibu": 15,
   "Idaho": 1934,
   "name": "SunSpot Golden Ale",
   "style": "American Blonde Ale",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1791,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1329,
   "name": "I.W.A. (2011)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1792,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1299,
   "name": "Supermonk I.P.A.",
   "style": "Belgian IPA",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1793,
   "abv": 0.055,
   "ibu": 20,
   "Idaho": 1073,
   "name": "Epicenter Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1794,
   "abv": 0.05,
   "ibu": 15,
   "Idaho": 1072,
   "name": "SanTan HefeWeizen",
   "style": "Hefeweizen",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1795,
   "abv": 0.07,
   "ibu": 85,
   "Idaho": 1071,
   "name": "Hop Shock IPA",
   "style": "American IPA",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1796,
   "abv": 0.069,
   "ibu": 20,
   "Idaho": 852,
   "name": "Sex Panther (2014)",
   "style": "American Porter",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1797,
   "abv": 0.055,
   "ibu": 45,
   "Idaho": 850,
   "name": "Devil’s Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1798,
   "abv": 0.081,
   "ibu": null,
   "Idaho": 839,
   "name": "Rail Slide Imperial Spiced Ale",
   "style": "Herbed / Spiced Beer",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1799,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 777,
   "name": "Mr. Pineapple",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1800,
   "abv": 0.055,
   "ibu": 45,
   "Idaho": 764,
   "name": "American Idiot Ale (2012)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1801,
   "abv": 0.07,
   "ibu": 85,
   "Idaho": 317,
   "name": "Hop Shock IPA (2010)",
   "style": "American IPA",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1802,
   "abv": 0.05,
   "ibu": 15,
   "Idaho": 286,
   "name": "SanTan HefeWeizen (2010)",
   "style": "Hefeweizen",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1803,
   "abv": 0.055,
   "ibu": 45,
   "Idaho": 285,
   "name": "Devil’s Ale (2010)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1804,
   "abv": 0.055,
   "ibu": 20,
   "Idaho": 124,
   "name": "Epicenter Amber Ale (2010)",
   "style": "American Amber / Red Ale",
   "brewery_id": 30,
   "ounces": 12
 },
 {
   "FIELD1": 1805,
   "abv": 0.057999999999999996,
   "ibu": 20,
   "Idaho": 1392,
   "name": "Sanitas Saison Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 419,
   "ounces": 12
 },
 {
   "FIELD1": 1806,
   "abv": 0.068,
   "ibu": 65,
   "Idaho": 1391,
   "name": "Sanitas Black IPA",
   "style": "American Black Ale",
   "brewery_id": 419,
   "ounces": 12
 },
 {
   "FIELD1": 1807,
   "abv": 0.08900000000000001,
   "ibu": 88,
   "Idaho": 2002,
   "name": "Giant DIPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 252,
   "ounces": 16
 },
 {
   "FIELD1": 1808,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 1683,
   "name": "Dread Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 252,
   "ounces": 12
 },
 {
   "FIELD1": 1809,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1362,
   "name": "Casinos IPA",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 252,
   "ounces": 16
 },
 {
   "FIELD1": 1810,
   "abv": 0.055,
   "ibu": 30,
   "Idaho": 1519,
   "name": "Saison 88",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 392,
   "ounces": 12
 },
 {
   "FIELD1": 1811,
   "abv": 0.071,
   "ibu": 95,
   "Idaho": 967,
   "name": "Black IPA",
   "style": "American Black Ale",
   "brewery_id": 392,
   "ounces": 12
 },
 {
   "FIELD1": 1812,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 599,
   "name": "Santa Fe Irish Red Ale",
   "style": "Irish Red Ale",
   "brewery_id": 392,
   "ounces": 12
 },
 {
   "FIELD1": 1813,
   "abv": null,
   "ibu": null,
   "Idaho": 307,
   "name": "Santa Fe Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 392,
   "ounces": 12
 },
 {
   "FIELD1": 1814,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 305,
   "name": "Imperial Java Stout",
   "style": "Russian Imperial Stout",
   "brewery_id": 392,
   "ounces": 12
 },
 {
   "FIELD1": 1815,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 304,
   "name": "Freestyle Pilsner",
   "style": "German Pilsener",
   "brewery_id": 392,
   "ounces": 12
 },
 {
   "FIELD1": 1816,
   "abv": 0.066,
   "ibu": null,
   "Idaho": 217,
   "name": "Happy Camper IPA",
   "style": "American IPA",
   "brewery_id": 392,
   "ounces": 12
 },
 {
   "FIELD1": 1817,
   "abv": 0.05,
   "ibu": 11,
   "Idaho": 1477,
   "name": "Oval Beach Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 398,
   "ounces": 16
 },
 {
   "FIELD1": 1818,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1503,
   "name": "Oak Aged Cider",
   "style": "Cider",
   "brewery_id": 394,
   "ounces": 12
 },
 {
   "FIELD1": 1819,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1466,
   "name": "Ginger Cider",
   "style": "Cider",
   "brewery_id": 394,
   "ounces": 12
 },
 {
   "FIELD1": 1820,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1245,
   "name": "Schilling Hard Cider",
   "style": "Cider",
   "brewery_id": 394,
   "ounces": 12
 },
 {
   "FIELD1": 1821,
   "abv": 0.05,
   "ibu": 45,
   "Idaho": 1324,
   "name": "Schlafly Yakima Wheat Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 428,
   "ounces": 12
 },
 {
   "FIELD1": 1822,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1323,
   "name": "Schlafly Black Lager",
   "style": "Schwarzbier",
   "brewery_id": 428,
   "ounces": 12
 },
 {
   "FIELD1": 1823,
   "abv": 0.045,
   "ibu": 30,
   "Idaho": 1078,
   "name": "Schlafly IPA",
   "style": "American IPA",
   "brewery_id": 428,
   "ounces": 12
 },
 {
   "FIELD1": 1824,
   "abv": 0.05,
   "ibu": 30,
   "Idaho": 1077,
   "name": "Schlafly American Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 428,
   "ounces": 12
 },
 {
   "FIELD1": 1825,
   "abv": 0.040999999999999995,
   "ibu": 16,
   "Idaho": 588,
   "name": "Schlafly Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 428,
   "ounces": 12
 },
 {
   "FIELD1": 1826,
   "abv": 0.045,
   "ibu": 17,
   "Idaho": 53,
   "name": "Schlafly Summer Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 428,
   "ounces": 12
 },
 {
   "FIELD1": 1827,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 815,
   "name": "Sea Dog Wild Blueberry Wheat Ale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 502,
   "ounces": 12
 },
 {
   "FIELD1": 1828,
   "abv": 0.07400000000000001,
   "ibu": 60,
   "Idaho": 1302,
   "name": "Blur India Pale Ale",
   "style": "American IPA",
   "brewery_id": 432,
   "ounces": 12
 },
 {
   "FIELD1": 1829,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1416,
   "name": "Dry Cider",
   "style": "Cider",
   "brewery_id": 411,
   "ounces": 16
 },
 {
   "FIELD1": 1830,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1415,
   "name": "Dry Hard Cider",
   "style": "Cider",
   "brewery_id": 411,
   "ounces": 16
 },
 {
   "FIELD1": 1831,
   "abv": 0.07,
   "ibu": 105,
   "Idaho": 918,
   "name": "Frankenlou's IPA",
   "style": "American IPA",
   "brewery_id": 494,
   "ounces": 16
 },
 {
   "FIELD1": 1832,
   "abv": 0.07,
   "ibu": 55,
   "Idaho": 917,
   "name": "Becky's Black Cat Porter",
   "style": "American Porter",
   "brewery_id": 494,
   "ounces": 16
 },
 {
   "FIELD1": 1833,
   "abv": 0.077,
   "ibu": 40,
   "Idaho": 2250,
   "name": "Seventh Son of a Seventh Son",
   "style": "American Strong Ale",
   "brewery_id": 183,
   "ounces": 16
 },
 {
   "FIELD1": 1834,
   "abv": 0.053,
   "ibu": 20,
   "Idaho": 1768,
   "name": "Stone Fort Brown Ale",
   "style": "English Brown Ale",
   "brewery_id": 183,
   "ounces": 16
 },
 {
   "FIELD1": 1835,
   "abv": 0.077,
   "ibu": 40,
   "Idaho": 1767,
   "name": "Seventh Son Hopped Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 183,
   "ounces": 16
 },
 {
   "FIELD1": 1836,
   "abv": 0.06,
   "ibu": 53,
   "Idaho": 1766,
   "name": "Humulus Nimbus Super Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 183,
   "ounces": 16
 },
 {
   "FIELD1": 1837,
   "abv": 0.07,
   "ibu": 68,
   "Idaho": 1765,
   "name": "Golden Ratio IPA",
   "style": "American IPA",
   "brewery_id": 183,
   "ounces": 16
 },
 {
   "FIELD1": 1838,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 2368,
   "name": "Black Hop IPA",
   "style": "American Black Ale",
   "brewery_id": 130,
   "ounces": 12
 },
 {
   "FIELD1": 1839,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 738,
   "name": "Archer's Ale (2004)",
   "style": "English Pale Ale",
   "brewery_id": 511,
   "ounces": 12
 },
 {
   "FIELD1": 1840,
   "abv": 0.069,
   "ibu": 65,
   "Idaho": 1539,
   "name": "Monkey Fist IPA",
   "style": "American IPA",
   "brewery_id": 385,
   "ounces": 12
 },
 {
   "FIELD1": 1841,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 975,
   "name": "Shipyard Summer Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 385,
   "ounces": 12
 },
 {
   "FIELD1": 1842,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 814,
   "name": "Pumpkinhead Ale",
   "style": "Pumpkin Ale",
   "brewery_id": 385,
   "ounces": 12
 },
 {
   "FIELD1": 1843,
   "abv": 0.051,
   "ibu": null,
   "Idaho": 727,
   "name": "Shipyard Export",
   "style": "American Blonde Ale",
   "brewery_id": 385,
   "ounces": 12
 },
 {
   "FIELD1": 1844,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2474,
   "name": "Nooner",
   "style": "German Pilsener",
   "brewery_id": 83,
   "ounces": 12
 },
 {
   "FIELD1": 1845,
   "abv": 0.07200000000000001,
   "ibu": 65,
   "Idaho": 2239,
   "name": "Torpedo",
   "style": "American IPA",
   "brewery_id": 83,
   "ounces": 12
 },
 {
   "FIELD1": 1846,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1919,
   "name": "Yonder Bock",
   "style": "Maibock / Helles Bock",
   "brewery_id": 83,
   "ounces": 12
 },
 {
   "FIELD1": 1847,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1918,
   "name": "CANfusion Rye Bock",
   "style": "Rye Beer",
   "brewery_id": 83,
   "ounces": 12
 },
 {
   "FIELD1": 1848,
   "abv": 0.055999999999999994,
   "ibu": 37,
   "Idaho": 1905,
   "name": "Sierra Nevada Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 83,
   "ounces": 16
 },
 {
   "FIELD1": 1849,
   "abv": 0.048,
   "ibu": 26,
   "Idaho": 1338,
   "name": "Old Chico Crystal Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 83,
   "ounces": 12
 },
 {
   "FIELD1": 1850,
   "abv": 0.05,
   "ibu": 28,
   "Idaho": 1295,
   "name": "Summerfest",
   "style": "Czech Pilsener",
   "brewery_id": 83,
   "ounces": 12
 },
 {
   "FIELD1": 1851,
   "abv": 0.07200000000000001,
   "ibu": 65,
   "Idaho": 426,
   "name": "Torpedo",
   "style": "American IPA",
   "brewery_id": 83,
   "ounces": 16
 },
 {
   "FIELD1": 1852,
   "abv": 0.055999999999999994,
   "ibu": 37,
   "Idaho": 400,
   "name": "Sierra Nevada Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 83,
   "ounces": 12
 },
 {
   "FIELD1": 1853,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 2353,
   "name": "Sietsema Red Label",
   "style": "Cider",
   "brewery_id": 137,
   "ounces": 16
 },
 {
   "FIELD1": 1854,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 212,
   "name": "Bear Ass Brown",
   "style": "American Brown Ale",
   "brewery_id": 551,
   "ounces": 12
 },
 {
   "FIELD1": 1855,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 161,
   "name": "Red Mountain Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 551,
   "ounces": 12
 },
 {
   "FIELD1": 1856,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 160,
   "name": "Ice Pick Ale",
   "style": "American IPA",
   "brewery_id": 551,
   "ounces": 12
 },
 {
   "FIELD1": 1857,
   "abv": 0.1,
   "ibu": 52,
   "Idaho": 2574,
   "name": "4Beans",
   "style": "Baltic Porter",
   "brewery_id": 46,
   "ounces": 12
 },
 {
   "FIELD1": 1858,
   "abv": 0.042,
   "ibu": 16,
   "Idaho": 2479,
   "name": "Jammer",
   "style": "Gose",
   "brewery_id": 46,
   "ounces": 12
 },
 {
   "FIELD1": 1859,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 2443,
   "name": "Abigale",
   "style": "Belgian Pale Ale",
   "brewery_id": 46,
   "ounces": 12
 },
 {
   "FIELD1": 1860,
   "abv": 0.032,
   "ibu": 7,
   "Idaho": 2266,
   "name": "Rad",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1861,
   "abv": 0.065,
   "ibu": 62,
   "Idaho": 2090,
   "name": "Bengali",
   "style": "American IPA",
   "brewery_id": 46,
   "ounces": 24
 },
 {
   "FIELD1": 1862,
   "abv": 0.047,
   "ibu": 50,
   "Idaho": 1962,
   "name": "Sensi Harvest",
   "style": "American Pale Ale (APA)",
   "brewery_id": 46,
   "ounces": 12
 },
 {
   "FIELD1": 1863,
   "abv": 0.099,
   "ibu": 111,
   "Idaho": 1696,
   "name": "Hi-Res",
   "style": "American Double / Imperial IPA",
   "brewery_id": 46,
   "ounces": 12
 },
 {
   "FIELD1": 1864,
   "abv": 0.07,
   "ibu": 70,
   "Idaho": 1608,
   "name": "Global Warmer",
   "style": "American Strong Ale",
   "brewery_id": 46,
   "ounces": 12
 },
 {
   "FIELD1": 1865,
   "abv": 0.067,
   "ibu": 74,
   "Idaho": 1591,
   "name": "Autumnation (2013)",
   "style": "American IPA",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1866,
   "abv": 0.054000000000000006,
   "ibu": 42,
   "Idaho": 1388,
   "name": "The Crisp",
   "style": "German Pilsener",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1867,
   "abv": 0.052000000000000005,
   "ibu": 34,
   "Idaho": 1387,
   "name": "Sweet Action",
   "style": "Cream Ale",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1868,
   "abv": 0.063,
   "ibu": 57,
   "Idaho": 1386,
   "name": "Righteous Ale",
   "style": "Rye Beer",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1869,
   "abv": 0.064,
   "ibu": 62,
   "Idaho": 1385,
   "name": "Bengali Tiger",
   "style": "American IPA",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1870,
   "abv": 0.099,
   "ibu": 85,
   "Idaho": 1020,
   "name": "3Beans",
   "style": "Baltic Porter",
   "brewery_id": 46,
   "ounces": 12
 },
 {
   "FIELD1": 1871,
   "abv": 0.059000000000000004,
   "ibu": 47,
   "Idaho": 778,
   "name": "Brownstone",
   "style": "American Brown Ale",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1872,
   "abv": 0.052000000000000005,
   "ibu": 11,
   "Idaho": 630,
   "name": "Apollo",
   "style": "American Pale Wheat Ale",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1873,
   "abv": 0.049,
   "ibu": 35,
   "Idaho": 629,
   "name": "Harbinger",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1874,
   "abv": 0.091,
   "ibu": 103,
   "Idaho": 628,
   "name": "Resin",
   "style": "American Double / Imperial IPA",
   "brewery_id": 46,
   "ounces": 12
 },
 {
   "FIELD1": 1875,
   "abv": 0.063,
   "ibu": 69,
   "Idaho": 525,
   "name": "Diesel",
   "style": "American Stout",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1876,
   "abv": 0.06,
   "ibu": 48,
   "Idaho": 512,
   "name": "Autumnation (2011-12) (2011)",
   "style": "Pumpkin Ale",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1877,
   "abv": 0.054000000000000006,
   "ibu": 42,
   "Idaho": 425,
   "name": "The Crisp (2011)",
   "style": "German Pilsener",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1878,
   "abv": 0.052000000000000005,
   "ibu": 34,
   "Idaho": 424,
   "name": "Sweet Action (2011)",
   "style": "Cream Ale",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1879,
   "abv": 0.063,
   "ibu": 57,
   "Idaho": 423,
   "name": "Righteous Ale (2011)",
   "style": "Rye Beer",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1880,
   "abv": 0.064,
   "ibu": 62,
   "Idaho": 422,
   "name": "Bengali Tiger (2011)",
   "style": "American IPA",
   "brewery_id": 46,
   "ounces": 16
 },
 {
   "FIELD1": 1881,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1942,
   "name": "Rudie Session IPA",
   "style": "American IPA",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1882,
   "abv": 0.07400000000000001,
   "ibu": null,
   "Idaho": 1708,
   "name": "Taster's Choice",
   "style": "Doppelbock",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1883,
   "abv": 0.068,
   "ibu": 65,
   "Idaho": 1521,
   "name": "Modus Hoperandi",
   "style": "American IPA",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1884,
   "abv": 0.057999999999999996,
   "ibu": 15,
   "Idaho": 1297,
   "name": "Estival Cream Stout",
   "style": "American Stout",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1885,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 1192,
   "name": "Vernal Minthe Stout",
   "style": "American Stout",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1886,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1013,
   "name": "Hibernal Vinifera Stout",
   "style": "Foreign / Export Stout",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1887,
   "abv": null,
   "ibu": null,
   "Idaho": 774,
   "name": "Autumnal Molé Stout",
   "style": "American Stout",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1888,
   "abv": 0.042,
   "ibu": 18,
   "Idaho": 386,
   "name": "Mexican Logger",
   "style": "American Pale Lager",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1889,
   "abv": 0.053,
   "ibu": null,
   "Idaho": 70,
   "name": "True Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1890,
   "abv": 0.061,
   "ibu": null,
   "Idaho": 69,
   "name": "Euphoria Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1891,
   "abv": 0.057,
   "ibu": 58,
   "Idaho": 68,
   "name": "ESB Special Ale",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1892,
   "abv": 0.068,
   "ibu": 65,
   "Idaho": 67,
   "name": "Modus Hoperandi",
   "style": "American IPA",
   "brewery_id": 264,
   "ounces": 12
 },
 {
   "FIELD1": 1893,
   "abv": 0.057999999999999996,
   "ibu": 39,
   "Idaho": 1792,
   "name": "Iron Butt Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 313,
   "ounces": 12
 },
 {
   "FIELD1": 1894,
   "abv": 0.071,
   "ibu": 92,
   "Idaho": 1609,
   "name": "Initial Point India Pale Ale",
   "style": "American IPA",
   "brewery_id": 313,
   "ounces": 12
 },
 {
   "FIELD1": 1895,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 2537,
   "name": "Monkey Dancing On A Razor Blade",
   "style": "Belgian IPA",
   "brewery_id": 64,
   "ounces": 24
 },
 {
   "FIELD1": 1896,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 2536,
   "name": "Tripel Deke",
   "style": "Tripel",
   "brewery_id": 64,
   "ounces": 24
 },
 {
   "FIELD1": 1897,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 30,
   "name": "Urban Wilderness Pale Ale",
   "style": "English Pale Ale",
   "brewery_id": 557,
   "ounces": 12
 },
 {
   "FIELD1": 1898,
   "abv": 0.06,
   "ibu": 70,
   "Idaho": 2305,
   "name": "Homefront IPA",
   "style": "American IPA",
   "brewery_id": 163,
   "ounces": 12
 },
 {
   "FIELD1": 1899,
   "abv": 0.055,
   "ibu": 16,
   "Idaho": 1588,
   "name": "Sly Fox Christmas Ale 2013",
   "style": "Winter Warmer",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1900,
   "abv": 0.055999999999999994,
   "ibu": 25,
   "Idaho": 1363,
   "name": "Grisette",
   "style": "Grisette",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1901,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 1211,
   "name": "360° India Pale Ale",
   "style": "American IPA",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1902,
   "abv": 0.049,
   "ibu": 18,
   "Idaho": 1123,
   "name": "Helles Golden Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1903,
   "abv": 0.055,
   "ibu": 16,
   "Idaho": 926,
   "name": "Sly Fox Christmas Ale 2012 (2012)",
   "style": "Winter Warmer",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1904,
   "abv": 0.084,
   "ibu": 90,
   "Idaho": 894,
   "name": "Odyssey Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1905,
   "abv": 0.057999999999999996,
   "ibu": 25,
   "Idaho": 166,
   "name": "Oktoberfest Lager",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1906,
   "abv": 0.07,
   "ibu": 113,
   "Idaho": 24,
   "name": "113 IPA",
   "style": "American IPA",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1907,
   "abv": 0.053,
   "ibu": 21,
   "Idaho": 23,
   "name": "Dunkel Lager",
   "style": "Munich Dunkel Lager",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1908,
   "abv": 0.055999999999999994,
   "ibu": 11,
   "Idaho": 22,
   "name": "Royal Weisse Ale",
   "style": "Hefeweizen",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1909,
   "abv": 0.049,
   "ibu": 44,
   "Idaho": 21,
   "name": "Pikeland Pils",
   "style": "German Pilsener",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1910,
   "abv": 0.051,
   "ibu": 40,
   "Idaho": 20,
   "name": "Phoenix Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 371,
   "ounces": 12
 },
 {
   "FIELD1": 1911,
   "abv": 0.07,
   "ibu": 88,
   "Idaho": 2407,
   "name": "Rule G IPA",
   "style": "American IPA",
   "brewery_id": 115,
   "ounces": 12
 },
 {
   "FIELD1": 1912,
   "abv": 0.057999999999999996,
   "ibu": 35,
   "Idaho": 2406,
   "name": "Murphy's Law",
   "style": "American Amber / Red Ale",
   "brewery_id": 115,
   "ounces": 12
 },
 {
   "FIELD1": 1913,
   "abv": 0.062,
   "ibu": 33,
   "Idaho": 2405,
   "name": "Alter Ego ",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 115,
   "ounces": 12
 },
 {
   "FIELD1": 1914,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2234,
   "name": "Monarch Pilsner",
   "style": "American Pilsner",
   "brewery_id": 191,
   "ounces": 12
 },
 {
   "FIELD1": 1915,
   "abv": 0.06,
   "ibu": 55,
   "Idaho": 1606,
   "name": "Snow King Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 191,
   "ounces": 12
 },
 {
   "FIELD1": 1916,
   "abv": 0.054000000000000006,
   "ibu": 36,
   "Idaho": 617,
   "name": "Zonker Stout",
   "style": "Foreign / Export Stout",
   "brewery_id": 191,
   "ounces": 12
 },
 {
   "FIELD1": 1917,
   "abv": 0.05,
   "ibu": 22,
   "Idaho": 407,
   "name": "OB-1 Organic Ale",
   "style": "English Brown Ale",
   "brewery_id": 191,
   "ounces": 12
 },
 {
   "FIELD1": 1918,
   "abv": 0.05,
   "ibu": 18,
   "Idaho": 406,
   "name": "Snake River Lager",
   "style": "Vienna Lager",
   "brewery_id": 191,
   "ounces": 12
 },
 {
   "FIELD1": 1919,
   "abv": 0.052000000000000005,
   "ibu": 32,
   "Idaho": 402,
   "name": "Snake River Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 191,
   "ounces": 12
 },
 {
   "FIELD1": 1920,
   "abv": 0.068,
   "ibu": 60,
   "Idaho": 393,
   "name": "Pako’s EyePA",
   "style": "American IPA",
   "brewery_id": 191,
   "ounces": 12
 },
 {
   "FIELD1": 1921,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1798,
   "name": "Thanksgiving Ale",
   "style": "Kölsch",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1922,
   "abv": 0.092,
   "ibu": null,
   "Idaho": 1655,
   "name": "Double Dagger Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1923,
   "abv": 0.063,
   "ibu": 100,
   "Idaho": 1596,
   "name": "Dagger Falls IPA",
   "style": "American IPA",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1924,
   "abv": 0.063,
   "ibu": 100,
   "Idaho": 1595,
   "name": "Dagger Falls IPA",
   "style": "American IPA",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1925,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1482,
   "name": "Socktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 309,
   "ounces": 16
 },
 {
   "FIELD1": 1926,
   "abv": 0.079,
   "ibu": null,
   "Idaho": 1447,
   "name": "Hopnoxious Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1927,
   "abv": 0.099,
   "ibu": null,
   "Idaho": 1425,
   "name": "Barrel Aged Seven Devils Imperial Stout",
   "style": "American Double / Imperial Stout",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1928,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1424,
   "name": "Boise Co-Op Two Score Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 309,
   "ounces": 16
 },
 {
   "FIELD1": 1929,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1298,
   "name": "Sockeye Belgian Style Summer Ale",
   "style": "Witbier",
   "brewery_id": 309,
   "ounces": 16
 },
 {
   "FIELD1": 1930,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 1181,
   "name": "Sockeye Maibock",
   "style": "Maibock / Helles Bock",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1931,
   "abv": 0.099,
   "ibu": 100,
   "Idaho": 1160,
   "name": "Old Devil's Tooth",
   "style": "American Barleywine",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1932,
   "abv": 0.043,
   "ibu": null,
   "Idaho": 1152,
   "name": "Galena Golden",
   "style": "American Blonde Ale",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1933,
   "abv": 0.052000000000000005,
   "ibu": 32,
   "Idaho": 1151,
   "name": "Hell-Diver Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1934,
   "abv": 0.046,
   "ibu": 12,
   "Idaho": 1150,
   "name": "Woolybugger Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1935,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 1076,
   "name": "Power House Porter",
   "style": "American Porter",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1936,
   "abv": 0.084,
   "ibu": 90,
   "Idaho": 995,
   "name": "Winterfest",
   "style": "American Strong Ale",
   "brewery_id": 309,
   "ounces": 16
 },
 {
   "FIELD1": 1937,
   "abv": 0.063,
   "ibu": 100,
   "Idaho": 879,
   "name": "Dagger Falls IPA",
   "style": "American IPA",
   "brewery_id": 309,
   "ounces": 12
 },
 {
   "FIELD1": 1938,
   "abv": 0.07,
   "ibu": 18,
   "Idaho": 1972,
   "name": "LuckenBock",
   "style": "Bock",
   "brewery_id": 257,
   "ounces": 16
 },
 {
   "FIELD1": 1939,
   "abv": 0.055,
   "ibu": 40,
   "Idaho": 1971,
   "name": "Texas Pale Ale (TPA)",
   "style": "American IPA",
   "brewery_id": 257,
   "ounces": 16
 },
 {
   "FIELD1": 1940,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1970,
   "name": "6 String Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 257,
   "ounces": 16
 },
 {
   "FIELD1": 1941,
   "abv": 0.05,
   "ibu": 22,
   "Idaho": 1969,
   "name": "Kol' Beer",
   "style": "Kölsch",
   "brewery_id": 257,
   "ounces": 16
 },
 {
   "FIELD1": 1942,
   "abv": 0.035,
   "ibu": null,
   "Idaho": 2024,
   "name": "Montauk Light",
   "style": "Light Lager",
   "brewery_id": 249,
   "ounces": 12
 },
 {
   "FIELD1": 1943,
   "abv": 0.048,
   "ibu": 32,
   "Idaho": 1283,
   "name": "Na Zdraví Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 436,
   "ounces": 16
 },
 {
   "FIELD1": 1944,
   "abv": 0.055,
   "ibu": 65,
   "Idaho": 1282,
   "name": "Nice Rack IPA",
   "style": "American IPA",
   "brewery_id": 436,
   "ounces": 16
 },
 {
   "FIELD1": 1945,
   "abv": 0.075,
   "ibu": 72,
   "Idaho": 2362,
   "name": "2014 IPA Cicada Series",
   "style": "American IPA",
   "brewery_id": 133,
   "ounces": 16
 },
 {
   "FIELD1": 1946,
   "abv": 0.077,
   "ibu": 65,
   "Idaho": 2346,
   "name": "Sinister Minister Black IPA",
   "style": "American IPA",
   "brewery_id": 133,
   "ounces": 16
 },
 {
   "FIELD1": 1947,
   "abv": 0.053,
   "ibu": 45,
   "Idaho": 2320,
   "name": "Jack the Sipper",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 133,
   "ounces": 12
 },
 {
   "FIELD1": 1948,
   "abv": 0.057999999999999996,
   "ibu": 60,
   "Idaho": 2297,
   "name": "Devil's Harvest Extra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 133,
   "ounces": 12
 },
 {
   "FIELD1": 1949,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 2296,
   "name": "Suzy B Dirty Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 133,
   "ounces": 12
 },
 {
   "FIELD1": 1950,
   "abv": 0.08,
   "ibu": 80,
   "Idaho": 1745,
   "name": "Mississippi Fire Ant",
   "style": "American Amber / Red Ale",
   "brewery_id": 133,
   "ounces": 16
 },
 {
   "FIELD1": 1951,
   "abv": 0.057999999999999996,
   "ibu": 40,
   "Idaho": 1120,
   "name": "Hipster Breakfast",
   "style": "Oatmeal Stout",
   "brewery_id": 133,
   "ounces": 16
 },
 {
   "FIELD1": 1952,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 1118,
   "name": "Suzy B Dirty Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 133,
   "ounces": 16
 },
 {
   "FIELD1": 1953,
   "abv": 0.057999999999999996,
   "ibu": 60,
   "Idaho": 1117,
   "name": "Devil's Harvest Extra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 133,
   "ounces": 16
 },
 {
   "FIELD1": 1954,
   "abv": 0.065,
   "ibu": 45,
   "Idaho": 2387,
   "name": "Pine Belt Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1955,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2267,
   "name": "Walloon",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1956,
   "abv": 0.069,
   "ibu": 23,
   "Idaho": 1740,
   "name": "Le Mort Vivant",
   "style": "Bière de Garde",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1957,
   "abv": 0.085,
   "ibu": 110,
   "Idaho": 1728,
   "name": "Red Cockaded Ale",
   "style": "American Double / Imperial IPA",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1958,
   "abv": 0.092,
   "ibu": 100,
   "Idaho": 1497,
   "name": "Valkyrie Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1959,
   "abv": 0.085,
   "ibu": 110,
   "Idaho": 1011,
   "name": "Red Cockaded Ale (2013)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1960,
   "abv": 0.07200000000000001,
   "ibu": 40,
   "Idaho": 1010,
   "name": "Old Potentate",
   "style": "Old Ale",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1961,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 856,
   "name": "Bombshell Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 118,
   "ounces": 16
 },
 {
   "FIELD1": 1962,
   "abv": 0.099,
   "ibu": 100,
   "Idaho": 853,
   "name": "PRO-AM (2012) (2012)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1963,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 691,
   "name": "Walloon (2014)",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1964,
   "abv": 0.069,
   "ibu": 23,
   "Idaho": 555,
   "name": "Le Mort Vivant (2011)",
   "style": "Bière de Garde",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1965,
   "abv": 0.083,
   "ibu": 50,
   "Idaho": 46,
   "name": "Buried Hatchet Stout",
   "style": "Foreign / Export Stout",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1966,
   "abv": 0.065,
   "ibu": 45,
   "Idaho": 45,
   "name": "Pine Belt Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 118,
   "ounces": 16
 },
 {
   "FIELD1": 1967,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 44,
   "name": "Bombshell Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 118,
   "ounces": 12
 },
 {
   "FIELD1": 1968,
   "abv": 0.047,
   "ibu": 35,
   "Idaho": 2486,
   "name": "Baby Daddy Session IPA",
   "style": "American IPA",
   "brewery_id": 78,
   "ounces": 12
 },
 {
   "FIELD1": 1969,
   "abv": null,
   "ibu": null,
   "Idaho": 763,
   "name": "Hopluia (2004)",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 508,
   "ounces": 16
 },
 {
   "FIELD1": 1970,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 2271,
   "name": "Ball & Chain (2014)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 175,
   "ounces": 16
 },
 {
   "FIELD1": 1971,
   "abv": 0.096,
   "ibu": null,
   "Idaho": 2206,
   "name": "Bitter Biker Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 175,
   "ounces": 16
 },
 {
   "FIELD1": 1972,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 2136,
   "name": "God Damn Pigeon Porter",
   "style": "American Porter",
   "brewery_id": 175,
   "ounces": 16
 },
 {
   "FIELD1": 1973,
   "abv": 0.079,
   "ibu": null,
   "Idaho": 2135,
   "name": "Working for the Weekend",
   "style": "American Double / Imperial IPA",
   "brewery_id": 175,
   "ounces": 16
 },
 {
   "FIELD1": 1974,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2134,
   "name": "Angry Adam",
   "style": "American Amber / Red Ale",
   "brewery_id": 175,
   "ounces": 16
 },
 {
   "FIELD1": 1975,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2109,
   "name": "Freedom Fries",
   "style": "American Stout",
   "brewery_id": 175,
   "ounces": 16
 },
 {
   "FIELD1": 1976,
   "abv": 0.096,
   "ibu": null,
   "Idaho": 1821,
   "name": "Bitter Biker Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 175,
   "ounces": 12
 },
 {
   "FIELD1": 1977,
   "abv": 0.073,
   "ibu": null,
   "Idaho": 1820,
   "name": "Ghost Bike Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 175,
   "ounces": 16
 },
 {
   "FIELD1": 1978,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 1819,
   "name": "Spiteful IPA",
   "style": "American IPA",
   "brewery_id": 175,
   "ounces": 12
 },
 {
   "FIELD1": 1979,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1634,
   "name": "Alley Time",
   "style": "American Pale Ale (APA)",
   "brewery_id": 175,
   "ounces": 12
 },
 {
   "FIELD1": 1980,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 1633,
   "name": "Fat Badger",
   "style": "Irish Red Ale",
   "brewery_id": 175,
   "ounces": 12
 },
 {
   "FIELD1": 1981,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1632,
   "name": "In the Weeds",
   "style": "American Pale Wheat Ale",
   "brewery_id": 175,
   "ounces": 12
 },
 {
   "FIELD1": 1982,
   "abv": 0.05,
   "ibu": 22,
   "Idaho": 855,
   "name": "Special Amber",
   "style": "Vienna Lager",
   "brewery_id": 498,
   "ounces": 12
 },
 {
   "FIELD1": 1983,
   "abv": 0.05,
   "ibu": 22,
   "Idaho": 445,
   "name": "Special Amber",
   "style": "Vienna Lager",
   "brewery_id": 498,
   "ounces": 12
 },
 {
   "FIELD1": 1984,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 1587,
   "name": "Seven Gates Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 372,
   "ounces": 12
 },
 {
   "FIELD1": 1985,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2242,
   "name": "Gunga Din",
   "style": "Cider",
   "brewery_id": 186,
   "ounces": 16
 },
 {
   "FIELD1": 1986,
   "abv": 0.042,
   "ibu": 20,
   "Idaho": 1544,
   "name": "Starr Pils",
   "style": "German Pilsener",
   "brewery_id": 383,
   "ounces": 12
 },
 {
   "FIELD1": 1987,
   "abv": 0.065,
   "ibu": 52,
   "Idaho": 1205,
   "name": "Northern Lights India Pale Ale",
   "style": "American IPA",
   "brewery_id": 383,
   "ounces": 16
 },
 {
   "FIELD1": 1988,
   "abv": 0.048,
   "ibu": 12,
   "Idaho": 369,
   "name": "Festie",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 383,
   "ounces": 12
 },
 {
   "FIELD1": 1989,
   "abv": 0.065,
   "ibu": 52,
   "Idaho": 368,
   "name": "Northern Lights India Pale Ale",
   "style": "American IPA",
   "brewery_id": 383,
   "ounces": 12
 },
 {
   "FIELD1": 1990,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 2386,
   "name": "Third Eye Enlightened Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 119,
   "ounces": 12
 },
 {
   "FIELD1": 1991,
   "abv": 0.049,
   "ibu": 17,
   "Idaho": 92,
   "name": "Colorado Kölsch",
   "style": "Kölsch",
   "brewery_id": 119,
   "ounces": 12
 },
 {
   "FIELD1": 1992,
   "abv": 0.057,
   "ibu": 25,
   "Idaho": 91,
   "name": "Steam Engine Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 119,
   "ounces": 12
 },
 {
   "FIELD1": 1993,
   "abv": 0.065,
   "ibu": 65,
   "Idaho": 90,
   "name": "Third Eye Pale Ale",
   "style": "American IPA",
   "brewery_id": 119,
   "ounces": 12
 },
 {
   "FIELD1": 1994,
   "abv": 0.047,
   "ibu": 9,
   "Idaho": 2366,
   "name": "Point Special (Current)",
   "style": "American Adjunct Lager",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 1995,
   "abv": 0.047,
   "ibu": 9,
   "Idaho": 2365,
   "name": "Point Special",
   "style": "American Adjunct Lager",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 1996,
   "abv": 0.054000000000000006,
   "ibu": 33,
   "Idaho": 2270,
   "name": "Point Cascade Pale Ale (2013)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 1997,
   "abv": 0.047,
   "ibu": 9,
   "Idaho": 2228,
   "name": "Point Special",
   "style": "American Adjunct Lager",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 1998,
   "abv": 0.052000000000000005,
   "ibu": 9,
   "Idaho": 2151,
   "name": "Onyx Black Ale",
   "style": "American Black Ale",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 1999,
   "abv": 0.063,
   "ibu": 64,
   "Idaho": 2150,
   "name": "Beyond The Pale IPA",
   "style": "American IPA",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2000,
   "abv": 0.047,
   "ibu": 9,
   "Idaho": 2122,
   "name": "Point Special (2013)",
   "style": "American Adjunct Lager",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2001,
   "abv": 0.047,
   "ibu": 9,
   "Idaho": 2121,
   "name": "Point Special (2012)",
   "style": "American Adjunct Lager",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2002,
   "abv": 0.047,
   "ibu": 9,
   "Idaho": 2115,
   "name": "Point Special Lager",
   "style": "American Adjunct Lager",
   "brewery_id": 131,
   "ounces": 16
 },
 {
   "FIELD1": 2003,
   "abv": 0.062,
   "ibu": null,
   "Idaho": 1450,
   "name": "St. Benedict's Winter Ale",
   "style": "Winter Warmer",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2004,
   "abv": 0.057,
   "ibu": 15,
   "Idaho": 1357,
   "name": "Point Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 131,
   "ounces": 16
 },
 {
   "FIELD1": 2005,
   "abv": 0.052000000000000005,
   "ibu": 7,
   "Idaho": 1225,
   "name": "Point Nude Beach Summer Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 131,
   "ounces": 16
 },
 {
   "FIELD1": 2006,
   "abv": 0.05,
   "ibu": 7,
   "Idaho": 816,
   "name": "Point Nude Beach Summer Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2007,
   "abv": 0.05,
   "ibu": 7,
   "Idaho": 772,
   "name": "Point Nude Beach Summer Wheat (2011)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2008,
   "abv": 0.035,
   "ibu": null,
   "Idaho": 684,
   "name": "Drop Dead Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2009,
   "abv": 0.049,
   "ibu": 13,
   "Idaho": 650,
   "name": "Three Kings Ale",
   "style": "Kölsch",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2010,
   "abv": 0.057,
   "ibu": 15,
   "Idaho": 456,
   "name": "Point Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2011,
   "abv": 0.054000000000000006,
   "ibu": 32,
   "Idaho": 357,
   "name": "2012 Black Ale",
   "style": "American Brown Ale",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2012,
   "abv": 0.05,
   "ibu": 7,
   "Idaho": 141,
   "name": "Point Nude Beach Summer Wheat (2010)",
   "style": "American Pale Wheat Ale",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2013,
   "abv": 0.054000000000000006,
   "ibu": 33,
   "Idaho": 140,
   "name": "Point Cascade Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2014,
   "abv": 0.047,
   "ibu": 14,
   "Idaho": 139,
   "name": "Point Amber Classic",
   "style": "American Amber / Red Lager",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2015,
   "abv": 0.047,
   "ibu": 9,
   "Idaho": 138,
   "name": "Point Special Lager",
   "style": "American Adjunct Lager",
   "brewery_id": 131,
   "ounces": 12
 },
 {
   "FIELD1": 2016,
   "abv": 0.051,
   "ibu": 31,
   "Idaho": 953,
   "name": "Wisco Disco",
   "style": "American Amber / Red Ale",
   "brewery_id": 486,
   "ounces": 16
 },
 {
   "FIELD1": 2017,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1983,
   "name": "Brontide",
   "style": "American Black Ale",
   "brewery_id": 255,
   "ounces": 12
 },
 {
   "FIELD1": 2018,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1631,
   "name": "Brontide",
   "style": "American Black Ale",
   "brewery_id": 255,
   "ounces": 12
 },
 {
   "FIELD1": 2019,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1344,
   "name": "Classique",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 255,
   "ounces": 12
 },
 {
   "FIELD1": 2020,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 922,
   "name": "Sunsplash Golden Ale (2004)",
   "style": "American Blonde Ale",
   "brewery_id": 492,
   "ounces": 12
 },
 {
   "FIELD1": 2021,
   "abv": 0.051,
   "ibu": 25,
   "Idaho": 1410,
   "name": "Sand Island Lighthouse",
   "style": "Kölsch",
   "brewery_id": 412,
   "ounces": 12
 },
 {
   "FIELD1": 2022,
   "abv": 0.05,
   "ibu": 30,
   "Idaho": 925,
   "name": "Lily Flagg Milk Stout",
   "style": "Milk / Sweet Stout",
   "brewery_id": 412,
   "ounces": 12
 },
 {
   "FIELD1": 2023,
   "abv": 0.07200000000000001,
   "ibu": 70,
   "Idaho": 637,
   "name": "Monkeynaut IPA",
   "style": "American IPA",
   "brewery_id": 412,
   "ounces": 12
 },
 {
   "FIELD1": 2024,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2369,
   "name": "Straub Beer (Current)",
   "style": "American Adjunct Lager",
   "brewery_id": 129,
   "ounces": 12
 },
 {
   "FIELD1": 2025,
   "abv": 0.040999999999999995,
   "ibu": 8,
   "Idaho": 2233,
   "name": "American Lager",
   "style": "American Adjunct Lager",
   "brewery_id": 129,
   "ounces": 12
 },
 {
   "FIELD1": 2026,
   "abv": 0.040999999999999995,
   "ibu": 8,
   "Idaho": 2232,
   "name": "American Amber",
   "style": "American Amber / Red Lager",
   "brewery_id": 129,
   "ounces": 12
 },
 {
   "FIELD1": 2027,
   "abv": 0.032,
   "ibu": 13,
   "Idaho": 2231,
   "name": "American Light",
   "style": "Light Lager",
   "brewery_id": 129,
   "ounces": 12
 },
 {
   "FIELD1": 2028,
   "abv": 0.053,
   "ibu": 49,
   "Idaho": 2352,
   "name": "Extra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 138,
   "ounces": 12
 },
 {
   "FIELD1": 2029,
   "abv": 0.053,
   "ibu": 40,
   "Idaho": 2549,
   "name": "Make It So",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 58,
   "ounces": 12
 },
 {
   "FIELD1": 2030,
   "abv": 0.047,
   "ibu": 55,
   "Idaho": 2473,
   "name": "Hopvale Organic Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 58,
   "ounces": 16
 },
 {
   "FIELD1": 2031,
   "abv": 0.083,
   "ibu": 100,
   "Idaho": 2415,
   "name": "Unchained #18 Hop Silo",
   "style": "American Double / Imperial IPA",
   "brewery_id": 58,
   "ounces": 16
 },
 {
   "FIELD1": 2032,
   "abv": 0.052000000000000005,
   "ibu": 29,
   "Idaho": 2605,
   "name": "Tip Off",
   "style": "Altbier",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2033,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 2215,
   "name": "Java Mac",
   "style": "Scottish Ale",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2034,
   "abv": 0.054000000000000006,
   "ibu": 23,
   "Idaho": 2164,
   "name": "Cowbell",
   "style": "American Porter",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2035,
   "abv": 0.057999999999999996,
   "ibu": 20,
   "Idaho": 2085,
   "name": "Hop Up Offa That Brett (2014)",
   "style": "Belgian Pale Ale",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2036,
   "abv": 0.083,
   "ibu": 23,
   "Idaho": 2084,
   "name": "PV Muckle (2013)",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2037,
   "abv": 0.099,
   "ibu": 36,
   "Idaho": 2083,
   "name": "Bourbon Barrel Batch 666: Sympathy for the Devil",
   "style": "Belgian Dark Ale",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2038,
   "abv": 0.09,
   "ibu": 30,
   "Idaho": 2082,
   "name": "Whip Fight",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2039,
   "abv": 0.053,
   "ibu": 23,
   "Idaho": 2081,
   "name": "Port Barrel Wee Mac ",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2040,
   "abv": 0.064,
   "ibu": 75,
   "Idaho": 2001,
   "name": "Fistful Of Hops Red",
   "style": "American IPA",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2041,
   "abv": 0.063,
   "ibu": 75,
   "Idaho": 2000,
   "name": "Fistful of Hops Orange",
   "style": "American IPA",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2042,
   "abv": 0.064,
   "ibu": 75,
   "Idaho": 1999,
   "name": "Fistful Of Hops Blue",
   "style": "American IPA",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2043,
   "abv": 0.064,
   "ibu": 75,
   "Idaho": 1996,
   "name": "Fistful of Hops Green",
   "style": "American IPA",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2044,
   "abv": null,
   "ibu": null,
   "Idaho": 1948,
   "name": "30 Min Coma",
   "style": "Belgian IPA",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2045,
   "abv": 0.09,
   "ibu": 30,
   "Idaho": 1656,
   "name": "Wee Muckle",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2046,
   "abv": 0.065,
   "ibu": 55,
   "Idaho": 1599,
   "name": "Royal Brat",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2047,
   "abv": 0.075,
   "ibu": 77,
   "Idaho": 1420,
   "name": "Grapefruit Jungle (GFJ)",
   "style": "American IPA",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2048,
   "abv": 0.055999999999999994,
   "ibu": 50,
   "Idaho": 1389,
   "name": "Osiris Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2049,
   "abv": 0.099,
   "ibu": 75,
   "Idaho": 1367,
   "name": "Bourbon Barrel Aged Timmie",
   "style": "Russian Imperial Stout",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2050,
   "abv": 0.063,
   "ibu": 23,
   "Idaho": 1366,
   "name": "Stupid Sexy Flanders",
   "style": "Flanders Oud Bruin",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2051,
   "abv": null,
   "ibu": null,
   "Idaho": 1347,
   "name": "Bourbon Barrel Cowbell",
   "style": "American Porter",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2052,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 1314,
   "name": "Popcorn Pilsner",
   "style": "German Pilsener",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2053,
   "abv": 0.071,
   "ibu": 27,
   "Idaho": 1128,
   "name": "Ring of Dingle",
   "style": "Irish Dry Stout",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2054,
   "abv": 0.054000000000000006,
   "ibu": 23,
   "Idaho": 1127,
   "name": "Bourbon Barrel Wee Mac",
   "style": "Scottish Ale",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2055,
   "abv": 0.099,
   "ibu": 60,
   "Idaho": 1049,
   "name": "Bourbon Barrel Johan",
   "style": "English Barleywine",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2056,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 934,
   "name": "The Deuce",
   "style": "American Brown Ale",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2057,
   "abv": 0.09,
   "ibu": 24,
   "Idaho": 923,
   "name": "The Velvet Fog",
   "style": "Quadrupel (Quad)",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2058,
   "abv": 0.055,
   "ibu": 23,
   "Idaho": 874,
   "name": "Sun King Oktoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2059,
   "abv": 0.052000000000000005,
   "ibu": 24,
   "Idaho": 739,
   "name": "Indianapolis Indians Lager",
   "style": "Dortmunder / Export Lager",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2060,
   "abv": 0.052000000000000005,
   "ibu": 24,
   "Idaho": 698,
   "name": "Indians Victory Lager (2012)",
   "style": "Dortmunder / Export Lager",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2061,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 660,
   "name": "Chaka",
   "style": "Belgian Strong Pale Ale",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2062,
   "abv": 0.091,
   "ibu": 91,
   "Idaho": 651,
   "name": "Isis",
   "style": "American Double / Imperial IPA",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2063,
   "abv": 0.09,
   "ibu": 30,
   "Idaho": 584,
   "name": "Wee Muckle (2011)",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2064,
   "abv": 0.075,
   "ibu": 77,
   "Idaho": 532,
   "name": "Grapefruit Jungle (GFJ) (2011)",
   "style": "American IPA",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2065,
   "abv": 0.055,
   "ibu": 23,
   "Idaho": 526,
   "name": "Sun King Oktoberfest (2011)",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2066,
   "abv": 0.099,
   "ibu": 60,
   "Idaho": 394,
   "name": "Johan the Barleywine",
   "style": "English Barleywine",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2067,
   "abv": 0.054000000000000006,
   "ibu": 23,
   "Idaho": 213,
   "name": "Wee Mac Scottish-Style Ale",
   "style": "Scottish Ale",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2068,
   "abv": 0.053,
   "ibu": 20,
   "Idaho": 55,
   "name": "Sunlight Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2069,
   "abv": 0.055999999999999994,
   "ibu": 50,
   "Idaho": 54,
   "name": "Osiris Pale Ale (2010)",
   "style": "American Pale Ale (APA)",
   "brewery_id": 25,
   "ounces": 16
 },
 {
   "FIELD1": 2070,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1207,
   "name": "Dam Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 455,
   "ounces": 12
 },
 {
   "FIELD1": 2071,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1206,
   "name": "Red Clay IPA",
   "style": "American IPA",
   "brewery_id": 455,
   "ounces": 12
 },
 {
   "FIELD1": 2072,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 2543,
   "name": "Todd the Axe Man",
   "style": "American IPA",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2073,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 2409,
   "name": "Doomtree",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2074,
   "abv": 0.099,
   "ibu": 85,
   "Idaho": 1739,
   "name": "BLAKKR",
   "style": "American Black Ale",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2075,
   "abv": 0.073,
   "ibu": 69,
   "Idaho": 1112,
   "name": "Overrated! West Coast Style IPA",
   "style": "American IPA",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2076,
   "abv": 0.075,
   "ibu": 90,
   "Idaho": 329,
   "name": "WET",
   "style": "American IPA",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2077,
   "abv": 0.04,
   "ibu": 37,
   "Idaho": 19,
   "name": "Bitter Brewer",
   "style": "English Bitter",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2078,
   "abv": 0.055,
   "ibu": 34,
   "Idaho": 18,
   "name": "SurlyFest",
   "style": "Rye Beer",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2079,
   "abv": 0.051,
   "ibu": 45,
   "Idaho": 17,
   "name": "Coffee Bender",
   "style": "American Brown Ale",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2080,
   "abv": 0.051,
   "ibu": 45,
   "Idaho": 16,
   "name": "Bender",
   "style": "American Brown Ale",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2081,
   "abv": 0.09699999999999999,
   "ibu": 120,
   "Idaho": 15,
   "name": "Abrasive Ale",
   "style": "American Double / Imperial IPA",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2082,
   "abv": 0.051,
   "ibu": 20,
   "Idaho": 14,
   "name": "Hell",
   "style": "Keller Bier / Zwickel Bier",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2083,
   "abv": 0.067,
   "ibu": 33,
   "Idaho": 13,
   "name": "CynicAle",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2084,
   "abv": 0.062,
   "ibu": 99,
   "Idaho": 12,
   "name": "Furious",
   "style": "American IPA",
   "brewery_id": 61,
   "ounces": 16
 },
 {
   "FIELD1": 2085,
   "abv": 0.073,
   "ibu": 50,
   "Idaho": 1242,
   "name": "Big Nose",
   "style": "American IPA",
   "brewery_id": 447,
   "ounces": 12
 },
 {
   "FIELD1": 2086,
   "abv": 0.05,
   "ibu": 10,
   "Idaho": 1241,
   "name": "Cotton Mouth",
   "style": "Witbier",
   "brewery_id": 447,
   "ounces": 12
 },
 {
   "FIELD1": 2087,
   "abv": 0.055999999999999994,
   "ibu": 35,
   "Idaho": 1240,
   "name": "Stump Knocker Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 447,
   "ounces": 12
 },
 {
   "FIELD1": 2088,
   "abv": 0.05,
   "ibu": 38,
   "Idaho": 1239,
   "name": "Midnight Oil",
   "style": "Oatmeal Stout",
   "brewery_id": 447,
   "ounces": 12
 },
 {
   "FIELD1": 2089,
   "abv": 0.059000000000000004,
   "ibu": 18,
   "Idaho": 1238,
   "name": "Wild Night",
   "style": "Cream Ale",
   "brewery_id": 447,
   "ounces": 12
 },
 {
   "FIELD1": 2090,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1554,
   "name": "Bermuda Triangle Ginger Beer",
   "style": "Herbed / Spiced Beer",
   "brewery_id": 381,
   "ounces": 12
 },
 {
   "FIELD1": 2091,
   "abv": 0.055,
   "ibu": 35,
   "Idaho": 2568,
   "name": "Take Two Pils",
   "style": "German Pilsener",
   "brewery_id": 49,
   "ounces": 12
 },
 {
   "FIELD1": 2092,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 2551,
   "name": "Waterkeeper",
   "style": "Hefeweizen",
   "brewery_id": 49,
   "ounces": 12
 },
 {
   "FIELD1": 2093,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 1710,
   "name": "SweetWater IPA",
   "style": "American IPA",
   "brewery_id": 49,
   "ounces": 12
 },
 {
   "FIELD1": 2094,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 1709,
   "name": "420 Extra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 49,
   "ounces": 12
 },
 {
   "FIELD1": 2095,
   "abv": 0.08,
   "ibu": 95,
   "Idaho": 1229,
   "name": "Dodgy Knight Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 449,
   "ounces": 12
 },
 {
   "FIELD1": 2096,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1164,
   "name": "TailGate Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 449,
   "ounces": 12
 },
 {
   "FIELD1": 2097,
   "abv": 0.05,
   "ibu": 44,
   "Idaho": 663,
   "name": "TailGate IPA",
   "style": "American IPA",
   "brewery_id": 449,
   "ounces": 24
 },
 {
   "FIELD1": 2098,
   "abv": 0.05,
   "ibu": 44,
   "Idaho": 662,
   "name": "TailGate IPA",
   "style": "American IPA",
   "brewery_id": 449,
   "ounces": 12
 },
 {
   "FIELD1": 2099,
   "abv": 0.049,
   "ibu": 28,
   "Idaho": 623,
   "name": "TailGate Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 449,
   "ounces": 24
 },
 {
   "FIELD1": 2100,
   "abv": 0.05,
   "ibu": 19,
   "Idaho": 622,
   "name": "Blacktop Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 449,
   "ounces": 24
 },
 {
   "FIELD1": 2101,
   "abv": 0.05,
   "ibu": 19,
   "Idaho": 362,
   "name": "Blacktop Blonde",
   "style": "American Blonde Ale",
   "brewery_id": 449,
   "ounces": 12
 },
 {
   "FIELD1": 2102,
   "abv": 0.049,
   "ibu": 28,
   "Idaho": 361,
   "name": "TailGate Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 449,
   "ounces": 12
 },
 {
   "FIELD1": 2103,
   "abv": 0.085,
   "ibu": 34,
   "Idaho": 2575,
   "name": "Wooden Rooster",
   "style": "Tripel",
   "brewery_id": 45,
   "ounces": 16.9
 },
 {
   "FIELD1": 2104,
   "abv": 0.048,
   "ibu": 20,
   "Idaho": 2555,
   "name": "Ginger Peach Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2105,
   "abv": 0.062,
   "ibu": 35,
   "Idaho": 1736,
   "name": "Zombie Monkie",
   "style": "American Porter",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2106,
   "abv": 0.055999999999999994,
   "ibu": 20,
   "Idaho": 1196,
   "name": "Wild Plum Farmhouse Ale",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2107,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 1063,
   "name": "Vanilla Bean Buffalo Sweat",
   "style": "Oatmeal Stout",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2108,
   "abv": 0.068,
   "ibu": 110,
   "Idaho": 1017,
   "name": "Ethos IPA",
   "style": "American IPA",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2109,
   "abv": 0.044000000000000004,
   "ibu": 12,
   "Idaho": 1009,
   "name": "Tallgrass Pub Ale",
   "style": "American Brown Ale",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2110,
   "abv": 0.07200000000000001,
   "ibu": 93,
   "Idaho": 912,
   "name": "Oasis",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2111,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 765,
   "name": "Buffalo Sweat",
   "style": "Milk / Sweet Stout",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2112,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 676,
   "name": "Halcyon Unfiltered Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2113,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 595,
   "name": "8-Bit Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2114,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 537,
   "name": "Velvet Rooster",
   "style": "Tripel",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2115,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 412,
   "name": "Halcyon Unfiltered Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 45,
   "ounces": 12
 },
 {
   "FIELD1": 2116,
   "abv": 0.05,
   "ibu": 16,
   "Idaho": 105,
   "name": "Köld Lager (2010)",
   "style": "German Pilsener",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2117,
   "abv": 0.07200000000000001,
   "ibu": 93,
   "Idaho": 104,
   "name": "Oasis (2010)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2118,
   "abv": 0.044000000000000004,
   "ibu": 22,
   "Idaho": 103,
   "name": "Tallgrass Ale",
   "style": "American Brown Ale",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2119,
   "abv": 0.05,
   "ibu": 20,
   "Idaho": 102,
   "name": "Buffalo Sweat (2010)",
   "style": "Milk / Sweet Stout",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2120,
   "abv": 0.063,
   "ibu": 60,
   "Idaho": 101,
   "name": "Tallgrass IPA",
   "style": "American IPA",
   "brewery_id": 45,
   "ounces": 16
 },
 {
   "FIELD1": 2121,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1433,
   "name": "Hat Trick Hop IPA",
   "style": "American IPA",
   "brewery_id": 409,
   "ounces": 16
 },
 {
   "FIELD1": 2122,
   "abv": 0.055999999999999994,
   "ibu": null,
   "Idaho": 1432,
   "name": "Yard Sale Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 409,
   "ounces": 16
 },
 {
   "FIELD1": 2123,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 936,
   "name": "Loafin Bräu",
   "style": "Altbier",
   "brewery_id": 490,
   "ounces": 16
 },
 {
   "FIELD1": 2124,
   "abv": 0.07,
   "ibu": 80,
   "Idaho": 544,
   "name": "Old Elephant Foot IPA",
   "style": "American IPA",
   "brewery_id": 490,
   "ounces": 16
 },
 {
   "FIELD1": 2125,
   "abv": 0.065,
   "ibu": 35,
   "Idaho": 2640,
   "name": "Peck's Porter",
   "style": "American Porter",
   "brewery_id": 7,
   "ounces": 16
 },
 {
   "FIELD1": 2126,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 2448,
   "name": "Reactor",
   "style": "American IPA",
   "brewery_id": 7,
   "ounces": 16
 },
 {
   "FIELD1": 2127,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 2447,
   "name": "Mr. Orange",
   "style": "Witbier",
   "brewery_id": 7,
   "ounces": 16
 },
 {
   "FIELD1": 2128,
   "abv": 0.08,
   "ibu": 22,
   "Idaho": 2601,
   "name": "Deduction",
   "style": "Dubbel",
   "brewery_id": 28,
   "ounces": 12
 },
 {
   "FIELD1": 2129,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 973,
   "name": "Face Down Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 480,
   "ounces": 12
 },
 {
   "FIELD1": 2130,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 827,
   "name": "Tempter IPA",
   "style": "American IPA",
   "brewery_id": 480,
   "ounces": 12
 },
 {
   "FIELD1": 2131,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 589,
   "name": "Bridal Veil Rye Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 480,
   "ounces": 12
 },
 {
   "FIELD1": 2132,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 2155,
   "name": "Smittytown",
   "style": "Extra Special / Strong Bitter (ESB)",
   "brewery_id": 210,
   "ounces": 12
 },
 {
   "FIELD1": 2133,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 1982,
   "name": "Greenwood Beach",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 210,
   "ounces": 12
 },
 {
   "FIELD1": 2134,
   "abv": 0.066,
   "ibu": null,
   "Idaho": 1939,
   "name": "Gatecrasher",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 210,
   "ounces": 12
 },
 {
   "FIELD1": 2135,
   "abv": 0.047,
   "ibu": 42,
   "Idaho": 1082,
   "name": "RecreationAle",
   "style": "American Pale Ale (APA)",
   "brewery_id": 469,
   "ounces": 12
 },
 {
   "FIELD1": 2136,
   "abv": 0.055,
   "ibu": 35,
   "Idaho": 2119,
   "name": "First Stand",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 215,
   "ounces": 12
 },
 {
   "FIELD1": 2137,
   "abv": 0.063,
   "ibu": 23,
   "Idaho": 2118,
   "name": "Battle LIne",
   "style": "American Brown Ale",
   "brewery_id": 215,
   "ounces": 12
 },
 {
   "FIELD1": 2138,
   "abv": 0.055999999999999994,
   "ibu": 12,
   "Idaho": 2117,
   "name": "Broken Bridge",
   "style": "Dunkelweizen",
   "brewery_id": 215,
   "ounces": 12
 },
 {
   "FIELD1": 2139,
   "abv": 0.071,
   "ibu": 69,
   "Idaho": 2116,
   "name": "Brutus",
   "style": "English India Pale Ale (IPA)",
   "brewery_id": 215,
   "ounces": 12
 },
 {
   "FIELD1": 2140,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1916,
   "name": "Petit Mutant",
   "style": "American Wild Ale",
   "brewery_id": 272,
   "ounces": 16
 },
 {
   "FIELD1": 2141,
   "abv": 0.096,
   "ibu": null,
   "Idaho": 1915,
   "name": "The Crusher",
   "style": "American Double / Imperial IPA",
   "brewery_id": 272,
   "ounces": 16
 },
 {
   "FIELD1": 2142,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1914,
   "name": "Beelzebub",
   "style": "American Double / Imperial Stout",
   "brewery_id": 272,
   "ounces": 16
 },
 {
   "FIELD1": 2143,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 1810,
   "name": "Focal Banger",
   "style": "American IPA",
   "brewery_id": 272,
   "ounces": 16
 },
 {
   "FIELD1": 2144,
   "abv": 0.08,
   "ibu": 120,
   "Idaho": 1111,
   "name": "Heady Topper",
   "style": "American Double / Imperial IPA",
   "brewery_id": 272,
   "ounces": 16
 },
 {
   "FIELD1": 2145,
   "abv": 0.08,
   "ibu": 120,
   "Idaho": 379,
   "name": "Heady Topper",
   "style": "American Double / Imperial IPA",
   "brewery_id": 272,
   "ounces": 16
 },
 {
   "FIELD1": 2146,
   "abv": 0.046,
   "ibu": 20,
   "Idaho": 1200,
   "name": "Bomber Mountain Amber Ale (2013)",
   "style": "American Amber / Red Ale",
   "brewery_id": 457,
   "ounces": 12
 },
 {
   "FIELD1": 2147,
   "abv": 0.07,
   "ibu": 75,
   "Idaho": 1199,
   "name": "Indian Paintbrush IPA",
   "style": "American IPA",
   "brewery_id": 457,
   "ounces": 12
 },
 {
   "FIELD1": 2148,
   "abv": 0.048,
   "ibu": 16,
   "Idaho": 1198,
   "name": "Saddle Bronc Brown Ale (2013)",
   "style": "English Brown Ale",
   "brewery_id": 457,
   "ounces": 12
 },
 {
   "FIELD1": 2149,
   "abv": 0.059000000000000004,
   "ibu": 15,
   "Idaho": 1197,
   "name": "Wagon Box Wheat Beer",
   "style": "American Pale Wheat Ale",
   "brewery_id": 457,
   "ounces": 12
 },
 {
   "FIELD1": 2150,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1945,
   "name": "Birdhouse Pale Ale",
   "style": "Belgian Pale Ale",
   "brewery_id": 262,
   "ounces": 12
 },
 {
   "FIELD1": 2151,
   "abv": 0.073,
   "ibu": null,
   "Idaho": 1079,
   "name": "Ozzy",
   "style": "Belgian Pale Ale",
   "brewery_id": 262,
   "ounces": 12
 },
 {
   "FIELD1": 2152,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 94,
   "name": "Resurrection",
   "style": "Dubbel",
   "brewery_id": 262,
   "ounces": 12
 },
 {
   "FIELD1": 2153,
   "abv": 0.052000000000000005,
   "ibu": 16,
   "Idaho": 1748,
   "name": "Bronx Summer Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 329,
   "ounces": 16
 },
 {
   "FIELD1": 2154,
   "abv": 0.057,
   "ibu": 46,
   "Idaho": 1747,
   "name": "Bronx Black Pale Ale",
   "style": "American Black Ale",
   "brewery_id": 329,
   "ounces": 16
 },
 {
   "FIELD1": 2155,
   "abv": 0.063,
   "ibu": 50,
   "Idaho": 1037,
   "name": "Bronx Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 329,
   "ounces": 16
 },
 {
   "FIELD1": 2156,
   "abv": 0.052000000000000005,
   "ibu": 35,
   "Idaho": 2594,
   "name": "Surfrider",
   "style": "American Pale Ale (APA)",
   "brewery_id": 33,
   "ounces": 16
 },
 {
   "FIELD1": 2157,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2035,
   "name": "Kolschtal Eddy",
   "style": "Kölsch",
   "brewery_id": 33,
   "ounces": 16
 },
 {
   "FIELD1": 2158,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2034,
   "name": "South Bay Session IPA",
   "style": "American IPA",
   "brewery_id": 33,
   "ounces": 16
 },
 {
   "FIELD1": 2159,
   "abv": 0.069,
   "ibu": 34,
   "Idaho": 1562,
   "name": "Grandma's Pecan",
   "style": "English Brown Ale",
   "brewery_id": 33,
   "ounces": 16
 },
 {
   "FIELD1": 2160,
   "abv": 0.099,
   "ibu": 101,
   "Idaho": 1561,
   "name": "Double Trunk",
   "style": "American Double / Imperial IPA",
   "brewery_id": 33,
   "ounces": 16
 },
 {
   "FIELD1": 2161,
   "abv": 0.046,
   "ibu": 45,
   "Idaho": 1749,
   "name": "Just IPA",
   "style": "American IPA",
   "brewery_id": 328,
   "ounces": 12
 },
 {
   "FIELD1": 2162,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2455,
   "name": "Lionshead",
   "style": "American Pilsner",
   "brewery_id": 90,
   "ounces": 12
 },
 {
   "FIELD1": 2163,
   "abv": null,
   "ibu": null,
   "Idaho": 963,
   "name": "Manhattan Gold Lager (1990)",
   "style": "American Amber / Red Lager",
   "brewery_id": 484,
   "ounces": 12
 },
 {
   "FIELD1": 2164,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2638,
   "name": "G. B. Russo’s Italian Pistachio Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 9,
   "ounces": 16
 },
 {
   "FIELD1": 2165,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 1278,
   "name": "Northern Hawk Owl Amber",
   "style": "American Amber / Red Ale",
   "brewery_id": 438,
   "ounces": 12
 },
 {
   "FIELD1": 2166,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 1277,
   "name": "CEO Stout",
   "style": "American Stout",
   "brewery_id": 438,
   "ounces": 16
 },
 {
   "FIELD1": 2167,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1276,
   "name": "Will Power Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 438,
   "ounces": 16
 },
 {
   "FIELD1": 2168,
   "abv": 0.044000000000000004,
   "ibu": null,
   "Idaho": 1732,
   "name": "Curious Traveler Shandy",
   "style": "Shandy",
   "brewery_id": 334,
   "ounces": 12
 },
 {
   "FIELD1": 2169,
   "abv": 0.048,
   "ibu": 18,
   "Idaho": 2347,
   "name": "Hunny Do Wheat",
   "style": "American Pale Wheat Ale",
   "brewery_id": 142,
   "ounces": 12
 },
 {
   "FIELD1": 2170,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1781,
   "name": "Three Way Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 142,
   "ounces": 12
 },
 {
   "FIELD1": 2171,
   "abv": 0.040999999999999995,
   "ibu": null,
   "Idaho": 1780,
   "name": "Rise to the Top",
   "style": "Cream Ale",
   "brewery_id": 142,
   "ounces": 12
 },
 {
   "FIELD1": 2172,
   "abv": 0.049,
   "ibu": null,
   "Idaho": 1779,
   "name": "Lost Trout Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 142,
   "ounces": 12
 },
 {
   "FIELD1": 2173,
   "abv": 0.051,
   "ibu": 11,
   "Idaho": 2421,
   "name": "Watermelon Ale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 108,
   "ounces": 12
 },
 {
   "FIELD1": 2174,
   "abv": 0.04,
   "ibu": 18,
   "Idaho": 2319,
   "name": "Knotty Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 153,
   "ounces": 12
 },
 {
   "FIELD1": 2175,
   "abv": 0.062,
   "ibu": 40,
   "Idaho": 2317,
   "name": "Fivepine Chocolate Porter",
   "style": "American Porter",
   "brewery_id": 153,
   "ounces": 12
 },
 {
   "FIELD1": 2176,
   "abv": 0.062,
   "ibu": 82,
   "Idaho": 2316,
   "name": "Hoodoo Voodoo IPA",
   "style": "American IPA",
   "brewery_id": 153,
   "ounces": 12
 },
 {
   "FIELD1": 2177,
   "abv": 0.053,
   "ibu": 22,
   "Idaho": 1913,
   "name": "Hydraulion Red",
   "style": "Irish Red Ale",
   "brewery_id": 273,
   "ounces": 12
 },
 {
   "FIELD1": 2178,
   "abv": 0.06,
   "ibu": 50,
   "Idaho": 1912,
   "name": "40 Mile IPA",
   "style": "American IPA",
   "brewery_id": 273,
   "ounces": 12
 },
 {
   "FIELD1": 2179,
   "abv": 0.055,
   "ibu": 64,
   "Idaho": 2617,
   "name": "Citra Faced",
   "style": "American Pale Wheat Ale",
   "brewery_id": 21,
   "ounces": 16
 },
 {
   "FIELD1": 2180,
   "abv": 0.055,
   "ibu": 31,
   "Idaho": 2616,
   "name": "Pole Barn Stout",
   "style": "Oatmeal Stout",
   "brewery_id": 21,
   "ounces": 16
 },
 {
   "FIELD1": 2181,
   "abv": 0.054000000000000006,
   "ibu": 37,
   "Idaho": 2615,
   "name": "Pale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 21,
   "ounces": 16
 },
 {
   "FIELD1": 2182,
   "abv": 0.053,
   "ibu": 27,
   "Idaho": 2614,
   "name": "Yoshi's Nectar",
   "style": "California Common / Steam Beer",
   "brewery_id": 21,
   "ounces": 16
 },
 {
   "FIELD1": 2183,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1889,
   "name": "Leatherhead Red",
   "style": "American Amber / Red Ale",
   "brewery_id": 282,
   "ounces": 12
 },
 {
   "FIELD1": 2184,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1222,
   "name": "Cropduster Mid-American IPA",
   "style": "American IPA",
   "brewery_id": 282,
   "ounces": 12
 },
 {
   "FIELD1": 2185,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 122,
   "name": "Golden Frau Honey Wheat",
   "style": "Braggot",
   "brewery_id": 282,
   "ounces": 12
 },
 {
   "FIELD1": 2186,
   "abv": null,
   "ibu": null,
   "Idaho": 121,
   "name": "Cornstalker Dark Wheat",
   "style": "American Dark Wheat Ale",
   "brewery_id": 282,
   "ounces": 12
 },
 {
   "FIELD1": 2187,
   "abv": 0.057999999999999996,
   "ibu": 20,
   "Idaho": 2623,
   "name": "Cafe Leche",
   "style": "American Porter",
   "brewery_id": 17,
   "ounces": 16
 },
 {
   "FIELD1": 2188,
   "abv": 0.052000000000000005,
   "ibu": 12,
   "Idaho": 2622,
   "name": "Damascene Apricot Sour",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 17,
   "ounces": 16
 },
 {
   "FIELD1": 2189,
   "abv": 0.12,
   "ibu": 90,
   "Idaho": 2621,
   "name": "Csar",
   "style": "Russian Imperial Stout",
   "brewery_id": 17,
   "ounces": 16
 },
 {
   "FIELD1": 2190,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1817,
   "name": "Klingon Warnog Roggen Dunkel",
   "style": "Roggenbier",
   "brewery_id": 17,
   "ounces": 16
 },
 {
   "FIELD1": 2191,
   "abv": 0.085,
   "ibu": 115,
   "Idaho": 1449,
   "name": "Overlord Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 17,
   "ounces": 16
 },
 {
   "FIELD1": 2192,
   "abv": 0.057999999999999996,
   "ibu": 36,
   "Idaho": 951,
   "name": "Alloy",
   "style": "American IPA",
   "brewery_id": 17,
   "ounces": 16
 },
 {
   "FIELD1": 2193,
   "abv": 0.051,
   "ibu": 22,
   "Idaho": 950,
   "name": "Rivet Irish Red Ale",
   "style": "Irish Red Ale",
   "brewery_id": 17,
   "ounces": 16
 },
 {
   "FIELD1": 2194,
   "abv": 0.052000000000000005,
   "ibu": 50,
   "Idaho": 949,
   "name": "3 Gear Robust Porter",
   "style": "American Porter",
   "brewery_id": 17,
   "ounces": 16
 },
 {
   "FIELD1": 2195,
   "abv": 0.045,
   "ibu": 35,
   "Idaho": 948,
   "name": "Circuit Bohemian Pilsner",
   "style": "Czech Pilsener",
   "brewery_id": 17,
   "ounces": 16
 },
 {
   "FIELD1": 2196,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2321,
   "name": "Turnrow Harvest Ale",
   "style": "American Blonde Ale",
   "brewery_id": 152,
   "ounces": 12
 },
 {
   "FIELD1": 2197,
   "abv": 0.07,
   "ibu": 60,
   "Idaho": 1755,
   "name": "Juke Joint IPA",
   "style": "American IPA",
   "brewery_id": 152,
   "ounces": 12
 },
 {
   "FIELD1": 2198,
   "abv": 0.07,
   "ibu": 35,
   "Idaho": 1754,
   "name": "Parade Ground Coffee Porter",
   "style": "American Porter",
   "brewery_id": 152,
   "ounces": 12
 },
 {
   "FIELD1": 2199,
   "abv": 0.05,
   "ibu": 21,
   "Idaho": 1428,
   "name": "Tin Roof Watermelon Wheat",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 152,
   "ounces": 12
 },
 {
   "FIELD1": 2200,
   "abv": 0.045,
   "ibu": 18,
   "Idaho": 529,
   "name": "Tin Roof Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 152,
   "ounces": 12
 },
 {
   "FIELD1": 2201,
   "abv": 0.055,
   "ibu": 37,
   "Idaho": 495,
   "name": "Voodoo Bengal Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 152,
   "ounces": 12
 },
 {
   "FIELD1": 2202,
   "abv": 0.045,
   "ibu": 28,
   "Idaho": 494,
   "name": "Perfect Tin Amber",
   "style": "American Amber / Red Ale",
   "brewery_id": 152,
   "ounces": 12
 },
 {
   "FIELD1": 2203,
   "abv": 0.073,
   "ibu": 87,
   "Idaho": 1856,
   "name": "IPA & a Half",
   "style": "American IPA",
   "brewery_id": 291,
   "ounces": 12
 },
 {
   "FIELD1": 2204,
   "abv": 0.055,
   "ibu": 33,
   "Idaho": 736,
   "name": "Ornery Amber Lager (2003)",
   "style": "Vienna Lager",
   "brewery_id": 291,
   "ounces": 12
 },
 {
   "FIELD1": 2205,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1027,
   "name": "Big Island Shandy",
   "style": "Shandy",
   "brewery_id": 474,
   "ounces": 16
 },
 {
   "FIELD1": 2206,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1026,
   "name": "Preservation IPA",
   "style": "American IPA",
   "brewery_id": 474,
   "ounces": 16
 },
 {
   "FIELD1": 2207,
   "abv": 0.062,
   "ibu": 72,
   "Idaho": 1938,
   "name": "Almanac IPA",
   "style": "American IPA",
   "brewery_id": 265,
   "ounces": 12
 },
 {
   "FIELD1": 2208,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1937,
   "name": "Milk Mustachio Stout",
   "style": "Milk / Sweet Stout",
   "brewery_id": 265,
   "ounces": 12
 },
 {
   "FIELD1": 2209,
   "abv": 0.06,
   "ibu": 30,
   "Idaho": 1936,
   "name": "Farmer's Tan Red Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 265,
   "ounces": 12
 },
 {
   "FIELD1": 2210,
   "abv": 0.057,
   "ibu": null,
   "Idaho": 594,
   "name": "Triangle India Pale Ale",
   "style": "American IPA",
   "brewery_id": 524,
   "ounces": 12
 },
 {
   "FIELD1": 2211,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 114,
   "name": "Triangle White Ale",
   "style": "Witbier",
   "brewery_id": 524,
   "ounces": 12
 },
 {
   "FIELD1": 2212,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 113,
   "name": "Triangle Belgian Golden Ale",
   "style": "Belgian Strong Pale Ale",
   "brewery_id": 524,
   "ounces": 12
 },
 {
   "FIELD1": 2213,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 2445,
   "name": "Troegenator",
   "style": "Doppelbock",
   "brewery_id": 97,
   "ounces": 16
 },
 {
   "FIELD1": 2214,
   "abv": 0.075,
   "ibu": 93,
   "Idaho": 2444,
   "name": "Nugget Nectar",
   "style": "American Amber / Red Ale",
   "brewery_id": 97,
   "ounces": 16
 },
 {
   "FIELD1": 2215,
   "abv": 0.045,
   "ibu": 45,
   "Idaho": 2203,
   "name": "Sunshine Pils",
   "style": "American Pilsner",
   "brewery_id": 97,
   "ounces": 12
 },
 {
   "FIELD1": 2216,
   "abv": 0.08199999999999999,
   "ibu": 25,
   "Idaho": 1510,
   "name": "Troegenator Doublebock",
   "style": "Doppelbock",
   "brewery_id": 97,
   "ounces": 16
 },
 {
   "FIELD1": 2217,
   "abv": 0.075,
   "ibu": 85,
   "Idaho": 1509,
   "name": "Perpetual IPA",
   "style": "American IPA",
   "brewery_id": 97,
   "ounces": 12
 },
 {
   "FIELD1": 2218,
   "abv": 0.055,
   "ibu": 52,
   "Idaho": 433,
   "name": "Greenville Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 539,
   "ounces": 12
 },
 {
   "FIELD1": 2219,
   "abv": 0.062,
   "ibu": 65,
   "Idaho": 641,
   "name": "Hoppy Boy",
   "style": "American IPA",
   "brewery_id": 520,
   "ounces": 16
 },
 {
   "FIELD1": 2220,
   "abv": 0.054000000000000006,
   "ibu": 26,
   "Idaho": 2588,
   "name": "Cow Creek",
   "style": "American Amber / Red Lager",
   "brewery_id": 38,
   "ounces": 12
 },
 {
   "FIELD1": 2221,
   "abv": 0.075,
   "ibu": 63,
   "Idaho": 2458,
   "name": "Chupahopra",
   "style": "American IPA",
   "brewery_id": 38,
   "ounces": 12
 },
 {
   "FIELD1": 2222,
   "abv": 0.051,
   "ibu": 19,
   "Idaho": 2212,
   "name": "Twisted X",
   "style": "American Adjunct Lager",
   "brewery_id": 38,
   "ounces": 12
 },
 {
   "FIELD1": 2223,
   "abv": 0.040999999999999995,
   "ibu": 41,
   "Idaho": 2235,
   "name": "Day Hike Session",
   "style": "American IPA",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2224,
   "abv": 0.048,
   "ibu": 48,
   "Idaho": 1661,
   "name": "Trailhead ISA",
   "style": "American IPA",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2225,
   "abv": 0.052000000000000005,
   "ibu": 27,
   "Idaho": 1660,
   "name": "Immersion Amber",
   "style": "American Amber / Red Ale",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2226,
   "abv": 0.062,
   "ibu": 70,
   "Idaho": 1659,
   "name": "Evo IPA",
   "style": "American IPA",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2227,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1438,
   "name": "Presidential Pils",
   "style": "Czech Pilsener",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2228,
   "abv": 0.062,
   "ibu": 70,
   "Idaho": 1173,
   "name": "Evolutionary IPA (2012)",
   "style": "American IPA",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2229,
   "abv": 0.057,
   "ibu": 36,
   "Idaho": 560,
   "name": "Persnickety Pale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2230,
   "abv": 0.054000000000000006,
   "ibu": 20,
   "Idaho": 519,
   "name": "SoDo Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2231,
   "abv": 0.052000000000000005,
   "ibu": 27,
   "Idaho": 518,
   "name": "Immersion Amber Ale (2011)",
   "style": "American Amber / Red Ale",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2232,
   "abv": 0.062,
   "ibu": 70,
   "Idaho": 505,
   "name": "Evolutionary IPA (2011)",
   "style": "American IPA",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2233,
   "abv": 0.048,
   "ibu": 48,
   "Idaho": 482,
   "name": "Trailhead India Style Session Ale (2011)",
   "style": "American IPA",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2234,
   "abv": 0.046,
   "ibu": null,
   "Idaho": 451,
   "name": "Panorama Wheat Ale",
   "style": "American Pale Wheat Ale",
   "brewery_id": 190,
   "ounces": 12
 },
 {
   "FIELD1": 2235,
   "abv": 0.063,
   "ibu": 69,
   "Idaho": 2497,
   "name": "Wobble",
   "style": "American IPA",
   "brewery_id": 74,
   "ounces": 16
 },
 {
   "FIELD1": 2236,
   "abv": 0.057999999999999996,
   "ibu": 43,
   "Idaho": 2246,
   "name": "Night Cat",
   "style": "American Dark Wheat Ale",
   "brewery_id": 74,
   "ounces": 12
 },
 {
   "FIELD1": 2237,
   "abv": 0.057999999999999996,
   "ibu": 43,
   "Idaho": 1630,
   "name": "Night Cat (2014)",
   "style": "American Dark Wheat Ale",
   "brewery_id": 74,
   "ounces": 12
 },
 {
   "FIELD1": 2238,
   "abv": 0.051,
   "ibu": 17,
   "Idaho": 1284,
   "name": "Dog Days Lager",
   "style": "Dortmunder / Export Lager",
   "brewery_id": 74,
   "ounces": 12
 },
 {
   "FIELD1": 2239,
   "abv": 0.051,
   "ibu": 36,
   "Idaho": 1121,
   "name": "Sidekick Extra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 74,
   "ounces": 12
 },
 {
   "FIELD1": 2240,
   "abv": 0.077,
   "ibu": 23,
   "Idaho": 1042,
   "name": "Atom Smasher",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 74,
   "ounces": 12
 },
 {
   "FIELD1": 2241,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1041,
   "name": "Testudo",
   "style": "Bière de Garde",
   "brewery_id": 74,
   "ounces": 12
 },
 {
   "FIELD1": 2242,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1040,
   "name": "Hobnob B & B Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 74,
   "ounces": 12
 },
 {
   "FIELD1": 2243,
   "abv": 0.07,
   "ibu": 68,
   "Idaho": 861,
   "name": "Cane and Ebel",
   "style": "American Strong Ale",
   "brewery_id": 74,
   "ounces": 12
 },
 {
   "FIELD1": 2244,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 642,
   "name": "Outlaw IPA (2015)",
   "style": "American IPA",
   "brewery_id": 74,
   "ounces": 12
 },
 {
   "FIELD1": 2245,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2037,
   "name": "The Gilded Age",
   "style": "Munich Helles Lager",
   "brewery_id": 243,
   "ounces": 12
 },
 {
   "FIELD1": 2246,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1285,
   "name": "No Limits Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 435,
   "ounces": 16
 },
 {
   "FIELD1": 2247,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1189,
   "name": "Honeyspot Road White IPA",
   "style": "American White IPA",
   "brewery_id": 435,
   "ounces": 12
 },
 {
   "FIELD1": 2248,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 1171,
   "name": "Road 2 Ruin Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 435,
   "ounces": 12
 },
 {
   "FIELD1": 2249,
   "abv": 0.048,
   "ibu": null,
   "Idaho": 1170,
   "name": "Workers Comp Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 435,
   "ounces": 12
 },
 {
   "FIELD1": 2250,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1169,
   "name": "Ol' Factory Pils",
   "style": "German Pilsener",
   "brewery_id": 435,
   "ounces": 12
 },
 {
   "FIELD1": 2251,
   "abv": 0.05,
   "ibu": 10,
   "Idaho": 2310,
   "name": "PUNK'N",
   "style": "Pumpkin Ale",
   "brewery_id": 159,
   "ounces": 12
 },
 {
   "FIELD1": 2252,
   "abv": 0.04,
   "ibu": 22,
   "Idaho": 2100,
   "name": "Yard Sale Winter Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 159,
   "ounces": 12
 },
 {
   "FIELD1": 2253,
   "abv": 0.04,
   "ibu": 42,
   "Idaho": 1925,
   "name": "Trader Session IPA",
   "style": "American IPA",
   "brewery_id": 159,
   "ounces": 12
 },
 {
   "FIELD1": 2254,
   "abv": 0.073,
   "ibu": 83,
   "Idaho": 1723,
   "name": "Hop Nosh IPA",
   "style": "American IPA",
   "brewery_id": 159,
   "ounces": 12
 },
 {
   "FIELD1": 2255,
   "abv": 0.04,
   "ibu": 17,
   "Idaho": 1212,
   "name": "SUM'R",
   "style": "American Blonde Ale",
   "brewery_id": 159,
   "ounces": 12
 },
 {
   "FIELD1": 2256,
   "abv": 0.04,
   "ibu": 32,
   "Idaho": 1097,
   "name": "Organic Baba Black Lager",
   "style": "Schwarzbier",
   "brewery_id": 159,
   "ounces": 12
 },
 {
   "FIELD1": 2257,
   "abv": 0.073,
   "ibu": 82,
   "Idaho": 1089,
   "name": "Hop Notch IPA (2013)",
   "style": "American IPA",
   "brewery_id": 159,
   "ounces": 12
 },
 {
   "FIELD1": 2258,
   "abv": 0.04,
   "ibu": 34,
   "Idaho": 1088,
   "name": "Cutthroat Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 159,
   "ounces": 12
 },
 {
   "FIELD1": 2259,
   "abv": 0.04,
   "ibu": 29,
   "Idaho": 974,
   "name": "WYLD Extra Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 159,
   "ounces": 12
 },
 {
   "FIELD1": 2260,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 98,
   "name": "Pilsner Ukiah",
   "style": "German Pilsener",
   "brewery_id": 555,
   "ounces": 12
 },
 {
   "FIELD1": 2261,
   "abv": 0.06,
   "ibu": 75,
   "Idaho": 2372,
   "name": "The Green Room",
   "style": "American IPA",
   "brewery_id": 126,
   "ounces": 16
 },
 {
   "FIELD1": 2262,
   "abv": 0.047,
   "ibu": 25,
   "Idaho": 2367,
   "name": "Humbucker Helles",
   "style": "Maibock / Helles Bock",
   "brewery_id": 126,
   "ounces": 16
 },
 {
   "FIELD1": 2263,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1704,
   "name": "Uncle John's Apple Cherry Cider",
   "style": "Cider",
   "brewery_id": 338,
   "ounces": 16
 },
 {
   "FIELD1": 2264,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 1703,
   "name": "Uncle John's Apricot Apple Cider",
   "style": "Cider",
   "brewery_id": 338,
   "ounces": 16
 },
 {
   "FIELD1": 2265,
   "abv": 0.065,
   "ibu": null,
   "Idaho": 877,
   "name": "Draught Hard Apple Cider",
   "style": "Cider",
   "brewery_id": 338,
   "ounces": 16
 },
 {
   "FIELD1": 2266,
   "abv": 0.001,
   "ibu": null,
   "Idaho": 606,
   "name": "Scotty K NA",
   "style": "Low Alcohol Beer",
   "brewery_id": 522,
   "ounces": 16
 },
 {
   "FIELD1": 2267,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 543,
   "name": "Bacon Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 522,
   "ounces": 16
 },
 {
   "FIELD1": 2268,
   "abv": 0.064,
   "ibu": null,
   "Idaho": 347,
   "name": "Golden State Ale",
   "style": "Belgian Pale Ale",
   "brewery_id": 522,
   "ounces": 16
 },
 {
   "FIELD1": 2269,
   "abv": 0.078,
   "ibu": null,
   "Idaho": 346,
   "name": "Baltic Porter",
   "style": "Baltic Porter",
   "brewery_id": 522,
   "ounces": 16
 },
 {
   "FIELD1": 2270,
   "abv": 0.085,
   "ibu": null,
   "Idaho": 25,
   "name": "Siamese twin",
   "style": "Dubbel",
   "brewery_id": 522,
   "ounces": 16
 },
 {
   "FIELD1": 2271,
   "abv": 0.085,
   "ibu": 90,
   "Idaho": 2507,
   "name": "Double Duckpin",
   "style": "American Double / Imperial IPA",
   "brewery_id": 71,
   "ounces": 12
 },
 {
   "FIELD1": 2272,
   "abv": 0.042,
   "ibu": 10,
   "Idaho": 2506,
   "name": "Old Pro",
   "style": "Gose",
   "brewery_id": 71,
   "ounces": 12
 },
 {
   "FIELD1": 2273,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 829,
   "name": "Duckpin Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 71,
   "ounces": 12
 },
 {
   "FIELD1": 2274,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 582,
   "name": "Balt Altbier",
   "style": "Altbier",
   "brewery_id": 71,
   "ounces": 12
 },
 {
   "FIELD1": 2275,
   "abv": 0.045,
   "ibu": 50,
   "Idaho": 2190,
   "name": "Campside Session IPA",
   "style": "American IPA",
   "brewery_id": 202,
   "ounces": 16
 },
 {
   "FIELD1": 2276,
   "abv": 0.045,
   "ibu": 15,
   "Idaho": 1951,
   "name": "Upland Wheat Ale",
   "style": "Witbier",
   "brewery_id": 202,
   "ounces": 16
 },
 {
   "FIELD1": 2277,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1950,
   "name": "Dragonfly IPA",
   "style": "American IPA",
   "brewery_id": 202,
   "ounces": 16
 },
 {
   "FIELD1": 2278,
   "abv": 0.128,
   "ibu": null,
   "Idaho": 2565,
   "name": "Lee Hill Series Vol. 5 - Belgian Style Quadrupel Ale",
   "style": "Quadrupel (Quad)",
   "brewery_id": 51,
   "ounces": 19.2
 },
 {
   "FIELD1": 2279,
   "abv": 0.10400000000000001,
   "ibu": null,
   "Idaho": 2564,
   "name": "Lee Hill Series Vol. 4 - Manhattan Style Rye Ale",
   "style": "Rye Beer",
   "brewery_id": 51,
   "ounces": 19.2
 },
 {
   "FIELD1": 2280,
   "abv": 0.068,
   "ibu": 24,
   "Idaho": 2563,
   "name": "Lee Hill Series Vol. 2 - Wild Saison",
   "style": "American Wild Ale",
   "brewery_id": 51,
   "ounces": 19.2
 },
 {
   "FIELD1": 2281,
   "abv": 0.099,
   "ibu": 51,
   "Idaho": 2562,
   "name": "Lee Hill Series Vol. 3 - Barrel Aged Imperial Stout",
   "style": "American Double / Imperial Stout",
   "brewery_id": 51,
   "ounces": 19.2
 },
 {
   "FIELD1": 2282,
   "abv": 0.076,
   "ibu": null,
   "Idaho": 2561,
   "name": "Lee Hill Series Vol. 1 - Barrel Aged Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 51,
   "ounces": 19.2
 },
 {
   "FIELD1": 2283,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 2560,
   "name": "Blood Orange Saison",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 51,
   "ounces": 12
 },
 {
   "FIELD1": 2284,
   "abv": 0.065,
   "ibu": 33,
   "Idaho": 1932,
   "name": "Thai Style White IPA",
   "style": "American White IPA",
   "brewery_id": 51,
   "ounces": 12
 },
 {
   "FIELD1": 2285,
   "abv": 0.075,
   "ibu": 30,
   "Idaho": 1853,
   "name": "Ferus Fluxus Wild Belgian Pale Ale",
   "style": "American Wild Ale",
   "brewery_id": 51,
   "ounces": 19.2
 },
 {
   "FIELD1": 2286,
   "abv": 0.099,
   "ibu": 90,
   "Idaho": 1315,
   "name": "Upslope Imperial India Pale Ale",
   "style": "American Double / Imperial IPA",
   "brewery_id": 51,
   "ounces": 19.2
 },
 {
   "FIELD1": 2287,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 907,
   "name": "Upslope Christmas Ale",
   "style": "Winter Warmer",
   "brewery_id": 51,
   "ounces": 16
 },
 {
   "FIELD1": 2288,
   "abv": 0.077,
   "ibu": null,
   "Idaho": 906,
   "name": "Upslope Pumpkin Ale",
   "style": "Pumpkin Ale",
   "brewery_id": 51,
   "ounces": 16
 },
 {
   "FIELD1": 2289,
   "abv": 0.075,
   "ibu": 30,
   "Idaho": 683,
   "name": "Upslope Belgian Style Pale Ale",
   "style": "Belgian Pale Ale",
   "brewery_id": 51,
   "ounces": 12
 },
 {
   "FIELD1": 2290,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 614,
   "name": "Upslope Foreign Style Stout",
   "style": "Foreign / Export Stout",
   "brewery_id": 51,
   "ounces": 12
 },
 {
   "FIELD1": 2291,
   "abv": 0.048,
   "ibu": 15,
   "Idaho": 466,
   "name": "Top Rope Mexican-style Craft Lager",
   "style": "Vienna Lager",
   "brewery_id": 51,
   "ounces": 12
 },
 {
   "FIELD1": 2292,
   "abv": 0.048,
   "ibu": 22,
   "Idaho": 444,
   "name": "Upslope Craft Lager",
   "style": "Vienna Lager",
   "brewery_id": 51,
   "ounces": 12
 },
 {
   "FIELD1": 2293,
   "abv": 0.067,
   "ibu": null,
   "Idaho": 345,
   "name": "Upslope Brown Ale",
   "style": "English Brown Ale",
   "brewery_id": 51,
   "ounces": 12
 },
 {
   "FIELD1": 2294,
   "abv": 0.057999999999999996,
   "ibu": null,
   "Idaho": 80,
   "name": "Upslope Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 51,
   "ounces": 12
 },
 {
   "FIELD1": 2295,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 79,
   "name": "Upslope India Pale Ale",
   "style": "American IPA",
   "brewery_id": 51,
   "ounces": 12
 },
 {
   "FIELD1": 2296,
   "abv": 0.053,
   "ibu": 22,
   "Idaho": 382,
   "name": "Common Sense Kentucky Common Ale",
   "style": "American Brown Ale",
   "brewery_id": 546,
   "ounces": 16
 },
 {
   "FIELD1": 2297,
   "abv": 0.065,
   "ibu": 70,
   "Idaho": 381,
   "name": "Upstate I.P.W.",
   "style": "American IPA",
   "brewery_id": 546,
   "ounces": 12
 },
 {
   "FIELD1": 2298,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 1826,
   "name": "Squatters Full Suspension Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 302,
   "ounces": 12
 },
 {
   "FIELD1": 2299,
   "abv": 0.09,
   "ibu": 75,
   "Idaho": 1825,
   "name": "Squatters Hop Rising Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 302,
   "ounces": 12
 },
 {
   "FIELD1": 2300,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 1824,
   "name": "Devastator Double Bock",
   "style": "Doppelbock",
   "brewery_id": 302,
   "ounces": 12
 },
 {
   "FIELD1": 2301,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1823,
   "name": "Wasatch Ghostrider White IPA",
   "style": "American White IPA",
   "brewery_id": 302,
   "ounces": 12
 },
 {
   "FIELD1": 2302,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1682,
   "name": "Wasatch Ghostrider White IPA (2014)",
   "style": "American White IPA",
   "brewery_id": 302,
   "ounces": 12
 },
 {
   "FIELD1": 2303,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 1681,
   "name": "Wasatch Apricot Hefeweizen",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 302,
   "ounces": 12
 },
 {
   "FIELD1": 2304,
   "abv": 0.09,
   "ibu": 75,
   "Idaho": 1680,
   "name": "Squatters Hop Rising Double IPA (2014)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 302,
   "ounces": 12
 },
 {
   "FIELD1": 2305,
   "abv": 0.04,
   "ibu": null,
   "Idaho": 1679,
   "name": "Squatters Full Suspension Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 302,
   "ounces": 12
 },
 {
   "FIELD1": 2306,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 2245,
   "name": "Nunica Pine",
   "style": "Cider",
   "brewery_id": 185,
   "ounces": 16
 },
 {
   "FIELD1": 2307,
   "abv": 0.069,
   "ibu": null,
   "Idaho": 2244,
   "name": "Ginger Peach",
   "style": "Cider",
   "brewery_id": 185,
   "ounces": 16
 },
 {
   "FIELD1": 2308,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1378,
   "name": "Totally Roasted",
   "style": "Cider",
   "brewery_id": 185,
   "ounces": 16
 },
 {
   "FIELD1": 2309,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1377,
   "name": "Blue Gold",
   "style": "Cider",
   "brewery_id": 185,
   "ounces": 16
 },
 {
   "FIELD1": 2310,
   "abv": 0.068,
   "ibu": null,
   "Idaho": 1376,
   "name": "Hard Apple",
   "style": "Cider",
   "brewery_id": 185,
   "ounces": 16
 },
 {
   "FIELD1": 2311,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2411,
   "name": "Nitro Can Coffee Stout",
   "style": "American Stout",
   "brewery_id": 113,
   "ounces": 12
 },
 {
   "FIELD1": 2312,
   "abv": 0.092,
   "ibu": 25,
   "Idaho": 1770,
   "name": "Voodoo Love Child",
   "style": "Tripel",
   "brewery_id": 322,
   "ounces": 12
 },
 {
   "FIELD1": 2313,
   "abv": 0.079,
   "ibu": 23,
   "Idaho": 1769,
   "name": "White Magick of the Sun",
   "style": "Witbier",
   "brewery_id": 322,
   "ounces": 12
 },
 {
   "FIELD1": 2314,
   "abv": 0.075,
   "ibu": 31,
   "Idaho": 1730,
   "name": "Wynona's Big Brown Ale",
   "style": "American Brown Ale",
   "brewery_id": 322,
   "ounces": 12
 },
 {
   "FIELD1": 2315,
   "abv": 0.092,
   "ibu": 25,
   "Idaho": 1729,
   "name": "Gran Met",
   "style": "Belgian Strong Pale Ale",
   "brewery_id": 322,
   "ounces": 12
 },
 {
   "FIELD1": 2316,
   "abv": 0.073,
   "ibu": 85,
   "Idaho": 1603,
   "name": "Good Vibes IPA",
   "style": "American IPA",
   "brewery_id": 322,
   "ounces": 12
 },
 {
   "FIELD1": 2317,
   "abv": 0.075,
   "ibu": 85,
   "Idaho": 1488,
   "name": "Pilzilla",
   "style": "American Double / Imperial Pilsner",
   "brewery_id": 322,
   "ounces": 12
 },
 {
   "FIELD1": 2318,
   "abv": 0.04,
   "ibu": 37,
   "Idaho": 1846,
   "name": "Wachusett Light IPA",
   "style": "American IPA",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2319,
   "abv": 0.06,
   "ibu": 55,
   "Idaho": 1845,
   "name": "Green Monsta IPA",
   "style": "American IPA",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2320,
   "abv": 0.055999999999999994,
   "ibu": 50,
   "Idaho": 1844,
   "name": "Wachusett IPA",
   "style": "American IPA",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2321,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1843,
   "name": "Strawberry White",
   "style": "Witbier",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2322,
   "abv": 0.085,
   "ibu": 85,
   "Idaho": 1418,
   "name": "Larry Imperial IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2323,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 1038,
   "name": "Wachusett Summer",
   "style": "American Pale Wheat Ale",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2324,
   "abv": 0.051,
   "ibu": 17,
   "Idaho": 1030,
   "name": "Country Pale Ale",
   "style": "English Pale Ale",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2325,
   "abv": 0.04,
   "ibu": 37,
   "Idaho": 1029,
   "name": "Wachusett Light IPA (2013)",
   "style": "American IPA",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2326,
   "abv": 0.052000000000000005,
   "ibu": 20,
   "Idaho": 908,
   "name": "Pumpkan",
   "style": "Pumpkin Ale",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2327,
   "abv": 0.045,
   "ibu": 10,
   "Idaho": 619,
   "name": "Wachusett Blueberry Ale",
   "style": "Fruit / Vegetable Beer",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2328,
   "abv": 0.06,
   "ibu": 55,
   "Idaho": 618,
   "name": "Green Monsta IPA",
   "style": "American IPA",
   "brewery_id": 295,
   "ounces": 12
 },
 {
   "FIELD1": 2329,
   "abv": 0.047,
   "ibu": null,
   "Idaho": 780,
   "name": "T-6 Red Ale (2004)",
   "style": "American Amber / Red Ale",
   "brewery_id": 506,
   "ounces": 12
 },
 {
   "FIELD1": 2330,
   "abv": 0.052000000000000005,
   "ibu": 67,
   "Idaho": 2450,
   "name": "Self Starter",
   "style": "American IPA",
   "brewery_id": 94,
   "ounces": 16
 },
 {
   "FIELD1": 2331,
   "abv": 0.054000000000000006,
   "ibu": 20,
   "Idaho": 2223,
   "name": "Ermal's",
   "style": "Cream Ale",
   "brewery_id": 94,
   "ounces": 16
 },
 {
   "FIELD1": 2332,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 2222,
   "name": "10 Ton",
   "style": "Oatmeal Stout",
   "brewery_id": 94,
   "ounces": 16
 },
 {
   "FIELD1": 2333,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 2221,
   "name": "Flyin' Rye",
   "style": "American IPA",
   "brewery_id": 94,
   "ounces": 16
 },
 {
   "FIELD1": 2334,
   "abv": 0.09,
   "ibu": null,
   "Idaho": 2439,
   "name": "Christmas Ale",
   "style": "Herbed / Spiced Beer",
   "brewery_id": 100,
   "ounces": 12
 },
 {
   "FIELD1": 2335,
   "abv": 0.07,
   "ibu": null,
   "Idaho": 2356,
   "name": "Pay It Forward Cocoa Porter",
   "style": "American Porter",
   "brewery_id": 100,
   "ounces": 12
 },
 {
   "FIELD1": 2336,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1069,
   "name": "West Sixth Amber Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 100,
   "ounces": 12
 },
 {
   "FIELD1": 2337,
   "abv": null,
   "ibu": null,
   "Idaho": 652,
   "name": "West Sixth IPA",
   "style": "American IPA",
   "brewery_id": 100,
   "ounces": 12
 },
 {
   "FIELD1": 2338,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1542,
   "name": "One Claw",
   "style": "American Pale Ale (APA)",
   "brewery_id": 384,
   "ounces": 12
 },
 {
   "FIELD1": 2339,
   "abv": 0.04,
   "ibu": 5,
   "Idaho": 1312,
   "name": "Westbrook Gose",
   "style": "Gose",
   "brewery_id": 384,
   "ounces": 12
 },
 {
   "FIELD1": 2340,
   "abv": 0.05,
   "ibu": 16,
   "Idaho": 576,
   "name": "White Thai",
   "style": "Witbier",
   "brewery_id": 384,
   "ounces": 12
 },
 {
   "FIELD1": 2341,
   "abv": 0.068,
   "ibu": 65,
   "Idaho": 575,
   "name": "Westbrook IPA",
   "style": "American IPA",
   "brewery_id": 384,
   "ounces": 12
 },
 {
   "FIELD1": 2342,
   "abv": 0.057,
   "ibu": 22,
   "Idaho": 1645,
   "name": "Westfield Octoberfest",
   "style": "Märzen / Oktoberfest",
   "brewery_id": 351,
   "ounces": 12
 },
 {
   "FIELD1": 2343,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 1551,
   "name": "Pop's Old Fashioned Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 351,
   "ounces": 12
 },
 {
   "FIELD1": 2344,
   "abv": 0.057999999999999996,
   "ibu": 55,
   "Idaho": 1550,
   "name": "Charlie in the Rye",
   "style": "American IPA",
   "brewery_id": 351,
   "ounces": 12
 },
 {
   "FIELD1": 2345,
   "abv": null,
   "ibu": null,
   "Idaho": 2364,
   "name": "Royal Lager",
   "style": "American Pale Lager",
   "brewery_id": 132,
   "ounces": 16
 },
 {
   "FIELD1": 2346,
   "abv": 0.08,
   "ibu": null,
   "Idaho": 2348,
   "name": "Rip Van Winkle (Current)",
   "style": "Bock",
   "brewery_id": 132,
   "ounces": 12
 },
 {
   "FIELD1": 2347,
   "abv": null,
   "ibu": null,
   "Idaho": 2344,
   "name": "O’Malley’s Stout",
   "style": "English Stout",
   "brewery_id": 132,
   "ounces": 12
 },
 {
   "FIELD1": 2348,
   "abv": 0.075,
   "ibu": 89,
   "Idaho": 2343,
   "name": "O’Malley’s IPA",
   "style": "American IPA",
   "brewery_id": 132,
   "ounces": 12
 },
 {
   "FIELD1": 2349,
   "abv": null,
   "ibu": null,
   "Idaho": 2342,
   "name": "O’Malley’s Irish Style Cream Ale",
   "style": "Cream Ale",
   "brewery_id": 132,
   "ounces": 12
 },
 {
   "FIELD1": 2350,
   "abv": 0.049,
   "ibu": 28,
   "Idaho": 2341,
   "name": "L'il Lucy's Hot Pepper Ale",
   "style": "Chile Beer",
   "brewery_id": 132,
   "ounces": 12
 },
 {
   "FIELD1": 2351,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2340,
   "name": "Drop Kick Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 132,
   "ounces": 12
 },
 {
   "FIELD1": 2352,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2573,
   "name": "Raspberry Berliner Weisse",
   "style": "Berliner Weissbier",
   "brewery_id": 47,
   "ounces": 12
 },
 {
   "FIELD1": 2353,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 2572,
   "name": "Hop Session",
   "style": "American IPA",
   "brewery_id": 47,
   "ounces": 12
 },
 {
   "FIELD1": 2354,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2571,
   "name": "Blueberry Berliner Weisse",
   "style": "Berliner Weissbier",
   "brewery_id": 47,
   "ounces": 12
 },
 {
   "FIELD1": 2355,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2570,
   "name": "Berliner Weisse",
   "style": "Berliner Weissbier",
   "brewery_id": 47,
   "ounces": 12
 },
 {
   "FIELD1": 2356,
   "abv": 0.06,
   "ibu": null,
   "Idaho": 1498,
   "name": "Super G IPA",
   "style": "American IPA",
   "brewery_id": 396,
   "ounces": 16
 },
 {
   "FIELD1": 2357,
   "abv": 0.049,
   "ibu": 30,
   "Idaho": 1838,
   "name": "Hefe Lemon",
   "style": "Radler",
   "brewery_id": 296,
   "ounces": 12
 },
 {
   "FIELD1": 2358,
   "abv": 0.049,
   "ibu": 30,
   "Idaho": 1837,
   "name": "Hefe Black",
   "style": "Hefeweizen",
   "brewery_id": 296,
   "ounces": 12
 },
 {
   "FIELD1": 2359,
   "abv": 0.049,
   "ibu": 30,
   "Idaho": 1836,
   "name": "Widmer Brothers Hefeweizen",
   "style": "Hefeweizen",
   "brewery_id": 296,
   "ounces": 12
 },
 {
   "FIELD1": 2360,
   "abv": 0.08199999999999999,
   "ibu": 100,
   "Idaho": 1619,
   "name": "Hop Slayer Double IPA",
   "style": "American Double / Imperial IPA",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2361,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 1618,
   "name": "Pumpkin Ale",
   "style": "Pumpkin Ale",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2362,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 1364,
   "name": "Big Bowl Blonde Ale",
   "style": "American Brown Ale",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2363,
   "abv": 0.052000000000000005,
   "ibu": 27,
   "Idaho": 971,
   "name": "Phat Chance",
   "style": "American Blonde Ale",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2364,
   "abv": 0.08199999999999999,
   "ibu": 100,
   "Idaho": 740,
   "name": "Hop Slayer Double IPA (2011)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2365,
   "abv": 0.08199999999999999,
   "ibu": 100,
   "Idaho": 430,
   "name": "Hop Slayer Double IPA (2011)",
   "style": "American Double / Imperial IPA",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2366,
   "abv": 0.042,
   "ibu": 13,
   "Idaho": 398,
   "name": "Wild Onion Summer Wit",
   "style": "Witbier",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2367,
   "abv": 0.06,
   "ibu": 23,
   "Idaho": 366,
   "name": "Jack Stout",
   "style": "Oatmeal Stout",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2368,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 334,
   "name": "Wild Onion Pumpkin Ale (2010)",
   "style": "Pumpkin Ale",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2369,
   "abv": 0.055999999999999994,
   "ibu": 41,
   "Idaho": 162,
   "name": "Paddy Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 361,
   "ounces": 12
 },
 {
   "FIELD1": 2370,
   "abv": 0.068,
   "ibu": 21,
   "Idaho": 2253,
   "name": "Blonde Hunny",
   "style": "Belgian Pale Ale",
   "brewery_id": 181,
   "ounces": 12
 },
 {
   "FIELD1": 2371,
   "abv": 0.057,
   "ibu": 20,
   "Idaho": 1318,
   "name": "Wild Wolf Wee Heavy Scottish Style Ale",
   "style": "Scotch Ale / Wee Heavy",
   "brewery_id": 181,
   "ounces": 12
 },
 {
   "FIELD1": 2372,
   "abv": 0.045,
   "ibu": 25,
   "Idaho": 1195,
   "name": "Wild Wolf American Pilsner",
   "style": "American Pilsner",
   "brewery_id": 181,
   "ounces": 12
 },
 {
   "FIELD1": 2373,
   "abv": 0.051,
   "ibu": 45,
   "Idaho": 1194,
   "name": "Alpha Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 181,
   "ounces": 12
 },
 {
   "FIELD1": 2374,
   "abv": 0.054000000000000006,
   "ibu": null,
   "Idaho": 826,
   "name": "Mystical Stout",
   "style": "Irish Dry Stout",
   "brewery_id": 499,
   "ounces": 16
 },
 {
   "FIELD1": 2375,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 825,
   "name": "Bodacious Bock",
   "style": "Bock",
   "brewery_id": 499,
   "ounces": 16
 },
 {
   "FIELD1": 2376,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 813,
   "name": "Ambitious Lager",
   "style": "Munich Helles Lager",
   "brewery_id": 499,
   "ounces": 16
 },
 {
   "FIELD1": 2377,
   "abv": 0.07200000000000001,
   "ibu": null,
   "Idaho": 324,
   "name": "Wyoming Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 550,
   "ounces": 16
 },
 {
   "FIELD1": 2378,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 323,
   "name": "Wind River Blonde Ale",
   "style": "American Blonde Ale",
   "brewery_id": 550,
   "ounces": 16
 },
 {
   "FIELD1": 2379,
   "abv": 0.07400000000000001,
   "ibu": 83,
   "Idaho": 762,
   "name": "Ace IPA",
   "style": "American IPA",
   "brewery_id": 509,
   "ounces": 16
 },
 {
   "FIELD1": 2380,
   "abv": 0.08,
   "ibu": 31,
   "Idaho": 761,
   "name": "P-51 Porter",
   "style": "American Porter",
   "brewery_id": 509,
   "ounces": 16
 },
 {
   "FIELD1": 2381,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 2149,
   "name": "#001 Golden Amber Lager",
   "style": "American Amber / Red Lager",
   "brewery_id": 211,
   "ounces": 12
 },
 {
   "FIELD1": 2382,
   "abv": 0.071,
   "ibu": 60,
   "Idaho": 2148,
   "name": "#002 American I.P.A.",
   "style": "American IPA",
   "brewery_id": 211,
   "ounces": 12
 },
 {
   "FIELD1": 2383,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 2147,
   "name": "#003 Brown & Robust Porter",
   "style": "American Porter",
   "brewery_id": 211,
   "ounces": 12
 },
 {
   "FIELD1": 2384,
   "abv": 0.048,
   "ibu": 38,
   "Idaho": 2146,
   "name": "#004 Session I.P.A.",
   "style": "American IPA",
   "brewery_id": 211,
   "ounces": 12
 },
 {
   "FIELD1": 2385,
   "abv": 0.059000000000000004,
   "ibu": null,
   "Idaho": 2047,
   "name": "Tarasque",
   "style": "Saison / Farmhouse Ale",
   "brewery_id": 239,
   "ounces": 12
 },
 {
   "FIELD1": 2386,
   "abv": 0.062,
   "ibu": 61,
   "Idaho": 1470,
   "name": "Ananda India Pale Ale",
   "style": "American IPA",
   "brewery_id": 239,
   "ounces": 12
 },
 {
   "FIELD1": 2387,
   "abv": 0.045,
   "ibu": 23,
   "Idaho": 1469,
   "name": "Tiny Bomb",
   "style": "American Pilsner",
   "brewery_id": 239,
   "ounces": 12
 },
 {
   "FIELD1": 2388,
   "abv": 0.057999999999999996,
   "ibu": 72,
   "Idaho": 2627,
   "name": "Train Hopper",
   "style": "American IPA",
   "brewery_id": 14,
   "ounces": 12
 },
 {
   "FIELD1": 2389,
   "abv": 0.045,
   "ibu": null,
   "Idaho": 2626,
   "name": "Edward’s Portly Brown",
   "style": "American Brown Ale",
   "brewery_id": 14,
   "ounces": 12
 },
 {
   "FIELD1": 2390,
   "abv": 0.059000000000000004,
   "ibu": 135,
   "Idaho": 1676,
   "name": "Troopers Alley IPA",
   "style": "American IPA",
   "brewery_id": 344,
   "ounces": 12
 },
 {
   "FIELD1": 2391,
   "abv": 0.047,
   "ibu": 15,
   "Idaho": 1468,
   "name": "Wolverine Premium Lager",
   "style": "American Pale Lager",
   "brewery_id": 402,
   "ounces": 12
 },
 {
   "FIELD1": 2392,
   "abv": 0.05,
   "ibu": null,
   "Idaho": 822,
   "name": "Woodchuck Amber Hard Cider",
   "style": "Cider",
   "brewery_id": 501,
   "ounces": 12
 },
 {
   "FIELD1": 2393,
   "abv": 0.065,
   "ibu": 82,
   "Idaho": 2417,
   "name": "4000 Footer IPA",
   "style": "American IPA",
   "brewery_id": 109,
   "ounces": 12
 },
 {
   "FIELD1": 2394,
   "abv": 0.027999999999999997,
   "ibu": 15,
   "Idaho": 2306,
   "name": "Summer Brew",
   "style": "American Pilsner",
   "brewery_id": 109,
   "ounces": 12
 },
 {
   "FIELD1": 2395,
   "abv": 0.065,
   "ibu": 69,
   "Idaho": 1697,
   "name": "Be Hoppy IPA",
   "style": "American IPA",
   "brewery_id": 339,
   "ounces": 16
 },
 {
   "FIELD1": 2396,
   "abv": 0.069,
   "ibu": 69,
   "Idaho": 2194,
   "name": "Worthy IPA",
   "style": "American IPA",
   "brewery_id": 199,
   "ounces": 12
 },
 {
   "FIELD1": 2397,
   "abv": 0.045,
   "ibu": 25,
   "Idaho": 1514,
   "name": "Easy Day Kolsch",
   "style": "Kölsch",
   "brewery_id": 199,
   "ounces": 12
 },
 {
   "FIELD1": 2398,
   "abv": 0.077,
   "ibu": 30,
   "Idaho": 1513,
   "name": "Lights Out Vanilla Cream Extra Stout",
   "style": "American Double / Imperial IPA",
   "brewery_id": 199,
   "ounces": 12
 },
 {
   "FIELD1": 2399,
   "abv": 0.069,
   "ibu": 69,
   "Idaho": 1512,
   "name": "Worthy IPA (2013)",
   "style": "American IPA",
   "brewery_id": 199,
   "ounces": 12
 },
 {
   "FIELD1": 2400,
   "abv": 0.06,
   "ibu": 50,
   "Idaho": 1511,
   "name": "Worthy Pale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 199,
   "ounces": 12
 },
 {
   "FIELD1": 2401,
   "abv": 0.042,
   "ibu": null,
   "Idaho": 1345,
   "name": "Patty's Chile Beer",
   "style": "Chile Beer",
   "brewery_id": 424,
   "ounces": 12
 },
 {
   "FIELD1": 2402,
   "abv": 0.08199999999999999,
   "ibu": null,
   "Idaho": 1316,
   "name": "Colorojo Imperial Red Ale",
   "style": "American Strong Ale",
   "brewery_id": 424,
   "ounces": 12
 },
 {
   "FIELD1": 2403,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 1045,
   "name": "Wynkoop Pumpkin Ale",
   "style": "Pumpkin Ale",
   "brewery_id": 424,
   "ounces": 12
 },
 {
   "FIELD1": 2404,
   "abv": 0.075,
   "ibu": null,
   "Idaho": 1035,
   "name": "Rocky Mountain Oyster Stout",
   "style": "American Stout",
   "brewery_id": 424,
   "ounces": 12
 },
 {
   "FIELD1": 2405,
   "abv": 0.067,
   "ibu": 45,
   "Idaho": 928,
   "name": "Belgorado",
   "style": "Belgian IPA",
   "brewery_id": 424,
   "ounces": 12
 },
 {
   "FIELD1": 2406,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 807,
   "name": "Rail Yard Ale",
   "style": "American Amber / Red Ale",
   "brewery_id": 424,
   "ounces": 12
 },
 {
   "FIELD1": 2407,
   "abv": 0.055,
   "ibu": null,
   "Idaho": 620,
   "name": "B3K Black Lager",
   "style": "Schwarzbier",
   "brewery_id": 424,
   "ounces": 12
 },
 {
   "FIELD1": 2408,
   "abv": 0.055,
   "ibu": 40,
   "Idaho": 145,
   "name": "Silverback Pale Ale",
   "style": "American Pale Ale (APA)",
   "brewery_id": 424,
   "ounces": 12
 },
 {
   "FIELD1": 2409,
   "abv": 0.052000000000000005,
   "ibu": null,
   "Idaho": 84,
   "name": "Rail Yard Ale (2009)",
   "style": "American Amber / Red Ale",
   "brewery_id": 424,
   "ounces": 12
 }
]

module.exports = {
  breweries,
  beers
}