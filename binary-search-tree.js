//TreeNode Class

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

    insert(val, currentNode = this.root) {
        const newNode = new TreeNode(val);

        if(!this.root) {
            this.root = newNode;
            return;
        }
    }
}

//Creating Nodes

let one = new TreeNode('1'); //subtree / branch
let two = new TreeNode('2'); //leaf
let three = new TreeNode('3'); //subtree / branch
let four = new TreeNode('4'); //subtree / branch
let five = new TreeNode('5'); //leaf
let six = new TreeNode('6'); //leaf
let root = new TreeNode('7'); //root node
let eight = new TreeNode('8'); //subtree / branch
let nine = new TreeNode('9'); //leaf

// Height: 4 ; Width: 4//

//Creating Edges

one.right = two;
three.left = one;
three.right = four;
four.right = five;
root.left = three;
root.right = eight;
eight.left= six;
eight.right = nine;


module.exports = {
    TreeNode,
    BinarySearchTree
}
