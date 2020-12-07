window.onload=function(){
    fetchAreaNames();
   
}

async function fetchAreaNames(){
    
    const response=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data=await response.json();
    const areas=data.meals;
    let dropDownHTML=`<option value="">--Please choose an option--</option>`;
    
    for(const area of areas){
        dropDownHTML+=`<option value=${area.strArea} class="area-name">${area.strArea}</option>`;
       
    }
    document.getElementById('areas').innerHTML=dropDownHTML;

    }

let areasDropDown=document.getElementById("areas");
areasDropDown.addEventListener('change', fetchAreaMenuDetail)
 
 async function fetchAreaMenuDetail(){
    document.getElementById('main-container').innerHTML='';
    const response=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+areasDropDown.value);
    const data=await response.json();
    const meals=data.meals;
    console.log(meals)
    
    for(let meal of meals){
        let mealDiv=document.createElement('div');
        mealDiv.className='meal-container';

        let card=document.createElement('div');
        card.className='meal-card';

        let mealImgLink=document.createElement('a');
        mealImgLink.href=`meal.html?i=${meal.idMeal}`
        let mealImg=document.createElement('img');
        mealImg.className='meal-img'
        mealImg.src=`${meal.strMealThumb}`;

        let mealNameLink=document.createElement('a');
        mealNameLink.href=`meal.html?i=${meal.idMeal}`;
        let mealName=document.createElement('h3');
        mealName.textContent=`${meal.strMeal}`;

        let mealId=document.createElement('h5');
        mealId.textContent=`Meal Id: ${meal.idMeal}`;

        mealImgLink.appendChild(mealImg);
        mealNameLink.appendChild(mealName);
        card.appendChild(mealImgLink);
        card.appendChild(mealNameLink);
        card.appendChild(mealId);
        mealDiv.appendChild(card);

        document.getElementById('main-container').appendChild(mealDiv);

    }
    
}

