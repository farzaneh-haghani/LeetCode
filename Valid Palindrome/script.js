const isPalindrome = function (s) {
  const regex = /[^A-Za-z0-9]/g;
  const test = s.replace(regex, "").toLowerCase();
  const result = test.split("").reverse().join("");
  return result === test;
};