const contas = [
    {
        email: "astrodev@labenu.com",
        password: "abc123",
    },
    {
        email: "bananinha@gmail.com",
        password: "bananinha",
    },
];

function validaLogin(email, password) {
    if (email.includes("@") && password.length >= 6) {
        for (let i = 0; i < contas.length; i++) {
            const validaEmail = contas[i].email === email;
            const validaPassword = contas[i].password === password;
            const autorizar = validaEmail && validaPassword;
            if (autorizar) {
                return "Login bem sucedido!";
            } else {
                return "E-mail ou senha incorretos";
            }
        }
    } else {
        return "E-mail inválido";
    }
}

console.log(validaLogin("astrodev@labenu.com", "abc123"));
console.log(validaLogin("bananinha@gmail.com", "banana"));
console.log(validaLogin("astrodev.labenu.com", "abc123"));
