// import getData from "./firstMeals.js";
export default async function getDetails(id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    let data = await fetch(url);
    let result = await data.json();
    displayDetails(result.meals[0]); // Assuming you want details for the first meal in the response
}

function displayDetails(meal) {
    let ingredients = '';

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`;
        }
    }

    let tags = meal.strTags?.split(",") || [];
    let tagsStr = '';
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `<li class="alert alert-danger m-2 p-1">${tags[i]}</li>`;
    }

    let blackBox = `
        <div class="col-12 my-2 d-flex justify-content-end">
            <i class="fa-solid fa-x fs-2"></i>
        </div>
        <div class="col-md-4">
            <img src="${meal.strMealThumb}" alt="" class="img-fluid">
            <h2>${meal.strMeal}</h2>
        </div>
        <div class="col-md-8">
            <h2>Instructions</h2>
            <p>${meal.strInstructions}</p>
            <h3><span>Area : </span>${meal.strArea}</h3>
            <h3><span>Category :</span>${meal.strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex flex-wrap">
                ${ingredients}
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex flex-wrap">
                ${tagsStr}
            </ul>
            <button class="btn btn-success"><a href="${meal.strSource}" target="_blank">Source</a></button>
            <button class="btn btn-danger"><a href="${meal.strYoutube}" target="_blank">Youtube</a></button>
        </div>`;

    $('#details .row').html(blackBox);

    $('#details .row .fa-x').on('click', () => {
        $('#mainPage').toggle();
        $('#details').toggle();
    });
}
