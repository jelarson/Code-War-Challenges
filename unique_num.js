// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  let nums1 = [];
  let nums2 = [];

  arr.forEach((num) => {
    if (num === arr[0]) {
      nums1.push(num);
    } else {
      nums2.push(num);
    }
  });
  return nums1.length > nums2.length ? nums2[0] : nums1[0];
}

console.log(findUniq([3, 10, 3, 3, 3]));

// top answer

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}
