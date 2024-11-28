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