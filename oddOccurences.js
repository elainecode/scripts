
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let obj = {}
    for(let i = 0; i < A.length; i++) {
        if(obj[A[i]]) {
            obj[A[i]] += 1
        }
        if(!obj[A[i]]) {
            obj[A[i]] = 1
        }
    }
    
    for(key in obj) {
        if(obj[key]% 2 != 0) {
          return parseInt(key)
        }
    }
}