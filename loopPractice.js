function f1(){
    for(i=1;i<=5;i++){
    row="";
    for(j=1;j<=i;j++){
        row+="*";
    }
    console.log(row);
}
}
function f2(){
    str="xyxvXyx";
    strSize=str.length;
    isp=1;
    for(i=0;i<strSize/2;i++){
        if(str[i]!=str[strSize-i-1]) isp=0
    }
    console.log(isp);
}
function f3(){
    const num=1232;
    let temp=num;
    let num1=0;
    while(temp>0){
        let ld=temp%10;
        temp=Math.floor(temp/10);
        num1=(num1*10)+ld;
    }
    if(num1==num) console.log(1)
    else console.log(0)
}
function f4(){
    for(i=1;i<=100;i++){
        let fc=0;
        for(j=1;j<=i;j++){
            if(i%j==0) fc+=1;
        }
        if(fc==2) console.log(i);
    }
}
function f5(x){
    function f5a(){
        if(x<=1) return x;
        else return f5(x-1) + f5(x-2);
    }
    for(i=0;i<x;i++) console.log(f5(i));
}
function f6(){
    const str ="Pawan";
    let vowel=['a','e','i','o','u','A','E','I','O','U'];
    let vc=0;
    for( i in str) 
        if(i in vowel) vc+=1;
    console.log(vc);
}
function f7(){
    let price=[299,399,199,499];
    i=0;
    for(let p of price){
        let output=`Value of Product at index ${i} is ${p}`
        console.log(output);
        i++;
    }
}
let price=[299,399,199,499];
    i=0;
    for(let p of price){
        let output=`Value of Product at index ${i} is ${p}`
        console.log(output);
        i++;
    }
