import { ADD, DELETE, UPDATE,DONE } from "../action/types";
import { v4 as uuidv4 } from 'uuid';

const todos=[]
const todoreducer=(state=todos,action)=>{
    switch (action.type) {
        case ADD :
           return [...state,{id:uuidv4(),title:action.payload, isDone:false}]
        case DELETE:
            return state.filter((e)=>e.id!==action.payload) 
        case UPDATE:
            return state.map((e)=>{if(e.id===action.payload.id){return {...e,title:action.payload.updateTitle}}else{return e}})      
        case DONE:
            return state.map((e)=>{if(e.id===action.payload){return {...e, isDone:!e.isDone}}else{return e}})
        default:
            return state
    }

}
export default todoreducer