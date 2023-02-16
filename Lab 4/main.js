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