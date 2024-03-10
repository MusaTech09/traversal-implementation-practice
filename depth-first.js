const root = require('./tree.js');
const graph = require('./graph.js');

const depthFirstTraversal = root => {
    //Put starting node on a stack
    let stack = [root];

    //While stack is empty
    while(stack.length > 0) {
        //Pop a node and print it
        let node = stack.pop();
        console.log(node.val);

        //Put all node's children on top of stack
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
}

depthFirstTraversal(root);
