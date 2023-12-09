const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'rotamemory.db',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conexão ao MySQL estabelecida com sucesso');
});

// Rota para consultar falecidos
app.post('/api/falecidos', (req, res) => {
  const query = 'SELECT * FROM falecido';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao consultar falecidos:', error);
      res.status(500).json({ error: 'Erro interno' });
      return;
    }
    res.json(results);
  });
});

// Rota para consultar falecidos
app.post('/api/cemiterio', (req, res) => {
    const query = 'SELECT * FROM cemiterio';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Erro ao consultar falecidos:', error);
        res.status(500).json({ error: 'Erro interno' });
        return;
      }
      res.json(results);
    });
  });

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});

