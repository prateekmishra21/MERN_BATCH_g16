// var Obj = { Name: "Node", v: 12, Email: "React", Mobile: 434 };
// Key = "v";
// // console.log(Obj[Key]);

// Obj.Name = "Express";
// console.log(Obj.Name);

var Obj = {
  Details: {
    Name: {
      first_name: { n: "" },
      last_name: "",
    },
    Add: "PB",
  },
};

Obj = {
  ...Obj,
  Details: {
    ...Obj.Details,
    Name: {
      ...Obj.Details.Name,
      first_name: { ...Obj.Details.Name.first_name, s: "s" },
    },
  },
};

Obj = {
  L1: {
    L2: {
      L3: { L4: { L5: { L6: "" } } },
    },
  },
};

Key = "Mobile";
Value = 8484;
Obj.Course = "MERN";
// Obj.Details[Key] = Value;
// console.log(Obj);

// -

// var Obj = { Name: "React" };
// Obj = { ...Obj, Email: "", mobile: "" };

// Obj = {
//   ...Obj,
//   Details: {
//     ...Obj.Details,
//     Name: { ...Obj.Details.Name, f_name: "React JS" },
//     Email: "Pr@g.om",
//   },
// };

// console.log(Obj);

var Obj = { Name: "React", Details: {} };
Obj = { ...Obj, Details: { ...Obj.Details, Name: {} } };

Obj = { Name: "React", Details: { Name: {} } };
Obj = {
  ...Obj,
  Details: {
    ...Obj.Details,
    Name: { ...Obj.Details.Name, first_name: "" },
    Address: {},
  },
};

Obj = { Name: "React", Details: { Name: { first_name: "" }, Address: {} } };
Obj = {
  ...Obj,
  Details: {
    ...Obj.Details,
    Name: { ...Obj.Details.Name, last_name: "" },
    Address: { ...Obj.Details.Address, Pin: 232, Address: {} },
  },
};

Obj = {
  Name: "React",
  Details: {
    Name: { first_name: "", last_name: "" },
    Address: { Pin: 232, Address: {} },
  },
};

Obj = {
  ...Obj,
  Details: {
    ...Obj.Details,
    Address: {
      ...Obj.Details.Address,
      Address: { ...Obj.Details.Address.Address, City: "" },
    },
  },
};

console.log(Obj.Details.Address);
