const API_URL = 'https://alchemy-kd0l.onrender.com';
const PLAYER_NAME = 'aleksandnb@uia.no';

const alchemicalSymbols = {
    'Silver': '☽',
    'Gold': '☉',
    'Quicksilver': '☿',
    'Mercury': '☿',
    'Copper': '♀',
    'Iron': '♂',
    'Tin': '♃',
    'Lead': '♄',
    'Sulfur': '🜍',
    'Fire': '🜂',
    'Water': '🜄',
    'Air': '🜁',
    'Salt': '🜔',
    'Earth': '♁'
};

export const elements = [
    { name: "Hydrogen", atomicNumber: 1 },
    { name: "Helium", atomicNumber: 2 },
    { name: "Lithium", atomicNumber: 3 },
    { name: "Beryllium", atomicNumber: 4 },
    { name: "Boron", atomicNumber: 5 },
    { name: "Carbon", atomicNumber: 6 },
    { name: "Nitrogen", atomicNumber: 7 },
    { name: "Oxygen", atomicNumber: 8 },
    { name: "Fluorine", atomicNumber: 9 },
    { name: "Neon", atomicNumber: 10 },
    { name: "Sodium", atomicNumber: 11 },
    { name: "Magnesium", atomicNumber: 12 },
    { name: "Aluminum", atomicNumber: 13 },
    { name: "Silicon", atomicNumber: 14 },
    { name: "Phosphorus", atomicNumber: 15 },
    { name: "Sulfur", atomicNumber: 16 },
    { name: "Chlorine", atomicNumber: 17 },
    { name: "Argon", atomicNumber: 18 },
    { name: "Potassium", atomicNumber: 19 },
    { name: "Calcium", atomicNumber: 20 },
    { name: "Scandium", atomicNumber: 21 },
    { name: "Titanium", atomicNumber: 22 },
    { name: "Vanadium", atomicNumber: 23 },
    { name: "Chromium", atomicNumber: 24 },
    { name: "Manganese", atomicNumber: 25 },
    { name: "Iron", atomicNumber: 26 },
    { name: "Cobalt", atomicNumber: 27 },
    { name: "Nickel", atomicNumber: 28 },
    { name: "Copper", atomicNumber: 29 },
    { name: "Zinc", atomicNumber: 30 },
    { name: "Gallium", atomicNumber: 31 },
    { name: "Germanium", atomicNumber: 32 },
    { name: "Arsenic", atomicNumber: 33 },
    { name: "Selenium", atomicNumber: 34 },
    { name: "Bromine", atomicNumber: 35 },
    { name: "Krypton", atomicNumber: 36 },
    { name: "Rubidium", atomicNumber: 37 },
    { name: "Strontium", atomicNumber: 38 },
    { name: "Yttrium", atomicNumber: 39 },
    { name: "Zirconium", atomicNumber: 40 },
    { name: "Niobium", atomicNumber: 41 },
    { name: "Molybdenum", atomicNumber: 42 },
    { name: "Technetium", atomicNumber: 43 },
    { name: "Ruthenium", atomicNumber: 44 },
    { name: "Rhodium", atomicNumber: 45 },
    { name: "Palladium", atomicNumber: 46 },
    { name: "Silver", atomicNumber: 47 },
    { name: "Cadmium", atomicNumber: 48 },
    { name: "Indium", atomicNumber: 49 },
    { name: "Tin", atomicNumber: 50 },
    { name: "Antimony", atomicNumber: 51 },
    { name: "Tellurium", atomicNumber: 52 },
    { name: "Iodine", atomicNumber: 53 },
    { name: "Xenon", atomicNumber: 54 },
    { name: "Cesium", atomicNumber: 55 },
    { name: "Barium", atomicNumber: 56 },
    { name: "Lanthanum", atomicNumber: 57 },
    { name: "Cerium", atomicNumber: 58 },
    { name: "Praseodymium", atomicNumber: 59 },
    { name: "Neodymium", atomicNumber: 60 }
  ];
//#region Task 1-2
const encryptedCode = "☉☿☽♂☉";
const poem = "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.";
//#endregion

//#region Task 3
const bookCipherIndex = {
    1: "E", 2: "F", 4: "I", 5: "G", 8: "S",
    9: "B", 10: "H", 12: "L", 17: "T", 20: "O",
    23: "R", 24: "A", 34: "N", 38: "M", 45: "U",
    46: "X", 48: "V", 66: "P", 108: "Y", 127: "C",
    131: "D", 270: "W"
}

const cipher = `17 20 , 20 9 17 24 4 34 , 24 127 127 1 8 8 , 17 20 , 17 10 1 , 34 1 46 17 , 48 24 45 12 17 ,   
4 34 66 45 17 , 17 10 1 , 2 20 23 38 45 12 24 , 2 20 23 , 17 10 1 , 2 20 45 23 17 10 , 1 12 1 38 1 34 17 ,   
127 20 38 9 4 34 1 , 38 1 23 127 45 23 108 ,   
127 20 66 66 1 23 , 24 34 131 , 8 45 12 2 45 23 , 20 48 1 23 , 10 1 24 17 ,   
24 131 131 , 8 24 12 17 , 24 34 131 , 270 24 17 1 23 ,   
4 34 2 45 8 1 , 5 20 12 131 , 17 10 23 20 45 5 10 , 24 4 23`;
//#endregion

