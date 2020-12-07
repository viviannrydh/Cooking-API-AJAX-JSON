window.onload=function(){
    fetchCategoryDetails();
}

console.log(window.location.search)
let categoryurlParams=new URLSearchParams(window.location.search);;
console.log(categoryurlParams);

let categoryName=categoryurlParams.get('c');
console.log(categoryName);

async function fetchCategoryDetails(){

    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    const data=await response.json();
    console.log(data);
    let meals=data.meals;
    console.log(meals);
    let mainContent=document.getElementById('category-container')
    for(let meal of meals){

        let card=document.createElement('div');
        card.className='card';

        let mealImgLink=document.createElement('a');
        mealImgLink.href=`meal.html?i=${meal.idMeal}`;
        //mealImgLink.dataset.id=`${meal.idMeal}`;
        let mealImage=document.createElement('img');
        mealImage.src=`${meal.strMealThumb}`;


        let mealText=document.createElement('div')

        let mealName=document.createElement('h3');
        let mealNameLink=document.createElement('a')
        mealNameLink.href=`meal.html?i=${meal.idMeal}`
        mealNameLink.innerHTML=`${meal.strMeal}`;
       // mealName.id=`${meal.idMeal}`;

        let mealId=document.createElement('i');
        mealId.innerHTML=`Meal Id:${meal.idMeal}`;
        
        mealImgLink.appendChild(mealImage);
        mealName.appendChild(mealNameLink);
        mealText.appendChild(mealName);
        mealText.appendChild(mealId);
        card.appendChild(mealImgLink);
        card.appendChild(mealText);
        mainContent.appendChild(card);
    }
}