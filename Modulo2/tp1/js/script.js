/*diasDelMes tiene cantidad de días que tiene cada mes ordenado según vector meses,
es decir, a posición 0 de meses corresponde Enero y a posicion 0 de diasDelMes
corresponde 31 que son los días de Enero
Desarrollar un programa que muestre por consola todos los meses con 31 días y todos los
meses con 30 días.
Utilizar ciclo for y ambos vectores.*/
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log("Los meses con 31 días son: ")
for (let i = 0; i < meses.length; i++) {
    if(diasDelMes[i]==31){
        console.log(meses[i])
    }
}
console.log("");
console.log("Los meses con 30 días son: ")
for (let i = 0; i < meses.length; i++) {
    if(diasDelMes[i]==30){
        console.log(meses[i])
    }
}

