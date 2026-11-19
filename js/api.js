import axios from "axios";
import { card_creation } from "./ui.js";
export async function tasks_data() {

    try {

        const data = await axios.get("https://flowboard-api-virid.vercel.app/cards/");

        return card_creation(data.data)

    } catch (error) {
        console.error("Error. fetching cards:", error);
        document.querySelector('#errorsec').classList.toggle('hidden')

    };





































































    // export async function loader_data() {
    // const [todoData, inProgressData, doneData] = await Promise.all([

    //         axios.get("https://flowboard-api-virid.vercel.app/cards?status=todo"),
    //         axios.get("https://flowboard-api-virid.vercel.app/cards?status=in-progress"),
    //         axios.get("https://flowboard-api-virid.vercel.app/cards?status=done")
    //     ])

    //         .catch(error => {  
    //             console.error("Error. fetching cards:", error);
    //             document.querySelector('#errorsec').classList.toggle('hidden')
    //         });

    // todo_show(todoData)
    // inprogress_show(inProgressData)
    // done_show(doneData)


    //  function todo_show(data) {

    //         let place = document.querySelector('#todo_holder')
    //         card_creation(place, data,document.querySelector('#todototal'))

    //     }
    //  function inprogress_show(data) {
    //         let place = document.querySelector('#inprogress_holder')
    //         card_creation(place, data,document.querySelector('#progresstotal'))

    //     }
    //     function done_show(data) {


    //         let place = document.querySelector('#done_holder')
    //         card_creation(place, data,document.querySelector('#complatedtotal'))

    //     }
    // }


    //     axios
    //   .put("https://jsonplaceholder.typicode.com/posts/1", {
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     console.log("Request completed");
    //   });
}


export async function data_filtering_api(filter) {
    try {
        const [filtered_data] = await Promise.all([
            axios.get("https://flowboard-api-virid.vercel.app/cards?" + filter),
        ])
        return card_creation(filtered_data.data)


    } catch (error) {
        console.error("Error filtering cards:", error.name)
        console.error(error.message)
    }
}

export async function data_modifiying_api(task ,id) {
    try {

      await axios.put("https://flowboard-api-virid.vercel.app/cards/"+ id +"?password=1234",  task)
      
        tasks_data()
    } catch (error) {
        console.error("Error filtering cards:", error.name)
        console.error(error.message)
    }
}



export async function data_adder_api(task){
    try {

        await axios.post("https://flowboard-api-virid.vercel.app/cards/?password=1234",  task)
      
        tasks_data()
    } catch (error) {
        console.error("Error filtering cards:", error.name)
        console.error(error.message)
    }



}
export async function get_one_task() {

    try {

        const data = await axios.get("https://flowboard-api-virid.vercel.app/cards/");

        return card_creation(data.data)

    } catch (error) {
        console.error("Error. fetching cards:", error);
        document.querySelector('#errorsec').classList.toggle('hidden')

    };
}



    




    