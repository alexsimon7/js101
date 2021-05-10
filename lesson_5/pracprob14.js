let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

/*
let objCaps = [];

for (let produce in obj) {
  if (obj[produce].type  === 'fruit') {
    let colorArr = []
    obj[produce].colors.forEach (color => {
      colorArr.push(color[0].toUpperCase() + color.slice(1))
    });
    objCaps.push(colorArr);
  } else if (obj[produce].type === 'vegetable') {
    objCaps.push(obj[produce].size.toUpperCase());
  }
}

console.log(objCaps);

*/
let capitalized = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalized(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});


