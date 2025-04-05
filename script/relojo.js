//relojo na tela do display principal***********************************************************
//**********************************************************************************************
const horas_para_relogio=[...document.querySelectorAll("#relojoid_hora")] ; 
const minutos_para_relojo=[...document.querySelectorAll("#relojoid_minutos")];
const segundos_para_relojo=[...document.querySelectorAll("#relojoid_segundos")];

const relogio= setInterval(function time(){
    let datatoday= new Date()
    let hr = datatoday.getHours()
    let min = datatoday.getMinutes()
    let seg = datatoday.getSeconds()

    let data_minutos_com_zero=(datatoday.getMinutes()>=10? datatoday.getMinutes(): "0"+datatoday.getMinutes())       //na anotação    
    let data_horas_com_zero=(datatoday.getHours()>=10? datatoday.getHours(): "0"+datatoday.getHours())
    let data_segundo_com_zero=(datatoday.getSeconds()>=10?datatoday.getSeconds(): "0"+datatoday.getSeconds())

    horas_para_relogio[0].textContent = data_horas_com_zero+":";
    minutos_para_relojo[0].textContent = data_minutos_com_zero+":";
    segundos_para_relojo[0].textContent = data_segundo_com_zero;
})
//cronometro**************************************************************************
//************************************************************************************


const seg_for_crono_elem=document.getElementById("crono_id_seg")
let timp_inicial= null;
let tempo_pausado = localStorage.getItem("tempo_pausado") 
    ? parseInt(localStorage.getItem("tempo_pausado")) 
    : 0;



const convercao=(seg)=>{

    const hora = Math.floor(seg/3600)
    const resto= seg%3600
    const minutos = Math.floor(resto/60)
    const segundos= Math.floor(resto%60)
    const fomatacao= (hora<10?"0"+hora:hora)+":"+(minutos<10?"0"+minutos:minutos)+":"+(segundos<10?"0"+segundos:segundos)
    return fomatacao
}
const converter=()=>{
    const timp_atual = Date.now();
    let segundos=(timp_atual - timp_inicial+ tempo_pausado)/1000
    seg_for_crono_elem.innerHTML=convercao(segundos)
}

const btn_parar_crono_elem=document.getElementById("btn_dispara_crono_parar") 
const btn_dispara_crono_zerar= document.querySelector("#btn_dispara_crono_zerar")

//slide relojo aparece conometro*****************************
let intervalo= null
seg_for_crono_elem.innerHTML="00:00:00"
const btn_atv_slide_conometro=document.getElementById("btn_img_atv_cronometro")
const slide_relojo_atv= document.getElementById("box_relojoclass_id")
let conta_n_press_btn_cronometro=0
let val1=0
btn_atv_slide_conometro.addEventListener("click",()=>{

    if(val1==0){
        timp_inicial=Date.now()
        intervalo= setInterval( converter, 1000)
    }
    
        if(conta_n_press_btn_cronometro%2 == 0){
            slide_relojo_atv.classList.toggle("atv_relojo_slide_conometro")
        }else{
           slide_relojo_atv.classList.remove("atv_relojo_slide_conometro")
        }
        ++conta_n_press_btn_cronometro
   ++val1  
})

let parar=false
btn_parar_crono_elem.addEventListener('click' , ()=>{

    if(!parar){
        
        clearInterval(intervalo)
        tempo_pausado += Date.now() - timp_inicial;
        localStorage.setItem("tempo_pausado", tempo_pausado);
        btn_parar_crono_elem.innerHTML="retomar"
        window.localStorage.setItem("tempo", timp_inicial)
    }else{

        timp_inicial = Date.now();
        intervalo = setInterval(converter, 1000);
        btn_parar_crono_elem.innerHTML="parar"
    }
    parar=!parar
})

window.addEventListener("beforeunload", (event) => {
    // Aqui você pode salvar o estado do cronômetro no localStorage
    if (!parado) {
        tempo_pausado += Date.now() - timp_inicial;
        localStorage.setItem("tempo_pausado", tempo_pausado);
    }
    // Para exibir um alerta de confirmação (opcional):
    event.preventDefault();
    event.returnValue = ''; // Necessário em alguns navegadores para mostrar um alerta padrão
});

btn_dispara_crono_zerar.addEventListener('click' , ()=>{
    
    clearInterval(intervalo)
    seg_for_crono_elem.innerHTML="00:00:00"
    val1=0
    timp_inicial = null;
    tempo_pausado = 0;
    localStorage.removeItem("tempo_pausado");
    btn_parar_crono_elem.innerHTML = "Parar";

})
window.addEventListener("load", () => {
    if (tempo_pausado > 0) {
       
        seg_for_crono_elem.innerHTML = convercao(tempo_pausado / 1000);
    }
});

