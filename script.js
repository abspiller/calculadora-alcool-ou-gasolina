
function calcular(event) {
    event.preventDefault()

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textoResultado = document.getElementById("texto-resultado");

    let alcoolSpan = document.getElementById("alcool-resultado");
    let gasolinaSpan = document.getElementById("gasolina-resultado");

    // Cálculo: álcool / gasolina => se o resultado for menor que 0.7, compensa usar álcool

    let calculo = (alcoolInput / gasolinaInput);

    if (calculo < 0.7) {
        // Compensa usar álcool
        textoResultado.innerHTML = "Compensa usar Álcool";
        
    } else {
        // Compensa usar gasolina
        textoResultado.innerHTML = "Compensa usar Gasolina";
        
    }

    alcoolSpan.innerHTML = "Álcool R$ " + alcoolInput;
    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;


    contentResult.classList.remove("esconder")

}