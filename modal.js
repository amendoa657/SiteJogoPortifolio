let pastas = document.getElementsByClassName("pasta")

Array.from(pastas).forEach((pasta) => {
    //abrir modal


    pasta.addEventListener("click", e => {
        e.preventDefault();
        console.log("foi")
        pasta.classList.toggle("pastaClicada")
    })
        

})

function AbrirProjetos() {
    console.log("Abrir projetos")
      window.open("https://github.com/amendoa657", "_blank");
}




function AbrirLinkedin() {
    console.log("Abrir linkedin")
    window.open("https://www.linkedin.com/in/italo-cunha-028baa356/", "_blank");
}




function AbrirConhecimentos() {
    let computador = document.getElementById("computadorConhecimentos")
    computador.style.top = "50%";
    
}

function fecharConhecimentos() {
    let computador = document.getElementById("computadorConhecimentos")
    computador.style.top = "-50%";
}

function AbrirInformacoesZeGotinha() {
    console.log("Abrir Ze Gotinha (la ele)")
    window.open("https://github.com/amendoa657/ZeGotinhaGame", "_blank");
}