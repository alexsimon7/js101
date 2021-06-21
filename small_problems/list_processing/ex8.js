function buyFruit(array) {
  let groceryList = [];
  for (let index = 0; index < array.length; index++) {
    let numberOfFruit = array[index][1];
    while (numberOfFruit > 0) {
      groceryList.push(array[index][0]);
      numberOfFruit -= 1;
    }
  }
  return groceryList;
}





console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
