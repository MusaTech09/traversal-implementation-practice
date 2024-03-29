//Create Graph
const graph = {
    A: new Set(['B', 'C']),
    B: new Set(['A', 'D', 'E', 'F']),
    C: new Set(['A', 'F']),
    D: new Set(['B']),
    E: new Set(['B']),
    F: new Set(['B', 'C']),
}

//Depth-First Traversal
const dft = start => {
    //Create stack and push start node
    //Create set to store visited nodes and add start node
    let stack = [start];
    let visited = new Set([start]);
    let res = '';

    //While stack not empty
    while(stack.length){
        //pop node on top of stack
        //print node
        let curr = stack.pop();
        res += curr;

        //mark unvisited neighbors as visited and add to stack
        let neighbors = graph[curr];

        neighbors.forEach(node => {
            if(!visited.has(`${node}`)) {
                visited.add(`${node}`);
                stack.push(node);
            }
        });
    }

    return res;
}

//Depth-First Search
const dfs = (start, target) => {
    let stack = [start];
    let visited = new Set([start]);

    while(stack.length) {
        let curr = stack.pop();

        if(curr === target) return true;
        else {
            let neighbors = graph[curr];

            neighbors.forEach(node => {
                if(!visited.has(`${node}`)) {
                    visited.add(`${node}`);
                    stack.push(node);
                }
            });
        };
    };

    return `Target '${target}' Not Found`;
}

//Breadth-First Treversal
const bft = start => {
    let queue = [start];
    let visited = new Set([start]);
    let res = ''

    while(queue.length) {
        let curr = queue.shift();
        res += curr;

        let neighbors = graph[curr];

        neighbors.forEach(el => {
            if(!visited.has(`${el}`)) {
                visited.add(`${el}`);
                queue.push(el);
            }
        })
    }

    return res;
}

//Breadth-First Serach
const bfs = (start, target) => {
    let queue = [start];
    let visited = new Set([start]);

    while(queue.length) {
        let curr = queue.shift();

        if(curr == target) return true;
        else {
            let neighbors = graph[curr];

            neighbors.forEach(el => {
                if(!visited.has(`${el}`)) {
                    visited.add(`${el}`);
                    queue.push(el);
                }
            })
        }
    }

    return false;
}


//Test Cases

console.log(dft('A'));
console.log(dft('E'));
console.log(dft('F'));

console.log(dfs('A', 'D'));
console.log(dfs('B', 'F'));

console.log(bft('A'))
console.log(bft('E'))
console.log(bft('F'))

console.log(bfs('A', 'D'));
console.log(bfs('E', 'H'));
