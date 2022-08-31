//
Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent = {
    Name : "World",
    Place : "India",
    Age : 25,
    showDetails : function(){
        console.log(this.Name + " " + this.Place + " " + this.Age);
    }
}

parent.showDetails();


let child = {
    Name : "Kolkata",
    // Place : "WB",
}
child.__proto__  = parent ;
child.showDetails();

console.log(parent);
console.log(child);
