// 1. Visualizzare in pagina 5 numeri casuali.

// Seleziono la lista dove verranno mostrati i numeri casuali

const formRandomNumbers = document.getElementById('numbers-list');

// Creo una funzione passando due parametri

const createListELements = (maxListElements, max) => {

    // Ciclo for sull'attributo maxListElements (5)
    for (let i = 0; i < maxListElements; i++) {

        // Creo un elemento li (5 volte)
        const li = document.createElement('li');

        // Mostro come testo il numero random generato da Math.random()
        li.textContent = Math.floor(Math.random() * max + 1);

        // Inserisco all'interno della lista gli elementi li
        formRandomNumbers.appendChild(li);

    }

}

// Eseguo la funzione passando il valore agli attributi
// 5 fa riferimento al ciclo for
// 50 è il valore massimo che il numero random può raggiungere

createListELements(5, 50);