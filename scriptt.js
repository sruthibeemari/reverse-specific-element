//1st
var a=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
for(i=a.length-1;i>=0;i--){
    console.log(a[i])
}
//2nd
var str="sruthi";
var reverse="";
for(b=str.length-1;b>=0;b--){
    reverse=reverse+str[b]
}
console.log(reverse);
//3rd        to print specific element from an array
var array=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
for(index of array){
if(typeof index ==="object"&& index.age!== undefined){
    console.log(index.age);
    
}
}
