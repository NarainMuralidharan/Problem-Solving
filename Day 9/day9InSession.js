// In Session

// class BinaryTree {
//   constructor() {
//     this.root = [];
//   }

//   add(val) {
//     this.root.push(val);
//   }

//? Find the height of a binary tree.
//   height(root = 0) {
//     if (this.root[root] == undefined) {
//       return -1;
//       }
//       return Math.max(this.height(root*2+1), this.height(root*2+2)) + 1
//     }

//     heightUsingFormula() {
//         return Math.floor(Math.log2(this.root.length))
//     }
// }

// const tree = new BinaryTree()
class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  class BST {
    constructor() {
      this.root = null;
    }
    insert(val, root = this.root) {
      if (this.root == null) {
        this.root = new Node(val);
      } else {
        if (val < root.val) {
          if (root.left == null) {
            root.left = new Node(val);
          } else {
            this.insert(val, root.left);
          }
        } else {
          if (root.right == null) {
            root.right = new Node(val);
          } else {
            this.insert(val, root.right);
          }
        }
      }
    }
  
    inorder(root = this.root, arr = []) {
      if (root == null) return;
      this.inorder(root.left, arr);
      arr.push(root.val);
      this.inorder(root.right, arr);
      return arr;
    }
    preorder(root = this.root, arr = []) {
      if (root == null) return;
      arr.push(root.val);
      this.preorder(root.left, arr);
      this.preorder(root.right, arr);
      return arr;
    }
    postorder(root = this.root, arr = []) {
      if (root == null) return;
      this.postorder(root.left, arr);
      this.postorder(root.right, arr);
      arr.push(root.val);
      return arr;
    }
  
    countLeaf(root = this.root) {
      if (root == null) return 0;
      if (root.left == null && root.right == null) return 1;
      return this.countLeaf(root.left) + this.countLeaf(root.right);
    }
    rootToLeaf(root = this.root, res = [], arr = []) {
      if (root == null) return res;
      arr.push(root.val);
      if (root.left == null && root.right == null) {
        res.push(arr.join(" -> "));
      } else {
        this.rootToLeaf(root.left, res, arr);
        this.rootToLeaf(root.right, res, arr);
      }
      arr.pop();
      return res;
    }
  
    isBST(root = this.root) {
      if (root == null) return true;
  
      if (root.left != null && root.left.val > root.val) return false;
      if (root.right != null && root.right.val < root.val) return false;
  
      return this.isBST(root.left) && this.isBST(root.right);
    }
    //     interchange(root = this.root) {
    //       //? this method is created for checking is isBST method working fine or not?
    //     if (root == null) return;
    //     if (
    //       (Math.floor(Math.random() * 455) % 255) % 2 == 0 &&
    //       root.left &&
    //       root.right
    //     ) {
    //       console.log("Interchanging :: ", root.left?.val, root.right?.val);
    //       [root.left, root.right] = [root.right, root.left];
    //     }
    //     this.interchange(root.left);
    //     this.interchange(root.right);
    //   }
  
    LCA(val1, val2, root = this.root) {
      if (root == null) return [val1, val2, -1];
      console.log(root.val);
      if (root.val == val1 || root.val == val2) return [val1, val2, root.val];
      else if (root.val < val1 && root.val < val2)
        return this.LCA(val1, val2, root.right);
      else if (root.val > val1 && root.val > val2)
        return this.LCA(val1, val2, root.left);
      else if (root.val > val1 && root.val < val2) return [val1, val2, root.val];
      else if (root.val < val1 && root.val > val2) return [val1, val2, root.val];
      return -1;
    }
  }
  
  const tree = new BST();
  const arr = [];
  for (let ind = 0; ind < 10; ind++) {
    const x = Math.floor(Math.random() * 100);
    arr.push(x);
    tree.insert(x);
  }
  console.log("arr :::", ...arr);
  console.log("in ::::", ...tree.inorder());
  console.log("pre :::", ...tree.preorder());
  console.log("post ::", ...tree.postorder());
  console.log("leaf ::", tree.countLeaf());
  console.log("root to leaf ::\n", tree.rootToLeaf().join("\n"));
  // console.log("isBST ::", tree.isBST());
  // tree.interchange();
  // console.log("isBST ::", tree.isBST());
  console.log(
    "LCA :::",
    tree.LCA(
      arr[Math.floor(Math.random() * arr.length)],
      arr[Math.floor(Math.random() * arr.length)]
    )
  );