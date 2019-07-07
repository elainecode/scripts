function gauss(A) {
    
    let len = A.length + 1
    let sum = ((1 + len) * len) / 2
    let sum2 = 0
    for(let i = 0; i < A.length; i++){
         sum2 += A[i]
    }
    
    return sum - sum2
}