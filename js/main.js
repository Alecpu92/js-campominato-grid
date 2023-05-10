// dichiaro variabili, getelement del div in js e scelta livello difficolta
let richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));
 
const griglia = document.getElementById('square');

let celleTotali = valoreCella(richiestaUtente);

let bombeGenerate = generaBombe(celleTotali);
console.log(bombeGenerate);

let punteggio = 0;


// controllo scelta livello
while (isNaN(richiestaUtente) || richiestaUtente > 3 || richiestaUtente < 1) {
    richiestaUtente = parseInt(prompt('Inserisci il Livello: 1-2-3?'));
}

// funzione celle
function valoreCella(richiesta) {
    if (richiesta === 1) {
        totaleCelle = 100;
    } else if (richiesta === 2) {
        totaleCelle = 81;
    } else {
        totaleCelle = 49;
    }
    return totaleCelle;
}

// funzione per generare le bombe 
function generaBombe(numeroDifficoltà) {
    // creo un array vuoto 
    let bombe = [];
    // ciclo for generazione 16 numeri random
    for (let i = 0; i < 16; i++) {

        let generaNumero = Math.floor(Math.random() * numeroDifficoltà + 1);
        
        while (bombe.includes(generaNumero)) {
            generaNumero = Math.floor(Math.random() * numeroDifficoltà + 1);
        }
        
        bombe.push(generaNumero);
    }
    return bombe;
}

// generazione celle 

for (let i = 0; i < celleTotali; i++) {
  
    let celle = document.createElement('div');
//    impostazione numero celle in base al livello
    if (celleTotali === 100) {
        celle.classList.add('cell-100');
    } else if (celleTotali === 81) {
        celle.classList.add('cell-81');
    } else {
        celle.classList.add('cell-49');
    }
    // appendo l'elemento alla griglia
    griglia.appendChild(celle);
    // implementazione del ciclo sulla cella
    celle.innerText = i + 1;
    // aggiunta evento al click
    celle.addEventListener('click', function () {
         
        let bombeIncluse = bombeGenerate.includes(i + 1);
        
        if (bombeIncluse === true) {
            
            celle.classList.add('cell-dangerous');
            
            griglia.classList.add('block-cell-red');
            
            const gameOver = document.querySelector('.game-over');
            gameOver.style.display = 'block';

        } else {
            // celle senza bombe
            celle.classList.add('cell-good');
            
            celle.classList.toggle('click-none');
            
            // aumento punteggio al click 
            punteggio += 1;
            console.log(punteggio);
            // condizione d'uscita
            if (punteggio === (celleTotali - 16)) {
                const winner = document.querySelector('.winner');
                winner.style.display = 'block';
                griglia.classList.add('click-none');
            }
        }
        // stampo il risultato sugli elementi p richiamati 
        document.getElementById('point').innerHTML = punteggio;

    })

}
