// Basic 1
// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let a of arr) {
//     for(let b of arr) {
//         document.write(a + ' x ' + b + ' = ' + a*b + ' | ');
//     }
//     document.write('<br><br>');
// }
// Basic 2
// let myself: Array<{
//     fName: string,
//     lName: string
// }> = [{
//     fName: 'Christoph',
//     lName: 'Schufer'
// }]
// // same output --> for of loop targets the object and for in loop targets the index
// for(let val of myself) {
//     document.getElementById('demo').innerHTML += `firstname: ${val.fName}<br>lastname: ${val.lName}<br>`;
// }
// for(let val in myself) {
//     document.getElementById('demo').innerHTML += `<br>firstname: ${myself[val].fName}<br>lastname: ${myself[val].lName}`;
// }
// setTimeout(() => {
//     myself.forEach(function(value) {
//         for(let i = 1; i <= 10; i++) {
//             document.getElementById('demo').innerHTML += `<br>${i}:${value.fName}`;
//         }
//     })
// }, 5000);
// Basic 3
{
    var array = ['Serri', 'Irati', 'Acilio'];
    document.getElementById('demo').innerHTML += "Only the index: <br>";
    for (var index in array) {
        document.getElementById('demo').innerHTML += index + "<br>";
    }
    document.getElementById('demo').innerHTML += "<br>Only the value: <br>";
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        document.getElementById('demo').innerHTML += value + "<br>";
    }
    document.getElementById('demo').innerHTML += "<br>Index and value: <br>";
    for (var index in array) {
        document.getElementById('demo').innerHTML += index + ": " + array[index] + "<br>";
    }
}
