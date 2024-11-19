
const container = document.getElementById('container-items')


const img = [
  {'foto': './img.herois/capitao.png'},
  {'foto': './img.herois/flash.png'}, 
  {'foto':   './img.herois/hulk.png'},
  {'foto':  './img.herois/mulher-maravilha.jpg'},
  {'foto':  './img.herois/homem-ferro.png'},
  {'foto': './img.herois/superman.png'}

]

const imagems = (container, img) => {

img.forEach( mostrar => {

container.innerHTML += `
 <div class='item'> 
<img src='${mostrar.foto}' >
</div> 
`  
})

}

imagems(container, img)

let items = document.querySelectorAll('.item')

const proximo = () => {
const proitem = items[items.length -1]
container.insertBefore(proitem, items[0])
items = document.querySelectorAll('.item')
}
  
const anterior = () => {

container.appendChild(items[0])
items = document.querySelectorAll('.item')



}

document.getElementById('next').addEventListener('click', proximo )

document.getElementById('previos').addEventListener('click', anterior)











