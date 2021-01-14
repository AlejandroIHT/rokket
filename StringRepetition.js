//---- 3. String repetition ----//

function rokket(string, number) {
  let repitString = string;
  for (let i = 1; i < number; i++) {
    repitString = repitString.concat(string);
  }

  return repitString;
}

console.log(rokket("node", 5)); // this outputs 'nodenodenodenodenode'
console.log(rokket("abc", 2)); // this outputs 'abcabc'

//---- Finish String repetition ----//
