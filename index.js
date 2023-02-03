// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appendedCats = [...cats, name];
    return appendedCats;
}

function prependCat(name) {
    const prependCats = [name, ...cats];
    return prependCats;
}

function removeLastCat() {
    const catsLastRemoved = cats.slice(0, -1);
    return catsLastRemoved;
}

function removeFirstCat() {
    const catsFirstRemoved = cats.slice(1);
    return catsFirstRemoved;
}