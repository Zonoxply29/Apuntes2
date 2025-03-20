document.addEventListener('DOMContentLoaded', function() {
    const menuHamburgesa = document.getElementById('menu-hamburgesa');
    const elementoDerecho = document.getElementById('elemento-derecho');

    menuHamburgesa.addEventListener('click', function() {
        elementoDerecho.classList.toggle('active');
    });
});