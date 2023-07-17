//lets use memoization
const cachedResults = new Map();

export default function findUnique (text) {
    if (cachedResults.has(text)) {
      return cachedResults.get(text);
    } else {
      const array = createArrayFromString(text);
      const result =  findUniqueLetterInString(array);
      cachedResults.set(text, result);
      return result;
    }
}

//convert string to array of words
function createArrayFromString (str) {
  const stringWithoutLineBreacks = str.replace(/[\r\n]+/gm, ' ');
  const string = stringWithoutLineBreacks.replace(/[^a-zA-Z0-9 ]/g, '')
  const arr = string.split(' ').filter(i => i !== '');
  return arr;
}

function findUniqueLetterInString (array) {
  const letters = array.map(i => {
      return findFirstUniqueLetterInArray(i.split('')); //first find unique character in every word in the string
  })
  
  return findFirstUniqueLetterInArray(letters); //then find first unique character in the collection from previous step
}

function findFirstUniqueLetterInArray (arr) {
  const iterant = new Set(); //collection of repeated values
  const unique = []; //collection of unique values
  
  unique.push(arr[0]);
  
  for(let i = 1; i < arr.length; i++) {
    if(!iterant.has(arr[i])) { //skip if such item is already in the collection of repeated elements
      const idx = unique.findIndex(k => k === arr[i]); //check if an item is unique
      if(idx >= 0) { 
        const val = unique.splice(idx, 1);  // if item is not unique, remove it from "unique" collection...
        iterant.add(val[0]); //...and add to collection of repeated elements
      } else {
        unique.push(arr[i]) //if item is unique add it to "unique" collection
      }
    }  
  }
  return unique[0];
}