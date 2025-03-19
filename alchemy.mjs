import fetch from 'node-fetch';

const API_URL = 'https://alchemy-kd0l.onrender.com';
const PLAYER_NAME = 'aleksandnd@uia.no';

async function startGame(playerName) {

    try {
        const response = await fetch(`${API_URL}/start?player=${playerName}`);
        const data = await response.json();

        if(data.error) {
            console.error(`Error: ${data.error}`);
        } else {
            console.log(`Challenge: ${data.challenge}`);
        }

    } catch (error) {
        console.error('Failed to start the game.', error);
    }
}

async function submitAnswer (playerName, answer) {

    try {
        const response = await fetch(`${API_URL}/answer`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ player: playerName, answer: answer}),
        });

        const data = await response.json();

        if(data.error) {
            console.error(`Error: ${data.error}`);
        } else {
            console.log(`Message: ${data.message}`);
            if (data.next_challenge) {
                console.log(`Next Challenge: ${data.next_challenge}`);
            }
        }
        
    } catch (error) {
        console.error('Failed to submit answer:', error);
    }
}

startGame(PLAYER_NAME);