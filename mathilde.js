function soeFeltIndput() { //funktionen kører, når knappen "Søg"bliver trykket
    let indputFelt = document.getElementById("indputFelt"); //Gemmer elementet i en variabel, gør det muligt at manipulere i elementer fra HTML (dom)
    let lukKnap = document.getElementById("lukKnap"); //Gemmer elementet i en variabel, gør det muligt at manipulere i elementer fra HTML (dom)
    let soegefeltButton = document.getElementById("soegefeltButton");
    let liste = document.getElementById("soegeResultater"); // Henter søgeresultat-listen
    let soegBoks = document.getElementById("soegBoks");


    if (indputFelt.style.display === "none") {
        indputFelt.style.display = "block";  // Gør søgefeltet synligt
        lukKnap.style.display = "block";  // Gør X-knappen synlig
        soegBoks.style.display = "block";
        soegefeltButton.style.display = "none";
    } else {
        indputFelt.style.display = "none";  // Skjul feltet
        lukKnap.style.display = "none";  // Skjul knappen
        soegefeltButton.style.display = "block";
        soegBoks.style.display = "none";
        indputFelt.value = ""; //indputfeltet bliver tomt når man lukker søgefeltet ned iegn
        liste.innerHTML = "";  //fjerner søgeresultaterne
    }
}

let soegResultater = [ 
    {
        displayName: "Ungrådgiver",
        link: "ungrådgiver.html",
      },

      {
        displayName: "Gruppeleder",
        link: "gruppeleder.html",
      },

      {
        displayName: "Forældrerådgiver",
        link: "forældrerådgiver.html",
      },

      {
        displayName: "Hold fordrag",
        link: "index.html",
      },

      {
        displayName: "Mød Marie som er frivillig",
        link: "holdet.html",
      },

      {
        displayName: "Bliv frivillig",
        link: "index.html",
      },

       {
        displayName: "GirlTalks frivillig univers",
        link: "#girltalk__frivilligeunivers__h2",
      },

      {
        displayName: "Mød de firvillige",
        link: "#holdet__h2",
      },

      {
        displayName: "Ansøg om at blive frivillig",
        link: "#ansøg__h2",
      },

      {
        displayName: "Vores tilbud" ,
        link: "vorestilbud.html" ,
      },

      {
        displayName: "Støt" ,
        link: "støt.html",
      },

      {
        displayName: "Om os",
        link: "omos.html",
      },

      {
        displayName: "Til unge" ,
        link: "tilunge.html",
      },

      {
        displayName: "Til forældre og nære voksne",
        link: "forældre.html" ,
      },

      {
        displayName: "Frodrag og workshops" ,
        link: "fordrag.html" ,
      },

      {
        displayName: "Bliv medsøster",
        link: "medsøster.html",
      },

      {
        displayName: "Kontakt" ,
        link: "kontakt.html",
      },

      {
        displayName: "Nyheder" ,
        link: "nyheder.html" ,
      },

      {
        displayName: "Ambassadører" ,
        link: "ambassadører" ,
      },

      {
        displayName: "Shop" ,
        link: "shop.html" ,
      },
];



function filterLinks() { //Funktionen starter når man skriver i inputfeltet ( onkeyup="filterLinks()"i HTML)
    let input = document.getElementById("indputFelt").value.toLowerCase(); // laver en var af værdien fra indputtet som kommer i feltet samt laver det til små bugstaver
    let liste = document.getElementById("soegeResultater"); // laver en var ud af soegeResultater ul i html
    liste.innerHTML = ""; // Funktionen læser det hele forfra hver gang – fordi den sletter det der tidligere var – og så læser den det der står nu

    if (input === "") { // søger for der ikke bliver vist noget når der ikke er skrevet noget i enputdeltet return stopper funktionen
        liste.innerHTML = "";  
        return; 
    }

    let resultater = []; // laver en var af en kom liste som senere kommer flere elementer i

    for (let i = 0; i < soegResultater.length; i++) { // for loopet tjekker arrayen af soegResultater om der er match med det der står i indput feltet og soegResultater
        if (soegResultater[i].displayName.toLowerCase().includes(input)) { //tjekker om søgeordet findes didisplayName
            resultater.push(soegResultater[i]); //gemmer match i resultater 
        }
    }

    if (resultater.length === 0) { // hvis der ikke findes et nogen elementer i resultater listen skrives der en besked på siden
        liste.innerHTML = "<li>Der blev desværre ikke fundet noget resultat. Kontrollere stavemåde eller brug et andet udtryk</li>";
    } else {
        for (let i = 0; i < resultater.length; i++) { // for loopet tjekker resultater listen igennem som er lavet efter soegResultater match
            let li = document.createElement("li"); // laver det til et li element 
            let a = document.createElement("a"); // laver det til et a links så man kan trykke på linket
            a.href = resultater[i].link; // tilføjer det rette link til resulatet
            a.textContent = resultater[i].displayName; //tilføjer link teksten til sidne
            li.appendChild(a); //tiltøjer a til dom
            liste.appendChild(li); //tilføjer li til ul'en i dom'en
        }
    }
}

//popup ungerådgiver
const openBtnUngerådgiver = document.getElementById("openUngerodgiver");
const closeBtnUngerådgiver = document.getElementById("closeUngerodgiver");
const popupUngerådgiver = document.getElementById("ungerodgiver__popup__content");

openBtnUngerådgiver.addEventListener("click", () => {
    popupUngerådgiver.style.display = "flex"; 
});

closeBtnUngerådgiver.addEventListener("click", () => {
    popupUngerådgiver.style.display = "none";
});




const openBtnGruppeleder = document.getElementById("openGruppeleder");
const closeBtnGruppeleder = document.getElementById("closeGruppeleder");
const popupGruppeleder = document.getElementById("gruppeleder__popup__content");

openBtnGruppeleder.addEventListener("click", () => {
  popupGruppeleder.style.display = "flex"; // eller "block", alt efter hvad du bruger i styling
});

closeBtnGruppeleder.addEventListener("click", () => {
  popupGruppeleder.style.display = "none";
});




const openBtnForaeldrerådgiver = document.getElementById("openForaeldrerodgiver");
const closeBtnForaeldrerådgiver = document.getElementById("closeForaeldrerodgiver");
const popupForaeldrerådgiver = document.getElementById("foraeldrerodgiver__popup__content");

openBtnForaeldrerådgiver.addEventListener("click", () => {
  popupForaeldrerådgiver.style.display = "flex"; // eller "block"
});

closeBtnForaeldrerådgiver.addEventListener("click", () => {
  popupForaeldrerådgiver.style.display = "none";
});




const openBtnFordrag = document.getElementById("openFordrag");
const closeBtnFordrag = document.getElementById("closeFordrag");
const popupFordrag = document.getElementById("fordrag__popup__content");

openBtnFordrag.addEventListener("click", () => {
  popupFordrag.style.display = "flex"; // eller "block"
});

closeBtnFordrag.addEventListener("click", () => {
  popupFordrag.style.display = "none";
});



//popup Maria
const openBtnMaria = document.getElementById("OpenMaria");
const closeBtnMaria = document.getElementById("closeMaria");
const popupMaria = document.getElementById("Maria__popup__content");

openBtnMaria.addEventListener("click", () => {
  popupMaria.style.display = "flex";
});

closeBtnMaria.addEventListener("click", () => {
  popupMaria.style.display = "none";
});