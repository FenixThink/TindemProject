
import { allChats } from '../all-chats/allChats.js'
import { divSearch } from '../all-chats/search.js'

export const partLeft =() =>{
    const chats = allChats()    

    const totalpartLeft = document.createElement('div')
    totalpartLeft.className = 'totalpartLeft'
    totalpartLeft.appendChild(chats)
    

    return totalpartLeft;
}