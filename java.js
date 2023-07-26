 let int = [20,10,40];
 int.sort();
 let sum = int.reduce(myfunction);

 function myfunction(total,value,index,array){
 return total + value;
 }

 console.log("MIN-"  + int[0] +","+ "MAX-"+int[2] + ","+ "sum-" + sum)



let K =  ["Ed","flux","black", "Technology's"];
let U = 0 ;
let M ;
evaluate();
 function evaluate(){
    for(let i=0;i<K.length;i++){
        if(K[i].length>U){
             U=K[i].length;
             M=K[i];

        }
    }
    
 }
 console.log("the longest string is" + M );
console.log(K.indexOf(M));


let x = "JAVASCRIPT";
const v = "a,e,i,o,u";
let count = 0;
let user = x.toLowerCase();
vowels();
function vowels(){
    for(let i=0;i<user.length;i++)
{
    for(let j=0;j<v.length;j++)
    {
        if(user[i]==v[j])
        count++;
    }
}
return count;
}

console.log("The Vowels in the given string is " + count)