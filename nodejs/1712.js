const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let N = A / (C - B);

let answer = Math.floor(N) + 1;

B >= C ? (answer = -1) : answer;

console.log(answer);