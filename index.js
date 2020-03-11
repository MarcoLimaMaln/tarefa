const express = require('express');
const server = express();
server.use (express.json());
const tarefas = [
    {
        id: 1,
        descricao: "Comprar pão",
        finalizado: false
    }
];

server.get('/tarefa', function(request, response) {
    return response.json(tarefas);
});

server.post('/tarefa', function(request, response){
    const novatarefa = request.body;
    tarefas.push(novatarefa);
    return response.status(201).send;
});



server.listen(process.env.port || 3000);