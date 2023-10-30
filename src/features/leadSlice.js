import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";





   export const addlead=createAsyncThunk("addlead",async(data,{rejectWithValue})=>{
           
        const responce=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/add_lead/",{
            method:"POST",
            headers:{     
                "Content-Type":"application/json",
               }, 
               body:JSON.stringify(data)
        })  
        const result=await responce.json();
        
      if(result.success===true){  
         
         return result;
    }else{  
        return rejectWithValue(result.message);
    }  
    
   });

   export const getAllLeadSource=createAsyncThunk("getAllLeadSource",async(data,{rejectWithValue})=>{

    const responce=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/add_lead");
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
        lead:[],
       loading:false,  
       error:null,
       message:'', 
    },
    extraReducers:{
      // create add leadsource
       [addlead.pending]:(state) =>{
           state.loading=true; 
       },
       [addlead.fulfilled]:(state,action) =>{
           state.loading=false;
               
              state.lead.lead.push(action.payload.lead); 
          // state.message=action.payload.message; 
       },
       [addlead.rejected]:(state,action) =>{
           state.loading=false;
           state.lead=action.payload; 
       }, 
       /// get Alll lead Source
    //    [getAllLeadSource.pending]:(state) =>{
    //        state.loading=true; 
    //    },
    //    [getAllLeadSource.fulfilled]:(state,action) =>{
    //        state.loading=false;
    //       state.leadSourcedata=action.payload; 
          
    //    },
    //    [getAllLeadSource.rejected]:(state,action) =>{
    //        state.loading=false;
    //        state.leadSourcedata=action.payload; 
    //    }, 

      
       },
})

export default  leadSource.reducer;