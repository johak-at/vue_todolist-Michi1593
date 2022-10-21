const arr = [1, 2, 3, 4];

const simpleMap = arr.map(el => Math.pow(el * 2));

console.log(simpleMap);

const complexMap = arr.map(el => {return Math.pow(el,2)});

console.log(complexMap);

//
const animals = [
    { name: "Elefant", count: 3 },
    { name: "Tiger", count: 1 },
    { name: "Schlange", count: 3 },
    { name: "Elefant", count: 1 },
    { name: "Elefant", count: 4 },
    { name: "Papagei", count: 1 },
]

const filteredAnimals = animals.filter(el => el.name === "Elefant");

const reducedAnimals = animals.reduce (el => {return Math.pow(el,2)});

const 

