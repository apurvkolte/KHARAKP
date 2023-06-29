// const http = require('http');
// // import http from 'http';

// const server = http.createServer((req, res)=>{
//     res.end("HW");
// });

// server.listen(4242, ()=>{
//     console.log("Server is running....");
// })

// setTimeout(
//     ()=>{
//         console.log("Hello after 4 seconds");
//     },
//     4 * 1000
// );

// const rocks = who =>{
//     console.log(who + ' rocks');
// };

// setTimeout(rocks, 2*1000, 'Pluralsight');

// const theOneFunc = delay =>{
//     console.log('Hello after ' +delay+' seconds');
// };

// setTimeout(theOneFunc, 4 * 1000, "Four");
// setTimeout(theOneFunc, 8 * 1000, "Eight");
// Hello after 4 second

// Hello after 8 second

//you can define only ONE function

// setInterval(
//     ()=>
//         console.log("Hello every 3 second"),3000
// )

// const timerId = setTimeout(
//     ()=> console.log("You will not see this one!"),3000
// );

// clearTimeout(timerId);



// let counter = 0;
// const intervalId = setInterval(() => {
//     console.log("Hello World");
//     counter += 1;

//     if (counter === 5) {
//         console.log("Done");
//         clearInterval(intervalId);
//     }
// }, 1000);



// process.stdin.on('readable',()=>{
//     const chunk = processs.stdin.read();
//     if(chunk !== null){
//         process.stdout.write(chunk);
//     }
// })


// setTimeout(()=> process.exit(), 2000);

// process.on('exit',()=>{
//     console.log("Process will exit now. See you later");
// });
// console.log("Hello!");



//Scalar values
// const answer = 42;   //Imutable
// const greeting = 'Hello';

// //Array and Objects
// const numbers =[2,4,6]; //can be change mutable
// const person ={
//     firstName:'John',
//     lastName:"Doe",
// };

//imutablity object accomplish object.freeze()


//Arrow function
// const square=(a)=>{
//     return a*a;
// };

// const square =(a)=>a*a;

// const square =a=>a*a;


//this for exports object
// this.id ='exports';

// const testerObj ={
//     func2:()=>{
//         console.log('func2', this);
//     },
//     func1: function(){
//         console.log('func1', this);
//     },
// };
// testerObj.func2();

// testerObj.func1();


// const my='answer';
// const obj={
//     p1:10,
//     p2:20,
//     f1(){},
//     f2:()=>{},
//     [my]:42
// };

// console.log(obj.my);// undefine
// console.log(obj.answer);//42




// const PI=Math.PI;
// const E = Math.E;
// const SQRTZ = Math.SQRTZ;


// const {PI,E, SQRTZ} = Math;
// const circle ={
//     label:'circleX',
//     radius:2,
// };

// const circleArea =({radius}, {precision = 2} ={})=>
//     (PI * radius * radius).toFixed(precision);

// console.log(circleArea(circle));
// console.log(circleArea(circle, { precision : 5}));



// const [first, second, ,forth] =[10,20,30,40];



// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name, level){
//         super(name);
//         this.level=level;
//     }
//     greet(){
//         console.log(`Hello ${this.name} from ${this.level}`);
//     }
// }

// const obj1=new Person('Max');
// const obj2=new Student('Well',"1st Grade");
// const obj3=new Person('Max Dell',"2nd Grade");

// obj3.greet=()=>console.log("I am special");
// obj1.greet();
// obj2.greet();
// obj3.greet();




//promise async await
// const https = require('https');

// function fetch (url) {
//   return new Promise((resolve, reject) => {
//     https.get(url, (res) => {
//       let data = '';
//       res.on('data', (rd) => data = data + rd);
//       res.on('end', () => resolve(data));
//       res.on('error', reject);
//     });
//   });
// }

// fetch('https://www.javascript.com/')
//   .then(data => {
//     console.log(data.length);
//   });

//   (async function read() {
//     const data = await fetch('https://www.javascript.com/');
//     console.log(data.length);
//   })();




