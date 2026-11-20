
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






export async function modifying_add_form_data(e){
     if (e.submitter.value == "modif") {
        const id=e.submitter.dataset.id;
         const formData = new FormData(e.target)
        const task = Object.fromEntries(formData)
        
       
         
         
    await data_collecter.data_modifiying_api(id, task)


        //const  data_collecter.data_modifiying_api(painter.modif_from_wizard(e))

    } else {


        
            event.preventDefault();
            const card_info = {
        
                title: null,
                description: null,
                status: "todo",
                priority: null,
                assignee: null,
                dueDate: null,
                tags: null,
                createdAt: "2026-11-09T11:09:20.433Z",
                updatedAt: "2026-11-09T11:09:20.433Z"
            }
        
        
        
            const title = document.querySelector('#title_add').value;
            const description = document.querySelector('#description_add').value;
            const priority = document.querySelector('#priority_add').value;
            const assignee = document.querySelector('#assignee_add').value;
        
        
        
            card_info.title = title
            card_info.description = description
            card_info.priority = priority
            card_info.assignee = assignee
            todo_data.push(card_info)
            console.log(todo_data);
             form.classList.toggle("hidden")
            let place_todo = document.querySelector('#todo_holder')
            card_creation(place_todo, todo_data)

    }
}



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




