//Create Graph
const graph = {
    A: new Set(['B', 'C', 'E']), //directed B && C; undirected(bidirectional) E
    B: new Set([]),
    C: new Set(['B', 'D']),
    D: new Set([]),
    E: new Set(['A']), //undirected(bidirectional) edge
    F: new Set(['E']), //directed edge
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

//Depth-First Traversal
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

    return false;
}

//Test Cases

console.log(dft('A'));
console.log(dft('B'));
console.log(dft('C'));
console.log(dft('D'));
console.log(dft('E'));
console.log(dft('F'));
