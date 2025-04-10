document.addEventListener('DOMContentLoaded',
    function(){
        let menuhamburgesa = document.getElementById('menu-hamburgesa')
        let elementoderecho = document.getElementById('elemento-derecho')
        
        menuhamburgesa.addEventListener('click',
            function(){
                elementoderecho.classList.toggle('active')
            }
        )
    }
)