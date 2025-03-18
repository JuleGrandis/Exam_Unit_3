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