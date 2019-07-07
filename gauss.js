function solution(A) {
    var length = A.length;
    var sum = ((length + 1) /2) * (length + 2);

    var sumMinusMissing = 0;
    for (i = 0; i < length; i++) { 
        sumMinusMissing += A[i];
    }
    return sum - sumMinusMissing;
}