function cambiar() {
    let variable =document.getElementById("noche");
    let hojaEstilo = document.getElementById("hoja-estilo");

    variable.classList.toggle("dia")
    if (hojaEstilo.getAttribute("href") === "css/styles.css") {
        hojaEstilo.setAttribute("href", "css/styles_dark.css");
    } else {
        hojaEstilo.setAttribute("href", "css/styles.css");
    }
}

const input = document.querySelector('input');

function agregarAlInput(valor) {
    input.value += valor;
}

function calcular() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}

function borrar() {
    input.value = input.value.slice(0, -1);
}

function borrarTodo() {
    input.value = '';
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const valor = button.innerText;
        
        switch(valor) {
            case '=':
                calcular();
                break;
            case 'AC':
                borrarTodo();
                break;
            case 'B':
                borrar();
                break;
            default:
                agregarAlInput(valor);
        }
    });
});

