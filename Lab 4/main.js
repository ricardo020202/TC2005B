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
    let sum = 0;
    let average = 0;
    let average1 = 0;
    let average2 = 0;
    let average3 = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        average = sum / matrix[i].length;
        sum = 0;
        if (i + 1 == 1) {
            average1 = average;
        } else if (i + 1 == 2) {
            average2 = average;
        } else if (i + 1 == 3) {
            average3 = average;
        }
    }
    return average1 + " " + average2 + " " + average3;
}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result1 = promedio(matrix);
document.getElementById("promedio").innerHTML = "<br><br>" +
    "matrix: " + matrix + "<br>" +
    "El promedio de la fila 1 es: " + result1[0] + "<br>" +
    "El promedio de la fila 2 es: " + result1[2] + "<br>" +
    "El promedio de la fila 3 es: " + result1[4] + "<br>";

function reverse_num(num){
    let reverse = 0;
    while(num > 0){
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reverse;
}
let num = 123456789;
let result2 = reverse_num(num);
document.getElementById("reverse").innerHTML = "<br><br>" +
    "num: " + num + "<br>" +
    "El numero invertido es: " + result2 + "<br>";
