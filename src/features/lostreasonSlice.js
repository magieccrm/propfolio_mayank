import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";




/////////add strtus
   export const addLostReason=createAsyncThunk("addLostReason",async(data,{rejectWithValue})=>{
           
        const responce=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/add_lead_reason/",{
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
   export const getAllLostReason=createAsyncThunk("getAllLostReason",async(dara,{rejectWithValue})=>{
        
       const resource=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/all_lead_reason/")
       const result=await resource.json();
    if(result.success===true){    
        return result;    
   }else{  
       return rejectWithValue(result.message);
   }  
   })

   ///////delete status 

   export const deleteLostReason=createAsyncThunk("deleteLostReason",async(_id,{rejectWithValue})=>{
         
    const responce=await fetch(`https://crm-backend-1qcz.onrender.com/api/v1/delete_lead_reason/${_id}`,{
                      method:"DELETE",
        })

        const  result =await responce.json();
        
        if(result.success===true){     
          return result;    
     }else{  
         return rejectWithValue(result.message);
     }  
 })








export const LostReason=createSlice({
    name:"lostreason",
    initialState:{
        LostReasondata:[],
       loading:false,  
       error:null,
       message:'', 
    },    
    extraReducers:{
      // create add 
       [addLostReason.pending]:(state) =>{
           state.loading=true; 
       },
       [addLostReason.fulfilled]:(state,action) =>{
           state.loading=false;
             
             state.LostReasondata.lostreason.push(action.payload.lostreason);    
         
       },
       [addLostReason.rejected]:(state,action) =>{
           state.loading=false;
           state.LostReasondata=action.payload; 
       }, 
       /// get Alll lead Source
       [getAllLostReason.pending]:(state) =>{
        state.loading=true; 
       },
       [getAllLostReason.fulfilled]:(state,action) =>{
        state.loading=false;
        state.LostReasondata=action.payload; 
       // state.message=action.payload.message; 
       },
       [getAllLostReason.rejected]:(state,action) =>{
        state.loading=false;
        state.LostReasondata=action.payload; 
       }, 
   ///  DeleteLeadSource

      [deleteLostReason.pending]:(state) =>{
      state.loading=true; 
      },
        [deleteLostReason.fulfilled]:(state,action) =>{
         state.loading=false;  
          const {_id} =action.payload.lostreason; 
         if(_id){  
             state.LostReasondata.lostreason=state.LostReasondata.lostreason.filter((ele)=>ele._id!==_id);  
         }
       },
      [deleteLostReason.rejected]:(state,action) =>{
      state.loading=false;
      state.LostReasondata=action.payload; 
      }, 
      


       },
})

export default  LostReason.reducer;