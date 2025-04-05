//script_for_issues_console
import create_calculator_elements_in_html  from '../script/calculator.js'

import createAnnotationsBox from '../script/form_box_anotation.js'

import generateMenu from '../script/cria_menu.js'

const anotation_button= document.querySelector("#anotation_button")

const response_button= document.querySelector("#response_button")
const comment_button= document.querySelector("#comment_button")
const return_button= document.querySelector("#return_button")
const next_button= document.querySelector("#next_button")
const external_box= document.querySelector(".external_box_that_gives_the_shape_to_the_console_of_inssues")

const create_div_on_the_question_console_for_the_contents_of_the_comments_response_anotation_statistical=()=>{

    const div_created=document.createElement("div")
    div_created.classList.add("create_div_on_the_question_console_for_the_contents_of_the_comments_response_anotation_statistical")
    div_created.id="create_div_on_the_question_console_for_the_contents_of_the_comments_response_anotation_statistical"
    return div_created
}

const conected_the_div_created_the_to_question_console= ()=>{

    const div_created= create_div_on_the_question_console_for_the_contents_of_the_comments_response_anotation_statistical()
    external_box.appendChild(div_created)

}
let val1=1

const remove_div_created_from_question_console = () => {
    
    
        
        
        try{             
            const div_created = document.querySelector("#create_div_on_the_question_console_for_the_contents_of_the_comments_response_anotation_statistical")
            div_created.remove();
        }catch{
            console.log("o elemtento nao esta em tela")
            return false
        };
        

}

const create_div_for_content_response=()=>{

    const div_response_created= document.createElement("div")
    div_response_created.classList.add("div_for_content_response")
    div_response_created.id="div_for_content_response"
    return div_response_created
}

const create_button_from_user_ativate_calculator=()=>{

    const button_ativate_calculator= document.createElement("button")
    button_ativate_calculator.classList.add("button_ativate_calculator")
    button_ativate_calculator.id="button_ativate_calculator"
    button_ativate_calculator.innerHTML="Calculadora"
    return button_ativate_calculator
}


let cont_anotation= 0
let cont_button=0
let cont_response= 0

