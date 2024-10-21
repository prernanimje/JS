const url='https://pokeapi.co/api/v2/pokemon/pikachu'

const getData=fetch(url,{
      method: 'GET',
      headers:{
        'Content-Type':'application/json'
      },
    //   body: JSON.stringify({
    //     key1: 'value1',
    //     key2: 'value2'
    //   })
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.log('Error:', error))