import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

// show all data
export const getHostingbydomain=createAsyncThunk("getHostingbydomain",async(host,{rejectWithValue})=>{
    
    const response= await axios.post("https://task-mernss.onrender.com/api/v1/getByDomain/", { domain:host });
     
    try {
        // const result=await response;   
      ///  console.log(response)  
        return response.data.hosting; 
    } catch (error) {  
       return rejectWithValue(error);
    }
})  




export const login1= createAsyncThunk("login1",async(data,{rejectWithValue})=>{
    const response=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/agent_login",{
           method:"POST", 
           headers:{ 
            "Content-Type":"application/json",
           }, 
           body:JSON.stringify(data)
    });
    try {
        const result=await response.json();
        
        console.log(result) 
        localStorage.setItem('token',result?.token)
        return result;
    } catch (error) {
       return rejectWithValue(error);
    }
          
});






export const allhosting=createSlice({
    name:"hostingDetails",
    initialState:{
       hostings:[],
       loading:false,  
       error:null, 
    },
    extraReducers:{
      // create hosting
       [getHostingbydomain.pending]:(state) =>{
           state.loading=true; 
       },
       [getHostingbydomain.fulfilled]:(state,action) =>{
           state.loading=false;
           state.hostings.push(action.payload); 
       },
       [getHostingbydomain.rejected]:(state,action) =>{
           state.loading=false;
           state.hostings=action.payload; 
       }, 
       

       [login1.pending]:(state) =>{
        state.loading=true; 
    },
    [login1.fulfilled]:(state,action) =>{
        state.loading=false;
        //state.hostings.push(action.payload); 
       // state.hostings=action.payload; 
    },
    [login1.rejected]:(state,action) =>{
        state.loading=false;
        state.hostings=action.payload; 
    }, 
    

       },
})

export default  allhosting.reducer;