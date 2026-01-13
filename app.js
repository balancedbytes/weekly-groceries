// Application state
let selectedMeals = {
    lunches: [],
    salad: null,
    dinners: [],
    snacks: []
};

// Toggle meal selection
function toggleMeal(element, category) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    const value = checkbox.value;
    
    // Handle different selection limits
    if (category === 'lunch') {
        if (checkbox.checked) {
            if (selectedMeals.lunches.length >= 2) {
                alert('You can only select 2 lunch meals (plus Tuna meal is automatic)');
                checkbox.checked = false;
                return;
            }
            selectedMeals.lunches.push(value);
        } else {
            selectedMeals.lunches = selectedMeals.lunches.filter(m => m !== value);
        }
    } else if (category === 'salad') {
        // Only one salad allowed
        if (checkbox.checked) {
            // Uncheck all other salads
            document.querySelectorAll('input[name="salad"]').forEach(cb => {
                if (cb !== checkbox) {
                    cb.checked = false;
                    cb.parentElement.parentElement.classList.remove('selected');
                }
            });
            selectedMeals.salad = value;
        } else {
            selectedMeals.salad = null;
        }
    } else if (category === 'dinner') {
        if (checkbox.checked) {
            if (selectedMeals.dinners.length >= 2) {
                alert('You can only select 2 dinner meals');
                checkbox.checked = false;
                return;
            }
            selectedMeals.dinners.push(value);
        } else {
            selectedMeals.dinners = selectedMeals.dinners.filter(m => m !== value);
        }
    } else if (category === 'snack') {
        if (checkbox.checked) {
            if (selectedMeals.snacks.length >= 2) {
                alert('You can only select 2 snacks');
                checkbox.checked = false;
                return;
            }
            selectedMeals.snacks.push(value);
        } else {
            selectedMeals.snacks = selectedMeals.snacks.filter(m => m !== value);
        }
    }
    
    // Toggle selected class
    if (checkbox.checked) {
        element.classList.add('selected');
    } else {
        element.classList.remove('selected');
    }
    
    // Update grocery list
    generateGroceryList();
}

// Reset all selections
function resetSelections() {
    if (!confirm('Are you sure you want to reset all selections?')) {
        return;
    }
    
    selectedMeals = {
        lunches: [],
        salad: null,
        dinners: [],
        snacks: []
    };
    
    document.querySelectorAll('.meal-option input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
        cb.parentElement.parentElement.classList.remove('selected');
    });
    
    generateGroceryList();
}

// Merge ingredients and sum quantities
function mergeIngredients(ingredientsList) {
    const merged = {};
    
    ingredientsList.forEach(ingredient => {
        const key = ingredient.item.toLowerCase();
        
        if (!merged[key]) {
            merged[key] = {
                item: ingredient.item,
                quantity: ingredient.quantity || 0,
                unit: ingredient.unit || '',
                note: ingredient.note || '',
                optional: ingredient.optional || false
            };
        } else {
            // Sum quantities if both have numbers
            if (ingredient.quantity && merged[key].quantity) {
                merged[key].quantity += ingredient.quantity;
            }
            // Combine notes
            if (ingredient.note && !merged[key].note.includes(ingredient.note)) {
                merged[key].note = merged[key].note 
                    ? `${merged[key].note}, ${ingredient.note}` 
                    : ingredient.note;
            }
        }
    });
    
    return Object.values(merged);
}

