
export default function createAnnotationsBox(){
    const conected_the_div_created_the_to_question_console= document.querySelector("#create_div_on_the_question_console_for_the_contents_of_the_comments_response_anotation_statistical")
   
    if(conected_the_div_created_the_to_question_console){
        // Função para criar e adicionar os elementos do HTML
         
            // Container principal
            const container = document.createElement("div");
            container.className = "box_for_anotacoes_space";
            container.id = "box_for_anotacoes_space_id";

            conected_the_div_created_the_to_question_console.appendChild(container)
        
            
            // Linhas decorativas
            const verticalLine = document.createElement("div");
            verticalLine.className = "linha_vertical_estilizacao color_estilizacao_anota_box";
            container.appendChild(verticalLine);


            const horizontalLineTop = document.createElement("div");
            horizontalLineTop.className = "linha_horizontal_superior_maior_estilizacao color_estilizacao_anota_box";
            container.appendChild(horizontalLineTop);

            const verticalLineRight = document.createElement("div");
            verticalLineRight.className = "linha_vertical_estilizacao_menor_canto_direito color_estilizacao_anota_box";
            container.appendChild(verticalLineRight);

            const horizontalLineRight = document.createElement("div");
            horizontalLineRight.className = "linha_horizontal_estilizacao_menor_canto_direito color_estilizacao_anota_box";
            container.appendChild(horizontalLineRight);

            // Caixa central com anotação
            const verticalLineCenter = document.createElement("div");
            verticalLineCenter.className = "linha_vertical_estilizacao_maior_central color_estilizacao_anota_box";
            container.appendChild(verticalLineCenter);

            const textBox = document.createElement("div");
            textBox.className = "box_para_texto_anotacao_edit";
            textBox.id = "box_para_texto_anotacao_edit_id";
            verticalLineCenter.appendChild(textBox);

            const slideBox = document.createElement("div");
            slideBox.className = "box_slide_for_text_anotacao_edtit";
            slideBox.id = "box_slide_for_text_anotacao_edtit_id";
            textBox.appendChild(slideBox);

            // Título da Anotação
            const titleBox = document.createElement("div");
            titleBox.className = "box_in_anotacao_slide_titulo";
            slideBox.appendChild(titleBox);

            const titleLabel = document.createElement("div");
            titleLabel.className = "box_in_anotacao_slide_titulo_titulo";
            titleLabel.textContent = "Titulo:";
            titleBox.appendChild(titleLabel);

            const titleInfo = document.createElement("div");
            titleInfo.className = "box_titulo_info_tag";
            titleBox.appendChild(titleInfo);

            // Área de texto
            const textAreaBox = document.createElement("div");
            textAreaBox.className = "for_text_area_in_slide_anotacao";
            slideBox.appendChild(textAreaBox);

            const textArea = document.createElement("textarea");
            textAreaBox.appendChild(textArea);

            // Botões de ação (Excluir, Editar, Relevância)
            const actionsBox = document.createElement("div");
            actionsBox.className = "box_editar_mudar_imp_exclui";
            container.appendChild(actionsBox);

            ["Excluir", "Editar", "Relevância"].forEach(action => {
                const actionContainer = document.createElement("div");
                actionContainer.className = "box_edicao_dentro_do_conj_editar";
                const button = document.createElement("div");
                button.className = `btn_${action.toLowerCase()}_anotacoes`;
                button.textContent = action;
                if (action === "Editar") button.id = "btn_editar_anotacoes_id";
                actionContainer.appendChild(button);
                actionsBox.appendChild(actionContainer);
            });

            // Título principal de Anotações
            const annotationsTitle = document.createElement("div");
            annotationsTitle.className = "titulo_box_for_anotacoes";
            annotationsTitle.textContent = "Anotações";
            container.appendChild(annotationsTitle);

            // Botões de Cores para Relevância
            const relevanceBox = document.createElement("div");
            relevanceBox.className = "box_btn_cores";
            container.appendChild(relevanceBox);

            const relevanceLabel = document.createElement("div");
            relevanceLabel.className = "box_btn_cores_subtitulo";
            relevanceLabel.textContent = "Grau de relevância";
            relevanceBox.appendChild(relevanceLabel);

            ["red", "yellow", "green"].forEach(color => {
                const colorButton = document.createElement("button");
                colorButton.className = `importancia_cores_btn_${color} imo_cr_${color}_btn btn_class_em_comum_importancia`;
                colorButton.id = `imp_${color}_btn`;
                relevanceBox.appendChild(colorButton);
            });

            // Campo de Título da Anotação
            const titleInputBox = document.createElement("div");
            titleInputBox.className = "box_btn_titulo_anotacoes";
            container.appendChild(titleInputBox);

            const titleInputLabel = document.createElement("div");
            titleInputLabel.className = "box_btn_cores_subtitulo";
            titleInputLabel.textContent = "Título";
            titleInputBox.appendChild(titleInputLabel);

            const titleInput = document.createElement("input");
            titleInput.type = "text";
            titleInput.name = "titulo";
            titleInput.id = "input_anotacoes_titulo_id";
            titleInput.className = "input_anotacoes_titulo_class";
            titleInputBox.appendChild(titleInput);

            // Botão para Adicionar Anotação
            const addButton = document.createElement("button");
            addButton.className = "btn_adicionar_anotação_class";
            addButton.id = "btn_adicionar_anotação_id";
            addButton.textContent = "Adicionar";
            container.appendChild(addButton);

            // Área de Texto Principal
            const mainTextBox = document.createElement("div");
            mainTextBox.className = "box_for_text_area";
            mainTextBox.id = "box_for_text_area_id";
            container.appendChild(mainTextBox);

            const overlay = document.createElement("div");
            overlay.className = "bloqueia_textarea_class";
            overlay.id = "bloqueia_textarea_id";
            mainTextBox.appendChild(overlay);

            const mainTextArea = document.createElement("textarea");
            mainTextArea.id = "area_texto_anotaçao_id";
            mainTextBox.appendChild(mainTextArea);

            // Seção de Últimas Anotações
            const lastNotesBox = document.createElement("div");
            lastNotesBox.className = "box_ultimas_anotacoes";
            lastNotesBox.id = "box_ultimas_anotacoes_id";
            container.appendChild(lastNotesBox);

            // Adiciona o container ao body ou a outro elemento desejado
           
    }

        // Chama a função para criar o HTML
        console.log("cachorro")
}
