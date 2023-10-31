import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";





   export const addagent=createAsyncThunk("addagent",async(data,{rejectWithValue})=>{
           
        const responce=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/add_agent/",{
            method:"POST",
            headers:{     
                "Content-Type":"application/json",
               }, 
               body:JSON.stringify(data)
        })  
        const result=await responce.json();
        //console.log(result)
         
      if(result.success===true){  
         return result;
    }else{  
        return rejectWithValue(result.message);
    }  
    
   });

   export const getAllAgent=createAsyncThunk("getAllAgent",async(data,{rejectWithValue})=>{

    const responce=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/get_all_lead");
    const result=await responce.json();
   
    if(result.success===true){    
        return result;   
   }else{  
       return rejectWithValue(result.message); 
   }  
   })

  









export const leadSource=createSlice({
    name:"lead",
    initialState:{
       agent:[],
       loading:false,  
       error:null,
       message:'', 
    },
    extraReducers:{
      // create add leadsource

       [addagent.pending]:(state) =>{
           state.loading=true; 
       }, 
       [addagent.fulfilled]:(state,action) =>{
             state.loading=false;  
             state.agent.agent.push(action.payload.agent); 
            //   state.message=action.payload.message; 
       },
       [addagent.rejected]:(state,action) =>{
           state.loading=false;
           
           state.agent.agent=action.payload; 
       }, 



       /// get Alll lead Source

    //    [getAllAgent.pending]:(state) =>{
    //        state.loading=true; 
    //    },
    //    [getAllAgent.fulfilled]:(state,action) =>{
    //        state.loading=false;
    //       state.lead=action.payload; 
          
    //    },
    //    [getAllAgent.rejected]:(state,action) =>{      
    //        state.loading=false; 
    //        state.lead=action.payload; 
    //    }, 

      
       },
})

export default  leadSource.reducer;