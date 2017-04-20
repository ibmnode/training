

//let max=Math.max(12,13,15);

// let nums=[12,13,15,12,13,14,15];
// // let max=Math.max(nums[0],nums[1],nums[2]);//  manula spreading

// let max=Math.max(...nums);

// console.log(max);


let a=[1,2,3];
let b=[7,8,9];
let str="IBM";

let c=[...a,4,5,6,...b,...str];

console.log(c);



// imp-note :  any object if it is iterable ,
 // then can spreadable