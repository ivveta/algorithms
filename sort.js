const findSmallestElementIndexInArray = arr => {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

// O(n)
const selectionSort = arr => {
  const workingArr = [...arr];
  const sortedArr = [];

  while (workingArr.length > 0) {
    const smallestInd = findSmallestElementIndexInArray(workingArr);
    // find smallest elem and delete it from original arr
    const smallestElem = workingArr.splice(smallestInd, 1)[0];

    sortedArr.push(smallestElem);
  }

  return sortedArr;
}

// O(log(n))
const quickSort = (list) => {
  if (list.length <= 1) {
    return list;
  }

  // pivot - random element
  const pivot = list[Math.ceil(list.length/2)];
  const less = [];
  const greater = [];

  for (let el of list) {
    if (el < pivot) {
      less.push(el)
    }
    if (el > pivot) {
      greater.push(el)
    }
  }


  return [...quickSort(less), pivot, ...quickSort(greater)]

};

const arr = [2, 3, 100, 4, 5, 73];
console.log(`selectionSort: [${selectionSort(arr)}]`);
console.log(`quickSort: [${quickSort(arr)}]`);
