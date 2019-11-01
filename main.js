matriz = [
            [],
            [],
            [],
        ];

function aniadirValor() {
    let i = document.getElementById("fila").value;
    let j = document.getElementById("columna").value;
    let valor = document.getElementById("valor").value;

    if (i >= 0 && i <= 2 || j >= 0 && j <= 2) {

        matriz[i][j] = valor; //Para meter en la posición que yo quiera
        alert ("El valor ha sido introducido en la matriz"); 
    } else {
        alert("Los valores introducidos han de estar entre 0 y 2");
    }
}

function mostrarMatriz(){
    console.log(matriz); 
}
