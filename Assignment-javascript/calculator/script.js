let input = document.getElementById('inputBox');
let btn = document.querySelectorAll('button');


let string = "";
let arr = Array.from(btn);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.textContent == 'AC') {
            string = "";
            input.value = string;
        }
        else {
            string += e.target.textContent;
            input.value = string;
            console.log(string);
        }

    })
})
