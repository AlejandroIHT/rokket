//---- 5. Unique numbers ----//

function rokket(firstArray, secondArray) {
  let uniqueNumbers = firstArray.concat(secondArray).sort((x, y) => x - y);
  uniqueNumbers = uniqueNumbers.filter((number, index) => {
    return uniqueNumbers.indexOf(number) === index;
  });

  return uniqueNumbers;
}

console.log(rokket([1, 2, 5], [2, 1, 6])); // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])); // this outputs [1, 2, 3, 4, 5, 6]

//---- Finish Unique numbers ----//
