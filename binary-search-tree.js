//TreeNode Class

const { B } = require("./graph");

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//Binary Search Tree

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val, currNode = this.root) {
        const newNode = new TreeNode(val);

        //Set value as root for empty bst
        if(!this.root) {
            this.root = newNode;
            return;
        }

        //Add smaller values to left
        if(val < currNode.val) {

            if(!currNode.left) {
                currNode.left = newNode;
            } else {
                this.insert(val, currNode.left);
            }
        } else {
            //Add larger values to right
            if(!currNode.right) {
                currNode.right = newNode;
            } else {
                this.insert(val, currNode.right);
            }
        }
    }

    //Depth-First Traversal
    dft() {
        let stack = [this.root]; //Put start node in stack

        //While stack not empty
        while(stack.length) {
            //Pop node and print
            let node = stack.pop();
            console.log(node.val);

            //Put node's children on top of stack
            if(node.right) stack.push(node.right);
            if(node.left) stack.push(node.left);
        }
    }

    //Depth-First Search
    dfs(target) {
        let stack = [this.root];

        while(stack.length)  {
            let node = stack.pop();

            if(node.val === target) return true;

            else {
                if(node.right) stack.push(node.right);
                if(node.left) stack.push(node.left);
            }
        }
        return false;
    }

    //Breadth-First Traversal
    bft() {
        let queue = new Queue();

        while(queue.size > 0) {
            let node = queue.dequeue();
            console.log(node);

            queue.enqueue(node.left);
            queue.enqueue(node.right);
        }
    }

    //Breadth-First Search
}




//Creating Binary Search Tree

bst = new BinarySearchTree();

bst.insert(7);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(9);

//          7
//        /   \
//       3     8
//      / \     \
//     1   4     9
//          \
//           6

//Test Cases

bst.dft();
console.log(bst.dfs(8));
console.log(bst.dfs(10));
