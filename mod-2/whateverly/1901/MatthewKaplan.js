const nationalParks = {
  "parksByRegion": {
    "American Samoa": ["American Samoa"],
    "Arizona": ["Grand Canyon", "Petrified Forest", "Saguaro"],
    "Arkansas": ["Hot Springs"],
    "Alaska": ["Denali", "Gates of the Arctic", "Glacier Bay", "Katmai", "Kenai Fjords", "Kobuk Valley", "Lake Clark", "Wrangell-St. Elias"],
    "Colorado": ["Black Canyon of the Gunnison", "Great Sand Dunes", "Mesa Verde", "Rocky Mountain"],
    "California": ["Channel Islands", "Death Valley", "Joshua Tree", "Kings Canyon", "Lassen Volcanic", "Pinnacles", "Redwood", "Sequoia", "Yosemite"],
    "Florida": ["Biscayne", "Dry Tortugas", "Everglades"],
    "Hawaii": ["Haleakala", "Hawai'i Volcanoes"],
    "Indiana": ["Indiana Dunces"],
    "Kentucky": ["Mammoth Cave"],
    "Michigan": ["Isle Royale"],
    "Missouri": ["Gateway Arch"],
    "Maine": ["Acadia"],
    "Montana": ["Glacier"],
    "New Mexico": ["Carlsbad Caverns"],
    "Minnesota": ["Voyageurs"],
    "North Dekota": ["Theodore Roosevelt"],
    "Nevada": ["Great Basin"],
    "Oregon": ["Crater Lake"],
    "Ohio": ["Cuyahoga Valley"],``
    "South Dakota": ["Badlands"],
    "Texas": ["Big Bend", "Guadalupe Mountains"],
    "Utah": ["Arches", "Bryce Canyon", "Canyonlands", "Capitol Reef", "Zion"],
    "South Carolia": ["Congaree"],
    "Tennessee": ["Great Smoky Mountains"],
    "Virginia": ["Shenandoah"],
    "United States Virgin Islands": ["Virgin Islands"],
    "Washington": ["Mount Rainier", "North Cascades", "Olympic"],
    "Wyoming": ["Grand Teton", "Yellowstone"]
  } 
}

