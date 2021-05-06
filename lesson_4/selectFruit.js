let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produce) {
  let fruit = {};
  for (let type in produce) {
    let currentType = produce[type];
    if (currentType === 'Fruit') {
      fruit[type]  = 'Fruit';
    }
  }
  return fruit;
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

/*
Per the solution, the below function will also work:

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = o; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue'
    }
  }
  return selectedFruits;
}





*/
