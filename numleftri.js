// 1
// 23
// 456
// 78910

let number=1;
let n=5;

for(let i=1;i<=n;i++){
    let row="";
       for(let j=1;j<=i;j++){
            row+=+number+" ";
            number++;
       }
       console.log(row);
}