import getData from "./firstMeals.js";

export default async function getIng() {
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    let data = await fetch(url)
    let result = await data.json();
    displayIng(result.meals);

}

function displayIng(list) {
    let blackBox = '';
    for (let i = 0; i < 20; i++) {
        const element = list[i];
        blackBox += ` <div class="col-md-3">
        <div class="card text-center p-3">
            <i class="fa-solid fa-drumstick-bite"></i>
            <h3>${element.strIngredient}</h3>
            <p>${element.strDescription}</p>
        </div>
    </div>`

        $('#ingredients .row').html(blackBox);
        $('#ingredients .card').on('click', (e) => {
            let ingredientsName = $(e.target).closest('.card').find('h3').text()
            let ingredientsUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsName}`
        $('#loading').fadeIn(1000,()=>{
            getData(ingredientsUrl);
            $('#mainPage').toggle()
            $('#ingredients').toggle();
        });
        $('#loading').fadeOut(1000);



        })
    }
}