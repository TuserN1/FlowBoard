
import * as painter from './ui.js'
import * as data_collecter from './api.js'



await data_collecter.tasks_data()

priority_filter.addEventListener('change', painter.fillter_cards)
assignee_filter.addEventListener('change', painter.fillter_cards)
const card_modif_btns = document.querySelectorAll('.cardbody .modif')

card_modif_btns.forEach( (element) => {

    element.addEventListener('click',async (e) => {
        const id =e.target.dataset.id
        const task= await data_collecter.get_one_task(id)

        painter.modif_from_wizard(id,task)
    })
})





const add_modif_form = document.querySelector('#add_modif_form')
add_modif_form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.submitter.value == "modif") {
        console.log(e.submitter.dataset.id);
         const formData = new FormData(e.target)
        const fields = Object.fromEntries(formData)
        
         
         



        //const  data_collecter.data_modifiying_api(painter.modif_from_wizard(e))

    } else {

    }



})



// delet is working hmdollah
export async function delete_data(element){
     const result = await Swal.fire({
        title: 'Delete this card?',
        text: "You won't be able to undo this.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#c2410c',
        cancelButtonColor: '#4b5563',
        confirmButtonText: 'Yes, delete it',
        cancelButtonText: 'Cancel'
    })

      if(result.isConfirmed){
        const id = element.target.dataset.id
            data_collecter.data_delete_api(id)
            Swal.fire({
            title: 'Deleted!',
            icon: 'success',
            timer: 1400,
            showConfirmButton: false
        })
        }
}




export function position_changer(e){
    
const id=e.target.dataset.id;
const status={status:e.target.dataset.status}
data_collecter.data_position_change_api(id,status)

}




