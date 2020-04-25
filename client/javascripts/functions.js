// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//-----------------------------------------------
//base Reverse word function
let revWord = (str) => {
  let result = "";
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};

//revWords1
let revWords1 = (sent) => {
  let arr = sent.split(" ");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    result += revWord(arr[i]) + " ";
  }
  return result;
};

console.log(revWords1("Web App Dev"));




//----------------------------------------------
//Reverse words 2
let rev2 = (str) => {
  //turn string into array
  let arr = str.split("");
  let result = "";
  arr.forEach((char)=>{
    result = char + result;
  })
  return result;
};

let revWords2 = (sent) => {
  let arr = sent.split(" ");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    result += rev2(arr[i]) + " ";
  }
  return result;
};

console.log(revWords2("Web App Dev"));



//----------------------------------------------
//Reverse words 3
let rev3 = (str) => {
  let arr = str.split("");
  let result = "";
  for (char in arr){
    result = char + result;
  }
  return result;
};

let revWords3 = (sent) => {
  let arr = sent.split(" ");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    result += rev3(arr[i]) + " ";
  }
  return result;
};

console.log(revWords3("Web App Dev"));


































//
