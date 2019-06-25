function solution(N) {
    let binary = ""
    let number = N
    while(number > 0){
        binary = number%2 + binary
        number = Math.floor(number/2)
    }
 let array = binary.split("")
 
 let max = 0
 let count = 0
 for(let i = 0; i < array.length; i++){
     if(array[i] === "1") {
         if(count > max) {
             max = count
             count = 0
         }
     }
    if(array[i] === "0"){
        count += 1
    }
     
 }
 

return max

}