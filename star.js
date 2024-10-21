
// functjon trjangle(n){
// for(let j=0;j<=n;j++){
//     let str="* ";
//     let space=' ';
//     console.log(space.repeat((n-j))+ str.repeat(j));
// }
// for(let j=n-1;j<=n;--j){
//     let str="* ";
//     let space=' ';
//     console.log(space.repeat((n-j))+str.repeat(j));


// }
// }
// trjangle(5);

function hollow(n){
    for(let i=0;i<n;i++){
        let str="* ";
        let space=' ';
        console.log(str.repeat((n-i))+space.repeat(i));
    }
    for(let j=n-1;j<n;j--){
        let str="* ";
        let space=' ';
        console.log(str.repeat((n-j))+space.repeat(j));
    }
    
}
hollow(5);