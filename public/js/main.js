//--------------------------------------------------------------------------Declaration variables
// jeu de lettres // all letters in French version
let allLetters = ["lettre blanche = [*]","lettre blanche = [*]","a","a","a","a","a","a","a","a","a","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i","i","i","i","i","i","i","i","n","n","n","n","n","n","o","o","o","o","o","o","r","r","r","r","r","r","s","s","s","s","s","s","t","t","t","t","t","t","u","u","u","u","u","u","l","l","l","l","l","d","d","d","m","m","m","g","g","b","b","c","c","p","p","f","f","h","h","v","v","j","q","k","w","x","y","z"];
let rack = [];
let score = 0;
let totalScore = 0;
let answer = "to define";
let compt = 0;
let stop = false;

// fonction pour définir la grille de lettres // DEFINING THE LETTERS RACK
let initiateRack = () => {
    rack.splice(0,rack.length);
    for (let i = 0; i<=6; i++) {
        let letter = allLetters[Math.round(Math.random()*(allLetters.length -1))];
        rack.push(letter.toUpperCase());
    };
}

// fonction pour les points, lettre par lettre// CALCULATING THE SCORE, letter by letter
let pointChecker = () => {
    score = 0;
    for ( lp = 0; lp < answer.length; lp++) {
        switch (answer.charAt(lp)) {
            case "a": case "e": case "i": case "n": case "o": case "r": case "s": case "t": case "u": case "l":
                score += 1;
                break;
            case "d": case "m": case "g":
                score += 2;
                break;
            case "b": case "c": case "p":
                score += 3;
                break;
            case "f": case "h": case "v":
                score += 4;
                break;
            case "j": case "q":
                score += 8;
                break;
            case "k": case "w": case "x": case "y": case "z":
                score += 10;
                break;
        
            default:
                //blank letter (= * ) included, lettre blanche incluse
                score +=0;
                break;
        };
    };

};


//-----------------------------------------------------------------------------JEU//GAME
alert ("Bienvenue dans ce jeu de Scrabble très sommaire ! Suis bien les étapes avec moi")
while ( totalScore <= 100 && stop === false) {
    compt ++;
    initiateRack();
    answer = prompt (`Voic tes lettres : ${rack}. Ecris ci-dessous le mot que tu as réussi à former. Tu n'as pas trouvé de mot existant ?
    Clique sur OK pour de nouvelles lettres.
    Clique sur Annuler pour arrêter le jeu`);
    if (answer === null) {
        break;
    } else if (answer === "") {
        continue;
    }else {
        answer = answer.toLowerCase();
        if (answer.length <= 7 && answer.length>=2 ) {
            pointChecker();
            totalScore += score;
            alert(`Tu as gagné ${score} points en écrivant ${answer}.
            Ton score total est de ${totalScore}`);
            document.write(`<h5>Tour ${compt} : Avec les lettres \"${rack}\", tu as écrit le mot \"${answer}\" et gagné ${score} points.</h5>`);
        } else if(answer.length=1) {
            while (answer.length <2){
                alert("Il ne semble pas que ce soit un mot... Recommence");
    
                answer = prompt (`Voic tes lettres : ${rack}. Ecris ci-dessous le mot que tu as réussi à former. Tu n'as pas trouvé de mot existant ?
                Clique sur OK pour de nouvelles lettres.
                Clique sur Annuler pour arrêter le jeu`);
                if (answer === null) {
                    stop = true;
                    break;
                } else if (answer.length <= 7 && answer.length>=2 ) {
                    pointChecker();
                    totalScore += score;
                    alert(`Tu as gagné ${score} points en écrivant ${answer}.
                    Ton score total est de ${totalScore}`);
                    document.write(`<h5>Tour ${compt} : Avec les lettres \"${rack}\", tu as écrit le mot \"${answer}\" et gagné ${score} points.</h5>`);
                    break;
                } else if (totalScore >=100){
                    alert("Tu as dépassé les 100 points, bravo!");
                    break;
                } else if(answer.length>7){
                    alert("Pas de triche ;-)")
                }else if (answer === "") {
                    break;
                };
            } ;
        } else if (totalScore >=100){
            alert("Tu as dépassé les 100 points, bravo!")
        } else if(answer.length>7){
            alert("Pas de triche ;-)");
        };
    };

};

//-------------------------------------------------------------------------------- affichage du score //score printing
let printScore = totalScore;
if (totalScore >=100) {
    document.write(`<h1>Tu as dépassé les 100 points, ${printScore} pour être exacte ! Et ceci en seulement ${compt} tour.</h1>`)
} else if (totalScore = 0) {
    document.write(`<h1>Oups, il semblerait que tu aies jeté l'éponge avant même d'avoir commencé :(</h1>`)
}else {
    document.write(`<h1>Belle partie! Tu as atteint les ${printScore} points en ${compt} tour !</h1>`) 
};