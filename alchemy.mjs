import fetch from 'node-fetch';

const API_URL = 'https://alchemy-kd0l.onrender.com';
const PLAYER_NAME = 'aleksandnb@uia.no';

const alchemicalSymbols = {
    '☽': 'Silver',
    '☉': 'Gold',
    '☿': 'Quicksilver',
    '♀': 'Copper',
    '♂': 'Iron',
    '♃': 'Tin',
    '♄': 'Lead',
    '🜍': 'Sulfur',
    '🜂': 'Salt'
}

const encryptedCode = "☉☿☽♂☉";
const poem = "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.";

export async function fetchData(url, options) {

    const response = await fetch(url, options);
    return response.json();
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

function createGameActions(action) {

    return async function (playerName, answer = null) {
        const url = action === 'start'
            ? `${API_URL}/start?player=${playerName}`
            : `${API_URL}/answer`;

        const options = action === 'start'
            ? { method: 'GET' }
            : {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ player: playerName, answer: answer})
            };

        try {
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
        } catch (error) {
            console.error(`Failed to ${action}`, error);
        }  
    };   
}

const startGame = createGameActions('start');
const submitAnswer = createGameActions('submit');

(async () => {
    await startGame(PLAYER_NAME);

    const answerTask1 = decodeAlchemicalCode(encryptedCode);
    const answerTask2 = decipherPoem(poem);

    await submitAnswer(PLAYER_NAME, answerTask2);
})();

