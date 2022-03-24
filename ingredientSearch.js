window.onload=function(){
    fetchIngredientNames();
   
}

async function fetchIngredientNames(){
    const response=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data=await response.json();
    const ingredients=data.meals;
    let ingredientsDropDownHTML=`<option value=" ">---choose your option here---</option>`;
    
    for(const ingredient of ingredients){
        
        ingredientsDropDownHTML+=`<option value=${ingredient.strIngredient}>${ingredient.strIngredient}</option>`;
    }
    document.getElementById('ingredients').innerHTML=ingredientsDropDownHTML;

    }

let ingredientsDropDown=document.getElementById("ingredients");
ingredientsDropDown.addEventListener('change', fetchIngredientMenuDetail)
 async function fetchIngredientMenuDetail(){
    document.getElementById('main-container').innerText='';
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientsDropDown.value}`);
    const data=await response.json();
    const meals=data.meals;
   
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

