import{data} from'./data/data.js'

const items=document.getElementById('items');
const templateCard=document.getElementById('template-card').content;
const fragment=document.createDocumentFragment()
let like={};

document.addEventListener('DOMContentLoaded',()=>{
    loadData(data)
})

const loadData=data=>{
    data.forEach(albumes=>{
        const{id,name,image}=albumes;
        templateCard.querySelector('h5').textcontent=name;
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.id=id;

        const clone= templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)
}
