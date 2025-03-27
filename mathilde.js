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
    // 🌍 Kontinenter og rejsetyper
    { displayName: "Afrika", link: "afrika.html" },
    { displayName: "Europa", link: "europa.html" },
    { displayName: "Nordamerika", link: "nordamerika.html" },
    { displayName: "Sydamerika", link: "sydamerika.html" },
    { displayName: "Australien", link: "australien.html" },
    { displayName: "Asien", link: "asien.html" },
    { displayName: "Oceanien", link: "oceanien.html" },
    { displayName: "Solorejser", link: "soloRejser.html" },
    { displayName: "Grupperejser", link: "gruppeRejse.html" },

    // 🏙️ Populære storbyer
    { displayName: "New York", link: "newyork.html" },
    { displayName: "London", link: "london.html" },
    { displayName: "Paris", link: "paris.html" },
    { displayName: "Tokyo", link: "tokyo.html" },
    { displayName: "Bangkok", link: "bangkok.html" },
    { displayName: "Dubai", link: "dubai.html" },
    { displayName: "Sydney", link: "sydney.html" },
    { displayName: "Berlin", link: "berlin.html" },
    { displayName: "Los Angeles", link: "losangeles.html" },

    // 🏝️ Eksotiske destinationer
    { displayName: "Bali", link: "bali.html" },
    { displayName: "Maldiverne", link: "maldiverne.html" },
    { displayName: "Hawaii", link: "hawaii.html" },
    { displayName: "Fiji", link: "fiji.html" },
    { displayName: "Seychellerne", link: "seychellerne.html" },

    // 🏔️ Naturoplevelser
    { displayName: "Grand Canyon", link: "grandcanyon.html" },
    { displayName: "Machu Picchu", link: "machupicchu.html" },
    { displayName: "Safari i Kenya", link: "safari-kenya.html" },
    { displayName: "Amazonas", link: "amazonas.html" },
    { displayName: "Antarktis", link: "antarktis.html" },

    // 🎿 Skisportssteder
    { displayName: "Alperne", link: "alperne.html" },
    { displayName: "Aspen", link: "aspen.html" },
    { displayName: "Whistler", link: "whistler.html" },

    // 🏕️ Backpacking & eventyr
    { displayName: "Backpacking i Sydøstasien", link: "backpacking-sydostasien.html" },
    { displayName: "Interrail i Europa", link: "interrail-europa.html" },
    { displayName: "Roadtrip i USA", link: "roadtrip-usa.html" },
    { displayName: "Caminoen", link: "caminoen.html" },
    { displayName: "Mount Everest Basecamp", link: "everestbasecamp.html" }
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