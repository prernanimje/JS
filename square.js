let arr=[1,2,3,4];
let arr1=[];

for(let i=0;i<arr.length;i++){
    let squ=arr[i]*arr[i];
    // arr1[i]=squ;
    arr1.push(squ);  
}
console.log(arr1);