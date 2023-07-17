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

function createArrayFromString (str) {
  const stringWithoutLineBreacks = str.replace(/[\r\n]+/gm, ' ');
  const string = stringWithoutLineBreacks.replace(/[^a-zA-Z0-9 ]/g, '')
  const arr = string.split(' ').filter(i => i !== '');
  return arr;
}

function findFirstUniqueLetterInArray (arr) {
  const iterant = new Set();
  const unique = [];
  
  unique.push(arr[0]);
  
  for(let i = 1; i < arr.length; i++) {
    if(!iterant.has(arr[i])) {
      const idx = unique.findIndex(k => k === arr[i]);
      if(idx >= 0) {
        const val = unique.splice(idx, 1);
        iterant.add(val[0]);
      } else {
        unique.push(arr[i])
      }
    }  
  }
  return unique[0]; 
}

function findUniqueLetterInString (array) {
    const letters = array.map(i => {
        return findFirstUniqueLetterInArray(i.split(''));
    })
    
    return findFirstUniqueLetterInArray(letters);
}