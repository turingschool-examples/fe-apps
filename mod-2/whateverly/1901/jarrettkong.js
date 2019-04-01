const restaurants = [{
    name: "Uchi",
    cuisine: "Japanese",
    neighborhood: "River North",
    rating: 4.8,
    reservations: true
  },
  {
    name: "Guard and Grace",
    cuisine: "Steakhouse",
    neighborhood: "Downtown / LoDo",
    rating: 4.8,
    reservations: true
  },
  {
    name: "Rioja",
    cuisine: "Mediterranean",
    neighborhood: "Downtown / LoDo",
    rating: "4.7",
    reservations: true
  },
  {
    name: "ChoLon",
    cuisine: "Asian",
    neighborhood: "Downtown / LoDo",
    rating: "4.6",
    reservations: true
  },
  {
    name: "Potager",
    cuisine: "New American",
    neighborhood: "Capitol Hill",
    rating: 4.6,
    reservations: false
  },
  {
    name: "Stoic & Genuine",
    cuisine: "Seafood",
    neighborhood: "Downtown / LoDo",
    rating: 4.6,
    reservations: true,
    price: 2
  },
  {
    name: "Courier",
    cuisine: "New American",
    neighborhood: "Downtown / LoDo",
    rating: 4.2,
    reservations: true,
    price: 2
  },
  {
    name: "Ace Eat Serve",
    cuisine: "Asian",
    neighborhood: "Uptown",
    rating: 4.6,
    reservations: true,
    price: 2
  },
  {
    name: "Death & Co.",
    cuisine: "Cocktails",
    neighborhood: "River North",
    rating: 4.5,
    reservations: true,
    price: 2
  },
  {
    name: "Mercantile Dining & Provision",
    cuisine: "New American",
    neighborhood: "Downtown / LoDo",
    rating: 4.5,
    reservations: false,
    price: 2
  },
  {
    name: "narrative.",
    cuisine: "New American",
    neighborhood: "Cherry Creek",
    rating: 4.6,
    reservations: true,
    price: 2
  },
  {
    name: "Il Posto",
    cuisine: "Italian",
    neighborhood: "River North",
    rating: 4.3,
    reservations: true,
    price: 2
  },
  {
    name: "Root Down",
    cuisine: "New American",
    neighborhood: "Highlands",
    rating: 4.7,
    reservations: true,
    price: 2
  },
  {
    name: "Domo Japanese Country Food",
    cuisine: "Japanese",
    neighborhood: "Auraria",
    rating: 4.4,
    reservations: false,
    price: 2
  },
  {
    name: "Acorn",
    cuisine: "New American",
    neighborhood: "River North",
    rating: 4.5,
    reservations: false,
    price: 2
  },
  {
    name: "Hop Alley",
    cuisine: "Chinese",
    neighborhood: "River North",
    rating: 4.6,
    reservations: false,
    price: 2
  },
  {
    name: "Dio Mio",
    cuisine: "Italian",
    neighborhood: "River North",
    rating: 4.4,
    reservations: false,
    price: 2
  },
  {
    name: "Señor Bear",
    cuisine: "Latin American",
    neighborhood: "Highlands",
    rating: 4.6,
    reservations: true,
    price: 2
  },
  {
    name: "Bar Dough",
    cuisine: "Italian",
    neighborhood: "Highlands",
    rating: 4.5,
    reservations: true,
    price: 2
  },
  {
    name: "Beckon",
    cuisine: null,
    neighborhood: "River North",
    rating: 5,
    reservations: true,
    price: 4
  },
  {
    name: "The Bindery",
    cuisine: "New American",
    neighborhood: "Highlands",
    rating: 4.5,
    reservations: true,
    price: 2
  },
  {
    name: "Biju's Little Curry Shop",
    cuisine: "Indian",
    neighborhood: "River North",
    rating: 4.4,
    reservations: false,
    price: 1
  },
  {
    name: "Sushi Den / Izakaya Den",
    cuisine: "Japanese",
    neighborhood: "Platt Park",
    rating: 4.7,
    reservations: true,
    price: 3
  },
  {
    name: "El Five",
    cuisine: "Mediterranean",
    neighborhood: "Highlands",
    rating: 4.6,
    reservations: true,
    price: 3
  },
  {
    name: "Rosenberg’s Bagels & Delicatessen",
    cuisine: "Bagels",
    neighborhood: "Five Points",
    rating: 4.6,
    reservations: false,
    price: 2
  },
  {
    name: "Ultreia",
    cuisine: "Spanish",
    neighborhood: "Downtown / LoDo",
    rating: 4.4,
    reservations: true,
    price: 2
  },
  {
    name: "Tavernetta",
    cuisine: "Italian",
    neighborhood: "Downtown / LoDo",
    rating: 4.7,
    reservations: true,
    price: 3
  },
  {
    name: "Annette",
    cuisine: "Gastropub",
    neighborhood: "Aurora",
    rating: 4.6,
    reservations: true,
    price: 2
  },
  {
    name: "Frasca Food and Wine",
    cuisine: "Italian",
    neighborhood: "Boulder",
    rating: 4.6,
    reservations: false,
    price: 4
  },
  {
    name: "Beast + Bottle",
    cuisine: "New American",
    neighborhood: "Uptown",
    rating: 4.5,
    reservations: true,
    price: 3
  },
  {
    name: "Q House",
    cuisine: "Chinese",
    neighborhood: "City Park",
    rating: 4.6,
    reservations: true,
    price: 2
  },
  {
    name: "El Taco De Mexico",
    cuisine: "Mexican",
    neighborhood: "Lincoln Park",
    rating: 4.3,
    reservations: false,
    price: 1
  },
  {
    name: "New Saigon",
    cuisine: "Vietnamese",
    neighborhood: "Athmar Park",
    rating: 4.4,
    reservations: false,
    price: 2
  }
];

const neighborhoods = [{
    name: "Five Points",
    zipcodes: [80202, 80218, 80205, 80216]
  },
  {
    name: "Uptown",
    zipcodes: [80203, 80218]
  },
  {
    name: "Cherry Creek",
    zipcodes: [80206, 80209]
  },
  {
    name: "Downtown / LoDo",
    zipcodes: [80202]
  },
  {
    name: "Highlands",
    zipcodes: [80211, 80212]
  },
  {
    name: "River North",
    zipcodes: [80205]
  },
  {
    name: "Boulder",
    zipcodes: [80304, 80303, 80302, 80305]
  },
  {
    name: "Aurora",
    zipcodes: [80011, 80010, 80012, 80045]
  },
  {
    name: "Athmar Park",
    zipcodes: [80203, 80219]
  },
  {
    name: "Lincoln Park",
    zipcodes: [80204, 80202]
  },
  {
    name: "City Park",
    zipcodes: [80205, 80218, 80206]
  },
  {
    name: "Platt Park",
    zipcodes: [80210]
  },
  {
    name: "Capitol Hill",
    zipcodes: [80203, 80218]
  }
];

export default { restaurants, neighborhoods };