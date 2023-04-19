let emailAddress = ["marikadigirolamo@gmail.com", "mario.rossi@gmail.com", "michael.digirolamo@gmail.com"];
let userName = [`Marika`, `Mario`, `Michael`, `Bob`, `Jimi`,`Freddy`, `Janis`, `Roger`, `Mika`];
let authorizedEmail; //Variabile di appoggio;
let msgOkElem = document.getElementById("ok")
let msgKoElem = document.getElementById("ko")
// let userEmail = prompt("Inserisci la tua mail");
// console.log(`La mail inserita è ${userEmail}`);

// console.log( emailAddress [0]);
// console.log( emailAddress [1]);
// console.log( emailAddress [2]);

emailAddress.push("bob.marley@gmail.com");
emailAddress.push("jimi_hendrix@gmail.com");
emailAddress.push("freddy.mercury@gmail.com");
emailAddress.push("janis_joplin@gmail.com");
emailAddress.push("roger.waters@gmail.com"); 
emailAddress.push("mika.mika@gmail.com");

const btn = document.getElementById("loginBtn");

btn.addEventListener("click", function(){ //Js in fuznione del button in html
    authorizedEmail = false;
    console.log("click!");
    userEmail = document.getElementById("myEmail").value;
    console.log("Email Inserita" , userEmail);

    for (let email = 0; email < emailAddress.length; email++) { //Ciclo per controllare l'autorizzazione mail
        const confrontedEmail = emailAddress[email];
        // console.log(emailAddress[email]);
        
        if(userEmail == confrontedEmail ) {
            authorizedEmail = true;
            // console.log(`Mail Autorizzata`);
        }
    }
    
    console.log("Mail Autorizzata" , authorizedEmail);
    
    
    // if(authorizedEmail==true) {
    //     console.log(`Benvenuto Utente autorizzato`);
    //     // msgOkElem.style.display ="block"; //Cambio i display per mostrare o meno il messaggio a seconda che la condizione sia vera o meno.
    //     // msgKoElem.style.display = "none";

    //     msgOkElem.classList.remove("hidden"); // Altro metodo
    //     msgKoElem.classList.add("hidden");
        
    // } else if (authorizedEmail==false) {
    //     console.log(`Mail non Autorizzata`); 
    //     // msgOkElem.style.display = "none";
    //     // msgKoElem.style.display = "block";

    //     msgKoElem.classList.remove("hidden");
    //     msgOkElem.classList.add("hidden");

    // }
})
