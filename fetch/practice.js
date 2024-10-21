const deleteData = async ( ) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
    });
 
   const data = await response.json( );
 
   // now do whatever you want with the data  
    console.log(data);
 };
 deleteData( );