import test from "./test.mjs";
import { handleResponse, fetchData } from "../functions/apiFunc.mjs";
import { decipherText, decodeAlchemicalCode } from "../functions/taskFunctions.mjs";

const API_URL = 'https://alchemy-kd0l.onrender.com/start?player=aleksandnb@uia.no';
const testText = 'Peter Only Knew Elephants Make Odd Noises.'
const testText1 = ''

const tester = test("Function test");


//#region API error tests

tester.dosNotThrowError(
        async () => await fetchData(API_URL),
        'fetchData should not throw error when fetching data'
);

tester.dosNotThrowError(
        async () => await handleResponse(API_URL),
        'handleResponse should not throw and error when sending input'
)

//#endregion

//#region decipherText function
tester.isEqual(decipherText(testText).answer, 'POKEMON', 'Testing decipher function with normal input');
tester.isEqual(decipherText(testText).count, 7, 'Testing counting part of the function, it should count all capital letter (7)');
tester.isEqual(decipherText("").answer, "", 'Testing with empty string. Should return empty string.');
tester.isEqual(decipherText("").count, 0, 'Testing count with empty string, should return 0.');
tester.isEqual(decipherText('abc').answer, "", 'Testing with only lowercase letters, should return empty');
tester.isEqual(decipherText('abc').count, 0, 'Testing count with only lowercase letters, should return 0');
tester.isEqual(decipherText("ABC#@").answer, "ABC", 'Testing with special characters, should not interfere');
tester.isEqual(decipherText("ABC#@").count, 3, 'Testing count with special characters, should not interfere with count');
tester.isEqual(decipherText("ÄÖÜ").answer, "", 'Testing with non-ASCII uppercase letters, should return empty');
tester.isEqual(decipherText("ÄÖÜ").count, 0, 'Testing count with non-ASCII uppercase letters, should return 0');
//#endregion

//#region decodeAlchemicalCode function
tester.isEqual(decodeAlchemicalCode('♂☉'), 'Iron,Gold', 'Testing with regular input, should return as text');
tester.isEqual(decodeAlchemicalCode(""), "", 'Testing handling of empty input, should return empty');
tester.isEqual(decodeAlchemicalCode('XYZ'), "", 'Testing handling of normal letters, should return empty');
tester.isEqual(decodeAlchemicalCode('♂#☉'), 'Iron,Gold', 'Testing with other characters in string, should only return elements');
tester.isEqual(decodeAlchemicalCode('♂♂♂'), 'Iron,Iron,Iron', 'Testing with repeated inputs, should return all');
tester.isEqual(decodeAlchemicalCode('♂♔'), 'Iron', 'Testing with unicode, should only return element');
tester.isEqual(decodeAlchemicalCode('♂ ♂'), 'Iron,Iron', 'Testing with space inbetween, should still return connected with ","');
//#endregion

//#region 