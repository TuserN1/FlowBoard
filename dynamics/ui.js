

export function card_creation(card, info,count_place) {


card.textContent=""
    for (const key in info) {
        const cardinfo = info[key];
        const cardbody = document.createElement('div')
        cardbody.classList.add("bg-gray-500", "h-24", "rounded-sm", "my-4","flex-col","flex","justify-start","h-max")
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
        const card_discription=document.createElement('p')
        card_title.textContent=cardinfo.title
        card_discription.textContent=cardinfo.description
        card_title.classList.add("mx-4")
        card_discription.classList.add('m-3')
        
        
        
        
        
        
        card.append(cardbody)
        // cardbody.append()
        cardbody.append(card_lable ,card_title ,card_discription)

        
        if (count_place) {
        count_place.textContent = info.length
    }






    }


}

export function search_cards(data){
    const search_holder=document.querySelector('#search_display')
    search_holder.textContent=""
    card_creation(search_holder,data)
            
    

}
