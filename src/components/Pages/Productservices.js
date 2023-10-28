import React , { useState ,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addProductService , getAllProductService } from "../../features/product_serviceSlice";
// import getAllProductService from "../../features/product_serviceSlice"
import {  toast } from 'react-toastify';


function Productservices() {
const {ProductService} = useSelector((state)=>state.ProductService); 


  const dispatch=useDispatch();

  //// For Show Product And Service
 
useEffect(()=>{
  dispatch(getAllProductService());  
 
},[])  ;  
    
//// For Show Product And Service

  
///// Product And Service Add 
    const [data,setData]=useState({});
    const newdata=(e)=>{
      setData({...data,[e.target.name]:e.target.value});
     }
     const productsubmit=async(e)=>{  
         e.preventDefault();
        const aaaa=await dispatch(addProductService(data));
  
        if(aaaa.payload.success===true){   
       
          toast.success(aaaa.payload.message);
         }else{  
       toast.warn(aaaa.payload.message);   
      }
     }
///// Product And Service Add 



  
/// add form show 
    const [line, setline] = useState("none");
  const showForm=(e)=>{
    if(line==='none'){
      setline("block")
    }else{  
      setline("none")
    }
   } 
   /// add form show 

  

        
  return (
    <div>
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content py-5">
          <div className="container">
          
       
          <div className="panel panel-bd lobidrag lobipanel">
            <div className="panel-heading">
              <div className="btn-group">
                <p>Lead Information </p>
              </div>
              <button type="button" style={{float: 'right'}} className="btn btn-sm btn-primary"  onClick={showForm}  id="add-new"> Add New</button>
    </div>  
<div classname="panel-body">
  <div className="panel-body">
    <div className="col-sm-12 col-md-12 col-xs-12">
      <div className="cards">
        <div className="card-headers">
          <div className="table-responsive mob-bord">
            <table className="table table-bordered table-hover" id="example">
              <thead>
                <tr>
                  <th className="list-check">
                    S.N.
                  </th>
                  <th>Product Name</th>
                  <th>Billing Cycle</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr> 
              </thead>
              <tbody>
      {
         ProductService?.map((ProductService1,key)=>{
               return(
<tr>
                  <td className="list-check">
                   {key+1}</td>
                  <td>{ProductService1?.product_service?.product_service_name}</td>
                  <td>{ProductService1?.product_service?.billing_cycle}</td>
                  <td>Rs.  {ProductService1?.product_service?.payment}</td> 
                  <td>
                    {/* <a href=" " className="btn btn-info btn-xs"> <i className="fa fa-pencil-square-o"></i></a> */}
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-trash" /></a>
                  </td>
                </tr>
               )
     })}

                
              
              </tbody>
            </table>
            <button type="button"   className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="panel-body" id="add-new-service" style={{ display: line }}>
  <div className="col-sm-12 col-md-8 col-xs-12">
    <div>
      <form  onSubmit={productsubmit}>
        <div className="cardses">
           <div className="card-headers">
            <div className="row">  
              <div className="col-md-4 pd-top">
                <lable>Add New Services</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                 
                  <input
                    type="text"
                    className="form-control"
                    name="product_service_name"
                    required
                    onChange={newdata} 
                    placeholder="Product & Service Name"
                    defaultValue=""
                   
                  />
                </div>
              </div>
              <div className="col-md-4 pd-top">
                <lable>Setup fee</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="Number"
                    required
                    onChange={newdata} 
                    className="form-control"
                    name="set_up_fee"
                    placeholder="Setup fee"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-4 pd-top">
                <lable>Payment</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="Number"
                    required
                    onChange={newdata} 
                    className="form-control"
                    placeholder="Payment"
                    name="payment"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-4 pd-top">
                <lable>Recurring Payment</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="number"
                    required
                    onChange={newdata} 
                    className="form-control"
                    placeholder="Recurring Payment"
                    name="recurring"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-4 pd-top">
                <lable>Billing Cycle</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <select className="form-control" name="billing_cycle" onChange={newdata} required>
                    <option value="">Billing cycle</option>
                    <option value="onetime">One Time</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="semesterly">Semesterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 text-right">
                <div className="resets-button">
                 
                  <button
                    type="submit"  
                     className="btn btn-primary"
                  >
                    Submit
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

</div>
           
    </div>
           
      </section>  
      </div>
     
    </div>
  );
}
export default Productservices;
