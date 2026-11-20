import axios from "axios";
import { card_creation } from "./ui.js";
export async function tasks_data() {
const loading=document.querySelector('#loading_section')
    try {
        loading.classList.toggle('hidden')
        const data = await axios.get("https://flowboard-api-virid.vercel.app/cards/");

        return card_creation(await data.data)

    } catch (error) {
        console.error("Error. fetching cards:", error);
        document.querySelector('#errorsec').classList.toggle('hidden')
        if (error.title == "undefined") {
            document.querySelector('#errorsec div').textContent = "not found"
        } else { document.querySelector('#errorsec div').prepend(error.title) }
        
    } finally{
        loading.classList.toggle('hidden')
    }
        


}


export async function data_filtering_api(filter) {
    try {
        const [filtered_data] = await Promise.all([
            axios.get("https://flowboard-api-virid.vercel.app/cards?" + filter),
        ])
        console.log(filtered_data.data)
        return card_creation(filtered_data.data)


    } catch (error) {
        console.error("Error filtering cards:", error.name)
        console.error(error.message)
    }
}

export async function get_one_task(id) {

    try {

        const data = await axios.get("https://flowboard-api-virid.vercel.app/cards/"+id);
console.log(data.data);

        return data.data

    } catch (error) {
        console.error("Error. fetching cards:", error);
        document.querySelector('#errorsec').classList.toggle('hidden')

    };
}

export async function data_modifiying_api(id, task) {
    try {

        await axios.patch("https://flowboard-api-virid.vercel.app/cards/" + id + "?password=1234", task)

        return tasks_data()
    } catch (error) {
        console.error("Error filtering cards:", error.name)
        console.error(error.message)
    }
}



export async function data_adder_api(task) {
    try {

        await axios.post("https://flowboard-api-virid.vercel.app/cards?password=1234", task)

       return  await tasks_data()
    } catch (error) {
        console.error("Error filtering cards:", error.name)
        console.error("Server says:", JSON.stringify(error.response?.data?.details, null, 2))
        document.querySelector('#errorsec').classList.remove('hidden')
    }



}


export async function data_delete_api(id) {

    try {
        await axios.delete('https://flowboard-api-virid.vercel.app/cards/' + id + '?password=1234')
        return await tasks_data()

    } catch (error) {
        console.error("Error. fetching cards:", error);
        document.querySelector('#errorsec').classList.toggle('hidden')

    }

}

export async function data_position_change_api(id,status) {
console.log("id:", id, "status:", status)
    try {
        await axios.patch('https://flowboard-api-virid.vercel.app/cards/' + id + '?password=1234',status     )
        return await tasks_data()

    } catch (error) {
        console.error("Error. fetching cards:", error);
        document.querySelector('#errorsec').classList.toggle('hidden')

    }

}






























document.querySelector('#reset').addEventListener('click', () => {


    fetch('https://flowboard-api-virid.vercel.app/reset?password=1234', {
        method: 'POST',
        headers: {
            'X-Workspace': 'public'
        }
    })
    document.querySelector('#errorsec').classList.add('hidden')

    tasks_data()
})












