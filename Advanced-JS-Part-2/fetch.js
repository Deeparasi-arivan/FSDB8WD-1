// fetch("https://reqres.in/api/users", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then(function (response) {
//     // console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data.data);
//   });

async function createUser() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("New User Created:", data);
  } catch (error) {
    console.log("Error occured:", error);
  }
}

createUser();
