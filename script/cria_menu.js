
function createElementWithClass(tag, className, textContent = "", id = "") {
    const element = document.createElement(tag);
    element.className = className;
    if (textContent) element.textContent = textContent;
    if (id) element.id = id;
    return element;
}


function seleciona_materia(identificacao_da_materia) {
    

    const menuItems = {
        1: {
            title: "Conhecimentos Bancários",
            items: [
                { id: "areas_conhecimentos_bancarios", text: "Áreas" },
                { id: "materiais_conhecimentos_bancarios", text: "Materiais" },
                { id: "anotacoes_conhecimentos_bancarios", text: "Anotações" },
                { id: "lista_exercicios_conhecimentos_bancarios", text: "Lista de Exercícios" },
                { id: "edital_conhecimentos_bancarios", text: "Edital" },
                { id: "loja_conhecimentos_bancarios", text: "Lojas CB" }
            ]
        },
        2: {
            title: "Vendas e Negociação",
            items: [
                { id: "areas_vendas_e_negociacao", text: "Áreas" },
                { id: "materiais_vendas_e_negociacao", text: "Materiais" },
                { id: "anotacoes_vendas_e_negociacao", text: "Anotações" },
                { id: "lista_exercicios_vendas_e_negociacao", text: "Lista de Exercícios" },
                { id: "edital_vendas_e_negociacao", text: "Edital" },
                { id: "loja_vendas_e_negociacao", text: "Lojas VN" }
            ]
        },
        3: {
            title: "Legislação",
            items: [
                { id: "areas_legislacao", text: "Áreas" },
                { id: "materiais_legislacao", text: "Materiais" },
                { id: "anotacoes_legislacao", text: "Anotações" },
                { id: "lista_exercicios_legislacao", text: "Lista de Exercícios" },
                { id: "edital_legislacao", text: "Edital" },
                { id: "loja_legislacao", text: "Lojas LG" }
            ]
        },
        4: {
            title: "Compliance",
            items: [
                { id: "areas_compliance", text: "Áreas" },
                { id: "materiais_compliance", text: "Materiais" },
                { id: "anotacoes_compliance", text: "Anotações" },
                { id: "lista_exercicios_compliance", text: "Lista de Exercícios" },
                { id: "edital_compliance", text: "Edital" },
                { id: "loja_compliance", text: "Lojas CP" }
            ]
        },
        5: {
            title: "Tecnologia da Informação",
            items: [
                { id: "areas_ti", text: "Áreas" },
                { id: "materiais_ti", text: "Materiais" },
                { id: "anotacoes_ti", text: "Anotações" },
                { id: "lista_exercicios_ti", text: "Lista de Exercícios" },
                { id: "edital_ti", text: "Edital" },
                { id: "loja_ti", text: "Lojas TI" }
            ]
        },
        6: {
            title: "Matemática",
            items: [
                { id: "areas_matematica", text: "Áreas" },
                { id: "materiais_matematica", text: "Materiais" },
                { id: "anotacoes_matematica", text: "Anotações" },
                { id: "lista_exercicios_matematica", text: "Lista de Exercícios" },
                { id: "edital_matematica", text: "Edital" },
                { id: "loja_matematica", text: "Lojas MA" }
            ]
        },
        7: {
            title: "Inglês",
            items: [
                { id: "areas_ingles", text: "Áreas" },
                { id: "materiais_ingles", text: "Materiais" },
                { id: "anotacoes_ingles", text: "Anotações" },
                { id: "lista_exercicios_ingles", text: "Lista de Exercícios" },
                { id: "edital_ingles", text: "Edital" },
                { id: "loja_ingles", text: "Lojas ING" }
            ]
        }
    };


    return menuItems[identificacao_da_materia] || { title: "Menu", items: [] };
}


function createMenuItem(id, text) {
    const itemContainer = createElementWithClass("div", "posiciona_box_menu_lateral_box_full_itens", "", id);
    const itemText = createElementWithClass("div", "ajeita_ajeita_text_itens_menu_lateral_esq", text);
    itemContainer.appendChild(itemText);
    return itemContainer;
}

let ultima_materia=0

export default function generateMenu(identificacao_da_materia) {

    const box_slide_full_menu_lateral= document.querySelector(".box_slide_full_menu_lateral")
    const esmaecer_tela= document.querySelector(".esmaecer_class")

    if(box_slide_full_menu_lateral && identificacao_da_materia==ultima_materia ){
        box_slide_full_menu_lateral.remove()
        esmaecer_tela.remove()
    }else{

    console.log("passou")
    
    const { title, items } = seleciona_materia(identificacao_da_materia);

    
    const boxSlideVertical = createElementWithClass("div", "box_slide_menu_vertical", "", "cb_bsm_vertical");
    const boxSlideHorizontal = createElementWithClass("div", "box_slide_menu_horizontal", "", "cb_bsm_horizontal");
    const boxSlideFullMenuLateral = createElementWithClass("div", "box_slide_full_menu_lateral", "", "cb_bsm");

    
    const arrumandoPositionBoxEsquerda = createElementWithClass("div", "arrumando_position_box_esquerda");

    
    const tituloMenu = createElementWithClass(
        "div",
        "ajeita_ajeita_text_itens_menu_lateral_esq titulo_menu_laterl_direito",
        title
    );

    
    const posicionaTextInMenuLateralEsq = createElementWithClass("div", "posiciona_text_in_menu_lateral_esq");
    posicionaTextInMenuLateralEsq.appendChild(tituloMenu);
    arrumandoPositionBoxEsquerda.appendChild(posicionaTextInMenuLateralEsq);

    
    items.forEach(item => {
        const menuItem = createMenuItem(item.id, item.text);
        arrumandoPositionBoxEsquerda.appendChild(menuItem);
    });

    const esmaecer_tela= createElementWithClass("div", "esmaecer_class")

    
    boxSlideFullMenuLateral.appendChild(arrumandoPositionBoxEsquerda);

  
    if(!esmaecer_tela){
        console.log(esmaecer_tela)
        document.body.appendChild(esmaecer_tela)
    }
    

    document.body.appendChild(boxSlideVertical);
    document.body.appendChild(boxSlideHorizontal);
    document.body.appendChild(boxSlideFullMenuLateral);

    
    ultima_materia=identificacao_da_materia
    }
}
