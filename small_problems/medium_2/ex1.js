/*
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

function letterPercentages(string) {
  let stringLength = string.length;
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;
  let percentObj = { lowercase: "0.00", uppercase: "0.00", neither: "0.00" };


  let stringArray = string.split('');
 
  stringArray.forEach((element) => {
    if (!(ALPHA.includes(element.toLowerCase()))) {
      neither += 1;
    } else if (element === element.toLowerCase()) {
      lowercase += 1;
    } else if (element === element.toUpperCase()) {
      uppercase += 1;
    }
  })
  
  percentObj.lowercase = ((lowercase / stringLength) * 100).toFixed(2);
  percentObj.uppercase = ((uppercase / stringLength) * 100).toFixed(2);
  percentObj.neither = ((neither / stringLength) * 100).toFixed(2);
  
  return percentObj;

}
*/

function letterPercentages(string) {
  let stringLength = string.length;
  
  return {
    lowercase: (((string.match(/[a-z]/g) || 
      []).length / stringLength) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || 
      []).length / stringLength) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || 
      []).length/ stringLength) * 100).toFixed(2)
    };
}



console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
