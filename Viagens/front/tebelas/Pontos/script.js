const cardsContainer = document.getElementById('tourist-cards');

fetch('http://localhost:3000/pontos') 
    .then(res => res.json())
    .then(res => {
        cardsContainer.innerHTML = '';

        res.forEach(ponto => {
            const endereco = ponto.endereco.split(',').join('<br>');
            const telefone = ponto.telefone.split(',').join('<br>');

            const card = document.createElement('div');
            card.classList.add('tourist-card');

            card.innerHTML = `
                        <img class="tourist-image" src="${ponto.imagemUrl}" alt="Imagem do ponto turístico">
                        <div class="tourist-title">${ponto.ponto}</div>
                        <div class="tourist-info">
                            <strong>Endereço:</strong> ${endereco}<br>
                            <strong>Telefone:</strong> ${telefone}<br>
                        </div>
                        <button class="valor-button">R$ ${ponto.valor}</button>
                        <div class="action-buttons">
                            <button class="action-button modify" onclick="modifyPonto('${ponto.id}')">Modificar</button>
                            <button class="action-button delete" onclick="deletePonto('${ponto.id}')">Excluir</button>
                        </div>`;

            card.addEventListener('mouseover', () => {
                const actionButtons = card.querySelector('.action-buttons');
                actionButtons.style.display = 'flex';
            });

            card.addEventListener('mouseout', () => {
                const actionButtons = card.querySelector('.action-buttons');
                actionButtons.style.display = 'none';
            });

            card.setAttribute('data-id', ponto.id);
            cardsContainer.appendChild(card);
        });
    });

function modifyPonto(id) {
    fetch(`http://localhost:3000/pontos/${id}`)
        .then(res => res.json())
        .then(ponto => {
            document.getElementById('editTitle').value = ponto.ponto;
            document.getElementById('editAddress').value = ponto.endereco;
            document.getElementById('editPhone').value = ponto.telefone;

            const modal = document.getElementById('editModal');
            modal.style.display = 'block';

            modal.setAttribute('data-id', id);
        })
        .catch(err => console.error('Erro ao carregar dados do ponto turístico:', err));
}

function saveChanges() {
    const id = document.getElementById('editModal').getAttribute('data-id');
    const editedTitle = document.getElementById('editTitle').value;
    const editedAddress = document.getElementById('editAddress').value;
    const editedPhone = document.getElementById('editPhone').value;

    fetch(`http://localhost:3000/pontos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ponto: editedTitle,
            endereco: editedAddress,
            telefone: editedPhone
        })
    })
        .then(response => response.json())
        .then(updatedPonto => {
            const touristCard = document.querySelector(`.tourist-card[data-id="${id}"]`);
            touristCard.querySelector('.tourist-title').textContent = updatedPonto.ponto;

            const endereco = updatedPonto.endereco.split(',').join('<br>');
            const telefone = updatedPonto.telefone.split(',').join('<br>');
            touristCard.querySelector('.tourist-info').innerHTML = `
                        <strong>Endereço:</strong> ${endereco}<br>
                        <strong>Telefone:</strong> ${telefone}<br>
                    `;

            closeModal(); 
        })
        .catch(err => console.error('Erro ao salvar alterações:', err));
}

function deletePonto(id) {
    fetch(`http://localhost:3000/pontos/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            const cardToRemove = document.querySelector(`.tourist-card[data-id="${id}"]`);
            if (cardToRemove) {
                cardToRemove.remove();
            }
            console.log(`Ponto turístico com ID ${id} excluído com sucesso`);
        })
        .catch(err => console.error('Erro ao excluir ponto turístico:', err));
}

function closeModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('editModal');
    if (event.target == modal) {
        closeModal();
    }
};

function openAddModal() {
    var modal = document.getElementById('addModal');
    modal.style.display = 'block';
}

function closeAddModal() {
    var modal = document.getElementById('addModal');
    modal.style.display = 'none';
}

function addTouristSpot() {
    var title = document.getElementById('addTitle').value;
    var address = document.getElementById('addAddress').value;
    var phone = document.getElementById('addPhone').value;
    var image = document.getElementById('addImage').value;
    var price = document.getElementById('addPrice').value;

    var card = document.createElement('div');
    card.classList.add('tourist-card');
    card.style.opacity = '0'; 

    card.innerHTML = `
        <img class="tourist-image" src="${image}" alt="Imagem do ponto turístico">
        <div class="tourist-title">${title}</div>
        <div class="tourist-info">
            <strong>Endereço:</strong> ${address}<br>
            <strong>Telefone:</strong> ${phone}<br>
        </div>
        <button class="valor-button">R$ ${price}</button>
    `;

    var cardsContainer = document.getElementById('tourist-cards');
    cardsContainer.appendChild(card);

    card.offsetHeight;
    card.style.opacity = '1';
    closeAddModal();
}


