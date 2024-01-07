import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";


const apiBaseUrl = 'https://crm-backend1-awl0.onrender.com/api/v1';


/////////add strtus
   export const addProductService=createAsyncThunk("addProductService",async(data,{rejectWithValue})=>{
           
        const responce=await fetch(`${apiBaseUrl}/add_product_service/`,{
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
   export const getAllProductService=createAsyncThunk("getAllProductService",async(dara,{rejectWithValue})=>{
        
       const resource=await fetch("https://crm-backend-1qcz.onrender.com/api/v1/all_product_service/")
       const result=await resource.json();
      // console.log(result.success) 
    if(result.success===true){             
        return result;     
   }else{    
       return rejectWithValue(result.message);
   }  
   })

   /////// deleteProduct_service 

   export const deleteProductService=createAsyncThunk("deleteProductService",async(_id,{rejectWithValue})=>{
         
    const responce=await fetch(`https://crm-backend-1qcz.onrender.com/api/v1/delete_product_service/${_id}`,{
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
      // create add Product Service
        
      [addProductService.pending]:(state) =>{
        state.loading=true; 
      },
      [addProductService.fulfilled]:(state,action) =>{
        state.loading=false; 
          //console.log(action.payload)
        state.ProductService.product_service.push(action.payload.product_service);      
      },
      [addProductService.rejected]:(state,action) =>{
        state.loading=false;
        state.ProductService=action.payload; 
      },  

    /// get all product and service
       [getAllProductService.pending]:(state) =>{
        state.loading=true;   
       },
       [getAllProductService.fulfilled]:(state,action) =>{
        state.loading=false;
        state.ProductService=action.payload;  
       },
       [getAllProductService.rejected]:(state,action) =>{ 
        state.loading=false;
        state.ProductService=action.payload; 
       }, 

       //// deleteProduct_service 
       [deleteProductService.pending]:(state)=>{
        state.loading=true;  
       },
       [deleteProductService.fulfilled]:(state,action)=>{
        state.loading=false;  
        const {_id} =action.payload.product_service; 
        if(_id){
           state.ProductService.product_service=state.ProductService.product_service.filter((ele)=>ele._id!==_id);  
      }
       }


       },
})
   
export default  productservice.reducer;