paper.setup('myCanvas');

var P = paper;

var canvasSize = P.view.size;

var maxSize = Math.min(canvasSize.width, canvasSize.height);

var rectSize = new P.Size(maxSize * 0.6,maxSize * 0.6);

let path = new paper.Path();

console.log(path);
console.log(paper);



