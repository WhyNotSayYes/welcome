let text = "Здесь дизайн становится сайтом";
let delay = 100; // cкорость
let elem = document.getElementById("autoText");
 
let print_text = function(text, elem, delay) {
    if(text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function() {
                print_text(text.slice(1), elem, delay); 
            }, delay
        );
    }
}
print_text(text, elem, delay);