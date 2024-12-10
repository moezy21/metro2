function concat(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

const myArray = ["Johnny", "DeeDee", "Joey", "Marky"];
const concatenatedString = concat(myArray);
document.querySelector("#target").innerHTML= concatenatedString
