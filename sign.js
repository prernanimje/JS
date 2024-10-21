//Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

let arr=[1,2,-7,1];
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        console.log("The sign is -", i);
    }
}