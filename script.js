

// var numKm = parseInt (prompt("Quanti KM devi percorrere?"));
// console.log(numKm);
// var anniPasseggero = parseInt (prompt("Quanti anni ha il passeggero?"));
// console.log(anniPasseggero);


// var prezzoAlKm = 0.21;

// console.log(parseFloat(prezzoAlKm));

// var prezzoBiglietto = numKm * prezzoAlKm;
// console.log(prezzoBiglietto.toFixed(2));

// var passeggeroMinorenne = parseInt(17);



// var passeggeroOver = parseInt(65);






// if(anniPasseggero<=passeggeroMinorenne){

//     document.write("Usufruisci dello sconto del 20%! Il prezzo del tuo biglietto è " + (prezzoBiglietto-((prezzoBiglietto*20)/100)).toFixed(2) +" euro")
// }
// else if(anniPasseggero>=passeggeroOver){

//     document.write("Usufruisci dello sconto del 40%! Il prezzo del tuo biglietto è " + (prezzoBiglietto-((prezzoBiglietto*40)/100)).toFixed(2) +" euro")
// }
// else {

//     document.write("Il prezzo del tuo biglietto è " + prezzoBiglietto +" euro" )
// }



// -----------------------------------------------


var formUtente = document.getElementById("formUtente");
formUtente.addEventListener("submit",function(event){
    console.log("submit del form")
    event.preventDefault()

    var form = event.currentTarget;
    var formElementi= form.elements

    var prezzoAlKm = 0.21;
    var nome=formElementi.nome.value
    var kmViaggio=formElementi.kmViaggio.value
    var selezionaEta =formElementi.selezionaEta.value
    var nomePasseggero = document.getElementById("nomePasseggero");
    nomePasseggero += nomePasseggero.innerHTML = "NOME PASSEGGERO " + formElementi.nome.value;
    var costoBiglietto = document.getElementById("costoBiglietto");
    console.log(prezzoAlKm)
    console.log(kmViaggio)
    var costoBigliettoTemp = prezzoAlKm * kmViaggio
    var offerta = document.getElementById("offerta")
    var offertaBiglietto = "BIGLIETTO STANDARD"


    if (selezionaEta === "over"){

        costoBigliettoTemp -= ((costoBigliettoTemp*60)/100)
        offertaBiglietto = "SCONTO OVER 65"

    }else if(selezionaEta === "minorenne"){
        costoBigliettoTemp -= ((costoBigliettoTemp*20)/100)
        offertaBiglietto = "SCONTO UNDER 18"
    }

    offerta.innerHTML = offertaBiglietto

    costoBiglietto.innerHTML= costoBigliettoTemp.toFixed(2) + " euro";

    var carrozza = document.getElementById("carrozza")
    carrozza.innerHTML = (Math.floor(Math.random() * 10) + 1); 

    var codiceCP = document.getElementById("codiceCP")
    codiceCP.innerHTML = (Math.floor(Math.random() * ((99999 - 90000) +1) + 90000)); 

    document.getElementById("biglietto").classList.remove("hiddenTicket")

}


)
formUtente.addEventListener("reset",function(event){

    document.getElementById("nomePasseggero").innerHTML=""
    document.getElementById("costoBiglietto").innerHTML=""
    document.getElementById("carrozza").innerHTML=""
    document.getElementById("codiceCP").innerHTML=""
    document.getElementById("offerta").innerHTML=""
    
}
)












