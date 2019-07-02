function rotate(num, array){
  count = array.length % num

  for(let i = 0; i < count; i++) {
    array.push(array.shift())
  }
  return array
}