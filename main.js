//Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
//Binary Search Tree Class
class BST {
  constructor() {
    this.root = null;
  }
  //insert(data)
  insert(data) {
    let newNode = new Node(data);
    //check if root is null
    //if root is null, new node is inserted as root
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  //insertNode(node, newNode), if there is already nodes in the tree
  insertNode(node, newNode) {
    //if data we are inserting is less than the node
    //data moves to the left of the tree
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      //if node.left is not null, recursively look for a null node
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  //remote(data)
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key) {
    //if the node is null, then the tree is empty
    if (node === null) return null;
    //if the data to delete is less, go down the left subtree
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    //if the data is greater, go down the right subtree
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    //if the data is same as the root data, then this is the node to delete
    else {
      //if there is no children under the node to delete
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      //if there is one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      //deleting a node with 2 children
      //aux is extra storage
      //find the node with the min value in the right subtree and replace
      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  //Helper functions:
  //findMinNode()
  findMinNode(node) {
    //check node.left, because smaller nodes will always be left child
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  //getRootNode()
  getRootNode() {
    return this.root;
  }
  //inOrder(node)(left, root, right)
  inOrder(node) {
    if (node != null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
  //preOrder(node) (Root, Left, Right)
  preOrder(node) {
    if (node != null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  //postOrder(note) (Left, Right, Root)
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}
//create object
let tree = new BST();
// Insertion into the tree
tree.insert(25);
tree.insert(7);
tree.insert(19);
tree.insert(13);
tree.insert(5);
let root = tree.getRootNode();
// Remove a node from the tree
tree.remove(19);
// show me an inorder traversal
tree.inOrder(root);
// show me postorder traversal
tree.postOrder(root);
