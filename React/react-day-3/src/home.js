const list = [
  {
    id: 1,
    title: "React JS",
    url: "https://react.dev/",
    author: "Jordan Walke",
  },
  {
    id: 2,
    title: "Node JS",
    url: "https://nodejs.org/en",
    author: "Ryan Dahl",
  },
];

function items(props, props1) {
  return props.author + " " + props1;
}

const finalResult = list.map((item) => items(item, "manish"));
console.log(finalResult);
