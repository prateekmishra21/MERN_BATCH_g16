// setTimeout(() => {
//   console.log("Hello all");
// }, 3000);

// let getData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("It's Done");
//     reject("Error");
//   });
// });

// console.log("Before Promiss");
// getData.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// console.log("After Promiss");

// const findReminder = (v1, v2) => {
//   return new Promise((resolve, reject) => {
//     if (v1 % v2 === 0) {
//       resolve("No Reminder");
//     } else reject("Reminder");
//   });
// };

// findReminder(3, 2)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log("Catch", res);
//   });
const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Its Done");
    }, 5000);
  });
};

getData().then(
  (b) => {
    console.log(b);
  },
  (r) => {
    console.log(r);
  }
);
