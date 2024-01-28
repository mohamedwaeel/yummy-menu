import getData from "./firstMeals.js";

export default async function getArea() {
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
    let data = await fetch(url)
    let result = await data.json();
    displayArea(result.meals);

}
function displayArea(list) {
    let blackBox = '';
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        blackBox += `  <div class="col-md-3">
        <div class="card text-center p-3">
            <i class="fa-solid fa-house-laptop"></i>
            <h3>${element.strArea}</h3>
        </div>
    </div> `

        $('#area .row').html(blackBox);
        $('#area .card').on('click', (e) => {
            let areaName = $(e.target).closest('.card').find('h3').text()
            let areaUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
            $('#loading').fadeIn(1000, () => {
                getData(areaUrl);
                $('#mainPage').toggle()
                $('#area').toggle();
            });
            $('#loading').fadeOut(1000);

        })
    }
}