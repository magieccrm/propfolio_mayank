import { configureStore } from "@reduxjs/toolkit";
import licence from "../features/licenceSlice";
import leadSource from "../features/leadSource";
import statusSlice from "../features/statusSlice";


 export  const store = configureStore({
  reducer: {
      app:licence,
      leadSource:leadSource,
      StatusData:statusSlice,
   },
});

export default store;

