let btn= document.getElementById("Analizar");
btn.addEventListener("click", function () {
    let a;
    a = parseInt(document.getElementById("nota").value);
    if(a >= 1 && a <= 100)
    {
        if(a >= 61 && a <= 100){
            document.getElementById("resp").innerHTML = `<h1> Aprobado: ${a} pts. </h1>`;
        }
        else{
            document.getElementById("resp").innerHTML = `<h1> Reprobado: ${a} pts.</h1>`;
        }
    }
    else{
        document.getElementById("resp").innerHTML = `<h1> Ingrese un número valido</h1>`;
    }
});
function limpiarCampos() {
    // todo Obtener los elementos de entrada por su ID y establecer su valor en cadena vacía.
    document.getElementById("nota").value = "";
    document.getElementById("resp").innerHTML = "";
}