response_button.addEventListener("click", ()=>{

        remove_div_created_from_question_console()
        
        if(cont_response%2==0){
        
            conected_the_div_created_the_to_question_console()
        }
        ++cont_response

        const space_created = document.querySelector("#create_div_on_the_question_console_for_the_contents_of_the_comments_response_anotation_statistical")
        const div_response_created= create_div_for_content_response()
        const button_ativate_calculator= create_button_from_user_ativate_calculator()

        space_created.appendChild(div_response_created)
        div_response_created.appendChild(button_ativate_calculator)

        const button_calculator=document.querySelector("#button_ativate_calculator")

        button_calculator.addEventListener("click",()=>{

                create_calculator_elements_in_html()

                const box_for_numbers_of_calculator=document.querySelector("#number_box_for_calculator")
                const text_for_screen_feedback=document.querySelector("#text_for_screen_feedback")
                const box_for_symbols_of_calculator= document.querySelector("#symbols_box_for_calculator")

                let numbers_input_for_user=" "
                let symbol_operating= true
                let decimal_mark = true 

                box_for_numbers_of_calculator.addEventListener("click", (evento)=>{

                        symbol_operating=true

                        if(evento.target.value=="delete"){
                            
                            let char_array= numbers_input_for_user.split("")
                           
                            if(char_array[char_array.length-1]=="."){
                                decimal_mark=true
                                

                            }

                            try {
                                const regex = /&\w+;/g;
                            
                                const matches = numbers_input_for_user.match(regex);
                            
                                if (matches) {

                                    const firstMatchIndex = numbers_input_for_user.indexOf(matches[0]);
                            
                                    if (char_array[char_array.length - 1] === ";") {
        
                                        numbers_input_for_user = numbers_input_for_user.slice( 0, firstMatchIndex +1) 
                                        text_for_screen_feedback.innerHTML = numbers_input_for_user;
                                    }
                                }
                            } catch (error) {
                                throw new Error("A problem occurred");
                            }

                            
                            try {
                                 const variable_regex=[
     
                                     {sine:/s\w*n/gi},
                                     {cosine:/c\w*s/gi},
                                     {log:/l\w*g/gi},
                                     {ln:/l\w*n/gi},
                                     {inv:/i\w*v/gi},
                                     {deg:/d\w*g/ig}
                                 ]
                                
                                for(let i = 0 ; i<variable_regex.length ; ++i){
                                    
                                    let temporary_regex=Object.values(variable_regex[i])[0]

                                    const matches = numbers_input_for_user.match(temporary_regex);
                                    
                                    if (matches) {
                                        
                                        const firstMatchIndex = numbers_input_for_user.indexOf(matches[0]);
                                        let matches_length=matches.toString().length
                                        let matches_string=matches.toString()
                                        
                                        if (char_array[char_array.length - 1] === (matches_string[matches_length - 1])) {
                                            
                                            numbers_input_for_user = numbers_input_for_user.slice( 0, firstMatchIndex +1) 
                                            text_for_screen_feedback.innerHTML = numbers_input_for_user;
                                        }
                                    }
                                }

                            }catch (error) {

                                throw new Error("A problem occurred");
                            }
                                

                            numbers_input_for_user= numbers_input_for_user.slice(0,-1)
                            text_for_screen_feedback.innerHTML= numbers_input_for_user

                        }else if(evento.target.value=="." && decimal_mark==true){

                            numbers_input_for_user+=evento.target.value
                            text_for_screen_feedback.innerHTML=numbers_input_for_user
                            decimal_mark=false
                            console.log("helo")
                        }else if(evento.target.value != undefined && evento.target.value !="." ){

                            numbers_input_for_user+=evento.target.value
                            text_for_screen_feedback.innerHTML=numbers_input_for_user
                        }
                        
                    
                })

                const button_clear_all=document.querySelector("#button_calculator_clear_all")
                
                button_clear_all.addEventListener("click" , ()=>{

                    decimal_mark=true
                    numbers_input_for_user=" "
                    text_for_screen_feedback.innerHTML=numbers_input_for_user
                })


                box_for_symbols_of_calculator.addEventListener("click",(evento)=>{

                    if(evento.target.value== "="){
                        const string_mathematical_operation_desired_by_the_user=text_for_screen_feedback.innerHTML
                        const result_of_the_operation= eval(string_mathematical_operation_desired_by_the_user)
                        text_for_screen_feedback.innerHTML=result_of_the_operation

                    }

                    if((evento.target.value != undefined) && (symbol_operating == true && ( evento.target.value != "=")) ){

                        numbers_input_for_user += evento.target.value
                        text_for_screen_feedback.innerHTML= numbers_input_for_user
                        symbol_operating= false

                        if((evento.target.value == "cos") || (evento.target.value == "sen") || (evento.target.value == "ln") ||
                            (evento.target.value =="log") || (evento.target.value == "INV") || (evento.target.value =="deg") ||
                            (evento.target.value == "!")  || (evento.target.value == "e")   ){
                                decimal_mark=false
                            }
                    }
                })
        })

        

})



comment_button.addEventListener("click", ()=>{
    
    remove_div_created_from_question_console()
        if(cont_button%2==0){
            conected_the_div_created_the_to_question_console()
        }
        ++cont_button
   
    
})

