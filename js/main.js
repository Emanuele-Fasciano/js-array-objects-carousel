// creo un array con SOLO il percorso delle immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// recupero il container delle slide dall' HTML
const slidesContainerEl = document.querySelector(".items")
// recupero i bottoni imgPrev e imgNext
const buttonPrevEl = document.querySelector(".prev")
const buttonNextEl = document.querySelector(".next")

// assegno una variabile all immagine che sarà attiva
let activeImage = 0;

images.forEach((image, index) => {

    // creo una LET con la classe da dare a TUTTE le slide
    let slideClasses = "item"
    
    // se è l'immagine è quella selezionata aggiungo la classe "active" a "item" 
    // IMPORTANTE lo spazio davanti alla seconda classe per distanziarle "class= item SPAZIO active"
    if (index == activeImage) {
        slideClasses += " active"
    }
    
    // assegno a una CONST il tag item con dentro l'immagine e assegno le classi con "slideClasses"
    // e l'immagine da visualizzare con "currentImage"
    const slide = `<div class="${slideClasses}">
                    <img src="./${image.image}" alt="">
                    <div class="details">
                        <h2>${image.title}</h2>
                        <p>${image.text}</p>
                    </div>
                </div>`
    
    slidesContainerEl.innerHTML += slide

});


// creo un evento sul click del button next
buttonNextEl.addEventListener(
    "click",
    function () {

        //recupero tutte le slides
        const slides = document.querySelectorAll(".item");

        // dalla slide activeImage rimuovo la classe "active"
        slides[activeImage].classList.remove("active");

        //incremento activeImage
        activeImage++;
        
        //creo un if che mi riporta alla prima immagine 
        if(activeImage >= slides.length){
            activeImage = 0;
        };
        
        // all'activeImage incrementato (la slide successiva) do la classe "active"
        slides[activeImage].classList.add("active");
    }
)


// creo un evento sul click del button prev
buttonPrevEl.addEventListener(
    "click",
    function () {

    }
)
