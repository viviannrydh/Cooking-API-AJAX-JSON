window.onload=function(){
    fetchMealDetail();
}

let mealURLParams=new URLSearchParams(window.location.search);
let mealId=mealURLParams.get('i');

async function fetchMealDetail(){

    
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data=await response.json();
    const meal=data.meals[0]; 
    console.log(meal);
   

    let mealCard=document.createElement('div');
    mealCard.id='meal-id';

    let mealImg=document.createElement('img');
    mealImg.src=`${meal.strMealThumb}`;
    mealImg.className='meal-img';

    let mealName=document.createElement('h2');
    mealName.innerHTML=`${meal.strMeal}`;

    let mealCategory=document.createElement('i');
    mealCategory.innerHTML=`<strong>Category:</strong> ${meal.strCategory}`;

    let mealArea=document.createElement('p');
    mealArea.innerHTML=`<strong>Area:</strong> ${meal.strArea}`;

    let breakLine=document.createElement('br');

    let mealYoutube=document.createElement('h3');
    mealYoutube.innerHTML='<strong>Youtube Link:</strong>';
    let mealYoutubeChannel=document.createElement('a');
    mealYoutubeChannel.innerHTML=`${meal.strYoutube}`;
    mealYoutubeChannel.href=`${meal.strYoutube}`;

    let mealSource=document.createElement('h3');
    mealSource.innerHTML='<strong>Recipe source: </strong>';
    let mealSourceLink=document.createElement('a');
    mealSourceLink.href=`${meal.strSource}`
    mealSourceLink.innerHTML=`${meal.strSource}`;

    let mealInstructions=document.createElement('p');
    mealInstructions.className='instruction';
    mealInstructions.innerHTML=`<strong>Cooking Instruction:</strong> <br> ${meal.strInstructions}.split(/\r?\n/)`;

    /*let ingredientsLists=document.createElement(ol);
    let ingredientsList=document.createElement(li);
    ingredientsList.innerHTML=
    ingredientsList.innerHTML=`${meal.strIngredient}`;*/
    mealSource.appendChild(mealSourceLink);
    mealYoutube.appendChild(mealYoutubeChannel);
    mealCard.appendChild(mealImg);
    mealCard.appendChild(mealName);
    mealCard.appendChild(mealCategory);
    mealCard.appendChild(mealArea);
    mealCard.appendChild(mealYoutube);
    mealCard.appendChild(breakLine);
    mealCard.appendChild(mealInstructions);
    mealCard.appendChild(mealSource)

    document.getElementById('meal-container').appendChild(mealCard);

}

/*res = // your api response list



function contains_number(keys, number){
    r = []
    for(let i = 0; i++; i<keys.length){
        if(keys[i].includes(number)){
            r.push(keys[i])
        }
    }
    return r
}*/