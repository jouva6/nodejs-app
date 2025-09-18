const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => {
res.send('<h1 style="color:red;">Bienvenue sur mon app Node.js modifiée</h1><p style="color:purple;">Page mise à jour</p');

});
app.listen(port, () => console.log(`App running on port ${port}`));
