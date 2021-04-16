

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

var formUtente = document.getElementById("formUtente");

formUtente.addEventListener("submit",function(event){
    event.preventDefault();
    // console.log("ciao")
    var form = event.currentTarget;
    var formElements = form.elements

    
    var nome =formElements.nome.value
    var kmViaggio =formElements.kmViaggio.value
    var eta =formElements.eta.value

    console.log(nome + kmViaggio)
})





