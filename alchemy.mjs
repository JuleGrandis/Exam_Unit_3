import fetch from 'node-fetch';
import { API_URL, PLAYER_NAME, alchemicalSymbols, bookCipherIndex, cipher, encryptedCode, poem } from './consts.mjs';

export async function fetchData(url, options, isJson = true) {

    const response = await fetch(url, options);
    return isJson ? response.json() : response.text();
}

export async function handleResponse(data) {

    if (data.error) {
        return { error: data.error };
    }

    return { 
        message: data.message, 
        challenge: data.challenge 
    };
}

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
    console.log(decodedElements.join(","));
    return decodedElements.join(",");
}

function decodeNumberCipher (cipher) {
    const wordGroups = cipher.split(',');

    const decodedWords = wordGroups.map(group => {
        const numbers = group
            .trim()
            .split(/\s+/)
            .map(Number);

        const letters = numbers.map(num => bookCipherIndex[num]).join('');

        return letters;
    });

    return decodedWords.join(' ');
}

function createGameActions(action) {

    return async function (playerName, answer = null) {
        const url = action === 'start'
            ? `${API_URL}/start?player=${playerName}`
            : action === 'clue'
            ? `${API_URL}/clue?player=${playerName}`
            : `${API_URL}/answer`;

        const options = action === 'start' || action === 'clue'
            ? { method: 'GET' }
            : {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ player: playerName, answer: answer})
            };

        try {
            if (action === 'clue') {
                const data = await fetchData(url, options, false);
                console.log(`Clue: ${data}`);
            } else {
                const data = await fetchData(url, options);
                const result = await handleResponse(data);

                if(result.error) {
                    console.error(`Error: ${result.error}`);
                } else {
                    console.log(`Message: ${result.message}`);
                    if (result.challenge) {
                        console.log(`Next Challenge: ${result.challenge}`);
                    }
                }
            }
        } catch (error) {
            console.error(`Failed to ${action}`, error);
        }  
    };   
}

const startGame = createGameActions('start');
const submitAnswer = createGameActions('submit');
const getClue = createGameActions('clue');

(async () => {
    await startGame(PLAYER_NAME);

    const answerTask1 = decodeAlchemicalCode(encryptedCode);
    const answerTask2 = decipherPoem(poem);

    await submitAnswer(PLAYER_NAME, answerTask2);

    //await getClue(PLAYER_NAME);
})();

