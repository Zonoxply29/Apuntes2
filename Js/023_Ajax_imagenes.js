let showCountries = () =>{
    let xhr = new XMLHttpRequest()
    xhr.open("GET","https://restcountries.com/v3.1/all",true)
    xhr.onload = function (){
        if(xhr.status == 200 ){
            let paises = JSON.parse(this.response)
            paises.forEach(pais =>{
                console.log(pais)
                const countrycard = document.createElement("div");
                const countrycardimg = document.createElement("img");


                countrycard.innerHTML = pais.name.common;
                countrycardimg.src = pais.flags.png;

                countrycard.appendChild(countrycardimg);
                document.getElementById("feed").appendChild(countrycard)

            })
        }
    }
    xhr.send();
}
//FUNCION PARA OBTENER MIS DATOS DE LA API DE GITHUB SOBRE MI PERFIL DE GITHUB

let showGithub = () =>{
    //Cree un nuevo objeto XMLHttpRequest para hacer la solicitud 
    let xhr = new XMLHttpRequest()
    //Inicializamos una solicitud de con el metodo GET a la API de Github
    xhr.open("GET","https://api.github.com/users/Zonoxply29",true)
    xhr.onload = function () { //definir la funcion que se ejecutara cuando la solctud se complete
        if(xhr.status == 200){ 
            let dato = JSON.parse(this.response) // .parse y se almacena en la varible dato

                let nameperfil = document.createElement("div")
                let bioperfil = document.createElement("div")
                let repos = document.createElement("div")
                let avatarperfil = document.createElement("img")
                let seguidores = document.createElement("div")
 
                nameperfil.innerHTML = dato.name;
                bioperfil.innerHTML = dato.bio;
                repos.innerHTML = `Repositorios Publicos:${dato.public_repos}`;
                avatarperfil.src = dato.avatar_url;
                seguidores.innerHTML = `Total de Seguidores:${dato.followers}`;

                let perfilContainer = document.createElement("div");

                perfilContainer.appendChild(nameperfil)
                perfilContainer.appendChild(bioperfil)
                perfilContainer.appendChild(repos)
                perfilContainer.appendChild(avatarperfil)
                perfilContainer.appendChild(seguidores)   

                document.getElementById("perfil").appendChild(perfilContainer)

                // Hacer una solicitud adicional para obtener la lista de seguidores
            let xhrSeguidores = new XMLHttpRequest();
            xhrSeguidores.open("GET", dato.followers_url, true);
            xhrSeguidores.onload = function () {
                if (xhrSeguidores.status == 200) {
                    let seguidoresDatos = JSON.parse(this.response); // Parsear la respuesta JSON de los seguidores

                    seguidoresDatos.forEach(seguidor => {
                        let seguidorImg = document.createElement("img");
                        seguidorImg.src = seguidor.avatar_url;
                        seguidorImg.alt = seguidor.login;
                        perfilContainer.appendChild(seguidorImg);
                    });
                }
            };
            xhrSeguidores.send(); // Enviar la solicitud HTTP para obtener los seguidores
        }
    }
    xhr.send(); // Enviar la solcitud HTTP
}
