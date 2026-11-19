
import axios from "axios";
import  * as data_collecter from "./api.js"
export function card_creation(card) {


 console.log(card);
 
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
        card_discription.classList.add('m-3','flex')
        //modif button add
        const card_modif_btn=document.createElement('button')
        card_modif_btn.textContent="modifier"
        card_modif_btn.dataset.id=cardinfo.id
        card_modif_btn.classList.add('m-4', 'bg-gray-700', 'hover:bg-gray-900', 'py-2', 'px-3', 'rounded-sm', 'text-purple-100' )
        
        
        
        
        const todo_holder=document.querySelector('#todo_holder')
        const inprogress_holder=document.querySelector('#inprogress_holder')
        const done_holder=document.querySelector('#done_holder')
       
        if (cardinfo.status=="todo"){
            
        todo_holder.append(cardbody)
        cardbody.append(card_lable ,card_title ,card_discription)
        

        }else if (cardinfo.status=="in-progress"){
           

             inprogress_holder.append(cardbody)
        cardbody.append(card_lable ,card_title ,card_discription)

        }else if(cardinfo.status=="done"){
         
             done_holder.append(cardbody)
        cardbody.append(card_lable ,card_title ,card_discription)
        }
        card_discription.append(card_modif_btn)



        
       

        
       
    






    }


}

// export function search_cards(data){
//     const search_holder=document.querySelector('#search_display')
//     search_holder.textContent=""
//     card_creation(search_holder,data)
            
    

// }




let todo_data = []
let inpro_data = []
let done_data = []



const add_card_btn = document.querySelector('#addbtn')
const out_card_btn = document.querySelector('#out')

document.querySelector('#refreshbtn').addEventListener('click', refresh_error )
    function refresh_error(){
    document.querySelector('#errorsec').classList.toggle('hidden')

    data_collecter.tasks_data()
}


add_card_btn.addEventListener('click', () => {
    const form = document.querySelector('#wizard')
    form.classList.toggle("hidden")

})
out_card_btn.addEventListener('click', () => {
    const form = document.querySelector('#wizard')
    form.classList.toggle("hidden")

})

const task_form = document.querySelector('#add_modif_form')
task_form.addEventListener("submit", (event) => {

    event.preventDefault();
    const card_info = {

        title: null,
        description: null,
        status: null,
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
    
    
    
    
    
    
    
})
const priority_filter = document.querySelector('#priority_filter')
const assignee_filter = document.querySelector('#assignee_filter')
export function fillter_cards() {
    const priority = priority_filter.value
    const assignee = assignee_filter.value
console.log("i am in");

    let filter = ""
    if (priority !== "" && !assignee) {
        filter += "priority=" + priority
    }
    if (assignee !== "" && !priority) {
        filter += "assignee=" + assignee
    }else{
        filter += "assignee=" + assignee +"&priority=" +priority
    }
    
data_collecter.data_filtering_api(filter)
   

        
}



export function modif_from_wizard(e){
    const task_modif={};
    console.log(e);
    
    
    document.querySelector('#wizard').classList.toggle('hidden')
    document.querySelector("#title_add").value=e
    document.querySelector('[value="add"]').classList.add('hidden')
    const form_modif_btn=document.querySelector('[value="modif"]')
    form_modif_btn.classList.remove('hidden')
    form_modif_btn.dataset.id=e
    

    


    
    

}
// const user_search = document.querySelector('#searchbar')
// user_search.addEventListener('input', (event) => {
    //     const search_input=event.target.value
    
    //     search(search_input)
    
// })
// function search(input ) {
//     if (input.trim() === "") {
//         section.classList.add("hidden")
//         return
//     }

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





