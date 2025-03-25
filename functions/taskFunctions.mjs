import { alchemicalSymbols, bookCipherIndex } from "../consts.mjs";

function decipherText(text) {
    let answer = "";
    let count = 0;
    //console.log(text);
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            answer += text[i];
            count ++;
        }
    }
    return { answer, count };
}

function decodeAlchemicalCode(symbolsString) {
    let decodedElements = [];

    const symbolToElement = {};
    for (const [element, symbol] of Object.entries(alchemicalSymbols)) {
        symbolToElement[symbol] = element;
    }

    for (let i = 0; i < symbolsString.length; i++) {
        const symbol = symbolsString[i];
        if (symbolToElement[symbol]) {
            decodedElements.push(symbolToElement[symbol]);
        }
    }
   // console.log(decodedElements.join(","));
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

function decipherTask (task) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const newAlphabet = 'HOPSUMDTLKWIBCNYERGJQXVZFA';

    function decipher(text) {
        return text.split('').map(char => {
            const index = newAlphabet.indexOf(char);
            return index >= 0 ? alphabet[index] : char;
        }).join('');
    }

    return task.split('\n').map(line => {
        return line.split(' ').map(word => {
            const decipheredWord = decipher(word);

            const symbolKey = Object.keys(alchemicalSymbols).find(
                key => key.toUpperCase() === decipheredWord.toUpperCase()
            );

            return symbolKey ? alchemicalSymbols[symbolKey] : word;
        }).join(' ');
    }).join('\n');
}

export { decipherText, decodeAlchemicalCode, decodeNumberCipher, decipherTask};