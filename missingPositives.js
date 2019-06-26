function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sorted = [...A].sort((a, b) => a - b)
    let smallest = sorted[sorted.length - 1] + 1 
    if(sorted.length === 1 && sorted[0] != 1 || smallest <= 0 || sorted[0] > 0 && sorted[0] != 1) {
        smallest = 1
        return smallest
    }
    for(let i = sorted[0]; i <= sorted[sorted.length - 1]; i ++) {
        if(A.indexOf(i) < 0) {
            smallest = i
            if(smallest > 0) {
                return smallest
            }
        }
    }
    return smallest
}