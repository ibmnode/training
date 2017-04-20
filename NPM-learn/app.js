

// let arr1=[1,3,4,6];
// let arr2=[3,6,2,8];

let _=require('lodash');

// let diff=lodash.difference(arr1,arr2);

let util={
    findDifference:function(arr1,arr2){
        return _.difference(arr1,arr2);
    }
}

module.exports=util;

