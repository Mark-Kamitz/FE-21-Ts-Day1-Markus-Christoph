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

for (let i = 1; i < 10; i++) {
    document.getElementById("output").innerHTML += names.first + " " + names.last + "<br>";
}

let array = [names];

for (let i = 1; i < 10; i++) {
    array.push(names);
}


for (let i of array){
    document.getElementById("output").innerHTML += i.first + " " + i.last + "<br><br>";
}    





