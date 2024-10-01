// Objects example
var instructor = {
  name: "Manikandan",
  age: 33,
  gender: "Male",
  designation: "Developer",
  city: "Chennai",
};

for (var mani in instructor) {
  console.log("Instructor", mani, ":", instructor[mani]);
}
