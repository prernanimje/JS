
// Write a JavaScript program that displays the largest integer among two integers.
 // wap in js that displays even numbers from 1 to 100

    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz",i);
        }
        else if(i%5==0){
               console.log("Buzz",i);
        }else if(i%3==0){
            console.log("fizz",i);
        }
    }
    
  
