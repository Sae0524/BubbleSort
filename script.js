/* Bubble Sort */

function getRandomInt(max) {
  //Random array
  return Math.floor(Math.random() *Math.floor(max));
}

let array = [];
let max = 1000
let length = 30
for (let i = 1; i < length; i++) {
  array.push(getRandomInt(max));
}


let swapped;

function bubbleSort(array) {
  swapped = false;
  let end = array.length -1; 
  for (let i = 0; i < end; i++) {
    if(array[i] > array[i + 1]) {
      swapped = true;
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] =temp
    }
  }
  end--;
}

do {
  bubbleSort(array);
} while (swapped);

console.log(array);

