var arr = [1,2,2,3,4,5];
var i = arr.length-1;
for (i; i >= 0; i--){
    console.log(i)
    arr.splice(i,1)
}
console.log(arr);
[1,2,3].splice()