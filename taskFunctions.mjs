import { alchemicalSymbols, bookCipherIndex,  } from "./consts.mjs";

function decipherPoem(text) {
    let answer = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            answer += text[i];
        }
    }
    return answer;
}

function decodeAlchemicalCode(symbolsString) {
    let decodedElements = [];

    for (let i = 0; i < symbolsString.length; i++) {
        const symbol = symbolsString[i];
        if (alchemicalSymbols[symbol]) {
            decodedElements.push(alchemicalSymbols[symbol]);
        }
    }
    //console.log(decodedElements.join(","));
    return decodedElements.join(",");
}

function decodeNumberCipher (cipher) {
    const wordGroups = cipher.split(',');

    let decodedWords = wordGroups.map(group => {
        const numbers = group
            .trim()
            .split(/\s+/)
            .map(Number);

        return numbers.map(num => bookCipherIndex[num]).join('');
    });

    const targetWords = [ "mercury", "copper", "sulfur", "heat", "salt", "water", "gold", "air"];
    let res = "";

    for(let i=0;i<decodedWords.length;i++) { 
        const word = decodedWords[i].toLowerCase();
        if (targetWords.includes(word)) {  
            
            if (word === "mercury") {
                res += alchemicalSymbols.Quicksilver;
                continue;
            }

            if (word === "heat") {
                res += alchemicalSymbols.Fire;
                continue;
            }

            for (const [name, symbol] of Object.entries(alchemicalSymbols)) {
                if (name.toLowerCase() === word) {
                    res += symbol;
                }
            }
        }
    }

    decodedWords = decodedWords.join(" ");
    return { decodedWords, res, targetWords };
}
