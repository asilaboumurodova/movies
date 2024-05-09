import { create } from "zustand";

const upcomingStore = create((set)=>({
    upcoming:[],
    getUpcoming:(data)=>{
        set({upcoming:data})
    }
}))
export default upcomingStore