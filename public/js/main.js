alert ("Bienvenue dans ce jeu de Scrabble très sommaire ! Suis bien les étapes avec moi")
// jeu de lettres
let allLetters = ["lettre blanche","lettre blanche","a","a","a","a","a","a","a","a","a","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","i","i","i","i","i","i","i","i","n","n","n","n","n","n","o","o","o","o","o","o","r","r","r","r","r","r","s","s","s","s","s","s","t","t","t","t","t","t","u","u","u","u","u","u","l","l","l","l","l","d","d","d","m","m","m","g","g","b","b","c","c","p","p","f","f","h","h","v","v","j","q","k","w","x","y","z"]
let point0 = allLetters.splice(0,2);
let point1 = allLetters.slice(allLetters.indexOf("a"),allLetters.lastIndexOf("l"));
let point2 = allLetters.slice(allLetters.indexOf("d"),allLetters.lastIndexOf("g"));
let point3 = allLetters.slice(allLetters.indexOf("b"),allLetters.lastIndexOf("p"));
let point4 = allLetters.slice(allLetters.indexOf("f"),allLetters.lastIndexOf("v"));
let point8 = allLetters.slice(allLetters.indexOf("j"),allLetters.lastIndexOf("q"));
let point10 = allLetters.slice(allLetters.indexOf("k"),allLetters.lastIndexOf("z"));
let score = "";


// définition de la rack initiale
let l1 = allLetters[Math.round(Math.random()*(allLetters.length -1))];;
let l2 = allLetters[Math.round(Math.random()*(allLetters.length -1))];;
let l3 = allLetters[Math.round(Math.random()*(allLetters.length -1))];;
let l4 = allLetters[Math.round(Math.random()*(allLetters.length -1))];;
let l5 = allLetters[Math.round(Math.random()*(allLetters.length -1))];;
let l6 = allLetters[Math.round(Math.random()*(allLetters.length -1))];;
let l7 = allLetters[Math.round(Math.random()*(allLetters.length -1))];;


let rack = [l1,l2,l3,l4,l5,l6,l7]

alert(`Voici les lettres que tu peux utiliser : ${l1} - ${l2} - ${l3} - ${l4} - ${l5} - ${l6} - ${l7} - `);


