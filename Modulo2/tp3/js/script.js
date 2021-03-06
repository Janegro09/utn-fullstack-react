
let table = document.querySelector(".container");
let body = document.querySelector("body");
let fuente = document.querySelector(".container");
let darkModeBottom = document.querySelector(".darkMode");
let darkModeBottomText = document.querySelector(".darkModeText");
let footer = document.querySelector("footer");

console.log(fuente);
let darkModeActivated = true;

const getMes = async mes => {
    let mesEncontrado = esperar(1000).then(v=>meses[mes]);
    return mesEncontrado;
}

// async function getMes (mes) {
//     console.log(meses[mes])
//     let mesEncontrado = esperar(1000)
//     return meses[mes];
// }


const esperar = ms => {
    let promesa = new Promise(resolve => setTimeout(resolve,ms));
    console.log(promesa);
    return promesa
}

const darkMode = () => {
    body.style.transition=".5s"
    if(darkModeActivated){
        darkModeActivated=false;
        darkModeBottomText.innerHTML="☀"
        body.style.color="#2C3034"
        table.style.background="#c3ecec"
        body.style.background="azure"
        footer.style.background="radial-gradient(azure, #c3ecec)"
    } else {
        darkModeActivated=true;
        darkModeBottomText.innerHTML="🌙"
        body.style.color="seashell"
        table.style.background="#2C3034"
        body.style.background="#595f66"
        footer.style.background="radial-gradient(#2C3034, #595f66)"
    }
}

darkModeBottom.addEventListener("mouseover", () => {
})
darkModeBottom.addEventListener("mouseout", () => {
})

const dibujar = async () => {
    let titulo = document.createElement("h3");
    titulo.appendChild(document.createTextNode("Meses con 31 días"));
    await esperar(1000);
    table.appendChild(titulo)
    
    await esperar(2000);
    let nombreMes = document.createElement("div");
    nombreMes.className="col-4 dias";
    let nombreMes30 = document.createElement("div");
    nombreMes30.className="col-4 meses";
    let fila = document.createElement("div");
    fila.className = "row";
    
    nombreMes.appendChild(document.createTextNode("Mes"));
    nombreMes30.appendChild(document.createTextNode("Dias"));
    
    fila.appendChild(nombreMes);
    fila.appendChild(nombreMes30);
    
    table.appendChild(fila);

    
    for (let i = 0; i < meses.length; i++) {
        
        if(meses[i].dias == 31){
            let mes = await getMes(i);
            let nombreMes = document.createElement("div");
            nombreMes.className="col-4";
            let nombreMes30 = document.createElement("div");
            nombreMes30.className="col-4";
            let fila = document.createElement("div");
            fila.className = "row";
            
            nombreMes.appendChild(document.createTextNode(mes.mes));
            nombreMes30.appendChild(document.createTextNode(mes.dias));
            
            fila.appendChild(nombreMes);
            fila.appendChild(nombreMes30);
            
            table.appendChild(fila);
        }
    }
    
    let titulo2 = document.createElement("h3");
    titulo2.appendChild(document.createTextNode("Meses con menos de 31 días"));
    await esperar(1000);
    table.appendChild(titulo2)
    await esperar(2000);
    
    let nombreMes2 = document.createElement("div");
    nombreMes2.className="col-4 dias";
    let nombreMes302 = document.createElement("div");
    nombreMes302.className="col-4 meses";
    let fila2 = document.createElement("div");
    fila2.className = "row";
    
    nombreMes2.appendChild(document.createTextNode("Mes"));
    nombreMes302.appendChild(document.createTextNode("Dias"));
    
    fila2.appendChild(nombreMes2);
    fila2.appendChild(nombreMes302);
    
    table.appendChild(fila2);


    for (let i = 0; i < meses.length; i++) {

        if(meses[i].dias < 31){
            let mes = await getMes(i);
            let nombreMes = document.createElement("div");
            nombreMes.className="col-4";
            let nombreMes30 = document.createElement("div");
            nombreMes30.className="col-4";
            let fila = document.createElement("div");
            fila.className = "row";
            
            nombreMes.appendChild(document.createTextNode(mes.mes));
            nombreMes30.appendChild(document.createTextNode(mes.dias));
            
            fila.appendChild(nombreMes);
            fila.appendChild(nombreMes30);
            
            table.appendChild(fila);
        }
    }
}
