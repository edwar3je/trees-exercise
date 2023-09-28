/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  gatherAll(){
    const items = [this];
    for(let i=0; i<items.length; i++){
      if(items[i].children !== null){
        for(let item of items[i].children){
          items.push(item)
        }
      }
    }
    return items;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    if(this.root === null){
      return total
    }
    const allItems = this.root.gatherAll();
    for (let item of allItems){
      total = total + item.val
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let evens = 0;
    if(this.root === null){
      return evens
    }
    const allItems = this.root.gatherAll();
    for (let item of allItems){
      if(item.val % 2 === 0){
        evens = evens + 1
      }
    }
    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let itemsGreater = 0;
    if(this.root === null){
      return itemsGreater
    }
    const allItems = this.root.gatherAll();
    for (let item of allItems){
      if(item.val > lowerBound){
        itemsGreater = itemsGreater + 1
      }
    }
    return itemsGreater;
  }
}

module.exports = { Tree, TreeNode };
