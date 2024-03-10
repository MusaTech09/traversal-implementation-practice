class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let one = new TreeNode('1');
let two = new TreeNode('2');
let three = new TreeNode('3');
let four = new TreeNode('4');
let five = new TreeNode('5');
let six = new TreeNode('6');
let seven = new TreeNode('7');
let eight = new TreeNode('8');
let nine = new TreeNode('9');

one.right = two;
three.left = one;
three.right = four;
four.right = five;
seven.left = three;
seven.right = eight;
eight.left= six;
eight.right = nine;


module.exports = TreeNode;
