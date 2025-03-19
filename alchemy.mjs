import fetch from 'node-fetch';

const API_URL = 'https://alchemy-kd0l.onrender.com';
const PLAYER_NAME = 'aleksandnd@uia.no';

async function fetchData(url, options) {

    const response = await fetch(url, options);
    return response.json();
}

async function handleResponse(data) {

    if (data.error) {
        return { error: data.error };
    }

    return { 
        message: data.message, 
        nextChallenge: data.next_challenge 
    };
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
                if (result.nextChallenge) {
                    console.log(`Next Challenge: ${result.nextChallenge}`);
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

    await submitAnswer(PLAYER_NAME, );
})();

