const linearIndexSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// We don't need recursion function here, we can just work with element's index
const binaryIndexSearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  // need to add equality if array length === 1;
  while (start <= end) {
    // take +(!), because we need index of element, not just length
    const midIndex = Math.floor((end + start) / 2);
    const midEl = arr[midIndex];

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

const testSearch = (arr, target) => {
  const linear = linearIndexSearch(arr, target);
  const binary = binaryIndexSearch(arr, target);

  return {
    linear,
    binary
  }
};

const printTest = (arr, target) => {
  const {linear, binary} = testSearch(arr, target);
  console.log(`linear: ${linear}, binary: ${binary}`)
}

const arr = [2, 3, 4, 5]
printTest(arr, 4);
