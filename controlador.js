
let elmain=document.querySelector('.main')
for(i=0;i<9;i++){
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res=>res.json()).then(imagenrandom=>{
elmain.innerHTML+=`<a href='eltrago.html'><img onclick='guardavalor(${imagenrandom.drinks[0].idDrink})' class='tragos' src='${imagenrandom.drinks[0].strDrinkThumb}'></a>`
})

}

let displaytrago=document.querySelector('.tragoensi')



function guardavalor(imagen){
localStorage.setItem('id',imagen)
	
}

function cargaventana(){
	let id=localStorage.getItem('id')
	fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res=>res.json()).then(logg=>{
		
	console.log(logg)
	})
	
	
}


