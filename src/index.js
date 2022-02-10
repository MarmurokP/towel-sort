
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedArray = [];
  if(matrix === undefined){
    return sortedArray = [];
  }
  matrix.forEach((el, i) => {
    if(!Array.isArray(el)){
      sortedArray.push(el);
    } else if (i % 2 === 0){
     el.forEach(el => {
        sortedArray.push(el);
     })
    } else {
      el.reverse().forEach(el => {
       sortedArray.push(el);
     });
    }
  });
  return sortedArray;
}
