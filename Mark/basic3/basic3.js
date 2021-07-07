var names = [{
        fName: "Mark",
        lName: "Millions"
    }, {
        fName: "Pete",
        lName: "Best"
    }, {
        fName: "John",
        lName: "Paul"
    }, {
        fName: "Ringo",
        lName: "Star"
    }, {
        fName: "David",
        lName: "Bowie"
    }];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var val = names_1[_i];
    document.getElementById("output").innerHTML += val.fName + " " + val.lName + "<br><br>";
}
for (var i in names) {
    document.getElementById("output").innerHTML += i + "<br><br>";
}
for (var i in names) {
    document.getElementById("output").innerHTML += i + " " + names[i].fName + " " + names[i].lName + "<br><br>";
}
