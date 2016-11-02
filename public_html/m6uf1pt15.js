
var finestra;

function obrir() {
    var resposta = true;
    var joc;
    
    switch(arguments[0]) {
        case 0:
            joc = "spock.html";
            break;
        case 1:
            joc = "penjat.html";
            break;
        case 2:
            joc = "morra.html";
           break;
       default:
           resposta = false;
           joc = "";
           break;
    }
    
    finestra = window.open(joc, arguments[1], "width=900,height=500,left=250,\n\
        top=250,status=0,fullscreen=1,menubar=0,toolbar=0");
    window.finestra.focus();
    
    return resposta;
}

function jocSpock() {
    var resposta;
    var joc = Math.floor((Math.random() * 5));//gen num entre 0 i 4
    var matriu = ['llangardaix', 'paper', 'pedra', 'spock', 'tissores'];
    var respostes = [
        /*0*/ "Empat!", 
        /*1*/ "Llangardaix menja paper.", 
        /*2*/ "Pedra aplasta el llangardaix.", 
        /*3*/ "Llangardaix enverina Spock.",
        /*4*/ "Les tissores decapiten el llangardaix.", 
        /*5*/ "Paper tapa pedra.", 
        /*6*/ "Paper desautoritza SpocK.", 
        /*7*/ "Tissores tallen paper.",
        /*8*/ "Spock vaporitza pedra",
        /*9*/ "Pedra aplasta tissores",
        /*10*/ "Spock trenca tissores"
    ];
    //Frase resultat
    document.getElementById("pc").innerHTML = "El PC ha escollit :" + matriu[joc];
    //Creació de les imatges
    document.getElementById("jugador").innerHTML = "Jugador:<input type='image' src='img/" + matriu[arguments[0]] + ".jpeg' />\n\
        PC:<input type='image' src='img/" + matriu[joc] + ".jpeg' />";
    //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
    switch(arguments[0]) {
        //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
        case 0:
            if (joc === 0) { resposta = respostes[0];
            } else if (joc === 1) { resposta = respostes[1] + "Guanyes!";
            } else if (joc === 2) { resposta = respostes[2] + "Perds!";
            } else if (joc === 3) { resposta = respostes[3] + "Guanyes!";
            } else if (joc === 4) { resposta = respostes[4] + "Perds!";}
            break;
            //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
        case 1:
            if (joc === 0) { resposta = respostes[1] + "Perds!";
            } else if (joc === 1) { resposta = respostes[0];
            } else if (joc === 2) { resposta = respostes[5] + "Guanyes!";
            } else if (joc === 3) { resposta = respostes[6] + "Guanyes!";
            } else if (joc === 4) { resposta = respostes[7] + "Perds!";}
            break;
        case 2:
            //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
            if (joc === 0) { resposta = respostes[2] + "Guanyes!";
            } else if (joc === 1) { resposta = respostes[5] + "Perds!";
            } else if (joc === 2) { resposta = respostes[0];
            } else if (joc === 3) { resposta = respostes[8] + "Perds!";
            } else if (joc === 4) { resposta = respostes[9] + "Guanyes!";}
            break;
        case 3:
            //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
            if (joc === 0) { resposta = respostes[3] + "Perds!";
            } else if (joc === 1) { resposta = respostes[6] + "Perds!";
            } else if (joc === 2) { resposta = respostes[8] + "Guanyes!";
            } else if (joc === 3) { resposta = respostes[0];
            } else if (joc === 4) { resposta = respostes[10] + "Guanyes!";}
            break;
        case 4:
            //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
            if (joc === 0) { resposta = respostes[4] + "Guanyes!";
            } else if (joc === 1) { resposta = respostes[7] + "Guanyes!";
            } else if (joc === 2) { resposta = respostes[9] + "Perds!";
            } else if (joc === 3) { resposta = respostes[10] + "Perds!";
            } else if (joc === 4) { resposta = respostes[10];}
            break;
        default:
            return false;
            break;   
    }
    
    document.getElementById("desti").innerHTML = resposta;
    document.getElementById("jugar").hidden = false;
    document.getElementById("menu").hidden = false;
    
    return true;        
}

var peli;

function jocPenjat() {
    var resposta;
    var ent = arguments[0];
    var numPeli = Math.floor(Math.random()*5);//genera entre 0 i 4
    
    //BBDD intern de pe.lícules
    peli = [
        /*0*/"Star Wars",
        /*1*/"Star Trek",
        /*2*/"Señor de los anillos",
        /*3*/"El silencio de los corderos",
        /*4*/"South Park"
    ];
    
    var peliEscollida = peli[numPeli];
    
    
    
    document.getElementById("pc").innerHTML = resposta;
    document.getElementById("jugar").hidden = false;
    document.getElementById("menu").hidden = false;
    
    return true;
}