const endangeredSpecies = [
  {
  "name": "Snow Leopard",
  "genus": "Panthera",
  "endangeredStatus": "Vulnerable",
  "locations": ["China", "Mongolia", "India"],
  "population": 6000,
  "threats": ["Poaching","Climate Change"],
  "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Snow_Leopard_in_Ladakh%28_Photo_by_Tashi_Lonchay%29.jpg"
  },
  {
  "name": "Jaguar",
  "genus": "Panthera",
  "endangeredStatus": "Near Threatened",
  "locations": ["Amazonian Brazil", "South America", "Central America", "Mexico" ],
  "population": "Unknown",
  "threats": ["Poaching", "Habitat Loss", "Human Intolerance" ],
  "image": "https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  },
  {
  "name": "Sumatran Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Borneo", "Sumatra" ],
  "population": 400,
  "threats": ["Poaching", "Habitat Loss", "Human Intolerance" ],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/2090/images/hero_full/Sumatran-Tiger-Hero.jpg?1345559303"
  },
  {
  "name": "Amur Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Endangered",
  "locations": ["China", "Russia"],
  "population": 540,
  "threats": ["Poaching", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1588/images/story_full_width/Amur_Tiger_8.9.2012_Why_They_Matter1_HI_107001.jpg?1406644789"
  },
  {
  "name": "Bengal Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Endangered",
  "locations": ["India"],
  "population": 2500,
  "threats": ["Poaching", "Habitat Loss", "Prey Loss", "Human Intolerance" ],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1620/images/story_full_width/bengal-tiger-why-matter_7341043.jpg?1345548942"
  },
  { 
  "name": "Indochinese Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Endangered",
  "locations": ["China", "Myanmar", "Laos", "Thailand", "Cambodia", "Vietnam" ],
  "population": 350,
  "threats": ["Poaching", "Habitat Loss" ],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1624/images/story_full_width/Indochinese_TIger_8.9.2012_Why_They_Matter_MID_243229.jpg?1345549014"
  },
  { 
  "name": "South China Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Extinct in the Wild",
  "locations": ["China"],
  "population": 0,
  "threats": ["Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1640/images/story_full_width/shutterstock_87865615.jpg?1345549455"
  },
  { 
  "name": "Malayan Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Thailand"],
  "population": 275,
  "threats": ["Poaching", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1642/images/story_full_width/shutterstock_6107263.jpg?1345549509"
  },
  { 
  "name": "Amur Leopard",
  "genus": "Panthera",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Russia"],
  "population": 84,
  "threats": ["Poaching", "Prey Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/866/images/story_full_width/Amur-Leopard-Photo_2.jpg?1345532007"
  },
  { 
  "name": "African Elephant",
  "genus": "Loxodonta",
  "endangeredStatus": "Vulnerable",
  "locations": ["Africa"],
  "population": 415000,
  "threats": ["Poaching", "Human Intolerance"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/882/images/hero_full/African_Elephant_7.27.2012_hero_and_circle_HI_53941.jpg?1345532748"
  },
  { 
  "name": "African Wild Dog",
  "genus": "Lycaon",
  "endangeredStatus": "Endangered",
  "locations": ["Africa"],
  "population": 1409,
  "threats": ["Disease", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/10341/images/hero_full/wild_dogs-web.jpg?1447180370"
  },
  { 
  "name": "Brown Bear",
  "genus": "Ursus",
  "endangeredStatus": "Least Concerned",
  "locations": ["United States", "Canada", "Russia"],
  "population": 110000,
  "threats": ["Hunting", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/16934/images/hero_full/Medium_WW266637.jpg?1551469111"
  },
  { 
  "name": "Giant Panda",
  "genus": "Ailuropoda",
  "endangeredStatus": "Vulnerable",
  "locations": ["China"],
  "population": 1864,
  "threats": ["Hunting", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/11551/images/hero_full/Bernard_de_wetter_wwf_canon_113974.jpg?1462218465"
  },
  { 
  "name": "Red Panda",
  "genus": "Ailurus",
  "endangeredStatus": "Endangered",
  "locations": ["Nepal", "Bhutan", "India", "Tibet", "Myanmar"],
  "population": 9000,
  "threats": ["Hunting"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/806/images/hero_full/SCR_47384.jpg?1345530917"
  },
  { 
  "name": "Polar Bear",
  "genus": "Ursus",
  "endangeredStatus": "Vulnerable",
  "locations": ["Arctic"],
  "population": 22000,
  "threats": ["Climate Change", "Human Contact", "Industrial Imapcts", "Hunting"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/2330/images/hero_full/polar-bear-hero.jpg?1345901694"
  },
  { 
  "name": "Bison",
  "genus": "Bison",
  "endangeredStatus": "Near Threatened",
  "locations": ["United States", "Canada"],
  "population": 20504,
  "threats": ["Habitat Loss", "Genetics", "Political support of Bison Reintroduction"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/10646/images/hero_full/ThomasSzajner_20141004-20141004-KB1A5172.jpg?1452530740"
  },
  { 
  "name": "Hawksbills Turtle",
  "genus": "Eretmochelys",
  "endangeredStatus": "Critically Endangered",
  "locations": [ "Coral Triangle", "Coastal East Africa", "Mesoamerican Reef" ],
  "population": "Unknown",
  "threats": ["Poaching", "ByCatch" ],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1257/images/hero_full/SeaTurtle-1600x600px.jpg?1345590072"
  },
  { 
  "name": "Loggerhead  Turtle",
  "genus": "Caretta",
  "endangeredStatus": "Vulnerable",
  "locations": ["Mesoamerican Reef", "Coastal East Africa", "Gulf of California", "Coral Triangle"],
  "population": "Unknown",
  "threats": ["ByCatch"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/297/images/hero_full/MID_110648loggerhead-hero.jpg?1345568357"
  },
  { 
  "name": "Leatherback Turtle",
  "genus": "Dermochelys",
  "endangeredStatus": "Vulnerable",
  "locations": ["Mesoamerican Reef", "Coastal East Africa", "Gulf of California", "Coral Triangle", "The Galápagos"], 
  "population": "Unknown",
  "threats": ["ByCatch", "Habitat Loss", "Overharvesting", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/319/images/story_full_width/SCR_105025.jpg?1345568794"
  },
  { 
  "name": "Green Turtle",
  "genus": "Chelonia",
  "endangeredStatus": "Endangered",
  "locations": ["Mesoamerican Reef", "Coastal East Africa", "Gulf of California", "Coral Triangle", "The Galápagos"], 
  "population": "Unknown",
  "threats": ["ByCatch", "Habitat Loss", "Overharvesting", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/322/images/hero_full/Green_Turtle_Hero_image_260214.jpg?1345519611"
  },
  { 
  "name": "Olive Ridley Turtle",
  "genus": "Lepidochelys",
  "endangeredStatus": "Endangered",
  "locations": ["Mesoamerican Reef", "Coastal East Africa", "Gulf of California", "Coral Triangle"], 
  "population": "Unknown",
  "threats": ["ByCatch", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/418/images/hero_full/HI_287332Circle.jpg?1345522102"
  },
  { 
  "name": "Sumatran Elephant",
  "genus": "Elephas",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Borneo", "Sumatra"], 
  "population": 2800,
  "threats": ["Poaching", "Deforestation", "Habitat Loss", "Human Intolerance"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1683/images/hero_full/MID_247517.jpg?1345600799"
  },
  { 
  "name": "Sumatran Orangutan",
  "genus": "Pongo",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Borneo", "Sumatra"], 
  "population": 14613,
  "threats": ["Hunting", "Deforestation", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1365/images/hero_full/sumatran_orangutan_8.6.2012_Hero_and_Circle_image_XL_257636.jpg?1345592809"
  },
  { 
  "name": "Bornean Orangutan",
  "genus": "Pongo",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Borneo", "Sumatra"], 
  "population": 104700,
  "threats": ["Illegal Wildlife Trade", "Deforestation", "Habitat Loss", "Human Intolerance"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1145/images/hero_full/Bornean_Orangutan_8.1.2012_hero_and_circle_XL_279107.jpg?1345587030"
  },
  { 
  "name": "Saola",
  "genus": "Pseudoryx",
  "endangeredStatus": "Critically Endangered",
  "locations": ["China", "Myanmar", "Laos", "Thailand", "Cambodia", "Vietnam"], 
  "population": "Unknown",
  "threats": ["Habitat Loss", "Hunting"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/156/images/hero_full/LG-Saola_Hero_image_%28c%29_David_Hulse_WWF_Canon.jpg?1345515547"
  },
  { 
  "name": "Black Rhino",
  "genus": "Diceros",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Namibia", "Africa"], 
  "population": 5000,
  "threats": ["Habitat Loss", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1376/images/hero_full/Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg?1345543661"
  },
  { 
  "name": "Western Lowland Gorilla",
  "genus": "Gorilla",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Congo Basin", "Africa"],
  "population": "Unknown",
  "threats": ["Habitat Loss", "Deforestation", "Illegal WildLife Trade"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1108/images/hero_full/Western_lowland_gorilla_7.31.2012_hero_and_circle_HI_105208.jpg?1345537656"
  },
  { 
  "name": "Mountain Gorilla",
  "genus": "Gorilla",
  "endangeredStatus": "Endangered",
  "locations": ["Congo Basin", "Africa"],
  "population": 1000,
  "threats": ["Habitat Loss", "Disease", "Human Intolerance", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1719/images/hero_full/Mountain_Gorilla_8.10.2012_New_Hero_Image_HI_45487.jpg?1345601711"
  },
  { 
  "name": "Javan Rhino",
  "genus": "Rhinoceros",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Indonesia"],
  "population": 68,
  "threats": ["Habitat Loss", "Disease", "Human Intolerance", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/9496/images/hero_full/_H9A0249.jpg?1436885827"
  },
  { 
  "name": "Blue Whale",
  "genus": "Balaenoptera",
  "endangeredStatus": "Endangered",
  "locations": ["Southern Chile", "Gulf of California", "Coral Triangle"],
  "population": 25000,
  "threats": ["Habitat Loss", "Ship Strikes", "Fishing Nets", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/386/images/hero_full/MID_257828hero.jpg?1345521182"
  },
  { 
  "name": "Great White Shark",
  "genus": "Carcharodon",
  "endangeredStatus": "Vulnerable",
  "locations": ["Gulf of California", "Southern Chile", "The Galápagos", "Coastal East Africa"],
  "population": "Unknown",
  "threats": ["ByCatch", "Hunting", "Fishing Nets", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1087/images/hero_full/Species_Great_White_Shark_WWF_Carlos_Aguilera.jpg?1345585501"
  },
  { 
  "name": "Galápagos Penguin",
  "genus": "Spheniscus",
  "endangeredStatus": "Endangered",
  "locations": ["The Galápagos"],
  "population": 2000,
  "threats": ["ByCatch", "Pollution", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/493/images/hero_full/shutterstock_89694280.jpg?1367330837"
  },
]

const countries = [ 
  {
    "name": "China",
    "population": 1418791076,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Mongolia",
    "population": 3166244,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Amazonian Brazil",
    "population": 212392717,	
    "topThreats": ["Deforestation", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "South America",
    "population": 431998475,
    "topThreats": ["Deforestation", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Central America",
    "population": 47448333,
    "topThreats": ["Deforestation", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Mexico",
    "population": 132328035,
    "topThreats": ["Climate Change", "Human Intolerance"]
  },
  {
    "name": "Borneo",
    "population": 21258000,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Sumatra",
    "population": 50180000, 
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Russia",
    "population": 
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Myanmar",
    "population": 143895551,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Laos",
    "population": 7037709,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Thailand",
    "population": 69306160,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Cambodia",
    "population": 16482646,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Vietnam",
    "population": 97429061,	
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "Africa",
    "population": 1287920518,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"]
  },
  {
    "name": "United States",
    "population": 329093110,
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"]
  },
  {
    "name": "Canada",
    "population": 37279811,	
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"]
  },
  {
    "name": "Nepal",
    "population": 29942018,	
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"]
  },
  {
    "name": "Bhutan",
    "population": 826229,
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"]
  },
  {
    "name": "Tibet",
    "population": 3180000,
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"]
  },
  {
    "name": "Arctic",
    "population": 4000000,
    "topThreats": ["Climate Change", "Habitat Loss"]
  },
  {
    "name": "Coral Triangle",
    "population": 120000000,
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"]
  },
  {
    "name": "Coastal East Africa",
    "population": "Unknown"
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"]
  },
  {
    "name": "Mesoamerican Reef",
    "population": 2000000,
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"]
  },
  {
    "name": "Gulf of California",
    "population": "Unknown"
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"]
  },
  {
    "name": "The Galápagos",
    "population": 25124,
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"]
  },
  {
    "name": "Namibia",
    "population": 2627918,
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"]
  },
  {
    "name": "Congo Basin",
    "population": 5542197,	
    "topThreats": ["Climate Change", "Habitat Loss", "Deforestation"]
  },
  {
    "name": "Indonesia",
    "population": 269536482,
    "topThreats": ["Climate Change", "Habitat Loss", "Deforestation"]
  },
  {
    "name": "Southern Chile",
    "population": 18336653,
    "topThreats": ["Climate Change", "Habitat Loss"]
  }
]

module.exports = {
  endangeredSpecies,
  countries
}