//Callback
// const fetchUser = function (username, callback) {
//   setTimeout(function () {
//     callback(username);
//   }, 2000);
// };

// let promiseObj = new Promise(function (resolve, reject) { //Producer code });
// const fetchUser = function (username) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("Fetching user from the API...");
//       resolve(username);
//     }, 2000);
//   });
// };

// console.log(fetchUser("John"));

// const fetchUserPhotos = function (username, callback) {
//   setTimeout(function () {
//     console.log("Fetching photos for", username);
//     callback(["Photo 1", "Photo 2"]);
//   }, 2000);
// };
// const fetchPhotoDetails = function (photo, callback) {
//   setTimeout(function () {
//     console.log("Now we have the photo details");
//     callback("details.... " + photo);
//   }, 2000);
// };

// fetchUser("John", function (user) {
//   console.log("Your name is:", user);
//   fetchUserPhotos(user, function (photos) {
//     console.log("Your photos are:", photos);
//     fetchPhotoDetails(photos[0], function (photoDetails) {
//       console.log("Your photo details are:", photoDetails);
//     });
//     fetchPhotoDetails(photos[1], function (photoDetails) {
//       console.log("Your photo details are:", photoDetails);
//     });
//   });
// });

// Syntax of promise object
//let promiseObj = new Promise(function (resolve, reject) {
//Producer code
//});

// // Sample code
// let promiseObj = new Promise(function (resolve, reject) {
//   console.log("Getting name from DB....");
//   setTimeout(function () {
//     resolve("John");
//     // reject("Error occured");
//   }, 2000);
// });

// // defining the consumer
// promiseObj
//   .then(function (name) {
//     console.log("Name received from DB:", name);
//   })
//   .catch(function (error) {
//     console.log("Error occured:", error);
//   });

function makeDosa() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Making dosa");
      resolve("Dosa");
    }, 2000);
  });
}

function makeChutney() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Making chutney");
      //   resolve("Chutney");
      reject("Error occured");
    }, 2000);
  });
}

function makeCoffee() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Making coffee");
      resolve("Coffee");
    }, 2000);
  });
}

//async & await

async function newServeOrder() {
  try {
    await makeDosa();
    await makeChutney();
    await makeCoffee();
    console.log("All items are ready! Enjoy your breakfast!");
  } catch (error) {
    console.log("Error occured:", error);
  }
}

// promise chaining
function serveOrder() {
  makeDosa()
    .then(function (dosa) {
      console.log("Dosa is ready");
      return makeChutney();
    })
    .then(function (chutney) {
      console.log("Chutney is ready");
      return makeCoffee();
    })
    .then(function (coffee) {
      console.log("Coffee is ready");
      console.log("Breakfast is ready");
    })
    .catch(function (error) {
      console.log("Error occured:", error);
    });
}

// serveOrder();
newServeOrder();
