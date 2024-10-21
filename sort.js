var a=[5,2,10,6,4,5];
let temp=0;
for(let i=0;i<a.length;i++){
    for(let j=i;j<a.length;j++){
        if(a[i]>a[j]){
            temp=a[i];
             a[i]=a[j];
            a[j]=temp; 
        }
    }
}

console.log(a);