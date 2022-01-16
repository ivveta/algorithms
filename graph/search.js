const breadthFirstSearch = (graph, rootNode, isGoalFun) => {
  const queue = [];
  const checkedNodes = [];

  queue.push(...graph[rootNode]);

  //only one loop
  while (queue.length > 0) {
    const node = queue.shift();

    if (checkedNodes.includes(node)) {
      continue;
    }

    if (isGoalFun(node)) {
      return node;
    }

    queue.push(...graph[node]);
    checkedNodes.push(node);
  }

  return 'no exists';
};


const testGraph = {
  'you': ['alice', 'bob', 'claire'],
  'bob': ['anujR', 'peggy'],
  'alice': ['peggy'],
  'claire': ['thom', 'jonny'],
  'anujR': [],
  'peggy': [],
  'thom': [],
  'jonny': [],
};


// search function
const isFourLettersName = name => name && name.length === 4;

// additional, intuitive search
const twoLoops = (graph, isGoalFun) => {
  const checkedNodes = [];

  for (let node in graph) {
    for (let neighbor of graph[node]) {
      if (checkedNodes.includes(neighbor)) {
        continue;
      }
      if (isGoalFun(neighbor) === true) {
        return neighbor;
      }

      checkedNodes.push(neighbor);
    }
  }

  return 'no exists';
};

console.log('twoLoops', twoLoops(testGraph, isFourLettersName))
console.log('breadthFirstSearch', breadthFirstSearch(testGraph, 'you', isFourLettersName))