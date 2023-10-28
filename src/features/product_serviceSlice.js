import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";




/////////add strtus
   export const addproductservice=createAsyncThunk("addproductservice",async(data,{rejectWithValue})=>{
           
        const responce=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/add_product_service/",{
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








export const productservice=createSlice({
    name:"productservice",
    initialState:{
        ProductService:[],
       loading:false,  
       error:null,
       message:'', 
    },    
    extraReducers:{
      // create add 
     
       /// get Alll lead Source
    
      


       },
})
   
export default  productservice.reducer;