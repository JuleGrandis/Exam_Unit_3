import { API_URL, PLAYER_NAME, cipher, encryptedCode, poem } from './consts.mjs';
import { fetchData, handleResponse } from './functions/apiFunc.mjs';
import { decipherText, decodeAlchemicalCode, decodeNumberCipher, decipherTask } from './functions/taskFunctions.mjs';


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
    const answerTask2 = decipherText(poem);
    const answerTask3 = decodeNumberCipher(cipher).res;
    console.log(answerTask3);

    await submitAnswer(PLAYER_NAME, answerTask3);

    //await getClue(PLAYER_NAME);
})();

