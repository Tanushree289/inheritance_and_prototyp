Write code to explain prototype chaining
let obj1 = {
    fname : "Tanu",
    lname : "Hirawane",
    showDetails : function () {
        console.log(this.fname + " " + this.lname);
    }
}
obj1.showDetails();
let obj2 = {
    fname : "th",
}
obj2.__proto__ = obj1;
obj2.showDetails();
console.log(obj2);
