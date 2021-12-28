const findSmallestElementIndexInArray = arr => {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for(let i = 0; i<= arr.length; i++){
    if(arr[i] < smallestElement){
      smallestElement = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

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

const arr = [2, 3, 100, 4, 5];
console.log(selectionSort(arr));