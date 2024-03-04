// console.log(Math.abs(10))
// console.log(Math.floor(3.4))
// console.log(Math.trunc(3.4))
// console.log(Math.floor(-3.4))
// console.log(Math.trunc(-3.4))

// console.log(Math.round(10.3))
// console.log(Math.round(Math.random()*100))


// console.log(Math.ceil(10.9))

function remove(){
let data=[20,30,10,40,80,50]

let position=document.getElementById("removed").value;
position=parseInt(position);

for ( let i=position;i<data.length;i++)
{
    data[i]=data[i+1];
}
data.length=data.length-1
document.getElementById("h1").innerHTML=data

}