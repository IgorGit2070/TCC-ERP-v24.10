const express = require('express');
const produtosRouter = require('./routes/produtos');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();
app.use(cors()); // Habilitar CORS
app.use(express.json());

app.use('/api', produtosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
