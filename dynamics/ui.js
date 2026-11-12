

export function card_creation(card, info) {



    for (const key in info) {
        const cardinfo = info[key];
        const cardbody = document.createElement('div')
        cardbody.classList.add("bg-blue-300", "h-24", "rounded-sm", "my-4","flex-col","flex","justify-start","h-max")
        console.log(card)
        const card_lable=document.createElement('span')
        if(info[key].priority=="high"){
            card_lable.textContent=info[key].priority
            card_lable.classList.add("m-2","my-2","p-1","px-3","bg-red-400","w-max","rounded-lg")
        }
        if(info[key].priority=="medium"){
            card_lable.textContent=`${info[key].priority}`
        card_lable.classList.add("m-2","my-2","p-1","px-3","bg-yellow-400","w-max","rounded-lg")
    }
        if(info[key].priority=="low"){
            card_lable.textContent=`${info[key].priority}`
            card_lable.classList.add("m-2","my-2","p-1","px-3","bg-green-400","w-max","rounded-lg")
        }
        
        const card_title=document.createElement('h4')
        card_title.textContent=info[key].title
        card_title.classList.add("mx-4")
        
        
        
        
        
        
        card.append(cardbody)
        // cardbody.append()
        cardbody.append(card_lable ,card_title)






    }


}

export function task_wizard(exemple){
    const modale_holder=document.querySelector('#wizard')
    

}