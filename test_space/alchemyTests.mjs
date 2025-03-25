import test from "./test.mjs";
import { handleResponse, fetchData } from "../functions/apiFunc.mjs";
import { decipherText, decodeAlchemicalCode, decodeNumberCipher, decipherTask } from "../functions/taskFunctions.mjs";

const API_URL = 'https://alchemy-kd0l.onrender.com/start?player=aleksandnb@uia.no';

//#region Testing inputs
const emptyString = "";
const testText = 'Peter Only Knew Elephants Make Odd Noises.';
const testText1 = 'abc';
const testText2 = "ABC#@";
const testText3 = "ÄÖÜ";
const testText4 = '♂☉';
const testText5 = 'XYZ';
const testText6 = '♂#☉';
const testText7 = '♂♂♂';
const testText8 = '♂♔';
const testText9 = '♂ ♂';
const testText10 = "270 24 17 1 23";
const testText11 = "   270     24 17 1   23";
const testText12 = "1 1 1 1";
const testText13 = "DNIS";
const testText14 = "WASTA";
//#endregion

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
tester.isEqual(decipherText(emptyString).answer, "", 'Testing with empty string. Should return empty string.');
tester.isEqual(decipherText(emptyString).count, 0, 'Testing count with empty string, should return 0.');
tester.isEqual(decipherText(testText1).answer, "", 'Testing with only lowercase letters, should return empty');
tester.isEqual(decipherText(testText1).count, 0, 'Testing count with only lowercase letters, should return 0');
tester.isEqual(decipherText(testText2).answer, "ABC", 'Testing with special characters, should not interfere');
tester.isEqual(decipherText(testText2).count, 3, 'Testing count with special characters, should not interfere with count');
tester.isEqual(decipherText(testText3).answer, "", 'Testing with non-ASCII uppercase letters, should return empty');
tester.isEqual(decipherText(testText3).count, 0, 'Testing count with non-ASCII uppercase letters, should return 0');
//#endregion

//#region decodeAlchemicalCode function
tester.isEqual(decodeAlchemicalCode(testText4), 'Iron,Gold', 'Testing with regular input, should return as text');
tester.isEqual(decodeAlchemicalCode(emptyString), "", 'Testing handling of empty input, should return empty');
tester.isEqual(decodeAlchemicalCode(testText5), "", 'Testing handling of normal letters, should return empty');
tester.isEqual(decodeAlchemicalCode(testText6), 'Iron,Gold', 'Testing with other characters in string, should only return elements');
tester.isEqual(decodeAlchemicalCode(testText7), 'Iron,Iron,Iron', 'Testing with repeated inputs, should return all');
tester.isEqual(decodeAlchemicalCode(testText8), 'Iron', 'Testing with unicode, should only return element');
tester.isEqual(decodeAlchemicalCode(testText9), 'Iron,Iron', 'Testing with space inbetween, should still return connected with ","');
//#endregion

//#region decodeNumberCipher function
tester.isEqual(decodeNumberCipher(emptyString).res, "", 'Testing empty string, should return empty');
tester.isEqual(decodeNumberCipher(emptyString).decodedWords, "", 'Testing empty string, should return empty');
tester.isEqual(decodeNumberCipher(testText10).res, "🜄", 'Testing with normal input, should return alchemical symbol.');
tester.isEqual(decodeNumberCipher(testText10).decodedWords, "WATER", 'Testing with normal input , should return the decoded word.');
tester.isEqual(decodeNumberCipher(testText11).decodedWords, "WATER", 'Testing with normal input but uneven spacing , should return the decoded word.');
tester.isEqual(decodeNumberCipher(testText11).res, "🜄", 'Testing with normal input with uneven spacing , should return the alchemical symbol.');
tester.isEqual(decodeNumberCipher(testText12).res, "", 'Testing with cipher that dont correspond to anything, should return empty');
tester.isEqual(decodeNumberCipher(testText12).decodedWords, "EEEE", 'Testing with cipher that just correspond with a letter not a word or symbol, should return the letters');
//#endregion

//#region decipherTask function
tester.isEqual(decipherTask(emptyString), "", 'Testing with empty string, should return empty');
tester.isEqual(decipherTask(testText13), "☉", "Testing with normal input should return decoded text into symbol");
tester.isEqual(decipherTask(testText14), "WASTA", "Invalid input should return the same text");
//#endregion