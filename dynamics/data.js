import { card_creation } from './ui.js'
import { search_cards } from './ui.js'
let todo_data = []
let inpro_data = []
let done_data = []
function loader_data() {
    Promise.all([

        fetch("https://flowboard-api-virid.vercel.app/cards?status=todo").then(response => response.json()),
        fetch("https://flowboard-api-virid.vercel.app/cards?status=in-progress").then(response => response.json()),
        fetch("https://flowboard-api-virid.vercel.app/cards?status=done").then(response => response.json())
    ])
        .then(([todoData, inProgressData, doneData]) => {
            todo_data = todoData
            todo_show(todo_data);
            inpro_data = inProgressData
            inprogress_show(inpro_data);
            done_data = doneData
            done_show(done_data);

        })
        .catch(error => {
            console.error("Error fetching cards:", error);
            document.querySelector('#errorsec').classList.toggle('hidden')
        });

    function todo_show(data) {

        let place = document.querySelector('#todo_holder')
        card_creation(place, data)

    }
    function inprogress_show(data) {
        let place = document.querySelector('#inprogress_holder')
        card_creation(place, data)

    }
    function done_show(data) {


        let place = document.querySelector('#done_holder')
        card_creation(place, data)

    }
}
loader_data()

document.querySelector('#refreshbtn').addEventListener('click', () => {
    document.querySelector('#errorsec').classList.toggle('hidden')

    loader_data()
})
const add_card_btn = document.querySelector('#addbtn')
const out_card_btn = document.querySelector('#out')
add_card_btn.addEventListener('click', () => {
    const form = document.querySelector('#wizard')
    form.classList.toggle("hidden")

})
out_card_btn.addEventListener('click', () => {
    const form = document.querySelector('#wizard')
    form.classList.toggle("hidden")

})

const task_form = document.querySelector('#add_task_form')
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
    let place_todo = document.querySelector('#todo_holder')
    card_creation(place_todo, todo_data)







})
const user_search = document.querySelector('#searchbar')
user_search.addEventListener('input', (event) => {
    const search_input=event.target.value
    console.log(search_input);
    
    search(search_input)

})
function search(input ) {

    const url = "https://flowboard-api-virid.vercel.app/cards?title_like=" + encodeURIComponent(input)
    fetch(url)
        .then((response) => response.json())
        .then((data) =>  search_cards(data))
        .catch(error => {
            console.error("Error fetching cards:", error);
        }
        );
       



}

function fillter_cards() {


}

