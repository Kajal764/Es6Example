// var user= {
//     name:"ED",
//     age: 25
// };


// var myName=user.name;
// console.log(myName);
// console.log(user.age);

// const {name,age}=user;
// console.log(name)

// function getAge(name){
//     console.log(` My Name Is  ${name}`);

// };
// getAge("kajal");

// const firstname= (name) => {
//     console.log('my name is ${name}');
// };
// firstname("kajal");


// var user={
//     name:"ED",
//     age:25,
//     sayName:function(){
//         console.log("my name is " +this.name );
//         var that=this;
//         var info=function(){
//             console.log("My name Is "+that.name+" And Age IS " +that.age);
//         }
//         info();
//     }
// }
// user.sayName();

// const user={
//     name:"ED",
//     age:22,
//     sayName:function(){
//         console.log(`my name is ${this.name}`);
//         const fullname= () =>{
//             console.log(`MY NAME IS ${this.name} And Age Is ${this.age}`);
//          } 
//          fullname(); 
//     }
  
// };
// user.sayName();

// function multiply(x,y){
//     var x=x ||10;
//     var y=y||20;
//     console.log(x*y);
// }
// multiply();

// const add=(c=10,d=20)=>{
//     console.log(c+d);
// };
// add()


const shoppingList=["milk","cow","eggs","bananas","choco"];

// shoppingList.forEach((product,index)=>{
//     console.log(`The Index Is ${index} and Product Is ${product}`);

// })

// const newList=shoppingList.map(item=>
//     item+"new"
// );
// console.log(newList)

const filterList=shoppingList.filter(item=> item=="eggs"
)
console.log(filterList);


































