const destinationCards = document.getElementById('destination-cards');

fetch('http://localhost:3000/destinos')
    .then(res => res.json())
    .then(res => {
        destinationCards.innerHTML = '';

        res.forEach((destino, index) => {
            const cardClass = index % 2 === 0 ? 'blue-card' : 'yellow-card';
            const dateOnly = new Date(destino.data).toLocaleDateString();

            destinationCards.innerHTML += `
                        <div class="destination-card ${cardClass}" data-id="${destino.id}">
                            <img class="destination-image" src="${destino.imagemUrl}" alt="Imagem do destino">
                            <div class="destination-title">${destino.destino}</div>
                            <div class="destination-info">
                                <strong>Data:</strong> ${dateOnly}<br>
                                <button class="valor-button">R$ ${destino.valor}</button>
                            </div>
                            <div class="card-buttons">
                                <button class="card-button modify" onclick="modifyCard('${destino.id}')">Modificar</button>
                                <button class="card-button delete" onclick="deleteCard('${destino.id}')">Excluir</button>
                            </div>
                        </div>`;
        });
    });

function modifyCard(id) {
    const modal = document.getElementById('modifyModal');
    modal.style.display = 'block';

    const closeModal = document.getElementsByClassName('close')[0];
    closeModal.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    const card = document.querySelector(`.destination-card[data-id='${id}']`);
    const title = card.querySelector('.destination-title').textContent;
    const date = card.querySelector('.destination-info strong').nextSibling.textContent.trim();
    const value = card.querySelector('.valor-button').textContent.replace('R$', '').trim();

    const dateWithTime = date + 'T00:00:00';

    document.getElementById('modal-title').value = title;
    document.getElementById('modal-date').value = dateWithTime;
    document.getElementById('modal-value').value = value;

    document.getElementById('saveChanges').onclick = function () {
        const newTitle = document.getElementById('modal-title').value;
        const newDate = document.getElementById('modal-date').value;
        const newValue = document.getElementById('modal-value').value;

        card.querySelector('.destination-title').textContent = newTitle;
        card.querySelector('.destination-info strong').nextSibling.textContent = new Date(newDate).toLocaleDateString();
        card.querySelector('.valor-button').textContent = 'R$ ' + newValue;

        modal.style.display = 'none';
    }
}

function deleteCard(id) {
    const card = document.querySelector(`.destination-card[data-id='${id}']`);
    card.remove();
}

const modifyModal = document.getElementById('modifyModal');
const addModal = document.getElementById('addModal');
const modifyClose = modifyModal.querySelector('.close');
const addClose = addModal.querySelector('.close');

function openModifyModal() {
    modifyModal.style.display = 'block';
}

function openAddModal() {
    addModal.style.display = 'block';
}

modifyClose.onclick = function () {
    modifyModal.style.display = 'none';
}

addClose.onclick = function () {
    addModal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === modifyModal) {
        modifyModal.style.display = 'none';
    } else if (event.target === addModal) {
        addModal.style.display = 'none';
    }
}

document.getElementById('addDestination').onclick = function () {
    const title = document.getElementById('add-title').value;
    const date = document.getElementById('add-date').value;
    const value = document.getElementById('add-value').value;
    const imageUrl = document.getElementById('add-image-url').value;

    if (title && date && value && imageUrl) {
        const destinationCard = document.createElement('div');
        destinationCard.className = 'destination-card';
        destinationCard.innerHTML = `
                    <img class="destination-image" src="${imageUrl}" alt="Image">
                    <div class="destination-title">${title}</div>
                    <div class="destination-info"><strong>Data:</strong> ${date}<br></div>
                    <div class="valor-button">Valor: ${value}</div>
                `;
        document.getElementById('destination-cards').appendChild(destinationCard);

        addModal.style.display = 'none';
    } else {
        alert('Por favor, preencha todos os campos');
    }
}