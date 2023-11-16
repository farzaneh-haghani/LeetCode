const merge = function (nums1, m, nums2, n) {
  if (n === 0 && nums1.length === m) {
    return nums1;
  }
  nums1.splice(m, nums1.length - m);
  let i = 0;
  let j = 0;
  while (i < m + n) {
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    } else if (i === nums1.length) {
      nums1.splice(i, 0, nums2[j]);
      i++;
      j++;
    } else {
      i++;
    }
  }
  return nums1;
};
