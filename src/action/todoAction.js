import { ADD, DELETE, DONE, UPDATE } from "./types"

export const add =(newtitle)=>{
    return{type:ADD,
        payload:newtitle
    }
}

export const delete_task =(id)=>{
    return{type:DELETE,
        payload:id
    }
}
export const update_task =(id,updateTitle)=>{
    return{type:UPDATE,
        payload:{id,updateTitle}
    }
}
export const done =(id)=>{
    return{type:DONE,
        payload:id
    }
}