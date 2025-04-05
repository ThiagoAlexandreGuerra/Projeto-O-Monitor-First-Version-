import Login from "../script/login.js";
//full screen***************************************************************************************************************
const fullscreenButton = document.getElementById("fullscreenButton");
var elem= document.documentElement

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

let i= 1;

fullscreenButton.addEventListener("click",(evt)=>{
    ++i
    console.log(i)
    if(i%2==0){
        const F= openFullscreen()
    }else{
        const M=closeFullscreen()
    }
})



function intro() {
    document.querySelector("#intro_site").classList.add("intro_site_ativar");
}

function remove_intro() {
    document.querySelector("#intro_site").classList.remove("intro_site_ativar");
}

window.addEventListener("load", () => {
    // Verifique se é a primeira entrada na sessão
    let primeira_entrada = sessionStorage.getItem("primeira_entrada");

    if (!primeira_entrada) {
        // Se não for a primeira entrada, mostre a introdução
        intro();
        setTimeout(remove_intro, 7000);

        // Marque como a primeira entrada no sessionStorage
        sessionStorage.setItem("primeira_entrada", true);
    }
});

Login.login("usuario" , "senha123")

