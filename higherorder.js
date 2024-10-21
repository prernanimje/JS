const radius=[2,4,6,8];

const diameter=function(radius){
    return 2 * radius;
}

const area=function(radius){
    return Math.PI * radius * radius;
}

const circumference=function(radius){
    return 2 * Math.PI *radius *radius;
}

const calculate=function (radius,logic){
    let output=[];
    for(let i=0;i<radius.length;i++){
    output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,diameter));
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));