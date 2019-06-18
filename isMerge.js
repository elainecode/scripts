isMerge = (str1, str2, str3) => {

  let j = 0
  let k = 0

  str1 = str1.split('')
  str2 = str2.split('')
  str3 = str3.split('')

  let results = ""
  
  if (str1[0] != str2[0]) {
    return false
  }

    let array = [...str1]
    for(let i = 0; i < array.length; i++){
        if(array[i] === str2[j]){
          results += str2[j]
          j++
        } else if(array[i] === str3[k]){
          results += str3[k]
          k++
        } else {
          console.log("False", results)
          return false
      }
  }
  console.log("True", results)
  return true
}


// Test.expect(isMerge('codewars', 'code', 'wars'));
// Test.expect(isMerge('codewars', 'cdw', 'oears'));
// Test.expect(!isMerge('codewars', 'cod', 'wars'));
