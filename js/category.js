import getData from "./firstMeals.js";

export default async function getcategory(){
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    let data = await fetch(url)
    let result= await data.json();
   displayCategory(result.categories);

}
function displayCategory(list){
    let blackBox='';
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        blackBox+=` <div class="col-md-3">
        <div class="card position-relative bg-transparent">
            <img src="${element.strCategoryThumb}" alt="">
            <div class=" p-3 layer z-3">
                <h2 class="text-center">${element.strCategory}</h2>
                <p>${element.strCategoryDescription}</p>
            </div>
        </div>
    </div>`

    $('#category .row').html(blackBox);
    $('#category .card').on('click',(e)=>{
        let catName=$(e.target).closest('.card').find('h2').text()
        let catUrl=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`
    $('#loading').fadeIn(1000,()=>{
          getData(catUrl);
        $('#mainPage').toggle()
        $('#category').toggle();
    });
    $('#loading').fadeOut(1000);
    })
    }
}