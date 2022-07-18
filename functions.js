//
//
//
//

function Add(v1, v2, v3 = 35) {
  return v1 + v2 + v3;
}

const result = Add(32, 44);

// console.log(result);
//
//
//
const getMul = (x, y) => {
  return x * y;
};
const Method = (x, y, fun) => {
  return fun(x, y);
};
const Method2 = (fun) => {
  return fun(5, 3, getMul);
};
var out = Method2((x, y, fun) => {
  return fun(x, y);
});
console.log(out);
