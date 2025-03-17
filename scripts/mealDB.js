// Fetch meal data from the API
const fetchMeals = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
        const data = await response.json();
        return data.meals; // Return the array of meals
    } catch (error) {
        console.error('Error fetching meal data:', error);
        return null;
    }
};