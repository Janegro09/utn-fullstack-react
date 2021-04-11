
let table = document.querySelector(".container");

const getMes = async mes => {
    return esperar(100).then(v=>meses[mes]);
}

const esperar = ms => {
    return new Promise(resolve => setTimeout(resolve,ms))
}

const dibujar = async () => {
console.log(table);
    for (let i = 0; i < meses.length; i++) {

        if(meses[i].dias == 31){
            let mes = await getMes(i);
            let nombreMes = document.createElement("div");
            nombreMes.className="col";
            let nombreMes30 = document.createElement("div");
            nombreMes30.className="col";
            let fila = document.createElement("div");
            fila.className = "row";
            
            nombreMes.appendChild(document.createTextNode(mes.mes));
            nombreMes30.appendChild(document.createTextNode(mes.dias));
            
            fila.appendChild(nombreMes);
            fila.appendChild(nombreMes30);
            
            table.appendChild(fila);
        }
    }
    table2=document.querySelectorAll(".row");
    for (let i = 0; i < meses.length; i++) {

        if(meses[i].dias < 31){
            let mes = await getMes(i);
            let nombreMes = document.createElement("div");
            nombreMes.className="col";
            let nombreMes30 = document.createElement("div");
            nombreMes30.className="col";
            let fila = document.createElement("div");
            fila.className = "row";
            
            nombreMes.appendChild(document.createTextNode(mes.mes));
            nombreMes30.appendChild(document.createTextNode(mes.dias));
            
            fila.appendChild(nombreMes);
            fila.appendChild(nombreMes30);
            
            table.appendChild(fila);
        }
    }
    console.log(table2)
}
