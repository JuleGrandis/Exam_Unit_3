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
    '🜂': 'Fire',
    '🜄': 'Water',
    '🜁': 'Air',
    '🜔': 'Salt'
}

const bookCipherIndex = {
    1: "E",
    2: "F",
    4: "I",
    5: "G",
    8: "S",
    9: "B",
    10: "H",
    12: "L",
    17: "T",
    20: "O",
    23: "R",
    24: "A",
    34: "N",
    38: "M",
    45: "U",
    46: "X",
    48: "V",
    66: "P",
    108: "Y",
    127: "C",
    131: "D",
    270: "W"
}

const cipher = `17 20 , 20 9 17 24 4 34 , 24 127 127 1 8 8 , 17 20 , 17 10 1 , 34 1 46 17 , 48 24 45 12 17 ,   
4 34 66 45 17 , 17 10 1 , 2 20 23 38 45 12 24 , 2 20 23 , 17 10 1 , 2 20 45 23 17 10 , 1 12 1 38 1 34 17 ,   
127 20 38 9 4 34 1 , 38 1 23 127 45 23 108 ,   
127 20 66 66 1 23 , 24 34 131 , 8 45 12 2 45 23 , 20 48 1 23 , 10 1 24 17 ,   
24 131 131 , 8 24 12 17 , 24 34 131 , 270 24 17 1 23 ,   
4 34 2 45 8 1 , 5 20 12 131 , 17 10 23 20 45 5 10 , 24 4 23`;

const encryptedCode = "☉☿☽♂☉";
const poem = "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.";

export { API_URL, PLAYER_NAME, alchemicalSymbols, bookCipherIndex, cipher, encryptedCode, poem };