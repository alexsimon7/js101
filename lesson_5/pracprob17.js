function generateEmptyUUID () {
  let emptyArray = [];
  emptyArray.length = 5;
  for (let index = 0; index < emptyArray.length; index++) {
    emptyArray[index] = [];
    if (index === 0) {
      emptyArray[index].length = 8;
    } else if (index === 4) {
      emptyArray[index].length = 12;
    } else {
      emptyArray[index].length = 4;
    }
  }
  return emptyArray;
}

function randomUUIDGen () {
  let value = (Math.floor(Math.random() * 16));
  switch (value) {
    case 10:
      return 'a';
    case 11:
      return 'b';
    case 12:
      return 'c';
    case 13:
      return 'd';
    case 14:
      return 'e';
    case 15:
      return 'f';
    default:
      return value;
  }
}

function populateUUID (popArray) {
  for (let index = 0; index < popArray.length; index++) {
    for (let subArray = 0; subArray < popArray[index].length; subArray++) {
      popArray[index][subArray] =  randomUUIDGen();
    }
  }
  return popArray;
}

function getUUID () {
  return populateUUID(generateEmptyUUID()).join('-').replaceAll(',', '');
}

console.log(getUUID());


