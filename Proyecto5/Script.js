let esqueleto = "off";
let paraesqueleto = document.getElementById("esqueletoOff")
let botonSonido = new Audio ('../sound/botonbailar.mp3')
let audio = new Audio ('../sound/audio.mp3')


function bailar(){
    if (esqueleto == "off") {
        esqueleto = "on"
        console.log("On");
        paraesqueleto.classList.add("on")
        paraesqueleto.addEventListener('click',()=>{
            botonSonido.play();
        })
        paraesqueleto.addEventListener('click',()=>{
            audio.play();

        })

      

    }
    else{
        esqueleto = "off"
        paraesqueleto.classList.remove("on")
        paraesqueleto.addEventListener('click',()=>{
            audio.pause();
        })
        console.log("Off")
    }

}