let answer = prompt (`Ecris ici le mot que tu as réussi à former avec ${rack}. Tu n'as pas trouvé de mot existant ? Ecris \"new\" pour obtenir un nouveau jeu de lettres`);
let answer2 = "";
if (answer == "new"){
    score = 0;
    nl1 = allLetters[Math.round(Math.random()*(allLetters.length -1))];
    nl2 = allLetters[Math.round(Math.random()*(allLetters.length -1))];
    nl3 = allLetters[Math.round(Math.random()*(allLetters.length -1))];
    nl4 = allLetters[Math.round(Math.random()*(allLetters.length -1))];
    nl5 = allLetters[Math.round(Math.random()*(allLetters.length -1))];
    nl6 = allLetters[Math.round(Math.random()*(allLetters.length -1))];
    nl7 = allLetters[Math.round(Math.random()*(allLetters.length -1))];
    let rackN = [nl1,nl2,nl3,nl4,nl5,nl6,nl7];
    alert(`Voici tes nouvelles lettres : ${rackN}`);
    answer2 = prompt(`Ecris ici le mot que tu as réussi à former avec ${rackN}. Tu n'as pas trouvé de mot existant ? Réfléchis bien, c'est ta dernière chance jusqu'à ce que j'en apprenne davantage sur JS !`);
    console.log(score);
    if (answer.length>=2) {
        // première condition pour calculer les points de la LETTRE 1
        if (point1.some(el => answer2.charAt(0).includes(el))){
            score = 1;
        } else if (point2.some(el => answer2.charAt(0).includes(el))){
            score = 2;
        } else if (point3.some(el => answer2.charAt(0).includes(el))){
            score = 3;
        } else if (point4.some(el => answer2.charAt(0).includes(el))){
            score = 4;
        } else if (point8.some(el => answer2.charAt(0).includes(el))){
            score = 8;
        } else if (point10.some(el => answer2.charAt(0).includes(el))){
            score = 10;
        } else if (point0.some(el => answer2.charAt(0).includes(el))){
            score = 0;
        } else {
            score +=0
    
        }
        // LETTRE 2
        if (point1.some(el => answer2.charAt(1).includes(el))){
            score += 1;
        } else if (point2.some(el => answer2.charAt(1).includes(el))){
            score += 2;
        } else if (point3.some(el => answer2.charAt(1).includes(el))){
            score += 3;
        } else if (point4.some(el => answer2.charAt(1).includes(el))){
            score += 4;
        } else if (point8.some(el => answer2.charAt(1).includes(el))){
            score += 8;
        } else if (point10.some(el => answer2.charAt(1).includes(el))){
            score += 10;
        } else if (point0.some(el => answer2.charAt(1).includes(el))){
            score += 0;
        
        } else {
            score +=0
        }
        // lettre3
        if (point1.some(el => answer2.charAt(2).includes(el))){
            score += 1;
        } else if (point2.some(el => answer2.charAt(2).includes(el))){
            score += 2;
        } else if (point3.some(el => answer2.charAt(2).includes(el))){
            score += 3;
        } else if (point4.some(el => answer2.charAt(2).includes(el))){
            score += 4;
        } else if (point8.some(el => answer2.charAt(2).includes(el))){
            score += 8;
        } else if (point10.some(el => answer2.charAt(2).includes(el))){
            score += 10;
        } else if (point0.some(el => answer2.charAt(2).includes(el))){
            score += 0;
        
        } else {
            score +=0
    
        }
    
        // lettre4
        if (point1.some(el => answer2.charAt(3).includes(el))){
            score += 1;
        } else if (point2.some(el => answer2.charAt(3).includes(el))){
            score += 2;
        } else if (point3.some(el => answer2.charAt(3).includes(el))){
            score += 3;
        } else if (point4.some(el => answer2.charAt(3).includes(el))){
            score += 4;
        } else if (point8.some(el => answer2.charAt(3).includes(el))){
            score += 8;
        } else if (point10.some(el => answer2.charAt(3).includes(el))){
            score += 10;
        } else if (point0.some(el => answer2.charAt(3).includes(el))){
            score += 0;
        
        } else {
            score +=0
    
        }
    
        // lettre5
        if (point1.some(el => answer2.charAt(4).includes(el))){
            score += 1;
        } else if (point2.some(el => answer2.charAt(4).includes(el))){
            score += 2;
        } else if (point3.some(el => answer2.charAt(4).includes(el))){
            score += 3;
        } else if (point4.some(el => answer2.charAt(4).includes(el))){
            score += 4;
        } else if (point8.some(el => answer2.charAt(4).includes(el))){
            score += 8;
        } else if (point10.some(el => answer2.charAt(4).includes(el))){
            score += 10;
        } else if (point0.some(el => answer2.charAt(4).includes(el))){
            score += 0;
        
        } else {
            score +=0
    
        }
        // lettre 6
        if (point1.some(el => answer2.charAt(5).includes(el))){
            score += 1;
        } else if (point2.some(el => answer2.charAt(5).includes(el))){
            score += 2;
        } else if (point3.some(el => answer2.charAt(5).includes(el))){
            score += 3;
        } else if (point4.some(el => answer2.charAt(5).includes(el))){
            score += 4;
        } else if (point8.some(el => answer2.charAt(5).includes(el))){
            score += 8;
        } else if (point10.some(el => answer2.charAt(5).includes(el))){
            score += 10;
        } else if (point0.some(el => answer2.charAt(5).includes(el))){
            score += 0;
        
        } else {
            score +=0
        }
        
        // lettre 7
        if (point1.some(el => answer2.charAt(6).includes(el))){
            score += 1;
        } else if (point2.some(el => answer2.charAt(6).includes(el))){
            score += 2;
        } else if (point3.some(el => answer2.charAt(6).includes(el))){
            score += 3;
        } else if (point4.some(el => answer2.charAt(6).includes(el))){
            score += 4;
        } else if (point8.some(el => answer2.charAt(6).includes(el))){
            score += 8;
        } else if (point10.some(el => answer2.charAt(6).includes(el))){
            score += 10;
        } else if (point0.some(el => answer2.charAt(6).includes(el))){
            score += 0;
        
        } else {
            score +=0
        }
    
        // resultat
        alert ("Bravooo ! tu as gagné " + score  + "points. Pour réésayer, réactualise ta page" );
    }
    else if (answer.length<2) {
        alert (`Es-tu sûr que c'est un mot ? Je ne pense pas ;-)`)
    } else {
        alert ("Réactualise ta page et gagne une seconde - ou plutôt 3e - chance")
    }
}
else if (answer.length>=2) {
    // première condition pour calculer les points de la LETTRE 1
    if (point1.some(el => answer.charAt(0).includes(el))){
        score = 1;
    } else if (point2.some(el => answer.charAt(0).includes(el))){
        score = 2;
    } else if (point3.some(el => answer.charAt(0).includes(el))){
        score = 3;
    } else if (point4.some(el => answer.charAt(0).includes(el))){
        score = 4;
    } else if (point8.some(el => answer.charAt(0).includes(el))){
        score = 8;
    } else if (point10.some(el => answer.charAt(0).includes(el))){
        score = 10;
    } else if (point0.some(el => answer.charAt(0).includes(el))){
        score = 0;
    } else {
        score +=0

    }
    // LETTRE 2
    if (point1.some(el => answer.charAt(1).includes(el))){
        score += 1;
    } else if (point2.some(el => answer.charAt(1).includes(el))){
        score += 2;
    } else if (point3.some(el => answer.charAt(1).includes(el))){
        score += 3;
    } else if (point4.some(el => answer.charAt(1).includes(el))){
        score += 4;
    } else if (point8.some(el => answer.charAt(1).includes(el))){
        score += 8;
    } else if (point10.some(el => answer.charAt(1).includes(el))){
        score += 10;
    } else if (point0.some(el => answer.charAt(1).includes(el))){
        score += 0;
    
    } else {
        score +=0
    }
    // lettre3
    if (point1.some(el => answer.charAt(2).includes(el))){
        score += 1;
    } else if (point2.some(el => answer.charAt(2).includes(el))){
        score += 2;
    } else if (point3.some(el => answer.charAt(2).includes(el))){
        score += 3;
    } else if (point4.some(el => answer.charAt(2).includes(el))){
        score += 4;
    } else if (point8.some(el => answer.charAt(2).includes(el))){
        score += 8;
    } else if (point10.some(el => answer.charAt(2).includes(el))){
        score += 10;
    } else if (point0.some(el => answer.charAt(2).includes(el))){
        score += 0;
    
    } else {
        score +=0

    }

    // lettre4
    if (point1.some(el => answer.charAt(3).includes(el))){
        score += 1;
    } else if (point2.some(el => answer.charAt(3).includes(el))){
        score += 2;
    } else if (point3.some(el => answer.charAt(3).includes(el))){
        score += 3;
    } else if (point4.some(el => answer.charAt(3).includes(el))){
        score += 4;
    } else if (point8.some(el => answer.charAt(3).includes(el))){
        score += 8;
    } else if (point10.some(el => answer.charAt(3).includes(el))){
        score += 10;
    } else if (point0.some(el => answer.charAt(3).includes(el))){
        score += 0;
    
    } else {
        score +=0

    }

    // lettre5
    if (point1.some(el => answer.charAt(4).includes(el))){
        score += 1;
    } else if (point2.some(el => answer.charAt(4).includes(el))){
        score += 2;
    } else if (point3.some(el => answer.charAt(4).includes(el))){
        score += 3;
    } else if (point4.some(el => answer.charAt(4).includes(el))){
        score += 4;
    } else if (point8.some(el => answer.charAt(4).includes(el))){
        score += 8;
    } else if (point10.some(el => answer.charAt(4).includes(el))){
        score += 10;
    } else if (point0.some(el => answer.charAt(4).includes(el))){
        score += 0;
    
    } else {
        score +=0

    }
    // lettre 6
    if (point1.some(el => answer.charAt(5).includes(el))){
        score += 1;
    } else if (point2.some(el => answer.charAt(5).includes(el))){
        score += 2;
    } else if (point3.some(el => answer.charAt(5).includes(el))){
        score += 3;
    } else if (point4.some(el => answer.charAt(5).includes(el))){
        score += 4;
    } else if (point8.some(el => answer.charAt(5).includes(el))){
        score += 8;
    } else if (point10.some(el => answer.charAt(5).includes(el))){
        score += 10;
    } else if (point0.some(el => answer.charAt(5).includes(el))){
        score += 0;
    
    } else {
        score +=0
    }
    
    // lettre 7
    if (point1.some(el => answer.charAt(6).includes(el))){
        score += 1;
    } else if (point2.some(el => answer.charAt(6).includes(el))){
        score += 2;
    } else if (point3.some(el => answer.charAt(6).includes(el))){
        score += 3;
    } else if (point4.some(el => answer.charAt(6).includes(el))){
        score += 4;
    } else if (point8.some(el => answer.charAt(6).includes(el))){
        score += 8;
    } else if (point10.some(el => answer.charAt(6).includes(el))){
        score += 10;
    } else if (point0.some(el => answer.charAt(6).includes(el))){
        score += 0;
    
    } else {
        score +=0
    }

    // resultat
    alert ("Bravooo ! tu as gagné " + score  + "points. Pour réésayer, réactualise ta page" );
}
else if (answer.length<2) {
    alert (`Es-tu sûr que c'est un mot ? Je ne pense pas ;-)`)

} else {
    alert("something went wrong")
}
// affichage page
console.log(answer);
console.log(answer2);
if (answer == "new") {
    document.write(`<h1>Bravo ! Tu as gagné ${score} points en écrivant le mot \"${answer2}\"</h1>`);
    } else if (answer.length>1) {
    document.write(`<h1> Bravo ! Tu as gagné ${score} points en écrivant le mot \"${answer}\"</h1>`);
    } else {
    document.write(`Essaie encore ! Actualise la page pour jouer`)
}


