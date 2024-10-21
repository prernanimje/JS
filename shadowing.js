function test() {
    let a = 'Hello';

    if (true) {
        let a = 'Bye';  
        console.log(a); 
    }

    console.log(a); 
}

test();