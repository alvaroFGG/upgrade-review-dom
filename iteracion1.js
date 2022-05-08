// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul = document.createElement("ul");

for(let i = 0; i<countries.length; i++){
    let li = document.createElement("li");
    let textLi = document.createTextNode(countries[i]);
    li.appendChild(textLi);

    ul.appendChild(li);
}
document.body.appendChild(ul);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let removeElem = document.querySelector("[class = 'fn-remove-me']");

document.body.removeChild(removeElem);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div = document.querySelector("div[data-function='printHere']");

let ulDiv = document.createElement("ul");

for(let i = 0; i<cars.length; i++){
    let li = document.createElement("li");
    let liText = document.createTextNode(cars[i]);
    li.appendChild(liText);

    ulDiv.appendChild(li);
}
div.appendChild(ulDiv);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countriesObj = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let ul2 = document.createElement("ul");
ul2.setAttribute("class", "list");
for(let i = 0; i<countriesObj.length; i++){
    let li = document.createElement("li");
    li.setAttribute("id","fotos");
    let div = document.createElement("div");
    li.appendChild(div);

    let h4 = document.createElement("h4");
    let textH4 = document.createTextNode(countriesObj[i].title);
    h4.appendChild(textH4);

    let img = document.createElement("img");
    img.setAttribute("src",countriesObj[i].imgUrl);

    let botonRem = document.createElement("button");
    botonRem.setAttribute("id", "btn-rem-elem");
    let textBtn = document.createTextNode("Borra Elemento");
    botonRem.appendChild(textBtn);
    botonRem.setAttribute("onClick","borraElemento(this)");

    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(botonRem);

    ul2.appendChild(li);
}

document.body.appendChild(ul2);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
let botonRemove = document.getElementById("removeImg");
let ulFotos = document.querySelector("ul[class='list']")
let allLi = document.querySelectorAll("li[id='fotos']");
let arrLi = Array.from(allLi);

let length = arrLi.length;

function removeLi(){
    ulFotos.removeChild(arrLi[length-1]);
    length--;

    //añadido: si el lenght = 0 el boton desaparece
    if(length<1){
        botonRemove.style.visibility = "hidden";
    }
}

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

function borraElemento(event) {  
    let div = event.parentElement;
    let li = div.parentElement;
    let ul = li.parentElement;

    ul.removeChild(li);
}