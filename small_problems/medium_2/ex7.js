function bubbleSort(array) {
  let done;
  do {
    done = 'yes'; 
    for (let index = 0; index < array.length; index++) {
      if (array[index] > array[index + 1]) {
          [array[index], array[index +1 ]] = [array[index + 1], array[index]];
//        let temp = array[index];
//        array[index] = array[index + 1];
//        array[index + 1] = temp;
        done = 'no';
      }
    }
  } while (done === 'no');
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
