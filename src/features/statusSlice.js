import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";




/////////add strtus
   export const addStatus=createAsyncThunk("addStatus",async(data,{rejectWithValue})=>{
           
        const responce=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/add_lead_status/",{
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

   ////////get app status 
   export const getAllStatus=createAsyncThunk("getAllStatus",async(dara,{rejectWithValue})=>{
        
       const resource=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/all_lead_status/")
       const result=await resource.json();
    if(result.success===true){    
        return result;    
   }else{  
       return rejectWithValue(result.message);
   }  
   })

   ///////delete status 

   export const deleteStatus=createAsyncThunk("deleteStatus",async(_id,{rejectWithValue})=>{
         
    const responce=await fetch(`https://crm-backend-1qcz.onrender.com/api/v1/delete_lead_status/${_id}`,{
                      method:"DELETE",
        })

        const  result =await responce.json();
        
        if(result.success===true){     
          return result;    
     }else{  
         return rejectWithValue(result.message);
     }  
 })








export const leadStatus=createSlice({
    name:"status",
    initialState:{
        Statusdata:[],
       loading:false,  
       error:null,
       message:'', 
    },    
    extraReducers:{
      // create add 
       [addStatus.pending]:(state) =>{
           state.loading=true; 
       },
       [addStatus.fulfilled]:(state,action) =>{
           state.loading=false;
             
             state.Statusdata.leadstatus.push(action.payload.leadstatus);    
         
       },
       [addStatus.rejected]:(state,action) =>{
           state.loading=false;
           state.Statusdata=action.payload; 
       }, 
       /// get Alll lead Source
       [getAllStatus.pending]:(state) =>{
        state.loading=true; 
       },
       [getAllStatus.fulfilled]:(state,action) =>{
        state.loading=false;
        state.Statusdata=action.payload; 
       // state.message=action.payload.message; 
       },
       [getAllStatus.rejected]:(state,action) =>{
        state.loading=false;
        state.Statusdata=action.payload; 
       }, 
   ///  DeleteLeadSource

      [deleteStatus.pending]:(state) =>{
      state.loading=true; 
      },
        [deleteStatus.fulfilled]:(state,action) =>{
         state.loading=false;
          const {_id} =action.payload.leadstatus; 
         if(_id){  
             state.Statusdata.leadstatus=state.Statusdata.leadstatus.filter((ele)=>ele._id!==_id);  
         }
       },
      [deleteStatus.rejected]:(state,action) =>{
      state.loading=false;
      state.Statusdata=action.payload; 
      }, 
      


       },
})

export default  leadStatus.reducer;