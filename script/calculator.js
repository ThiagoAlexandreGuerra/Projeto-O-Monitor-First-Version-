

export default async  function create_cauculator_elements_in_html(){

    const create_div_box_that_gives_the_shape_to_the_calculator=document.createElement("div")
    create_div_box_that_gives_the_shape_to_the_calculator.classList.add("box_that_gives_the_shape_to_the_calculator")
    create_div_box_that_gives_the_shape_to_the_calculator.id="box_that_gives_the_shape_to_the_calculator"

    const create_div_for_feedback_screen= document.createElement("div")
    create_div_for_feedback_screen.classList.add("div_for_feedback_screen_in_calculator")
    create_div_for_feedback_screen.id="div_for_feedback_screen_in_calculator"


    const text_for_screen_feedback=document.createElement("p")
    text_for_screen_feedback.classList.add("text_for_screen_feedback")
    text_for_screen_feedback.id="text_for_screen_feedback"

    const create_div_that_gives_the_shape_to_the_numbers_and_symbols_contents= document.createElement("div")
    create_div_that_gives_the_shape_to_the_numbers_and_symbols_contents.classList.add("div_that_gives_the_shape_to_the_numbers_contents_and_symbols")
    create_div_that_gives_the_shape_to_the_numbers_and_symbols_contents.id="div_that_gives_the_shape_to_the_numbers_contents_and_symbols"

    const numbers_box= document.createElement("div")
    numbers_box.classList.add("number_box_for_calculator")
    numbers_box.id="number_box_for_calculator"

    const symbols_box= document.createElement("div")
    symbols_box.classList.add("symbols_box_for_calculator")
    symbols_box.id="symbols_box_for_calculator"

    for(let i = 0 ; i < 10 ; ++i){

        const create_button_of_zero_to_nine= document.createElement("button")
        create_button_of_zero_to_nine.classList.add("button_of_zero_to_nine_for_calculator")
        create_button_of_zero_to_nine.id=`button_of_zero_to_nine_for_calculator_${i}`
        create_button_of_zero_to_nine.value=i
        create_button_of_zero_to_nine.innerHTML=String(i)
        numbers_box.appendChild(create_button_of_zero_to_nine)

    }
    const create_button_decimal= document.createElement("button")
        create_button_decimal.classList.add("button_of_zero_to_nine_for_calculator")
        create_button_decimal.id=`button_comma`
        create_button_decimal.innerHTML="."
        create_button_decimal.value="."
        numbers_box.appendChild(create_button_decimal)
    
    const create_button_delete= document.createElement("button")
    create_button_delete.classList.add("button_of_zero_to_nine_for_calculator" , "delete_hover_diferecial")
    create_button_delete.id=`button_delete`
    create_button_delete.value="delete"
    const create_element_image_delete= document.createElement("img")
    create_element_image_delete.src="/AULA_33_formulario/image_from_calculator/clear.png"
    create_button_delete.appendChild(create_element_image_delete)
    numbers_box.appendChild(create_button_delete)


    const array_calculator_symbols=[ "+" , "-" , "*","&#247;","^" ,"&radic;","%","&pi;",
                                    "sen" ,"cos","log",  "ln" , "INV" , "e" , "deg" , "!" , "=" ]

    array_calculator_symbols.forEach((c, i)=>{
        
        const create_button_symbols= document.createElement("button")
        create_button_symbols.classList.add("button_of_zero_to_nine_for_calculator")
        create_button_symbols.id=`symbol_${i}`
        create_button_symbols.innerHTML=c
        create_button_symbols.value=c
        symbols_box.appendChild(create_button_symbols)

    })

    const create_element_clear_all=document.createElement("button")
    create_element_clear_all.classList.add("button_calculator_clear_all")
    create_element_clear_all.id="button_calculator_clear_all"
    create_element_clear_all.innerHTML="Limpar"
    symbols_box.appendChild(create_element_clear_all)

    const conected_the_div_created_the_to_question_console= document.querySelector("#create_div_on_the_question_console_for_the_contents_of_the_comments_response_anotation_statistical")

    
    conected_the_div_created_the_to_question_console.appendChild(create_div_box_that_gives_the_shape_to_the_calculator)
    create_div_box_that_gives_the_shape_to_the_calculator.appendChild(create_div_for_feedback_screen)
    create_div_box_that_gives_the_shape_to_the_calculator.appendChild(create_div_that_gives_the_shape_to_the_numbers_and_symbols_contents)
    create_div_for_feedback_screen.appendChild(text_for_screen_feedback)
    create_div_that_gives_the_shape_to_the_numbers_and_symbols_contents.appendChild(numbers_box)
    create_div_that_gives_the_shape_to_the_numbers_and_symbols_contents.appendChild(symbols_box)

}





