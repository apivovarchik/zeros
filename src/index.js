module.exports = function getZerosCount(number) {
  let i = 1;
  let res = 0;
  let j = 1;
  while (j >= 1) {
    j = number / Math.pow(5, i);
    res += Math.floor(j);
    i++;
  }
  return res;
}