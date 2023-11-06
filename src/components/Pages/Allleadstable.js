import React , { useState ,useEffect, Component} from "react";
import {addlead } from "../../features/leadSlice";
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../Loader";
import axios from "axios";
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import XLSX from 'xlsx';
import { CSVLink } from 'react-csv';
import { jsPDF } from 'jspdf';


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
          return (
            lead.full_name.toLowerCase().match(search.toLowerCase()) ||
            lead?.agent_details[0]?.agent_name.toLowerCase().match(search.toLowerCase()) ||
            lead?.service_details[0]?.product_service_name.toLowerCase().match(search.toLowerCase()) ||
            lead?.lead_source_details[0]?.lead_source_name.toLowerCase().match(search.toLowerCase()) ||
            lead?.status_details[0]?.status_name.toLowerCase().match(search.toLowerCase())
          );
       });

     
    


       setfilterleads(result);
    },[search])

    const columns= [

        {
            name:"Full Name",
            
            cell: (row) => (
                <a   href={`/followupleads/${row?._id}`} >
               {row?.full_name}
                </a>
              ),
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

    const customStyles = {
      cells: {
        style: {
          border: '1px solid #ddd', // Set the cell border
          fontSize: '14px', 
        },
      },
      headCells: {
        style: {
          border: '1px solid #111', // Set the header cell border
          fontSize: '14px', 
        },
      },
    };
        


  return (
    <DataTable   responsive    columns={columns}  data={filterleads} pagination fixedHeader 
    fixedHeaderScrollHeight="550px" selectableRows
    selectableRowsHighlight highlightOnHover subHeader subHeaderComponent={  
        <input type="text" placeholder="Search here" 
           value={search} onChange={(e)=> setsearch(e.target.value)}
        className="form-control w-25 "/> 
    }
    customStyles={customStyles} // Apply the custom styles here
    actions={
    <button className="btn btn-sm btn-info">Export</button> 

  }
    />
  )  
}