anotation_button.addEventListener("click", ()=>{

    remove_div_created_from_question_console()
    
        if(cont_anotation%2==0){
                    conected_the_div_created_the_to_question_console()
                    createAnnotationsBox()
                    
                        let data = new Date()
                        let data_dia_com_zero=(data.getDate()>=10? data.getDate(): "0"+data.getDate())
                        let data_mes_com_zero=(data.getMonth()>=10? data.getMonth(): "0"+data.getMonth())                 //coloca hora e data
                        let data_minutos_com_zero=(data.getMinutes()>=10? data.getMinutes(): "0"+data.getMinutes())       //na anotação    
                        let data_horas_com_zero=(data.getHours()>=10? data.getHours(): "0"+data.getHours())
                        let data_segundo_com_zero=(data.getSeconds()>=10?data.getSeconds(): "0"+data.getSeconds())


                        //cria a indentiicação da anotação******************************************************************************
                        const btn_adiciona_anotacao=[...document.querySelectorAll("#btn_adicionar_anotação_id")]
                        const titulo_anotação_arrey=[...document.querySelectorAll("input[type=text]")]
                        const texto_anotação_arrey=[...document.querySelectorAll("#area_texto_anotaçao_id")]
                        const box_ultimas_anotacoes=[...document.querySelectorAll("#box_ultimas_anotacoes_id")]
                        const btn_ryg_grau_importancia=[...document.querySelectorAll(".btn_class_em_comum_importancia")]
                        const box_color_quando_importancia_atv=[...document.querySelectorAll("#box_for_text_area_id")]
                        const bloqueia_text_area=[...document.querySelectorAll("#bloqueia_textarea_id")]

                        const remove_importancia_color=()=>{

                            btn_ryg_grau_importancia.filter((ellem)=>{
                                const ellem_ativado=ellem.className
                            
                            switch(ellem_ativado){
                                    case "importancia_cores_btn_red imo_cr_red_btn btn_class_em_comum_importancia atv_imo_red_btn":
                                        ellem.classList.remove("atv_imo_red_btn")
                                        break;
                                    case "importancia_cores_btn_green imo_cr_green_btn btn_class_em_comum_importancia atv_imo_green_btn":
                                        ellem.classList.remove("atv_imo_green_btn")    
                                        break;
                                    case "importancia_cores_btn_yellow imo_cr_yellow_btn btn_class_em_comum_importancia atv_imo_yellow_btn" :
                                        ellem.classList.remove("atv_imo_yellow_btn")
                                        break;     
                            }
                            })

                            box_color_quando_importancia_atv.filter((elem)=>{
                                const elem_ativado=elem.className
                                
                                switch(elem_ativado){
                                    case "box_for_text_area box_for_text_area_atv_for_red":
                                        elem.classList.remove("box_for_text_area_atv_for_red")
                                        break;
                                    case "box_for_text_area box_for_text_area_atv_for_green":
                                        elem.classList.remove("box_for_text_area_atv_for_green")
                                        break;
                                    case "box_for_text_area box_for_text_area_atv_for_yellow":
                                        elem.classList.remove("box_for_text_area_atv_for_yellow")
                                        break;        
                                }
                            })
                        }

                        const desbloqueio_temporario=()=>{
                            
                            bloqueia_text_area.filter((elem)=>{
                                const des_temp_elem=elem.className

                                if(des_temp_elem=="bloqueia_textarea_class desativa_bloqueia_textarea_class"){
                                    elem.classList.remove("desativa_bloqueia_textarea_class")
                                }
                            })
                        }


                        btn_ryg_grau_importancia.map((elem)=>{
                            
                            elem.addEventListener("click",(evt)=>{
                                    const chamada_remove_imporetancia_color=remove_importancia_color()
                                    const remove_temporariamente_odesbloqueio_area_tex=desbloqueio_temporario()
                                    const elem_evento=evt.target.id
                                    
                                    switch(elem_evento){
                                        case "imp_red_btn":
                                            box_color_quando_importancia_atv[0].classList.toggle("box_for_text_area_atv_for_red")
                                            bloqueia_text_area[0].classList.toggle("desativa_bloqueia_textarea_class")
                                            elem.classList.toggle("atv_imo_red_btn")
                                            break;
                                        case "imp_red_yellow":
                                            box_color_quando_importancia_atv[0].classList.toggle("box_for_text_area_atv_for_yellow")
                                            bloqueia_text_area[0].classList.toggle("desativa_bloqueia_textarea_class")
                                            elem.classList.toggle("atv_imo_yellow_btn")

                                            break;
                                        case "imp_green_btn":
                                            box_color_quando_importancia_atv[0].classList.toggle("box_for_text_area_atv_for_green")
                                            bloqueia_text_area[0].classList.toggle("desativa_bloqueia_textarea_class")
                                            elem.classList.toggle("atv_imo_green_btn")
                                            break;
                                    }

                                })
                            })           


                        let R=0;
                        let Y=0; 
                        let G=0;           
                        btn_adiciona_anotacao[0].addEventListener("click",(evt)=>{
                                        
                            btn_ryg_grau_importancia.map((elem)=>{
                                const se_btn_imp_atv=elem.className
                            
                                if((se_btn_imp_atv=="importancia_cores_btn_red imo_cr_red_btn btn_class_em_comum_importancia atv_imo_red_btn" 
                                    || se_btn_imp_atv=="importancia_cores_btn_yellow imo_cr_yellow_btn btn_class_em_comum_importancia atv_imo_yellow_btn" 
                                    || se_btn_imp_atv=="importancia_cores_btn_green imo_cr_green_btn btn_class_em_comum_importancia atv_imo_green_btn") 
                                    && titulo_anotação_arrey[0].value !=0){        
                                        
                                    const cria_box_anotacoes=document.createElement("div")
                                    cria_box_anotacoes.setAttribute("class","box_anotacoes_feitas")
                                    cria_box_anotacoes.setAttribute("id","box_anotacoes_feitas_id")
                                        
                                    btn_ryg_grau_importancia.filter((elem)=>{
                                        const qual_cor_atv=elem.className
                                            

                                            switch(qual_cor_atv){
                                                case "importancia_cores_btn_red imo_cr_red_btn btn_class_em_comum_importancia atv_imo_red_btn":
                                                    
                                                    ++R
                                                    if(R==1){
                                                        cria_box_anotacoes.classList.toggle("elemento_referencia")
                                                    }
                                                    cria_box_anotacoes.classList.toggle("box_anotacoes_feitas_quando_imp_red_atv")
                                                    break;
                                                case "importancia_cores_btn_yellow imo_cr_yellow_btn btn_class_em_comum_importancia atv_imo_yellow_btn":

                                                    ++Y
                                                    if(Y==1){
                                                        cria_box_anotacoes.classList.toggle("elemento_referencia")
                                                    }
                                                    cria_box_anotacoes.classList.toggle("box_anotacoes_feitas_quando_imp_yellow_atv")
                                                    break;
                                                case "importancia_cores_btn_green imo_cr_green_btn btn_class_em_comum_importancia atv_imo_green_btn":

                                                    ++G
                                                    if(G==1){
                                                        cria_box_anotacoes.classList.toggle("elemento_referencia")
                                                    }
                                                    cria_box_anotacoes.classList.toggle("box_anotacoes_feitas_quando_imp_green_atv")
                                                    break;    
                                            }
                                    })

                                    box_ultimas_anotacoes[0].appendChild(cria_box_anotacoes) 
                                        
                                    const cria_box_titulo_in_anotacao=document.createElement("div")
                                    cria_box_titulo_in_anotacao.setAttribute("class","titulo_in_anotacao")
                                    cria_box_titulo_in_anotacao.setAttribute("id","titulo_in_anotacao_id")
                                    cria_box_titulo_in_anotacao.innerHTML=titulo_anotação_arrey[0].value
                                    cria_box_anotacoes.appendChild(cria_box_titulo_in_anotacao)

                                    const cria_box_hora_data_in_anotacao=document.createElement("div")
                                    cria_box_hora_data_in_anotacao.setAttribute("class","hora_data_anotacao")
                                    cria_box_hora_data_in_anotacao.setAttribute("id","hora_data_anotacao_id")
                                    cria_box_hora_data_in_anotacao.innerHTML=data_horas_com_zero+":"+data_minutos_com_zero+"   "+data_dia_com_zero+"/"+data_mes_com_zero+"/"+data.getUTCFullYear()
                                    cria_box_anotacoes.appendChild(cria_box_hora_data_in_anotacao)
                                    
                                    const anotacoes_feitas_pelo_usuario=[...document.querySelectorAll("#box_anotacoes_feitas_id")]
                                    console.log(anotacoes_feitas_pelo_usuario[0].className)
                                    anotacoes_feitas_pelo_usuario.map((elem)=>{
                                        elem.addEventListener("click",()=>{
                                            console.log("funcionou")
                                            elem.classList.toggle("ativado_anotacao_for_idn_edit")
                            
                                        })
                                        
                                    })
                                    const anotaçao_edit_box_atv_arrey=[...document.querySelectorAll("#box_para_texto_anotacao_edit_id")] 
                                    const editar_btn_console_anotacao=[...document.querySelectorAll("#btn_editar_anotacoes_id")]
                                    const slide_for_anotacoes_box=[...document.querySelectorAll("#box_slide_for_text_anotacao_edtit_id")]   

                                    editar_btn_console_anotacao[0].addEventListener("click",(evt)=>{
                                        
                                        const anotacoes_feitas_pelo_usuario=[...document.querySelectorAll("#box_anotacoes_feitas_id")]
                                        
                                        anotacoes_feitas_pelo_usuario.filter((elem)=>{
                                            
                                            const se_elemento_ativado_pelo_edit=elem.className
                                            if(se_elemento_ativado_pelo_edit=="box_anotacoes_feitas elemento_referencia box_anotacoes_feitas_quando_imp_red_atv ativado_anotacao_for_idn_edit" ){
                                                const elem_titulo= elem.firstChild.textContent.text()
                                                
                                                const elem_data=elem.lastChild.innerHTML

                                                const adiciona_titulo_da_tag_anotacao=[...document.querySelectorAll(".box_in_anotacao_slide_titulo_titulo")]
                                                adiciona_titulo_da_tag_anotacao.innerHTML=elem_titulo
                                                console.log(elem_data)
                                                console.log(elem_titulo)
                                            }
                                        })
                                            
                                            console.log(evt.target)
                                            setTimeout(()=>{
                                                anotaçao_edit_box_atv_arrey[0].classList.toggle("box_para_texto_anotacao_edit_atv")
                                                slide_for_anotacoes_box[0].classList.toggle("box_slide_for_text_anotacao_edtit_atv")
                                                console.log("ue")
                                            },8800000)
                                            
                                
                                    })

                                }    
                            })        
                        })

                        const anotaçao_edit_box_atv_arrey=[...document.querySelectorAll("#box_para_texto_anotacao_edit_id")] 
                        const editar_btn_console_anotacao=[...document.querySelectorAll("#btn_editar_anotacoes_id")]
                        const slide_for_anotacoes_box=[...document.querySelectorAll("#box_slide_for_text_anotacao_edtit_id")]   

                        editar_btn_console_anotacao[0].addEventListener("click",()=>{
                            anotaçao_edit_box_atv_arrey[0].classList.toggle("box_para_texto_anotacao_edit_atv")
                            setTimeout(()=>{
                            slide_for_anotacoes_box[0].classList.toggle("box_slide_for_text_anotacao_edtit_atv")
                            console.log("ue")
                            },200)
                        })
        
        }
        ++cont_anotation
        
        
            
})

