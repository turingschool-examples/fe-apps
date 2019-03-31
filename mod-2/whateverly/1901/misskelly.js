const dietaryRestrictions = [
  {
    "id": 201,
    "type": "Vegan",
    "reason": ["religion/belief", "health", "ethical"],
    "restrictedFoods": ["meat", "poultry", "dairy", "fish", "shellfish", "eggs", "honey"],
    "percentOfPopulation": 3,
    "healthRisk": false,
    "website": "https://health.usnews.com/best-diet/vegan-diet"
  },
  {
    "id": 202,
    "type": "Vegetarian",
    "reason": ["religion/belief", "health", "ethical"],
    "restrictions": ["meat", "fish"],
    "percentOfPopulation": 5,
    "healthRisk": false,
    "website": "https://health.usnews.com/best-diet/vegetarian-diet"
  },
  {
    "id": 203,
    "type": "Pescetarian/Flexitarian",
    "reason": ["religion/belief", "health", "ethical"],
    "restrictions": ["beef", "pork", "chicken", "meat"],
    "percentOfPopulation": 5,
    "healthRisk": false,
    "website": "https://health.usnews.com/best-diet/vegetarian-diet"
  },
  {
    "id": 204,
    "type": "Hinduism / Jain",
    "reason": ["religion/belief", "ethical"],
    "restrictions": ["beef", "chicken", "poultry", "meat", "fish", "alcohol", "egg"],
    "percentOfPopulation": 0.7,
    "healthRisk": false,
    "website": "https://thrivemeetings.com/2018/01/religious-dietary-restrictions-guide/"
  },
  {
    "id": 205,
    "type": "Kosher",
    "reason": ["religion/belief", "ethical"],
    "restrictions": ["shellfish", "pork", "other"],
    "percentOfPopulation": 0.4,
    "healthRisk": false,
    "website": "https://oukosher.org/"
  },
  {
    "id": 206,
    "type": "Halal",
    "reason": ["religion/belief", "ethical"],
    "restrictions": ["shellfish", "pork", "alcohol", "other"],
    "percentOfPopulation": 1.3,
    "healthRisk": false,
    "website": "https://www.halalfoodauthority.com/definition-of-halal"
  },
  {
    "id": 101,
    "type": "Milk Allergy",
    "reason": ["health", "allergy", "potentially life-threatening reaction"],
    "restrictions": ["dairy", "milk", "cheese", "yogurt", "ice cream", "butter"],
    "percentOfPopulation": 1.9,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/milk-allergy"
  },
  {
    "id": 102,
    "type": "Egg Allergy",
    "reason": ["health", "allergy", "potentially life-threatening reaction"],
    "restrictions": ["egg", "mayonnaise", "fried food"],
    "percentOfPopulation": 2,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/egg-allergy"
  },
  {
    "id": 103,
    "type": "Fish Allergy",
    "reason": ["health", "allergy", "potentially life-threatening reaction"],
    "restrictions": ["fish", "salmon", "tuna", "cod", "tilapia"],
    "percentOfPopulation": 0.9,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/fish-allergy"
  },
  {
    "id": 104,
    "type": "Shellfish Allergy",
    "reason": ["health", "allergy", "potentially life-threatening reaction"],
    "restrictions": ["shellfish", "crab", "shrimp", "lobster", "oysters", "clams", "mussels"],
    "percentOfPopulation": 2.9,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/shellfish-allergy"
  },
  {
    "id": 105,
    "type": "Wheat Allergy",
    "reason": ["health", "allergy", "potentially life-threatening reaction"],
    "restrictions": ["wheat", "bread", "crackers", "flour", "cake"],
    "percentOfPopulation": 0.8,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/wheat-allergy"
  },
  {
    "id": 106,
    "type": "Tree Nut Allergy",
    "reason": ["health", "allergy", "potentially life-threatening reaction"],
    "restrictions": ["tree nut", "coconut", "walnut", "pecan", "pistachio"],
    "percentOfPopulation": 1.2,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/tree-nut-allergy"
  },
  {
    "id": 107,
    "type": "Peanut Allergy",
    "reason": ["health", "allergy", "potentially life-threatening reaction"],
    "restrictions": ["peanuts", "coconut", "walnut", "pecan", "pistachio"],
    "percentOfPopulation": 1.8,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/peanut-allergy"
  },
  {
    "id": 108,
    "type": "Soy Allergy",
    "reason": ["health", "allergy", "potentially life-threatening reaction"],
    "restrictions": ["soy", "soy sauce", "edamame", "tofu", "miso"],
    "percentOfPopulation": 0.6,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/soy-allergy"
  },
  {
    "id": 109,
    "type": "Corn Allergy",
    "reason": ["health", "allergy"],
    "restrictions": ["corn", "cornstarch", "popcorn", "corn syrup"],
    "percentOfPopulation": 0.2,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/other-food-allergens#corn"
  },
  {
    "id": 109,
    "type": "Sesame Allergy",
    "reason": ["health", "allergy"],
    "restrictions": ["sesame seeds", "sesame oil"],
    "percentOfPopulation": 0.2,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/sesame-allergy"
  },
  {
    "id": 110,
    "type": "Lactose Intolerance",
    "reason": ["health", "intolerance"],
    "restrictions": ["milk", "cheese", "yogurt", "ice cream", "butter"],
    "percentOfPopulation": 15,
    "healthRisk": true,
    "website": "https://www.mayoclinic.org/diseases-conditions/lactose-intolerance/symptoms-causes/syc-20374232"
  },
  {
    "id": 111,
    "type": "FPIES (Food Protein Induced Enterocolitis Syndrome)",
    "reason": ["health", "intolerance", "potentially life-threatening reaction"],
    "restrictions": ["dairy", "oats", "rice", "soy"],
    "percentOfPopulation": 0.5,
    "healthRisk": true,
    "website": "http://fpiesfoundation.org/"
  },
  {
    "id": 112,
    "type": "Celiac",
    "reason": ["health", "intolerance", "allergy", "disease"],
    "restrictions": ["wheat", "bread", "crackers", "flour", "cake", "barley", "beer", "pasta"],
    "percentOfPopulation": 1,
    "healthRisk": true,
    "website": "https://health.usnews.com/best-diet/gluten-free-diet"
  },
  {
    "id": 113,
    "type": "Gluten-Free",
    "reason": ["health", "intolerance", "sensitivity", "preference"],
    "restrictions": ["wheat", "bread", "crackers", "flour", "cake", "barley", "beer", "pasta"],
    "percentOfPopulation": 5.6,
    "healthRisk": true,
    "website": "https://health.usnews.com/best-diet/gluten-free-diet"
  },
  {
    "id": 114,
    "type": "Nightshades Sensitivity",
    "reason": ["health", "intolerance", "sensitivity"],
    "restrictions": ["tomatoes", "white potatoes", "bell peppers", "hot chili peppers", "eggplant"],
    "percentOfPopulation": "unknown",
    "healthRisk": true,
    "website": "https://healingautoimmune.com/list-of-nightshades-foods"
  },
  {
    "id": 115,
    "type": "Diabetes",
    "reason": ["health", "disease", "potentially life-threatening reaction"],
    "restrictions": ["sugar", "soda", "butter", "candy", "syrup", "chocolate", "bacon", "pasta", "juice", "cake", "beer", "honey", "fried food"],
    "percentOfPopulation": 9.4,
    "healthRisk": true,
    "website": "http://www.diabetes.org/food-and-fitness/food/what-can-i-eat/"
  },
  {
    "id": 116,
    "type": "Oral Allergy Syndrome",
    "reason": ["health", "allergy"],
    "restrictions": ["banana", "avocado", "kiwi", "melon", "watermelon", "cantaloupe"],
    "percentOfPopulation": 5,
    "healthRisk": true,
    "website": "https://www.nationaljewish.org/health-insights/health-infographics/oral-allergy-syndrome-oas-fruits-veg-mouth-itchy"
  },
  {
    "id": 117,
    "type": "GERD (Gastroesophageal Reflux Disease",
    "reason": ["health", "disease", "sensitivity"],
    "restrictions": ["lemon", "orange", "tomato", "pineapple", "alcohol", "soda", "onion", "hot pepper", "chocolate"],
    "percentOfPopulation": 5,
    "healthRisk": true,
    "website": "https://www.medicalnewstoday.com/articles/314690.php"
  },
  {
    "id": 301,
    "type": "Paleo",
    "reason": ["health", "weight-loss"],
    "restrictions": ["pasta", "bread", "juice", "rice", "quinoa", "oats", "grains", "soda", "corn", "dairy", "sugar", "soy", "peanuts", "potatoes", "beer", "wine", "fried food"],
    "percentOfPopulation": 5,
    "healthRisk": false,
    "website": "https://health.usnews.com/best-diet/paleo-diet"
  },
  {
    "id": 302,
    "type": "Anti-Inflammatory",
    "reason": ["health", "weight-loss"],
    "restrictions": ["wheat", "butter", "bread", "pasta", "crackers", "flour", "cake", "barley", "beer", "pasta", "soda", "dessert", "fried food", "beer", "wine"],
    "percentOfPopulation": "unknown",
    "healthRisk": false,
    "website": "https://health.usnews.com/best-diet/anti-inflammatory-diet"
  },
  {
    "id": 303,
    "type": "Mediterranean",
    "reason": ["health", "weight-loss"],
    "restrictions": ["wheat", "bread", "pasta", "butter", "crackers", "flour", "cake", "barley", "beer", "pasta", "soda", "dessert", "fried food", "beer", "milk chocolate", "whole milk"],
    "percentOfPopulation": "unknown",
    "healthRisk": false,
    "website": "https://health.usnews.com/best-diet/mediterranean-diet"
  },
  {
    "id": 304,
    "type": "Ketogenic",
    "reason": ["health", "weight-loss"],
    "restrictions": ["bread", "butter", "beer", "grains", "soda", "dessert", "fried food", "beer", "milk chocolate", "whole milk", "rice", "fruit", "potatoes", "candy"],
    "percentOfPopulation": "unknown",
    "healthRisk": false,
    "website": "https://health.usnews.com/best-diet/mediterranean-diet"
  }
]

