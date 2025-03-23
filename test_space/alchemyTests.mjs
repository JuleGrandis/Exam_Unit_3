import test from "./test.mjs";
import { handleResponse, fetchData } from "../alchemy.mjs";

const API_URL = 'https://alchemy-kd0l.onrender.com/start?player=aleksandnb@uia.no';
const PLAYER_NAME = 'aleksandnb@uia.no';

const tester = test("Function test");

tester.dosNotThrowError(
        async () => await fetchData(API_URL),
        'fetchData should not throw error when fetching data'
);
