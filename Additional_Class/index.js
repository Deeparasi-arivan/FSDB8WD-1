// this??
let operation = {
  a: 1,
  b: 2,
  add: function () {
    console.log("a(method) = ", this.a);
    console.log("b(method) = ", this.b);
    var print = function (name, designation) {
      console.log("a(normal function) = ", this.a);
      console.log("b(normal function) = ", this.b);
      console.log("name(normal function) = ", name);
      console.log("designation(normal function) = ", designation);
    }.apply(this, ["Manikandan Anbalagan", "Solutions Architect"]);
    //.call(this, "Manikandan Anbalagan", "Solutions Architect");
    //.bind(this, "Manikandan Anbalagan", "Solutions Architect");
    // print();
  },
};

operation.add();