const button_conhecimentos_bancarios= document.querySelector("#conhecimentos_bancarios")
const button_vendas_e_negociacoes= document.querySelector("#vendas_e_negociacao")
const button_legislacao= document.querySelector("#legislacao")
const button_Compliance= document.querySelector("#complaince")
const button_ti= document.querySelector("#ti")
const button_matematica= document.querySelector("#matematica")
const button_ingles= document.querySelector("#ingles")



button_conhecimentos_bancarios.addEventListener('click', ()=>{
    generateMenu(1)
})

button_vendas_e_negociacoes.addEventListener('click', ()=>{
    generateMenu(2)
})

button_legislacao.addEventListener('click', ()=>{
    generateMenu(3)
})

button_Compliance.addEventListener('click' , ()=>{
    generateMenu(4)
})

button_ti.addEventListener('click' , ()=>{
    generateMenu(5)
})

button_matematica.addEventListener('click' , ()=>{
    generateMenu(6)
})

button_ingles.addEventListener('click' , ()=>{
    generateMenu(7)
})

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("abriu")
    fetch('http://localhost:3000/texto_para_questao')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na solicitação: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('texto_expositivo_para_a_questao').innerText = data.texto
        document.getElementById('texto_A').innerHTML= data.Alternativa_a
        document.getElementById('texto_B').innerHTML= data.Alternativa_b
        document.getElementById('texto_C').innerHTML= data.Alternativa_c
        document.getElementById('texto_D').innerHTML= data.Alternativa_d
        document.getElementById('texto_E').innerHTML= data.Alternativa_e
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('result').innerText = 'Ocorreu um erro: ' + error.message;
    });
})