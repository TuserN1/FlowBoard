export async function loader_data() {
    const [todoData, inProgressData, doneData] = await Promise.all([

        axios.get("https://flowboard-api-virid.vercel.app/cards?status=todo"),
        axios.get("https://flowboard-api-virid.vercel.app/cards?status=in-progress"),
        axios.get("https://flowboard-api-virid.vercel.app/cards?status=done")
    ])
       
        .catch(error => {  
            console.error("Error. fetching cards:", error);
            document.querySelector('#errorsec').classList.toggle('hidden')
        });

    function todo_show(data) {

        let place = document.querySelector('#todo_holder')
        card_creation(place, data,document.querySelector('#todototal'))

    }
    function inprogress_show(data) {
        let place = document.querySelector('#inprogress_holder')
        card_creation(place, data,document.querySelector('#progresstotal'))

    }
    function done_show(data) {


        let place = document.querySelector('#done_holder')
        card_creation(place, data,document.querySelector('#complatedtotal'))

    }
}