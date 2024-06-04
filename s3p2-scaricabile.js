// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna 
//"vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella;
// questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno 
//differente, ogni volta che viene invocata


/*CAMBIO TESTO DEGLI H1*/
let button = document.querySelector(".btn")
let h1 = document.querySelector("h1")

console.log (button)
console.log (h1)

/*due modi per cambiare il testo interno ad un elemento:
innerText
textContent
*/
button.addEventListener("click", function(){
    /*h1.innerText="Smartphone GALAXY!!!"*/
    h1.textContent="Smartphone UNIVERSE!!"
})



/*CAMBIO COLORE DI SFONDO*/
let button2 = document.getElementById("bott2")
console.log (button2)

button2.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";

})


/*CAMBIO INDIRIZZO NEL FOOTER*/
let footer = document.getElementsByTagName("footer")[0]; // Accedi al primo elemento della collezione
console.log(footer)

let button3= document.getElementById("bott3")


button3.addEventListener("click", function(){
    footer.textContent = "Smartphone UNIVERSE/GALAXY via dei Papaveri, 94 001234 Paese"
})



/*AGGIUNGO UNA CLASSE A TUTTI I LINK AMAZON*/
let links = document.querySelectorAll(".link-amazon")

let button4=document.getElementById("bott4")

/*La classe che aggiungo nel css ha priorità rispetto a quella che i link hanno
già, perchè è messa successivamente. Contiene un nuovo colore per i links che
sovrascriverà quello presente nella classe di base, quindi se i link diventano
blu (nuovo colore) significa che il codice funziona.

*/

/*Arrow function dentro una function di callback*/
button4.addEventListener("click", function(){
    links.forEach((link)=>{
        link.classList.add("link-amazon2")
    })
})


/*AGGIUNGO UNA CLASSE A TUTTE LE IMMAGINI CHE MODIFICA LA VISIBILITA'*/

let images=document.querySelectorAll(".prodotto img") //seleziona tutte le img figlie di un elemento con classe .prodotto
console.log(images)

let button5=document.getElementById("bott5")

button5.addEventListener("click", function(){

    images.forEach((image)=>{

        /*Se c'è la toglie, se non c'è la mette */
        if(image.classList.contains("hidden")){
            image.classList.remove("hidden")
        }
        else{
            image.classList.add("hidden")
        }
        
    })
})



















