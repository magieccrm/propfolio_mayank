import React, { useState, useEffect } from "react";

import Loader from "../Loader";
import axios from "axios";
import DataTable from "react-data-table-component";


import jsPDF from "jspdf";
import "jspdf-autotable";


export default function AllFollowupstable() {

    
  const [leads, setleads] = useState([]);
  const [status, setstatus] = useState();
  const [search, setsearch] = useState("");
  const [filterleads, setfilterleads] = useState([]);
  const getAllLead1 = async () => {
    try {
      const responce = await axios.get(
        "https://crm-backend-1qcz.onrender.com/api/v1/get_All_Lead_Followup"
      );
      
      setleads(responce?.data?.lead);
      setfilterleads(responce?.data?.lead);
    } catch (error) {
      console.log(error);
      setfilterleads();
    }
  };

  const getAllLead2 = async (assign_to_agent) => {
    try {
      const responce = await axios.post(
        "https://crm-backend-1qcz.onrender.com/api/v1/get_Leadby_agentid_status",
          
          {
             assign_to_agent, 
          } 
        
      );
           
      if(responce?.data?.success===true){ 
        setstatus(responce?.data?.success)
        setleads(responce?.data?.lead); 
        setfilterleads(responce?.data?.lead);
      }
      if(responce?.data?.success===false){

        setstatus(responce?.data?.success)
        setleads(responce?.data?.lead); 
        setfilterleads(responce?.data?.lead);
       
      }
     
      
    } catch (error) { 
      console.log(error);
      setfilterleads();
    }
 };



  useEffect(() => {
   if(localStorage.getItem("role")==='admin'){
    getAllLead1();
   }else{
       getAllLead2(localStorage.getItem("user_id"));
   }     
  }, [localStorage.getItem("user_id")]);

  useEffect(() => {
    const result = leads?.filter((lead) => {
      return (
        lead.full_name.toLowerCase().match(search.toLowerCase()) ||
        lead?.agent_details[0]?.agent_name
          .toLowerCase()
          .match(search.toLowerCase()) ||
        lead?.service_details[0]?.product_service_name
          .toLowerCase()
          .match(search.toLowerCase()) ||
        lead?.lead_source_details[0]?.lead_source_name
          .toLowerCase()
          .match(search.toLowerCase()) ||
        lead?.status_details[0]?.status_name
          .toLowerCase()
          .match(search.toLowerCase())
      );
    });
    setfilterleads(result);
  }, [search]);

  const columns = [
    {
      name: "Full Name",
      cell: (row) => (
        <a href={`/followupleads/${row?._id}`}>{row?.full_name}</a>
      ),
      selector: (row) => row?.full_name,
      sortable: true,
    },
    {
      name: "Number",
      selector: (row) => row?.contact_no,
      sortable: true,
   },
    {  
      name: "Agent",
      selector: (row) => row?.agent_details[0]?.agent_name,
      sortable: true,
    },
    {
      name: "Service",
      selector: (row) => row?.service_details[0]?.product_service_name,
      sortable: true,
    },
    {
      name: "Lead Source",
      selector: (row) => row?.lead_source_details[0]?.lead_source_name,
      sortable: true,
     },
    {  
     name: "Followup date",
      selector: (row) => (row?.followup_date)+ row?.status_details['0']?.status_name,
      sortable: true,  
     },
  ]; 

  const getdatetimeformate=(datetime)=>{
    const dateObject = new Date(datetime);
    const formattedDate = `${dateObject.getFullYear()}-${padZero(dateObject.getMonth() + 1)}-${padZero(dateObject.getDate())} ${padZero(dateObject.getHours())}:${padZero(dateObject.getMinutes())}`;
    return formattedDate;
   
  }
  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  
  

  const exportToPDF = () => {
    
    const doc = new jsPDF();
    const tableDataForPDF = filterleads.map((row) =>
    columns.map((column) => {
          if (column.selector && typeof column.selector === 'function') {
        return column.selector(row);
      }
      return row[column.selector];
    })
  );

    

    

    doc.autoTable({
      head: [columns.map((column) => column.name)],
      body: tableDataForPDF,
    });
      doc.save('table.pdf');
  };

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


  const exportToExcel = () => {
    const columnsForExport = columns.map(column => ({
      title: column.name,
      dataIndex: column.selector,
    }));

    const dataForExport = filterleads.map(row =>
      columns.map(column => {
        if (column.selector && typeof column.selector === "function") {
          return column.selector(row);
        }
        return row[column.selector];
      })
    );

    const exportData = [columnsForExport.map(col => col.title), ...dataForExport];

    // Create a Blob from the data array and create an Excel file
    const blob = new Blob([exportData.map(row => row.join('\t')).join('\n')], {
      type: 'application/vnd.ms-excel',
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'table.xls';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  //if (leads.length === 0) {
   /// return <Loader />;
   //return  <p>No leads found.</p>;
 // }
   
  return (   
    <div>
      {status === false ? (
       <table id="example" className="table table-striped pt-3" style={{width: '100%'}}>
       <thead>
         <tr>
           <th>Full Name</th>
           <th>Number</th>
           <th>Agent</th>
           <th>Service</th>
           <th>Lead Source</th>
           <th>Status</th> 
         </tr> 
       </thead>
       <tbody>
         <tr>
        <p className="text-center">No Followup leads Founds</p>
         </tr>
      
       </tbody>
     </table>
      ) : (
        <>
        <button className="btn btn-sm btn-success" onClick={exportToPDF}>Export PDF</button>
        <button className="btn btn-sm btn-success" onClick={exportToExcel}>
        Export Excel
      </button>
        <DataTable
        responsive 
        id="table-to-export"
        columns={columns}
        data={filterleads}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="550px"
        selectableRows
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
  );
}
