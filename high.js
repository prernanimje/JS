const radius=[2,3,4,5];
console.log(typeof(radius))

const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

const area=function(radius){
    return Math.PI * radius * radius;
}

const diameter=function(radius){
    return 2 *  radius;
}

const circumference=function(radius){
    return 2 * Math.PI * radius * radius;
}

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));