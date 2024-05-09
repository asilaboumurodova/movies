import { create } from "zustand";

const popularStore = create((set)=>({
    movie:[],
    tv:[],
    getPopular:(data,type)=>{
        if(type === 'movie'){
            set({movie:data})
        }else{
            set({tv:data})
        }
    }
}))
export default popularStore