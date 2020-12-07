window.onload=function(){
    fetchData();
}

async function fetchData(){
    const response=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data=await response.json();
    let categories=data.categories;
    let mainContent=document.getElementById('main-container')
    for(let category of categories){
        let card=document.createElement('div');
        //card.className='card';

        let categoryImgLink=document.createElement('a');
        categoryImgLink.href=`category.html?c=${category.strCategory}`;
        categoryImgLink.dataset.id=`${category.strCategory}`;
        let image=document.createElement('img');
        image.src=`${category.strCategoryThumb}`;
       
        

        let categoryName=document.createElement('h3');
        
        let categoryNameLink=document.createElement('a')
        categoryNameLink.href=`category.html?c=${category.strCategory}`
        categoryNameLink.innerHTML=`${category.strCategory}`;
        categoryNameLink.dataset.id=`${category.strCategory}`;
        
        categoryImgLink.appendChild(image);
        categoryName.appendChild(categoryNameLink);
        card.appendChild(categoryImgLink);
        card.appendChild(categoryName);
        mainContent.appendChild(card);
    }

}