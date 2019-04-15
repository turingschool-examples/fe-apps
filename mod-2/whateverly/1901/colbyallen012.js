const leoMovies = [
  {
    "title": "inception",
    "year": 2010,
    "imdbRating": 8.8,
    "category": "action",
    "director": "christopher nolan",
    "rating": "pg13",
    "role": "cobb",
    "wonAward": true
  },
  {
    "title": "the departed",
    "year": 2006,
    "imdbRating": 8.5,
    "category": "drama",
    "director": "martin scorsese",
    "rating": "r",
    "role": "billy costigan",
    "wonAward": true
  },
  {
    "title": "django unchained",
    "year": 2012,
    "imdbRating": 8.4,
    "category": "western",
    "director": "quentin tarantino",
    "rating": "r",
    "role": "calvin candie",
    "wonAward": true
  },
  {
    "title": "before the flood",
    "year": 2016,
    "imdbRating": 8.3,
    "category": "documentary",
    "director": "fisher stevens",
    "rating": "pg",
    "role": "himself",
    "wonAward": false
  },
  {
    "title": "wolf of wallstreet",
    "year": 2013,
    "imdbRating": 8.2,
    "category": "drama",
    "director": "martin scorsese",
    "rating": "r",
    "role": "jordan belfort",
    "wonAward": true
  },
  {
    "title": "shutter island",
    "year": 2010,
    "imdbRating": 8.1,
    "category": "thriller",
    "director": "martin scorsese",
    "rating": "r",
    "role": "teddy daniels",
    "wonAward": true
  },
  {
    "title": "catch me if you can",
    "year": 2002,
    "imdbRating": 8.1,
    "category": "drama",
    "director": "steven spielberg",
    "rating": "pg13",
    "role": "frank abagnale jr",
    "wonAward": true
  },
  {
    "title": "the revenant",
    "year": 2015,
    "imdbRating": 8,
    "category": "action",
    "director": "Alejandro Inarritu",
    "rating": "r",
    "role": "hugh glass",
    "wonAward": true
  },
  {
    "title": "blood diamond",
    "year": 2006,
    "imdbRating": 8,
    "category": "drama",
    "director": "edward zick",
    "rating": "r",
    "role": "danny archer",
    "wonAward": false
  },
  {
    "title": "titanic",
    "year": 1997,
    "imdbRating": 7.8,
    "category": "romance",
    "director": "james cameron",
    "rating": "pg13",
    "role": "jack dawson",
    "wonAward": true
  },
  {
    "title": "whats eating gilbert grape",
    "year": 1993,
    "imdbRating": 7.8,
    "category": "drama",
    "director": "lasse hallstrom",
    "rating": "pg13",
    "role": "arnie grape",
    "wonAward": true
  },
  {
    "title": "hubble",
    "year": 2010,
    "imdbRating": 7.8,
    "category": "documentary",
    "director": "toni myers",
    "rating": "g",
    "role": "himself",
    "wonAward": false
  },
  {
    "title": "gangs of new york",
    "year": 2002,
    "imdbRating": 7.5,
    "category": "drama",
    "director": "martin scorsese",
    "rating": "r",
    "role": "amsterdam vallon",
    "wonAward": false
  },
  {
    "title": "the aviator",
    "year": 2004,
    "imdbRating": 7.5,
    "category": "drama",
    "director": "martin scorsese",
    "rating": "pg13",
    "role": "howard hughes",
    "wonAward": true
  },
  {
    "title": "the great gatsby",
    "year": 2013,
    "imdbRating": 7.3,
    "category": "romance",
    "director": "baz luhrmann",
    "rating": "pg13",
    "role": "jay gatsby",
    "wonAward": true
  },
  {
    "title": "revolutionary road",
    "year": 2008,
    "imdbRating": 7.3,
    "category": "romance",
    "director": "sam mendes",
    "rating": "r",
    "role": "frank wheeler",
    "wonAward": true
  },
  {
    "title": "the basketball diaries",
    "year": 1995,
    "imdbRating": 7.3,
    "category": "drama",
    "director": "scott kalvert",
    "rating": "r",
    "role": "jim carroll",
    "wonAward": false
  },
  {
    "title": "this boys life",
    "year": 1993,
    "imdbRating": 7.3,
    "category": "drama",
    "director": "michael caton-jones",
    "rating": "r",
    "role": "toby",
    "wonAward": false
  },
  {
    "title": "the 11th hour",
    "year": 2007,
    "imdbRating": 7.3,
    "category": "documentary",
    "director": "leila conners",
    "rating": "pg",
    "role": "himself",
    "wonAward": false
  },
  {
    "title": "body of lies",
    "year": 2008,
    "imdbRating": 7.1,
    "category": "thriller",
    "director": "ridley scott",
    "rating": "r",
    "role": "roger ferris",
    "wonAward": false
  },
  {
    "title": "romeo and juliet",
    "year": 1996,
    "imdbRating": 6.8,
    "category": "romance",
    "director": "baz luhrmann",
    "rating": "pg13",
    "role": "romeo",
    "wonAward": true
  },
  {
    "title": "marvins room",
    "year": 1996,
    "imdbRating": 6.7,
    "category": "drama",
    "director": "jerry zaks",
    "rating": "pg13",
    "role": "hank",
    "wonAward": false
  },
  {
    "title": "the beach",
    "year": 2000,
    "imdbRating": 6.6,
    "category": "drama",
    "director": "danny boyle",
    "rating": "r",
    "role": "richard",
    "wonAward": false
  },
  {
    "title": "j edgar",
    "year": 2011,
    "imdbRating": 6.6,
    "category": "biography",
    "director": "clint eastwood",
    "rating": "r",
    "role": "j edgar hoover",
    "wonAward": false
  },
  {
    "title": "total eclipse",
    "year": 1995,
    "imdbRating": 6.6,
    "category": "romance",
    "director": "agnieszka holland",
    "rating": "r",
    "role": "arthur rimbaud",
    "wonAward": false
  },
  {
    "title": "the man in the iron mask",
    "year": 1998,
    "imdbRating": 6.5,
    "category": "action",
    "director": "randall wallace",
    "rating": "pg13",
    "role": "king louis",
    "wonAward": true
  },
  {
    "title": "the quick and the dead",
    "year": 1995,
    "imdbRating": 6.4,
    "category": "romance",
    "director": "sam raimi",
    "rating": "r",
    "role": "kid",
    "wonAward": false
  },
  {
    "title": "celebrity",
    "year": 1998,
    "imdbRating": 6.3,
    "category": "comedy",
    "director": "woody allen",
    "rating": "r",
    "role": "brandon darrow",
    "wonAward": false
  },
  {
    "title": "dons plum",
    "year": 2001,
    "imdbRating": 5.9,
    "category": "comedy",
    "director": "rd robb",
    "rating": "r",
    "role": "derek",
    "wonAward": false
  },
  {
    "title": "poison ivy",
    "year": 1992,
    "imdbRating": 5.4,
    "category": "drama",
    "director": "katt shea",
    "rating": "r",
    "role": "himself",
    "wonAward": false
  }
] 

const leoAwards = [
  {
    "award": "scream awards",
    "work": "best scifi actor",
    "movie": "inception"
  },
  {
    "award": "satelite awards",
    "work": "best supporting actor",
    "movie": "the departed"
  },
  {
    "award": "national board of review",
    "work": "best supporting actor",
    "movie": "django unchained"
  },
  {
    "award": "mtv movie awards",
    "work": "best wtf moment",
    "movie": "wolf of wallstreet"
  },
  {
    "award": "teen choice awards",
    "work": "choice thriller actor",
    "movie": "shutter island"
  },
  {
    "award": "teen choice award",
    "work": "choice movie liar",
    "movie": "catch me if you can"
  },
  {
    "award": "academy awards",
    "work": "best actor",
    "movie": "the revenant"
  },
  {
    "award": "mtv movie awards",
    "work": "best male performance",
    "movie": "titanic"
  },
  {
    "award": "aacta",
    "work": "best actor",
    "movie": "the great gatsby"
  },
  {
    "award": "berlin internation film festival",
    "work": "best actor",
    "movie": "romeo and juliet"
  }
]

  
  module exports = {
    leoMovies,
    leoAwards
  }