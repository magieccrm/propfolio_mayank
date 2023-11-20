import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
//import { useDispatch } from "react-redux";
import Loader from "../Loader";
import axios from "axios";
import DataTable from "react-data-table-component";
// import { Link } from "react-router-dom";
// import XLSX from "xlsx";
// import { CSVLink } from "react-csv";

import jsPDF from "jspdf";
export const AllCallLogtable = () => {
    // const dispatch = useDispatch();
    const   _id = useParams();
    const [leads, setleads] = useState([]);
    const [search, setsearch] = useState("");
    const [filterleads, setfilterleads] = useState([]);
    const getAllCallLog = async (id) => {
      try {
        const responce = await axios.get(
          `https://crm-backend-1qcz.onrender.com/api/v1/get_call_log_by_id/${id}`
        );
       console.log(responce?.data);  
        setleads(responce?.data?.call_log);
        setfilterleads(responce?.data?.call_log);
      } catch (error) {
        console.log(error);
        setfilterleads();
      }
    };
  
 
    useEffect(() => {
       if(_id.id){    
        getAllCallLog(_id.id);     
       }
    }, [_id.id]);
  
    useEffect(() => {
      const result = leads.filter((lead) => {
        return (
          lead.name.toLowerCase().match(search.toLowerCase()) ||
          lead?.user_id
            .toLowerCase()
            .match(search.toLowerCase()) ||
          lead?.type
            .toLowerCase()
            .match(search.toLowerCase()) ||
          lead?.phone_number
            .toString().toLowerCase().includes(search.toLowerCase()) ||
          lead?.datetime
            .toLowerCase()
            .match(search.toLowerCase())
        );
      });
      setfilterleads(result);
    }, [search]);
  

    const columns = [
      {
        name: "Sr. No.",
        selector: (row,index) =>index+1,
        sortable: true,
      },
    //   {
    //     name: "Operated By",
    //     selector: (row) => row?.user_id,
    //     sortable: true,
    //   },
      {  
        name: "Client Name",
        selector: (row) => row?.name,
        sortable: true,
      },
      {
        name: "Mobile No.",
        selector: (row) => row?.phone_number,
        sortable: true,
      },
      {
        name: "Call Date Time",
        selector: (row) => row?.datetime,
        sortable: true,
       },
      {
        name: "Duration",
        selector: (row) => row?.duration,
        sortable: true,
       },
       {
        name: "Call Type",
        selector: (row) => row?.type!=="UNKNOWN"?row?.type:"REJECTED",
        sortable: true,
        style: (row)=> ({
          color: row.type="UNKNOWN"?'red':row.type="INCOMING"?'green':row.type="OUTGOING"?'yellow':'red', 
        })  
       },  
       {
        name: "RawType",
        selector: (row) => row?.rawtype,
        sortable: true,
       },
    ];
  
    
    
  
   
  
    const customStyles = {
      cells: {
        style: {
          border: "1px solid #ddd", // Set the cell border
          fontSize: "14px",
        },
      },
      headCells: {
        style: {
          border: "1px solid #111", // Set the header cell border
          fontSize: "14px",
        },
      },
    };
  
    if (leads.length === 0) {
      //return <Loader />;
    }
  
       return(
        <div>
        {leads.length === 0 ? (
         <table id="example" className="table table-striped pt-3" style={{width: '100%'}}>
         <thead>
           <tr>
             <th>Sr. No.</th>
             <th>Operated By</th>
             <th>Client Name</th>
             <th>Mobile No.</th>
             <th>Call Date Time</th>
             <th>Duration</th> 
             <th>Call Type</th>
             <th>RawType</th>
           </tr> 
         </thead>
         <tbody>
           <tr>
          <p className="text-center">No Call Log Founds</p>
           </tr>
        
         </tbody>
       </table>
        ) : (
          <>
          {/* <button className="btn btn-sm btn-info" onClick={exportToPDF}>Export PDF</button> */}
          <DataTable
          responsive 
          id="table-to-export"
          columns={columns}
          data={filterleads}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="550px"
          
          selectableRowsHighlight
          highlightOnHover
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search here"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              className="form-control w-25 "
            />
          }
          customStyles={customStyles} 
        />
          </>
          
        )}
        
      
       
       
        
        
      </div>
       )
}
