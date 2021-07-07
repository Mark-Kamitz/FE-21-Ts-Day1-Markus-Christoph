var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var a = arr_1[_i];
    for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
        var b = arr_2[_a];
        document.write(a + ' x ' + b + ' = ' + a * b + ' | ');
    }
    document.write('<br><br>');
}
var myself = [{
        fName: 'Christoph',
        lName: 'Schufer'
    }];
// same output --> for of loop targets the object and for in loop targets the index
for (var _b = 0, myself_1 = myself; _b < myself_1.length; _b++) {
    var val = myself_1[_b];
    document.getElementById('demo').innerHTML += "firstname: " + val.fName + "<br>lastname: " + val.lName + "<br>";
}
for (var val in myself) {
    document.getElementById('demo').innerHTML += "<br>firstname: " + myself[val].fName + "<br>lastname: " + myself[val].lName;
}
setTimeout(function () {
    myself.forEach(function (value) {
        for (var i = 1; i <= 10; i++) {
            document.getElementById('demo').innerHTML += "<br>" + i + ":" + value.fName;
        }
    });
}, 5000);
{
    var array = ['Serri', 'Irati', 'Acilio'];
    document.getElementById('demo').innerHTML += "<br>Only the index: ";
    for (var index in array) {
        document.getElementById('demo').innerHTML += "<br>" + index + "<br>";
    }
    document.getElementById('demo').innerHTML += "<br>Only the value: ";
    for (var _c = 0, array_1 = array; _c < array_1.length; _c++) {
        var value = array_1[_c];
        document.getElementById('demo').innerHTML += "<br>" + value + "<br>";
    }
    document.getElementById('demo').innerHTML += "<br>Index and value: ";
    for (var index in array) {
        document.getElementById('demo').innerHTML += "<br>" + index + "-->" + array[index] + "<br>";
    }
}
