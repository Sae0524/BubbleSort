/* Bubble Sort */

let unsortedArr = [10,3,2,7,9,4,6,1,5,8];


let swapped;

function bubbleSort(arr) {
  swapped = false;
  let end = arr.length -1; 
  for (let i = 0; i < end; i++) {
    if(arr[i] > arr[i + 1]) {
      swapped = true;
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] =temp
    }
  }
  end--;
}

do {
  bubbleSort(unsortedArr);
} while (swapped);

console.log(unsortedArr);

//  lines[i] = Math.floor(Math.random() * 1000) + 1;