const nationalParksInfo = [
  {
    "name": "Acadia",
    "location": "Maine, USA",
    "date established": "February 26, 1919",
    "area": 49047.26,
    "id": 1,
    "address": "Route 3 Bar Harbor, ME 04609",
    "link": "https://www.nps.gov/acad/index.htm"
  },
  {
    "name": "American Samoa",
    "location": "American Samoa",
    "date established": "October 31, 1988",
    "area": 8256.67,
    "id": 2,
    "address": "Executive Office Building Pago Pago, AS 96799",
    "link": "https://www.americansamoa.gov/"
  },
  {
    "name": "Arches",
    "location": "Utah, USA",
    "date established": "November 12, 1971",
    "area": 76678.98,
    "id": 3,
    "address": "PO Box 907 Moab, UT 84532",
    "link": "https://www.nps.gov/arch/index.htm"
  },
  {
    "name": "Badlands",
    "location": "South Dakota, USA",
    "date established": "November 10, 1978",
    "area": 242755.94,
    "id": 4,
    "address": "25216 Ben Reifel Road Interior, SD 57750",
    "link": "https://www.nps.gov/badl/index.htm"
  },
  {
    "name": "Big Bend",
    "location": "Texas, USA",
    "date established": "June 12, 1944",
    "area": 801163.21,
    "id": 5,
    "address": "PO Box 129 Big Bend National Park, TX 79834",
    "link": "https://www.nps.gov/bibe/index.htm"
  },
  {
    "name": "Biscayne",
    "location": "Florida, USA",
    "date established": "June 28, 1980",
    "area": 172971.11,
    "id": 6,
    "address": "9700 SW 328th Street Homestead, FL 33033",
    "link": "https://www.nps.gov/bisc/index.htm"
  },
  {
    "name": "Black Canyon of the Gunnison",
    "location": "Colorado, USA",
    "date established": "October 21, 1999",
    "area": 30780.76,
    "id": 7,
    "address": "9800 Highway 347 Montrose, CO 81401",
    "link": "https://www.nps.gov/blca/index.htm"
  },
  {
    "name": "Bryce Canyon",
    "location": "Utah, USA",
    "date established": "February 25, 1928",
    "area": 35835.08,
    "id": 8,
    "address": "Highway 63 Bryce, UT 84764",
    "link": "https://www.nps.gov/brca/index.htm"
  },
  {
    "name": "Canyonlands",
    "location": "Utah, USA",
    "date established": "September 12, 1964",
    "area": 337597.83,
    "id": 9,
    "address": "2282 Resource Blvd. Moab, UT 84532",
    "link": "https://www.nps.gov/cany/index.htm"
  },
  {
    "name": "Capitol Reef",
    "location": "Utah, USA",
    "date established": "December 18, 1971",
    "area": 241904.50,
    "id": 10,
    "address": "52 West Headquarters Drive Torrey, UT 84775",
    "link": "https://www.nps.gov/care/index.htm"
  },
  {
    "name": "Carlsbad Caverns",
    "location": "New Mexico, USA",
    "date established": "May 14, 1930",
    "area": 46766.45,
    "id": 11,
    "address": "727 Carlsbad Caverns Highway Carlsbad, NM 88220",
    "link": "https://www.nps.gov/cave/index.htm"
  },
  {
    "name": "Channel Islands",
    "location": "California, USA",
    "date established": "March 5, 1980",
    "area": 249561.00,
    "id": 12,
    "address": "1901 Spinnaker Drive Ventura, CA 93001",
    "link": "https://www.nps.gov/chis/index.htm"
  },
  {
    "name": "Congaree",
    "location": "South Carolia, USA",
    "date established": "November 10, 2003",
    "area": 26539.22,
    "id": 13,
    "address": "100 National Park Road Hopkins, SC 29061",
    "link": "https://www.nps.gov/cong/index.htm"
  },
  {
    "name": "Crater Lake",
    "location": "Oregon, USA",
    "date established": "May 22, 1902",
    "area": 183224.05,
    "id": 14,
    "address": "PO Box 7 Crater Lake , OR 97604",
    "link": "https://www.nps.gov/crla/index.htm"
  },
  {
    "name": "Cuyahoga Valley",
    "location": "Ohio, USA",
    "date established": "October 11, 2000",
    "area": 32572.35,
    "id": 15,
    "address": "1550 Boston Mills Road Peninsula, OH 44264",
    "link": "https://www.nps.gov/cuva/index.htm"
  },
  {
    "name": "Death Valley",
    "location": "California, USA",
    "date established": "October 31, 1994",
    "area": 3373063.14,
    "id": 16,
    "address": "PO Box 579 Death Valley, CA 92328",
    "link": "https://www.nps.gov/deva/index.htm"
  },
  {
    "name": "Denali",
    "location": "Alaska, USA",
    "date established": "February 26, 1917",
    "area": 4740911.16,
    "id": 17,
    "address": "Mile 237 Highway 3 Denali Park, AK 99755",
    "link": "https://www.nps.gov/dena/index.htm"
  },
  {
    "name": "Dry Tortugas",
    "location": "Florida, USA",
    "date established": "October 26, 1992",
    "area": 64701.22,
    "id": 18,
    "address": "40001 SR-9336 Homestead, FL 33034",
    "link": "https://www.nps.gov/drto/index.htm"
  },
  {
    "name": "Everglades",
    "location": "Florida, USA",
    "date established": "May 30, 1934",
    "area": 1508934.25,
    "id": 19,
    "address": "40001 State Road 9336 Homestead, Florida 33034",
    "link": "https://www.nps.gov/ever/index.htm"
  },
  {
    "name": "Gates of the Arctic",
    "location": "Alaska, USA",
    "date established": "December 2, 1980",
    "area": 7523897.45,
    "id": 20,
    "address": "Airport Road Bettles, AK 99726",
    "link": "https://www.nps.gov/gaar/index.htm"
  },
  {
    "name": "Gateway Arch",
    "location": "Missouri, USA",
    "date established": "February 22, 2018",
    "area": 192.83,
    "id": 21,
    "address": "11. North 4th Street St. Louis, MO 63102",
    "link": "https://www.nps.gov/jeff/index.htm"
  },
  {
    "name": "Glacier",
    "location": "Montana, USA",
    "date established": "May 11, 1910",
    "area": 1013125.99,
    "id": 22,
    "address": "64 Grinnell Drive West Glacier, MT 59936",
    "link": "https://www.nps.gov/glac/index.htm"
  },
  {
    "name": "Glacier Bay",
    "location": "Alaska, USA",
    "date established": "December 2, 1980",
    "area": 3223383.43,
    "id": 23,
    "address": "1 Park Road Gustavus, AK 99826",
    "link": "https://www.nps.gov/glba/index.htm"
  },
  {
    "name": "Grand Canyon",
    "location": "Arizona, USA",
    "date established": "February 26, 1919",
    "area": 1201647.03,
    "id": 24,
    "address": "20 South Entrance Road Grand Canyon, AZ 86023",
    "link": "https://www.nps.gov/grca/index.htm"
  },
  {
    "name": "Grand Teton",
    "location": "Wyoming, USA",
    "date established": "February 26, 1929",
    "area": 310044.22,
    "id": 25,
    "address": "103 Headquarters Loop Moose, WY 83012",
    "link": "https://www.nps.gov/grte/index.htm"
  },
  {
    "name": "Great Basin",
    "location": "Nevada, USA",
    "date established": "October 27, 1986",
    "area": 77180.00,
    "id": 26,
    "address": "5500 W Hwy 488 Baker, NV 89311",
    "link": "https://www.nps.gov/grba/index.htm"
  },
  {
    "name": "Great Sand Dunes",
    "location": "Colorado, USA",
    "date established": "September 13, 2004",
    "area": 107341.87,
    "id": 27,
    "address": "11999 State Highway 150 Mosca, CO 81146",
    "link": "https://www.nps.gov/grsa/index.htm"
  },
  {
    "name": "Great Smoky Mountains",
    "location": "Tennessee, USA",
    "date established": "June 15, 1934",
    "area": 522426.88,
    "id": 28,
    "address": "1420 Little River Road Gatlinburg, TN 37738",
    "link": "https://www.nps.gov/grsm/index.htm"
  },
  {
    "name": "Guadalupe Mountains",
    "location": "Texas, USA",
    "date established": "October 15, 1966",
    "area": 86367.10,
    "id": 29,
    "address": "400 Pine Canyon Salt Flat, TX 79847",
    "link": "https://www.nps.gov/gumo/index.htm"
  },
  {
    "name": "Haleakala",
    "location": "Hawaii, USA",
    "date established": "August 1, 1916",
    "area": 33264.62,
    "id": 30,
    "address": "PO Box 369 Makawao, HI 96768",
    "link": "https://www.nps.gov/hale/index.htm"
  },
  {
    "name": "Hawai'i Volcanoes",
    "location": "Hawaii, USA",
    "date established": "August 1, 1916",
    "area": 323431.38,
    "id": 31,
    "address": "1 Crater Rim Drive Hawaii National Park, HI 96718",
    "link": "https://www.nps.gov/havo/index.htm"
  },
  {
    "name": "Hot Springs",
    "location": "Arkansas, USA",
    "date established": "March 4, 1921",
    "area": 5548.01,
    "id": 32,
    "address": "369 Central Avenue Hot Springs, AR 71901",
    "link": "https://www.nps.gov/hosp/index.htm"
  },
  {
    "name": "Indiana Dunces",
    "location": "Indiana, USA",
    "date established": "February 15, 2019",
    "area": 15067.00,
    "id": 33,
    "address": "1100 North Mineral Springs Road Porter, IN 46304",
    "link": "https://www.nps.gov/indu/index.htm"
  },
  {
    "name": "Isle Royale",
    "location": "Michigan, USA",
    "date established": "April 3, 1940",
    "area": 571790.30,
    "id": 34,
    "address": "800 East Lakeshore Drive Houghton, MI 49931",
    "link": "https://www.nps.gov/isro/index.htm"
  },
  {
    "name": "Joshua Tree",
    "location": "California, USA",
    "date established": "October 31, 1994",
    "area": 790635.74,
    "id": 35,
    "address": "74485 National Park Drive Twentynine Palms, CA 92277-3597",
    "link": "https://www.nps.gov/jotr/index.htm"
  },
  {
    "name": "Katmai",
    "location": "Alaska, USA",
    "date established": "December 2, 1980",
    "area": 3674529.33,
    "id": 36,
    "address": "1000 Silver Street King Salmon, AK 99613",
    "link": "https://www.nps.gov/katm/index.htm"
  },
  {
    "name": "Kenai Fjords",
    "location": "Alaska, USA",
    "date established": "December 2, 1980",
    "area": 669950.05,
    "id": 37,
    "address": "PO Box 1727 Seward, AK 99664",
    "link": "https://www.nps.gov/kefj/index.htm"
  },
  {
    "name": "Kings Canyon",
    "location": "California, USA",
    "date established": "March 4, 1940",
    "area": 461901.20,
    "id": 38,
    "address": "47050 Generals Highway Three Rivers, CA 93271",
    "link": "https://www.nps.gov/seki/index.htm"
  },
  {
    "name": "Kobuk Valley",
    "location": "Alaska, USA",
    "date established": "December 2, 1980",
    "area": 1750716.16,
    "id": 39,
    "address": "171 3rd Ave Kotzebue, AK 99752",
    "link": "https://www.nps.gov/kova/index.htm"
  },
  {
    "name": "Lake Clark",
    "location": "Alaska, USA",
    "date established": "December 2, 1980",
    "area": 2619816.49,
    "id": 40,
    "address": "1 Park Place Port Alsworth, AK 99653",
    "link": "https://www.nps.gov/lacl/index.htm"
  },
  {
    "name": "Lassen Volcanic",
    "location": "California, USA",
    "date established": "August 9, 1916",
    "area": 106589.02,
    "id": 41,
    "address": "38050 Highway 36 East Mineral, CA 96063",
    "link": "https://www.nps.gov/lavo/index.htm"
  },
  {
    "name": "Mammoth Cave",
    "location": "Kentucky, USA",
    "date established": "July 1, 1941",
    "area": 54011.91,
    "id": 42,
    "address": "P.O. Box 7 Mammoth Cave, KY 42259-0007",
    "link": "https://www.nps.gov/maca/index.htm"
  },
  {
    "name": "Mesa Verde",
    "location": "Colorado, USA",
    "date established": "June 29, 1906",
    "area": 52485.17,
    "id": 43,
    "address": "Mile .7 Headquarters Loop Road Mesa Verde National Park, CO 81330",
    "link": "https://www.nps.gov/meve/index.htm"
  },
  {
    "name": "Mount Rainier",
    "location": "Washington, USA",
    "date established": "March 2, 1899",
    "area": 236381.64,
    "id": 44,
    "address": "55210 238th Avenue East Ashford, WA 98304",
    "link": "https://www.nps.gov/mora/index.htm"
  },
  {
    "name": "North Cascades",
    "location": "Washington, USA",
    "date established": "October 2, 1968",
    "area": 504780.94,
    "id": 45,
    "address": "810 State Route 20 Sedro-Woolley, WA 98284",
    "link": "https://www.nps.gov/noca/index.htm"
  },
  {
    "name": "Olympic",
    "location": "Washington, USA",
    "date established": "June 29, 1938",
    "area": 922649.41,
    "id": 46,
    "address": "3002 Mount Angeles Road Port Angeles , WA 98362",
    "link": "https://www.nps.gov/olym/index.htm"
  },
  {
    "name": "Petrified Forest",
    "location": "Arizona, USA",
    "date established": "December 9, 1962",
    "area": 221390.21,
    "id": 47,
    "address": "1 Park Road Petrified Forest, AZ 86028",
    "link": "https://www.nps.gov/pefo/index.htm"
  },
  {
    "name": "Pinnacles",
    "location": "California, USA",
    "date established": "January 10, 2013",
    "area": 26685.73,
    "id": 48,
    "address": "5000 Highway 146 Paicines, CA 95043",
    "link": "https://www.nps.gov/pinn/index.htm"
  },
  {
    "name": "Redwood",
    "location": "California, USA",
    "date established": "October 2, 1968",
    "area": 138999.37,
    "id": 49,
    "address": "1111 Second Street Crescent City, CA 95531",
    "link": "https://www.nps.gov/redw/index.htm"
  },
  {
    "name": "Rocky Mountain",
    "location": "Colorado, USA",
    "date established": "January 26, 1915",
    "area": 265795.20,
    "id": 50,
    "address": "1000 US Hwy 36 Estes Park, CO 80517",
    "link": "https://www.nps.gov/romo/index.htm"
  },
  {
    "name": "Saguaro",
    "location": "Arizona, USA",
    "date established": "October 14, 1994",
    "area": 91715.72,
    "id": 51,
    "address": "3693 S Old Spanish Trail Tucson , AZ 85730",
    "link": "https://www.nps.gov/sagu/index.htm"
  },
  {
    "name": "Sequoia",
    "location": "California, USA",
    "date established": "September 25, 1890",
    "area": 404062.63,
    "id": 52,
    "address": "47050 Generals Highway Three Rivers, CA 93271",
    "link": "https://www.nps.gov/seki/index.htm"
  },
  {
    "name": "Shenandoah",
    "location": "Virginia, USA",
    "date established": "December 26, 1935",
    "area": 199217.77,
    "id": 53,
    "address": "3655 U.S. Highway 211 East Luray, VA 22835",
    "link": "https://www.nps.gov/shen/index.htm"
  },
  {
    "name": "Theodore Roosevelt",
    "location": "North Dekota, USA",
    "date established": "November 10, 1978",
    "area": 70446.89,
    "id": 54,
    "address": "315 Second Avenue Medora, ND 58645",
    "link": "https://www.nps.gov/thro/index.htm"
  },
  {
    "name": "Virgin Islands",
    "location": "United States Virgin Islands",
    "date established": "August 2, 1956",
    "area": 14940.00,
    "id": 55,
    "address": "1300 Cruz Bay Creek St. John, VI 00830",
    "link": "https://www.nps.gov/viis/index.htm"
  },
  {
    "name": "Voyageurs",
    "location": "Minnesota, USA",
    "date established": "January 8, 1971",
    "area": 218200.15,
    "id": 56,
    "address": "Voyageurs National Park Headquarters 360 Hwy 11 East International Falls, MN 56649",
    "link": "https://www.nps.gov/voya/index.htm"
  },
  {
    "name": "Wind Cave",
    "location": "South Dekota, USA",
    "date established": "January 9, 1903",
    "area": 33970.84,
    "id": 57,
    "address": "26611 US Highway 385 Hot Springs, SD 57747",
    "link": "https://www.nps.gov/wica/index.htm"
  },
  {
    "name": "Wrangell-St. Elias",
    "location": "Alaska, USA",
    "date established": "December 2, 1980",
    "area": 8323146.48,
    "id": 58,
    "address": "Wrangell-St. Elias National Park & Preserve Mile 106.8 Richardson Highway Copper Center, AK 99573",
    "link": "https://www.nps.gov/wrst/index.htm"
  },
  {
    "name": "Yellowstone",
    "location": "Wyoming, USA",
    "date established": "March 1, 1872",
    "area": 2219790.71,
    "id": 59,
    "address": "2 Officers Row Yellowstone National Park, WY 82190",
    "link": "https://www.nps.gov/yell/index.htm"
  },
  {
    "name": "Yosemite",
    "location": "California, USA",
    "date established": "October 1, 1890",
    "area": 761747.50,
    "id": 60,
    "address": "9035 Village Dr Yosemite Valley CA 95389",
    "link": "https://www.nps.gov/yose/index.htm"
  },
  {
    "name": "Zion",
    "location": "Utah, USA",
    "date established": "November 19, 1919",
    "area": 147237.02,
    "id": 61,
    "address": "1 Zion Park Blvd State Route 9 Springdale, UT 84767",
    "link": "https://www.nps.gov/zion/index.htm"
  } 
]

module.exports {
  nationalParks,
  nationalParksInfo
}