//
//
//

var arr = [43, 434, 3434, 33];
var arr2 = [43, 5, 6576, 6];
// arr.push(32);

// arr = [...arr, ...arr2];

// arr = arr.concat(arr2);

// console.log(arr);

// console.log(arr.slice(0, 2));

arr.map((value, index) => {
  //   console.log("Map --", value * value);
});

arr = [
  { name: "s1", age: 25 },
  { name: "s2", age: 2 },
  { name: "s3", age: 34 },
  { name: "s4", age: 45 },
  { name: "s5", age: 76 },
  { name: "s6", age: 22 },
];

let filteredData = arr.forEach((value) => value.age == 30);

console.log(filteredData);
