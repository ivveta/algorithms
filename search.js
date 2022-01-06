// as example lets find target index in a list
// O(n)
const linearSearch = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }

  return -1;
}

// O(log(n))
// We don't need recursion function here, we can just work with element's index
const binarySearch = (list, target) => {
  let start = 0;
  let end = list.length - 1;

  // need to add equality if array length === 1;
  while (start <= end) {
    // take +(!), because we need index of element, not just length
    const midIndex = Math.floor((end + start) / 2);
    const midEl = list[midIndex];

    if (target === midEl) {
      return midIndex;
    }

    if (target < midEl) {
      // + 1 - we dont need to check middle elem one more time, we already check equality before
      // take smaller
      end = midIndex - 1;
    } else {
      // + 1 - we dont need to check middle elem one more time, we already check equality before
      // take bigger
      start = midIndex + 1;
    }
  }

  return -1;
}

const testSearch = (list, target) => {
  const linear = linearSearch(list, target);
  const binary = binarySearch(list, target);

  return {
    linear,
    binary
  }
};

const printTest = (list, target) => {
  const {linear, binary} = testSearch(list, target);
  console.log(`linear: ${linear}, binary: ${binary}`)
}

const arr = [2, 3, 4, 5];
printTest(arr, 4);
