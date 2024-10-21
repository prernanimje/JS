let n=5;
let str="*";
let space=" ";
for(let i=n-1;i<=n;i--){
    console.log(space.repeat((n-i))+str.repeat((i*2-1)));
}


