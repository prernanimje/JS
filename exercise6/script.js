var prerna = [
    {
        name:"Bhagwan Nimje",
        date:"31-8-2003",
        place:"Nagpur",
    },
    {
        name:"Prerna Nimje",
        date:"31-08-2003",
        place:"pune",
    }
];
const a = prerna.filter((x)=> {
   if( x.name === 'Prerna Nimje'){
    x.name="khushi";
   }
return x;
})
// const mapp = prerna.map((val) => {
//     if(val.name === "Prerna Nimje"){
//         val.name = "khushi"
//     }
//     return val
// })
// console.log(mapp);
console.log(a);

// console.log(prerna.indexOf("pune"));

// console.log(prerna.indexOf(prerna.place1));
// function findIndex(prerna, element) {
//     for (let i = 0; i < prerna.length; i++) {
//         for (let j = 0; j < prerna[i].length; j++) {
//             if (prerna[i][j] == element) {
//                 prerna[i][j] = "Varsha Nimje";
//                 return { row: i, colum: j };
//             }

//         }
//         return -1;
//     }
// }


// console.log(prerna);
// console.log(findIndex(prerna, "Bhagwan Nimje"));



// prerna.child.name = "Sakshi Nimje";
// prerna.Parent="varsha";
// prerna[0][0]="Priyanka Nimje";
// console.log(prerna);
// function getPhoto(){
// let arr=new Array
// arr[0]="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
// arr[1]="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
// arr[2]="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";

// var total=Math.floor(Math.random* arr.length);
// document.getElementById(arr[total]);
// }

//["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg","http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg","http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"]