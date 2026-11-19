
import * as painter from './ui.js'
import * as data_collecter from './api.js'



await data_collecter.tasks_data()

priority_filter.addEventListener('change', painter.fillter_cards)
assignee_filter.addEventListener('change', painter.fillter_cards)
const card_modif_btns = document.querySelectorAll('.cardbody .modif')

card_modif_btns.forEach((element) => {

    element.addEventListener('click', (e) => {

        painter.modif_from_wizard(e.target.dataset.id)
    })
})





const add_modif_form = document.querySelector('#add_modif_form')
add_modif_form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.submitter.value == modif) {
        console.log(e.submitter.value);



        //const  data_collecter.data_modifiying_api(painter.modif_from_wizard(e))

    } else {

    }



})




export function delete_data(element){

      const id = element.target.dataset.id
            data_collecter.data_delete_api(id)
}




