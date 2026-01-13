# Weekly Grocery Planner

A simple, fixed weekly meal planning system that automatically generates your grocery shopping list.

## 🎯 How It Works

This planner uses a **fixed weekly meal structure** to simplify your meal planning and grocery shopping:

### Core Rules

1. **Breakfast** (Fixed Every Week)
   - The same breakfast items are included automatically every week
   - ~400 calories, ~15g protein per day

2. **Lunches** (Select 2 + Tuna)
   - Choose **2 lunch meals** from 6 options
   - Each selected lunch covers **3 days** (6 days total)
   - Plus **1 Tuna meal** (automatic, covers 1 day)
   - Total: 7 days covered
   - ~380-620 calories, ~35-45g protein per serving

3. **Salad** (Select 1)
   - Choose **1 salad** for the entire week
   - ~80-220 calories, ~2-4g protein per serving

4. **Dinners** (Select 2)
   - Choose **2 dinner meals** from 4 options
   - Each covers **half the week** (3.5 days each)
   - ~420-520 calories, ~18-22g protein per serving

5. **Snacks** (Select 2)
   - Choose **2 snacks** for the week
   - ~110-150 calories, ~2-4g protein per serving

### Key Features

- ✅ **Automatic ingredient aggregation** - No duplicate shopping items
- ✅ **Smart quantity summing** - Combines identical ingredients across meals
- ✅ **Nutritional tracking** - See estimated daily calories and protein
- ✅ **Interactive shopping list** - Check off items as you shop
- ✅ **Optional ingredients** - Clearly marked for flexibility
- ✅ **Helpful notes** - Reminders like "buy 30 eggs for two weeks"

## 🚀 Getting Started

### Option 1: GitHub Pages (Recommended)

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/yourusername/weekly-grocery-planner.git
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select the `main` branch
   - Click "Save"
   - Your site will be live at `https://yourusername.github.io/weekly-grocery-planner/`

3. **Access your planner**
   - Visit the URL provided by GitHub Pages
   - Start selecting your meals!

### Option 2: Local Usage

1. **Download the files**
   - Download `index.html`, `meals-data.js`, and `app.js`

2. **Open locally**
   - Double-click `index.html` to open in your browser
   - No server needed!

## 📱 How to Use

1. **Select your meals** in the left panel:
   - Choose 2 lunches (Tuna is automatic)
   - Choose 1 salad
   - Choose 2 dinners
   - Choose 2 snacks

2. **Review your grocery list** in the right panel:
   - All ingredients are automatically combined
   - Duplicate items are merged with summed quantities
   - Check off items as you shop in the store

3. **Track nutrition**:
   - See estimated daily calories and protein at the top
   - Individual meal nutrition is shown under each option

4. **Reset when needed**:
   - Click "Reset All Selections" to start over

## 🛠 Customization

### Adding/Editing Meals

Edit `meals-data.js` to customize meals:

```javascript
lunches: {
    "your-meal-id": {
        name: "Your Meal Name",
        ingredients: [
            { item: "Ingredient", quantity: 100, unit: "g", note: "optional note" }
        ],
        calories: 500,
        protein: 40
    }
}
```

### Modifying Staples

Update the `staples` array in `meals-data.js`:

```javascript
staples: [
    "Oil",
    "Salt",
    "Your Staple Item"
]
```

### Styling

All styles are in `index.html` within the `<style>` tag. Modify colors, fonts, and layout as needed.

## 📊 Meal System Logic

The system is designed around these principles:

- **Breakfast consistency**: Same items every week for simplicity
- **Protein base**: Chicken/meat and tuna bought weekly for all lunches
- **3-day rotation**: Lunch meals rotate every 3 days to avoid monotony
- **Half-week dinners**: Two dinner options provide variety while keeping it simple
- **Weekly salad**: One salad type provides consistent vegetables
- **Intentional duplication**: Each meal has its complete ingredient list for clarity

## 🎨 Features

- **Responsive design**: Works on desktop, tablet, and mobile
- **No dependencies**: Pure HTML, CSS, and JavaScript
- **Instant updates**: Grocery list updates as you select meals
- **Persistent selections**: Checkmarks remember what you've shopped for (per session)
- **Smart categorization**: Ingredients organized by type (Proteins, Grains, Vegetables, etc.)

## 📝 Notes

- **Quantities**: Based on typical weekly consumption for one person
- **Nutrition**: Estimates based on standard portions and ingredients
- **Flexibility**: Mark items as optional for dietary preferences
- **Economic tips**: Notes like "buy 30 eggs for two weeks" included

## 🤝 Contributing

Feel free to fork and customize this planner for your needs!

## 📄 License

Free to use and modify for personal or commercial purposes.

---

**Happy meal planning! 🍽️**
