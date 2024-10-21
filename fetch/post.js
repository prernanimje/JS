const DataObject={name: `SilvenLEAF`, age: 19, isTeen: true};

fetch=('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(DataObject)
})
    .then(response =>{
        return response.json( )
    })
    .then(data=>{
        console.log(data)
    });

// const myDataObject = { name: `SilvenLEAF`, age: 19, isTeen: true};

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(myDataObject)
// })
// .then(response => {
//     return response.json( )
// })
// .then(data => 
//     // this is the data we get after posting our data, do whatever you want with this data
//     console.log(data) 
// );