import getDetails from "./details.js";

export default async function searchName(sName, uniqueMealIds) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${sName}`;
    let data = await fetch(url);
    let result = await data.json();
    displaySearch(result.meals, uniqueMealIds);
}

async function searchLetter(sLetter) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${sLetter}`;
    let data = await fetch(url);
    let result = await data.json();
    displaySearch(result.meals, uniqueMealIds);
}

function displaySearch(list, uniqueMealIds) {
    let blackBox = '';

    for (let i = 0; i < list.length; i++) {
        const element = list[i];

        if (!uniqueMealIds.has(element.idMeal)) {
            blackBox += `<div class="col-md-3 ">
                <div class="card position-relative border-0" id=${element.idMeal}>
                    <img src="${element.strMealThumb}" alt="">
                    <div class="layer z-3 d-flex align-items-center">
                        <h2>${element.strMeal}</h2>
                    </div>
                </div>
            </div>`;

            uniqueMealIds.add(element.idMeal);
        }
    }

    $('#search .row').append(blackBox);
    $('#search .card').on('click', (e) => {
        let id = $(e.target).closest('.card').attr('id');
        console.log(id);
        $('#loading').fadeIn(1000, async () => {
            await getDetails(id);
            $('#search').toggle();
            $('#details').toggle();
            $('#loading').fadeOut(1000);
        });
    });
}

let timeoutId;
let uniqueMealIds = new Set();

$('#searchName').on('input', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        let sName = $('#searchName').val();
        searchName(sName, uniqueMealIds);
    }, 1000);
});

$('#searchId').on('input', () => {
    let sLetter = $('#searchId').val();

    if (sLetter.length >= 1) {
        sLetter = sLetter.substring(0, 1);

        $('#searchId').val(sLetter);

        searchLetter(sLetter);
    }
});

 