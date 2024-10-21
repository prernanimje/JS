//madam wap for palindrome in string 

function isPaindrom(str){
    let str1="";
    for( let i=str.length-1;i>=0;i--){
        str1= str1 + str[i];
    }
    if(str===str1){
        console.log("Is palindrome");
    }else{
        console.log("its ot plaindrome");
    }
}
isPaindrom("madam");