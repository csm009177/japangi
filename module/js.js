const fs = require('fs');
function makeChild(fatherNod, many){
  for(i=0; i<many; i++) {
    let creDiv = document.createElement('div');
    let div0 = document.getElementById(`'${fatherNod}'`)
    fatherNod.appendChild(creDiv);
    fatherNod.children[i].id = `${fatherNod}${[i]}`;
  }

makeChild()
module.exports = makeChild;