// const lodash = require('lodash');
// const sum = lodash.sum([1,2,3,4,5]);
// console.log("Sum is", sum);

// const print = require('./frame-print');
// print("H NPM!");

// const ap = require('apurv-frame-print');
// ap("package");




//Argument is keyword in js to pass the arg to function.
// console.log(arguments);


// function dynamicArg(){
//     console.log(arguments);
// }
// dynamicArg(3,7,5,4,"ds");


exports.a = 42;
module.exports.b = 37;
module.exports = () => { };
// console.log("exports",exports);


//global obj

// global.val =45;
// console.log(val);



// console.log("exports",exports);        //Define API to module
// console.log("module",module);          //Define API to module
// console.log("require",require);		  //Other module
// console.log("__filename",__filename);  //Current path od file
// console.log("__dirname",__dirname);    // PAth of folder to hosting files



//callback async
// const fs=require('fs');

// fs.readFile(__filename, function cb(err, data){
//     console.log("File data is", data);
// });

// console.log(`Test`);


/*promise use if nexting callback having more dificult to understand
IF MULTIPLE CALLBACK USE IN CODE WILL BE MORE COMPLEX THEN WE USE PROMISE
PROMISE BETTER TAHN CALLBACK
*/
// const fs=require('fs');
// const util=require('util');

// const readFile = util.promisify(fs.readFile);

// async function main(){
//     const data = await readFile(__filename);
//     console.log("File data is", data);
// }

// main();
// console.log(`Test`);



//EventEmitter i.e.(Streams, process.stdin, process.stdout)

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// myEmitter.emit('TEST_EVENT'); // not event log
// //or 2 time by this run function before code
// setImmediate(()=>{
//     myEmitter.emit('TEST_EVENT'); 
// })

// myEmitter.on('TEST_EVENT',()=>{
//     console.log("TEST_EVENT was fired");
// })

// myEmitter.on('TEST_EVENT',()=>{
//     console.log("TEST_EVENT was fired");
// })

// myEmitter.emit('TEST_EVENT'); // 2 times event log



//web server http localhost:4242=>

// const http = require('http');

// const requestListner = (req, res)=>{
//     console.dir(req, {depth : 0});  //no nexsted only first see
//     console.dir(res, {depth : 0});  
//     res.write("H.... W \n");
//     res.end();
// };

// const server = http.createServer();
// server.on('request', requestListner); 

// server.listen(4242, ()=>{
//     console.log('Server is running...');
// });



//web server express
// const express = require('express');
// const server = express();

// /**
//  * server.set("View engine", ejs);
//  * 
//  * server.get('/about',(req,res)=>{
//     res.render('about');
// })
//  */

// server.get('/',(req,res)=>{
//     res.send('HW...!');
// })

// server.get('/about',(req,res)=>{
//     res.send('About...!');
// })

// server.listen(4242,()=>{
//     console.log("Express Server is running");
// })




// const os = require('os');

// console.log("Os platform", os.platform());
// console.log("Os os.arch()", os.arch());
// console.log("Os os.constants", os.constants);
// console.log("Os os.cpus()", os.cpus());
// console.log("Os os.endianness()", os.endianness());
// console.log("Os os.freemem()", os.freemem());
// console.log("Os os.homedir()", os.homedir());
// console.log("Os os.hostname()", os.hostname());
// console.log("Os os.loadavg()", os.loadavg());
// console.log("Os os.networkInterfaces()", os.networkInterfaces());
// console.log("Os os.platform()", os.platform());
// console.log("Os platfos.release()orm", os.release());
// console.log("Os os.totalmem()", os.totalmem());
// console.log("Os os.type()", os.type());
// console.log("Os os.uptime()", os.uptime());
// console.log("Os os.homedir()", os.homedir());



//debugg
function covertArrayToObject(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr[0]] = curr[1];
        return acc;
    }, {});
}

const obj = covertArrayToObject([
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
    [4, 'Four'],
    [5, 'Five'],
]);

console.log(obj);



