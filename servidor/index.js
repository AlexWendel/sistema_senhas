import {Server} from "socket.io";

let lista_de_senhas = [1,2,3,4,5,6,7];

let lista_de_guiches = {
    1: null,
    2: null,
    3: null
}

const servidor = new Server();


servidor.on("connection", (socket) => {
    socket.on("solicitar_senha", (guiche) => {
        let senha = lista_de_senhas.shift(); // Pega senha
        lista_de_guiches[guiche] = senha; // Vincula guiche

        socket.emit("mostra_senha", guiche, senha);
        socket.emit("resposta_senha", senha);
    });
});