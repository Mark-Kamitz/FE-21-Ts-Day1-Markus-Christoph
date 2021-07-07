// document.write("hello again");
// let names: Array<{
//     fName : string,
//     lName : string
// }> = [{
//     fName: "Mark",
//     lName: "Millions"
// }]
var names = {
    first: 'Mark',
    last: 'Millions'
};
document.getElementById("output").innerHTML += names.first + " " + names.last + "<br><br>";
for (var i = 1; i < 10; i++) {
    document.getElementById("output").innerHTML += names.first + " " + names.last + "<br>";
}
var array = [names];
for (var i = 1; i < 10; i++) {
    array.push(names);
}
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var i = array_1[_i];
    document.getElementById("output").innerHTML += i.first + " " + i.last + "<br><br>";
}
