import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_URL;
const DBuUrl = process.env.REACT_APP_DB_URL;

   export const addagent=createAsyncThunk("addagent",async(data,{rejectWithValue})=>{
           
        const responce=await fetch(`${apiUrl}/add_agent/`,{
            method:"POST",
            headers:{     
                "Content-Type":"application/json",
                "mongodb-url":DBuUrl,
               }, 
               body:JSON.stringify(data)
        })  
        const result=await responce.json();
        if(result.success===true){  
         return result;
    }else{  
       return rejectWithValue(result);
       //return result.message;
    }  
    
   });


   ///update agent api 

   export const EditAgentDetails=createAsyncThunk("EditAgentDetails",async(data,{rejectWithValue})=>{

    const responce=await fetch(`${apiUrl}/EditAgentDetails/${data._id}`,{
        method:"PUT",
        headers:{     
            "Content-Type":"application/json",
            "mongodb-url":DBuUrl,
           }, 
           body:JSON.stringify(data)
    })  
    const result=await responce.json();
    if(result.success===true){    
        return result;   
   }else{  
       return rejectWithValue(result.message); 
   }  
   })

   export const getAllAgent=createAsyncThunk("getAllAgent",async(data,{rejectWithValue})=>{

    const responce=await fetch(`${apiUrl}/get_all_agent`,{
        headers:{       
            "Content-Type":"application/json",
            "mongodb-url":DBuUrl,
           }, 
      });
    const result=await responce.json();
    if(result.success===true){    
        return result;   
   }else{ 
    if(result.message=='Client must be connected before running operations'){
        const responce=await fetch(`${apiUrl}/get_all_agent`,{
            headers:{       
                "Content-Type":"application/json",
                "mongodb-url":DBuUrl,
               }, 
          });
        const result=await responce.json();
        if(result.success===true){    
            return result;   
       }
    }else{
        return rejectWithValue(result.message); 
    } 
      
   }  
   })

   export const deleteAgent=createAsyncThunk("deleteAgent",async(_id,{rejectWithValue})=>{
            
    const responce=await fetch(`${apiUrl}/agent_delete/${_id}`,{
        method:"DELETE",
        headers:{     
            "Content-Type":"application/json",
            "mongodb-url":DBuUrl,
           }, 
})

const  result =await responce.json(); 

if(result.success===true){     
return result;    
}else{  
return rejectWithValue(result.message);
}  

   });

   export const checkedAgent=createAsyncThunk("checkedAgent",async(_id,{rejectWithValue})=>{
    const responce=await fetch(`http://localhost:4000/api/v1/update_agent_access/${_id}`,{
        method:"PUT",
        headers:{ 
            "Content-Type":"application/json",
            "mongodb-url":DBuUrl,
           },
        
})

const  result =await responce.json(); 
    console.log(result)
if(result.success===true){     
return result;     
}else{  
return rejectWithValue(result.message);
}  
            
   })

  









export const agentSource=createSlice({
    name:"agent",
    initialState:{
       agent:[],
       loading:false,  
       error:null,
       message:'', 
       headersproblem:'',
    },
    extraReducers:{
      // create add leadsource

       [addagent.pending]:(state) =>{
           state.loading=true; 
       }, 
       [addagent.fulfilled]:(state,action) =>{
             state.loading=false;  
             console.log('action.payload',action.payload)  
            state.agent.agent.push(action.payload.agent);   
            //   state.message=action.payload.message; 
            state.message=action.payload.message; 
       },
       [addagent.rejected]:(state,action) =>{
           state.loading=false;
         
        //   state.agent=action.payload; 
           state.message=action.payload.message; 

       }, 

       ////update agent details 
       [EditAgentDetails.pending]:(state)=>{
        state.loading=true; 
       },
       [EditAgentDetails.fulfilled]:(state,action) =>{
        
        state.loading=false;     
       console.log(action.payload._id)
        state.agent.agent=state.agent.agent.map((ele)=>
                  ele._id===action.payload._id?action.payload:ele
                );
     
        },
     [EditAgentDetails.rejected]:(state,action) =>{
      state.loading=false;
    
   //   state.agent=action.payload; 
      state.message=action.payload.message; 

  }, 



       /// get Alll lead Source

       [getAllAgent.pending]:(state) =>{
           state.loading=true; 
       },
       [getAllAgent.fulfilled]:(state,action) =>{
           state.loading=false;
          state.agent=action.payload; 
          
       },
       [getAllAgent.rejected]:(state,action) =>{      
           state.loading=false; 
           state.agent=action.payload;  
       }, 


       /// Delete  Agent 
       [deleteAgent.pending]:(state)=>{
          state.loading=true;
       },
       [deleteAgent.fulfilled]:(state,action)=>{
          state.loading=false;
        //   console.log(action.payload)
        //   console.log(action.payload)
          const {_id} =action.payload.agent; 
          
          if(_id){
             state.agent.agent=state.agent.agent.filter((ele)=>ele._id!==_id);  
        }

       },

       

      
       },
})

export default  agentSource.reducer;