// const student ={
//     studentName:"Pawan",
//     studentId:12409922,
//     studentCgpa:7.95,
//     studentMobile:9608364081
// };
// for( i in student){
//     console.log(student[i])
// }
// //STRING
// //ALL THINGS ARE SAME
// let obj={
//     item:"Pen",
//     price:10
// };
// //Templet Literals(for printing without console.log as it will use , "" many times)
// let output=`The cost of ${obj.item} is ${obj.price} ruppes`;
// console.log(output);
// //some function
// console.log(output.toUpperCase());
// console.log(output.toLowerCase());
// console.log(output.trim());
// console.log(output.slice(1,4));
// console.log(output.concat(str2));
// console.log(output.replace(onload,newv));
// console.log(output.replace());


//ARRAY
// All Things are same as of c and python  but no pointer concept yet
let ary=["Ford","Tata","Mahindra"];
ary.push("Kia","Hynduai");
let deleteItem=ary.pop(); //pop delete elemnt from end of the array also it return the same so we can store it 
//change are made in orginal array
for(let cn of ary){
    console.log(cn);
}
let numary=[1,2,3,4];
let numary1=[5,6];
console.log(numary);
let expresult=numary.toString(); //convert the fiven array in a single string also it return the same
console.log(numary.toString());

let num=numary.concat(numary1); // no change is made in orginal array insted of change it return join of both array
console.log(num);

numary.unshift(0); //add to start of the array
console.log(numary);
numary.shift(); //delete from start also it return the same element which is deleted
console.log(numary);

let sliceedarray=numary.slice(1,2); //no change is made in orginal array
console.log(sliceedarray);

//splice(startIndx,delCount,newElem..) changes are made in orignal array;
numary.splice(1,2,102,103); //can be used for adding element/delete elemnet /replace element
console.log(numary);
// numarry.slice(4) will act as slice it will removwe all element afte index 4

