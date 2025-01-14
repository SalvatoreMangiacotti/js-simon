// 1. Visualizzare in pagina 5 numeri casuali.

// Seleziono gli elementi dell'HTML

const formRandomNumbers = document.getElementById('numbers-list');

// Creo un array dove salvare i numeri random estratti

let randomNumbersArray = [];

// Creo una funzione passando due parametri

const createListELements = (maxListElements, max) => {

    // Ciclo for sull'attributo maxListElements (5)

    for (let i = 0; i < maxListElements; i++) {

        // Creo un elemento li (5 volte)

        const li = document.createElement('li');

        // Mostro come testo il numero random generato da Math.random()

        li.innerHTML = Math.floor(Math.random() * max + 1);

        randomNumbersArray.push(li);

        // Inserisco all'interno della lista gli elementi li

        formRandomNumbers.appendChild(li);

    }

}


// Eseguo la funzione passando il valore agli attributi
// 5 fa riferimento al ciclo for
// 50 è il valore massimo che il numero random può raggiungere

createListELements(5, 50);



// 2. Fai partire un timer di 30 secondi

// Seleziono gli elementi dell'HTML

const displayCountdown = document.getElementById('countdown');
const answerForm = document.getElementById('answers-form');

// // Imposto una variabile seconds a 5

let seconds = 5;

// Mostriamo in pagina il valore iniziale di 5 dalla quale parte il countdown

displayCountdown.innerHTML = seconds;

// Creo una funzione async per un countDown che parte da 5 (seconds) e decrementa fino a 0

const countDown = setInterval(() => {

    // SE i secondi (5) sono identici a 0

    if (seconds === 0) {

        // Il countdown viene fermato

        clearInterval(countDown);

        // Lo 0 viene nascosto al termine del countdown

        displayCountdown.innerHTML = '';

        // La classe d-none viene rimossa e verranno mostrati 5 input
        // in cui l’utente deve inserire i numeri che ha visto precedentemente
        // nell'ordine che preferisce

        answerForm.classList.remove("d-none");

        // Ciclo sull'array per poter nascondere i numeri dalla pagina

        for (let i = 0; i < randomNumbersArray.length; i++) {

            randomNumbersArray[i].style.display = "none";

        }

    } else {

        // Decrementiamo il valore di seconds

        seconds--;

        // Mostriamo in pagina il countdown

        displayCountdown.innerHTML = seconds;

    }

}, 1000); // 1000 (1 secondo)


