const handleSumOfTopTwoIntegers = (arrNumber) => {
  arrNumber.sort((a, b) => b - a);
  return arrNumber[0] + arrNumber[1];
};

console.log(handleSumOfTopTwoIntegers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
