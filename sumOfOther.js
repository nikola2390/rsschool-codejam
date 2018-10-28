module.exports = function sumOfOther(arr = []) {
  const sumOfArray = arr.reduce((sum, current) => sum + current, 0);
  return arr.map(element => sumOfArray - element);
};
