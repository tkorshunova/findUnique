import findUnique from "./findUnique.js";

const button = document.getElementById('btn');
button.addEventListener('click', () => start());

function start () {
    const text = document.getElementById('text').value;
    console.log(findUnique(text));
}
