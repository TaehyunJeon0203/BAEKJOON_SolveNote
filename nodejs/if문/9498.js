const input = require('fs').readFileSync('dev/stdin').toString().trim();
let score = parseInt(input);
if (90 <= score) {
    console.log("A");
}
else if (80 <= score) {
    console.log("B");
}
else if (70 <= score) {
    console.log("C");
}
else if (60 <= score) {
    console.log("D");
}
else {
    console.log("F");
}