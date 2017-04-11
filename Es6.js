const list={
  first:'madhu',
  age:25,
  gender:'male'
};
var greeting=(message,name)=> console.log(this.first + message+name);
var greeting=function (message,name) {
	console.log(this.first+message+name);
	// body...
}
greeting.call(list,'hello','reddy');



/* const */
if(true){
  const name= 'madhu';
  console.log(name);
}
console.log(name);


/*shortend properties */
let firstName='madhu';
let lastName='reddy';
let person={firstName,lastName};
console.log(person);
let son='sudan';
let daughter='neha';
let person1={son,daughter}
let family={person,person1};
console.log(family)


/* Objects Enhancements */

let name='madhu';
let age='26';
let gender='male';
let weight='148lbs';

let person={
	name,
	age,
	gender,
	weight,
	fullDetails(){
		console.log('Name:'+person.name+' '+'Age:'+person.age+' '+'Gender:'+person.gender+' '+'Weight:'+person.weight);
	}
}
console.log(person.age);
person.fullDetails();



/* spread operator */

let array1=[4,5,6,7];
let array2=[8,9,10,11];
let arr=array1.concat(array2);
console.log(...arr);

function add(a,b,c) {
	let result=a+b+c;
	console.log(result);
	// body...
}

add(...array1);
array1.push(...array2);
console.log(...array1);




/* Template Literals */
function fullName(name,lastName) {

	return `${name} ${lastName}`;
	// body...
}


let myname1 = 'madhu';
const  myname2='reddy';
console.log(`my name is ${myname1} ${myname2}`)

var message=fullName`my name is ${'reddy'} ${'madhu'}`

console.log(message);






/* Destructuring Asssignment */

 var {name,age,gender}={
	name:'madhu',
	age:25,
	gender:'male'
}

console.log(`${name} ${age}`);

function assign() {
	return  {
		name:'madhu',
		age:25,
		gender:'male'

	}
	// body...
	
}
let {name:firstName,age,gender:sex}= assign();
console.log(sex);

var [name,,last]=['madhu','sudan','reddy','sanaiahgari'];
console.log(last);

var people=[
	{
		name:'madhu',
		age:25,
		gender:'male',
		height:'5.11inch'
	},
	{
		name:'siva',
		age:23,
		gender:'male',
		height:'5inch'
	},
	{
		name:'arohi',
		age:24,
		gender:'female',
		height:'5.4inch'
	},
	{
		name:'bala',
		age:21,
		gender:'male',
		height:'5.6inch'
	}
]


var [,siva]= people;

function display({gender}) {
	console.log(gender);
	// body...
}
display(siva);

people.forEach(({age,name})=> console.log(age+name));

let array=[21,32,4,3,45,56,67];

let rakesh = array.map((item,index)=> {

		var result=item*2;

	console.log(result)
	return result;
	});
console.log('rakesh : ', rakesh);

//let array=[21,32,4,3,45,56,67];

people.forEach((item)=> {

	console.log(item.age)
	});



/*Promises*/

	var prom= new Promise((resolve,reject)=>{
		if(false){
			resolve('Hello madhu');
		}else{
			reject('Bye madhu');
		}
	});
	prom.then((data)=>console.log('success'));
	prom.catch((error)=>console.log('error'));


/*Maps and weekMaps*/



/*API
set()
get()
size
clear()
has()*/

var mymap= new Map();
mymap.set('name','madhu');
mymap.set('age',24);
 console.log(mymap.get('age'));
mymap.clear();
console.log(mymap.size);
console.log(mymap.has('had'));


// Iterators
// keys()
// entries()
// values
for(var key of mymap.keys()){
	console.log(key);
}
for(var value of mymap.values()){
	console.log(value);
}
for(var [key,value] of mymap.entries()){
	console.log(key+'='+value);
}




/*Es6 Rest Parameters*/

function store() {
	var types={
		fruit:[],
		vegetable:[]
	}
	return {
		add: (category,...items)=> {
				console.log(...items);
				items.forEach((value,index,array)=> {
					types[category].push(value);
					// body...
				});
			
		},
		types:types
	}
	
}
var mystore= new store();
mystore.add('fruit','apple','oranges');
mystore.add('vegetable','bringal','palak');
console.log(...mystore.types.fruit);


/*var n= prompt("enter number"), i,s= 0,r; 
 
  
 i=n;
 
   for(i=n;i>0; )
   {
    r = i%10;
    s = s*10 + r;
    i= Math.round(i/10);
   }
 
   if (s == n)
     { console.log("print n is palindrome");}
   else
     {console.log("print n is not palindrome");}*/

/*rest Parameters*/

/*function fun(...arr) {
	var result=0;
console.log(arr);
	for (var i = 0; i < arr.length; ++i) {
		result += arr[i];
	}
	return result;
}
console.log(fun(1,2,3));*/