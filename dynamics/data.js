import { card_creation } from './ui.js'
import { task_wizard } from './ui.js'
function loader_data() {
    Promise.all([

        fetch("https://flowboard-api-virid.vercel.app/cards?status=todo").then(response => response.json()),
        fetch("https://flowboard-api-virid.vercel.app/cards?status=in-progress").then(response => response.json()),
        fetch("https://flowboard-api-virid.vercel.app/cards?status=todo").then(response => response.json())
    ])
        .then(([todoData, inProgressData, doneData]) => {
            todo_show(todoData);
            inprogress_show(inProgressData);
            done_show(doneData);
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
let a=""
const task_form = document.querySelector('#add_task_form')
task_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const test=event.target
const testing=test.children
console.log(toType(testing));

    
    

})


