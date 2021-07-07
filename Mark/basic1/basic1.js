// console.log("hello world");
// document.write("what is this :)");
for (var a = 1; a < 10; a++) {
    document.write("<p>");
    for (var i = 0; i < 10; i++) {
        document.write(i + " x " + a + " = " + (i * a) + "<br>");
    }
    document.write("</p>");
}
