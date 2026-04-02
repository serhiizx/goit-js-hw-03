function makeArray(firstArray, secondArray, maxLength) {
  const result = [];

  if (maxLength === 0) {
    return result;
  }

  for (let i = 0; i < firstArray.length; i++) {
    result.push(firstArray[i]);

    if (result.length >= maxLength) {
      return result;
    }
  }

  for (let i = 0; i < secondArray.length; i++) {
    result.push(secondArray[i]);

    if (result.length >= maxLength) {
      return result;
    }
  }
  
  return result;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
