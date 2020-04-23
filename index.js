const express = require('express');

const server = express();

server.use(express.json());

const users = ["Cleiton", "Sabrina", "Paulo"]

/**Listar Usuario */
server.get('/users', (req, res) =>{

    return res.json(users);
});

/**Criar Usuario */
server.post('/users', (req, res) =>{
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

/**Editar Usuario */
server.put('/users/:id', (req, res) =>{
    const {id} = req.params;
    const {name} = req.body;

    users [id] =name;

    return res.json(users);
});
/**Deletar Usuario */
server.put('/users/: id', (req, res) => {
    users.slice(id, 1);
});

server.listen(3000);