document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const searchButton = document.getElementById('search-button');
    const resultSection = document.querySelector('.result-section');
    const condolencesSection = document.querySelector('.condolences-section');
    const condolencesForm = document.getElementById('condolences-form');
    const resultMessage = document.getElementById('result-message');
    const cemeteryNameResult = document.getElementById('cemeteryNameResult');
    const deceasedInfo = document.getElementById('deceasedInfo');
    const deceasedPhotoResult = document.getElementById('deceasedPhotoResult');
    const deceasedNameResult = document.getElementById('deceasedNameResult');
    const cemeteryImageResult = document.getElementById('cemeteryImageResult');
    const sendCondolencesButton = document.getElementById('send-condolences-button');
    const backButton = document.getElementById('back-button');
    const exitButton = document.getElementById('exit-button');
    const mapContainer = document.getElementById('map-container');
    const viewResultButton = document.getElementById('view-result-button');

    let cemeteryCoordinates = { lat: 0, lng: 0 };

    const showResults = () => {
        resultSection.style.display = 'block';
    };

    const hideResults = () => {
        resultSection.style.display = 'none';
        form.style.display = 'block';
    };

    const updateResultMessage = (message) => {
        resultMessage.textContent = message;
    };

    const updateCemeteryName = (name) => {
        cemeteryNameResult.textContent = name;
    };

    const createMap = () => {
        const map = new google.maps.Map(mapContainer, {
            center: cemeteryCoordinates,
            zoom: 15,
        });

        const cemeteryMarker = new google.maps.Marker({
            position: cemeteryCoordinates,
            map: map,
            title: 'Cemitério',
        });
    };

    const updateDeceasedInfo = (photo, name) => {
        const deceasedPhotoPath = photo ? `imagens/${photo}` : 'imagens/falecido.jpg';
    
        deceasedPhotoResult.src = deceasedPhotoPath;
        deceasedPhotoResult.alt = photo ? `Foto de ${name}` : 'Foto de Falecido';
        deceasedPhotoResult.style.display = 'block';
    
        deceasedNameResult.textContent = name;
        deceasedInfo.style.display = 'block';
    };
    
    const updateCemeteryImage = (image) => {
        const cemeteryImagePath = image ? `imagens/${image}` : 'imagens/cemitério.jpg';
    
        cemeteryImageResult.src = cemeteryImagePath;
        cemeteryImageResult.alt = 'Fachada do Cemitério';
        cemeteryImageResult.style.display = 'block';
    };
    
    const handleSearchButtonClick = async () => {
        const cemeteryName = form.cemeteryName.value;
        const deceasedName = form.deceasedName.value;
    
        // Simular busca de coordenadas do cemitério (substituir com lógica real)
        cemeteryCoordinates = { lat: -23.550520, lng: -46.633308 };
    
        showResults();
        updateResultMessage(cemeteryName, deceasedName);
        createMap();
    
        // Simular resultado positivo ou negativo
        const hasResult = Math.random() < 0.5; // 50% de chance de ter um resultado
    
        if (hasResult) {
            // Resultado positivo
            updateCemeteryName(cemeteryName);
    
            // Verifique se a foto do falecido existe no banco de dados, caso contrário, use uma imagem padrão
            const deceasedPhoto = 'caminho/para/foto.jpg'; // Substitua pelo caminho real no banco de dados
            const deceasedImageExists = /* Lógica para verificar se a imagem existe no banco de dados */ true;
    
            if (deceasedImageExists) {
                updateDeceasedInfo(deceasedPhoto, deceasedName);
            } else {
                updateDeceasedInfo(null, 'Não encontrado');
            }
    
            // Verifique se a imagem do cemitério existe no banco de dados, caso contrário, use uma imagem padrão
            const cemeteryImage = 'caminho/para/fachada.jpg'; // Substitua pelo caminho real no banco de dados
            const cemeteryImageExists = /* Lógica para verificar se a imagem existe no banco de dados */ true;
    
            if (cemeteryImageExists) {
                updateCemeteryImage(cemeteryImage);
            } else {
                updateCemeteryImage(null);
            }
        } else {
            // Resultado negativo
            updateCemeteryName('Não encontrado');
            updateDeceasedInfo(null, 'Não encontrado');
            updateCemeteryImage(null);
        }
    };

    const sendCondolences = () => {
        // Adicione lógica para enviar condolências (por exemplo, redirecionar para uma página de confirmação)
        window.location.href = "condolences.html";
    };

    const viewCemeteryInfo = () => {
        // Adicione lógica para visualizar informações do cemitério
        window.location.href = "cemetery-info.html";
    };

    const goBack = () => {
        // Adicione lógica para voltar à página anterior
        window.history.back();
    };

    const handleSearchButtonClick = async () => {
        const cemeteryName = form.cemeteryName.value;
        const deceasedName = form.deceasedName.value;

        // Simular busca de coordenadas do cemitério (substituir com lógica real)
        cemeteryCoordinates = { lat: -23.550520, lng: -46.633308 };

        showResults();
        updateResultMessage(cemeteryName, deceasedName);
        createMap();

        // Simular resultado positivo ou negativo
        const hasResult = Math.random() < 0.5; // 50% de chance de ter um resultado

        if (hasResult) {
            // Resultado positivo
            updateCemeteryName(cemeteryName);
            updateDeceasedInfo('caminho/para/foto.jpg', deceasedName);
            updateCemeteryImage('caminho/para/fachada.jpg');
        } else {
            // Resultado negativo
            updateCemeteryName('Não encontrado');
            updateDeceasedInfo(null, 'Não encontrado');
            updateCemeteryImage(null);
        }
    };

    const handleSendCondolencesButtonClick = () => {
        const deceasedName = document.getElementById('deceased-name').value;
        const name = condolencesForm.name.value;
        const message = condolencesForm.message.value;

        if (deceasedName && name && message) {
            const condolencesList = document.createElement('ul');
            const li = document.createElement('li');
            li.innerHTML = `<strong>${name}:</strong> ${message}`;
            condolencesList.appendChild(li);
            condolencesSection.appendChild(condolencesList);

            // Limpar campos do formulário de condolências
            condolencesForm.reset();
        }
    };

    const viewMore = () => {
        // Adicione lógica para redirecionar para a página com mais informações
        window.location.href = "more-info.html";
    };

    const redirectToResult = () => {
        // Adicione lógica para redirecionar para a página de resultado
        window.location.href = "result.html";
    };

    const handleBackButtonClick = () => {
        hideResults();
    };

    const handleExitButtonClick = () => {
        // Resetar campos do formulário de busca
        form.reset();

        // Esconder a seção de resultados
        resultSection.style.display = 'none';

        // Exibir a seção de busca
        form.style.display = 'block';
    };

    const newSearch = () => {
        // Redirecionar para a página inicial (index.html)
        window.location.href = "index.html";
    };

    const redirectToCondolencesPage = () => {
        // Redirecionar para a página de condolências (condolences.html)
        window.location.href = "condolences.html";
    };

    const redirectToCemeteryInfoPage = () => {
        // Redirecionar para a página de informações do cemitério (cemetery-info.html)
        window.location.href = "cemetery-info.html";
    };

    const redirectToMoreInfoPage = () => {
        // Redirecionar para a página de mais informações (more-info.html)
        window.location.href = "more-info.html";
    };

    // Adicione event listeners aos botões
    searchButton.addEventListener('click', handleSearchButtonClick);
    sendCondolencesButton.addEventListener('click', handleSendCondolencesButtonClick);
    backButton.addEventListener('click', handleBackButtonClick);
    exitButton.addEventListener('click', handleExitButtonClick);
    viewResultButton.addEventListener('click', redirectToResult);
    // Adicione mais event listeners conforme necessário
});
