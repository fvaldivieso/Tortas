var Nota1=prompt("Ingrese pimera nota de CSS", 0)
var Nota2=prompt("Ingrese segunda nota de CSS", 0)
var Nota3=prompt("Ingrese tercera nota de CSS", 0)

var fila=` <td>HTML</td>
            <td>${Nota1}</td>
            <td>${Nota2}</td>
            <td>${Nota3}</td>`
var Promedio=((Number(Nota1)+Number(Nota2)+Number(Nota3))/3)
var total=`<td>${Promedio}</td>`
            
document.write(fila + total)