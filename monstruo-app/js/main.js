/**
 * Logica para Harry el Astuto
 * Programador Junior
 */

document.addEventListener('DOMContentLoaded', () => {
    const monster = document.getElementById('harry-monster');
    const monsterBody = document.querySelector('.monster-body');
    const monsterLegs = document.querySelectorAll('.leg');
    const monsterArms = document.querySelectorAll('.arm');

    const btnHablame = document.getElementById('btn-hablame');
    const btnColor = document.getElementById('btn-color');
    const btnAmigos = document.getElementById('btn-amigos');
    const btnMueveme = document.getElementById('btn-mueveme');

    // Funzione: Aprire la bocca al click sul mostro
    monster.addEventListener('click', () => {
        const mouth = document.querySelector('.monster-mouth');
        mouth.classList.toggle('open');
    });

    const friendsModal = document.getElementById('friends-modal');
    const closeModal = document.querySelector('.close-modal');

    // 1. Función: Hablame (Popup spaventoso)
    btnHablame.addEventListener('click', () => {
        alert('😱 ¡BUUUUUUU! ¡Cuidado que Harry tiene hambre de calcetines! 😱');
    });

    // 2. Función: CambioColor (Cambia colore corpo)
    const colors = ['#4caf50', '#e91e63', '#2196f3', '#ffeb3b', '#9c27b0', '#ff5722'];
    let colorIndex = 0;

    btnColor.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        const newColor = colors[colorIndex];

        // Cambia colore corpo, braccia e gambe
        monsterBody.style.backgroundColor = newColor;
        monsterLegs.forEach(leg => leg.style.backgroundColor = newColor);
        monsterArms.forEach(arm => arm.style.backgroundColor = newColor);
    });

    // 3. Función: MisAmigos (Mostra foto amici)
    btnAmigos.addEventListener('click', () => {
        friendsModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        friendsModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === friendsModal) {
            friendsModal.style.display = 'none';
        }
    });

    // 4. Función: Mueveme (Tremore 0.8 secondi)
    btnMueveme.addEventListener('click', () => {
        monster.classList.add('shake-animation');

        setTimeout(() => {
            monster.classList.remove('shake-animation');
        }, 800); // 0.8 secondi
    });

    // Gestione Formulario
    const commentForm = document.getElementById('comment-form');
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('user-name').value;
        alert(`¡Gracias ${name}! Tu comentario ha sido enviado al mundo de los monstruos.`);
        commentForm.reset();
    });
});
