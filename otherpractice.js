// p1
let gameNumber=25;
let usrNum=prompt("Guess the Number: ");
while(gameNumber!=usrNum){
    usrNum=prompt("Guess Correct the Number: ");
}
console.log("CONGRATS!!")

// p2
let companyName=["Bloomberg","Microsoft","IBM","Ola"]
companyName.splice(3,1,"UBER");
console.log(companyName);
companyName.shift();
console.log(companyName);
companyName.unshift("Google");
companyName.push("Amazon");
console.log(companyName);