// creazione array "dipendenti" con all'interno oggetti 
let dipendenti = [
    // per ogni oggetto aggiungere nome, ruolo e immagine; 
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    }
]
// pecuperiamo container cards dall'HTML 
let container_cards = document.getElementById("container_cards");

// STAMPIAMO LE INFORMAZIONI IN CONSOLE E IN INDEX HTML
for(let i=0; i<dipendenti.length; i++){
    // CREAZIONE CARD 
    let card = document.createElement("div");
    card.classList.add("col-3", "p-1", "card", "text-center");
    // INSERIMENTO DEI DATI IN HTML 
    card.innerHTML += `<img src="./img/${dipendenti[i].image}" <br>`;
    card.innerHTML += `<h2>${dipendenti[i].name}</h2>`;
    card.innerHTML += `<h5>${dipendenti[i].role}</h5>`;

    console.log(dipendenti[i].name);
    console.log(dipendenti[i].role);
    console.log(dipendenti[i].image);
    console.log("-----")

    container_cards.appendChild(card)
}