//#region Task 4
const taskText = `
through Hidden experiments, the Observing Philosophers 
carefully recorded their findings in secret tomes.
rarely did alchemists Seek answers in mundane texts,
for the Universal substance eluded ordinary understanding.

beyond the limits of ordinary Methods, the most Dedicated scholars
turned to alchemical science, where hidden truths awaited discovery.
Truly, the masters of old knew that one must strive tirelessly,
purifying Lead into something greater, refining both mind and matter.
until mastery was achieved, Knowledge alone was insufficient,
and only those who understood the deeper mysteries Would glimpse Immortality.

secrets, carefully veiled Behind Cryptic inscriptions,
teach those with patience to decode their deeper meaning.
hermetic ideals demand perseverance, a willingness to question,
and an acceptance that the path to wisdom is rarely direct.
long nights spent in study and contemplation lead to illumination,
and oaths taken by true seekers bind them to their Noble quest.
Yet the philosopher’s stone remains Elusive,
and only through great sacrifice is the truth Revealed.

elixirs, said to restore itality and even grant eternal youth,
were concocted by those who dared to challenge nature’s limits.
distillations, performed under the guidance of celestial alignments,
promised insight beyond mortal comprehension.
Gold, though treasured by the common man, held greater meaning
to those who understood the principle of transmutation.
Joining knowledge of the material and the divine,
true alchemists saw wealth not in metal, but in enlightenment.

notable are those who pursued the Quintessence,
a substance believed to bind together the four classical elements.
wielders of this hidden force were said to shape reality itself,
while Xenon and other elusive Vapors symbolized the mysteries of the aether.
yields of failed experiments were many,
but each failure brought the dedicated scholar closer to true wisdom.
Zeal alone was not enough—patience, discipline, and intellect
were the true keys to unlocking the universe’s greatest secret.

through the Forgotten knowledge of Ancient scholars,
keepers of wisdom have safeguarded the elusive
keys to transformation. only those who
fully commit to the pursuit of enlightenment
can grasp the final mysteries.`

const cipherCode = `
DNIS PNYYUR DNIS DNIS GLIXUR
UHRJT BURPQRF PNYYUR MLRU HLR
MLRU UHRJT IUHS UHRJT GLIXUR
LRNC DNIS GLIXUR VHJUR DNIS
PNYYUR MLRU DNIS LRNC IUHS
UHRJT PNYYUR PNYYUR JLC BURPQRF`.trim();

