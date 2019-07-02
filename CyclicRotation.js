function rotate(num, array){
  count = array.length % num

  for(let i = 0; i < count; i++) {
    array.push(array.shift())
  }
  return array
}

function rotate(num, array){
 let len =  array.length
 let count = num % len
 const result = []
  for(let i = 0; i < len; i++) {
  result[(i + count) % len] = array[i]
  }
  return result
}

rotate(3, [1,2,3,4,5,6,7,8,9,10])