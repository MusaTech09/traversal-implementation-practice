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
            if(!currNode.left) currNode.left = newNode;
            else this.insert(val, currNode.left)
        }

        //Add larger values to right
        if(val > currNode.val) {
            if(!currNode.right) currNode.right = newNode;
            else this.insert(val, currNode.right);
        }
    }
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



module.exports = {
    TreeNode,
    BinarySearchTree
}
