const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let a of arr) {
    for(let b of arr) {
        document.write(a + ' x ' + b + ' = ' + a*b + ' | ');
    }
    document.write('<br><br>');
}

let myself: Array<{
    fName: string,
    lName: string
}> = [{
    fName: 'Christoph',
    lName: 'Schufer'
}]


// same output --> for of loop targets the object and for in loop targets the index
for(let val of myself) {
    document.getElementById('demo').innerHTML += `firstname: ${val.fName}<br>lastname: ${val.lName}<br>`;
}

for(let val in myself) {
    document.getElementById('demo').innerHTML += `<br>firstname: ${myself[val].fName}<br>lastname: ${myself[val].lName}`;
}

setTimeout(() => {
    myself.forEach(function(value) {
        for(let i = 1; i <= 10; i++) {
            document.getElementById('demo').innerHTML += `<br>${i}:${value.fName}`;
        }
    })
}, 5000);

{
    let array: string[] = ['Serri', 'Irati', 'Acilio'];

    document.getElementById('demo').innerHTML += `<br>Only the index: `;
    for(let index in array) {
        document.getElementById('demo').innerHTML += `<br>${index}<br>`;
    }
    document.getElementById('demo').innerHTML += `<br>Only the value: `;
    for(let value of array) {
        document.getElementById('demo').innerHTML += `<br>${value}<br>`;
    }
    document.getElementById('demo').innerHTML += `<br>Index and value: `;
    for(let index in array) {
        document.getElementById('demo').innerHTML += `<br>${index}-->${array[index]}<br>`;
    }
}

