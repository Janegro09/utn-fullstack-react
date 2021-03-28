/*diasDelMes tiene cantidad de días que tiene cada mes ordenado según vector meses,
es decir, a posición 0 de meses corresponde Enero y a posicion 0 de diasDelMes
corresponde 31 que son los días de Enero
Desarrollar un programa que muestre por consola todos los meses con 31 días y todos los
meses con 30 días.
Utilizar ciclo for y ambos vectores.*/
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var meses31=[];
var meses30=[]

for (let i = 0; i < diasDelMes.length; i++) {
    const element = diasDelMes[i];
    switch (element) {
        case 30:
            meses30.push(i)
            break;
        case 31:
            meses31.push(i)
            break;
    
        default:
            break;
    }
}

console.log("Los meses con 31 son: ")
for (let i = 0; i < meses31.length; i++) {
    const e = meses31[i];
    console.log(meses[e])
}

console.log("Los meses con 30 son: ")
for (let i = 0; i < meses30.length; i++) {
    const e = meses30[i];
        console.log(meses[e])
}