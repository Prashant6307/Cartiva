import { createContext } from "react";

const userContext = createContext({
    user:{
    email:"",
    phone:"",
    name:"",
    location:""
    }
})


export default userContext