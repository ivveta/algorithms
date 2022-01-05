const factorial = (n) => (
  n === 1 ? 1 : n * factorial(n - 1)
);

const findSum = (list) => {
  if (list.length === 0) {
    return 0;
  }

  const [firstEl, ...rest] = list;
  return firstEl + findSum(rest);
}

const listLength = (list) => {
  if (list.length === 0) {
    return 0;
  }

  return 1 + listLength(list.slice(1));
}

const findMax = (list) => {
  if (list.length === 1) {
    return list[0];
  }

  const [firstEl, ...rest] = list;
  const prevMax = findMax(rest);

  return firstEl > prevMax ? firstEl : prevMax;
}


const n = 5;
const testList = [4, 6, 7, 9, 13, 34, 4, 0];
console.log(`factorial ${n}: ${factorial(n)}`);
console.log(`sum [${testList}]: ${findSum(testList)}`);
console.log(`count [${testList}]: ${listLength(testList)}`);
console.log(`max [${testList}]: ${findMax(testList)}`);