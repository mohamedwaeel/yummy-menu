/// <reference types="../@types/jquery" />
import getData from "./firstMeals.js";
import getDetails from "./details.js";
import getcategory from "./category.js";
import { validateEmail } from "./contactUs.js";
import getArea from "./area.js";
import getIng from "./ingredients.js";
import searchName from "./search.js";
$(() => {

    $('#loading').fadeOut(1500, () => {
        $('body').css('overflow', 'auto')
        
            $('nav .nav-logo .menuBtn').on('click', () => {
                $('.nav-content').animate({ width: 'toggle' }, 1000)
                $('nav .nav-logo .menuBtn').toggleClass('fa-bars fa-xmark')
    })

    })
    
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
   $('#loading').fadeIn(1000,()=>{
       getData(url);

   });
   $('#loading').fadeOut(1000);


    


    $('.search').on('click', () => {
        $('#loading').fadeIn(1000,()=>{ $('#search').css('display', 'block').siblings('section').css('display', 'none');
        $('.nav-content').animate({ width: 'toggle' }, 1000);
        $('nav .nav-logo .menuBtn').toggleClass('fa-bars fa-xmark');});

       
        $('#loading').fadeOut(1000);


    });

    $('.category').on('click', () => {
        $('#loading').fadeIn(1000,()=>{
        $('#category').css('display', 'block').siblings('section').css('display', 'none');
        getcategory();
        $('.nav-content').animate({ width: 'toggle' }, 1000)
        $('nav .nav-logo .menuBtn').toggleClass('fa-bars fa-xmark')
});
        $('#loading').fadeOut(1000);
    });
    $('.ingredients').on('click', () => {
        $('#loading').fadeIn(1000,()=>{
              $('#ingredients').css('display', 'block').siblings('section').css('display', 'none');
        getIng()
        $('.nav-content').animate({ width: 'toggle' }, 1000)
        $('nav .nav-logo .menuBtn').toggleClass('fa-bars fa-xmark')
        });
        $('#loading').fadeOut(1000);
    });


    $('.area').on('click', () => {
        $('#loading').fadeIn(1000,()=>{
              $('#area').css('display', 'block').siblings('section').css('display', 'none');
        getArea()
        $('.nav-content').animate({ width: 'toggle' }, 1000)
        $('nav .nav-logo .menuBtn').toggleClass('fa-bars fa-xmark')
        });
        $('#loading').fadeOut(1000);
    });
    $('.contactUs').on('click', () => {
        $('#loading').fadeIn(1000,()=>{
              $('#contactUs').css('display', 'block').siblings('section').css('display', 'none');
        $('.nav-content').animate({ width: 'toggle' }, 1000)
        $('nav .nav-logo .menuBtn').toggleClass('fa-bars fa-xmark')
        });
      
        $('#loading').fadeOut(1000);


    });

});

