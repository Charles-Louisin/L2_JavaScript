// Array data type
var hotels = ["Serena" , "Falaise" , "Hilton" , "Git"]
hotels.forEach(
    function(hotels){
        console.log(hotels);
    }
)
document.querySelector('.box').innerHTML = "<h1>Hotels proposés :</h1>" + hotels;


// Prompt number
var firstNumber = prompt("ANCIEN SOLDE")
var lastNumber = prompt("MONTANT DES ACHATS")
function soustraction() {
    alert("VOTRE NOUVEAU SOLDE EST DE :" +" "+ (firstNumber - lastNumber)+"FCFA")
}
soustraction()




// toggle button and toggleText button
var hideshow = false;

function addremove(event) {
    var text = event.textContent || event.innerText;

    if(!hideshow) {
        hideshow = true;
        document.querySelector('.box').style.opacity="100%";
        event.innerHTML = 'REMOVE';
        return;
    }

    if(hideshow) {
        hideshow = false;
        document.querySelector('.box').style.opacity="0%";
        event.innerHTML = 'ADD';
        return;
    }   
}