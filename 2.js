const student ={
    studentName:"Pawan",
    studentId:12409922,
    studentCgpa:7.95,
    studentMobile:9608364081
};
for( i in student){
    console.log(student[i])
}
//STRING
//ALL THINGS ARE SAME
let obj={
    item:"Pen",
    price:10
};
//Templet Literals(for printing without console.log as it will use , "" many times)
let output=`The cost of ${obj.item} is ${obj.price} ruppes`;
console.log(output);
//some function
console.log(output.toUpperCase());
console.log(output.toLowerCase());
console.log(output.trim());
console.log(output.slice(1,4));
console.log(output.concat(str2));
console.log(output.replace(onload,newv));
console.log(output.replace());


