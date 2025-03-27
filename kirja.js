const track = document.querySelector(".holdet__gallery"); //klassen holdet__gallery er beholder for billederne 
const images = document.querySelectorAll(".holdet__gallery .holdet__gallery__li");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let index = 0;
const imagesPerSlide = 5; // Antal synlige billeder per slide
const totalImages = images.length; // Tæller hvor mange billeder, der er i galleriet

const imageWidth = images[0].getBoundingClientRect().width; //Henter bredden af et billede dynamisk og sikrer nøjagtig bredde af billede
const scrollAmount = imageWidth * imagesPerSlide; //Beregner hvor langt der scrolles, når der skiftes slide
const maxIndex = Math.ceil(totalImages / imagesPerSlide) -1; // Undgå tom side da Math.ceil runder op til nærmeste heltal og sørger for at der altid er hele billeder på siden


function animateScroll(targetIndex) {
    let start = index * scrollAmount; //Bregner hvor vi starter fra i pixels
    let end = targetIndex * scrollAmount; //Beregner hvor vi skal ende i pixels
    let steps = 10; // Hvor mange trin animationen tager samtidig med at skabe en jævn scroll-effekt
    let stepSize = (end - start) / steps; // Beregner hvor meget vi skal flytte os for hvert trin i animationen
    
    //For loop til at skabve glidende overgang i billederækken
    for (let i = 1; i <= steps; i++) {
        setTimeout(() => { //setTimeout bruges til at få aninmationen til at se glidende ud
            track.style.transform = `translateX(-${start + stepSize * i}px)`; //flytter billedegalleriet og beregner den nye position - stepSize *i betyder at galleriet flyttes lidt ad gangen i hver iteration
        }, i * 50); // Hvert trin varer 50ms
    }
    
    index = targetIndex; //OPdaterer den aktuelle side, så vi ved hvir vi er
}

// Funktion til at å pilene til at scrolle
function scrollGallery(direction) {
    let newIndex = index + direction; //Finder den nye slide vi skal se
    
    // Loop tilbage til første billede, hvis vi er i slutningen
    if (newIndex > maxIndex) newIndex = 0; //Hvis vi er på sidste side går vi tilbage til første slide
    if (newIndex < 0) newIndex = maxIndex; //Hvis vi er på første side og trykker "tilbage" hopper vi til sidste slide 
    
    animateScroll(newIndex); //Ksalder animateScrool for at rykke slideren
}

// Event listeners til pilene
nextButton.addEventListener("click", () => scrollGallery(1));
prevButton.addEventListener("click", () => scrollGallery(-1));