const alchemicalSymbolList = `
☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿
🜄 🜂 ♄ 🜂 🜁 🜂 🜄 ☿ 🜁 ☽ ♂ ☽ ♄ ♃ 🜄 ♄ ♀ ♂ ☉ 🜄 ♂ ☽ ♀ ♂ ♀ ♃ ♄ 🜄 ♃
🜂 ☿ 🜄 ♂ ♀ ♃ ♃ 🜄 ☉ ♂ ♃ 🜂 ♀ 🜂 🜃 🜁 ☉ 🜂 ♀ ♃ ♄ ☽ 🜂 ♂ ♄ ♂ ☉ 🜄 ☉
🜁 🜄 🜂 ☉ ♃ 🜂 🜂 ☿ 🜁 ☿ ♂ ♀ ♂ ♂ ♃ ☽ ☉ 🜂 ☉ ☽ ☿ ♀ 🜂 🜁 ♄ ♂ 🜃 ☉ ♂
☉ 🜂 🜁 ♃ 🜂 ☽ 🜄 ♀ 🜄 🜁 ♃ 🜂 🜂 ♂ 🜂 ♃ ☽ ☽ 🜂 ☉ 🜄 ☉ 🜁 ♀ 🜄 ♃ 🜄 ♂ ☉
☽ ♄ 🜃 ♀ 🜄 ♃ 🜁 ♃ 🜃 🜂 🜂 🜂 🜂 ♄ 🜂 🜄 🜃 ♀ 🜁 🜁 🜂 🜃 ☽ 🜁 ☿ 🜂 🜂 ♂ ☽
☉ ♄ 🜁 ♄ ☿ ♄ ☉ ☉ ☽ ♄ ♀ ☉ 🜄 ♄ 🜁 ♂ ☿ ☿ 🜄 ♃ ♀ ☿ 🜃 ♂ ☿ ♀ ☽ ♀ 🜃
☉ ☿ 🜁 🜂 ♂ ♀ 🜁 🜂 🜁 ☽ 🜂 ♀ ☉ 🜃 ♄ ♃ ♀ ☽ ☽ 🜄 ☉ ♃ 🜂 🜂 🜃 🜄 ♀ ☽ 🜄
🜃 🜂 ♀ ♀ ☽ 🜃 ☿ ♃ 🜄 🜃 🜃 ☉ ♃ 🜁 ♄ 🜁 🜂 🜁 🜄 🜁 ☽ ♃ 🜂 ♀ 🜃 ☿ ☿ 🜁 🜃
☿ ♀ ♀ ☉ ♄ 🜄 ♂ ☽ ☉ ♀ ☿ 🜃 ☿ ♄ ♄ 🜂 🜁 🜃 ☽ ♃ ☿ ♃ ♃ ♂ ♄ ☉ 🜂 ☉ 🜁
🜄 🜃 ☽ 🜄 ☿ ♀ ☿ 🜃 ☿ ☿ ♀ ☿ 🜁 ♀ ♄ ♄ 🜂 ♄ 🜃 ☽ ♂ ♀ ☿ ☽ ♃ ♂ ♄ ♄ 🜄
🜃 🜂 🜁 ♄ ♂ ☽ ♀ 🜃 🜁 🜂 ♄ ☿ ☽ ☽ 🜄 🜁 🜃 ☉ ☉ ♄ ♂ ☽ ♃ 🜄 ♃ 🜃 ☿ ♃ ☿
🜄 ♂ ♀ ♂ ♀ ♂ 🜄 ♀ ♂ 🜂 🜁 🜂 ♄ ☿ ☿ ☽ ♄ ♀ 🜄 ☽ ♂ 🜁 ♃ ☉ 🜄 🜁 🜂 ☉ ♃
♄ ♀ ♄ ♀ 🜃 ♂ ♄ 🜂 ♃ 🜄 ♄ ♀ ☽ ♀ ☽ 🜂 🜃 ♂ ♃ 🜂 ♄ 🜂 ♂ ♃ 🜃 ♂ ♄ ☽ ♀
🜄 ♄ ☽ ☉ 🜃 ☽ ☽ 🜂 ☽ ♀ 🜄 ☉ ♃ ♂ ♄ ♄ ☽ ♄ ☽ ♀ ♀ ♀ 🜄 ♃ 🜃 ♃ ♀ ♀ ♃
♂ ☽ 🜃 🜄 ☉ ♀ 🜄 🜄 🜄 ☽ ♂ 🜂 ♃ ☽ 🜃 ♂ ♂ ♀ ☉ ☿ ♂ ♂ ☉ ☽ ☿ ☉ 🜃 🜁 ♀
🜃 ♄ ♂ 🜂 ☽ ☿ 🜂 🜃 ☉ 🜂 ♄ 🜂 ☿ ♄ 🜃 🜃 ☉ 🜂 ♃ ☽ ☽ ♄ 🜂 ♄ 🜄 ☽ 🜂 ♂ ☿
♃ 🜃 ♀ 🜃 🜁 ☽ ☉ ♃ 🜁 ☽ ♄ 🜄 🜄 ☽ 🜃 ♃ ☽ ☉ 🜂 ♃ ☉ 🜁 ☿ 🜃 ☉ 🜃 ☉ 🜄 ☉
🜁 ♃ 🜁 ☉ ☽ ♄ 🜂 ♀ 🜂 ♃ ☽ ☽ ♃ ☽ ☽ 🜄 🜄 ♀ ☉ ♂ 🜃 ♂ ☉ 🜁 ☿ 🜂 🜃 ♀ ☉
♂ 🜁 ☽ 🜄 ☿ ♃ 🜁 ☉ 🜂 ☽ ♂ 🜄 ♂ ♃ ♄ ♄ ☉ ♀ 🜂 ♄ ☿ ♄ ♀ 🜄 ☿ ♄ ☉ 🜄 🜄
🜂 🜃 ☽ ☉ ☿ 🜂 ♂ ♃ ☿ ☉ ☿ ♄ ☉ ☿ 🜂 🜃 ♀ ☿ ♂ ♃ ♃ ♂ ☉ ♂ ☽ 🜃 🜃 ♂ ♄
☽ 🜁 ☽ 🜁 ☉ ☿ ♄ ♂ ☉ ♂ ☉ ♂ 🜄 ♂ 🜄 ☽ 🜂 ♀ ♂ ☉ ♂ 🜃 ♀ ♃ ☉ ♀ ♃ 🜁 ☿
🜄 ☉ 🜁 ♃ 🜁 ☽ ☿ ☉ ♂ 🜃 🜁 ☽ ☉ 🜃 ♀ ♃ ☉ ♄ ♀ ☿ ♀ 🜁 ♂ ♀ ♄ 🜁 ☽ ☉ ♃
♄ ☿ ☽ 🜄 ☿ ☿ ♄ ♃ ♀ ☿ ♄ 🜂 🜄 ☿ ☿ ♃ ♂ 🜁 ♀ ☽ ☉ ☽ 🜁 🜄 🜃 🜄 ☿ ♀ ☿
☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉
🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉
🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂
🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉
☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀
☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂
`.split(/\s+/).filter(symbol => symbol.trim() !== '');
//#endregion

export { API_URL, PLAYER_NAME, alchemicalSymbols, bookCipherIndex, cipher, encryptedCode, poem, taskText, cipherCode, alchemicalSymbolList };