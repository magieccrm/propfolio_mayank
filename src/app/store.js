import { configureStore } from "@reduxjs/toolkit";
import licence from "../features/licenceSlice";
import leadSource from "../features/leadSource";
import statusSlice from "../features/statusSlice";
import product_serviceSlice from "../features/product_serviceSlice";


 export  const store = configureStore({
  reducer: {
      app:licence,
      leadSource:leadSource,
      StatusData:statusSlice,
      ProductService:product_serviceSlice,
   },
});

export default store;

