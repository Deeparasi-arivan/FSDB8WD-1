const http = require("http");

http.get("http://jsonplaceholder.typicode.com/posts/1", (res) => {
  console.log(res.statusCode);
  //display data
  res.on("data", (data) => {
    console.log(data.toString());
  });
});

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
