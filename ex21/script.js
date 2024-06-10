// Vitória Karoline de Carvalho Bernardo
document.addEventListener('DOMContentLoaded', loadReservations);
document.getElementById('reservation-form').addEventListener('submit', addReservation);
document.getElementById('reservation-list').addEventListener('click', manageReservations);

function addReservation(e) {
    e.preventDefault();

    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;

    if (dateInput === '' || timeInput === '') return;

    const reservation = {
        date: dateInput,
        time: timeInput
    };

    const reservations = getReservationsFromLocalStorage();
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    document.getElementById('reservation-form').reset();

    renderReservations();
}

function loadReservations() {
    renderReservations();
}

function renderReservations() {
    const reservations = getReservationsFromLocalStorage();
    const reservationList = document.getElementById('reservation-list');
    reservationList.innerHTML = '';

    reservations.forEach((reservation, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${reservation.date} às ${reservation.time}</span>
            <button class="delete-btn" data-index="${index}">Cancelar</button>
        `;
        reservationList.appendChild(li);
    });
}

function manageReservations(e) {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        removeReservation(index);
    }
}

function removeReservation(index) {
    const reservations = getReservationsFromLocalStorage();
    reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(reservations));
    renderReservations();
}

function getReservationsFromLocalStorage() {
    return localStorage.getItem('reservations') ? JSON.parse(localStorage.getItem('reservations')) : [];
}
