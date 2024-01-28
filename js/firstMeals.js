import getDetails from "./details.js";


export default async function getData(url) {
    let data = await fetch(url)
    let result= await data.json();
   displayMain(result.meals);

}

 export   function displayMain(list) {
        let blackBox = '';
        const maxItems = Math.min(list.length, 20);
        for (let i = 0; i < maxItems; i++) {
            const element = list[i];
            blackBox += `<div class="col-md-3 ">
                <div class="card position-relative border-0" id=${element.idMeal}>
                    <img src="${element.strMealThumb}" alt="">
                    <div class="layer z-3 d-flex align-items-center">
                        <h2>${element.strMeal}</h2>
                    </div>
                </div>
            </div>`;
        }
    
        $('#mainPage .row').html(blackBox);
        $('#mainPage .card').on('click', (e) => {
            let id = $(e.target).closest('.card').attr('id');
            console.log(id);
            $('#loading').fadeIn(1000,()=>{

                getDetails(id);
                
                $('#mainPage').toggle();
                $('#details').toggle();
            });
            $('#loading').fadeOut(1000);
        });
    }
    