let output = document.getElementById("output");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "AC":
                output.innerText = "";
                break;
            case "=":
                try{
                    output.innerText = eval(output.innerText);
                } catch {
                    output.innerText = "erreur"
                }
                break;
            case "←":
                if (output.innerText){
                  output.innerText = output.innerText.slice(0, -1);
                }
                break;
            default:
                output.innerText += e.target.innerText;
        }
    });
});

// https://dev.to/javascriptacademy/create-a-simple-calculator-using-html-css-and-javascript-4o7k