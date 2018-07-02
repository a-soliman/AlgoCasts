// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root, level = 0, width = []) {
    if ( !Array.isArray(root) ) root = [root];
    width.push(root.length);
    let newLevelNodes = [];
    for ( let i = 0; i < root.length; i++ ) {
      const node = root[i];
  
      if (node.children.length >  0) {
        for ( let j = 0; j < node.children.length; j++ ) {
          const child = node.children[j];
          newLevelNodes.push(child);
        }
        
      }
    }
    if ( newLevelNodes.length < 1 ) return width;
    return levelWidth(newLevelNodes, level +1, width);
    
  }

module.exports = levelWidth;
