//---- 2. Longest string ----//

const list = ["best", "company", "ever"];

function rokket(list) {
  const lengthList = [];

  list.forEach((element) => {
    lengthList.push(element.length);
  });
  const maxNumber = Math.max.apply(null, lengthList);
  const stringLongest = list.filter((element) => element.length === maxNumber);

  return stringLongest;
}

console.log(rokket(list)); // this outputs 'company'

//---- Finish Longest string ----//
// If list array have a two or more word equal length so print all word more long
