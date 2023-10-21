import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { licenceactive } from '../../features/licenceSlice';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
export default function Licenceform() {
   const navigate=useNavigate();
  const message=useSelector((state)=>state.app); 
  const formRef = React.useRef(null); 
   const dispatch=useDispatch();
   const [data,setData]=useState({});
  const saveData= async (e)=>{  
      e.preventDefault();   
     
     const formData = {...data,  states: formRef.current.states.value};
     const dddd={...formData, _id:message.hostings[0]?._id}
     
     const licencee=await dispatch(licenceactive(dddd))   
     if(licencee.payload.success===true){
      toast.success("Activated Successfully!");
     // window.location.reload();
      setTimeout(()=>{ 
        window.location.reload(false);
    }, 500);
      //  navigate('/');   
  }else{  
   toast.warn(licencee.payload); 
  }  
  
   }
  
  return (
    <div>
      <>
  {/* MultiStep Form */}
  <div className="container-fluid" id="grad1">
    <div className="row justify-content-center mt-0">
      <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
          <h2>
            <strong>Set Database Account</strong>
          </h2>
          <p>Fill all form field to go to next step</p>
          <div className="row">
            <div className="col-md-12 mx-0">
              <form id="msform"  onSubmit={saveData} ref={formRef}>
              
                  <div className="form-card">
                    <h2 className="fs-title">Account Information</h2>
                    <input type="text" name="username"
                    required
                    onChange={e => setData({...data, username: e.target.value})}
                    placeholder="database username" />
                    <input type="password" 
                    required
                    onChange={e => setData({...data, password: e.target.value})}
                    name="password" placeholder="Database Password" />
   
                     <input type="hidden" 
                    required
                    value={message.hostings[0]?._id}
                    onChange={e => setData({...data, _id: e.target.value})}
                    name="_id" placeholder="_id" />


                    <input type="text" 
                    required
                    onChange={e => setData({...data, database: e.target.value})}
                    name="name" placeholder="Database Name" />

              <input type="hidden" 
                    required
                   value="active"
                    name="states"  /> 
                   
                     
                    
                  </div>
                <button type="submit" class="btn btn-primary">Activate </button>
              
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
