import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    CLEAR_ERRORS,
  } from "../constants/agentConstants";
  


  import axios from "axios";

  export const login=(email,password)=>async (dispatch)=>{
     
    try{
        dispatch({type:LOGIN_REQUEST});
        const config={Headers:{"Content-Type":"application/json"}};
       const {data} =await axios.post(
        `https://crm-backend-1qcz.onrender.com/api/v1/agent_login`,
        {email,password},
        config 
        );  
        if(data.success)
        {
         console.log(data.token)
         localStorage.setItem('token',data?.token)

       // dispatch({type:LOGIN_SUCCESS,payload:data.agent});
        dispatch({type:LOGIN_SUCCESS,payload:data.token});
         
       }

    }catch(error){ 
       dispatch({type:LOGIN_FAIL,payload:error?.response?.data?.message||'Login failed'});
    }
  }
  
   // clearing error  
 export const clearErrors= ()=>async (dispatch)=>{ 
    dispatch({type:CLEAR_ERRORS}); 
} 