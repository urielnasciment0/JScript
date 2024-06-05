var btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    var real = document.querySelector("#real");

    var value = real.value;

    var result = value / 5

    document.querySelector("#resposta").textContent = "$" + result

});





