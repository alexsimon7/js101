[1, 2, 3].map(num => {
  num * num;
});

//The above returns [undefined, undefined, undefined] because the callback
//does not include a return statement as coded. Had the code omitted the
//{} and moved the callback up one line it would have returned:
//[1, 4, 9].
