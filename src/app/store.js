import { configureStore } from "@reduxjs/toolkit";
import licence from "../features/licenceSlice";


 export  const store = configureStore({
  reducer: {
      app:licence,
   },
});

export default store;

