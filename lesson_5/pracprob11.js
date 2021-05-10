let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map (obj => { 
  let increObj = {};

  for (let key in obj) {
    increObj[key] = obj[key] + 1;
  }

  return increObj;
});

//Notes: The key here is that the return statement returns an altered object for each of the corresponding
//objects in 'arr'. 
