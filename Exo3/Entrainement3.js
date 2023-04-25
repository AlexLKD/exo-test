// -----------------------------------
console.log(
    "1/ Implémentez une fonction qui transforme un texte en camelCase."
);
// function toCamelCase(text) {
//     return text
//         .replace(/[-_\s]+(.)?/g, (a, b) => (b ? b.toUpperCase() : ""))
//         .replace(/^([A-Z])/, (a, b) => b.toLowerCase());
// }
// function toCamelCase(text) {
//     return text
//         .replace(/[-_\s]+(.)?/g, function (match, group) {
//             if (group) {
//                 return group.toUpperCase();
//             } else {
//                 return "";
//             }
//         })
//         .replace(/^([A-Z])/, function (match, group) {
//             return group.toLowerCase();
//         });
// }
function toCamelCase(text) {
    let words = text.split(/[-_\s]+/); // transform text into words + regex
    let camelCase = words[0].toLowerCase(); // first word in lowercase

    for (let i = 1; i < words.length; i++) {
        camelCase +=
            words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        // transform every word except the first one in camelCase
    }

    return camelCase;
}
// function toCamelCase(text) {
//     let words = text.split(' ')
//     words = words.map(function (word, index) {
//         if (index === 0) {
//            return word.toLowerCase();
//         }
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     return words.join('');
// }
console.log(toCamelCase("Bien-le bonjour_guillaume"));

// -----------------------------------
console.log(
    "2/ Implémentez une fonction qui retourne le plus grand mot d'un texte."
);

// function findLongestWord(text) {
//     let textSplit = text.split(" "),
//         longestWord = 0,
//         word;
//     for (let i = 0; i < textSplit.length; i++) {
//         if (textSplit[i].length > longestWord) {
//             longestWord = textSplit[i].length;
//             word = textSplit[i];
//         }
//     }
//     return word;
// }

function findLongestWord(text) {
    let longestWord = text.split(" ").reduce(function (a, b) {
        return b.length > a.length ? b : a;
    }, "");
    return longestWord;
}

console.log(findLongestWord("bien le bonjour Guillaume"));

// -----------------------------------
console.log(
    "3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années."
);

console.log();

// -----------------------------------
console.log(
    "4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante."
);

console.log();

// -----------------------------------
console.log(
    "5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre."
);

console.log();

// -----------------------------------
console.log(
    "6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau."
);

console.log();

// -----------------------------------
console.log(
    "7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant."
);

const players = {
    Camille: 88,
    Lola: 125,
    Isaac: 174,
    Aldrick: 426,
    Ismaël: 248,
    Lilian: 478,
    Charley: 225,
    Thierry: 255,
    Cameron: 205,
    Tanguy: 155,
    Jenny: 125,
};

function getPlayers(players) {
    const playersArray = Object.entries(players);
    playersArray.sort(function (a, b) {
        if (a[1] > b[1]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        }
        // return b[1] - a[1];
    });
    const playerNames = playersArray.map(function (player) {
        return player[0];
    });
    return playerNames;
}
const sortedPlayers = getPlayers(players);
console.log(sortedPlayers);

// -----------------------------------
console.log(
    "8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000."
);

console.log();
