const API = `https://www.thecocktaildb.com/api/json/v1/1/`

const API_LIST = `${API}filter.php?c=Cocktail`
const API_SEARCH = `${API}search.php?s=`   // + name
const API_GET_DETAIL = `${API}lookup.php?i=`


const getAllCocktailsByName =async(e)=>{
    let name = e.target.value
    if(name.length > 1){
        const res = await fetch(API_SEARCH + name)
        const req = await res.json()
        console.log(req.drinks);
        renderCocktails(req.drinks)
    }else{
        getAllCocktails()
    }
}




const getAllCocktailDetail=async(id)=>{
    const res = await fetch(API_GET_DETAIL + id)
    const req = await res.json()
    console.log(req);
}




const getAllCocktails = async()=>{
    const res = await fetch(API_LIST)
    const req = await res.json()
    console.log(req.drinks);
    renderCocktails(req.drinks)
}
getAllCocktails()
let output = document.getElementById('output')

const renderCocktails = (drinks)=>{
    output.innerHTML=''
    drinks.map(drink=>{
        let div = document.createElement('div')
        div.addEventListener('click', ()=>getAllCocktailDetail(drink.idDrink))
        let img = document.createElement('img')
        let name = document.createElement('h3')
        name.textContent=drink.strDrink
        img.src = drink.strDrinkThumb
        div.append(img,name)
        output.append(div)
    })
}

// 1 - перерисовать output
// 2 - отобразить кнопку назад которая вызовет функцию GetAllCocktails
// 3 - отобразить данные картинку название описание стакан ингридиенты и пропорции
// 4 - сделать максимально красиво
// 5 - запушить на гитхаб