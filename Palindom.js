let number = -121
let number1 = number.toString()
let number2 = number1.toString().split('').reverse().join('');

let flag = true


for(let x in number1){
    if(number1[x] ==  number2[x]){
        continue
        
    }else{
         flag = false
    }
}

console.log(flag)

