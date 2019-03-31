const dietaryRestrictions = [
  { 
    "id": 201,
    "type": "Vegan",
    "reason": ["religion/belief", "health", "ethical"],
    "restrictedFoods": ["meat", "dairy", "fish", "eggs", "honey"],
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
    "percentOfPopulation": .7,
    "healthRisk": false,
    "website": "https://thrivemeetings.com/2018/01/religious-dietary-restrictions-guide/"
  }, 
  {
    "id": 205,
    "type": "Kosher",
    "reason": ["religion/belief", "ethical"],
    "restrictions": ["shellfish", "pork", "other"],
    "percentOfPopulation": .4,
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
    "percentOfPopulation": .9,
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
    "percentOfPopulation": .8,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/wheat-allergy"
  }, 
  {
    "id": 106,
    "type": "Tree Nut Allergy",
    "reason": ["health", "allergy", "potentially life-threatening reaction"],
    "restrictions": ["tree-nuts", "coconut", "walnut", "pecan", "pistachio"],
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
    "percentOfPopulation": .6,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/soy-allergy"
  }, 
  {
    "id": 109,
    "type": "Corn Allergy",
    "reason": ["health", "allergy"],
    "restrictions": ["corn", "cornstarch", "popcorn", "corn syrup"],
    "percentOfPopulation": .2,
    "healthRisk": true,
    "website": "https://www.foodallergy.org/common-allergens/other-food-allergens#corn"
  }, 
  {
    "id": 109,
    "type": "Sesame Allergy",
    "reason": ["health", "allergy"],
    "restrictions": ["sesame seeds", "sesame oil"],
    "percentOfPopulation": .2,
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
    "percentOfPopulation": 15,
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
    "reason": ["health", "intolerance", "sensitivity", "preference"],
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



  allergies:

  // 1. milk  https://www.foodallergy.org/common-allergens/milk-allergy 1.9%
  // 2. eggs https://www.foodallergy.org/common-allergens/egg-allergy 2%
  // 3. fish https://www.foodallergy.org/common-allergens/fish-allergy .9
  // 4. shellfish https://www.foodallergy.org/common-allergens/shellfish-allergy 2.9%
  // 5. wheat https://www.foodallergy.org/common-allergens/wheat-allergy .8
  // 6. tree nuts https://www.foodallergy.org/common-allergens/peanut-allergy 1.2%
  // 7. peanuts https://www.foodallergy.org/common-allergens/peanut-allergy 1.8
  // 8. soy https://www.foodallergy.org/common-allergens/soy-allergy .6
  // 9. diabetes 9.4%
  // 10. Celiac/gluten sensitivity https://health.usnews.com/best-diet/gluten-free-diet 5.6%
  // 11. Dairy Free / lactose - intolerance 15 % ["milk", "cheese", "yogurt"] https://www.mayoclinic.org/diseases-conditions/lactose-intolerance/symptoms-causes/syc-20374232
  
  // 12. vegan
  // 13. vegetarian https://health.usnews.com/best-diet/vegetarian-diet
  // 14. kosher ["shellfish", "pork", ].4%
  // 15. halal ["pork", "alcohol"] 1.3
  // 16. jain
  // 17. pescetarian/flexitarian ["beef", "pork", "chicken", "meat"] 5%
  18. Paleo https://health.usnews.com/best-diet/paleo-diet 1%
  19. Anti Inflammatory https://health.usnews.com/best-diet/anti-inflammatory-diet unknown
  20. Mediterranean https://health.usnews.com/best-diet/mediterranean-diet unknown
  21. keto https://health.usnews.com/best-diet/keto-diet unknown
  22. DASH https://health.usnews.com/best-diet/dash-diet unknown
  23. Whole 30 https://health.usnews.com/best-diet/whole30-diet unknown
  24. low - carb high protein [Breads
Chips
Crackers
Added sugar
Juice
Cereal
Milk
Beer
Cake
corn,
potatoes] 30%
  // 25. hinduism / jain ["beef", "meat", "fish", "alcohol", "egg"].7
//   26. nightshades [White potatoes
// Tomatoes
// Sweet and bell peppers
// Hot chili peppers(all varieties)
// Eggplant
// Tomatillo] "unknown"
  27. Oral Allergy Syndrome 5%
  // 28. FPIES http://fpiesfoundation.org/ .3
  // 29. sesame https://www.foodallergy.org/common-allergens/sesame-allergy .2%
  // 30. corn https://www.foodallergy.org/common-allergens/other-food-allergens#corn .2%



  // { "categoryId": 1, "question": "Lorem Ipsum Dolor?", "answer": "Consequetar" },
  // { "categoryId": 2, "question": "Nullum Vestibulum?", "answer": "Adipscing" }
  { "categoryId": 1, "question": "Lorem Ipsum Dolor?", "answer": "Consequetar" },
  { "categoryId": 2, "question": "Nullum Vestibulum?", "answer": "Adipscing" }
];

const commonFoods = [
  { "id": 1, "name": "History" },
  { "id": 2, "name": "Geography" }
];


module.exports = {
  dietaryRestrictions,
  commonFoods
}