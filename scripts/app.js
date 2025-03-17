// Display meal data on the DOM
const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container');

    meals.forEach((meal) => {
        // Create a card for each meal
        const mealCard = document.createElement('div');
        mealCard.classList.add('col-md-4', 'meal-card');

        // Truncate the instructions to a certain length and add '...'
        const truncatedInstructions = truncateText(meal.strInstructions, 150); // Adjust the length as needed

        mealCard.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <div class="card-body">
                    <h5 class="card-title text-center">${meal.strMeal}</h5>
                    <h6>Ingredients:</h6>
                    <ul>
                        ${getIngredients(meal).map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    <p>Instructions:</p>
                    <p>${truncatedInstructions}</p>
                    <div class="text-center">
                        <a href="${meal.strYoutube}" class="btn btn-danger" target="_blank">Watch on YouTube</a>
                    </div>
                </div>
            </div>
        `;

        // Append the card to the container
        mealsContainer.appendChild(mealCard);
    });
};

