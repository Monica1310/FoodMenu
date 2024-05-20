// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menu = {
        drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
        entrees: ["Hamburger w/ Fries", "Grilled Cheese w/ Tater Tots", "Grilled Chicken w/ Veggies", "Chicken Fried Steak w/ Mashed Potatoes", "Fried Shrimp w/ Coleslaw", "Veggie Plate"],
        desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"]
    };

    const categorySelect = document.getElementById("category");
    const itemsSelect = document.getElementById("items");

    categorySelect.addEventListener("change", function() {
        // Get the selected category
        const selectedCategory = categorySelect.value;

        // Clear existing items
        itemsSelect.innerHTML = '<option value="">--Select Item--</option>';

        // Check if a valid category is selected
        if (selectedCategory && menu[selectedCategory]) {
            // Populate items dropdown with the items from the selected category
            menu[selectedCategory].forEach(function(item) {
                const option = document.createElement("option");
                option.value = item;
                option.textContent = item;
                itemsSelect.appendChild(option);
            });
        }
    });
});
