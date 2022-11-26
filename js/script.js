const toHome = () => window.location.href = "../index.html"


const divGrupoPessoas = document.getElementById('grupoPessoas')

divGrupoPessoas.style.border = "1px solid #fff"
divGrupoPessoas.style.padding = "11px"

divGrupoPessoas.innerHTML = '<div id="grupoPessoa"><div class="d-flex flex-row justify-content-end"><button id="addPessoa" class="btn btn-success text-uppercase">adicionar pessoa</button></div></div>'

const pessoas = [{
    0: '../img/pessoas/1.jpg',
    1: '../img/pessoas/2.jpg',
    2: '../img/pessoas/3.jpg',
    3: '../img/pessoas/4.jpg',
    4: '../img/pessoas/5.jpg'
},{
    0: 'junim',
    1: 'julia',
    2: 'carla',
    3: 'amanda',
    4: 'joana'
}]
var cont = 0
document.querySelector('#addPessoa').onclick = () => {
    let div = document.createElement('div')
    div.classList.add("item_pessoa")
    div.classList.add("d-flex")
    div.classList.add("mt-3")
    div.classList.add("p-3")
    div.classList.add("flex-row")
    div.classList.add("flex-wrap")
    div.classList.add("justify-content-center")
    div.classList.add("bg-secondary")
    div.classList.add("bg-opacity-25")
    let img = document.createElement('img')
    let nome = document.createElement('p')

    nome.innerText = pessoas[1][cont]
    nome.classList.add('text-capitalize')
    nome.classList.add('text-center')
    nome.classList.add('fw-bold')
    nome.classList.add('col-6')
    nome.classList.add('mt-3')
    nome.classList.add('fs-2')
    nome.classList.add('align-self-center')

    img.src = pessoas[0][cont]
    img.style.borderRadius = "35%"

    div.appendChild(img)
    div.appendChild(nome)

    document.querySelector('#grupoPessoa').appendChild(div)
    if(cont<4){
        cont++
    }else{
        cont=0
    }
}

window.onclick = ()=>{
    document.querySelectorAll('.item_pessoa').forEach((e)=>{
        e.onclick = ()=>{
            e.remove()
            cont--
        }
    })
}