const mergeAlternately = function (word1, word2) {
  let w1 = word1.split("");
  let w2 = word2.split("");
  const max = word1.length > word2.length ? word1.length : word2.length;
  let result = "";
  for (let i = 0; i < max; i++) {
    if (i < w1.length) {
      result += w1[i]
    }
    if (i < w2.length) {
      result += w2[i];
    }
  }
  return result;
};