import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";





   export const addfollowup=createAsyncThunk("addfollowup",async(data,{rejectWithValue})=>{
           
        const responce=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/add_followup_lead/",{
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

   export const getAllFollowup=createAsyncThunk("getAllFollowup",async(_id,{rejectWithValue})=>{
    const responce=await fetch(`https://crm-backend-1qcz.onrender.com/api/v1/all_followup_lead_by_id/${_id}`);
    const result=await responce.json(); 
   
    if(result.success===true){    
        return result;   
   }else{  
       return rejectWithValue(result.message);
   }  
   })

   export const DeleteLeadSource=createAsyncThunk("DeleteLeadSource",async(_id,{rejectWithValue})=>{
        
      const responce=await fetch(`https://crm-backend-1qcz.onrender.com/api/v1/delete_lead_source/${_id}`,{
                        method:"DELETE",
          })

          const  result =await responce.json();

          
        
          if(result.success===true){     
            return result;     
       }else{  
           return rejectWithValue(result.message);
       }  
   })










export const followup=createSlice({
    name:"followup",
    initialState:{
        followup:[],
       loading:false,  
       error:null,
       message:'', 
    },
    extraReducers:{
      // create addfollowup
       [addfollowup.pending]:(state) =>{
           state.loading=true; 
       },
       [addfollowup.fulfilled]:(state,action) =>{
           state.loading=false;
                console.log(action.payload)
              state.followup.followuplead.push(action.payload?.followuplead['0']);  
        
       },
       [addfollowup.rejected]:(state,action) =>{
           state.loading=false;
           state.followup=action.payload; 
       }, 
       /// get Alll lead Source


       [getAllFollowup.pending]:(state) =>{
           state.loading=true; 
       },
       [getAllFollowup.fulfilled]:(state,action) =>{
           state.loading=false;
         ///  console.log(action.payload.followuplead)
          state.followup=action.payload; 
          
       },
       [getAllFollowup.rejected]:(state,action) =>{
           state.loading=false;
           state.followup=action.payload; 
       }, 

       ///  DeleteLeadSource


    //    [DeleteLeadSource.pending]:(state) =>{
    //     state.loading=true; 
    //    },
    //    [DeleteLeadSource.fulfilled]:(state,action) =>{
    //     state.loading=false;
    //   const {_id} =action.payload.leadSource; 
    //      if(_id){
    //         state.leadSourcedata.leadSource=state.leadSourcedata.leadSource.filter((ele)=>ele._id!==_id);  
    //    }
    //    },
    //    [DeleteLeadSource.rejected]:(state,action) =>{
    //     state.loading=false;
    //     state.leadSourcedata=action.payload; 
    //    }, 


       },
})

export default  followup.reducer;