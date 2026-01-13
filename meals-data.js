// Complete meal data with ingredients and nutrition info
const mealsData = {
    breakfast: {
        name: "Breakfast (Fixed - Every Week)",
        ingredients: [
            { item: "Bananas", quantity: 4, unit: "", note: "add 3 more midweek" },
            { item: "Oats", quantity: 500, unit: "g" },
            { item: "Apple or Pear or Kiwi", quantity: 3, unit: "pieces", note: "rotate" },
            { item: "Strained Yoghurt", quantity: 1000, unit: "g", note: "for lunches also" },
            { item: "Eggs", quantity: 15, unit: "", note: "buy 30 for two weeks" },
            { item: "Mayo", quantity: 1, unit: "" },
            { item: "Ketchup", quantity: 1, unit: "" },
            { item: "Bread", quantity: 1, unit: "loaf", note: "one more midweek" },
            { item: "Milk", quantity: 1, unit: "L", optional: true, note: "for pancake" },
            { item: "Vanilla", quantity: 1, unit: "", optional: true, note: "for pancake" },
            { item: "Flour", quantity: 1, unit: "package", optional: true, note: "for pancake" }
        ],
        calories: 400,
        protein: 15
    },
    
    protein_base: {
        name: "Protein Base (For Lunches)",
        ingredients: [
            { item: "Chicken", quantity: 900, unit: "g", note: "or Meat" },
            { item: "Tuna", quantity: 280, unit: "g" }
        ]
    },
    
    lunches: {
        tandoori: {
            name: "Tandoori Chicken with Bulgur & Lentils",
            ingredients: [
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Cumin", quantity: 1, unit: "tsp" },
                { item: "Coriander", quantity: 1, unit: "tsp" },
                { item: "Black pepper", quantity: 1, unit: "tsp" },
                { item: "Bulgur", quantity: 250, unit: "g" },
                { item: "Lentils", quantity: 125, unit: "g" },
                { item: "Cucumber", quantity: 1, unit: "", note: "for tzatziki" }
            ],
            calories: 500,
            protein: 45
        },
        cilantro: {
            name: "Cilantro Chicken with Bulgur & Lentils",
            ingredients: [
                { item: "Cilantro", quantity: 1, unit: "bunch" },
                { item: "Cumin", quantity: 1, unit: "tsp" },
                { item: "Black pepper", quantity: 1, unit: "tsp" },
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Bulgur", quantity: 250, unit: "g" },
                { item: "Lentils", quantity: 125, unit: "g" },
                { item: "Cucumber", quantity: 1, unit: "", note: "for tzatziki" }
            ],
            calories: 500,
            protein: 45
        },
        kabsa: {
            name: "Kabsa with Rice",
            ingredients: [
                { item: "Cumin", quantity: 1, unit: "tsp" },
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Coriander", quantity: 1, unit: "tsp" },
                { item: "Black pepper", quantity: 1, unit: "tsp" },
                { item: "Tomato paste", quantity: 1, unit: "can" },
                { item: "Rice", quantity: 250, unit: "g" },
                { item: "Cucumber", quantity: 1, unit: "", note: "for tzatziki" }
            ],
            calories: 550,
            protein: 42
        },
        "creamy-chicken": {
            name: "Creamy Chicken with Mashed Potatoes/Rice",
            ingredients: [
                { item: "Onion", quantity: 1, unit: "" },
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Cumin", quantity: 1, unit: "tsp" },
                { item: "Potatoes", quantity: 4, unit: "small" },
                { item: "Cucumber", quantity: 1, unit: "", note: "for tzatziki" }
            ],
            calories: 580,
            protein: 40
        },
        "chicken-burger": {
            name: "Chicken Burger with Bread & Cheese",
            ingredients: [
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Cumin", quantity: 1, unit: "tsp" },
                { item: "Black pepper", quantity: 1, unit: "tsp" },
                { item: "Bread buns", quantity: 6, unit: "" },
                { item: "Onion", quantity: 1, unit: "" },
                { item: "Cheese", quantity: 1, unit: "package", optional: true }
            ],
            calories: 520,
            protein: 38
        },
        meatball: {
            name: "Creamy Meatball with Patty & Rice",
            ingredients: [
                { item: "Cream", quantity: 100, unit: "ml" },
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Cumin", quantity: 1, unit: "tsp" },
                { item: "Onion", quantity: 2, unit: "" },
                { item: "Bread buns", quantity: 3, unit: "" },
                { item: "Cucumber", quantity: 1, unit: "", note: "for tzatziki" }
            ],
            calories: 620,
            protein: 42
        }
    },
    
    tuna: {
        name: "Tuna Meal (Once per Week - Automatic)",
        ingredients: [
            { item: "Onion", quantity: 1, unit: "small" },
            { item: "Garlic powder", quantity: 1, unit: "tsp" },
            { item: "Cumin", quantity: 1, unit: "tsp" },
            { item: "Black pepper", quantity: 1, unit: "tsp" },
            { item: "Flour", quantity: 1, unit: "cup" },
            { item: "Bread", quantity: 1, unit: "loaf" }
        ],
        calories: 380,
        protein: 35
    },
    
    salads: {
        "arab-salad": {
            name: "Arab Salad",
            ingredients: [
                { item: "Cucumber", quantity: 3, unit: "" },
                { item: "Black pepper", quantity: 1, unit: "tsp" },
                { item: "Bell pepper", quantity: 2, unit: "" },
                { item: "Tomatoes", quantity: 3, unit: "" },
                { item: "Cilantro", quantity: 1, unit: "bunch" },
                { item: "Mint", quantity: 1, unit: "bunch", optional: true },
                { item: "Onion", quantity: 2, unit: "medium-small" }
            ],
            calories: 80,
            protein: 2
        },
        "potato-salad": {
            name: "Potato Salad",
            ingredients: [
                { item: "Potatoes", quantity: 3, unit: "" },
                { item: "Onion", quantity: 2, unit: "small" },
                { item: "Mayo", quantity: 1, unit: "" },
                { item: "Black pepper", quantity: 1, unit: "tsp" },
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Cucumber", quantity: 1, unit: "" },
                { item: "Parsley", quantity: 1, unit: "bunch" }
            ],
            calories: 220,
            protein: 4
        }
    },
    
    dinners: {
        pasta: {
            name: "Pasta with Egg Salad & Yoghurt",
            ingredients: [
                { item: "Pasta", quantity: 500, unit: "g" },
                { item: "Tomato paste", quantity: 1, unit: "can" },
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Mustard", quantity: 1, unit: "tbsp" },
                { item: "Mayo", quantity: 1, unit: "" },
                { item: "Canned tomatoes", quantity: 1, unit: "can", note: "or cream sometimes" },
                { item: "Onion", quantity: 1, unit: "" },
                { item: "Cucumber", quantity: 2, unit: "", note: "for egg salad & tzatziki" }
            ],
            calories: 520,
            protein: 22
        },
        "egg-sandwich": {
            name: "Egg Cucumber Sandwich with Yoghurt",
            ingredients: [
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Mayo", quantity: 1, unit: "" },
                { item: "Cucumber", quantity: 2, unit: "", note: "sandwich & tzatziki" },
                { item: "Onion", quantity: 1, unit: "" },
                { item: "Black pepper", quantity: 1, unit: "tsp" },
                { item: "Bread", quantity: 1, unit: "loaf" }
            ],
            calories: 420,
            protein: 20
        },
        "fried-rice": {
            name: "Egg Fried Rice with Yoghurt",
            ingredients: [
                { item: "Rice", quantity: 500, unit: "g" },
                { item: "Black pepper", quantity: 1, unit: "tsp" },
                { item: "Cucumber", quantity: 1, unit: "" },
                { item: "Vegetables", quantity: 1, unit: "mix", optional: true },
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Soy sauce", quantity: 1, unit: "bottle", optional: true }
            ],
            calories: 480,
            protein: 18
        },
        pilaf: {
            name: "Turkish Pilaf with Egg Salad & Yoghurt",
            ingredients: [
                { item: "Bulgur", quantity: 250, unit: "g" },
                { item: "Black pepper", quantity: 1, unit: "tsp" },
                { item: "Garlic powder", quantity: 1, unit: "tsp" },
                { item: "Chili/Sweet chili", quantity: 1, unit: "tsp" },
                { item: "Tomato paste", quantity: 1, unit: "can" },
                { item: "Mayo", quantity: 1, unit: "" },
                { item: "Cucumber", quantity: 2, unit: "", note: "salad & tzatziki" },
                { item: "Onion", quantity: 1, unit: "" }
            ],
            calories: 500,
            protein: 20
        }
    },
    
    snacks: {
        "dark-chocolate": {
            name: "Dark Chocolate",
            ingredients: [
                { item: "Dark chocolate", quantity: 1, unit: "bar" }
            ],
            calories: 150,
            protein: 2
        },
        "bread-stick": {
            name: "Bread Stick",
            ingredients: [
                { item: "Bread sticks", quantity: 1, unit: "package" }
            ],
            calories: 120,
            protein: 3
        },
        "garlic-bread": {
            name: "Garlic Bread Sticks",
            ingredients: [
                { item: "Garlic bread sticks", quantity: 1, unit: "package" }
            ],
            calories: 140,
            protein: 4
        },
        pretzels: {
            name: "Pretzels",
            ingredients: [
                { item: "Pretzels", quantity: 1, unit: "bag" }
            ],
            calories: 110,
            protein: 3
        }
    },
    
    staples: [
        "Oil",
        "Salt",
        "Sugar",
        "Lemon juice",
        "Olive oil"
    ]
};