const commonFoods = [
  {
    "name": "grapes",
    "emoji": "🍇",
    "category": ["fruit"]
  },
  {
    "name": "melon",
    "emoji": "🍈",
    "category": ["fruit"]
  },
  {
    "name": "watermelon",
    "emoji": "🍉",
    "category": ["fruit"]
  },
  {
    "name": "orange",
    "emoji": "🍊",
    "category": ["fruit"]
  },
  {
    "name": "lemon",
    "emoji": "🍋",
    "category": ["fruit"]
  },
  {
    "name": "banana",
    "emoji": "🍌",
    "category": ["fruit"]
  },
  {
    "name": "pineapple",
    "emoji": "🍍",
    "category": ["fruit"]
  },
  {
    "name": "apple",
    "emoji": "🍎",
    "category": ["fruit"]
  },
  {
    "name": "pear",
    "emoji": "🍐",
    "category": ["fruit"]
  },
  {
    "name": "peach",
    "emoji": "🍑",
    "category": ["fruit"]
  },
  {
    "name": "cherries",
    "emoji": "🍒",
    "category": ["fruit"]
  },
  {
    "name": "strawberry",
    "emoji": "🍓",
    "category": ["fruit"]
  },
  {
    "name": "kiwi",
    "emoji": "🥝",
    "category": ["fruit"]
  },
  {
    "name": "tomato",
    "emoji": "🍅",
    "category": ["fruit", "vegetable"]
  },
  {
    "name": "avocado",
    "emoji": "🥑",
    "category": ["fruit", "vegetable"]
  },
  {
    "name": "eggplant",
    "emoji": "🍆",
    "category": ["vegetable"]
  },
  {
    "name": "potato",
    "emoji": "🥔",
    "category": ["vegetable", "starch"]
  },
  {
    "name": "sweet potato",
    "emoji": "🍠",
    "category": ["vegetable", "starch"]
  },
  {
    "name": "carrot",
    "emoji": "🥕",
    "category": ["vegetable"]
  },
  {
    "name": "corn",
    "emoji": "🌽",
    "category": ["vegetable", "starch", "grain"]
  },
  {
    "name": "hot pepper",
    "emoji": "🌶",
    "category": ["vegetable"]
  },
  {
    "name": "cucumber",
    "emoji": "🥒",
    "category": ["vegetable"]
  },
  {
    "name": "mushroom",
    "emoji": "🍄",
    "category": ["vegetable"]
  },
  {
    "name": "peanuts",
    "emoji": "🥜",
    "category": ["legume"]
  },
  {
    "name": "hazelnut",
    "emoji": "🌰",
    "category": ["tree nut"]
  },
  {
    "name": "coconut",
    "emoji": "🥥",
    "category": ["tree nut"]
  },
  {
    "name": "walnut",
    "emoji": "🌰",
    "category": ["tree nut"]
  },
  {
    "name": "pecan",
    "emoji": "🌰",
    "category": ["tree nut"]
  },
  {
    "name": "whole wheat bread",
    "emoji": "🍞",
    "category": ["starch", "bread"]
  },
  {
    "name": "croissant",
    "emoji": "🥐",
    "category": ["bread", "starch"]
  },
  {
    "name": "french bread",
    "emoji": "🥖",
    "category": ["bread", "starch"]
  },
  {
    "name": "pancakes",
    "emoji": "🥞",
    "category": ["bread", "starch", "dessert"]
  },
  {
    "name": "cheese",
    "emoji": "🧀",
    "category": ["dairy"]
  },
  {
    "name": "beef",
    "emoji": "🍖",
    "category": ["meat"]
  },
  {
    "name": "chicken",
    "emoji": "🍗",
    "category": ["meat", "poultry"]
  },
  {
    "name": "bacon",
    "emoji": "🥓",
    "category": ["meat", "pork"]
  },
  {
    "name": "cheeseburger",
    "emoji": "🍔",
    "category": ["meat", "bread", "dairy", "meal"]
  },
  {
    "name": "french fries",
    "emoji": "🍟",
    "category": ["junk food", "snack/side"]
  },
  {
    "name": "cheese pizza",
    "emoji": "🍕",
    "category": ["bread", "dairy", "tomato", "meal"]
  },
  {
    "name": "pepperoni pizza",
    "emoji": "🍕",
    "category": ["bread", "dairy", "tomato", "meal"]
  },
  {
    "name": "green salad",
    "emoji": "🥗",
    "category": ["bread", "dairy", "tomato", "meal"]
  },
  {
    "name": "hotdog",
    "emoji": "🌭",
    "category": ["meat", "bread", "meal"]
  },
  {
    "name": "beef taco",
    "emoji": "🌮",
    "category": ["meat", "corn", "dairy", "meal"]
  },
  {
    "name": "bean burrito",
    "emoji": "🌯",
    "category": ["bread", "meal"]
  },
  {
    "name": "popcorn",
    "emoji": "🍿",
    "category": ["corn", "snack/side"]
  },
  {
    "name": "crackers",
    "emoji": "🍘",
    "category": ["bread", "snack/side"]
  },
  {
    "name": "rice",
    "emoji": "🍚",
    "category": ["starch", "grain"]
  },
  {
    "name": "quinoa",
    "emoji": "🍚",
    "category": ["starch", "grain"]
  },
  {
    "name": "barley",
    "emoji": "🍚",
    "category": ["starch", "grain"]
  },
  {
    "name": "spaghetti",
    "emoji": "🍝",
    "category": ["starch", "tomato", "meal"]
  },
  {
    "name": "shrimp",
    "emoji": "🍤",
    "category": ["shellfish"]
  },
  {
    "name": "ice cream",
    "emoji": "🍨",
    "category": ["dairy", "dessert", "junk food"]
  },
  {
    "name": "doughnut",
    "emoji": "🍩",
    "category": ["bread", "dessert", "junk food"]
  },
  {
    "name": "cookie",
    "emoji": "🍪",
    "category": ["bread", "dessert", "junk food", "snack/side"]
  },
  {
    "name": "cake",
    "emoji": "🍰",
    "category": ["bread", "dessert", "junk food"]
  },
  {
    "name": "milk chocolate",
    "emoji": "🍫",
    "category": ["dairy", "dessert", "junk food"]
  },
  {
    "name": "dark chocolate",
    "emoji": "🍫",
    "category": ["dessert", "junk food"]
  },
  {
    "name": "candy",
    "emoji": "🍬",
    "category": ["junk food", "sugar"]
  },
  {
    "name": "custard flan",
    "emoji": "🍮",
    "category": ["dairy", "dessert", "junk food"]
  },
  {
    "name": "honey",
    "emoji": "🍯",
    "category": ["sugar"]
  },
  {
    "name": "lowfat milk",
    "emoji": "🥛",
    "category": ["dairy", "beverage"]
  },
  {
    "name": "whole milk",
    "emoji": "🥛",
    "category": ["dairy", "beverage"]
  },
  {
    "name": "black tea",
    "emoji": "🍵",
    "category": ["beverage"]
  },
  {
    "name": "black coffee",
    "emoji": "☕️",
    "category": ["beverage"]
  },
  {
    "name": "champagne",
    "emoji": "🍾",
    "category": ["beverage", "alcohol"]
  },
  {
    "name": "red wine",
    "emoji": "🍷",
    "category": ["beverage", "alcohol"]
  },
  {
    "name": "beer",
    "emoji": "🍺",
    "category": ["beverage", "alcohol"]
  }
]


module.exports = {
  dietaryRestrictions,
  commonFoods
}