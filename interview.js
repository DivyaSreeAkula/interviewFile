//DnIsmVkYrsA
//nIsmVkYrsAD

console.log("for input: 'DnIsmVkYrsA' output:" + orderOfName("DnIsmVkYrsA"));
console.log("for input: 'nIsmVkYrsAD' output: " + orderOfName("nIsmVkYrsAD"));

function orderOfName(input) {
  let lowerCaseInput = input.toLowerCase();
  let myName = "divya";
  prevPos = lowerCaseInput.indexOf(myName[0]);
  nextPos = 0;
  for (let i = 1; i < myName.length; i++) {
    nextPos = lowerCaseInput.indexOf(myName[i]);
    if (prevPos > nextPos) {
      return false;
    }
  }
  return true;
}

//1234567->2143657
console.log(swap("1234567"));
function swap(inputVal) {
  let temp = 0;
  for (i = 0; i < inputVal.length; ++i) {
    if (i % 2 != 0) {
      temp = inputVal[i];
      inputVal = inputVal.replace(inputVal[i], inputVal[i - 1]);
      inputVal = inputVal.replace(inputVal[i - 1], temp);
    }
  }

  return inputVal;
}
