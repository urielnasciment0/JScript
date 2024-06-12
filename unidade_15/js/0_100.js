function imprimir()  {
    document.write("<table class='table-primary'>")
    for (i=1; i<=100; i=i+10){
        document.write("<tr>")
        for (b=i; b<i+10; b++){
            document.write("<td>"+b+"</td>");
        }
        document.write("</tr>")
    }
    document.write("</table>")      
}

var btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    imprimir()

});





