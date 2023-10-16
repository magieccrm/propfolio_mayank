import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
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

             dispatch({type:LOGIN_SUCCESS,payload:data.agent});
    }catch(error){
       dispatch({type:LOGIN_FAIL,payload:error.response.data.message});
    }
  }
  
   // clearing error  
 export const clearErrors= ()=>async (dispatch)=>{ 
    dispatch({type:CLEAR_ERRORS});
} 