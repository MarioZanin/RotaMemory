// Exemplo de configuração do banco de dados
const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'rotamemory.db',
};

module.exports = dbConfig;

//Utilize um pacote MySQL para Node.js, como o mysql2, para se comunicar com o banco de dados.
// No terminal, vá até o diretório do seu projeto e execute:
// npm install mysql2 