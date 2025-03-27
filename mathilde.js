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
        keywords: ["frivillig", "rådgivning", "unge"]
      },

      {
        displayName: "Gruppeleder",
        link: "gruppeleder.html",
        keywords: ["frivillig", "rådgivning", "unge", ]
      },

      {
        displayName: "Forældrerådgiver",
        link: "forældrerådgiver.html",
        keywords: ["frivillig", "rådgivning", "forældre", "pårørede" ]
      },

      {
        displayName: "Hold fordrag",
        link: "index.html",
        keywords: ["frivillig", "rådgivning", "fordrag" ]
      },

      {
        displayName: "Mød Marie som er frivillig",
        link: "holdet.html",
        keywords: ["frivillig", "rådgivning", "ungrådgiver", "forældrerådgiver", "gruppeleder"]
      },

      {
        displayName: "Bliv frivillig",
        link: "index.html",
        keywords: ["frivillig", "rådgivning", "ungrådgiver", "forældrerådgiver", "gruppeleder", "ansøg" ]
      },

      {
        displayName: "Bliv frivillig",
        link: "index.html",
        keywords: ["frivillig", "rådgivning", "ungrådgiver", "forældrerådgiver", "gruppeleder", "ansøg" ]
      },

       {
        displayName: "Frivillig universGirlTalks frivillig univers",
        link: "#",
        keywords: ["frivillig", "rådgivning", "ungrådgiver", "forældrerådgiver", "gruppeleder", "ansøg" ]
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
        liste.innerHTML = "<li>Hmm... den destination er ikke på kortet – endnu!</li>";
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