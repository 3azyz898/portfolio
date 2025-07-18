//Find the Smallest and Biggest Numbers

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
//Sum of Cubes
function sumOfCubes(num) {
  return num.reduce((sum, n) => sum + Math.pow(n, 3), 0);
}
//Filter out Strings from an Array
function filterArray(arr) {
  return arr.filter(item => typeof item === "number");
}
//Return the First Element in an Array
function getFirstValue(arr) {
  return arr[0];
}
//Is the Number Symmetrical?
function isSymmetrical(num) {
  let str = num.toString();
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}
//Special Arrays
function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 !== 0) return false; // Even index, not even number
    if (i % 2 !== 0 && arr[i] % 2 !== 1) return false; // Odd index, not odd number
  }
  return true;
}
  //How Much is True?
  function countTrue(arr) {
  return arr.filter(item => item === true).length;
}
  //Convert Key, Values in an Object to Array
  function objectToArray(obj) {
  return Object.entries(obj);
}
//Array of Multiples
function arrayOfMultiples(num, length) {
  let result = [];
  for (let i = 1; i <= length; i++) {
    result.push(num * i);
  }
  return result;
}
//25-Mile Marathon
function marathonDistance(d) {
  if (!Array.isArray(d) || d.length === 0) {
    return false;
  }
  const totalDistance = d.reduce((sum, val) => sum + Math.abs(val), 0);
  return totalDistance === 25;
}
//Square Every Digit
function squareDigits(n) {
  return Number(n.toString().split('').map(digit => digit ** 2).join(''));
}
