function numberTable() {
    let num = window.prompt("introduce un numero:");
    if (!isNaN(num)) {
        document.write("<table>");
        document.write("<tbody>");
        for (let i = 1; i <= num; i++) {
            document.write("<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td></tr>")
        }
        document.write("</tbody>");
        document.write("</table>");
        document.write("<br><button onclick='window.location.reload()'>Regresar</button>");
    } else {
        numberTable();
    }
}

function validarSuma() {
    let n1 = Math.floor(Math.random() * 10)
    let n2 = Math.floor(Math.random() * 10);
    const start = Date.now();
    let num = window.prompt("introduce el resultado de la operacion " + n1 + "+" + n2 + ":");
    if (!isNaN(num)) {
        const end = Date.now();
        let time = (end - start) / 1000;
        if (n1 + n2 == num) {
            document.write("<h2>Resultado correcto</h2>")
            document.write("<p>Tiempo de respuesta: " + time + "</p>")
        } else {
            document.write("<h2>Resultado incorrecto</h2>")
            document.write("<p>Tiempo de respuesta: " + time + "</p>")
        }
        document.write("<br><button onclick='window.location.reload()'>Regresar</button>");
    } else {
        validarSuma();
    }
}

function contador(array) {
    let negative = 0;
    let zeros = 0;
    let positive = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negative++;
        }
        if (array[i] == 0) {
            zeros++;
        }
        if (array[i] > 0) {
            positive++;
        }
    }
    return negative + " " + zeros + " " + positive;
}
let array = [-4, 3, -9, 0, 4, 1];
let result = contador(array);
document.getElementById("contador").innerHTML = "<br><br>" +
    "array: " + array + "<br>" +
    "La cantidad de numeros negativos es: " + result[0] + "<br>" +
    "La cantidad de numeros cero es: " + result[2] + "<br>" +
    "La cantidad de numeros positivos es: " + result[4] + "<br>";

function promedio(matrix) {
    //promedio de las filas de la matriz
    let sum = 0;
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
            count++;
        }
    }
    return sum / count;
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result1 = promedio(matrix);
document.getElementById("promedio").innerHTML = "<br><br>" +
    "matrix: " + matrix + "<br>" +
    "El promedio de los numeros es: " + result1 + "<br>";
