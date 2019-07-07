
function frogJump(X, Y, D) {
   
   //solution with better time complexiy:
   // Let J equal number of jumps
   // Y =  X + (J * D)
   // J = (Y - X)/D 
   //return Math.ceil((Y - X )/ D)

   let curr = X
   let count = 0
    while(curr < Y) {
        curr += D
        count++
    }
    return count
}