// Generate grocery list
function generateGroceryList() {
    const allIngredients = [];
    let totalCalories = 0;
    let totalProtein = 0;
    
    // Always include breakfast
    allIngredients.push(...mealsData.breakfast.ingredients);
    totalCalories += mealsData.breakfast.calories * 7; // 7 days
    totalProtein += mealsData.breakfast.protein * 7;
    
    // Always include protein base
    allIngredients.push(...mealsData.protein_base.ingredients);
    
    // Always include tuna meal
    allIngredients.push(...mealsData.tuna.ingredients);
    totalCalories += mealsData.tuna.calories * 1; // 1 day
    totalProtein += mealsData.tuna.protein * 1;
    
    // Add selected lunches
    selectedMeals.lunches.forEach(lunchId => {
        const lunch = mealsData.lunches[lunchId];
        if (lunch) {
            allIngredients.push(...lunch.ingredients);
            totalCalories += lunch.calories * 3; // 3 days each
            totalProtein += lunch.protein * 3;
        }
    });
    
    // Add selected salad
    if (selectedMeals.salad) {
        const salad = mealsData.salads[selectedMeals.salad];
        if (salad) {
            allIngredients.push(...salad.ingredients);
            totalCalories += salad.calories * 7; // whole week
            totalProtein += salad.protein * 7;
        }
    }
    
    // Add selected dinners
    selectedMeals.dinners.forEach(dinnerId => {
        const dinner = mealsData.dinners[dinnerId];
        if (dinner) {
            allIngredients.push(...dinner.ingredients);
            totalCalories += dinner.calories * 3.5; // 3.5 days each
            totalProtein += dinner.protein * 3.5;
        }
    });
    
    // Add selected snacks
    selectedMeals.snacks.forEach(snackId => {
        const snack = mealsData.snacks[snackId];
        if (snack) {
            allIngredients.push(...snack.ingredients);
            totalCalories += snack.calories * 7; // whole week
            totalProtein += snack.protein * 7;
        }
    });
    
    // Merge duplicate ingredients
    const mergedIngredients = mergeIngredients(allIngredients);
    
    // Categorize ingredients
    const categories = {
        'Proteins & Dairy': ['chicken', 'meat', 'tuna', 'eggs', 'yoghurt', 'cheese', 'cream'],
        'Grains & Carbs': ['oats', 'bulgur', 'rice', 'pasta', 'bread', 'flour', 'lentils', 'potatoes'],
        'Vegetables & Herbs': ['cucumber', 'onion', 'tomatoes', 'bell pepper', 'cilantro', 'parsley', 'mint', 'vegetables'],
        'Fruits': ['banana', 'apple', 'pear', 'kiwi'],
        'Spices & Condiments': ['garlic powder', 'cumin', 'coriander', 'black pepper', 'chili', 'mayo', 'ketchup', 'mustard', 'tomato paste', 'canned tomatoes', 'soy sauce', 'vanilla'],
        'Snacks': ['dark chocolate', 'bread sticks', 'garlic bread sticks', 'pretzels'],
        'Other': []
    };
    
    const categorizedIngredients = {
        'Proteins & Dairy': [],
        'Grains & Carbs': [],
        'Vegetables & Herbs': [],
        'Fruits': [],
        'Spices & Condiments': [],
        'Snacks': [],
        'Other': []
    };
    
    mergedIngredients.forEach(ingredient => {
        const itemLower = ingredient.item.toLowerCase();
        let categorized = false;
        
        for (const [category, keywords] of Object.entries(categories)) {
            if (keywords.some(keyword => itemLower.includes(keyword))) {
                categorizedIngredients[category].push(ingredient);
                categorized = true;
                break;
            }
        }
        
        if (!categorized) {
            categorizedIngredients['Other'].push(ingredient);
        }
    });
    
    // Display grocery list
    displayGroceryList(categorizedIngredients, totalCalories, totalProtein);
}

// Display the grocery list
function displayGroceryList(categorizedIngredients, totalCalories, totalProtein) {
    const output = document.getElementById('grocery-output');
    
    // Check if any meals are selected
    const hasSelections = 
        selectedMeals.lunches.length > 0 || 
        selectedMeals.salad !== null || 
        selectedMeals.dinners.length > 0 || 
        selectedMeals.snacks.length > 0;
    
    if (!hasSelections) {
        output.innerHTML = '<p style="text-align: center; color: #999; padding: 40px;">Select your meals to generate your grocery list</p>';
        document.getElementById('total-calories').textContent = '0';
        document.getElementById('total-protein').textContent = '0g';
        return;
    }
    
    // Update nutrition totals (per day average)
    const avgCalories = Math.round(totalCalories / 7);
    const avgProtein = Math.round(totalProtein / 7);
    document.getElementById('total-calories').textContent = avgCalories.toLocaleString();
    document.getElementById('total-protein').textContent = avgProtein + 'g';
    
    let html = '';
    
    // Display each category
    Object.entries(categorizedIngredients).forEach(([category, ingredients]) => {
        if (ingredients.length > 0) {
            html += `<div class="grocery-category">`;
            html += `<h3>${category}</h3>`;
            
            ingredients.forEach((ingredient, index) => {
                const id = `item-${category}-${index}`;
                const quantityText = ingredient.quantity 
                    ? `${ingredient.quantity}${ingredient.unit}` 
                    : '';
                const noteText = ingredient.note ? ` (${ingredient.note})` : '';
                const optionalText = ingredient.optional ? ' [Optional]' : '';
                
                html += `
                    <div class="grocery-item" onclick="toggleGroceryItem(this)">
                        <input type="checkbox" id="${id}" onchange="event.stopPropagation()">
                        <label for="${id}">
                            ${ingredient.item} ${quantityText}${noteText}${optionalText}
                        </label>
                    </div>
                `;
            });
            
            html += `</div>`;
        }
    });
    
    // Add staples section
    html += `<div class="grocery-category">`;
    html += `<h3>Staples (Check if needed)</h3>`;
    mealsData.staples.forEach((staple, index) => {
        const id = `staple-${index}`;
        html += `
            <div class="grocery-item" onclick="toggleGroceryItem(this)">
                <input type="checkbox" id="${id}" onchange="event.stopPropagation()">
                <label for="${id}">${staple}</label>
            </div>
        `;
    });
    html += `</div>`;
    
    output.innerHTML = html;
}

// Toggle grocery item checked state
function toggleGroceryItem(element) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    
    if (checkbox.checked) {
        element.classList.add('checked');
    } else {
        element.classList.remove('checked');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    generateGroceryList();
});
