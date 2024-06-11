const hotelCards = document.getElementById('hotel-cards');

        function getStars(rating) {
            let stars = '';
            for (let i = 0; i < 5; i++) {
                stars += i < rating ? '★' : '☆';
            }
            return stars;
        }

        fetch('http://localhost:3000/hotel')
            .then(res => res.json())
            .then(res => {
                hotelCards.innerHTML = '';

                res.forEach((hotel, index) => {
                    const cardClass = index % 2 === 0 ? 'blue-card' : 'yellow-card';
                    const stars = getStars(hotel.avaliacao);

                    hotelCards.innerHTML += `
                            <div class="hotel-card ${cardClass}" data-id="${hotel.id}">
                            <img class="hotel-image" src="${hotel.imagemUrl}" alt="Imagem do hotel">
                            <div class="hotel-name">${hotel.hotel}</div>
                            <div class="stars">${stars}</div>
                            <div class="hotel-info">
                                <strong>Contato:</strong> ${hotel.email}<br>
                                <strong>Site:</strong> <a href="${hotel.site}" target="_blank">${hotel.site}</a><br>
                            </div>
                            <button class="valor-button">R$ ${hotel.valor}</button>
                            <div class="card-buttons">
                                <button class="card-button modify" onclick="modifyHotel('${hotel.id}')">Modificar</button>
                                <button class="card-button delete" onclick="deleteHotel('${hotel.id}')">Excluir</button>
                            </div>
                        </div>`;
                });

            });

        function modifyHotel(id) {
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

            const hotelCard = document.querySelector(`.hotel-card[data-id='${id}']`);
            const title = hotelCard.querySelector('.hotel-name').textContent;
            const email = hotelCard.querySelector('.hotel-info strong').nextSibling.textContent.trim();
            const site = hotelCard.querySelector('.hotel-info a').getAttribute('href');
            const valor = hotelCard.querySelector('.valor-button').textContent.replace('R$', '').trim();

            document.getElementById('modal-title').value = title;
            document.getElementById('modal-email').value = email;
            document.getElementById('modal-site').value = site;
            document.getElementById('modal-valor').value = valor;

            document.getElementById('saveChanges').onclick = function () {
                const newTitle = document.getElementById('modal-title').value;
                const newEmail = document.getElementById('modal-email').value;
                const newSite = document.getElementById('modal-site').value;
                const newValor = document.getElementById('modal-valor').value;

                hotelCard.querySelector('.hotel-name').textContent = newTitle;
                hotelCard.querySelector('.hotel-info strong').nextSibling.textContent = newEmail;
                hotelCard.querySelector('.hotel-info a').setAttribute('href', newSite);
                hotelCard.querySelector('.valor-button').textContent = 'R$ ' + newValor;

                modal.style.display = 'none';
            }
        }


        function openAddModal() {
            const addModal = document.getElementById('addModal');
            addModal.style.display = 'block';

            const closeModal = addModal.querySelector('.close');
            closeModal.onclick = function () {
                addModal.style.display = 'none';
            }

            window.onclick = function (event) {
                if (event.target === addModal) {
                    addModal.style.display = 'none';
                }
            }

            document.getElementById('addHotel').onclick = function () {
                const title = document.getElementById('modal-add-title').value;
                const email = document.getElementById('modal-add-email').value;
                const site = document.getElementById('modal-add-site').value;
                const valor = document.getElementById('modal-add-valor').value;
                const avaliacao = document.getElementById('modal-add-avaliacao').value;
                const imagemUrl = document.getElementById('modal-add-imagem').value;

                const newHotel = {
                    hotel: title,
                    email: email,
                    site: site,
                    valor: valor,
                    avaliacao: parseInt(avaliacao),
                    imagemUrl: imagemUrl
                };

                displayNewHotel(newHotel);

                addModal.style.display = 'none';
            
            }
        }

        function displayNewHotel(hotel) {
            const stars = getStars(hotel.avaliacao);

            const newHotelCard = document.createElement('div');
            newHotelCard.classList.add('hotel-card');
            newHotelCard.innerHTML = `
                <img class="hotel-image" src="${hotel.imagemUrl}" alt="Imagem do hotel">
                <div class="hotel-name">${hotel.hotel}</div>
                <div class="stars">${stars}</div>
                <div class="hotel-info">
                    <strong>Contato:</strong> ${hotel.email}<br>
                    <strong>Site:</strong> <a href="${hotel.site}" target="_blank">${hotel.site}</a><br>
                </div>
                <button class="valor-button">R$ ${hotel.valor}</button>
                <div class="card-buttons">
                    <button class="card-button modify" onclick="modifyHotel('${hotel.id}')">Modificar</button>
                    <button class="card-button delete" onclick="deleteHotel('${hotel.id}')">Excluir</button>
                </div>
            `;

            hotelCards.appendChild(newHotelCard);
        }

        function getStars(rating) {
            return '★'.repeat(rating) + '☆'.repeat(5 - rating);
        }