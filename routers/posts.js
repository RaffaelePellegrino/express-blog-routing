const express = require('express')
const router = express.Router();



const post = [
    {
        id: 1,
        title : "Ciambellone",
        contenuto: "Un ciambellone",
        image: "/img/ciambellone.jpeg",
        tag: ["cibo","dolci","tutorial"]
    },
    {
        id:2,
        title : "Ciambellone",
        contenuto: "Un ciambellone",
        image: "/img/craker_barbabietola.jpeg",
        tag: ["cibo","dolci","tutorial"]
    },
    {
        id: 3,
        title : "Craker & Barbabietola",
        contenuto: "Un craker e barbabietola",
        image: "/img/craker_barbabietola.jpeg",
        tag: ["cibo","salato","tutorial"]
    },
    {
        id: 4,
        title : "Pane fritto dolce",
        contenuto: "Pane fritto dolce",
        image: "/img/pane_fritto_dolce.jpeg",
        tag: ["cibo","dolci","tutorial","fritto"]
    },
    {
        id: 5,
        title : "Pasta",
        contenuto: "Pasta con barbabietola",
        image: "/img/pasta_barbabietola.jpeg",
        tag: ["cibo","pasta","tutorial"]
    }
];

// Rotta per "Leggere tutti i post" (Index)
router.get('/', (req, res) => {
    res.send("Lista dei post");
});

// Rotta per "Leggere un singolo post" (Show)
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Mostra il post ${id}`);
});

// Rotta per "Creare un nuovo post" (Create)
router.post('/', (req, res) => {
    res.send("Creazione di un nuovo post");
});

// Rotta per "Aggiornare un post" (Update)
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Aggiornamento del post ${id}`);
});

// Rotta per "Eliminare un post" (Delete)
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Cancellazione del post ${id}`);
});

module.exports = router;