// console.log("hello world");
// document.write("what is this :)");


for (let a = 1; a<10; a++){
    document.write("<p>");
    for (let i = 0; i < 10; i++) {
        document.write(i + " x " + a + " = " + (i*a) + "<br>");
    }
    document.write("</p>"); 
}