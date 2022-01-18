const breadthFirstSearch = (graph, rootNode, isTargetCallback) => {
  const queue = [...graph[rootNode]];
  const checkedNodes = [];

  //only one loop
  // fifo
  while (queue.length > 0) {
    const node = queue.shift();

    if (checkedNodes.includes(node)) {
      continue;
    }

    if (isTargetCallback(node)) {
      return node;
    }

    queue.push(...graph[node]);
    checkedNodes.push(node);
  }

  return 'no exists';
};

const depthFirstSearch = (graph, rootNode, isTargetCallback) => {
  const stack = [...graph[rootNode]];
  const checkedNodes = [];

  // lifo
  while (stack.length > 0) {
    const node = stack.pop();

    if(checkedNodes.includes(node)){
      continue;
    }

    if(isTargetCallback(node)){
      return node;
    }

    checkedNodes.push(node);
    stack.push(...graph[node]);
  }

  return 'no exists';
}

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
const twoLoops = (graph, isTargetCallback) => {
  const checkedNodes = [];

  for (let node in graph) {
    for (let neighbor of graph[node]) {
      if (checkedNodes.includes(neighbor)) {
        continue;
      }
      if (isTargetCallback(neighbor) === true) {
        return neighbor;
      }

      checkedNodes.push(neighbor);
    }
  }

  return 'no exists';
};

console.log('twoLoops', twoLoops(testGraph, isFourLettersName))
console.log('breadthFirstSearch', breadthFirstSearch(testGraph, 'you', isFourLettersName))
console.log('depthFirstSearch', depthFirstSearch(testGraph, 'you', isFourLettersName))