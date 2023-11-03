import React , { useState ,useEffect} from "react";
import {addlead } from "../../features/leadSlice";
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../Loader";
import axios from "axios";
import DataTable from 'react-data-table-component';

export const Allleadstable = () => {

    
    const dispatch=useDispatch(); 

    const [leads,setleads]=useState([]);
    const [search,setsearch]=useState("");
    const [filterleads,setfilterleads]=useState([]);
  const getAllLead1= async()=>{
              try {
                const responce=await axios.get("https://crm-backend-1qcz.onrender.com/api/v1/get_all_lead");
                setleads(responce?.data?.lead);
                setfilterleads(responce?.data?.lead);
               
    } catch (error) { 
          console.log(error)
    }

  }


    useEffect(()=>{

           getAllLead1();   
     
    },[]);

    useEffect(()=>{
       const result=leads.filter((lead)=>{
          return lead.full_name.toLowerCase().match(search.toLowerCase());
       });
       setfilterleads(result);
    },[search])

    const columns= [

        {
            name:"Full Name",
            selector:(row)=>row?.full_name,
            sortable:true,
        },
        {
            name:"Number",
            selector:(row)=>row?.contact_no,
            sortable:true,
        },
        {
            name:"Agent",
            selector:(row)=>row?.agent_details[0]?.agent_name,
            sortable:true,
        },
        {
            name:"Service",
            selector:(row)=>row?.service_details[0]?.product_service_name,
            sortable:true,
        },
        {
            name:"Lead Source",
            selector:(row)=>row?.lead_source_details[0]?.lead_source_name,
            sortable:true,
        },
        {
            name:"Status",
            selector:(row)=>row?.status_details[0]?.status_name,
            sortable:true,
        },
    ]
  



  return (
    <DataTable  responsive  title="Lead List"  columns={columns}  data={filterleads} pagination fixedHeader 
    fixedHeaderScrollHeight="450px" selectableRows
    selectableRowsHighlight highlightOnHover subHeader subHeaderComponent={
        <input type="text" placeholder="Search here" 
           value={search} onChange={(e)=> setsearch(e.target.value)}
        className="w-25 form-controll"/>
    }
    actions={<button className="btn btn-sm btn-info">Export</button> }
    />
  )
}
