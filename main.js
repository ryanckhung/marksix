const MarkSix = require('./index.js');

var marksix = new MarkSix();

marksix.normalDraw();
console.log(marksix.toString());

// [1,2,2,0,1] means
// 1-10 pick 1 value
// 11-20 pick 2 values
// 21-30 pick 2 values
// 31-40 pick 0 value
// 41-49 pick 1 value
marksix.randomPickWithRange([1,2,2,0,1])
console.log(marksix.toString());

for (var i=0; i<100; i++){
    marksix.randomPickWithExclusion([1,2,3,4,5,6,7,8,9,10,40,41,42,43,44,45,46,47,48,49]);
    console.log(marksix.toString());
}