let names: Array<{
    fName : string,
    lName : string
}> = [{
    fName: "Mark",
    lName: "Millions"
},{
    fName: "Pete",
    lName: "Best"
},{
    fName: "John",
    lName: "Paul"
},{
    fName: "Ringo",
    lName: "Star"
},{
    fName: "David",
    lName: "Bowie"
}]

for (let val of names){
    document.getElementById("output").innerHTML += val.fName + " " + val.lName + "<br><br>";
}

for (let i in names){
    document.getElementById("output").innerHTML += i + "<br><br>";
}

for (let i in names){
    document.getElementById("output").innerHTML += i + " " + names[i].fName + " " + names[i].lName + "<br><br>";
}





