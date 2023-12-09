// Exemplo de código para verificar a existência do cemitério
const checkCemeteryExistence = () => {
    const nomeCemiterio = document.getElementById('nomeCemiterio').value;
    const cidade = document.getElementById('cidade').value;
    const query = 'SELECT * FROM cemeteries WHERE name = ? AND city = ?';

    connection.query(query, [cemeteryName, city], (error, results) => {
        if (error) {
            console.error('Erro ao verificar cemitério:', error);
            return;
        }

        if (results.length > 0) {
            console.log('Cemitério já cadastrado. Informe o administrador.');
            // Redirecione ou informe o administrador conforme necessário
        } else {
            // Prossiga com o cadastro do cemitério
            cadastrarCemiterio();
        }
    });
};
fetch('http://localhost:3000/admin/cadastrar/cemiterio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nomeCemiterio, cidade }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.exists) {
            console.log('Cemitério já cadastrado. Informe o administrador.');
            // Adicione lógica para informar o administrador ou redirecionar conforme necessário
        } else {
            cadastrarCemiterio();
        }
    })
    .catch(error => {
        console.error('Erro ao verificar cemitério:', error);
        // Adicione lógica para lidar com erros, se necessário
    });
};
// Função para cadastrar um cemitério (admin)
function cadastrarCemiterio() {
    const nomeCemiterio = document.getElementById('nomeCemiterio').value;
    const fotoCemiterioInput = document.getElementById('fotoCemiterio');
    const fotoCemiterio = fotoCemiterioInput.files[0];
    const endereco = document.getElementById('endereco').value;
    const noticias = document.getElementById('noticias').value;
    const horariosFuncionamento = document.getElementById('horariosFuncionamento').value;
    const cidade = document.getElementById('cidade').value;

    // Adicione os outros campos do cemitério conforme necessário

    const formData = new FormData();
    formData.append('nome', nomeCemiterio);
    formData.append('foto', fotoCemiterio);
    formData.append('endereco', endereco);
    formData.append('noticias', noticias);
    formData.append('horariosFuncionamento', horariosFuncionamento);
    formData.append('cidade', cidade);

    // Adicione outros campos do cemitério ao formData conforme necessário

    



// Exemplo de código para verificar a existência do falecido no cemitério
const checkDeceasedExistenceInCemetery = () => {
    const nomeFalecido = document.getElementById('nomeFalecido').value;
    const nomeMae = document.getElementById('nomeMae').value;
    const nomeCemiterio = document.getElementById('nomeCemiterio').value;
    const query = 'SELECT * FROM deceased WHERE name = ? AND mother_name = ? AND cemetery = ?';

    connection.query(query, [deceasedName, cemeteryName], (error, results) => {
        if (error) {
            console.error('Erro ao verificar falecido no cemitério:', error);
            return;
        }

        if (results.length > 0) {
            console.log('Falecido já cadastrado neste cemitério. Informe o usuário.');
            // Redirecione ou informe o usuário conforme necessário
        } else {
            // Prossiga com o cadastro do falecido
        }
    });
};
fetch('http://localhost:3000/admin/cadastrar/falecido', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nomeFalecido, nomeMae, nomeCemiterio }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.exists) {
            console.log('Falecido já cadastrado neste cemitério. Informe o usuário.');
            // Adicione lógica para informar o usuário ou redirecionar conforme necessário
        } else {
            cadastrarFalecido();
        }
    })
    .catch(error => {
        console.error('Erro ao verificar falecido:', error);
        // Adicione lógica para lidar com erros, se necessário
    });
}
// Função para cadastrar um falecido (admin)
function cadastrarFalecido() {
    const nomeFalecido = document.getElementById('nomeFalecido').value;
    const fotoFalecidoInput = document.getElementById('fotoFalecido');
    const fotoFalecido = fotoFalecidoInput.files[0];
    const dataNascimento = document.getElementById('dataNascimento').value;
    const dataObito = document.getElementById('dataObito').value;
    const nomeMae = document.getElementById('nomeMae').value;
    const nomePai = document.getElementById('nomePai').value;
    const profissao = document.getElementById('profissao').value;
    // Adicione os outros campos do falecido conforme necessário
    const formData = new FormData();
    formData.append('nome', nomeFalecido);
    formData.append('foto', fotoFalecido);
    formData.append('dataNascimento', dataNascimento);
    formData.append('dataObito', dataObito);
    formData.append('nomeMae', nomeMae);
    formData.append('nomePai', nomePai);
    formData.append('profissao', profissao);

    // Adicione outros campos do falecido ao formData conforme necessário