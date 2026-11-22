
import  * as data_collecter from "./api.js"
import * as main from "./main.js"
export function card_creation(card) {


 
    
        todo_holder.textContent=""
        inprogress_holder.textContent=""
        done_holder.textContent=""
 for (const key in card) {
     const card_collection=card[key]
     const cardinfo = card_collection;
     const cardbody = document.createElement('div')
     
        
        cardbody.classList.add("cardbody","bg-gray-500", "h-24", "rounded-sm", "my-4","flex-col","flex","justify-start","h-max")
        const card_lable=document.createElement('span')
        if(cardinfo.priority=="high"){
            card_lable.textContent=cardinfo.priority
            card_lable.classList.add("m-2","my-2","p-1","px-3","bg-red-300","w-max","rounded-lg")
        }
        if(cardinfo.priority=="medium"){
            card_lable.textContent=`${cardinfo.priority}`
        card_lable.classList.add("m-2","my-2","p-1","px-3","bg-yellow-300","w-max","rounded-lg")
    }
        if(cardinfo.priority=="low"){
            card_lable.textContent=`${cardinfo.priority}`
            card_lable.classList.add("m-2","my-2","p-1","px-3","bg-green-300","w-max","rounded-lg")
        }

        
        const card_title=document.createElement('h4')
        const card_discription=document.createElement('div')


        card_title.textContent=cardinfo.title
        card_discription.textContent=cardinfo.description
        card_title.classList.add("mx-4")
        card_discription.classList.add('m-3','flex','items-center','justify-between')




        //modif button add
        const card_modif_btn=document.createElement('button')
        const card_delete_btn=document.createElement('button')
        const delete_modif_holder=document.createElement('div')
        const position_left=document.createElement('button')
        const position_right=document.createElement('button')


        delete_modif_holder.classList.add('flex','flex-col')
        position_right.classList.add('arrow','m-2', 'bg-gray-700', 'hover:bg-gray-900', 'py-2', 'px-3', 'rounded-sm', 'text-purple-100')
        position_left.classList.add('arrow','m-2', 'bg-gray-700', 'hover:bg-gray-900', 'py-2', 'px-3', 'rounded-sm', 'text-purple-100')
        
        position_left.textContent="<——"
        position_right.textContent="——>"
        card_modif_btn.textContent="modifier"
        card_delete_btn.textContent="delete"
        card_modif_btn.classList.add('modif','m-2', 'bg-gray-700', 'hover:bg-gray-900', 'py-2', 'px-3', 'rounded-sm', 'text-purple-100' )
        card_delete_btn.classList.add('delete','m-2', 'bg-orange-800', 'hover:bg-orange-900', 'py-2', 'px-3', 'rounded-sm', 'text-purple-100' )
        
        
        card_modif_btn.dataset.id=cardinfo.id
        card_delete_btn.dataset.id=cardinfo.id
        
        
        
        const todo_holder=document.querySelector('#todo_holder')
        const inprogress_holder=document.querySelector('#inprogress_holder')
        const done_holder=document.querySelector('#done_holder')
        
        if (cardinfo.status=="todo"){
        position_right.dataset.id=cardinfo.id
        position_right.dataset.status='in-progress'

            
            todo_holder.append(cardbody)
            cardbody.append(card_lable ,card_title ,card_discription,position_right)
            
            
        }else if (cardinfo.status=="in-progress"){
            position_right.dataset.id=cardinfo.id
        position_right.dataset.status='done'
        position_left.dataset.id=cardinfo.id
        position_left.dataset.status='todo'
            
            
            inprogress_holder.append(cardbody)
            cardbody.append(card_lable ,card_title ,card_discription,position_right,position_left)
            
        }else if(cardinfo.status=="done"){
             position_left.dataset.id=cardinfo.id
        position_left.dataset.status='in-progress'
            
            done_holder.append(cardbody)
            cardbody.append(card_lable ,card_title ,card_discription,position_left)
        }

        card_discription.append(delete_modif_holder)
        delete_modif_holder.append(card_modif_btn,card_delete_btn)
        
        card_delete_btn.addEventListener('click',(event)=>{
            main.delete_data(event)
        })


        const position_btns=document.querySelectorAll('.arrow')
        position_btns.forEach(element => {
            element.addEventListener('click',(e)=>{
        
        main.position_changer(e)
        
            })
            
        });

        



        





        
       

        
       
    






    }
    


}








const add_card_btn = document.querySelector('#addbtn')
const out_card_btn = document.querySelector('.out')

document.querySelector('#refreshbtn').addEventListener('click', refresh_error )
    function refresh_error(){
    document.querySelector('#errorsec').classList.toggle('hidden')

    data_collecter.tasks_data()
}


add_card_btn.addEventListener('click', () => {
    const form = document.querySelector('#wizard')
    const form_add_btn=document.querySelector('[value="add"]')
    const form_modif_btn=document.querySelector('[value="modif"]')
    form_add_btn.classList.remove('hidden') 
    form_modif_btn.classList.add('hidden')  
    form.classList.toggle("hidden")


})
out_card_btn.addEventListener('click', () => {
    const wizard = document.querySelector('#wizard')
    wizard.classList.toggle("hidden")


})
const priority_filter = document.querySelector('#priority_filter')
const assignee_filter = document.querySelector('#assignee_filter')
let search_filter = "";

 const user_search = document.querySelector('#searchbar')
user_search.addEventListener('input', (event) => {
      
       
    
    fillter_cards(event)
    
})

export function fillter_cards(event) {
console.log(event)
    const priority = priority_filter.value
    const assignee = assignee_filter.value
    const search = user_search.value
    const filter=new URLSearchParams()


    
    if (priority !== ""   ) {filter.append("priority",priority)}

    if (assignee !== "") {filter.append("assignee",assignee)}
        
    if(search!== "" ){filter.append("title_like", search)}
console.log(filter.toString());

data_collecter.data_filtering_api(filter)
   
        
}


export async function modif_from_wizard(e,task){
    
    console.log(task);

    document.querySelector('#wizard').classList.toggle('hidden')
    document.querySelector("#title_add").value=task.title
    document.querySelector("#description_add").value=task.description
    document.querySelector("#priority_add").value=task.priority
    document.querySelector("#assignee_add").value=task.assignee
    document.querySelector('[value="add"]').classList.add('hidden')
    const form_modif_btn=document.querySelector('[value="modif"]')
    form_modif_btn.classList.remove('hidden')
    form_modif_btn.dataset.id=e
    
    
    
    
  

    
    

}



//     const url = "https://flowboard-api-virid.vercel.app/cards?title_like=" + encodeURIComponent(input)
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) =>  {
//             if(data.length!==0){

//                 const section=document.querySelector('#search_display').parentElement
//                  if (data.length !== 0) {
//                 section.classList.remove("hidden")
//                 ui.search_cards(data)      
//             } else {
//                 section.classList.add("hidden")
//             }
//         }
//         })
//         .catch(error => {
            
//             console.error("Error fetching cards:", error);
//         }
//         );
       


// }





