//Capitalize each of an array of names

const arr1=["prerna","hello","bye","sakshi"]
const output=arr1.map((x)=>{
    return x.charAt(0).toUpperCase()+ x.slice(1);
})
console.log(output);