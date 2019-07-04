
function frogJump(X, Y, D) {
   let curr = X
    let count = 0
    while(curr < Y) {
        curr += D
        count++
    }
    return count
}