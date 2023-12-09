/* instalar os pacotes para criar um servidor básico que interage com 
o banco de dados: npm install express mysql */

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'rotamemory.db',
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão bem-sucedida ao banco de dados!');
    }
});

// Rotas para interagir com o banco de dados (exemplos)
app.post('/cadastrar/falecido', (req, res) => {
    const { nome, foto, data_nascimento, data_obito, nome_mae, nome_pai, profissao, localizacao_sepultura, participacao_em_fatos } = req.body;
    const query = 'INSERT INTO falecido (nome, foto, data_nascimento, data_obito, nome_mae, nome_pai, profissao, localizacao_sepultura, participacao_em_fatos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [nome, foto, data_nascimento, data_obito, nome_mae, nome_pai, profissao, localizacao_sepultura, participacao_em_fatos], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar falecido:', err);
            res.status(500).send('Erro ao cadastrar falecido.');
        } else {
            console.log('Falecido cadastrado com sucesso!');
            res.status(200).send('Falecido cadastrado com sucesso!');
        }
    });
});

// Repita o processo para outras rotas (cadastro de cemitério, mensagens, etc.)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


//No seu script Node.js ou arquivo JS principal, utilize o pacote MySQL2 
//e a configuração do banco de dados para realizar operações no banco de dados.

//const mysql = require('mysql2');
//const dbConfig = require('./caminho/do/seu/arquivo/db-config');

// Criar uma conexão
//const connection = mysql.createConnection(dbConfig);

// Exemplo de consulta
//connection.query('SELECT * FROM sua_tabela', (error, results) => {
//    if (error) {
//        console.error('Erro na consulta:', error);
//        return;
//    }

//    console.log('Resultados:', results);
//});

// Fechar a conexão quando terminar
//connection.end();
