
import * as painter from './ui.js'
import * as data_collecter from './api.js'



await data_collecter.tasks_data()

priority_filter.addEventListener('change', painter.fillter_cards)
assignee_filter.addEventListener('change', painter.fillter_cards)

const card_modif_btns = document.querySelectorAll('.cardbody .modif')

card_modif_btns.forEach((element) => {

    element.addEventListener('click', async (e) => {
        const id = e.target.dataset.id
        const task = await data_collecter.get_one_task(id)

        painter.modif_from_wizard(id, task)
    })
})




        
        const add_modif_form = document.querySelector('#add_modif_form')
        add_modif_form.addEventListener('submit',async (e) => {
            e.preventDefault()
        await modifying_add_form_data(e)



        })

export async function modifying_add_form_data(e) {
    if (e.submitter.value == "modif") {
        const id = e.submitter.dataset.id;
        const formData = new FormData(e.target)
        const task = Object.fromEntries(formData)




        await data_collecter.data_modifiying_api(id, task)
        document.querySelector('#wizard').classList.add('hidden')
        e.target.reset()


        

    } else {

        const formData = new FormData(e.target)
        const task = Object.fromEntries(formData)
        console.log(task);

        
        const   task_info = {
            title: task.title,
            description: task.description,
            priority:task.priority,
            assignee: task.assignee,
            status: "todo",
            tags: []
        }
        console.log(task_info);
        
        data_collecter.data_adder_api(task_info)
        document.querySelector('#wizard').classList.add('hidden')
        e.target.reset()





    }
}



// delet is working hmdollah
export async function delete_data(element) {
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

    if (result.isConfirmed) {
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




export function position_changer(e) {

    const id = e.target.dataset.id;
    const status = { status: e.target.dataset.status }
    data_collecter.data_position_change_api(id, status)

}


const ai_btn = document.querySelector('#ai_btn')
const ai_wizard = document.querySelector('#ai_task')
const add_wizard = document.querySelector('#task_add')
ai_btn.addEventListener('click',()=>{
    ai_btn.classList.toggle('hidden')
    ai_wizard.classList.toggle('hidden')
    add_wizard.classList.toggle('hidden')





})


const add_ai_form = document.querySelector('#add_ai_form')
        add_ai_form.addEventListener('submit',async (e) => {
            e.preventDefault()
        ai_form_data(e)
            


        })




        function ai_form_data(e){
const ai_data= Object.fromEntries(new FormData(e.target))


const desctiption =ai_data.description
const count =ai_data.ai_counter



data_collecter.task_generator(desctiption,count)


        }








